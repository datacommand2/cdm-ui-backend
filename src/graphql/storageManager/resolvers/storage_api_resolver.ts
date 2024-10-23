import { requestApi } from '../../../utils/api';
import { SmStorageTypeEnum } from '../__generated__/enum_resolvers';

const StorageFieldNames = {
    [String(SmStorageTypeEnum.CDM_BACKUP_STORAGE_TYPE_CEPH_RBD)]: 'storage_configuration_ceph_rbd',
    [String(SmStorageTypeEnum.CDM_BACKUP_STORAGE_TYPE_NFS)]: 'storage_configuration_nfs',
    [String(SmStorageTypeEnum.CDM_BACKUP_STORAGE_TYPE_AWS_S3)]: 'storage_configuration_aws_s3',
    [String(SmStorageTypeEnum.CDM_BACKUP_STORAGE_TYPE_AZURE_BLOB)]: 'storage_configuration_azure_blob',
};

export default {
    Query: {
        // 스토리지 조회
        // @param String resourceName 내부적으로 데이터베이스를 사용하지 않고,
        //                쿠버네티스 API 서버를 통해 리소스를 관리 및 식별하기 때문에
        //                resource_name 필드의 값을 식별자로 사용합니다.
        // @return SmGetStorageResponse
        GetStorage: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/storages/${args.resourceName}`,
                method: 'GET',
                params: {
                    resource_name: args.resourceName,
                },
            });

            if (result) {
                const fieldName = StorageFieldNames[result?.data?.storage?.spec?.type];
                result.data.storage.spec.configuration = result.data.storage.spec.configuration[fieldName];
                return {
                    storage: result?.data?.storage ?? null,
                };
            } else {
                return null;
            }
        },

        // 스토리지 상태 조회
        // @param String resourceName 내부적으로 데이터베이스를 사용하지 않고,
        //                쿠버네티스 API 서버를 통해 리소스를 관리 및 식별하기 때문에
        //                resource_name 필드의 값을 식별자로 사용합니다.
        // @return SmGetStorageStatusResponse
        GetStorageStatus: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/storages/${args.resourceName}/status`,
                method: 'GET',
                params: {
                    resource_name: args.resourceName,
                },
            });

            return {
                status: result?.data?.status ?? null,
            };
        },

        // 스토리지 목록 조회
        // @return SmGetStoragesResponse
        GetStorages: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/storages`,
                method: 'GET',
            });

            return {
                storages: result?.data?.storages ?? [],
            };
        },
    },

    Mutation: {
        // 스토리지 등록
        // @param SmCreateStorageRequest smCreateStorageRequest 스토리지 등록
        // @return [SmCreateStorageResponse]
        // TODO: configuration 안에서의 스토리지 타입 어떻게
        CreateStorage: async (_: any, args: any, context: any) => {
            // convert configuration to specific type field name.
            const fieldName = StorageFieldNames[args.input.smCreateStorageRequest.type];
            args.input.smCreateStorageRequest.configuration = {
                [fieldName]: { ...args.input.smCreateStorageRequest.configuration },
            };

            const result = await requestApi({
                context,
                originalUrl: `/storages`,
                method: 'POST',
                data: args.input.smCreateStorageRequest,
            });

            return {
                storage: result?.data.storage,
            };
        },

        // 스토리지 삭제
        // @param String resourceName 내부적으로 데이터베이스를 사용하지 않고,
        //                쿠버네티스 API 서버를 통해 리소스를 관리 및 식별하기 때문에
        //                resource_name 필드의 값을 식별자로 사용합니다.
        // @return Boolean
        DeleteStorage: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/storages/${args.input.resourceName}`,
                method: 'DELETE',
            });
            return Boolean(result?.data);
        },

        // 스토리지 수정
        // spec.name 필드와 spec.description 필드의 값만 수정 가능합니다.
        // @param String resourceName 내부적으로 데이터베이스를 사용하지 않고,
        //  쿠버네티스 API 서버를 통해 리소스를 관리 및 식별하기 때문에
        //  resource_name 필드의 값을 식별자로 사용합니다.
        // @param SmUpdateStorageRequest smUpdateStorageRequest 스토리지 수정
        // @return SmUpdateStorageResponse
        UpdateStorage: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/storages/${args.input.resourceName}`,
                method: 'PATCH',
                data: args.input.smUpdateStorageRequest,
            });

            return {
                storage: result?.data.storage,
            };
        },
    },
};
