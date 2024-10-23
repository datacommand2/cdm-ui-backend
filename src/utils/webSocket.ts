import WebSocket from 'ws';

import EventCodeMessages from '../event-code/cdm_event_code_message.json' assert { type: 'json' };
import env from '../config/index';
import { OpenStackDrRecoveryJobMonitorsResponse } from 'src/graphql/openStack_dr/__generated__/resolvers-types';

let monitorData: OpenStackDrRecoveryJobMonitorsResponse | undefined = undefined;
let wsJobMonitor: WebSocket | null;

export const OpenStackJobMonitoringSocket = ({
    groupId,
    jobId,
    sessionKey,
    tenantId,
    interval,
}: {
    groupId: number;
    jobId: number;
    sessionKey: string;
    tenantId: number;
    interval: number;
}): Promise<OpenStackDrRecoveryJobMonitorsResponse | undefined> => {
    return new Promise((resolve, reject) => {
        const url = `ws://${env.API_SERVER_URL}/recovery/groups/${groupId}/jobs/${jobId}/monitors?X-Authenticated-Session=${sessionKey}&X-Tenant-Id=${tenantId}&interval=${interval}`;

        if (!wsJobMonitor) {
            wsJobMonitor = new WebSocket(url);
        }
        // express - api 간의 소켓
        // express - api 간 소켓이 열렸을 때
        wsJobMonitor.onopen = () => {
            console.log('@@@@@@@@@@@@@@@@ recoveryJobMonitor Socket Open !!');
        };

        // express - api 간 소켓이 통신중일 때
        wsJobMonitor.onmessage = (value: WebSocket.MessageEvent) => {
            const data = JSON.parse(value.data.toString());
            console.groupCollapsed('[CDM-APIGATEWAY 에서 받은 정보 (SOCKET)]');
            const requestTime = new Date();
            console.log(`>>> Request Time : ${requestTime}`);
            console.log(`>>> Request URL : [GET]${url}`);
            console.log('>>> Body :', JSON.stringify(data, null, 2));
            console.log('>>> Body : GET DATA ....');
            console.groupEnd();

            // console.log(data);
            let parsedData;
            if (data?.status?.failed_reasons) {
                let parsedReasons = data?.status?.failed_reasons.map((reason: any) => {
                    const code = EventCodeMessages.cdm_event_code_message.find(v => v.code === reason.code);

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

            resolve({
                status: parsedData?.status || undefined,
                tenants: parsedData?.tenants || [],
                security_groups: parsedData?.security_groups || [],
                networks: parsedData?.networks || [],
                subnets: parsedData?.subnets || [],
                floating_ips: parsedData?.floating_ips || [],
                routers: parsedData?.routers || [],
                volumes: parsedData?.volumes || [],
                keypairs: parsedData?.keypairs || [],
                instance_specs: parsedData?.instance_specs || [],
                instances: parsedData?.instances || [],
            });

            wsJobMonitor?.close();
            wsJobMonitor = null;
        };

        // express - api 간 소켓에서 에러가 발생했을 때
        wsJobMonitor.onerror = (error: WebSocket.ErrorEvent) => {
            reject(error.message);

            wsJobMonitor?.close();
            wsJobMonitor = null;
        };

        // express - api 간 소켓이 닫혔을 때
        wsJobMonitor.onclose = () => {
            console.log('@@@@@@@@@@@@@ recoveryJobMonitor Socket Close ...');
            monitorData = undefined;
        };
    });
};
