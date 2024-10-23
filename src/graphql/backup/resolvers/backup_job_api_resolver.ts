import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 백업작업 조회
        // @param String backupJobResourceName BackupJob resource name
        // @return BackupBackupJobResponse
        GetBackupJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-jobs/${args.backupJobResourceName}`,
                method: 'GET',
            });

            if (result?.data.backup_job) {
                result?.data.backup_job.backup_plan.schedules &&
                    result?.data.backup_job.backup_plan.schedules.forEach((schedule: any) => {
                        schedule.metadata.backup_type = schedule.metadata.backup_type
                            .toUpperCase()
                            .replaceAll('-', '_')
                            .replaceAll('.', '_');
                    });
                return {
                    backup_job: result?.data.backup_job,
                };
            } else {
                return {
                    backup_job: null,
                };
            }
        },

        // 백업작업 상태 조회
        // @param String backupJobResourceName BackupJob resource name
        // @return BackupBackupJobStatusResponse
        GetBackupJobStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-jobs/${args.backupJobResourceName}/status`,
                method: 'GET',
            });

            return {
                backup_job_status: result?.data.backup_job_status,
            };
        },

        // 백업작업 목록 조회
        // @return BackupBackupJobsResponse
        GetBackupJobs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-jobs`,
                method: 'GET',
            });

            return {
                backup_jobs: result?.data?.backup_jobs ?? [],
            };
        },
    },

    Mutation: {
        // 백업작업 추가
        // @param BackupBackupBackupJobRequest backupBackupJobRequest
        // @return BackupBackupBackupJobResponse
        CreateBackupJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-jobs`,
                method: 'POST',
                data: args.input.backupBackupJobRequest,
            });

            return {
                backup_job: result?.data.backup_job,
            };
        },

        // 백업작업 삭제
        // @param String backupJobResourceName Backup_Job resource name
        // @return Boolean
        DeleteBackupJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-jobs/${args.input.backupJobResourceName}`,
                method: 'DELETE',
            });
            return Boolean(result?.data);
        },

        // 백업작업 수정
        // @param String backupJobResourceName Backup_Job resource name
        // @param BackupBackupJobRequest backupBackupJobRequest
        // @return BackupBackupJobResponse
        UpdateBackupJob: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-jobs/${args.input.backupJobResourceName}`,
                method: 'PATCH',
                data: args.input.backupBackupJobRequest,
            });

            return {
                backup_job: result?.data.backup_job,
            };
        },
    },
};
