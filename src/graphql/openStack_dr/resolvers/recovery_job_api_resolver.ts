import { requestApi } from '../../../utils/api';
import { OpenStackJobMonitoringSocket } from '../../../utils/webSocket';
import { OpenStackDrRecoveryJobMonitorsResponse } from '../__generated__/resolvers-types';

export default {
    Query: {
        // 재해복구작업 목록 조회
        // @param Int groupId 보호그룹 ID
        // @param Int planId 재해복구계획 ID
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String name 재해복구계획 이름
        // @param OpenStackDrDisasterRecoveryTypeEnum Type_ 복구 유형
        // @return OpenStackDrRecoveryJobsResponse
        GetRecoveryJobs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}/jobs`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    plan_id: args.planId,
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    name: args.name,
                    type: args.type,
                },
            });

            return {
                jobs: result?.data?.jobs ?? [],
                pagination: result?.data?.pagination,
            };
        },
        // 재해복구작업 조회
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrRecoveryJobResponse
        GetRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.groupId}/jobs/${args.jobId}`,
                method: 'GET',
                params: {
                    group_id: args.groupId,
                    job_id: args.jobId,
                },
            });

            return {
                job: result?.data?.job,
            };
        },

        // 재해복구작업 모니터링 (WebSocket 프로토콜 지원)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param Int interval WebSocket 프로토콜을 사용할 때의 데이터 수신 간격 (sec)
        // @deprecated
        // @return OpenStackDrRecoveryJobStatusResponse
        // GetRecoveryJobStatus: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //         jobId: '56',
        //         interval: '56',
        //     };
        // },

        // 재해복구작업 인스턴스 모니터링 (WebSocket 프로토콜 지원)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param Int interval WebSocket 프로토콜을 사용할 때의 데이터 수신 간격 (sec)
        // @deprecated
        // @return OpenStackDrRecoveryJobInstanceStatusResponse
        // GetRecoveryJobInstanceStatus: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //         jobId: '56',
        //         interval: '56',
        //     };
        // },

        // 재해복구작업 작업내역 모니터링 (WebSocket 프로토콜 지원)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param Int interval WebSocket 프로토콜을 사용할 때의 데이터 수신 간격 (sec)
        // @deprecated
        // @return OpenStackDrRecoveryTaskLogsResponse
        // GetRecoveryJobTaskLog: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //         jobId: '56',
        //         interval: '56',
        //     };
        // },

        // 재해복구작업 볼륨 모니터링 (WebSocket 프로토콜 지원)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param Int interval WebSocket 프로토콜을 사용할 때의 데이터 수신 간격 (sec)
        // @deprecated
        // @return OpenStackDrRecoveryJobVolumeStatusResponse
        // GetRecoveryJobVolumeStatus: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //         jobId: '56',
        //         interval: '56',
        //     };
        // },
        // 재해복구작업 모든 상태 모니터링 (WebSocket 프로토콜 지원)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param Int interval WebSocket 프로토콜을 사용할 때의 데이터 수신 간격 (sec)
        // @deprecated
        // @return OpenStackDrRecoveryJobMonitorsResponse
        GetRecoveryJobMonitors: async (_: any, args: any, context: any) => {
            const result = await OpenStackJobMonitoringSocket({
                groupId: args.groupId,
                jobId: args.jobId,
                sessionKey: context.req.headers['x-authenticated-session'],
                tenantId: 1,
                interval: args.interval,
            });

            const defaultData = {
                status: undefined,
                tenants: [],
                security_groups: [],
                networks: [],
                subnets: [],
                floating_ips: [],
                routers: [],
                volumes: [],
                keypairs: [],
                instance_specs: [],
                instances: [],
            } as OpenStackDrRecoveryJobMonitorsResponse;
            if (result) {
                return result as OpenStackDrRecoveryJobMonitorsResponse;
            } else return defaultData;
        },
    },

    Mutation: {
        // 재해복구작업 취소
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        CancelRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/cancel`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 확정 취소
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        CancelRecoveryJobConfirm: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/confirm/cancel`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 확정
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        ConfirmRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/confirm`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 확정 재시도
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        ConfirmRecoveryJobRetry: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/confirm/retry`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 삭제
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        DeleteRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}`,
                method: 'DELETE',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 강제 삭제
        // 재해복구작업을 클러스터의 상태와 상관없이 강제로 삭제한다.
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        DeleteRecoveryJobForce: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/force-delete`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 수정
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param OpenStackDrUpdateRecoveryJobRequest openStackDrUpdateRecoveryJobRequest
        // @return OpenStackDrRecoveryJobResponse
        UpdateRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}`,
                method: 'PATCH',
                data: args.input.openStackDrUpdateRecoveryJobRequest,
            });

            return {
                job: result?.data?.job,
            };
        },

        // 재해복구작업 일시중지 시간 연장
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param OpenStackDrExtendRecoveryJobPausingTimeRequest openStackDrExtendRecoveryJobPausingTimeRequest
        // @return OpenStackDrMessageResponse
        ExtendRecoveryJobPause: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/pause/extend`,
                method: 'POST',
                data: args.input.openStackDrExtendRecoveryJobPausingTimeRequest,
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 일시중지
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        PauseRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/pause`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 재개
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        ResumeRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/resume`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 재시도 (재해복구)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param OpenStackDrRetryInstancesRequest openStackDrRetryInstancesRequest
        // @return OpenStackDrMessageResponse
        RetryRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/retry`,
                method: 'POST',
                data: args.input.openStackDrRetryInstancesRequest,
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 롤백 대기시간 연장
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @param OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest openStackDrExtendRecoveryJobRollbackWaitingTimeRequest
        // @return OpenStackDrMessageResponse
        ExtendRecoveryJobRollbackTime: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/rollback/extend`,
                method: 'POST',
                data: args.input.openStackDrExtendRecoveryJobRollbackWaitingTimeRequest,
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 롤백 무시
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return Boolean
        IgnoreRecoveryJobRollback: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/rollback/ignore`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 롤백 (재해복구)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        ResumeRecoveryJobMigrationRollback: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/rollback/migration`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },
        // 재해복구작업 롤백 재시도
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        RetryRecoveryJobRollback: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/rollback/retry`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 롤백 (모의훈련)
        // @param Int groupId 보호그룹 ID
        // @param Int jobId 재해복구작업 ID
        // @return OpenStackDrMessageResponse
        RollbackRecoveryJobSimulation: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs/${args.input.jobId}/rollback/simulation`,
                method: 'POST',
                params: {
                    group_id: args.input.groupId,
                    job_id: args.input.jobId,
                },
            });

            return {
                message: result?.data?.message,
            };
        },

        // 재해복구작업 생성
        // @param Int groupId 보호그룹 ID
        // @param AddRecoveryJobRequest openStackDrAddRecoveryJobRequest
        // @return OpenStackDrRecoveryJobResponse
        CreateRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/groups/${args.input.groupId}/jobs`,
                method: 'POST',
                data: args.input.openStackDrAddRecoveryJobRequest,
            });

            return {
                job: result?.data?.job,
            };
        },
    },
};
