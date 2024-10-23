// ! NOTE : Deprecated API
export default {
    Query: {
        // 백업 조회
        // @param Int backupId 백업 ID
        // @return CloudBackup
        GetCloudBackup: async (_: any, args: any, context: any) => {
            return {};
        },

        // 백업 예약 목록 조회
        // @return CloudSchedule
        GetCloudBackupReservations: async (_: any, args: any, context: any) => {
            return {};
        },

        // 백업 목록 조회
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param Int startDate 백업 생성일 범위 시작일
        // @param Int endDate 백업 생성일 범위 종료일
        // @return CloudBackup
        GetCloudBackups: async (_: any, args: any, context: any) => {
            return {};
        },

        // 백업 복구
        // @param Int backupId 백업 ID
        // @return Boolean
        RestoreCloudBackup: async (_: any, args: any, context: any) => {
            return {
                backupId: '56',
            };
        },
    },

    Mutation: {
        // 백업 예약 취소
        // @param Int scheduleId 특정일시 백업 예약 스케쥴 ID
        // @return Boolean
        CancelCloudBackupReservation: async (_: any, args: any, context: any) => {
            return {
                scheduleId: '56',
            };
        },

        // 백업 생성
        // @return CloudBackup
        CreateCloudBackup: async (_: any, args: any, context: any) => {
            return {};
        },

        // 백업 삭제
        // @param Int backupId 백업 ID
        // @return Boolean
        DeleteCloudBackup: async (_: any, args: any, context: any) => {
            return {
                backupId: '56',
            };
        },

        // 백업 예약
        // @param CloudSchedule cloudSchedule
        // @return CloudSchedule
        CreateCloudBackupReservation: async (_: any, args: any, context: any) => {
            return {
                cloudSchedule: '',
            };
        },

        // 백업 수정
        // @param Int backupId 백업 ID
        // @param CloudBackup cloudBackup
        // @return CloudBackup
        UpdateCloudBackup: async (_: any, args: any, context: any) => {
            return {
                backupId: '56',
                cloudBackup: '',
            };
        },
    },
};
