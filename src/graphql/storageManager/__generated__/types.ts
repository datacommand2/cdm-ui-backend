export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export enum CloudLanguageSetEnum {
  Eng = 'ENG',
  Kor = 'KOR'
}

export type CloudRole = {
  __typename?: 'CloudRole';
  id?: Maybe<Scalars['BigInt']['output']>;
  role?: Maybe<CloudRoleEnum>;
  solution?: Maybe<Scalars['String']['output']>;
};

export enum CloudRoleEnum {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Operator = 'OPERATOR',
  User = 'USER'
}

export type CloudRoleInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  role?: InputMaybe<CloudRoleEnum>;
  solution?: InputMaybe<Scalars['String']['input']>;
};

export type CloudSession = {
  __typename?: 'CloudSession';
  key?: Maybe<Scalars['String']['output']>;
};

export type CloudSessionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type CloudTenant = {
  __typename?: 'CloudTenant';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  solutions?: Maybe<Array<Maybe<CloudTenantSolution>>>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
  use_flag?: Maybe<Scalars['Boolean']['output']>;
};

export type CloudTenantInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  solutions?: InputMaybe<Array<InputMaybe<CloudTenantSolutionInput>>>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
  use_flag?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudTenantSolution = {
  __typename?: 'CloudTenantSolution';
  name?: Maybe<Scalars['String']['output']>;
};

export type CloudTenantSolutionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CloudUser = {
  __typename?: 'CloudUser';
  account?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<CloudUserGroup>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  language_set?: Maybe<CloudLanguageSetEnum>;
  last_logged_in_at?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password_update_flag?: Maybe<Scalars['Boolean']['output']>;
  password_updated_at?: Maybe<Scalars['BigInt']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<CloudRole>>>;
  session?: Maybe<CloudSession>;
  tenant?: Maybe<CloudTenant>;
  timezone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudUserGroup = {
  __typename?: 'CloudUserGroup';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  delete_flag?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<CloudTenant>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudUserGroupInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  delete_flag?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<CloudTenantInput>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudUserInput = {
  account?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<InputMaybe<CloudUserGroupInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  language_set?: InputMaybe<CloudLanguageSetEnum>;
  last_logged_in_at?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  password_updated_at?: InputMaybe<Scalars['BigInt']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<CloudRoleInput>>>;
  session?: InputMaybe<CloudSessionInput>;
  tenant?: InputMaybe<CloudTenantInput>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CreateStorageInput = {
  smCreateStorageRequest?: InputMaybe<SmCreateStorageRequestInput>;
};

export type DeleteStorageInput = {
  resourceName?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateStorage?: Maybe<SmCreateStorageResponse>;
  DeleteStorage?: Maybe<Scalars['Boolean']['output']>;
  UpdateStorage?: Maybe<SmUpdateStorageResponse>;
};


export type MutationCreateStorageArgs = {
  input?: InputMaybe<CreateStorageInput>;
};


export type MutationDeleteStorageArgs = {
  input?: InputMaybe<DeleteStorageInput>;
};


export type MutationUpdateStorageArgs = {
  input?: InputMaybe<UpdateStorageInput>;
};

export type Query = {
  __typename?: 'Query';
  GetStorage?: Maybe<SmGetStorageResponse>;
  GetStorageStatus?: Maybe<SmGetStorageStatusResponse>;
  GetStorages?: Maybe<SmGetStoragesResponse>;
};


export type QueryGetStorageArgs = {
  resourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetStorageStatusArgs = {
  resourceName?: InputMaybe<Scalars['String']['input']>;
};

export type SmCreateStorageRequest = {
  __typename?: 'SmCreateStorageRequest';
  configuration?: Maybe<SmStorageConfigurationType>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SmStorageTypeEnum>;
};

export type SmCreateStorageRequestInput = {
  configuration?: InputMaybe<SmStorageConfigurationTypeInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmStorageTypeEnum>;
};

export type SmCreateStorageResponse = {
  __typename?: 'SmCreateStorageResponse';
  storage?: Maybe<SmStorage>;
};

export type SmCreateStorageResponseInput = {
  storage?: InputMaybe<SmStorageInput>;
};

export type SmGetStorageResponse = {
  __typename?: 'SmGetStorageResponse';
  storage?: Maybe<SmStorage>;
};

export type SmGetStorageResponseInput = {
  storage?: InputMaybe<SmStorageInput>;
};

export type SmGetStorageStatusResponse = {
  __typename?: 'SmGetStorageStatusResponse';
  status?: Maybe<SmStorageStatus>;
};

export type SmGetStorageStatusResponseInput = {
  status?: InputMaybe<SmStorageStatusInput>;
};

export type SmGetStoragesResponse = {
  __typename?: 'SmGetStoragesResponse';
  storages?: Maybe<Array<Maybe<SmStorage>>>;
};

export type SmGetStoragesResponseInput = {
  storages?: InputMaybe<Array<InputMaybe<SmStorageInput>>>;
};

export type SmStorage = {
  __typename?: 'SmStorage';
  primary?: Maybe<Scalars['Boolean']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  spec?: Maybe<SmStorageSpec>;
  status?: Maybe<SmStorageStatus>;
};

export type SmStorageConfigurationAwsS3 = {
  __typename?: 'SmStorageConfigurationAwsS3';
  access_key_id?: Maybe<Scalars['String']['output']>;
  bucket?: Maybe<Scalars['String']['output']>;
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationAwsS3Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
};

export enum SmStorageConfigurationAwsS3RegionEnum {
  AfSouth_1 = 'AF_SOUTH_1',
  ApEast_1 = 'AP_EAST_1',
  ApNortheast_1 = 'AP_NORTHEAST_1',
  ApNortheast_2 = 'AP_NORTHEAST_2',
  ApNortheast_3 = 'AP_NORTHEAST_3',
  ApSoutheast_1 = 'AP_SOUTHEAST_1',
  ApSoutheast_2 = 'AP_SOUTHEAST_2',
  ApSoutheast_3 = 'AP_SOUTHEAST_3',
  ApSoutheast_4 = 'AP_SOUTHEAST_4',
  ApSouth_1 = 'AP_SOUTH_1',
  ApSouth_2 = 'AP_SOUTH_2',
  CaCentral_1 = 'CA_CENTRAL_1',
  CaWest_1 = 'CA_WEST_1',
  EuCentral_1 = 'EU_CENTRAL_1',
  EuCentral_2 = 'EU_CENTRAL_2',
  EuNorth_1 = 'EU_NORTH_1',
  EuSouth_1 = 'EU_SOUTH_1',
  EuSouth_2 = 'EU_SOUTH_2',
  EuWest_1 = 'EU_WEST_1',
  EuWest_2 = 'EU_WEST_2',
  EuWest_3 = 'EU_WEST_3',
  IlCentral_1 = 'IL_CENTRAL_1',
  MeCentral_1 = 'ME_CENTRAL_1',
  MeSouth_1 = 'ME_SOUTH_1',
  SaEast_1 = 'SA_EAST_1',
  UsEast_1 = 'US_EAST_1',
  UsEast_2 = 'US_EAST_2',
  UsWest_1 = 'US_WEST_1',
  UsWest_2 = 'US_WEST_2'
}

export type SmStorageConfigurationAzureBlob = {
  __typename?: 'SmStorageConfigurationAzureBlob';
  storage_account_key?: Maybe<Scalars['String']['output']>;
  storage_account_name?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationAzureBlobInput = {
  storage_account_key?: InputMaybe<Scalars['String']['input']>;
  storage_account_name?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageConfigurationCephRbd = {
  __typename?: 'SmStorageConfigurationCephRbd';
  fsid?: Maybe<Scalars['String']['output']>;
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_key?: Maybe<Scalars['String']['output']>;
};

export enum SmStorageConfigurationCephRbdImageFeaturesEnum {
  DataPool = 'DATA_POOL',
  DeepFlatten = 'DEEP_FLATTEN',
  ExclusiveLock = 'EXCLUSIVE_LOCK',
  FastDiff = 'FAST_DIFF',
  Journaling = 'JOURNALING',
  Layering = 'LAYERING',
  ObjectMap = 'OBJECT_MAP',
  Striping = 'STRIPING'
}

export type SmStorageConfigurationCephRbdInput = {
  fsid?: InputMaybe<Scalars['String']['input']>;
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_key?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageConfigurationNfs = {
  __typename?: 'SmStorageConfigurationNfs';
  server?: Maybe<Scalars['String']['output']>;
  share?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationNfsInput = {
  server?: InputMaybe<Scalars['String']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageConfigurationType = {
  __typename?: 'SmStorageConfigurationType';
  access_key_id?: Maybe<Scalars['String']['output']>;
  bucket?: Maybe<Scalars['String']['output']>;
  fsid?: Maybe<Scalars['String']['output']>;
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
  server?: Maybe<Scalars['String']['output']>;
  share?: Maybe<Scalars['String']['output']>;
  storage_account_key?: Maybe<Scalars['String']['output']>;
  storage_account_name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_key?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationTypeInput = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  fsid?: InputMaybe<Scalars['String']['input']>;
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
  server?: InputMaybe<Scalars['String']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
  storage_account_key?: InputMaybe<Scalars['String']['input']>;
  storage_account_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_key?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageInput = {
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  spec?: InputMaybe<SmStorageSpecInput>;
  status?: InputMaybe<SmStorageStatusInput>;
};

export type SmStorageSpec = {
  __typename?: 'SmStorageSpec';
  configuration?: Maybe<SmStorageConfigurationType>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SmStorageTypeEnum>;
};

export type SmStorageSpecInput = {
  configuration?: InputMaybe<SmStorageConfigurationTypeInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmStorageTypeEnum>;
};

export enum SmStorageStateCodeEnum {
  CdmBackupStorageStateAvailable = 'CDM_BACKUP_STORAGE_STATE_AVAILABLE',
  CdmBackupStorageStateError = 'CDM_BACKUP_STORAGE_STATE_ERROR',
  CdmBackupStorageStateUnavailable = 'CDM_BACKUP_STORAGE_STATE_UNAVAILABLE'
}

export type SmStorageStatus = {
  __typename?: 'SmStorageStatus';
  capacity?: Maybe<Scalars['BigInt']['output']>;
  free_space?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<SmStorageStateCodeEnum>;
};

export type SmStorageStatusInput = {
  capacity?: InputMaybe<Scalars['BigInt']['input']>;
  free_space?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<SmStorageStateCodeEnum>;
};

export enum SmStorageTypeEnum {
  CdmBackupStorageTypeAwsS3 = 'CDM_BACKUP_STORAGE_TYPE_AWS_S3',
  CdmBackupStorageTypeAzureBlob = 'CDM_BACKUP_STORAGE_TYPE_AZURE_BLOB',
  CdmBackupStorageTypeCephRbd = 'CDM_BACKUP_STORAGE_TYPE_CEPH_RBD',
  CdmBackupStorageTypeNfs = 'CDM_BACKUP_STORAGE_TYPE_NFS'
}

export type SmUpdateStorageRequest = {
  __typename?: 'SmUpdateStorageRequest';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SmUpdateStorageRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SmUpdateStorageResponse = {
  __typename?: 'SmUpdateStorageResponse';
  storage?: Maybe<SmStorage>;
};

export type SmUpdateStorageResponseInput = {
  storage?: InputMaybe<SmStorageInput>;
};

export type UpdateStorageInput = {
  resourceName?: InputMaybe<Scalars['String']['input']>;
  smUpdateStorageRequest?: InputMaybe<SmUpdateStorageRequestInput>;
};
