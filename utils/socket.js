const WebSocket = require('ws');
const io = require('socket.io')();

const EventCodeMessages = require('../event-code/cdm_event_code_message.json');
const EventCode = require('../event-code/cdm_event_code.json');
const socketApi = { io };
const env = require('../config/index');

const eventNsp = io.of('/events');
const monitoringNsp = io.of('/monitoring');

eventNsp.on('connection', (socket) => {
    let wsNewEvents;
    socket.on('newEvents', (data) => {
        const url = `ws://${env.API_SERVER_URL}/notification/monitor?X-Authenticated-Session=${data.session}&X-Tenant-Id=${data.tenant}&interval=${data.interval}`;
        // express - api 간의 소켓 인스턴스 생성
        // 새로고침 할 때마다 새로운 웹 소켓 인스턴스 생성
        //
        wsNewEvents = new WebSocket(url);
        // express - api 간 소켓이 열렸을 때
        wsNewEvents.onopen = () => {
            console.log('newEvent Socket Open@@@');
        };

        // express - api 간 소켓이 통신중일 때
        wsNewEvents.onmessage = (value) => {
            const data1 = JSON.parse(value.data.toString());

            const parsedEvents = data1.events.map((event) => {
                // 해당하는 code를 json에서 찾음
                const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === event.code);

                // level data 추가
                const values = EventCode.cdm_event_code.find((v) => v.code === event.code);
                //
                return {
                    ...event,
                    code: code?.detail ?? event.code,
                    level: values?.level ?? '',
                    isRead: false,
                };
            });
            const parsedData = {
                events: parsedEvents,
            };
            if (data1) {
                socket.emit('newEvents', parsedData);
            }
        };

        // express - api 간 소켓에서 에러가 발생했을 때
        wsNewEvents.onerror = (error) => {
            socket.emit('conntect_error', error.message);
            console.log(error.message);
        };

        // express - api 간 소켓이 닫혔을 때
        wsNewEvents.onclose = () => {
            socket.emit('forceDisconnect', () => {
                console.log('diconnect');
                // express - api socket도 disconnect
            });
            console.log(`server - api gateway socket close ...`);
        };
    });
    socket.conn.on('close', (reason) => {
        // 새로고침 하면 이 함수가 실행되기는 함.
        if (wsNewEvents !== null) {
            console.log('websocket close');
            wsNewEvents.close();
        }
        console.log('connection close');
    });
    socket.on('end', () => {
        console.log('socket disconnect');
        socket.disconnect();
    });
});

monitoringNsp.on('connection', (socket) => {
    console.log('client - server socket open @@');
    let wsJobMonitor = null;
    socket.conn.on('close', (reason) => {
        console.log('success disconnect socket (react - express)');
        if (wsJobMonitor !== null) {
            console.log('4. close wsJobMonitor(express - api gateway)');
            wsJobMonitor.close();
        }
    });
    socket.on('monitoringEnd', () => {
        socket.disconnect();
    });

    // 재해복구작업 모니터링
    socket.on('recoveryJobMonitor', (data) => {
        const url = `ws://${env.API_SERVER_URL}/recovery/groups/${data.groupID}/jobs/${data.jobID}/monitors?X-Authenticated-Session=${data.session}&X-Tenant-Id=${data.tenant}&interval=${data.interval}`;
        // express - api 간의 소켓
        wsJobMonitor = new WebSocket(url);
        // express - api 간 소켓이 열렸을 때
        wsJobMonitor.onopen = () => {
            console.log('@@@@@@@@@@@@@@@@ recoveryJobMonitor Socket Open !!');
        };
        // express - api 간 소켓이 통신중일 때
        wsJobMonitor.onmessage = (value) => {
            const data = JSON.parse(value.data.toString());
            console.log(data);
            let parsedData;
            if (data?.status?.failed_reasons) {
                let parsedReasons = data?.status?.failed_reasons.map((reason) => {
                    const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === reason.code);

                    return {
                        ...reason,
                        code: code?.detail ?? reason.code,
                    };
                });
                parsedData = {
                    ...data,
                    status: {
                        ...data.status,
                        failed_reasons: parsedReasons,
                    },
                };
            } else {
                parsedData = data;
            }

            socket.emit('recoveryJobMonitor', parsedData);
        };

        // express - api 간 소켓에서 에러가 발생했을 때
        wsJobMonitor.onerror = (error) => {
            console.log(error);
            socket.emit('recoveryJobMonitor', error.message);
        };

        // express - api 간 소켓이 닫혔을 때
        wsJobMonitor.onclose = () => {
            console.log('@@@@@@@@@@@@@ recoveryJobMonitor Socket Close ...');
        };
    });
});

module.exports = socketApi;
