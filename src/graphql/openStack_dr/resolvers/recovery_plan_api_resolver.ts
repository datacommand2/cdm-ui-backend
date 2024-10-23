import { requestApi } from '../../../utils/api';
import { OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum } from '../__generated__/enum_resolvers';

type RecoveryPointType =
    | 'DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST'
    | 'DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT'
    | 'DR_RECOVERY_RECOVERY_POINT_TYPE_SNAPSHOT';
export default {
    Query: {
        // 재해복구계획 목록 조회
        // @param Int groupId 보호그룹 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String name 보호그룹 이름
        // @return OpenStackDrRecoveryPlansResponse
        GetRecoveryPlans: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}/plans`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    name: args.name,
                },
            });

            return {
                plans: result?.data?.plans ?? [],
                pagination: result?.data?.pagination,
            };
        },

        // 재해복구계획 조회
        // @param Int groupId 보호그룹 ID
        // @param Int planId 재해복구계획 ID
        // @param Int groupSnapshotId 보호 그룹 스냅샷 ID
        // @return OpenStackDrRecoveryPlanResponse
        GetRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}/plans/${args.planId}`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    plan_id: args.planId,
                    group_snapshot_id: args.groupSnapshotId,
                },
            });

            return {
                plan: result?.data?.plan,
            };
        },

        // 하이퍼바이저 리소스 정보 조회
        // @param Int groupId 보호그룹 ID
        // @param Int planId 재해복구계획 ID
        // @param String recoveryPointTypeCode 복구 데이터 시점 유형
        // @param Int snapshotId 보호 그룹 스냅샷 ID
        // @return OpenStackDrHypervisorResourcesResponse
        GetHypervisor: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}/plans/${args.planId}/hypervisor-resources`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    plan_id: args.planId,
                    recovery_point_type_code:
                        OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum[
                            args.recoveryPointTypeCode as RecoveryPointType
                        ],
                    snapshot_id: args.snapshotId,
                },
            });

            return {
                hypervisor_resources: result?.data?.hypervisor_resources,
                usable: result?.data?.usable,
            };
        },
    },

    Mutation: {
        // 재해복구계획 삭제
        // @param Int groupId 보호그룹 ID
        // @param Int planId 재해복구계획 ID
        // @return OpenStackDrMessageResponse
        DeleteRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/plans/${args.input.planId}`,
                method: 'DELETE',
                params: {
                    group_id: args.input.groupId,
                    plan_id: args.input.planId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구계획 수정
        // @param Int groupId 보호그룹 ID
        // @param Int planId 재해복구계획 ID
        // @param OpenStackDrRecoveryPlanRequest openStackDrRecoveryPlanRequest
        // @return OpenStackDrRecoveryPlanResponse
        UpdateRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/plans/${args.input.planId}`,
                method: 'PATCH',
                data: args.input.openStackDrRecoveryPlanRequest,
            });

            return {
                plan: result?.data?.plan,
            };
        },

        // 재해복구계획 등록
        // @param Int groupId 보호그룹 ID
        // @param OpenStackDrRecoveryPlanRequest openStackDrRecoveryPlanRequest
        // @return OpenStackDrRecoveryPlanResponse
        CreateRecoveryPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/plans`,
                method: 'POST',
                data: args.input.openStackDrRecoveryPlanRequest,
            });

            return {
                plan: result?.data?.plan,
            };
        },
    },
};
