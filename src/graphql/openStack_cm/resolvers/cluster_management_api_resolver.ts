import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 클러스터 가용구역 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterAvailabilityZoneId 클러스터 가용구역 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmAvailabilityZoneResponse
        GetAvailabliltyZone: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/availability-zones/${args.clusterAvailabilityZoneId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_availability_zone_id: args.clusterAvailabilityZoneId,
                },
            });

            return {
                availability_zone: result?.data?.availability_zone,
            };
        },

        // 클러스터 가용구역 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmAvailabilityZonesResponse
        GetAvailabilityZones: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/availability-zones`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    cluster_id: args.clusterId,
                },
            });

            return {
                availability_zones: result?.data?.availability_zones ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 상태 확인
        // @param Int clusterId 클러스터 ID
        // @return OpenStackCmCheckClusterInfoResponse
        GetClusterStatusCheck: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/check`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                },
            });

            return {
                computes: result?.data?.computes,
                storages: result?.data?.storages,
                networks: result?.data?.networks,
                status: result?.data?.status,
                updated_at: result?.data?.updated_at,
                compute_error: result?.data?.compute_error,
                storage_error: result?.data?.storage_error,
                network_error: result?.data?.network_error,
            };
        },

        // Config 조회
        // @param Int clusterId 클러스터 ID
        // @return OpenStackCmConfigInfoResponse
        GetConfig: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/config`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                },
            });

            return {
                config: result?.data?.config,
            };
        },

        // 클러스터 FloatingIP 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterFloatingIpId 클러스터 FloatingIP ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmFloatingIpResponse
        GetFloatingIp: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/floating-ips/${args.clusterFloatingIpId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_floating_ip_id: args.clusterFloatingIpId,
                    sync: args.sync,
                },
            });

            return {
                floating_ip: result?.data?.floating_ip,
            };
        },

        // 클러스터 조회
        // @param Int clusterId 클러스터 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmClusterResponse
        GetCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    sync: args.sync,
                },
            });

            return {
                cluster: result?.data?.cluster,
            };
        },

        // 클러스터 Hypervisor 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterHypervisorId 클러스터 Hypervisor ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmHypervisorResponse
        GetHypervisor: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/hypervisors/${args.clusterHypervisorId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_hypervisor_id: args.clusterHypervisorId,
                },
            });

            return {
                hypervisor: result?.data?.hypervisor,
            };
        },

        // 클러스터 Hypervisor 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String hostname 클러스터 Hypervisor 호스트네임
        // @param String ipAddress 클러스터 Hypervisor IP 주소
        // @param Int clusterAvailabilityZoneId 클러스터 가용구역 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmHypervisorsResponse
        GetHypervisors: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/hypervisors`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_availability_zone_id: args.clusterAvailabilityZoneId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    hostname: args.hostname,
                    ipAddress: args.ipAddress,
                },
            });

            return {
                hypervisors: result?.data?.hypervisors ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 인스턴스 Spec 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterInstanceSpecId 클러스터 인스턴스 Spec ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmInstanceSpecResponse
        GetInstanceSpec: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/instance-specs/${args.clusterInstanceSpecId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_instance_spec_id: args.clusterInstanceSpecId,
                },
            });

            return {
                spec: result?.data?.spec,
            };
        },

        // 클러스터 인스턴스 Spec 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param String name 클러스터 이름
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmInstanceSpecsResponse
        GetInstanceSpecs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/instance-specs`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    uuid: args.uuid,
                    name: args.name,
                    sync: args.sync,
                },
            });

            return {
                specs: result?.data?.specs ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 인스턴스 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterInstanceId 클러스터 인스턴스 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmInstanceResponse
        GetInstance: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/instances/${args.clusterInstanceId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_instance_id: args.clusterInstanceId,
                    sync: args.sync,
                },
            });

            return {
                instance: result?.data?.instance,
            };
        },

        // 클러스터 인스턴스 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Int clusterHypervisorId 클러스터 Hypervisor ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param Int clusterAvailabilityZoneId 클러스터 가용구역 ID
        // @param Int clusterVolumeId 클러스터 볼륨 ID
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param String name 클러스터 이름
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmInstancesResponse
        GetInstances: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/instances`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    cluster_hypervisor_id: args.clusterHypervisorId,
                    cluster_availability_zone_id: args.clusterAvailabilityZoneId,
                    cluster_volume_id: args.clusterVolumeId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    uuid: args.uuid,
                    name: args.name,
                    sync: args.sync,
                },
            });

            return {
                instances: result?.data?.instances ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 KeyPair 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterKeypairId 클러스터 KeyPair ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmKeyPairResponse
        GetKeypair: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/keypairs/${args.clusterKeypairId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_keypair_id: args.clusterKeypairId,
                    sync: args.sync,
                },
            });

            return {
                keypair: result?.data?.keypair,
            };
        },

        // 클러스터 네트워크 조회
        // cluster_network_id 는 private network 의 id 이다. 설명추가
        // @param Int clusterId 클러스터 ID
        // @param Int clusterNetworkId 클러스터 네트워크 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmNetworkResponse
        GetNetwork: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/networks/${args.clusterNetworkId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_network_id: args.clusterNetworkId,
                    sync: args.sync,
                },
            });

            return {
                network: result?.data?.network,
            };
        },

        // 클러스터 네트워크 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param Boolean externalOnly 외부 네트워크만 조회
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmNetworksResponse
        GetNetworks: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/networks`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    uuid: args.uuid,
                    external_only: args.externalOnly,
                    sync: args.sync,
                },
            });

            return {
                networks: result?.data?.networks ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 네트워크 라우터 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterRouterId 클러스터 네트워크 라우터 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmRouterResponse
        GetRouter: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/routers/${args.clusterRouterId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_router_id: args.clusterRouterId,
                    sync: args.sync,
                },
            });

            return {
                router: result?.data?.router,
            };
        },
        // 클러스터 네트워크 라우터 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Int clusterNetworkId 클러스터 네트워크 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmRoutersResponse
        GetRouters: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/routers`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    cluster_network_id: args.clusterNetworkId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    uuid: args.uuid,
                    sync: args.sync,
                },
            });

            return {
                routers: result?.data?.routers ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 보안그룹 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterSecurityGroupId 클러스터 보안그룹 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmSecurityGroupResponse
        GetSecurityGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/security-groups/${args.clusterSecurityGroupId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_security_group_id: args.clusterSecurityGroupId,
                    sync: args.sync,
                },
            });

            return {
                security_group: result?.data?.security_group,
            };
        },

        // 클러스터 보안그룹 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Int clusterInstanceId 클러스터 인스턴스 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmSecurityGroupsResponse
        GetSecurityGroups: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/security-groups`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    cluster_instance_id: args.clusterInstanceId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    uuid: args.uuid,
                    sync: args.sync,
                },
            });

            return {
                security_groups: result?.data?.security_groups ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 볼륨타입 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterStorageId 클러스터 볼륨타입 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmStorageResponse
        GetStorage: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/storages/${args.clusterStorageId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_storage_id: args.clusterStorageId,
                    sync: args.sync,
                },
            });

            return {
                storage: result?.data?.storage,
            };
        },

        // 클러스터 볼륨타입 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param OpenStackCmClusterTypeCodeEnum typeCode 클러스터 종류
        // @param String name 클러스터 이름
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmStoragesResponse
        GetStorages: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/storages`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    typeCode: args.typeCode,
                    name: args.name,
                    sync: args.sync,
                },
            });

            return {
                storages: result?.data?.storages ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 서브넷 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterSubnetId 클러스터 서브넷 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmSubnetResponse
        GetSubnet: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/subnets/${args.clusterSubnetId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_subnet_id: args.clusterSubnetId,
                    sync: args.sync,
                },
            });

            return {
                subnet: result?.data?.subnet,
            };
        },

        // 클러스터 동기화 상태 조회
        // 클러스터의 동기화 상태를 조회한다.
        // @return OpenStackCmSyncClusterStatusResponse
        GetClusterSyncStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/sync-status`,
                method: 'GET',
            });

            return {
                id: result?.data?.id,
                status: result?.data?.status,
                progress: result?.data?.progress,
                completion: result?.data?.completion,
                reasons: result?.data?.reasons,
            };
        },

        // 클러스터 테넌트 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmTenantResponse
        GetTenant: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/tenants/${args.clusterTenantId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    sync: args.sync,
                },
            });

            return {
                tenant: result?.data?.tenant,
            };
        },

        // 클러스터 테넌트 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmTenantsResponse
        GetTenants: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/tenants`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    uuid: args.uuid,
                    sync: args.sync,
                },
            });

            return {
                tenants: result?.data?.tenants ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 인스턴스 User Script 조회
        // @param Int clusterInstanceId 클러스터 인스턴스 ID
        // @return OpenStackCmUserScriptResponse
        GetUserscript: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/user-scripts/${args.clusterInstanceId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_instance_id: args.clusterInstanceId,
                    sync: args.sync,
                },
            });

            return {
                user_data: result?.data?.user_data,
                message: result?.data?.message,
            };
        },

        // 클러스터 볼륨 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterVolumeId 클러스터 볼륨 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmVolumeResponse
        GetVolume: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/volumes/${args.clusterVolumeId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_volume_id: args.clusterVolumeId,
                    sync: args.sync,
                },
            });

            return {
                volume: result?.data?.volume,
            };
        },

        // 클러스터 볼륨 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int clusterTenantId 클러스터 테넌트 ID
        // @param Int clusterInstanceId 클러스터 인스턴스 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param Int clusterStorageId 클러스터 볼륨타입 ID
        // @param String uuid 클러스터에서의 테넌트 ID
        // @param String name 클러스터 이름
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmVolumesResponse
        GetVolumes: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.clusterId}/volumes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    cluster_tenant_id: args.clusterTenantId,
                    cluster_instance_id: args.clusterInstanceId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    cluster_storage_id: args.clusterStorageId,
                    uuid: args.uuid,
                    name: args.name,
                    sync: args.sync,
                },
            });

            return {
                volumes: result?.data?.volumes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 목록 조회
        // 설명추가
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param OpenStackCmClusterTypeCodeEnum typeCode 클러스터 종류
        // @param String name 클러스터 이름
        // @param Int ownerGroupId Owner 그룹 ID
        // @param Boolean sync 오픈스택 정보 동기화
        // @return OpenStackCmClustersResponse
        GetClusters: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    type_code: args.typeCode ?? undefined,
                    name: args.name ?? undefined,
                    owner_group_id: args.ownerGroupId ?? undefined,
                    sync: args.sync ?? undefined,
                },
            });

            return {
                clusters: result?.data?.clusters ?? [],
                message: result?.data?.message,
                pagination: result?.data?.pagination,
            };
        },

        // @return OpenStackCmPublicKeyResponse
        GetPublickey: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/pbkey`,
                method: 'GET',
            });

            return {
                key: result?.data?.key,
            };
        },
    },

    Mutation: {
        // 클러스터 연결 확인
        // @param ClusterConnectionInfoRequest openStackCmClusterConnectionInfoRequest
        // @return MessageResponse
        CheckClusterConnectionStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/check`,
                method: 'POST',
                data: args.input.openStackCmClusterConnectionInfoRequest,
            });
            return {
                message: result?.data?.message,
            };
        },

        // Config 수정
        // @param Int clusterId 클러스터 ID
        // @param ConfigInfoRequest openStackCmConfigInfoRequest 클러스터의 Config
        // @return MessageResponse
        UpdateConfig: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/config`,
                method: 'PATCH',
                data: args.input.openStackCmConfigInfoRequest,
            });

            return {
                message: result?.data?.message,
            };
        },

        // 인증 정보 수정
        // 클러스터에 연결하기위한 인증 정보 수정
        // @param Int clusterId 클러스터 ID
        // @param CredentialRequest openStackCmCredentialRequest
        // @return MessageResponse
        UpdateCrendential: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/credential`,
                method: 'PATCH',
                data: args.input.openStackCmCredentialRequest,
            });
            return {
                message: result?.data?.message,
            };
        },

        // 클러스터 제거
        // @param Int clusterId 클러스터 ID
        // @return MessageResponse
        DeleteCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}`,
                method: 'DELETE',
                params: {
                    cluster_id: args.input.clusterId,
                },
            });
            return {
                message: result?.data?.message,
            };
        },

        // 클러스터 Hypervisor 추가정보 수정
        // @param Int clusterId 클러스터 ID
        // @param Int clusterHypervisorId 클러스터 Hypervisor ID
        // @param HypervisorRequest openStackCmHypervisorRequest
        // @return HypervisorResponse
        PutHypervisor: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/hypervisors/${args.input.clusterHypervisorId}`,
                method: 'PUT',
                data: args.input.openStackCmHypervisorRequest,
            });

            return {
                hypervisor: result?.data?.hypervisor,
            };
        },

        // 클러스터 수정
        // @param Int clusterId 클러스터 ID
        // @param ClusterRequest openStackCmClusterRequest
        // @return ClusterResponse
        UpdateCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}`,
                method: 'PATCH',
                data: args.input.openStackCmClusterRequest,
            });

            return {
                cluster: result?.data?.cluster,
            };
        },

        // 클러스터 볼륨타입 메타데이터 수정
        // @param Int clusterId 클러스터 ID
        // @param Int clusterStorageId 클러스터 볼륨타입 ID
        // @param MetadataRequest openStackCmMetadataRequest
        // @return MetadataResponse
        UpdateMetadata: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/storages/${args.input.clusterStorageId}`,
                method: 'PATCH',
                data: args.input.openStackCmMetadataRequest,
            });

            return {
                metadata: result?.data?.metadata,
            };
        },

        // 클러스터 상태 예외 서비스
        // @param Int clusterId 클러스터 ID
        // @param SyncExceptionInfoRequest openStackCmSyncExceptionInfoRequest
        // @return MessageResponse
        UpdateClusterSyncException: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/sync-exception`,
                method: 'POST',
                data: args.input.openStackCmSyncExceptionInfoRequest,
            });

            return {
                message: result?.data?.message,
            };
        },

        // 클러스터 동기화
        // @return MessageResponse
        UpdateClusterSync: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/sync`,
                method: 'POST',
                params: {
                    cluster_id: args.input.clusterId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 인스턴스 User Script 수정
        // @param Int clusterInstanceId 클러스터 인스턴스 ID
        // @param UserScriptRequest openStackCmUserScriptRequest
        // @return MessageResponse
        UpdateUserscript: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters/${args.input.clusterId}/user-scripts/${args.input.clusterInstanceId}`,
                method: 'PATCH',
                data: args.input.openStackCmUserScriptRequest,
            });

            return {
                message: result?.data?.message,
            };
        },

        // 클러스터 등록
        // @param ClusterRequest openStackCmClusterRequest
        // @return ClusterResponse
        CreateCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/management/clusters`,
                method: 'POST',
                data: args.input.openStackCmClusterRequest,
            });

            return {
                cluster: result?.data?.cluster,
            };
        },
    },
};
