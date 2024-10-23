export default {
    Query: {

        // 클러스터 관계 목록 조회
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @return OpenStackDrClusterRelationshipsResponse
        GetDashboardClusterRelationships: async (_: any, args: any, context: any) => {
            return {
                "limit": "56",
                "offset": "56"
            };
        },

        // @return OpenStackDrSummaryClustersResponse
        GetDashboardClustersSummary: async (_: any, args: any, context: any) => {
            return {
                
            };
        },

        // @return OpenStackDrSummaryGroupsResponse
        GetDashboardGroupsSummary: async (_: any, args: any, context: any) => {
            return {
                
            };
        },

        // @return OpenStackDrSummaryInstancesResponse
        GetDashboardInstancesSummary: async (_: any, args: any, context: any) => {
            return {
                
            };
        },

        // 재해 복구 작업 요약
        // @param OpenStackDrRecoveryTypeEnum recoveryType 복구 유형
        // @param Int startDate
        // @param Int endDate
        // @return OpenStackDrSummaryJobsResponse
        GetDashboardJobsSummary: async (_: any, args: any, context: any) => {
            return {
                "recoveryType": "",
                "startDate": "789",
                "endDate": "789"
            };
        },

        // @return OpenStackDrSummaryVolumesResponse
        GetDashboardVolumesSummary: async (_: any, args: any, context: any) => {
            return {
                
            };
        },

    },

    Mutation: {

    }
}