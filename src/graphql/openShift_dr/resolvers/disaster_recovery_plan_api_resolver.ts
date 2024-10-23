import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 재해복구계획의 복구정보 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryPlanResourceName RecoveryPlan CR 의 Name
        // @return OpenShiftDrRecoveryInfoResponse
        GetRecoveryInfo: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-plans/${args.recoveryPlanResourceName}/info`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_plan_resource_name: args.recoveryPlanResourceName,
                },
            });

            return {
                recovery_info: result?.data?.recovery_info,
            };
        },

        // 재해복구계획 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryPlanResourceName RecoveryPlan CR 의 Name
        // @return OpenShiftDrRecoveryPlanResponse
        GetRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-plans/${args.recoveryPlanResourceName}`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_plan_resource_name: args.recoveryPlanResourceName,
                },
            });

            return {
                recovery_plan: result?.data?.recovery_plan,
            };
        },

        // 재해복구계획 상태 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryPlanResourceName RecoveryPlan CR 의 Name
        // @return OpenShiftDrRecoveryPlanStatusResponse
        GetRecoveryPlanStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-plans/${args.recoveryPlanResourceName}/status`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_plan_resource_name: args.recoveryPlanResourceName,
                },
            });

            return {
                recovery_plan_status: result?.data?.recovery_plan_status,
                replication_info_status: result?.data?.replication_info_status,
            };
        },

        // 재해복구계획 목록 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @return OpenShiftDrRecoveryPlansResponse
        GetRecoveryPlans: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-plans`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                recovery_plans: result?.data?.recovery_plans ?? [],
            };
        },
    },

    Mutation: {
        // 재해복구계획 등록
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param OpenShiftDrRecoveryPlanRequest openShiftDrRecoveryPlanRequest
        // @return OpenShiftDrRecoveryPlanResponse
        CreateRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-plans`,
                method: 'POST',
                data: args.input.openShiftDrRecoveryPlanRequest,
            });

            return {
                recovery_plan: result?.data?.recovery_plan,
            };
        },

        // 재해복구계획 삭제
        // 설명추가
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryPlanResourceName RecoveryPlan CR 의 Name
        // return Boolean
        DeleteRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-plans/${args.input.recoveryPlanResourceName}`,
                method: 'DELETE',
            });

            return Boolean(result?.data);
        },

        // 재해복구계획 수정
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryPlanResourceName RecoveryPlan CR 의 Name
        // @param OpenShiftDrRecoveryPlanRequest openShiftDrRecoveryPlanRequest
        // @return OpenShiftDrRecoveryPlanResponse
        UpdateRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-plans/${args.input.recoveryPlanResourceName}`,
                method: 'PATCH',
                data: args.input.recoveryPlanRequest,
            });

            return {
                recovery_plan: result?.data.recovery_plan,
            };
        },
    },
};
