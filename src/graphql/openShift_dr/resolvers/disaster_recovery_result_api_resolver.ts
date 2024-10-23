import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 재해복구결과 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryResultResourceName RecoveryResult CR 의 Name
        // @return OpenShiftDrRecoveryResultResponse
        GetRecoveryResult: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-results/${args.recoveryResultResourceName}`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_result_resource_name: args.recoveryResultResourceName,
                },
            });

            return {
                recovery_result: result?.data?.recovery_result,
            };
        },

        // 재해복구결과 목록 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @return OpenShiftDrRecoveryResultsResponse
        GetRecoveryResults: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-results`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                recovery_results: result?.data?.recovery_results ?? [],
            };
        },
    },

    Mutation: {
        // 재해복구결과 삭제
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryResultResourceName RecoveryResult CR 의 Name
        // @return Boolean
        DeleteRecoveryResult: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-results/${args.input.recoveryResultResourceName}`,
                method: 'DELETE',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_result_resource_name: args.input.recoveryResultResourceName,
                },
            });

            return Boolean(result?.data);
        },
    },
};
