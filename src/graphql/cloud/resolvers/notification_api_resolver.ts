import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 이벤트 상세 조회
        // @param Int eventId 이벤트 ID
        // @return CloudEventResponse
        GetEvent: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/notification/events/${args.eventId}`,
                method: 'GET',
                params: {
                    event_id: args.eventId,
                },
            });

            return {
                event: result?.data.event,
            };
        },

        // 이벤트 코드 분류 목록 조회
        // @return CloudEventClassificationsResponse
        GetEventClasses: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/notification/event-classifications`,
                method: 'GET',
            });

            return {
                event_classifications: result?.data.event_classifications,
            };
        },

        // 이벤트 목록 조회
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String solution 솔루션 이름
        // @param String class1 이벤트 대분류
        // @param String class2 이벤트 중분류
        // @param String class3 이벤트 소분류
        // @param CloudLogLevelEnum level 이벤트 레벨
        // @param Int startDate 이벤트 발생일 범위 시작일시 (YYYYMMDDHHmm)
        // @param Int endDate 이벤트 발생일 범위 종료일시 (YYYYMMDDHHmm)
        // @return CloudEventsResponse
        GetEvents: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/notification/events`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    solution: args.solution ?? undefined,
                    class_1: args.class1 ?? undefined,
                    class_2: args.class2 ?? undefined,
                    class_3: args.class3 ?? undefined,
                    level: args.level ?? '',
                    start_date: args.startDate ?? undefined,
                    end_date: args.endDate ?? undefined,
                },
            });

            return {
                events: result?.data?.events ?? [],
                pagination: result?.data?.pagination,
            };
        },

        // ! NOTE : Socket API
        // 신규 이벤트 실시간 조회 (WebSocket 프로토콜 지원)
        // 테넌트의 신규 이벤트를 실시간으로 조회한다.
        // @param Int interval WebSocket 데이터 수신 간격 (sec)
        // @param String solution 솔루션 이름
        // @param String class1 이벤트 대분류
        // @param String class2 이벤트 중분류
        // @param String class3 이벤트 소분류
        // @param CloudLogLevelEnum level 이벤트 레벨
        // @return CloudStreamEventsResponse
        // GetMonitorEvents: async (_: any, args: any, context: any) => {
        //     return {
        //         interval: '56',
        //         solution: 'solution_example',
        //         class1: 'class1_example',
        //         class2: 'class2_example',
        //         class3: 'class3_example',
        //         level: '',
        //     };
        // },

        // 이벤트 설정 조회
        // 테넌트의 이벤트 설정을 조회한다.
        // @return CloudEventConfigResponse
        GetNotificationConfig: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/notification/config`,
                method: 'GET',
            });

            return {
                event_config: result?.data.event_config,
            };
        },

        // 이벤트 수신 여부 조회 (테넌트)
        // 특정 테넌트의 모든 이벤트 수신 여부를 조회한다.
        // @param String solution 솔루션 이름
        // @param String class1 이벤트 대분류
        // @param String class2 이벤트 중분류
        // @param String class3 이벤트 소분류
        // @param CloudLogLevelEnum level 이벤트 레벨
        // @return CloudEventNotificationResponse
        GetTenantEventReceives: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/notification/config/receivers/tenant`,
                method: 'GET',
                params: {
                    solution: args.solution ?? undefined,
                    class_1: args.class1 ?? undefined,
                    class_2: args.class2 ?? undefined,
                    class_3: args.class3 ?? undefined,
                    level: args.level ?? undefined,
                },
            });

            return {
                event_notifications: result?.data.event_notifications,
            };
        },

        // 이벤트 수신 여부 조회 (사용자)
        // 사용자의 모든 이벤트 수신 여부를 조회한다.
        // @param String solution 솔루션 이름
        // @param String class1 이벤트 대분류
        // @param String class2 이벤트 중분류
        // @param String class3 이벤트 소분류
        // @param CloudLogLevelEnum level 이벤트 레벨
        // @return CloudEventNotificationResponse
        GetUserEventReceives: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/notification/config/receivers/user`,
                method: 'GET',
                params: {
                    solution: args.solution ?? undefined,
                    class_1: args.class1 ?? undefined,
                    class_2: args.class2 ?? undefined,
                    class_3: args.class3 ?? undefined,
                    level: args.level ?? undefined,
                },
            });

            return {
                event_notifications: result?.data.event_notifications,
            };
        },
    },

    // TODO: 기능 미구현 상태
    Mutation: {
        // 이벤트 수신 여부 초기화 (사용자)
        // 사용자의 이벤트 수신 여부를 초기화한다.
        // @return Boolean
        // ResetUserEventReceives: async (_: any, args: any, context: any) => {
        //     return {};
        // },
        // 이벤트 설정 변경
        // @param CloudEventConfigRequest eventConfigRequest
        // @return CloudEventConfigResponse
        // UpdateNotificationConfig: async (_: any, args: any, context: any) => {
        //     return {
        //         eventConfigRequest: '',
        //     };
        // },
        // 이벤트 수신 여부 변경 (테넌트)
        // 특정 테넌트의 이벤트 수신 여부를 변경한다.
        // @param CloudEventNotificationRequest eventNotificationRequest
        // @return Boolean
        // UpdateTenantEventReceives: async (_: any, args: any, context: any) => {
        //     return {
        //         eventNotificationRequest: '',
        //     };
        // },
        // 이벤트 수신 여부 변경 (사용자)
        // 사용자의 이벤트 수신 여부를 변경한다.
        // @param CloudEventNotificationRequest eventNotificationRequest
        // @return Boolean
        // UpdateUserEventReceives: async (_: any, args: any, context: any) => {
        //     return {
        //         eventNotificationRequest: '',
        //     };
        // },
    },
};
