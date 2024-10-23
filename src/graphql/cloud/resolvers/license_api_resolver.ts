import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 라이선스 조회
        // @return CloudLicenseResponse
        GetLicense: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/license`,
                method: 'GET',
            });

            // "cdm-dr-expiry-date":"2022-08-01",
            // "cdm-dr-hw-uuid1":"1032F2FBB62843BAB7EAABB3E377AEE8",
            // "cdm-dr-hw-uuid2":"AFD5DA30351A418C943FDFBAD70869EB",
            // "cdm-dr-hw-uuid3":"1BCA6C50F1F34F06A079BBB7180C1645",
            // "cdm-dr-issue-date":"2022-08-01",
            // "cdm-dr-license-mode":"dev",
            // "cdm-dr-limits-instance":"1"
            return {
                payloads: JSON.parse(result?.data?.payloads),
            };
        },

        // Product UUID 조회
        // @return CloudProductUuidResponse
        GetProductUuid: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/license/product-uuid`,
                method: 'GET',
            });

            return {
                uuid: result?.data.uuid,
            };
        },
    },

    Mutation: {
        // 라이선스 유효성 확인
        // 라이선스 유효성을 검사하고, 유효한 라이선스라면 상세 정보를 반환한다.
        // @param CloudLicenseRequest cloudLicenseRequest
        // @return CloudLicenseResponse
        CheckLicense: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/license/check`,
                method: 'POST',
                data: args.input.cloudLicenseRequest,
            });

            // TODO: payloads가 JSON으로 넘어오는데 API 문서에는 License schema가 존재함.
            return {
                payloads: JSON.parse(result?.data?.payloads),
            };
        },

        // 라이선스 입력
        // 라이선스를 입력한다. 이미 라이선스가 등록되어 있다면 갱신한다.
        // @param CloudLicenseRequest cloudLicenseRequest
        // @return CloudLicenseResponse
        UpdateLicense: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/license`,
                method: 'POST',
                data: args.input.cloudLicenseRequest,
            });

            return {
                payloads: JSON.parse(result?.data?.payloads),
            };
        },
    },
};
