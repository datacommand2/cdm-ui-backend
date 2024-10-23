import { requestApi } from '../../../utils/api';
import { BackupBackupPlanInput, ReplicatorSnapshotScheduleInput } from '../__generated__/resolvers-types';
import { BackupBackupTypeEnum } from '../__generated__/types';

const RawBackupTypes = {
    [BackupBackupTypeEnum.CdmBackupBackupTypeDifferentialBackup]: 'cdm.backup.backup-type.differential-backup',
    [BackupBackupTypeEnum.CdmBackupBackupTypeFullBackup]: 'cdm.backup.backup-type.full-backup',
    [BackupBackupTypeEnum.CdmBackupBackupTypeIncrementalBackup]: 'cdm.backup.backup-type.incremental-backup',
};

const convertToServiceBackupTypes = (backupPlan: BackupBackupPlanInput) => {
    (backupPlan?.schedules as ReplicatorSnapshotScheduleInput[]).forEach(
        (schedule: ReplicatorSnapshotScheduleInput) => {
            if (schedule?.metadata?.backup_type)
                schedule.metadata.backup_type = RawBackupTypes[schedule.metadata.backup_type as BackupBackupTypeEnum];
        },
    );
    return backupPlan;
};

export default {
    Query: {
        // 백업계획 조회
        // @param String backupPlanResourceName Backup_Plan resource name
        // @return BackupBackupPlanResponse
        GetBackupPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-plans/${args.backupPlanResourceName}`,
                method: 'GET',
            });

            result?.data.backup_plan.schedules &&
                result?.data.backup_plan.schedules.forEach((schedule: any) => {
                    schedule.metadata.backup_type = schedule.metadata.backup_type
                        .toUpperCase()
                        .replaceAll('-', '_')
                        .replaceAll('.', '_');
                });

            return {
                backup_plan: result?.data.backup_plan,
            };
        },

        // 백업계획 목록 조회
        // @return BackupBackupPlansResponse
        GetBackupPlans: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-plans`,
                method: 'GET',
            });

            result?.data.backup_plans.forEach((plan: any) => {
                plan.schedules &&
                    plan.schedules.forEach((schedule: any) => {
                        schedule.metadata.backup_type = schedule.metadata.backup_type
                            .toUpperCase()
                            .replaceAll('-', '_')
                            .replaceAll('.', '_');
                    });
            });

            return {
                backup_plans: result?.data?.backup_plans ?? [],
            };
        },
    },

    Mutation: {
        // 백업계획 추가
        // @param BackupBackupPlanRequest backupBackupPlanRequest
        // @return BackupBackupPlanResponse
        CreateBackupPlan: async (_: any, args: any, context: any) => {
            args.input.backupBackupPlanRequest.backup_plan = convertToServiceBackupTypes(
                args.input.backupBackupPlanRequest.backup_plan,
            );
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-plans`,
                method: 'POST',
                data: args.input.backupBackupPlanRequest,
            });

            return {
                backup_plan: result?.data?.backup_plan,
            };
        },
        // 백업계획 삭제
        // @param String backupPlanResourceName Backup_Plan resource name
        // @return Boolean
        DeleteBackupPlan: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-plans/${args.input.backupPlanResourceName}`,
                method: 'DELETE',
            });
            return Boolean(result?.data);
        },
        // 백업계획 수정
        // @param String backupPlanResourceName Backup_Plan resource name
        // @param BackupBackupPlanRequest backupBackupPlanRequest
        // @return BackupBackupPlanResponse
        UpdateBackupPlan: async (_: any, args: any, context: any) => {
            args.input.backupBackupPlanRequest.backup_plan = convertToServiceBackupTypes(
                args.input.backupBackupPlanRequest.backup_plan,
            );
            const result = await requestApi({
                context,
                originalUrl: `/backup/backup-plans/${args.input.backupPlanResourceName}`,
                method: 'PATCH',
                data: args.input.backupBackupPlanRequest,
            });

            return {
                backup_plan: result?.data.backup_plan,
            };
        },
    },
};
