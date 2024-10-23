import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 보호그룹 history 조회
        // @return OpenStackDrHistoryResponse
        GetRecoveryReportHistory: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/history`,
                method: 'GET',
            });

            return {
                history: result?.data?.history,
                pagination: result?.data?.pagination,
            };
        },

        // 재해복구결과 보고서 목록 조회
        // @param Int groupId 보호그룹 ID
        // @param String groupName 보호그룹 Name
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param OpenStackDrRecoveryTypeEnum Type_ 복구 유형
        // @param OpenStackDrReportResultEnum result 복구 결과
        // @return OpenStackDrRecoveryResultReportsResponse
        GetRecoveryReports: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/history/${args.groupId}/reports/${args.groupName}/list`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    group_name: args.groupName,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    type: args.type,
                    result: args.result,
                },
            });

            return {
                reports: result?.data?.reports ?? [],
                pagination: result?.data?.pagination,
            };
        },

        // 재해복구결과 보고서 조회
        // @param Int groupId 보호그룹 ID
        // @param Int resultId 재해복구결과 보고서 ID
        // @return OpenStackDrRecoveryResultReportResponse
        GetRecoveryReport: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/history/${args.groupId}/reports/${args.resultId}/detail`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    result_id: args.resultId,
                },
            });

            return {
                report: result?.data?.report,
            };
        },
    },

    Mutation: {
        // 재해복구결과 보고서 삭제 (모의훈련)
        // @param Int groupId 보호그룹 ID
        // @param Int resultId 재해복구결과 보고서 ID
        // @return OpenStackDrMessageResponse
        DeleteRecoveryReport: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/history/${args.input.groupId}/reports/${args.input.resultId}`,
                method: 'DELETE',
                params: {
                    group_id: args.input.groupId,
                    result_id: args.input.resultId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },
    },
};
