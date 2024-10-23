import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 보호그룹 목록 조회
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param Int protectionClusterId 보호대상 클러스터 ID
        // @param OpenStackDrProtectionClusterTypeCodeEnum protectionClusterTypeCode 보호대상 클러스터 종류
        // @param Int ownerGroupId 보호그룹 원본 클러스터의 Owner 그룹 ID
        // @param String name 보호그룹 이름
        // @return OpenStackDrProtectionGroupsResponse
        GetProtectionGroups: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    protection_cluster_id: args.protectionClusterId,
                    protection_cluster_type_code: args.protectionClusterTypeCode,
                    owner_group_id: args.ownerGroupId,
                    name: args.name,
                },
            });

            return {
                groups: result?.data?.groups ?? [],
                pagination: result?.data?.pagination,
            };
        },

        // 보호그룹 조회
        // @param Int groupId 보호그룹 ID
        // @return OpenStackDrProtectionGroupResponse
        GetProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                },
            });

            return {
                group: result?.data?.group,
            };
        },

        // 보호그룹 스냅샷 목록 조회
        // @param Int groupId 보호그룹 ID
        // @return OpenStackDrSnapshotsResponse
        GetProtectionGroupSnapshot: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}/snapshots`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                },
            });

            return {
                snapshots: result?.data?.snapshots ?? [],
            };
        },

        // 클러스터 비보호 인스턴스 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Int clusterAvailabilityZoneId 클러스터 가용구역 ID
        // @param Int clusterHypervisorId 클러스터 Hypervisor ID
        // @param String name 인스턴스 이름
        // @return OpenStackDrInstancesResponse
        GetUnprotectedInstances: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/unprotected-instances`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    cluster_availability_zone_id: args.clusterAvailabilityZoneId,
                    cluster_hypervisor_id: args.clusterHypervisorId,
                    name: args.name,
                },
            });

            return {
                instances: result?.data?.instances ?? [],
                pagination: result?.data?.pagination,
            };
        },
    },

    Mutation: {
        // 보호그룹 삭제
        // @param Int groupId 보호그룹 ID
        // @return OpenStackDrMessageResponse
        DeleteProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}`,
                method: 'DELETE',
                params: {
                    group_id: args.input.groupId,
                },
            });

            return {
                message: result?.data.message,
            };
        },

        // 보호그룹 수정
        // @param Int groupId 보호그룹 ID
        // @param OpenStackDrProtectionGroupRequest openStackDrProtectionGroupRequest
        // @return OpenStackDrProtectionGroupResponse
        UpdateProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}`,
                method: 'PATCH',
                data: args.input.openStackDrProtectionGroupRequest,
            });

            return {
                group: result?.data.group,
            };
        },

        // 보호그룹 스냅샷 추가
        // @param Int groupId 보호그룹 ID
        // @return OpenStackDrSnapshotMessageResponse
        CreateProtectionGroupSnapshot: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/snapshots`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                },
            });

            return {
                message: result?.data.message,
            };
        },

        // 보호그룹 등록
        // @param OpenStackDrProtectionGroupRequest openStackDrProtectionGroupRequest
        // @return OpenStackDrProtectionGroupResponse
        CreateProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups`,
                method: 'POST',
                data: args.input.openStackDrProtectionGroupRequest,
            });

            return {
                group: result?.data.group,
            };
        },
    },
};
