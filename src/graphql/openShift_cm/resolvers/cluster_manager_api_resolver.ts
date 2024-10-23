import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 클러스터 조회
        // @param Int clusterId 클러스터 ID
        // @return OpenShiftCmClusterResponse
        GetCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}`,
                method: 'GET',
            });

            return {
                cluster: result?.data?.cluster ?? null,
                status_manager: result?.data?.status_manager ?? null,
            };
        },

        // 클러스터 목록 조회
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param OpenShiftCmClusterTypeCodeEnum typeCode 클러스터 종류
        // @param Int ownerGroupId Owner 그룹 ID
        // @return OpenShiftCmClustersResponse
        GetClusters: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    type_code: args.typeCode ?? undefined,
                    owner_group_id: args.ownerGroupId ?? undefined,
                },
            });

            return {
                clusters: result?.data?.clusters ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 CRD 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmCrdsResponse
        GetCrds: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/custom-resouce-definitions`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                custome_resource_definitions: result?.data?.custome_resource_definitions ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 Finalizer 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String resourceGroup finalizer 가 선언된 리소스의 group
        // @param String resourceVersion finalizer 가 선언된 리소스의 version
        // @param String resourceKind finalizer 가 선언된 리소스의 kind
        // @return OpenShiftCmFinalizersResponse
        GetFinalizers: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/finalizers`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                finalizers: result?.data?.finalizers ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 Namespace 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmNamespacesResponse
        GetNamespaces: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/namespaces`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                namespaces: result?.data?.namespaces ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 Node 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmNodesResponse
        GetNodes: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/nodes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    region: args.region ?? '',
                    role: args.role ?? '',
                    zone: args.zone ?? '',
                },
            });

            return {
                nodes: result?.data?.nodes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 PriorityClass 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmPriorityClassesResponse
        GetPriorityClasses: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/priority-classes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                priority_classes: result?.data?.priority_classes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 보호그룹 조회
        // @param Int clusterId 클러스터 ID
        // @param String protectionGroupResourceName 클러스터 보호그룹 리소스 이름
        // @return OpenShiftCmProtectionGroupResponse
        GetProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/protection-groups/${args.protectionGroupResourceName}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                protection_cluster: result?.data?.protection_cluster ?? null,
                protection_group: result?.data?.protection_group ?? null,
            };
        },

        // 클러스터 보호그룹 Info 조회
        // @param Int clusterId 클러스터 ID
        // @param String protectionGroupResourceName 클러스터 보호그룹 리소스 이름
        // @return OpenShiftCmProtectionGroupInfoResponse
        GetProtectionGroupInfo: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/protection-groups/${args.protectionGroupResourceName}/protection-group-info`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                protection_group_info: result?.data?.protection_group_info ?? null,
            };
        },

        // 클러스터 보호그룹 워크로드 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param String protectionGroupResourceName 클러스터 보호그룹 리소스 이름
        // @return OpenShiftCmProtectionGroupWorkloadsResponse
        GetProtectionGroupWorkloads: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/protection-groups/${args.protectionGroupResourceName}/workloads`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                protection_group_workloads: result?.data?.protection_group_workloads ?? [],
            };
        },

        // 클러스터 보호그룹 목록 조회
        // @param Int clusterId 클러스터 ID
        // @return OpenShiftCmProtectionGroupsResponse
        GetProtectionGroups: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/protection-groups`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                },
            });

            return {
                protection_cluster: result?.data?.protection_cluster ?? null,
                protection_groups: result?.data?.protection_groups ?? [],
            };
        },

        // 공개키 조회
        // @return OpenShiftCmPublicKeyResponse
        GetPublicKey: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/public-keys`,
                method: 'GET',
            });

            return {
                key: result?.data ?? null,
            };
        },

        // 클러스터 레지스트리 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmRegistriesResponse
        GetRegistries: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/registries`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                registries: result?.data?.registries ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 리소스 조회
        // @param Int clusterId 클러스터 ID
        // @param Int resourceId 클러스터 리소스 ID
        // @return OpenShiftCmResourceResponse
        GetResource: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/resources/${args.resourceId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    resource_id: args.resourceId,
                },
            });

            return {
                resource: result?.data?.resource ?? null,
            };
        },

        // 클러스터 리소스 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param String namespace 클러스터 리소스의 네임스페이스 이름
        // @param String namespace 클러스터 리소스의 group
        // @param String namespace 클러스터 리소스의 version
        // @param String namespace 클러스터 리소스의 kind
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmResourcesResponse
        GetResources: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/resources`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    namespace: args.namespace ?? undefined,
                    group: args.group ?? undefined,
                    version: args.version ?? undefined,
                    kind: args.kind ?? undefined,
                },
            });

            return {
                resources: result?.data?.resources ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 RuntimeClass 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmRuntimeClassesResponse
        GetRuntimeClasses: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/runtime-classes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                runtime_classes: result?.data?.runtime_classes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 Scheduler 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmSchedulersResponse
        GetSchedulers: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/schedulers`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                schedulers: result?.data?.schedulers ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 ServiceAccount 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmServiceAccountsResponse
        GetServiceAccounts: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/service-accounts`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                service_accounts: result?.data?.service_accounts ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 배포 가능한 status-manager(agent, broker) 버전 정보 조회
        // @return OpenShiftCmStatusManagerVersionsResponse
        GetStatusManagerVersions: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/status-manager-versions`,
                method: 'GET',
            });

            return {
                versions: result?.data?.versions ?? [],
            };
        },

        // 클러스터 StorageClass 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmStorageClassesResponse
        GetStorageClasses: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/storage-classes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                storage_classes: result?.data?.storage_classes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 Volume 조회
        // @param Int clusterId 클러스터 ID
        // @param Int volumeId 클러스터 볼륨 ID
        // @return OpenShiftCmVolumeResponse
        GetVolume: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/volumes/${args.volumeId}`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    volume_id: args.volumeId,
                },
            });

            return {
                volume: result?.data?.volume ?? null,
            };
        },

        // 클러스터 VolumeSnapShotClass 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmVolumeSnapshotClassesResponse
        GetVolumeSnapshotClasses: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/volume-snapshot-classes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                volume_snapshot_classes: result?.data?.volume_snapshot_classes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 VolumeSnapShot 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param Int volumeId 클러스터 볼륨 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmVolumeSnapshotsResponse
        GetVolumeSnapshots: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/volume-snapshots`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                volume_snapshots: result?.data?.volume_snapshots ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 Volume 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param String volumeType 클러스터 볼륨의 유형
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmVolumesResponse
        GetVolumes: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/volumes`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    volumeType: args.volumeType ?? undefined,
                },
            });

            return {
                volumes: result?.data?.volumes ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 클러스터 워크로드 조회
        // @param Int clusterId 클러스터 ID
        // @param Int workloadId 워크로드의 ID
        // @return OpenShiftCmWorkloadResponse
        GetWorkload: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/workloads/${args.workloadId}`,
                method: 'GET',
            });

            return {
                workload: result?.data?.workload ?? null,
            };
        },

        // 클러스터 워크로드 목록 조회
        // @param Int clusterId 클러스터 ID
        // @param String namespace 워크로드의 네임스페이스
        // @param Boolean isProtected 보호 그룹에 포함 여부
        // @param String name 워크로드 이름
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenShiftCmWorkloadsResponse
        GetWorkloads: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.clusterId}/workloads`,
                method: 'GET',
                params: {
                    cluster_id: args.clusterId ?? undefined,
                    namespace: args.namespace ?? undefined,
                    is_protected: args.isProtected ?? undefined,
                    name: args.name ?? undefined,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                },
            });

            return {
                workloads: result?.data?.workloads ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },
    },

    Mutation: {
        // status_manager(broker) 연결 확인
        // @param OpenShiftCmConnectionCheckRequest openShiftCmConnectionCheckRequest
        // @return Boolean
        CheckClusterConnection: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/status-manager-connection-check`,
                method: 'POST',
                data: args.input.openShiftCmConnectionCheckRequest,
            });

            return Boolean(result?.data);
        },

        // 클러스터 등록
        // @param OpenShiftCmClusterRequest openShiftCmClusterRequest
        // @return OpenShiftCmClusterCreationResponse
        CreateCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters`,
                method: 'POST',
                data: args.input.openShiftCmClusterRequest,
            });

            return {
                cluster: result?.data?.cluster ?? null,
                status_manager: result?.data?.status_manager ?? null,
            };
        },

        // 보호 그룹 추가
        // @param Int clusterId 클러스터 ID
        // @param OpenShiftCmProtectionGroupRequest openShiftCmProtectionGroupRequest
        // @return OpenShiftCmProtectionGroupResponse
        CreateProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}/protection-groups`,
                method: 'POST',
                data: args.input.openShiftCmProtectionGroupRequest,
            });

            return {
                protection_group: result?.data?.protection_group ?? null,
            };
        },

        // 클러스터 삭제
        // @param Int clusterId 클러스터 ID
        // @param Boolean statusManagerDeletion status_manager(agent, broker) 삭제 여부
        // @return Boolean
        DeleteCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}`,
                method: 'DELETE',
                params: {
                    cluster_id: args.input.clusterId,
                    status_manager_deletion: args.input.statusManagerDeletion,
                },
            });

            return Boolean(result?.data);
        },

        // 보호 그룹 삭제
        // @param Int clusterId 클러스터 ID
        // @param String protectionGroupResourceName 보호 그룹 CR 의 리소스 이름
        // @return Boolean
        DeleteProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}/protection-groups/${args.input.protectionGroupResourceName}`,
                method: 'DELETE',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 클러스터 동기화
        // @param Int clusterId 클러스터 ID
        // @return Boolean
        PostClusterSync: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}/sync`,
                method: 'POST',
                params: {
                    cluster_id: args.input.clusterId,
                },
            });

            return Boolean(result?.data);
        },

        // ! 기능 미구현
        // status-manager(agent, broker) 설치
        // @param Int clusterId 클러스터 ID
        // @param OpenShiftCmStatusManagerInstallationRequest statusManagerInstallationRequest
        // @return OpenShiftCmStatusManagerResponse
        // PostStatusManager: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //         statusManagerInstallationRequest: '',
        //     };
        // },

        // ! 기능 미구현
        // status-manager(agent, broker) 설치 제거
        // @param Int clusterId 클러스터 ID
        // @return Boolean
        // UninstallStatusManager: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //     };
        // },

        // 클러스터 수정
        // @param Int clusterId 클러스터 ID
        // @param OpenShiftCmClusterRequest openShiftCmClusterRequest
        // @return OpenShiftCmClusterPatchResponse
        UpdateCluster: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}`,
                method: 'PATCH',
                data: args.input.openShiftCmClusterRequest,
            });

            return {
                cluster: result?.data?.cluster ?? null,
            };
        },

        // ! 기능 미구현
        // 클러스터 CRD controller 등록
        // @param Int clusterId 클러스터 ID
        // @param Int customResourceDefinitionResourceId 클러스터 CRD의 ID
        // @param OpenShiftCmCrdRequest crdRequest
        // @return OpenShiftCmCrdResponse
        // UpdateCrdController: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //         customResourceDefinitionResourceId: '56',
        //         crdRequest: '',
        //     };
        // },

        // ! 기능 미구현
        // 클러스터 finalizer controller 등록
        // @param Int clusterId 클러스터 ID
        // @param Int finalizerId finalizer 의 ID
        // @param OpenShiftCmFinalizerRequest finalizerRequest
        // @return OpenShiftCmFinalizerResponse
        // UpdateFinalizerController: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //         finalizerId: '56',
        //         finalizerRequest: '',
        //     };
        // },

        // 보호 그룹 수정
        // @param Int clusterId 클러스터 ID
        // @param String protectionGroupResourceName 보호 그룹 CR 의 리소스 이름
        // @param OpenShiftCmProtectionGroupRequest openShiftCmProtectionGroupRequest
        // @return OpenShiftCmProtectionGroupResponse
        UpdateProtectionGroup: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}/protection-groups/${args.input.protectionGroupResourceName}`,
                method: 'PATCH',
                data: args.input.openShiftCmProtectionGroupRequest,
            });

            return {
                protection_group: result?.data?.protection_group ?? null,
            };
        },

        // ! 기능 미구현
        // 클러스터 레지스트리 수정
        // @param Int clusterId 클러스터 ID
        // @param Int registryId 레지스트리의 ID
        // @param OpenShiftCmRegistryRequest registryRequest
        // @return OpenShiftCmRegistryResponse
        // UpdateRegistry: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //         registryId: '56',
        //         registryRequest: '',
        //     };
        // },

        // ! 기능 미구현
        // 클러스터 스케줄러 workload 등록
        // @param Int clusterId 클러스터 ID
        // @param Int schedulerId 클러스터 스케줄러의 ID
        // @param OpenShiftCmSchedulerRequest schedulerRequest
        // @return OpenShiftCmSchedulerResponse
        // UpdateSchedulerWorkload: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //         schedulerId: '56',
        //         schedulerRequest: '',
        //     };
        // },

        // status-manager(agent, broker) 정보 수정
        // @param Int clusterId 클러스터 ID
        // @param OpenShiftCmStatusManagerRequest openShiftCmStatusManagerRequest
        // @return OpenShiftCmStatusManagerResponse
        UpdateStatusManager: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/cluster-manager/openshift/clusters/${args.input.clusterId}/status-manager`,
                method: 'PATCH',
                data: args.input.openShiftCmStatusManagerRequest,
            });

            return {
                status_manager: result?.data?.status_manager ?? null,
            };
        },

        // ! 기능 미구현
        // 클러스터 워크로드 수정
        // @param Int clusterId 클러스터 ID
        // @param Int workloadId 워크로드의 ID
        // @param OpenShiftCmWorkloadRequest workloadRequest
        // @return OpenShiftCmWorkloadResponse
        // UpdateWorkload: async (_: any, args: any, context: any) => {
        //     return {
        //         clusterId: '56',
        //         workloadId: '56',
        //         workloadRequest: '',
        //     };
        // },

        // ! 기능 미구현
        // 클러스터 인증 확인
        // @param OpenShiftCmVerificationCredential openShiftCmVerificationCredential
        // @return Boolean
        // VerifyClusterCredential: async (_: any, args: any, context: any) => {
        //     return {
        //         openShiftCmVerificationCredential: '',
        //     };
        // },
    },
};
