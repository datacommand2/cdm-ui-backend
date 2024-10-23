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

export type CancelRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudDayOfMonthEnum {
  Eight = 'EIGHT',
  Eighteen = 'EIGHTEEN',
  Eleven = 'ELEVEN',
  Fifteen = 'FIFTEEN',
  Five = 'FIVE',
  Four = 'FOUR',
  Fourteen = 'FOURTEEN',
  LastDay = 'LAST_DAY',
  Nine = 'NINE',
  Nineteen = 'NINETEEN',
  One = 'ONE',
  Seven = 'SEVEN',
  Seventeen = 'SEVENTEEN',
  Six = 'SIX',
  Sixteen = 'SIXTEEN',
  Ten = 'TEN',
  Thirteen = 'THIRTEEN',
  Thirty = 'THIRTY',
  ThirtyOne = 'THIRTY_ONE',
  Three = 'THREE',
  Twelve = 'TWELVE',
  Twenty = 'TWENTY',
  TwentyEight = 'TWENTY_EIGHT',
  TwentyFive = 'TWENTY_FIVE',
  TwentyFour = 'TWENTY_FOUR',
  TwentyNine = 'TWENTY_NINE',
  TwentyOne = 'TWENTY_ONE',
  TwentySeven = 'TWENTY_SEVEN',
  TwentySix = 'TWENTY_SIX',
  TwentyThree = 'TWENTY_THREE',
  TwentyTwo = 'TWENTY_TWO',
  Two = 'TWO'
}

export enum CloudIntervalHourEnum {
  Four = 'FOUR',
  One = 'ONE',
  Six = 'SIX',
  Three = 'THREE',
  Twelve = 'TWELVE',
  Two = 'TWO'
}

export enum CloudIntervalMinuteEnum {
  Fifteen = 'FIFTEEN',
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  Six = 'SIX',
  Ten = 'TEN',
  Thirty = 'THIRTY',
  Three = 'THREE',
  Twelve = 'TWELVE',
  Twenty = 'TWENTY',
  Two = 'TWO'
}

export enum CloudIntervalMonthEnum {
  Four = 'FOUR',
  One = 'ONE',
  Six = 'SIX',
  Three = 'THREE',
  Twelve = 'TWELVE',
  Two = 'TWO'
}

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

export type CloudSchedule = {
  __typename?: 'CloudSchedule';
  activation_flag?: Maybe<Scalars['Boolean']['output']>;
  day_of_month?: Maybe<CloudDayOfMonthEnum>;
  day_of_week?: Maybe<CloudWeekEnum>;
  end_at?: Maybe<Scalars['BigInt']['output']>;
  hour?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  interval_day?: Maybe<Scalars['BigInt']['output']>;
  interval_hour?: Maybe<CloudIntervalHourEnum>;
  interval_minute?: Maybe<CloudIntervalMinuteEnum>;
  interval_month?: Maybe<CloudIntervalMonthEnum>;
  interval_week?: Maybe<Scalars['BigInt']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  minute?: Maybe<Scalars['BigInt']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CloudScheduleTypeEnum>;
  week_of_month?: Maybe<CloudWeekOfMonthEnum>;
};

export type CloudScheduleInput = {
  activation_flag?: InputMaybe<Scalars['Boolean']['input']>;
  day_of_month?: InputMaybe<CloudDayOfMonthEnum>;
  day_of_week?: InputMaybe<CloudWeekEnum>;
  end_at?: InputMaybe<Scalars['BigInt']['input']>;
  hour?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  interval_day?: InputMaybe<Scalars['BigInt']['input']>;
  interval_hour?: InputMaybe<CloudIntervalHourEnum>;
  interval_minute?: InputMaybe<CloudIntervalMinuteEnum>;
  interval_month?: InputMaybe<CloudIntervalMonthEnum>;
  interval_week?: InputMaybe<Scalars['BigInt']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  minute?: InputMaybe<Scalars['BigInt']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CloudScheduleTypeEnum>;
  week_of_month?: InputMaybe<CloudWeekOfMonthEnum>;
};

export enum CloudScheduleTypeEnum {
  ScheduleTypeDaily = 'SCHEDULE_TYPE_DAILY',
  ScheduleTypeDayOfMonthly = 'SCHEDULE_TYPE_DAY_OF_MONTHLY',
  ScheduleTypeHourly = 'SCHEDULE_TYPE_HOURLY',
  ScheduleTypeMinutely = 'SCHEDULE_TYPE_MINUTELY',
  ScheduleTypeMonthly = 'SCHEDULE_TYPE_MONTHLY',
  ScheduleTypeSpecified = 'SCHEDULE_TYPE_SPECIFIED',
  ScheduleTypeWeekly = 'SCHEDULE_TYPE_WEEKLY',
  ScheduleTypeWeekOfMonthly = 'SCHEDULE_TYPE_WEEK_OF_MONTHLY',
  ScheduleTypeYearly = 'SCHEDULE_TYPE_YEARLY'
}

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

export enum CloudWeekEnum {
  Fri = 'FRI',
  Mon = 'MON',
  Sat = 'SAT',
  Sun = 'SUN',
  Thu = 'THU',
  Tue = 'TUE',
  Wed = 'WED'
}

export enum CloudWeekOfMonthEnum {
  Five = 'FIVE',
  Four = 'FOUR',
  LastWeek = 'LAST_WEEK',
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO'
}

export type ConfirmRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRecoveryJobScheduleInput = {
  openShiftDrRecoveryJobScheduleRequest?: InputMaybe<OpenShiftDrRecoveryJobScheduleRequestInput>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRecoveryPlanInput = {
  openShiftDrRecoveryPlanRequest?: InputMaybe<OpenShiftDrRecoveryPlanRequestInput>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteRecoveryJobScheduleInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobScheduleResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteRecoveryPlanInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteRecoveryResultInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryResultResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type ForcedConfirmRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type IgnoreRollbackRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CancelRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  ConfirmRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  CreateRecoveryJobSchedule?: Maybe<OpenShiftDrRecoveryJobScheduleResponse>;
  CreateRecoveryPlan?: Maybe<OpenShiftDrRecoveryPlanResponse>;
  DeleteRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  DeleteRecoveryJobSchedule?: Maybe<Scalars['Boolean']['output']>;
  DeleteRecoveryPlan?: Maybe<Scalars['Boolean']['output']>;
  DeleteRecoveryResult?: Maybe<Scalars['Boolean']['output']>;
  ForcedConfirmRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  IgnoreRollbackRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  PauseRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  ResumeRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  RetryRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  RollbackMigrationRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  RollbackSimulationRecoveryJob?: Maybe<Scalars['Boolean']['output']>;
  UpdateRecoveryJobSchedule?: Maybe<OpenShiftDrRecoveryJobScheduleResponse>;
  UpdateRecoveryPlan?: Maybe<OpenShiftDrRecoveryPlanResponse>;
};


export type MutationCancelRecoveryJobArgs = {
  input?: InputMaybe<CancelRecoveryJobInput>;
};


export type MutationConfirmRecoveryJobArgs = {
  input?: InputMaybe<ConfirmRecoveryJobInput>;
};


export type MutationCreateRecoveryJobScheduleArgs = {
  input?: InputMaybe<CreateRecoveryJobScheduleInput>;
};


export type MutationCreateRecoveryPlanArgs = {
  input?: InputMaybe<CreateRecoveryPlanInput>;
};


export type MutationDeleteRecoveryJobArgs = {
  input?: InputMaybe<DeleteRecoveryJobInput>;
};


export type MutationDeleteRecoveryJobScheduleArgs = {
  input?: InputMaybe<DeleteRecoveryJobScheduleInput>;
};


export type MutationDeleteRecoveryPlanArgs = {
  input?: InputMaybe<DeleteRecoveryPlanInput>;
};


export type MutationDeleteRecoveryResultArgs = {
  input?: InputMaybe<DeleteRecoveryResultInput>;
};


export type MutationForcedConfirmRecoveryJobArgs = {
  input?: InputMaybe<ForcedConfirmRecoveryJobInput>;
};


export type MutationIgnoreRollbackRecoveryJobArgs = {
  input?: InputMaybe<IgnoreRollbackRecoveryJobInput>;
};


export type MutationPauseRecoveryJobArgs = {
  input?: InputMaybe<PauseRecoveryJobInput>;
};


export type MutationResumeRecoveryJobArgs = {
  input?: InputMaybe<ResumeRecoveryJobInput>;
};


export type MutationRetryRecoveryJobArgs = {
  input?: InputMaybe<RetryRecoveryJobInput>;
};


export type MutationRollbackMigrationRecoveryJobArgs = {
  input?: InputMaybe<RollbackMigrationRecoveryJobInput>;
};


export type MutationRollbackSimulationRecoveryJobArgs = {
  input?: InputMaybe<RollbackSimulationRecoveryJobInput>;
};


export type MutationUpdateRecoveryJobScheduleArgs = {
  input?: InputMaybe<UpdateRecoveryJobScheduleInput>;
};


export type MutationUpdateRecoveryPlanArgs = {
  input?: InputMaybe<UpdateRecoveryPlanInput>;
};

export type OpenShiftCmCluster = {
  __typename?: 'OpenShiftCmCluster';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  credential?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_group?: Maybe<CloudUserGroup>;
  remarks?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenShiftCmClusterStatus>;
  sync_status?: Maybe<OpenShiftCmClusterSyncStatus>;
  synchronized_at?: Maybe<Scalars['BigInt']['output']>;
  type_code?: Maybe<OpenShiftCmClusterTypeCodeEnum>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmClusterInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_group?: InputMaybe<CloudUserGroupInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenShiftCmClusterStatusInput>;
  sync_status?: InputMaybe<OpenShiftCmClusterSyncStatusInput>;
  synchronized_at?: InputMaybe<Scalars['BigInt']['input']>;
  type_code?: InputMaybe<OpenShiftCmClusterTypeCodeEnum>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenShiftCmClusterResourceServiceTypeEnum {
  Clusterip = 'CLUSTERIP',
  Externalname = 'EXTERNALNAME',
  Loadbalancer = 'LOADBALANCER',
  Nodeport = 'NODEPORT'
}

export enum OpenShiftCmClusterResourceVolumeTypeEnum {
  AwsElasticBlockStore = 'AWS_ELASTIC_BLOCK_STORE',
  AzureDisk = 'AZURE_DISK',
  AzureFile = 'AZURE_FILE',
  Cephfs = 'CEPHFS',
  Cinder = 'CINDER',
  ConfigMap = 'CONFIG_MAP',
  Csi = 'CSI',
  EmptyDir = 'EMPTY_DIR',
  Ephemeral = 'EPHEMERAL',
  Fc = 'FC',
  FlexVolume = 'FLEX_VOLUME',
  Flocker = 'FLOCKER',
  GcePersistentDisk = 'GCE_PERSISTENT_DISK',
  GitRepo = 'GIT_REPO',
  Glusterfs = 'GLUSTERFS',
  HostPath = 'HOST_PATH',
  Iscsi = 'ISCSI',
  Nfs = 'NFS',
  PersistentVolumeClaim = 'PERSISTENT_VOLUME_CLAIM',
  PhotonPersistentDisk = 'PHOTON_PERSISTENT_DISK',
  PortworxVolume = 'PORTWORX_VOLUME',
  Quobyte = 'QUOBYTE',
  Rbd = 'RBD',
  ScaleIO = 'SCALE_I_O',
  Storageos = 'STORAGEOS',
  VsphereVolume = 'VSPHERE_VOLUME'
}

export enum OpenShiftCmClusterStateCodeEnum {
  ClusterStateActive = 'CLUSTER_STATE_ACTIVE',
  ClusterStateInactive = 'CLUSTER_STATE_INACTIVE',
  ClusterStateUnknown = 'CLUSTER_STATE_UNKNOWN'
}

export type OpenShiftCmClusterStatus = {
  __typename?: 'OpenShiftCmClusterStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterStateCodeEnum>;
};

export type OpenShiftCmClusterStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterStateCodeEnum>;
};

export enum OpenShiftCmClusterSyncStateCodeEnum {
  ClusterSyncStateSynchronized = 'CLUSTER_SYNC_STATE_SYNCHRONIZED',
  ClusterSyncStateSynchronizeFailed = 'CLUSTER_SYNC_STATE_SYNCHRONIZE_FAILED',
  ClusterSyncStateSynchronizing = 'CLUSTER_SYNC_STATE_SYNCHRONIZING',
  ClusterSyncStateUnknown = 'CLUSTER_SYNC_STATE_UNKNOWN'
}

export type OpenShiftCmClusterSyncStatus = {
  __typename?: 'OpenShiftCmClusterSyncStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterSyncStateCodeEnum>;
};

export type OpenShiftCmClusterSyncStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterSyncStateCodeEnum>;
};

export enum OpenShiftCmClusterTypeCodeEnum {
  ClusterTypeKubernetes = 'CLUSTER_TYPE_KUBERNETES',
  ClusterTypeOpenshift = 'CLUSTER_TYPE_OPENSHIFT'
}

export type OpenShiftCmFinalizer = {
  __typename?: 'OpenShiftCmFinalizer';
  controller_workload?: Maybe<OpenShiftCmWorkload>;
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmFinalizerInput = {
  controller_workload?: InputMaybe<OpenShiftCmWorkloadInput>;
  group?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmMessage = {
  __typename?: 'OpenShiftCmMessage';
  code?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmMessageInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmNamespace = {
  __typename?: 'OpenShiftCmNamespace';
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmNamespaceInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmPriorityClass = {
  __typename?: 'OpenShiftCmPriorityClass';
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmPriorityClassInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmRegistry = {
  __typename?: 'OpenShiftCmRegistry';
  id?: Maybe<Scalars['BigInt']['output']>;
  image_pull_secret_resources?: Maybe<Array<Maybe<OpenShiftCmResource>>>;
  is_private?: Maybe<Scalars['Boolean']['output']>;
  is_required_push_credential?: Maybe<Scalars['Boolean']['output']>;
  push_credential?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmRegistryInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  image_pull_secret_resources?: InputMaybe<Array<InputMaybe<OpenShiftCmResourceInput>>>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  is_required_push_credential?: InputMaybe<Scalars['Boolean']['input']>;
  push_credential?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmResource = {
  __typename?: 'OpenShiftCmResource';
  dependency_resources?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  dependent_resources?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  manifest?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  resource_version?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmResourceInput = {
  dependency_resources?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  dependent_resources?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  group?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  manifest?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  resource_version?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmRuntimeClass = {
  __typename?: 'OpenShiftCmRuntimeClass';
  handler?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmRuntimeClassInput = {
  handler?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmScheduler = {
  __typename?: 'OpenShiftCmScheduler';
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  workload?: Maybe<OpenShiftCmWorkload>;
};

export type OpenShiftCmSchedulerInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  workload?: InputMaybe<OpenShiftCmWorkloadInput>;
};

export type OpenShiftCmService = {
  __typename?: 'OpenShiftCmService';
  cluster_ip?: Maybe<Scalars['String']['output']>;
  external_name?: Maybe<Scalars['String']['output']>;
  load_balancer_class?: Maybe<Scalars['String']['output']>;
  load_balancer_ip?: Maybe<Scalars['String']['output']>;
  load_balancer_source_ranges?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  type?: Maybe<OpenShiftCmClusterResourceServiceTypeEnum>;
};

export type OpenShiftCmServiceAccount = {
  __typename?: 'OpenShiftCmServiceAccount';
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmServiceAccountInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmServiceInput = {
  cluster_ip?: InputMaybe<Scalars['String']['input']>;
  external_name?: InputMaybe<Scalars['String']['input']>;
  load_balancer_class?: InputMaybe<Scalars['String']['input']>;
  load_balancer_ip?: InputMaybe<Scalars['String']['input']>;
  load_balancer_source_ranges?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  type?: InputMaybe<OpenShiftCmClusterResourceServiceTypeEnum>;
};

export type OpenShiftCmStorageClass = {
  __typename?: 'OpenShiftCmStorageClass';
  name?: Maybe<Scalars['String']['output']>;
  provisioner?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmStorageClassInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  provisioner?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmVolume = {
  __typename?: 'OpenShiftCmVolume';
  id?: Maybe<Scalars['BigInt']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  snapshots?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshot>>>;
  type?: Maybe<OpenShiftCmClusterResourceVolumeTypeEnum>;
};

export type OpenShiftCmVolumeInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
  type?: InputMaybe<OpenShiftCmClusterResourceVolumeTypeEnum>;
};

export type OpenShiftCmVolumeSnapshot = {
  __typename?: 'OpenShiftCmVolumeSnapshot';
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  volume_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmVolumeSnapshotClass = {
  __typename?: 'OpenShiftCmVolumeSnapshotClass';
  driver?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmVolumeSnapshotClassInput = {
  driver?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmVolumeSnapshotInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  volume_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmWorkload = {
  __typename?: 'OpenShiftCmWorkload';
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  protection_group_resource_name?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  resources?: Maybe<Array<Maybe<OpenShiftCmResource>>>;
  volumes?: Maybe<Array<Maybe<OpenShiftCmWorkloadVolume>>>;
};

export type OpenShiftCmWorkloadInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  protection_group_resource_name?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  resources?: InputMaybe<Array<InputMaybe<OpenShiftCmResourceInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadVolumeInput>>>;
};

export type OpenShiftCmWorkloadVolume = {
  __typename?: 'OpenShiftCmWorkloadVolume';
  name?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<OpenShiftCmVolume>;
};

export type OpenShiftCmWorkloadVolumeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<OpenShiftCmVolumeInput>;
};

export enum OpenShiftDrFinalizerFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanFallbackPolicyUsingDefault = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT'
}

export type OpenShiftDrFinalizerRecoveryPlan = {
  __typename?: 'OpenShiftDrFinalizerRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrFinalizerFallbackPolicyEnum>;
  protection_cluster_finalizer?: Maybe<OpenShiftCmFinalizer>;
  recovery_cluster_finalizer?: Maybe<Scalars['String']['output']>;
  recovery_type_code?: Maybe<OpenShiftDrFinalizerRecoveryTypeCodeEnum>;
};

export type OpenShiftDrFinalizerRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrFinalizerFallbackPolicyEnum>;
  protection_cluster_finalizer?: InputMaybe<OpenShiftCmFinalizerInput>;
  recovery_cluster_finalizer?: InputMaybe<Scalars['String']['input']>;
  recovery_type_code?: InputMaybe<OpenShiftDrFinalizerRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrFinalizerRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanStateNotFoundFinalizer = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NOT_FOUND_FINALIZER',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanStateNotSetFinalizer = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NOT_SET_FINALIZER'
}

export type OpenShiftDrFinalizerRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrFinalizerRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrFinalizerRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrFinalizerRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrFinalizerRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrFinalizerRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanRecoveryTypeNoAction = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanRecoveryTypeUpdate = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE'
}

export type OpenShiftDrImageRecoveryInfo = {
  __typename?: 'OpenShiftDrImageRecoveryInfo';
  image_pull_secret_manifests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  image_push_credential?: Maybe<Scalars['String']['output']>;
  protection_image?: Maybe<Scalars['String']['output']>;
  recovery_registry_url?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftDrImageRecoveryInfoInput = {
  image_pull_secret_manifests?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_push_credential?: InputMaybe<Scalars['String']['input']>;
  protection_image?: InputMaybe<Scalars['String']['input']>;
  recovery_registry_url?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftDrNamespaceRecoveryPlan = {
  __typename?: 'OpenShiftDrNamespaceRecoveryPlan';
  protection_cluster_namespace?: Maybe<OpenShiftCmNamespace>;
  recovery_cluster_namespace_name?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftDrNamespaceRecoveryPlanInput = {
  protection_cluster_namespace?: InputMaybe<OpenShiftCmNamespaceInput>;
  recovery_cluster_namespace_name?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenShiftDrNamespaceRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateDuplicatedName = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_DUPLICATED_NAME',
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateInvalidName = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_INVALID_NAME',
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateNotSetName = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_NOT_SET_NAME'
}

export type OpenShiftDrNamespaceRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrNamespaceRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrNamespaceRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrNamespaceRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrNamespaceRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrPriorityClassFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanFallbackPolicyUsingDefault = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT'
}

export type OpenShiftDrPriorityClassRecoveryPlan = {
  __typename?: 'OpenShiftDrPriorityClassRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrPriorityClassFallbackPolicyEnum>;
  protection_cluster_priority_class?: Maybe<OpenShiftCmPriorityClass>;
  recovery_cluster_priority_class?: Maybe<OpenShiftCmPriorityClass>;
  recovery_type_code?: Maybe<OpenShiftDrPriorityClassRecoveryTypeCodeEnum>;
};

export type OpenShiftDrPriorityClassRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrPriorityClassFallbackPolicyEnum>;
  protection_cluster_priority_class?: InputMaybe<OpenShiftCmPriorityClassInput>;
  recovery_cluster_priority_class?: InputMaybe<OpenShiftCmPriorityClassInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrPriorityClassRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanStateNotFoundPriorityClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NOT_FOUND_PRIORITY_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanStateNotSetPriorityClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NOT_SET_PRIORITY_CLASS'
}

export type OpenShiftDrPriorityClassRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrPriorityClassRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrPriorityClassRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrPriorityClassRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanRecoveryTypeMapping = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanRecoveryTypeMirror = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED'
}

export enum OpenShiftDrReadinessGateConditionFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanFallbackPolicyUsingDefault = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT'
}

export type OpenShiftDrReadinessGateConditionRecoveryPlan = {
  __typename?: 'OpenShiftDrReadinessGateConditionRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrReadinessGateConditionFallbackPolicyEnum>;
  protection_cluster_readiness_gate_condition?: Maybe<Scalars['String']['output']>;
  recovery_cluster_readiness_gate_condition?: Maybe<Scalars['String']['output']>;
  recovery_type_code?: Maybe<OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum>;
};

export type OpenShiftDrReadinessGateConditionRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrReadinessGateConditionFallbackPolicyEnum>;
  protection_cluster_readiness_gate_condition?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_readiness_gate_condition?: InputMaybe<Scalars['String']['input']>;
  recovery_type_code?: InputMaybe<OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanStateNotSetCondition = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_STATE_NOT_SET_CONDITION'
}

export type OpenShiftDrReadinessGateConditionRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrReadinessGateConditionRecoveryPlanStatus';
  readiness_gate_condition?: Maybe<Scalars['String']['output']>;
  state_code?: Maybe<OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput = {
  readiness_gate_condition?: InputMaybe<Scalars['String']['input']>;
  state_code?: InputMaybe<OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanRecoveryTypeNoAction = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanRecoveryTypeUpdate = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE'
}

export enum OpenShiftDrRecoveryClusterStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRecoveryClusterStateInactive = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_INACTIVE',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRecoveryClusterStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRecoveryClusterStateNotFound = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_NOT_FOUND'
}

export type OpenShiftDrRecoveryInfo = {
  __typename?: 'OpenShiftDrRecoveryInfo';
  images?: Maybe<Array<Maybe<OpenShiftDrImageRecoveryInfo>>>;
  resources?: Maybe<Array<Maybe<OpenShiftDrResourceRecoveryInfo>>>;
  volume_snapshots?: Maybe<Array<Maybe<OpenShiftDrVolumeSnapshotRecoveryInfo>>>;
  volumes?: Maybe<Array<Maybe<OpenShiftDrVolumeRecoveryInfo>>>;
  workloads?: Maybe<Array<Maybe<OpenShiftDrWorkloadRecoveryInfo>>>;
};

export type OpenShiftDrRecoveryInfoInput = {
  images?: InputMaybe<Array<InputMaybe<OpenShiftDrImageRecoveryInfoInput>>>;
  resources?: InputMaybe<Array<InputMaybe<OpenShiftDrResourceRecoveryInfoInput>>>;
  volume_snapshots?: InputMaybe<Array<InputMaybe<OpenShiftDrVolumeSnapshotRecoveryInfoInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenShiftDrVolumeRecoveryInfoInput>>>;
  workloads?: InputMaybe<Array<InputMaybe<OpenShiftDrWorkloadRecoveryInfoInput>>>;
};

export type OpenShiftDrRecoveryInfoResponse = {
  __typename?: 'OpenShiftDrRecoveryInfoResponse';
  recovery_info?: Maybe<OpenShiftDrRecoveryInfo>;
};

export type OpenShiftDrRecoveryInfoResponseInput = {
  recovery_info?: InputMaybe<OpenShiftDrRecoveryInfoInput>;
};

export type OpenShiftDrRecoveryJob = {
  __typename?: 'OpenShiftDrRecoveryJob';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  recovery_job_schedule?: Maybe<OpenShiftDrRecoveryJobSchedule>;
  recovery_plan?: Maybe<OpenShiftDrRecoveryPlan>;
  recovery_point_backup_result?: Maybe<Scalars['JSONObject']['output']>;
  recovery_point_snapshot?: Maybe<ReplicatorPrimarySnapshot>;
  recovery_point_type_code?: Maybe<OpenShiftDrRecoveryPointTypeCodeEnum>;
  recovery_type_code?: Maybe<OpenShiftDrRecoveryTypeCodeEnum>;
  resource_name?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftDrRecoveryJobInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  recovery_job_schedule?: InputMaybe<OpenShiftDrRecoveryJobScheduleInput>;
  recovery_plan?: InputMaybe<OpenShiftDrRecoveryPlanInput>;
  recovery_point_backup_result?: InputMaybe<Scalars['JSONObject']['input']>;
  recovery_point_snapshot?: InputMaybe<ReplicatorPrimarySnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenShiftDrRecoveryPointTypeCodeEnum>;
  recovery_type_code?: InputMaybe<OpenShiftDrRecoveryTypeCodeEnum>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftDrRecoveryJobResponse = {
  __typename?: 'OpenShiftDrRecoveryJobResponse';
  recovery_job?: Maybe<OpenShiftDrRecoveryJob>;
  recovery_job_status?: Maybe<OpenShiftDrRecoveryJobStatus>;
};

export type OpenShiftDrRecoveryJobResponseInput = {
  recovery_job?: InputMaybe<OpenShiftDrRecoveryJobInput>;
  recovery_job_status?: InputMaybe<OpenShiftDrRecoveryJobStatusInput>;
};

export enum OpenShiftDrRecoveryJobResultCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobResultCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_CANCELED',
  CdmDisasterRecoveryOpenshiftRecoveryJobResultFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_FAILED',
  CdmDisasterRecoveryOpenshiftRecoveryJobResultSucceed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_SUCCEED'
}

export type OpenShiftDrRecoveryJobRetryRequest = {
  __typename?: 'OpenShiftDrRecoveryJobRetryRequest';
  workloads?: Maybe<Array<Maybe<OpenShiftCmWorkload>>>;
};

export type OpenShiftDrRecoveryJobRetryRequestInput = {
  workloads?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadInput>>>;
};

export type OpenShiftDrRecoveryJobSchedule = {
  __typename?: 'OpenShiftDrRecoveryJobSchedule';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  recovery_plan?: Maybe<OpenShiftDrRecoveryPlan>;
  recovery_point_backup_result?: Maybe<Scalars['JSONObject']['output']>;
  recovery_point_snapshot?: Maybe<ReplicatorPrimarySnapshot>;
  recovery_point_type_code?: Maybe<OpenShiftDrRecoveryPointTypeCodeEnum>;
  recovery_type_code?: Maybe<OpenShiftDrRecoveryTypeCodeEnum>;
  resource_name?: Maybe<Scalars['String']['output']>;
  schedule?: Maybe<CloudSchedule>;
};

export type OpenShiftDrRecoveryJobScheduleInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  recovery_plan?: InputMaybe<OpenShiftDrRecoveryPlanInput>;
  recovery_point_backup_result?: InputMaybe<Scalars['JSONObject']['input']>;
  recovery_point_snapshot?: InputMaybe<ReplicatorPrimarySnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenShiftDrRecoveryPointTypeCodeEnum>;
  recovery_type_code?: InputMaybe<OpenShiftDrRecoveryTypeCodeEnum>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<CloudScheduleInput>;
};

export type OpenShiftDrRecoveryJobScheduleRequest = {
  __typename?: 'OpenShiftDrRecoveryJobScheduleRequest';
  recovery_job_schedule?: Maybe<OpenShiftDrRecoveryJobSchedule>;
};

export type OpenShiftDrRecoveryJobScheduleRequestInput = {
  recovery_job_schedule?: InputMaybe<OpenShiftDrRecoveryJobScheduleInput>;
};

export type OpenShiftDrRecoveryJobScheduleResponse = {
  __typename?: 'OpenShiftDrRecoveryJobScheduleResponse';
  recovery_job_schedule?: Maybe<OpenShiftDrRecoveryJobSchedule>;
  recovery_job_schedule_status?: Maybe<OpenShiftDrRecoveryJobScheduleStatus>;
};

export type OpenShiftDrRecoveryJobScheduleResponseInput = {
  recovery_job_schedule?: InputMaybe<OpenShiftDrRecoveryJobScheduleInput>;
  recovery_job_schedule_status?: InputMaybe<OpenShiftDrRecoveryJobScheduleStatusInput>;
};

export enum OpenShiftDrRecoveryJobScheduleStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobScheduleStateFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_FAILED',
  CdmDisasterRecoveryOpenshiftRecoveryJobScheduleStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryJobScheduleStatePreparing = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_PREPARING'
}

export type OpenShiftDrRecoveryJobScheduleStatus = {
  __typename?: 'OpenShiftDrRecoveryJobScheduleStatus';
  failed_reason_code?: Maybe<Scalars['String']['output']>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRecoveryJobScheduleStateCodeEnum>;
};

export type OpenShiftDrRecoveryJobScheduleStatusInput = {
  failed_reason_code?: InputMaybe<Scalars['String']['input']>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRecoveryJobScheduleStateCodeEnum>;
};

export type OpenShiftDrRecoveryJobScheduleStatusResponse = {
  __typename?: 'OpenShiftDrRecoveryJobScheduleStatusResponse';
  recovery_job_schedule_status?: Maybe<OpenShiftDrRecoveryJobScheduleStatus>;
};

export type OpenShiftDrRecoveryJobScheduleStatusResponseInput = {
  recovery_job_schedule_status?: InputMaybe<OpenShiftDrRecoveryJobScheduleStatusInput>;
};

export type OpenShiftDrRecoveryJobSchedulesResponse = {
  __typename?: 'OpenShiftDrRecoveryJobSchedulesResponse';
  recovery_job_schedules?: Maybe<Array<Maybe<OpenShiftDrRecoveryJobSchedulesResponseObject>>>;
};

export type OpenShiftDrRecoveryJobSchedulesResponseInput = {
  recovery_job_schedules?: InputMaybe<Array<InputMaybe<OpenShiftDrRecoveryJobSchedulesResponseObjectInput>>>;
};

export type OpenShiftDrRecoveryJobSchedulesResponseObject = {
  __typename?: 'OpenShiftDrRecoveryJobSchedulesResponseObject';
  recovery_job_schedule?: Maybe<OpenShiftDrRecoveryJobSchedule>;
  recovery_job_schedule_status?: Maybe<OpenShiftDrRecoveryJobScheduleStatus>;
};

export type OpenShiftDrRecoveryJobSchedulesResponseObjectInput = {
  recovery_job_schedule?: InputMaybe<OpenShiftDrRecoveryJobScheduleInput>;
  recovery_job_schedule_status?: InputMaybe<OpenShiftDrRecoveryJobScheduleStatusInput>;
};

export enum OpenShiftDrRecoveryJobStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobStateCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CANCELED',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateCanceling = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CANCELING',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateCompleted = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_COMPLETED',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateConfirmed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CONFIRMED',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateConfirming = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CONFIRMING',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateForceConfirmed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_FORCE_CONFIRMED',
  CdmDisasterRecoveryOpenshiftRecoveryJobStatePaused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PAUSED',
  CdmDisasterRecoveryOpenshiftRecoveryJobStatePausing = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PAUSING',
  CdmDisasterRecoveryOpenshiftRecoveryJobStatePending = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PENDING',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRollbackIgnored = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLBACK_IGNORED',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRolledBack = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLED_BACK',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRollingBack = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLING_BACK',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRunning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_RUNNING'
}

export type OpenShiftDrRecoveryJobStatus = {
  __typename?: 'OpenShiftDrRecoveryJobStatus';
  result_code?: Maybe<OpenShiftDrRecoveryJobResultCodeEnum>;
  state_code?: Maybe<OpenShiftDrRecoveryJobStateCodeEnum>;
};

export type OpenShiftDrRecoveryJobStatusInput = {
  result_code?: InputMaybe<OpenShiftDrRecoveryJobResultCodeEnum>;
  state_code?: InputMaybe<OpenShiftDrRecoveryJobStateCodeEnum>;
};

export type OpenShiftDrRecoveryJobStatusResponse = {
  __typename?: 'OpenShiftDrRecoveryJobStatusResponse';
  recovery_job_status?: Maybe<OpenShiftDrRecoveryJobStatus>;
  recovery_job_task_status?: Maybe<Array<Maybe<OpenShiftDrRecoveryJobTaskStatus>>>;
  workload_recovery_status?: Maybe<Array<Maybe<OpenShiftDrWorkloadRecoveryStatus>>>;
};

export type OpenShiftDrRecoveryJobStatusResponseInput = {
  recovery_job_status?: InputMaybe<OpenShiftDrRecoveryJobStatusInput>;
  recovery_job_task_status?: InputMaybe<Array<InputMaybe<OpenShiftDrRecoveryJobTaskStatusInput>>>;
  workload_recovery_status?: InputMaybe<Array<InputMaybe<OpenShiftDrWorkloadRecoveryStatusInput>>>;
};

export type OpenShiftDrRecoveryJobTask = {
  __typename?: 'OpenShiftDrRecoveryJobTask';
  dependencies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dependents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  image?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  type_code?: Maybe<OpenShiftDrRecoveryJobTaskTypeCodeEnum>;
  volume_id?: Maybe<Scalars['BigInt']['output']>;
  volume_snapshot_id?: Maybe<Scalars['BigInt']['output']>;
};

export enum OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskFailedDependencyTaskFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_FAILED_DEPENDENCY_TASK_FAILED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskFailedUnexpectedError = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_FAILED_UNEXPECTED_ERROR'
}

export type OpenShiftDrRecoveryJobTaskInput = {
  dependencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dependents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenShiftDrRecoveryJobTaskTypeCodeEnum>;
  volume_id?: InputMaybe<Scalars['BigInt']['input']>;
  volume_snapshot_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftDrRecoveryJobTaskLogsResponse = {
  __typename?: 'OpenShiftDrRecoveryJobTaskLogsResponse';
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type OpenShiftDrRecoveryJobTaskLogsResponseInput = {
  logs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum OpenShiftDrRecoveryJobTaskResultCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskResultCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_CANCELED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskResultFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_FAILED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskResultSucceed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_SUCCEED'
}

export enum OpenShiftDrRecoveryJobTaskStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_CANCELED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateCompleted = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_COMPLETED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateConfirmed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_CONFIRMED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStatePaused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_PAUSED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStatePending = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_PENDING',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRollbackFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLBACK_FAILED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRollbackIgnored = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLBACK_IGNORED',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRolledBack = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLED_BACK',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRollingBack = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLING_BACK',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRunning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_RUNNING'
}

export type OpenShiftDrRecoveryJobTaskStatus = {
  __typename?: 'OpenShiftDrRecoveryJobTaskStatus';
  failed_reason_code?: Maybe<OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  result_code?: Maybe<OpenShiftDrRecoveryJobTaskResultCodeEnum>;
  retry_count?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRecoveryJobTaskStateCodeEnum>;
};

export type OpenShiftDrRecoveryJobTaskStatusInput = {
  failed_reason_code?: InputMaybe<OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  result_code?: InputMaybe<OpenShiftDrRecoveryJobTaskResultCodeEnum>;
  retry_count?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRecoveryJobTaskStateCodeEnum>;
};

export enum OpenShiftDrRecoveryJobTaskTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypeCreateResource = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_RESOURCE',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypeCreateVolume = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_VOLUME',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypeCreateVolumeSnapshot = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_VOLUME_SNAPSHOT',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypePushImage = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_PUSH_IMAGE'
}

export type OpenShiftDrRecoveryJobTasksResponse = {
  __typename?: 'OpenShiftDrRecoveryJobTasksResponse';
  recovery_job_tasks?: Maybe<Array<Maybe<OpenShiftDrRecoveryJobTask>>>;
};

export type OpenShiftDrRecoveryJobTasksResponseInput = {
  recovery_job_tasks?: InputMaybe<Array<InputMaybe<OpenShiftDrRecoveryJobTaskInput>>>;
};

export type OpenShiftDrRecoveryJobsResponse = {
  __typename?: 'OpenShiftDrRecoveryJobsResponse';
  queue?: Maybe<Array<Maybe<OpenShiftDrRecoveryJobsResponseQueue>>>;
};

export type OpenShiftDrRecoveryJobsResponseInput = {
  queue?: InputMaybe<Array<InputMaybe<OpenShiftDrRecoveryJobsResponseQueueInput>>>;
};

export type OpenShiftDrRecoveryJobsResponseQueue = {
  __typename?: 'OpenShiftDrRecoveryJobsResponseQueue';
  recovery_job?: Maybe<OpenShiftDrRecoveryJob>;
  recovery_job_status?: Maybe<OpenShiftDrRecoveryJobStatus>;
  seq?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftDrRecoveryJobsResponseQueueInput = {
  recovery_job?: InputMaybe<OpenShiftDrRecoveryJobInput>;
  recovery_job_status?: InputMaybe<OpenShiftDrRecoveryJobStatusInput>;
  seq?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftDrRecoveryPlan = {
  __typename?: 'OpenShiftDrRecoveryPlan';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  direction?: Maybe<OpenShiftDrRecoveryPlanDirectionCodeEnum>;
  finalizer_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrFinalizerRecoveryPlan>>>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  namespace_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrNamespaceRecoveryPlan>>>;
  priority_class_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrPriorityClassRecoveryPlan>>>;
  readiness_gate_condition_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrReadinessGateConditionRecoveryPlan>>>;
  recovery_cluster?: Maybe<OpenShiftCmCluster>;
  recovery_from_backup_flag?: Maybe<Scalars['Boolean']['output']>;
  registry_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrRegistryRecoveryPlan>>>;
  replication_info_resource_name?: Maybe<Scalars['String']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  runtime_class_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrRuntimeClassRecoveryPlan>>>;
  scheduler_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrSchedulerRecoveryPlan>>>;
  service_account_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrServiceAccountRecoveryPlan>>>;
  service_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrServiceRecoveryPlan>>>;
  snapshot_schedules?: Maybe<Array<Maybe<ReplicatorSnapshotSchedule>>>;
  volume_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrVolumeRecoveryPlan>>>;
  volume_snapshot_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrVolumeSnapshotRecoveryPlan>>>;
  workload_recovery_plans?: Maybe<Array<Maybe<OpenShiftDrWorkloadRecoveryPlan>>>;
};

export enum OpenShiftDrRecoveryPlanDirectionCodeEnum {
  CdmDrOpenshiftRecoveryPlanDirectionFailback = 'CDM_DR_OPENSHIFT_RECOVERY_PLAN_DIRECTION_FAILBACK',
  CdmDrOpenshiftRecoveryPlanDirectionFailover = 'CDM_DR_OPENSHIFT_RECOVERY_PLAN_DIRECTION_FAILOVER'
}

export type OpenShiftDrRecoveryPlanInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<OpenShiftDrRecoveryPlanDirectionCodeEnum>;
  finalizer_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrFinalizerRecoveryPlanInput>>>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  namespace_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrNamespaceRecoveryPlanInput>>>;
  priority_class_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrPriorityClassRecoveryPlanInput>>>;
  readiness_gate_condition_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrReadinessGateConditionRecoveryPlanInput>>>;
  recovery_cluster?: InputMaybe<OpenShiftCmClusterInput>;
  recovery_from_backup_flag?: InputMaybe<Scalars['Boolean']['input']>;
  registry_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrRegistryRecoveryPlanInput>>>;
  replication_info_resource_name?: InputMaybe<Scalars['String']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  runtime_class_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrRuntimeClassRecoveryPlanInput>>>;
  scheduler_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrSchedulerRecoveryPlanInput>>>;
  service_account_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrServiceAccountRecoveryPlanInput>>>;
  service_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrServiceRecoveryPlanInput>>>;
  snapshot_schedules?: InputMaybe<Array<InputMaybe<ReplicatorSnapshotScheduleInput>>>;
  volume_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrVolumeRecoveryPlanInput>>>;
  volume_snapshot_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrVolumeSnapshotRecoveryPlanInput>>>;
  workload_recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrWorkloadRecoveryPlanInput>>>;
};

export type OpenShiftDrRecoveryPlanRequest = {
  __typename?: 'OpenShiftDrRecoveryPlanRequest';
  force?: Maybe<Scalars['Boolean']['output']>;
  recovery_plan?: Maybe<OpenShiftDrRecoveryPlan>;
};

export type OpenShiftDrRecoveryPlanRequestInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_plan?: InputMaybe<OpenShiftDrRecoveryPlanInput>;
};

export type OpenShiftDrRecoveryPlanResponse = {
  __typename?: 'OpenShiftDrRecoveryPlanResponse';
  recovery_plan?: Maybe<OpenShiftDrRecoveryPlan>;
};

export type OpenShiftDrRecoveryPlanResponseInput = {
  recovery_plan?: InputMaybe<OpenShiftDrRecoveryPlanInput>;
};

export enum OpenShiftDrRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanStatePreparing = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_PREPARING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanStateWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_WARNING'
}

export type OpenShiftDrRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrRecoveryPlanStatus';
  finalizer_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrFinalizerRecoveryPlanStatus>>>;
  namespace_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrNamespaceRecoveryPlanStatus>>>;
  priority_class_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrPriorityClassRecoveryPlanStatus>>>;
  readiness_gate_condition_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrReadinessGateConditionRecoveryPlanStatus>>>;
  recovery_cluster_state_code?: Maybe<OpenShiftDrRecoveryClusterStateCodeEnum>;
  registry_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrRegistryRecoveryPlanStatus>>>;
  runtime_class_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrRuntimeClassRecoveryPlanStatus>>>;
  scheduler_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrSchedulerRecoveryPlanStatus>>>;
  service_account_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrServiceAccountRecoveryPlanStatus>>>;
  service_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrServiceRecoveryPlanStatus>>>;
  state_code?: Maybe<OpenShiftDrRecoveryPlanStateCodeEnum>;
  volume_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrVolumeRecoveryPlanStatus>>>;
  volume_snapshot_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrVolumeSnapshotRecoveryPlanStatus>>>;
  warning_reasons?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  workload_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrWorkloadRecoveryPlanStatus>>>;
};

export type OpenShiftDrRecoveryPlanStatusInput = {
  finalizer_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrFinalizerRecoveryPlanStatusInput>>>;
  namespace_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrNamespaceRecoveryPlanStatusInput>>>;
  priority_class_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrPriorityClassRecoveryPlanStatusInput>>>;
  readiness_gate_condition_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput>>>;
  recovery_cluster_state_code?: InputMaybe<OpenShiftDrRecoveryClusterStateCodeEnum>;
  registry_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrRegistryRecoveryPlanStatusInput>>>;
  runtime_class_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrRuntimeClassRecoveryPlanStatusInput>>>;
  scheduler_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrSchedulerRecoveryPlanStatusInput>>>;
  service_account_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrServiceAccountRecoveryPlanStatusInput>>>;
  service_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrServiceRecoveryPlanStatusInput>>>;
  state_code?: InputMaybe<OpenShiftDrRecoveryPlanStateCodeEnum>;
  volume_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrVolumeRecoveryPlanStatusInput>>>;
  volume_snapshot_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput>>>;
  warning_reasons?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workload_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrWorkloadRecoveryPlanStatusInput>>>;
};

export type OpenShiftDrRecoveryPlanStatusResponse = {
  __typename?: 'OpenShiftDrRecoveryPlanStatusResponse';
  recovery_plan_status?: Maybe<OpenShiftDrRecoveryPlanStatus>;
  replication_info_status?: Maybe<ReplicatorReplicationInfoStatus>;
};

export type OpenShiftDrRecoveryPlanStatusResponseInput = {
  recovery_plan_status?: InputMaybe<OpenShiftDrRecoveryPlanStatusInput>;
  replication_info_status?: InputMaybe<ReplicatorReplicationInfoStatusInput>;
};

export type OpenShiftDrRecoveryPlanWarningStatusResponse = {
  __typename?: 'OpenShiftDrRecoveryPlanWarningStatusResponse';
  recovery_plan_status?: Maybe<OpenShiftDrRecoveryPlanStatus>;
};

export type OpenShiftDrRecoveryPlanWarningStatusResponseInput = {
  recovery_plan_status?: InputMaybe<OpenShiftDrRecoveryPlanStatusInput>;
};

export type OpenShiftDrRecoveryPlansResponse = {
  __typename?: 'OpenShiftDrRecoveryPlansResponse';
  recovery_plans?: Maybe<Array<Maybe<OpenShiftDrRecoveryPlan>>>;
};

export type OpenShiftDrRecoveryPlansResponseInput = {
  recovery_plans?: InputMaybe<Array<InputMaybe<OpenShiftDrRecoveryPlanInput>>>;
};

export enum OpenShiftDrRecoveryPointTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryPointTypeLatest = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_LATEST',
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryPointTypeLatestSnapshot = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT',
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryPointTypeSnapshot = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_SNAPSHOT'
}

export type OpenShiftDrRecoveryResult = {
  __typename?: 'OpenShiftDrRecoveryResult';
  approver?: Maybe<CloudUser>;
  elapsed_time?: Maybe<Scalars['BigInt']['output']>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  operator?: Maybe<CloudUser>;
  protection_cluster_name?: Maybe<Scalars['String']['output']>;
  protection_group_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_name?: Maybe<Scalars['String']['output']>;
  recovery_from_backup_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_plan_name?: Maybe<Scalars['String']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenShiftDrRecoveryPointTypeCodeEnum>;
  recovery_type_code?: Maybe<OpenShiftDrRecoveryTypeCodeEnum>;
  resource_name?: Maybe<Scalars['String']['output']>;
  result_code?: Maybe<OpenShiftDrRecoveryResultCodeEnum>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
};

export enum OpenShiftDrRecoveryResultCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryResultCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_CANCELED',
  CdmDisasterRecoveryOpenshiftRecoveryResultFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_FAILED',
  CdmDisasterRecoveryOpenshiftRecoveryResultSuccess = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_SUCCESS'
}

export type OpenShiftDrRecoveryResultInput = {
  approver?: InputMaybe<CloudUserInput>;
  elapsed_time?: InputMaybe<Scalars['BigInt']['input']>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  operator?: InputMaybe<CloudUserInput>;
  protection_cluster_name?: InputMaybe<Scalars['String']['input']>;
  protection_group_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_name?: InputMaybe<Scalars['String']['input']>;
  recovery_from_backup_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_plan_name?: InputMaybe<Scalars['String']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenShiftDrRecoveryPointTypeCodeEnum>;
  recovery_type_code?: InputMaybe<OpenShiftDrRecoveryTypeCodeEnum>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  result_code?: InputMaybe<OpenShiftDrRecoveryResultCodeEnum>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftDrRecoveryResultResponse = {
  __typename?: 'OpenShiftDrRecoveryResultResponse';
  recovery_result?: Maybe<OpenShiftDrRecoveryResult>;
};

export type OpenShiftDrRecoveryResultResponseInput = {
  recovery_result?: InputMaybe<OpenShiftDrRecoveryResultInput>;
};

export type OpenShiftDrRecoveryResultsResponse = {
  __typename?: 'OpenShiftDrRecoveryResultsResponse';
  recovery_results?: Maybe<Array<Maybe<OpenShiftDrRecoveryResult>>>;
};

export type OpenShiftDrRecoveryResultsResponseInput = {
  recovery_results?: InputMaybe<Array<InputMaybe<OpenShiftDrRecoveryResultInput>>>;
};

export enum OpenShiftDrRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryTypeRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_TYPE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryTypeTest = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_TYPE_TEST'
}

export enum OpenShiftDrRegistryFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanFallbackPolicyUsingDefault = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT'
}

export type OpenShiftDrRegistryRecoveryPlan = {
  __typename?: 'OpenShiftDrRegistryRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrRegistryFallbackPolicyEnum>;
  protection_cluster_registry?: Maybe<OpenShiftCmRegistry>;
  recovery_cluster_registry?: Maybe<OpenShiftCmRegistry>;
  recovery_type_code?: Maybe<OpenShiftDrRegistryRecoveryTypeCodeEnum>;
};

export type OpenShiftDrRegistryRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrRegistryFallbackPolicyEnum>;
  protection_cluster_registry?: InputMaybe<OpenShiftCmRegistryInput>;
  recovery_cluster_registry?: InputMaybe<OpenShiftCmRegistryInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrRegistryRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrRegistryRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNotFoundRegistry = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_FOUND_REGISTRY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNotSetRegistry = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_SET_REGISTRY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNotSetRegistryPushCredential = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_SET_REGISTRY_PUSH_CREDENTIAL'
}

export type OpenShiftDrRegistryRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrRegistryRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRegistryRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrRegistryRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRegistryRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrRegistryRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanRecoveryTypeMirrorImage = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR_IMAGE',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanRecoveryTypeMirrorSecret = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR_SECRET'
}

export type OpenShiftDrResourceRecoveryInfo = {
  __typename?: 'OpenShiftDrResourceRecoveryInfo';
  dependencies?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  dependents?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  protection_cluster_resource?: Maybe<OpenShiftCmResource>;
  recovery_cluster_resource?: Maybe<OpenShiftCmResource>;
};

export type OpenShiftDrResourceRecoveryInfoInput = {
  dependencies?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  dependents?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  protection_cluster_resource?: InputMaybe<OpenShiftCmResourceInput>;
  recovery_cluster_resource?: InputMaybe<OpenShiftCmResourceInput>;
};

export enum OpenShiftDrRuntimeClassFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanFallbackPolicyUsingDefault = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT'
}

export type OpenShiftDrRuntimeClassRecoveryPlan = {
  __typename?: 'OpenShiftDrRuntimeClassRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrRuntimeClassFallbackPolicyEnum>;
  protection_cluster_runtime_class?: Maybe<OpenShiftCmRuntimeClass>;
  recovery_cluster_runtime_class?: Maybe<OpenShiftCmRuntimeClass>;
  recovery_type_code?: Maybe<OpenShiftDrRuntimeClassRecoveryTypeCodeEnum>;
};

export type OpenShiftDrRuntimeClassRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrRuntimeClassFallbackPolicyEnum>;
  protection_cluster_runtime_class?: InputMaybe<OpenShiftCmRuntimeClassInput>;
  recovery_cluster_runtime_class?: InputMaybe<OpenShiftCmRuntimeClassInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrRuntimeClassRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanStateNotFoundRuntimeClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NOT_FOUND_RUNTIME_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanStateNotSetRuntimeClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NOT_SET_RUNTIME_CLASS'
}

export type OpenShiftDrRuntimeClassRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrRuntimeClassRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrRuntimeClassRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrRuntimeClassRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanRecoveryTypeMapping = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED'
}

export enum OpenShiftDrSchedulerFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanFallbackPolicyUsingDefault = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT'
}

export type OpenShiftDrSchedulerRecoveryPlan = {
  __typename?: 'OpenShiftDrSchedulerRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrSchedulerFallbackPolicyEnum>;
  protection_cluster_scheduler?: Maybe<OpenShiftCmScheduler>;
  recovery_cluster_scheduler?: Maybe<OpenShiftCmScheduler>;
  recovery_type_code?: Maybe<OpenShiftDrSchedulerRecoveryTypeCodeEnum>;
};

export type OpenShiftDrSchedulerRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrSchedulerFallbackPolicyEnum>;
  protection_cluster_scheduler?: InputMaybe<OpenShiftCmSchedulerInput>;
  recovery_cluster_scheduler?: InputMaybe<OpenShiftCmSchedulerInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrSchedulerRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrSchedulerRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanStateNotFoundScheduler = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NOT_FOUND_SCHEDULER',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanStateNotSetScheduler = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NOT_SET_SCHEDULER'
}

export type OpenShiftDrSchedulerRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrSchedulerRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrSchedulerRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrSchedulerRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrSchedulerRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrSchedulerRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanRecoveryTypeMapping = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED'
}

export enum OpenShiftDrServiceAccountFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING'
}

export type OpenShiftDrServiceAccountRecoveryPlan = {
  __typename?: 'OpenShiftDrServiceAccountRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrServiceAccountFallbackPolicyEnum>;
  protection_cluster_service_account?: Maybe<OpenShiftCmServiceAccount>;
  recovery_cluster_service_account?: Maybe<OpenShiftCmServiceAccount>;
  recovery_type_code?: Maybe<OpenShiftDrServiceAccountRecoveryTypeCodeEnum>;
};

export type OpenShiftDrServiceAccountRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrServiceAccountFallbackPolicyEnum>;
  protection_cluster_service_account?: InputMaybe<OpenShiftCmServiceAccountInput>;
  recovery_cluster_service_account?: InputMaybe<OpenShiftCmServiceAccountInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrServiceAccountRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_STATE_NORMAL'
}

export type OpenShiftDrServiceAccountRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrServiceAccountRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrServiceAccountRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrServiceAccountRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED'
}

export enum OpenShiftDrServiceFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanFallbackPolicyIgnoreRecovery = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY',
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanFallbackPolicyIgnoreWarning = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING'
}

export type OpenShiftDrServiceRecoveryPlan = {
  __typename?: 'OpenShiftDrServiceRecoveryPlan';
  cluster_ip?: Maybe<Scalars['String']['output']>;
  external_name?: Maybe<Scalars['String']['output']>;
  fallback_policy?: Maybe<OpenShiftDrServiceFallbackPolicyEnum>;
  load_balancer_class?: Maybe<Scalars['String']['output']>;
  load_balancer_ip?: Maybe<Scalars['String']['output']>;
  load_balancer_source_ranges?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  protection_cluster_service?: Maybe<OpenShiftCmService>;
  recovery_type_code?: Maybe<OpenShiftDrServiceRecoveryTypeCodeEnum>;
};

export type OpenShiftDrServiceRecoveryPlanInput = {
  cluster_ip?: InputMaybe<Scalars['String']['input']>;
  external_name?: InputMaybe<Scalars['String']['input']>;
  fallback_policy?: InputMaybe<OpenShiftDrServiceFallbackPolicyEnum>;
  load_balancer_class?: InputMaybe<Scalars['String']['input']>;
  load_balancer_ip?: InputMaybe<Scalars['String']['input']>;
  load_balancer_source_ranges?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protection_cluster_service?: InputMaybe<OpenShiftCmServiceInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrServiceRecoveryTypeCodeEnum>;
};

export enum OpenShiftDrServiceRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_STATE_NORMAL'
}

export type OpenShiftDrServiceRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrServiceRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrServiceRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrServiceRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrServiceRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrServiceRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanRecoveryTypeNoAction = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION',
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanRecoveryTypeUpdate = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE'
}

export type OpenShiftDrVolumeRecoveryInfo = {
  __typename?: 'OpenShiftDrVolumeRecoveryInfo';
  protection_cluster_volume?: Maybe<OpenShiftCmVolume>;
  recovery_cluster_storage_class?: Maybe<OpenShiftCmStorageClass>;
  recovery_cluster_volume_snapshot_class?: Maybe<OpenShiftCmVolumeSnapshotClass>;
};

export type OpenShiftDrVolumeRecoveryInfoInput = {
  protection_cluster_volume?: InputMaybe<OpenShiftCmVolumeInput>;
  recovery_cluster_storage_class?: InputMaybe<OpenShiftCmStorageClassInput>;
  recovery_cluster_volume_snapshot_class?: InputMaybe<OpenShiftCmVolumeSnapshotClassInput>;
};

export type OpenShiftDrVolumeRecoveryPlan = {
  __typename?: 'OpenShiftDrVolumeRecoveryPlan';
  protection_cluster_volume?: Maybe<OpenShiftCmVolume>;
  recovery_cluster_storage_class?: Maybe<OpenShiftCmStorageClass>;
  recovery_cluster_volume_snapshot_class?: Maybe<OpenShiftCmVolumeSnapshotClass>;
};

export type OpenShiftDrVolumeRecoveryPlanInput = {
  protection_cluster_volume?: InputMaybe<OpenShiftCmVolumeInput>;
  recovery_cluster_storage_class?: InputMaybe<OpenShiftCmStorageClassInput>;
  recovery_cluster_volume_snapshot_class?: InputMaybe<OpenShiftCmVolumeSnapshotClassInput>;
};

export enum OpenShiftDrVolumeRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotFoundSnapshotClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_FOUND_SNAPSHOT_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotFoundStorageClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_FOUND_STORAGE_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotSetSnapshotClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_SET_SNAPSHOT_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotSetStorageClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_SET_STORAGE_CLASS'
}

export type OpenShiftDrVolumeRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrVolumeRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrVolumeRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrVolumeRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrVolumeRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrVolumeSnapshotRecoveryInfo = {
  __typename?: 'OpenShiftDrVolumeSnapshotRecoveryInfo';
  protection_cluster_volume_snapshot?: Maybe<OpenShiftCmVolumeSnapshot>;
  recovery_cluster_storage_class?: Maybe<OpenShiftCmStorageClass>;
  recovery_cluster_volume_snapshot_class?: Maybe<OpenShiftCmVolumeSnapshotClass>;
};

export type OpenShiftDrVolumeSnapshotRecoveryInfoInput = {
  protection_cluster_volume_snapshot?: InputMaybe<OpenShiftCmVolumeSnapshotInput>;
  recovery_cluster_storage_class?: InputMaybe<OpenShiftCmStorageClassInput>;
  recovery_cluster_volume_snapshot_class?: InputMaybe<OpenShiftCmVolumeSnapshotClassInput>;
};

export type OpenShiftDrVolumeSnapshotRecoveryPlan = {
  __typename?: 'OpenShiftDrVolumeSnapshotRecoveryPlan';
  protection_cluster_volume_snapshot?: Maybe<OpenShiftCmVolumeSnapshot>;
  recovery_cluster_storage_class?: Maybe<OpenShiftCmStorageClass>;
  recovery_cluster_volume_snapshot_class?: Maybe<OpenShiftCmVolumeSnapshotClass>;
};

export type OpenShiftDrVolumeSnapshotRecoveryPlanInput = {
  protection_cluster_volume_snapshot?: InputMaybe<OpenShiftCmVolumeSnapshotInput>;
  recovery_cluster_storage_class?: InputMaybe<OpenShiftCmStorageClassInput>;
  recovery_cluster_volume_snapshot_class?: InputMaybe<OpenShiftCmVolumeSnapshotClassInput>;
};

export enum OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotFoundSnapshotClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_FOUND_SNAPSHOT_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotFoundStorageClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_FOUND_STORAGE_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotSetSnapshotClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_SET_SNAPSHOT_CLASS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotSetStorageClass = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_SET_STORAGE_CLASS'
}

export type OpenShiftDrVolumeSnapshotRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrVolumeSnapshotRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanDnsConfigRecoveryTypeNoAction = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_NO_ACTION',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanDnsConfigRecoveryTypeUnused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_UNUSED',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanDnsConfigRecoveryTypeUpdate = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_UPDATE'
}

export enum OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum {
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryFailedDependencyWorkloadNotRecovered = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_FAILED_DEPENDENCY_WORKLOAD_NOT_RECOVERED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryFailedRecoveryJobTaskFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_FAILED_RECOVERY_JOB_TASK_FAILED'
}

export type OpenShiftDrWorkloadRecoveryInfo = {
  __typename?: 'OpenShiftDrWorkloadRecoveryInfo';
  dependencies?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  protection_cluster_workload?: Maybe<OpenShiftCmWorkload>;
  resources?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  volume_snapshots?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  volumes?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
};

export type OpenShiftDrWorkloadRecoveryInfoInput = {
  dependencies?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protection_cluster_workload?: InputMaybe<OpenShiftCmWorkloadInput>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_snapshots?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumes?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type OpenShiftDrWorkloadRecoveryPlan = {
  __typename?: 'OpenShiftDrWorkloadRecoveryPlan';
  dependencies?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  dns_config?: Maybe<OpenShiftDrWorkloadRecoveryPlanDnsConfig>;
  protection_cluster_workload?: Maybe<OpenShiftCmWorkload>;
};

export type OpenShiftDrWorkloadRecoveryPlanDnsConfig = {
  __typename?: 'OpenShiftDrWorkloadRecoveryPlanDnsConfig';
  nameservers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  options?: Maybe<Array<Maybe<OpenShiftDrWorkloadRecoveryPlanDnsConfigOption>>>;
  recovery_type_code?: Maybe<OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum>;
  searches?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type OpenShiftDrWorkloadRecoveryPlanDnsConfigInput = {
  nameservers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options?: InputMaybe<Array<InputMaybe<OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput>>>;
  recovery_type_code?: InputMaybe<OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum>;
  searches?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OpenShiftDrWorkloadRecoveryPlanDnsConfigOption = {
  __typename?: 'OpenShiftDrWorkloadRecoveryPlanDnsConfigOption';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftDrWorkloadRecoveryPlanInput = {
  dependencies?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  dns_config?: InputMaybe<OpenShiftDrWorkloadRecoveryPlanDnsConfigInput>;
  protection_cluster_workload?: InputMaybe<OpenShiftCmWorkloadInput>;
};

export enum OpenShiftDrWorkloadRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanStateInvalidDnsConfigNameservers = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_INVALID_DNS_CONFIG_NAMESERVERS',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanStateNormal = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_NORMAL',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanStateNotSetDnsConfigNameservers = 'CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_NOT_SET_DNS_CONFIG_NAMESERVERS'
}

export type OpenShiftDrWorkloadRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrWorkloadRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrWorkloadRecoveryPlanStateCodeEnum>;
};

export type OpenShiftDrWorkloadRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrWorkloadRecoveryPlanStateCodeEnum>;
};

export enum OpenShiftDrWorkloadRecoveryResultCodeEnum {
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryResultCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_CANCELED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryResultFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_FAILED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryResultSucceed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_SUCCEED'
}

export enum OpenShiftDrWorkloadRecoveryStateCodeEnum {
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateBeingRecovered = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_BEING_RECOVERED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateCanceled = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_CANCELED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateFailed = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_FAILED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateIgnored = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_IGNORED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStatePaused = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_PAUSED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStatePending = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_PENDING',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRecovered = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_RECOVERED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRollbackIgnored = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLBACK_IGNORED',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRolledBack = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLED_BACK',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRollingBack = 'CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLING_BACK'
}

export type OpenShiftDrWorkloadRecoveryStatus = {
  __typename?: 'OpenShiftDrWorkloadRecoveryStatus';
  failed_reason_code?: Maybe<OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  recovery_job_tasks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  result_code?: Maybe<OpenShiftDrWorkloadRecoveryResultCodeEnum>;
  state_code?: Maybe<OpenShiftDrWorkloadRecoveryStateCodeEnum>;
  workload_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftDrWorkloadRecoveryStatusInput = {
  failed_reason_code?: InputMaybe<OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  recovery_job_tasks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  result_code?: InputMaybe<OpenShiftDrWorkloadRecoveryResultCodeEnum>;
  state_code?: InputMaybe<OpenShiftDrWorkloadRecoveryStateCodeEnum>;
  workload_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type PauseRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  GetRecoveryInfo?: Maybe<OpenShiftDrRecoveryInfoResponse>;
  GetRecoveryJob?: Maybe<OpenShiftDrRecoveryJobResponse>;
  GetRecoveryJobInfo?: Maybe<OpenShiftDrRecoveryInfoResponse>;
  GetRecoveryJobSchedule?: Maybe<OpenShiftDrRecoveryJobScheduleResponse>;
  GetRecoveryJobScheduleStatus?: Maybe<OpenShiftDrRecoveryJobScheduleStatusResponse>;
  GetRecoveryJobSchedules?: Maybe<OpenShiftDrRecoveryJobSchedulesResponse>;
  GetRecoveryJobStatus?: Maybe<OpenShiftDrRecoveryJobStatusResponse>;
  GetRecoveryJobTaskLog?: Maybe<OpenShiftDrRecoveryJobTaskLogsResponse>;
  GetRecoveryJobTasks?: Maybe<OpenShiftDrRecoveryJobTasksResponse>;
  GetRecoveryJobs?: Maybe<OpenShiftDrRecoveryJobsResponse>;
  GetRecoveryPlan?: Maybe<OpenShiftDrRecoveryPlanResponse>;
  GetRecoveryPlanStatus?: Maybe<OpenShiftDrRecoveryPlanStatusResponse>;
  GetRecoveryPlans?: Maybe<OpenShiftDrRecoveryPlansResponse>;
  GetRecoveryResult?: Maybe<OpenShiftDrRecoveryResultResponse>;
  GetRecoveryResults?: Maybe<OpenShiftDrRecoveryResultsResponse>;
};


export type QueryGetRecoveryInfoArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobInfoArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobScheduleArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobScheduleResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobScheduleStatusArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobScheduleResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobSchedulesArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobStatusArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobTaskLogArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobTaskResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobTasksArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryJobsArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryPlanArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryPlanStatusArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryPlansArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryResultArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryResultResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecoveryResultsArgs = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type ReplicatorImageReplicationStatus = {
  __typename?: 'ReplicatorImageReplicationStatus';
  image_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ReplicatorImageReplicationStatusStateCodeEnum>;
};

export type ReplicatorImageReplicationStatusInput = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ReplicatorImageReplicationStatusStateCodeEnum>;
};

export enum ReplicatorImageReplicationStatusStateCodeEnum {
  CdmReplicatorImageReplicationStateDone = 'CDM_REPLICATOR_IMAGE_REPLICATION_STATE_DONE',
  CdmReplicatorImageReplicationStateError = 'CDM_REPLICATOR_IMAGE_REPLICATION_STATE_ERROR',
  CdmReplicatorImageReplicationStateSyncing = 'CDM_REPLICATOR_IMAGE_REPLICATION_STATE_SYNCING'
}

export enum ReplicatorLastPrimarySnapshotStateCodeEnum {
  CdmReplicatorLatestSnapshotCreationStateBeingCreated = 'CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_BEING_CREATED',
  CdmReplicatorLatestSnapshotCreationStateError = 'CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_ERROR',
  CdmReplicatorLatestSnapshotCreationStateFailure = 'CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_FAILURE',
  CdmReplicatorLatestSnapshotCreationStateNotYet = 'CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_NOT_YET',
  CdmReplicatorLatestSnapshotCreationStateSuccess = 'CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_SUCCESS'
}

export type ReplicatorMirroringStatus = {
  __typename?: 'ReplicatorMirroringStatus';
  cause?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<ReplicatorMirroringStatusStateCodeEnum>;
};

export type ReplicatorMirroringStatusInput = {
  cause?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<ReplicatorMirroringStatusStateCodeEnum>;
};

export enum ReplicatorMirroringStatusStateCodeEnum {
  CdmReplicatorVolumeReplicationStateError = 'CDM_REPLICATOR_VOLUME_REPLICATION_STATE_ERROR',
  CdmReplicatorVolumeReplicationStateMirroring = 'CDM_REPLICATOR_VOLUME_REPLICATION_STATE_MIRRORING',
  CdmReplicatorVolumeReplicationStateSyncing = 'CDM_REPLICATOR_VOLUME_REPLICATION_STATE_SYNCING'
}

export type ReplicatorPrimarySnapshot = {
  __typename?: 'ReplicatorPrimarySnapshot';
  is_success?: Maybe<Scalars['Boolean']['output']>;
  locker?: Maybe<Scalars['String']['output']>;
  primary_snapshot_id?: Maybe<Scalars['BigInt']['output']>;
  retain_count_over?: Maybe<Scalars['Boolean']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
};

export type ReplicatorPrimarySnapshotInput = {
  is_success?: InputMaybe<Scalars['Boolean']['input']>;
  locker?: InputMaybe<Scalars['String']['input']>;
  primary_snapshot_id?: InputMaybe<Scalars['BigInt']['input']>;
  retain_count_over?: InputMaybe<Scalars['Boolean']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ReplicatorReplicationInfoStatus = {
  __typename?: 'ReplicatorReplicationInfoStatus';
  image_replication_status?: Maybe<Array<Maybe<ReplicatorImageReplicationStatus>>>;
  last_primary_snapshot_status?: Maybe<ReplicatorLastPrimarySnapshotStateCodeEnum>;
  status?: Maybe<ReplicatorReplicationInfoStatusStateCodeEnum>;
  volume_replication_status?: Maybe<Array<Maybe<ReplicatorVolumeReplicationStatus>>>;
};

export type ReplicatorReplicationInfoStatusInput = {
  image_replication_status?: InputMaybe<Array<InputMaybe<ReplicatorImageReplicationStatusInput>>>;
  last_primary_snapshot_status?: InputMaybe<ReplicatorLastPrimarySnapshotStateCodeEnum>;
  status?: InputMaybe<ReplicatorReplicationInfoStatusStateCodeEnum>;
  volume_replication_status?: InputMaybe<Array<InputMaybe<ReplicatorVolumeReplicationStatusInput>>>;
};

export enum ReplicatorReplicationInfoStatusStateCodeEnum {
  CdmReplicatorOpenshiftReplicationInfoStateError = 'CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_ERROR',
  CdmReplicatorOpenshiftReplicationInfoStateNormal = 'CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_NORMAL',
  CdmReplicatorOpenshiftReplicationInfoStatePreparationFailed = 'CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_PREPARATION_FAILED',
  CdmReplicatorOpenshiftReplicationInfoStatePreparing = 'CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_PREPARING'
}

export type ReplicatorSnapshotSchedule = {
  __typename?: 'ReplicatorSnapshotSchedule';
  end_at?: Maybe<Scalars['BigInt']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  primary_snapshot_period?: Maybe<Scalars['BigInt']['output']>;
  primary_snapshot_retain_count?: Maybe<Scalars['BigInt']['output']>;
  schedule_type?: Maybe<Scalars['BigInt']['output']>;
  secondary_snapshot_period?: Maybe<Scalars['BigInt']['output']>;
  secondary_snapshot_retain_count?: Maybe<Scalars['BigInt']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
};

export type ReplicatorSnapshotScheduleInput = {
  end_at?: InputMaybe<Scalars['BigInt']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  primary_snapshot_period?: InputMaybe<Scalars['BigInt']['input']>;
  primary_snapshot_retain_count?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_type?: InputMaybe<Scalars['BigInt']['input']>;
  secondary_snapshot_period?: InputMaybe<Scalars['BigInt']['input']>;
  secondary_snapshot_retain_count?: InputMaybe<Scalars['BigInt']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ReplicatorVolumeReplicationStatus = {
  __typename?: 'ReplicatorVolumeReplicationStatus';
  mirroring_replication_status?: Maybe<Array<Maybe<ReplicatorMirroringStatus>>>;
  volume_id?: Maybe<Scalars['BigInt']['output']>;
};

export type ReplicatorVolumeReplicationStatusInput = {
  mirroring_replication_status?: InputMaybe<Array<InputMaybe<ReplicatorMirroringStatusInput>>>;
  volume_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ResumeRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type RetryRecoveryJobInput = {
  openShiftDrRecoveryJobRetryRequest?: InputMaybe<OpenShiftDrRecoveryJobRetryRequestInput>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type RollbackMigrationRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type RollbackSimulationRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRecoveryJobScheduleInput = {
  openShiftDrRecoveryJobScheduleRequest?: InputMaybe<OpenShiftDrRecoveryJobScheduleRequestInput>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobScheduleResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRecoveryPlanInput = {
  openShiftDrRecoveryPlanRequest?: InputMaybe<OpenShiftDrRecoveryPlanRequestInput>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};
