import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { NeverStopContext } from '../../../context';
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
  Eng = 'eng',
  Kor = 'kor'
}

export type CloudRole = {
  __typename?: 'CloudRole';
  id?: Maybe<Scalars['BigInt']['output']>;
  role?: Maybe<CloudRoleEnum | `${CloudRoleEnum}`>;
  solution?: Maybe<Scalars['String']['output']>;
};

export enum CloudRoleEnum {
  Admin = 'admin',
  Manager = 'manager',
  Operator = 'operator',
  User = 'user'
}

export type CloudRoleInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  role?: InputMaybe<CloudRoleEnum | `${CloudRoleEnum}`>;
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
  language_set?: Maybe<CloudLanguageSetEnum | `${CloudLanguageSetEnum}`>;
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
  language_set?: InputMaybe<CloudLanguageSetEnum | `${CloudLanguageSetEnum}`>;
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
  type?: Maybe<SmStorageTypeEnum | `${SmStorageTypeEnum}`>;
};

export type SmCreateStorageRequestInput = {
  configuration?: InputMaybe<SmStorageConfigurationTypeInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmStorageTypeEnum | `${SmStorageTypeEnum}`>;
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
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationAwsS3Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
};

export enum SmStorageConfigurationAwsS3RegionEnum {
  AfSouth_1 = 'af-south-1',
  ApEast_1 = 'ap-east-1',
  ApNortheast_1 = 'ap-northeast-1',
  ApNortheast_2 = 'ap-northeast-2',
  ApNortheast_3 = 'ap-northeast-3',
  ApSoutheast_1 = 'ap-southeast-1',
  ApSoutheast_2 = 'ap-southeast-2',
  ApSoutheast_3 = 'ap-southeast-3',
  ApSoutheast_4 = 'ap-southeast-4',
  ApSouth_1 = 'ap-south-1',
  ApSouth_2 = 'ap-south-2',
  CaCentral_1 = 'ca-central-1',
  CaWest_1 = 'ca-west-1',
  EuCentral_1 = 'eu-central-1',
  EuCentral_2 = 'eu-central-2',
  EuNorth_1 = 'eu-north-1',
  EuSouth_1 = 'eu-south-1',
  EuSouth_2 = 'eu-south-2',
  EuWest_1 = 'eu-west-1',
  EuWest_2 = 'eu-west-2',
  EuWest_3 = 'eu-west-3',
  IlCentral_1 = 'il-central-1',
  MeCentral_1 = 'me-central-1',
  MeSouth_1 = 'me-south-1',
  SaEast_1 = 'sa-east-1',
  UsEast_1 = 'us-east-1',
  UsEast_2 = 'us-east-2',
  UsWest_1 = 'us-west-1',
  UsWest_2 = 'us-west-2'
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
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_key?: Maybe<Scalars['String']['output']>;
};

export enum SmStorageConfigurationCephRbdImageFeaturesEnum {
  DataPool = 'data-pool',
  DeepFlatten = 'deep-flatten',
  ExclusiveLock = 'exclusive-lock',
  FastDiff = 'fast-diff',
  Journaling = 'journaling',
  Layering = 'layering',
  ObjectMap = 'object-map',
  Striping = 'striping'
}

export type SmStorageConfigurationCephRbdInput = {
  fsid?: InputMaybe<Scalars['String']['input']>;
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
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
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
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
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
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
  type?: Maybe<SmStorageTypeEnum | `${SmStorageTypeEnum}`>;
};

export type SmStorageSpecInput = {
  configuration?: InputMaybe<SmStorageConfigurationTypeInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmStorageTypeEnum | `${SmStorageTypeEnum}`>;
};

export enum SmStorageStateCodeEnum {
  CdmBackupStorageStateAvailable = 'cdm.backup.storage.state.available',
  CdmBackupStorageStateError = 'cdm.backup.storage.state.error',
  CdmBackupStorageStateUnavailable = 'cdm.backup.storage.state.unavailable'
}

export type SmStorageStatus = {
  __typename?: 'SmStorageStatus';
  capacity?: Maybe<Scalars['BigInt']['output']>;
  free_space?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<SmStorageStateCodeEnum | `${SmStorageStateCodeEnum}`>;
};

export type SmStorageStatusInput = {
  capacity?: InputMaybe<Scalars['BigInt']['input']>;
  free_space?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<SmStorageStateCodeEnum | `${SmStorageStateCodeEnum}`>;
};

export enum SmStorageTypeEnum {
  CdmBackupStorageTypeAwsS3 = 'cdm.backup.storage.type.aws.s3',
  CdmBackupStorageTypeAzureBlob = 'cdm.backup.storage.type.azure.blob',
  CdmBackupStorageTypeCephRbd = 'cdm.backup.storage.type.ceph.rbd',
  CdmBackupStorageTypeNfs = 'cdm.backup.storage.type.nfs'
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CloudLanguageSetEnum: CloudLanguageSetEnum;
  CloudRole: ResolverTypeWrapper<CloudRole>;
  CloudRoleEnum: CloudRoleEnum;
  CloudRoleInput: CloudRoleInput;
  CloudSession: ResolverTypeWrapper<CloudSession>;
  CloudSessionInput: CloudSessionInput;
  CloudTenant: ResolverTypeWrapper<CloudTenant>;
  CloudTenantInput: CloudTenantInput;
  CloudTenantSolution: ResolverTypeWrapper<CloudTenantSolution>;
  CloudTenantSolutionInput: CloudTenantSolutionInput;
  CloudUser: ResolverTypeWrapper<CloudUser>;
  CloudUserGroup: ResolverTypeWrapper<CloudUserGroup>;
  CloudUserGroupInput: CloudUserGroupInput;
  CloudUserInput: CloudUserInput;
  CreateStorageInput: CreateStorageInput;
  DeleteStorageInput: DeleteStorageInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SmCreateStorageRequest: ResolverTypeWrapper<SmCreateStorageRequest>;
  SmCreateStorageRequestInput: SmCreateStorageRequestInput;
  SmCreateStorageResponse: ResolverTypeWrapper<SmCreateStorageResponse>;
  SmCreateStorageResponseInput: SmCreateStorageResponseInput;
  SmGetStorageResponse: ResolverTypeWrapper<SmGetStorageResponse>;
  SmGetStorageResponseInput: SmGetStorageResponseInput;
  SmGetStorageStatusResponse: ResolverTypeWrapper<SmGetStorageStatusResponse>;
  SmGetStorageStatusResponseInput: SmGetStorageStatusResponseInput;
  SmGetStoragesResponse: ResolverTypeWrapper<SmGetStoragesResponse>;
  SmGetStoragesResponseInput: SmGetStoragesResponseInput;
  SmStorage: ResolverTypeWrapper<SmStorage>;
  SmStorageConfigurationAwsS3: ResolverTypeWrapper<SmStorageConfigurationAwsS3>;
  SmStorageConfigurationAwsS3Input: SmStorageConfigurationAwsS3Input;
  SmStorageConfigurationAwsS3RegionEnum: SmStorageConfigurationAwsS3RegionEnum;
  SmStorageConfigurationAzureBlob: ResolverTypeWrapper<SmStorageConfigurationAzureBlob>;
  SmStorageConfigurationAzureBlobInput: SmStorageConfigurationAzureBlobInput;
  SmStorageConfigurationCephRbd: ResolverTypeWrapper<SmStorageConfigurationCephRbd>;
  SmStorageConfigurationCephRbdImageFeaturesEnum: SmStorageConfigurationCephRbdImageFeaturesEnum;
  SmStorageConfigurationCephRbdInput: SmStorageConfigurationCephRbdInput;
  SmStorageConfigurationNfs: ResolverTypeWrapper<SmStorageConfigurationNfs>;
  SmStorageConfigurationNfsInput: SmStorageConfigurationNfsInput;
  SmStorageConfigurationType: ResolverTypeWrapper<SmStorageConfigurationType>;
  SmStorageConfigurationTypeInput: SmStorageConfigurationTypeInput;
  SmStorageInput: SmStorageInput;
  SmStorageSpec: ResolverTypeWrapper<SmStorageSpec>;
  SmStorageSpecInput: SmStorageSpecInput;
  SmStorageStateCodeEnum: SmStorageStateCodeEnum;
  SmStorageStatus: ResolverTypeWrapper<SmStorageStatus>;
  SmStorageStatusInput: SmStorageStatusInput;
  SmStorageTypeEnum: SmStorageTypeEnum;
  SmUpdateStorageRequest: ResolverTypeWrapper<SmUpdateStorageRequest>;
  SmUpdateStorageRequestInput: SmUpdateStorageRequestInput;
  SmUpdateStorageResponse: ResolverTypeWrapper<SmUpdateStorageResponse>;
  SmUpdateStorageResponseInput: SmUpdateStorageResponseInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateStorageInput: UpdateStorageInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  CloudRole: CloudRole;
  CloudRoleInput: CloudRoleInput;
  CloudSession: CloudSession;
  CloudSessionInput: CloudSessionInput;
  CloudTenant: CloudTenant;
  CloudTenantInput: CloudTenantInput;
  CloudTenantSolution: CloudTenantSolution;
  CloudTenantSolutionInput: CloudTenantSolutionInput;
  CloudUser: CloudUser;
  CloudUserGroup: CloudUserGroup;
  CloudUserGroupInput: CloudUserGroupInput;
  CloudUserInput: CloudUserInput;
  CreateStorageInput: CreateStorageInput;
  DeleteStorageInput: DeleteStorageInput;
  JSONObject: Scalars['JSONObject']['output'];
  Mutation: {};
  Query: {};
  SmCreateStorageRequest: SmCreateStorageRequest;
  SmCreateStorageRequestInput: SmCreateStorageRequestInput;
  SmCreateStorageResponse: SmCreateStorageResponse;
  SmCreateStorageResponseInput: SmCreateStorageResponseInput;
  SmGetStorageResponse: SmGetStorageResponse;
  SmGetStorageResponseInput: SmGetStorageResponseInput;
  SmGetStorageStatusResponse: SmGetStorageStatusResponse;
  SmGetStorageStatusResponseInput: SmGetStorageStatusResponseInput;
  SmGetStoragesResponse: SmGetStoragesResponse;
  SmGetStoragesResponseInput: SmGetStoragesResponseInput;
  SmStorage: SmStorage;
  SmStorageConfigurationAwsS3: SmStorageConfigurationAwsS3;
  SmStorageConfigurationAwsS3Input: SmStorageConfigurationAwsS3Input;
  SmStorageConfigurationAzureBlob: SmStorageConfigurationAzureBlob;
  SmStorageConfigurationAzureBlobInput: SmStorageConfigurationAzureBlobInput;
  SmStorageConfigurationCephRbd: SmStorageConfigurationCephRbd;
  SmStorageConfigurationCephRbdInput: SmStorageConfigurationCephRbdInput;
  SmStorageConfigurationNfs: SmStorageConfigurationNfs;
  SmStorageConfigurationNfsInput: SmStorageConfigurationNfsInput;
  SmStorageConfigurationType: SmStorageConfigurationType;
  SmStorageConfigurationTypeInput: SmStorageConfigurationTypeInput;
  SmStorageInput: SmStorageInput;
  SmStorageSpec: SmStorageSpec;
  SmStorageSpecInput: SmStorageSpecInput;
  SmStorageStatus: SmStorageStatus;
  SmStorageStatusInput: SmStorageStatusInput;
  SmUpdateStorageRequest: SmUpdateStorageRequest;
  SmUpdateStorageRequestInput: SmUpdateStorageRequestInput;
  SmUpdateStorageResponse: SmUpdateStorageResponse;
  SmUpdateStorageResponseInput: SmUpdateStorageResponseInput;
  String: Scalars['String']['output'];
  UpdateStorageInput: UpdateStorageInput;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CloudLanguageSetEnumResolvers = { ENG: 'eng', KOR: 'kor' };

export type CloudRoleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudRole'] = ResolversParentTypes['CloudRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CloudRoleEnum']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudRoleEnumResolvers = { ADMIN: 'admin', MANAGER: 'manager', OPERATOR: 'operator', USER: 'user' };

export type CloudSessionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudSession'] = ResolversParentTypes['CloudSession']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudTenantResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudTenant'] = ResolversParentTypes['CloudTenant']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudTenantSolution']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  use_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudTenantSolutionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudTenantSolution'] = ResolversParentTypes['CloudTenantSolution']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUser'] = ResolversParentTypes['CloudUser']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudUserGroup']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  language_set?: Resolver<Maybe<ResolversTypes['CloudLanguageSetEnum']>, ParentType, ContextType>;
  last_logged_in_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  password_updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudRole']>>>, ParentType, ContextType>;
  session?: Resolver<Maybe<ResolversTypes['CloudSession']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserGroup'] = ResolversParentTypes['CloudUserGroup']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  delete_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CreateStorage?: Resolver<Maybe<ResolversTypes['SmCreateStorageResponse']>, ParentType, ContextType, Partial<MutationCreateStorageArgs>>;
  DeleteStorage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteStorageArgs>>;
  UpdateStorage?: Resolver<Maybe<ResolversTypes['SmUpdateStorageResponse']>, ParentType, ContextType, Partial<MutationUpdateStorageArgs>>;
}>;

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetStorage?: Resolver<Maybe<ResolversTypes['SmGetStorageResponse']>, ParentType, ContextType, Partial<QueryGetStorageArgs>>;
  GetStorageStatus?: Resolver<Maybe<ResolversTypes['SmGetStorageStatusResponse']>, ParentType, ContextType, Partial<QueryGetStorageStatusArgs>>;
  GetStorages?: Resolver<Maybe<ResolversTypes['SmGetStoragesResponse']>, ParentType, ContextType>;
}>;

export type SmCreateStorageRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmCreateStorageRequest'] = ResolversParentTypes['SmCreateStorageRequest']> = ResolversObject<{
  configuration?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationType']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SmStorageTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmCreateStorageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmCreateStorageResponse'] = ResolversParentTypes['SmCreateStorageResponse']> = ResolversObject<{
  storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmGetStorageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmGetStorageResponse'] = ResolversParentTypes['SmGetStorageResponse']> = ResolversObject<{
  storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmGetStorageStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmGetStorageStatusResponse'] = ResolversParentTypes['SmGetStorageStatusResponse']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['SmStorageStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmGetStoragesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmGetStoragesResponse'] = ResolversParentTypes['SmGetStoragesResponse']> = ResolversObject<{
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmStorage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorage'] = ResolversParentTypes['SmStorage']> = ResolversObject<{
  primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['SmStorageSpec']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SmStorageStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationAwsS3Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationAwsS3'] = ResolversParentTypes['SmStorageConfigurationAwsS3']> = ResolversObject<{
  access_key_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationAwsS3RegionEnum']>, ParentType, ContextType>;
  secret_access_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationAwsS3RegionEnumResolvers = { AF_SOUTH_1: 'af-south-1', AP_EAST_1: 'ap-east-1', AP_NORTHEAST_1: 'ap-northeast-1', AP_NORTHEAST_2: 'ap-northeast-2', AP_NORTHEAST_3: 'ap-northeast-3', AP_SOUTHEAST_1: 'ap-southeast-1', AP_SOUTHEAST_2: 'ap-southeast-2', AP_SOUTHEAST_3: 'ap-southeast-3', AP_SOUTHEAST_4: 'ap-southeast-4', AP_SOUTH_1: 'ap-south-1', AP_SOUTH_2: 'ap-south-2', CA_CENTRAL_1: 'ca-central-1', CA_WEST_1: 'ca-west-1', EU_CENTRAL_1: 'eu-central-1', EU_CENTRAL_2: 'eu-central-2', EU_NORTH_1: 'eu-north-1', EU_SOUTH_1: 'eu-south-1', EU_SOUTH_2: 'eu-south-2', EU_WEST_1: 'eu-west-1', EU_WEST_2: 'eu-west-2', EU_WEST_3: 'eu-west-3', IL_CENTRAL_1: 'il-central-1', ME_CENTRAL_1: 'me-central-1', ME_SOUTH_1: 'me-south-1', SA_EAST_1: 'sa-east-1', US_EAST_1: 'us-east-1', US_EAST_2: 'us-east-2', US_WEST_1: 'us-west-1', US_WEST_2: 'us-west-2' };

export type SmStorageConfigurationAzureBlobResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationAzureBlob'] = ResolversParentTypes['SmStorageConfigurationAzureBlob']> = ResolversObject<{
  storage_account_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_account_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationCephRbdResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationCephRbd'] = ResolversParentTypes['SmStorageConfigurationCephRbd']> = ResolversObject<{
  fsid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_features?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmStorageConfigurationCephRbdImageFeaturesEnum']>>>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationCephRbdImageFeaturesEnumResolvers = { DATA_POOL: 'data-pool', DEEP_FLATTEN: 'deep-flatten', EXCLUSIVE_LOCK: 'exclusive-lock', FAST_DIFF: 'fast-diff', JOURNALING: 'journaling', LAYERING: 'layering', OBJECT_MAP: 'object-map', STRIPING: 'striping' };

export type SmStorageConfigurationNfsResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationNfs'] = ResolversParentTypes['SmStorageConfigurationNfs']> = ResolversObject<{
  server?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  share?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationTypeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationType'] = ResolversParentTypes['SmStorageConfigurationType']> = ResolversObject<{
  access_key_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fsid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_features?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmStorageConfigurationCephRbdImageFeaturesEnum']>>>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationAwsS3RegionEnum']>, ParentType, ContextType>;
  secret_access_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  server?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  share?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_account_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_account_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageSpec'] = ResolversParentTypes['SmStorageSpec']> = ResolversObject<{
  configuration?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationType']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SmStorageTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageStateCodeEnumResolvers = { CDM_BACKUP_STORAGE_STATE_AVAILABLE: 'cdm.backup.storage.state.available', CDM_BACKUP_STORAGE_STATE_ERROR: 'cdm.backup.storage.state.error', CDM_BACKUP_STORAGE_STATE_UNAVAILABLE: 'cdm.backup.storage.state.unavailable' };

export type SmStorageStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageStatus'] = ResolversParentTypes['SmStorageStatus']> = ResolversObject<{
  capacity?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  free_space?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['SmStorageStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageTypeEnumResolvers = { CDM_BACKUP_STORAGE_TYPE_AWS_S3: 'cdm.backup.storage.type.aws.s3', CDM_BACKUP_STORAGE_TYPE_AZURE_BLOB: 'cdm.backup.storage.type.azure.blob', CDM_BACKUP_STORAGE_TYPE_CEPH_RBD: 'cdm.backup.storage.type.ceph.rbd', CDM_BACKUP_STORAGE_TYPE_NFS: 'cdm.backup.storage.type.nfs' };

export type SmUpdateStorageRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmUpdateStorageRequest'] = ResolversParentTypes['SmUpdateStorageRequest']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmUpdateStorageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmUpdateStorageResponse'] = ResolversParentTypes['SmUpdateStorageResponse']> = ResolversObject<{
  storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  CloudLanguageSetEnum?: CloudLanguageSetEnumResolvers;
  CloudRole?: CloudRoleResolvers<ContextType>;
  CloudRoleEnum?: CloudRoleEnumResolvers;
  CloudSession?: CloudSessionResolvers<ContextType>;
  CloudTenant?: CloudTenantResolvers<ContextType>;
  CloudTenantSolution?: CloudTenantSolutionResolvers<ContextType>;
  CloudUser?: CloudUserResolvers<ContextType>;
  CloudUserGroup?: CloudUserGroupResolvers<ContextType>;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SmCreateStorageRequest?: SmCreateStorageRequestResolvers<ContextType>;
  SmCreateStorageResponse?: SmCreateStorageResponseResolvers<ContextType>;
  SmGetStorageResponse?: SmGetStorageResponseResolvers<ContextType>;
  SmGetStorageStatusResponse?: SmGetStorageStatusResponseResolvers<ContextType>;
  SmGetStoragesResponse?: SmGetStoragesResponseResolvers<ContextType>;
  SmStorage?: SmStorageResolvers<ContextType>;
  SmStorageConfigurationAwsS3?: SmStorageConfigurationAwsS3Resolvers<ContextType>;
  SmStorageConfigurationAwsS3RegionEnum?: SmStorageConfigurationAwsS3RegionEnumResolvers;
  SmStorageConfigurationAzureBlob?: SmStorageConfigurationAzureBlobResolvers<ContextType>;
  SmStorageConfigurationCephRbd?: SmStorageConfigurationCephRbdResolvers<ContextType>;
  SmStorageConfigurationCephRbdImageFeaturesEnum?: SmStorageConfigurationCephRbdImageFeaturesEnumResolvers;
  SmStorageConfigurationNfs?: SmStorageConfigurationNfsResolvers<ContextType>;
  SmStorageConfigurationType?: SmStorageConfigurationTypeResolvers<ContextType>;
  SmStorageSpec?: SmStorageSpecResolvers<ContextType>;
  SmStorageStateCodeEnum?: SmStorageStateCodeEnumResolvers;
  SmStorageStatus?: SmStorageStatusResolvers<ContextType>;
  SmStorageTypeEnum?: SmStorageTypeEnumResolvers;
  SmUpdateStorageRequest?: SmUpdateStorageRequestResolvers<ContextType>;
  SmUpdateStorageResponse?: SmUpdateStorageResponseResolvers<ContextType>;
}>;

