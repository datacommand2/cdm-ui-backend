import axios from 'axios';
import env from '../config/index';
import { parseErrorMessage, returnError } from './common';
import EventCodeMessages from '../event-code/cdm_event_code_message.json' assert { type: 'json' };
import EventCode from '../event-code/cdm_event_code.json' assert { type: 'json' };
import { GraphQLError } from 'graphql';
import { CloudEvent } from 'src/graphql/cloud/__generated__/resolvers-types';

// 중복제거
// const _deleteDuplication = (data: any) => {
//   console.log(data);
//   if (!data) return data;

//   const uniqueData = data.filter(
//     (item: any, index: any, arr: any) =>
//       arr.findIndex(({ code }: { code: any }) => code === item.code) === index
//   );

//   return uniqueData;
// };

export const _handleAuth = async (req: any, body: any) => {
    try {
        const { data, status, headers } = await axios(`http://${env.API_SERVER_URL}${req.originalUrl}`, {
            method: 'post',
            data: body,
        });

        console.groupCollapsed('[API-GATEWAY 에서 받은 정보]');
        const responseTime = new Date();
        console.log(`>>> Response Time: ${responseTime}`);
        console.log('>>> Data', data);
        console.groupEnd();
        return { data, status, headers };
    } catch (error: any) {
        // return _handleApiError(error);
        return returnError(error.response);
    }
};

export const _handleNotificationEvents = (data: { events: CloudEvent[] }) => {
    // 화면에 뿌려주는 data
    const parseEvents = data.events.map((event: CloudEvent) => {
        // event.code를 brief로 바꿔서 리턴
        const code = EventCodeMessages.cdm_event_code_message.find(v => v.code === event.code);

        // solution, level, class_1, class_3 data
        const values = EventCode.cdm_event_code.find((v: any) => v.code === event.code);
        return {
            ...event,
            code: code?.detail ?? event.code,
            solution: values?.solution ?? '-',
            level: values?.level ?? null,
            class_1: values?.class_1 ?? '-',
            class_3: values?.class_3 ?? '-',
        };
    });

    return {
        ...data,
        events: parseEvents,
    };
};

export const _handleNotificationEventDetail = (data: { event: CloudEvent }) => {
    // 화면에 뿌려주는 data
    const code = EventCodeMessages.cdm_event_code_message.find(v => v.code === data.event.code);
    // solution, level, class_1, class_3 data
    const values = EventCode.cdm_event_code.find(v => v.code === data.event.code);
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
            event_error: parseErrorMessage(data.event?.error_code, data.event?.contents),
            contents: data.event?.contents ?? '-',
        },
    };
};

export const _handleReports = (data: any) => {
    const parsedData: any = data;

    const __parseCode = (reasons: any) => {
        return reasons.map((item: any) => {
            const code = EventCodeMessages.cdm_event_code_message.find(v => v.code === item.code);

            return {
                ...item,
                code: code?.detail ?? item.code,
            };
        });
    };

    const __parseFailedReason = (reasons: any) => {
        return reasons.map((item: any) => {
            if (!item.failed_reason) return item;

            const code = EventCodeMessages.cdm_event_code_message.find((v: any) => v.code === item.failed_reason.code);

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

export const _handleRecoveryGroupPlan = (data: any) => {
    const __parseCode = (reasons: any) => {
        return reasons.map((item: any) => {
            const code = EventCodeMessages.cdm_event_code_message.find(v => v.code === item.code);

            return {
                ...item,
                code: code?.detail ?? item.code,
            };
        });
    };

    const __parse = (value: any) => __parseCode(value);

    const parsedPlans = data.plans.map((plan: any) => {
        if (Object.keys(plan.abnormal_state_reasons).length <= 0) return plan;
        const keys = Object.keys(plan.abnormal_state_reasons);
        const plans = {
            ...plan,
            abnormal_state_reasons: {
                ...plan.abnormal_state_reasons,
            },
        };
        keys.forEach(key => {
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
export const getDataFromApiServer = async ({
    req,
    method,
    params,
    body,
}: {
    req: any;
    method: any;
    params?: any;
    body?: any;
}) => {
    // Handle login request
    if (req.originalUrl === '/identity/auth' && req.method === 'POST') return _handleAuth(req, body);

    // Handle other requests
    try {
        const session = req.headers['x-authenticated-session'];
        const tenantId = req.headers['x-tenant-id'];

        // 로그를 한 쌍으로 나오게 하는 방법
        // 1. 213 - 237 를 인스턴스로 만들어서 호출
        console.groupCollapsed('[CDM-UI-FRONTEND 에서 보내는 정보]');
        const requestTime = new Date();
        console.log(`>>> Request Time : ${requestTime}`);
        console.log(`>>> Request URL : [${req.method}] http://${env.API_SERVER_URL}${req.originalUrl}`);
        if (req.method !== 'GET') {
            console.log('>>> Body :', JSON.stringify(body, null, 2));
        }
        console.log('>>> Params :', params);
        console.groupEnd();

        const { data, status, headers } = await axios(`http://${env.API_SERVER_URL}${req.originalUrl}`, {
            method,
            headers: {
                'X-Tenant-Id': tenantId,
                'X-Authenticated-Session': session,
            },
            params,
            data: body,
        });

        console.groupCollapsed('[API-GATEWAY 에서 받은 정보]');
        const responseTime = new Date();
        console.log(`>>> Response Time: ${responseTime}`);
        console.log('>>> Data', data);
        console.groupEnd();

        // event 데이터는 여기서 변환해서 react로 전송해준다.
        if (status === 204) return { data: null, status: 204, headers };

        if (status === 200 || status === 201) {
            let parsedData: any = data;

            if (req.originalUrl === '/notification/events') {
                // 이벤트 목록이면
                // api call에 대한 message코드
                parsedData = _handleNotificationEvents(data);
            } else if (req.originalUrl.includes('/notification/events/')) {
                // 이벤트 상세조회
                // api call에 대한 message 코드
                parsedData = _handleNotificationEventDetail(data);
            } else if (req.originalUrl.includes('/reports/') && req.method === 'GET') {
                //  복구결과 상세
                parsedData = _handleReports(data);
            } else if (req.originalUrl.match(/^\/recovery\/groups\/\d{1,}\/plans$/g) && req.method === 'GET') {
                // 복구계획 목록 조회 일 때\
                parsedData = _handleRecoveryGroupPlan(data);
            }

            return { data: parsedData, status, headers };
        }
    } catch (error: any) {
        return returnError(error.response);
    }
};

// export const getSession = async (req: any) => {
//     if (process.env?.NODE_ENV === 'production') {
//         return {
//             tenantId: req.headers['x-tenant-id'],
//             session: req.headers['x-authenticated-session'],
//         };
//     }
//     const ret = await axios(`http://${env.API_SERVER_URL}/identity/auth`, {
//         method: 'post',
//         data: {
//             account: 'admin',
//             password: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
//             force: true,
//         },
//     });
//     // console.log(ret.data);
//     return { session: ret.data.user.session.key, tenantId: ret.data.user.tenant.id };
// };

export const requestApi = async ({
    context,
    originalUrl,
    method,
    params,
    data,
}: {
    context: any;
    originalUrl: string;
    method: string;
    params?: any;
    data?: any;
}) => {
    context.req.method = method.toUpperCase();
    context.req.originalUrl = originalUrl;
    context.req.headers = {
        'x-tenant-id': 1,
        'x-authenticated-session': context.req.headers['x-authenticated-session'],
    };

    // const { session, tenantId } = await getSession(context.req);
    // context.req.headers = {
    //     'x-tenant-id': tenantId,
    //     'x-authenticated-session': session,
    // };

    // 로그아웃 할 때 session 을 headers 로 전달
    if (originalUrl === '/identity/auth' && context.req.method === 'DELETE') {
        context.req.headers = {
            'x-tenant-id': 1,
            'x-authenticated-session': context.req.headers['x-authenticated-session'],
        };
    }

    const result = await getDataFromApiServer({ req: context.req, method, params, body: data });

    // if error is occurred then throw error
    // 200: OK, 201: Created, 204: No Content
    if (![200, 201, 204].includes(result?.status)) {
        throw new GraphQLError(result?.data?.message.error_message, {
            extensions: {
                code: 'NEVERSTOP_INTERNAL_ERROR',
                data: result?.data,
            },
        });
    }

    return result;
};
