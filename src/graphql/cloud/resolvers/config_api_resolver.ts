// ! NOTE : Deprecated API
export default {
    Query: {
        // 백업 설정 조회
        // @return CloudConfigBackup
        GetCloudBackupConfig: async (_: any, args: any, context: any) => {
            return {};
        },
    },

    Mutation: {
        // 백업 설정 변경
        // @param CloudConfigBackup cloudConfigBackup
        // @return CloudConfigBackup
        UpdateCloudBackupConfig: async (_: any, args: any, context: any) => {
            return {
                cloudConfigBackup: '',
            };
        },
    },
};
