import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 재해복구작업 상세 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return OpenShiftDrRecoveryJobResponse
        GetRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-jobs/${args.recoveryJobResourceName}`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_resource_name: args.recoveryJobScheduleResourceName,
                },
            });

            return {
                recovery_job: result?.data?.recovery_job,
            };
        },

        // 재해복구작업의 복구정보 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return OpenShiftDrRecoveryInfoResponse
        GetRecoveryJobInfo: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-jobs/${args.recoveryJobResourceName}/info`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_resource_name: args.recoveryJobScheduleResourceName,
                },
            });

            return {
                recovery_info: result?.data?.recovery_info,
            };
        },

        // 재해복구작업 스케쥴 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobScheduleResourceName RecoveryJobSchedule CR 의 Name
        // @return OpenShiftDrRecoveryJobScheduleResponse
        GetRecoveryJobSchedule: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-job-schedules/${args.recoveryJobScheduleResourceName}`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_schedule_resource_name: args.recoveryJobScheduleResourceName,
                },
            });

            return {
                recovery_job_schedule: result?.data?.recovery_job_schedule,
            };
        },

        // 재해복구작업 스케쥴 상태 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobScheduleResourceName RecoveryJobSchedule CR 의 Name
        // @return OpenShiftDrRecoveryJobScheduleStatusResponse
        GetRecoveryJobScheduleStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-job-schedules/${args.recoveryJobScheduleResourceName}/status`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_schedule_resource_name: args.recoveryJobScheduleResourceName,
                },
            });

            return {
                recovery_job_schedule_status: result?.data?.recovery_job_schedule_status,
            };
        },

        // 재해복구작업 스케쥴 목록 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @return OpenShiftDrRecoveryJobSchedulesResponse
        GetRecoveryJobSchedules: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-job-schedules`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                recovery_job_schedules: result?.data?.recovery_job_schedules ?? [],
            };
        },

        // 재해복구작업 상태 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return OpenShiftDrRecoveryJobStatusResponse
        GetRecoveryJobStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-jobs/${args.recoveryJobResourceName}/status`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_resource_name: args.recoveryJobScheduleResourceName,
                },
            });

            return {
                recovery_job_status: result?.data?.recovery_job_status,
                recovery_job_task_status: result?.data?.recovery_job_task_status,
                workload_recovery_status: result?.data?.workload_recovery_status,
            };
        },

        // 재해복구작업 Task 로그 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @param String recoveryJobTaskResourceName RecoveryJobTask CR 의 Name. 특정 Task 의 로그만 조회할 때
        // @return OpenShiftDrRecoveryJobTaskLogsResponse
        GetRecoveryJobTaskLog: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-jobs/${args.recoveryJobResourceName}/tasks/${args.recoveryJobTaskResourceName}/logs`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_resource_name: args.recoveryJobScheduleResourceName,
                    recovery_job_task_resource_name: args.recoveryJobTaskResourceName,
                },
            });

            return {
                logs: result?.data?.logs,
            };
        },

        // 재해복구작업의 Task 목록 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return OpenShiftDrRecoveryJobTasksResponse
        GetRecoveryJobTasks: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-jobs/${args.recoveryJobResourceName}/tasks`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                    recovery_job_resource_name: args.recoveryJobScheduleResourceName,
                },
            });

            return {
                recovery_job_tasks: result?.data?.recovery_job_tasks ?? [],
            };
        },

        // 재해복구작업 목록 조회
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @return OpenShiftDrRecoveryJobsResponse
        GetRecoveryJobs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.protectionGroupResourceName}/recovery-jobs`,
                method: 'GET',
                params: {
                    protection_group_resource_name: args.protectionGroupResourceName,
                },
            });

            return {
                queue: result?.data?.queue ?? [],
            };
        },
    },

    Mutation: {
        // 재해복구작업 취소
        // 설명추가
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        CancelRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/cancel`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 확정
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        ConfirmRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/confirm`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 스케쥴 등록
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param OpenShiftDrRecoveryJobScheduleRequest openShiftDrRecoveryJobScheduleRequest
        // @return OpenShiftDrRecoveryJobScheduleResponse
        CreateRecoveryJobSchedule: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-job-schedules`,
                method: 'POST',
                data: args.input.openShiftDrRecoveryJobScheduleRequest,
            });

            return {
                recovery_job_schedule: result?.data.recovery_job_schedule,
            };
        },

        // 재해복구작업 제거
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        DeleteRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}`,
                method: 'DELETE',
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 스케쥴 삭제
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobScheduleResourceName RecoveryJobSchedule CR 의 Name
        // @return Boolean
        DeleteRecoveryJobSchedule: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-job-schedules/${args.input.recoveryJobScheduleResourceName}`,
                method: 'DELETE',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_schedule_resource_name: args.input.recoveryJobScheduleResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 강제로 확정
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return [Boolean]
        ForcedConfirmRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/forced-confirm`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 롤백 무시
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        IgnoreRollbackRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/ignore-rollback`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 일시중지
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        PauseRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/pause`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 재개
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        ResumeRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/resume`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 Workload 복구 재시도
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @param OpenShiftDrRecoveryJobRetryRequest openShiftDrRecoveryJobRetryRequest
        // @return Boolean
        RetryRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/retry`,
                method: 'POST',
                data: args.input.openShiftDrRecoveryJobRetryRequest,
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업(재해복구) 롤백
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        RollbackMigrationRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/migration/rollback`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업(모의 훈련) 롤백
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobResourceName RecoveryJob CR 의 Name
        // @return Boolean
        RollbackSimulationRecoveryJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-jobs/${args.input.recoveryJobResourceName}/simulation/rollback`,
                method: 'POST',
                params: {
                    protection_group_resource_name: args.input.protectionGroupResourceName,
                    recovery_job_resource_name: args.input.recoveryJobResourceName,
                },
            });

            return Boolean(result?.data);
        },

        // 재해복구작업 스케쥴 수정
        // @param String protectionGroupResourceName ProtectionGroup CR 의 Name
        // @param String recoveryJobScheduleResourceName RecoveryJobSchedule CR 의 Name
        // @param OpenShiftDrRecoveryJobScheduleRequest openShiftDrRecoveryJobScheduleRequest
        // @return OpenShiftDrRecoveryJobScheduleResponse
        UpdateRecoveryJobSchedule: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/disaster-recovery/openshift/${args.input.protectionGroupResourceName}/recovery-job-schedules/${args.input.recoveryJobScheduleResourceName}`,
                method: 'PATCH',
                data: args.input.openShiftDrRecoveryJobScheduleRequest,
            });

            return {
                recovery_job_schedule: result?.data.recovery_job_schedule,
            };
        },
    },
};
