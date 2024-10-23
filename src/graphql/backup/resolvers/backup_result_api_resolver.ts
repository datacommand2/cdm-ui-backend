import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 백업결과 조회
        // @param String backupResultResourceName Backup_Result resource name
        // @return BackupBackupResultResponse
        GetBackupResult: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-results/${args.backupResultResourceName}`,
                method: 'GET',
            });

            return {
                backup_result: result?.data.backup_result,
            };
        },

        // 백업 결과 detail 조회
        // @param String backupResultResourceName Backup_Result resource name
        // @return BackupBackupResultDetailResponse
        GetBackupResultDetails: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-results/${args.backupResultResourceName}/details`,
                method: 'GET',
            });

            return {
                cluster_type: result?.data.cluster_type,
                details: result?.data.details,
            };
        },

        // 백업결과 목록 조회
        // @return BackupBackupResultsResponse
        GetBackupResults: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-results`,
                method: 'GET',
            });

            return {
                backup_results: result?.data?.backup_results ?? [],
            };
        },
    },

    Mutation: {
        // 백업결과 삭제
        // @param String backupResultResourceName Backup_Result resource name
        // @return Boolean
        DeleteBackupResult: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-results/${args.input.backupResultResourceName}`,
                method: 'DELETE',
            });
            return Boolean(result?.data);
        },

        // 백업결과 수정
        // @param String backupResultResourceName Backup_Result resource name
        // @param BackupBackupResultRequest backupBackupResultRequest
        // @return BackupBackupResultResponse
        UpdateBackupResult: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-results/${args.input.backupResultResourceName}`,
                method: 'PATCH',
                data: args.input.backupBackupResultRequest,
            });

            return {
                backup_result: result?.data.backup_result,
            };
        },
    },
};
