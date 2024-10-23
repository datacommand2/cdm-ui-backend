import {
  CloudLanguageSetEnumResolvers,
  CloudRoleEnumResolvers,
  SmStorageConfigurationAwsS3RegionEnumResolvers,
  SmStorageConfigurationCephRbdImageFeaturesEnumResolvers,
  SmStorageStateCodeEnumResolvers,
  SmStorageTypeEnumResolvers,
} from './resolvers-types';

export const CloudLanguageSetEnum = <CloudLanguageSetEnumResolvers>{
  ENG: 'eng',
  KOR: 'kor',
};

export const CloudRoleEnum = <CloudRoleEnumResolvers>{
  ADMIN: 'admin',
  MANAGER: 'manager',
  OPERATOR: 'operator',
  USER: 'user',
};

export const SmStorageConfigurationAwsS3RegionEnum = <SmStorageConfigurationAwsS3RegionEnumResolvers>{
  US_EAST_2: 'us-east-2',
  US_EAST_1: 'us-east-1',
  US_WEST_1: 'us-west-1',
  US_WEST_2: 'us-west-2',
  AF_SOUTH_1: 'af-south-1',
  AP_EAST_1: 'ap-east-1',
  AP_SOUTH_2: 'ap-south-2',
  AP_SOUTHEAST_3: 'ap-southeast-3',
  AP_SOUTHEAST_4: 'ap-southeast-4',
  AP_SOUTH_1: 'ap-south-1',
  AP_NORTHEAST_3: 'ap-northeast-3',
  AP_NORTHEAST_2: 'ap-northeast-2',
  AP_SOUTHEAST_1: 'ap-southeast-1',
  AP_SOUTHEAST_2: 'ap-southeast-2',
  AP_NORTHEAST_1: 'ap-northeast-1',
  CA_CENTRAL_1: 'ca-central-1',
  CA_WEST_1: 'ca-west-1',
  EU_CENTRAL_1: 'eu-central-1',
  EU_WEST_1: 'eu-west-1',
  EU_WEST_2: 'eu-west-2',
  EU_SOUTH_1: 'eu-south-1',
  EU_WEST_3: 'eu-west-3',
  EU_SOUTH_2: 'eu-south-2',
  EU_NORTH_1: 'eu-north-1',
  EU_CENTRAL_2: 'eu-central-2',
  IL_CENTRAL_1: 'il-central-1',
  ME_SOUTH_1: 'me-south-1',
  ME_CENTRAL_1: 'me-central-1',
  SA_EAST_1: 'sa-east-1',
};

export const SmStorageConfigurationCephRbdImageFeaturesEnum = <SmStorageConfigurationCephRbdImageFeaturesEnumResolvers>{
  LAYERING: 'layering',
  JOURNALING: 'journaling',
  STRIPING: 'striping',
  EXCLUSIVE_LOCK: 'exclusive-lock',
  OBJECT_MAP: 'object-map',
  FAST_DIFF: 'fast-diff',
  DEEP_FLATTEN: 'deep-flatten',
  DATA_POOL: 'data-pool',
};

export const SmStorageStateCodeEnum = <SmStorageStateCodeEnumResolvers>{
  CDM_BACKUP_STORAGE_STATE_AVAILABLE: 'cdm.backup.storage.state.available',
  CDM_BACKUP_STORAGE_STATE_UNAVAILABLE: 'cdm.backup.storage.state.unavailable',
  CDM_BACKUP_STORAGE_STATE_ERROR: 'cdm.backup.storage.state.error',
};

export const SmStorageTypeEnum = <SmStorageTypeEnumResolvers>{
  CDM_BACKUP_STORAGE_TYPE_CEPH_RBD: 'cdm.backup.storage.type.ceph.rbd',
  CDM_BACKUP_STORAGE_TYPE_NFS: 'cdm.backup.storage.type.nfs',
  CDM_BACKUP_STORAGE_TYPE_AWS_S3: 'cdm.backup.storage.type.aws.s3',
  CDM_BACKUP_STORAGE_TYPE_AZURE_BLOB: 'cdm.backup.storage.type.azure.blob',
};

