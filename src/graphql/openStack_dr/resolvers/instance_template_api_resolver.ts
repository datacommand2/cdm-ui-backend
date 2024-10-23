import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 인스턴스 템플릿 목록 조회
        // 설명추가
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String name 보호그룹 이름
        // @param Int ownerGroupId 보호그룹 원본 클러스터의 Owner 그룹 ID
        // @return OpenStackDrInstanceTemplatesResponse
        GetInstanceTemplates: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/templates`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    name: args.name,
                    owner_group_id: args.ownerGroupId,
                },
            });

            return {
                templates: result?.data?.templates ?? [],
                pagination: result?.data?.pagination ?? null,
            };
        },

        // 인스턴스 템플릿 조회
        // @param Int templateId 인스턴스 템플릿의 ID
        // @return OpenStackDrInstanceTemplateResponse
        GetInstanceTemplate: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/templates/${args.templateId}`,
                method: 'GET',
                params: {
                    template_id: args.templateId,
                },
            });

            return {
                template: result?.data?.template,
            };
        },
    },

    Mutation: {
        // 인스턴스 템플릿 등록
        // @param OpenStackDrAddInstanceTemplateRequest openStackDrAddInstanceTemplateRequest
        // @return OpenStackDrInstanceTemplateResponse
        CreateInstanceTemplate: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/templates`,
                method: 'POST',
                data: args.input.openStackDrAddInstanceTemplateRequest,
            });

            return {
                template: result?.data.template,
            };
        },

        // 인스턴스 템플릿 삭제
        // @param Int templateId 인스턴스 템플릿의 ID
        // @return OpenStackDrMessageResponse
        DeleteInstanceTemplate: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/recovery/templates/${args.input.templateId}`,
                method: 'DELETE',
                params: {
                    template_id: args.input.templateId,
                },
            });

            return {
                message: result?.data.message,
            };
        },
    },
};
