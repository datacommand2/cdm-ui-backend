const axios = require('axios');
const env = require('../config/index');
const { parseErrorMessage, langMessageCode } = require('../utils/common');

const EventCodeMessages = require('../event-code/cdm_event_code_message.json');
const EventCode = require('../event-code/cdm_event_code.json');

// 중복제거
const _deleteDuplication = (data) => {
    console.log(data);
    if (!data) return data;

    const uniqueData = data.filter((item, index, arr) => arr.findIndex(({ code }) => code === item.code) === index);

    return uniqueData;
};

const _handleApiError = (error) => {
    if (!error?.response) {
        return { data: 'error occurred', status: 500, headers: 'headers' };
    }

    const [messageCode, errorCode] = error.response.data.message.code.split(':');
    const parsedMessageCode = langMessageCode(messageCode);
    const parsedErrorMessage = parseErrorMessage(errorCode, error.response.data.message?.contents);

    const data = {
        message: {
            originalCode: error.response.data.message.code,
            code: parsedMessageCode,
            contents: error.response.data.message?.contents ?? '-',
            error_message: parsedErrorMessage,
        },
    };

    return {
        data,
        status: error.response.status,
        headers: error.response.headers,
    };
};

const _handleAuth = async (req) => {
    try {
        const { data, status, headers } = await axios(`http://${env.API_SERVER_URL}${req.originalUrl}`, {
            method: 'post',
            data: req.body,
        });
        return { data, status, headers };
    } catch (error) {
        return _handleApiError(error);
    }
};

const _handleNotificationEvents = (data) => {
    const messageCode = EventCodeMessages.cdm_event_code_message.find((v) => v.code === data.message.code);
    // 화면에 뿌려주는 data
    const parseEvents = data.events.map((event) => {
        // event.code를 brief로 바꿔서 리턴
        const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === event.code);

        // solution, level, class_1, class_3 data
        const values = EventCode.cdm_event_code.find((v) => v.code === event.code);
        return {
            ...event,
            code: code?.detail ?? event.code,
            solution: values?.solution ?? '-',
            level: values?.level ?? '-',
            class_1: values?.class_1 ?? '-',
            class_3: values?.class_3 ?? '-',
        };
    });

    return {
        ...data,
        events: parseEvents,
        message: { ...data.message, code: messageCode.brief },
    };
};

const _handleNotificationEventDetail = (data) => {
    const messageCode = EventCodeMessages.cdm_event_code_message.find((v) => v.code === data.message.code);
    // 화면에 뿌려주는 data
    const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === data.event.code);
    // solution, level, class_1, class_3 data
    const values = EventCode.cdm_event_code.find((v) => v.code === data.event.code);
    // code를 brief로 변환
    return {
        ...data,
        event: {
            ...data.event,
            code: code?.detail ?? data.event?.code,
            solution: values?.solution ?? '-',
            level: values?.level ?? '-',
            class_1: values?.class_1 ?? '-',
            class_3: values?.class_3 ?? '-',
            event_error: parseErrorMessage(data.event?.event_error, data.event?.contents),
            contents: data.event?.event_error ?? '-',
        },
        message: { ...data.message, code: messageCode.brief },
    };
};

const _handleReports = (data) => {
    const parsedData = data;
    console.log(parsedData);

    const __parseCode = (reasons) => {
        return reasons.map((item) => {
            const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === item.code);

            return {
                ...item,
                code: code?.detail ?? item.code,
            };
        });
    };

    const __parseFailedReason = (reasons, field) => {
        return reasons.map((item) => {
            if (!item.failed_reason) return item;

            const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === item.failed_reason.code);

            return {
                ...item,
                failed_reason: {
                    ...item.failed_reason,
                    code: code?.detail ?? item.failed_reason.code,
                },
            };
        });
    };

    // 화면에 뿌려주는 data
    parsedData.report?.task_logs &&
        Object.assign(parsedData, {
            report: {
                ...parsedData.report,
                task_logs: __parseCode(parsedData.report.task_logs),
            },
        });

    // 실패 사유 이벤트 코드 변환
    parsedData.report?.failed_reasons &&
        Object.assign(parsedData, {
            report: {
                ...parsedData.report,
                failed_reasons: __parseCode(parsedData.report.failed_reasons),
            },
        });

    // 인스턴스 실패 사유 이벤트 코드 변환
    parsedData.report?.instances &&
        Object.assign(parsedData, {
            report: {
                ...parsedData.report,
                instances: __parseFailedReason(parsedData.report.instances),
            },
        });

    // 볼륨 실패 사유 이벤트 코드 변환
    parsedData.report?.volumes &&
        Object.assign(parsedData, {
            report: {
                ...parsedData.report,
                volumes: __parseFailedReason(parsedData.report.volumes),
            },
        });

    return parsedData;
};

const _handleRecoveryGroupPlan = (data) => {
    const __parseCode = (reasons) => {
        return reasons.map((item) => {
            const code = EventCodeMessages.cdm_event_code_message.find((v) => v.code === item.code);

            return {
                ...item,
                code: code?.detail ?? item.code,
            };
        });
    };

    const __parse = (value) => __parseCode(value);

    const parsedPlans = data.plans.map((plan) => {
        if (Object.keys(plan.abnormal_state_reasons).length <= 0) return plan;
        const keys = Object.keys(plan.abnormal_state_reasons);
        const plans = {
            ...plan,
            abnormal_state_reasons: {
                ...plan.abnormal_state_reasons,
            },
        };
        keys.forEach((key) => {
            plans.abnormal_state_reasons[key] = __parse(plans.abnormal_state_reasons[key]);
        });

        return plans;
    });

    return {
        ...data,
        plans: parsedPlans,
    };
};

// 모든 요청에 대해서 처리하는 함수
const getDataFromApiServer = async (req, method, body) => {
    // Handle login request
    if (req.originalUrl === '/identity/auth' && req.method === 'POST') return _handleAuth(req);

    // Handle other requests
    try {
        const session = req.headers['x-authenticated-session'];
        const tenantId = req.headers['x-tenant-id'];
        const { data, status, headers } = await axios(`http://${env.API_SERVER_URL}${req.originalUrl}`, {
            method,
            headers: {
                'X-Tenant-Id': tenantId,
                'X-Authenticated-Session': session,
            },
            data: body,
        });

        // event 데이터는 여기서 변환해서 react로 전송해준다.
        if (status === 204) return { data: null, status: 204, headers };

        if (status === 200 || status === 201) {
            let parsedData = data;

            if (req._parsedUrl.pathname === '/notification/events') {
                // 이벤트 목록이면
                // api call에 대한 message코드
                parsedData = _handleNotificationEvents(data);
            } else if (req._parsedUrl.pathname.includes('/notification/events/')) {
                // 이벤트 상세조회
                // api call에 대한 message 코드
                parsedData = _handleNotificationEventDetail(data);
            } else if (req._parsedUrl.pathname.includes('/reports/') && req.method === 'GET') {
                //  복구결과 상세
                parsedData = _handleReports(data, parsedData);
            } else if (req._parsedUrl.pathname.match(/^\/recovery\/groups\/\d{1,}\/plans$/g) && req.method === 'GET') {
                // 복구계획 목록 조회 일 때\
                parsedData = _handleRecoveryGroupPlan(data);
            }

            console.log(parsedData);
            return { data: parsedData, status, headers };
        }
    } catch (error) {
        return _handleApiError(error);
    }
};

module.exports = { getDataFromApiServer };
