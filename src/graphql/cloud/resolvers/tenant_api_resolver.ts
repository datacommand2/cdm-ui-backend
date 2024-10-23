// ! NOTE : Deprecated API
export default {
    Query: {
        // 테넌트 상세 조회
        // @param Int tenantId 테넌트 ID
        // @return CloudTenantResponse
        GetTenant: async (_: any, args: any, context: any) => {
            return {
                tenantId: '56',
            };
        },

        // 테넌트 목록 조회
        // @param String name 테넌트 이름
        // @return CloudTenantsResponse
        GetTenants: async (_: any, args: any, context: any) => {
            return {
                name: 'name_example',
            };
        },
    },

    Mutation: {
        // 테넌트 활성화
        // @param Int tenantId 테넌트 ID
        // @return CloudTenantResponse
        ActivateTenant: async (_: any, args: any, context: any) => {
            return {
                tenantId: '56',
            };
        },

        // 테넌트 추가
        // @param CloudNewTenantRequest newTenantRequest
        // @return CloudTenantResponse
        CreateTenant: async (_: any, args: any, context: any) => {
            return {
                newTenantRequest: '',
            };
        },

        // 테넌트 비활성화
        // @param Int tenantId 테넌트 ID
        // @return CloudDeactivateTenantResponse
        DeactivateTenant: async (_: any, args: any, context: any) => {
            return {
                tenantId: '56',
            };
        },

        // 테넌트 수정
        // @param Int tenantId 테넌트 ID
        // @param CloudTenantRequest tenantRequest
        // @return CloudTenantResponse
        UpdateTenant: async (_: any, args: any, context: any) => {
            return {
                tenantId: '56',
                tenantRequest: '',
            };
        },
    },
};
