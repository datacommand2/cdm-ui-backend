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

export type CancelRecoveryJobInput = {
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
  recoveryJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudDayOfMonthEnum {
  Eight = '8',
  Eighteen = '18',
  Eleven = '11',
  Fifteen = '15',
  Five = '5',
  Four = '4',
  Fourteen = '14',
  LastDay = 'L',
  Nine = '9',
  Nineteen = '19',
  One = '1',
  Seven = '7',
  Seventeen = '17',
  Six = '6',
  Sixteen = '16',
  Ten = '10',
  Thirteen = '13',
  Thirty = '30',
  ThirtyOne = '31',
  Three = '3',
  Twelve = '12',
  Twenty = '20',
  TwentyEight = '28',
  TwentyFive = '25',
  TwentyFour = '24',
  TwentyNine = '29',
  TwentyOne = '21',
  TwentySeven = '27',
  TwentySix = '26',
  TwentyThree = '23',
  TwentyTwo = '22',
  Two = '2'
}

export enum CloudIntervalHourEnum {
  Four = '4',
  One = '1',
  Six = '6',
  Three = '3',
  Twelve = '12',
  Two = '2'
}

export enum CloudIntervalMinuteEnum {
  Fifteen = '15',
  Five = '5',
  Four = '4',
  One = '1',
  Six = '6',
  Ten = '10',
  Thirty = '30',
  Three = '3',
  Twelve = '12',
  Twenty = '20',
  Two = '2'
}

export enum CloudIntervalMonthEnum {
  Four = '4',
  One = '1',
  Six = '6',
  Three = '3',
  Twelve = '12',
  Two = '2'
}

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

export type CloudSchedule = {
  __typename?: 'CloudSchedule';
  activation_flag?: Maybe<Scalars['Boolean']['output']>;
  day_of_month?: Maybe<CloudDayOfMonthEnum | `${CloudDayOfMonthEnum}`>;
  day_of_week?: Maybe<CloudWeekEnum | `${CloudWeekEnum}`>;
  end_at?: Maybe<Scalars['BigInt']['output']>;
  hour?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  interval_day?: Maybe<Scalars['BigInt']['output']>;
  interval_hour?: Maybe<CloudIntervalHourEnum | `${CloudIntervalHourEnum}`>;
  interval_minute?: Maybe<CloudIntervalMinuteEnum | `${CloudIntervalMinuteEnum}`>;
  interval_month?: Maybe<CloudIntervalMonthEnum | `${CloudIntervalMonthEnum}`>;
  interval_week?: Maybe<Scalars['BigInt']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  minute?: Maybe<Scalars['BigInt']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CloudScheduleTypeEnum | `${CloudScheduleTypeEnum}`>;
  week_of_month?: Maybe<CloudWeekOfMonthEnum | `${CloudWeekOfMonthEnum}`>;
};

export type CloudScheduleInput = {
  activation_flag?: InputMaybe<Scalars['Boolean']['input']>;
  day_of_month?: InputMaybe<CloudDayOfMonthEnum | `${CloudDayOfMonthEnum}`>;
  day_of_week?: InputMaybe<CloudWeekEnum | `${CloudWeekEnum}`>;
  end_at?: InputMaybe<Scalars['BigInt']['input']>;
  hour?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  interval_day?: InputMaybe<Scalars['BigInt']['input']>;
  interval_hour?: InputMaybe<CloudIntervalHourEnum | `${CloudIntervalHourEnum}`>;
  interval_minute?: InputMaybe<CloudIntervalMinuteEnum | `${CloudIntervalMinuteEnum}`>;
  interval_month?: InputMaybe<CloudIntervalMonthEnum | `${CloudIntervalMonthEnum}`>;
  interval_week?: InputMaybe<Scalars['BigInt']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  minute?: InputMaybe<Scalars['BigInt']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CloudScheduleTypeEnum | `${CloudScheduleTypeEnum}`>;
  week_of_month?: InputMaybe<CloudWeekOfMonthEnum | `${CloudWeekOfMonthEnum}`>;
};

export enum CloudScheduleTypeEnum {
  ScheduleTypeDaily = 'schedule.type.daily',
  ScheduleTypeDayOfMonthly = 'schedule.type.day-of-monthly',
  ScheduleTypeHourly = 'schedule.type.hourly',
  ScheduleTypeMinutely = 'schedule.type.minutely',
  ScheduleTypeMonthly = 'schedule.type.monthly',
  ScheduleTypeSpecified = 'schedule.type.specified',
  ScheduleTypeWeekly = 'schedule.type.weekly',
  ScheduleTypeWeekOfMonthly = 'schedule.type.week-of-monthly',
  ScheduleTypeYearly = 'schedule.type.yearly'
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

export enum CloudWeekEnum {
  Fri = 'fri',
  Mon = 'mon',
  Sat = 'sat',
  Sun = 'sun',
  Thu = 'thu',
  Tue = 'tue',
  Wed = 'wed'
}

export enum CloudWeekOfMonthEnum {
  Five = '#5',
  Four = '#4',
  LastWeek = 'L',
  One = '#1',
  Three = '#3',
  Two = '#2'
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
  type_code?: Maybe<OpenShiftCmClusterTypeCodeEnum | `${OpenShiftCmClusterTypeCodeEnum}`>;
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
  type_code?: InputMaybe<OpenShiftCmClusterTypeCodeEnum | `${OpenShiftCmClusterTypeCodeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenShiftCmClusterResourceServiceTypeEnum {
  Clusterip = 'ClusterIP',
  Externalname = 'ExternalName',
  Loadbalancer = 'LoadBalancer',
  Nodeport = 'NodePort'
}

export enum OpenShiftCmClusterResourceVolumeTypeEnum {
  AwsElasticBlockStore = 'awsElasticBlockStore',
  AzureDisk = 'azureDisk',
  AzureFile = 'azureFile',
  Cephfs = 'cephfs',
  Cinder = 'cinder',
  ConfigMap = 'configMap',
  Csi = 'csi',
  EmptyDir = 'emptyDir',
  Ephemeral = 'ephemeral',
  Fc = 'fc',
  FlexVolume = 'flexVolume',
  Flocker = 'flocker',
  GcePersistentDisk = 'gcePersistentDisk',
  GitRepo = 'gitRepo',
  Glusterfs = 'glusterfs',
  HostPath = 'hostPath',
  Iscsi = 'iscsi',
  Nfs = 'nfs',
  PersistentVolumeClaim = 'persistentVolumeClaim',
  PhotonPersistentDisk = 'photonPersistentDisk',
  PortworxVolume = 'portworxVolume',
  Quobyte = 'quobyte',
  Rbd = 'rbd',
  ScaleIO = 'scaleIO',
  Storageos = 'storageos',
  VsphereVolume = 'vsphereVolume'
}

export enum OpenShiftCmClusterStateCodeEnum {
  ClusterStateActive = 'cluster.state.active',
  ClusterStateInactive = 'cluster.state.inactive',
  ClusterStateUnknown = 'cluster.state.unknown'
}

export type OpenShiftCmClusterStatus = {
  __typename?: 'OpenShiftCmClusterStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterStateCodeEnum | `${OpenShiftCmClusterStateCodeEnum}`>;
};

export type OpenShiftCmClusterStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterStateCodeEnum | `${OpenShiftCmClusterStateCodeEnum}`>;
};

export enum OpenShiftCmClusterSyncStateCodeEnum {
  ClusterSyncStateSynchronized = 'cluster.sync.state.synchronized',
  ClusterSyncStateSynchronizeFailed = 'cluster.sync.state.synchronize-failed',
  ClusterSyncStateSynchronizing = 'cluster.sync.state.synchronizing',
  ClusterSyncStateUnknown = 'cluster.sync.state.unknown'
}

export type OpenShiftCmClusterSyncStatus = {
  __typename?: 'OpenShiftCmClusterSyncStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterSyncStateCodeEnum | `${OpenShiftCmClusterSyncStateCodeEnum}`>;
};

export type OpenShiftCmClusterSyncStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterSyncStateCodeEnum | `${OpenShiftCmClusterSyncStateCodeEnum}`>;
};

export enum OpenShiftCmClusterTypeCodeEnum {
  ClusterTypeKubernetes = 'cluster.type.kubernetes',
  ClusterTypeOpenshift = 'cluster.type.openshift'
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
  type?: Maybe<OpenShiftCmClusterResourceServiceTypeEnum | `${OpenShiftCmClusterResourceServiceTypeEnum}`>;
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
  type?: InputMaybe<OpenShiftCmClusterResourceServiceTypeEnum | `${OpenShiftCmClusterResourceServiceTypeEnum}`>;
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
  type?: Maybe<OpenShiftCmClusterResourceVolumeTypeEnum | `${OpenShiftCmClusterResourceVolumeTypeEnum}`>;
};

export type OpenShiftCmVolumeInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
  type?: InputMaybe<OpenShiftCmClusterResourceVolumeTypeEnum | `${OpenShiftCmClusterResourceVolumeTypeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.ignore-warning',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanFallbackPolicyUsingDefault = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.using-default'
}

export type OpenShiftDrFinalizerRecoveryPlan = {
  __typename?: 'OpenShiftDrFinalizerRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrFinalizerFallbackPolicyEnum | `${OpenShiftDrFinalizerFallbackPolicyEnum}`>;
  protection_cluster_finalizer?: Maybe<OpenShiftCmFinalizer>;
  recovery_cluster_finalizer?: Maybe<Scalars['String']['output']>;
  recovery_type_code?: Maybe<OpenShiftDrFinalizerRecoveryTypeCodeEnum | `${OpenShiftDrFinalizerRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrFinalizerRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrFinalizerFallbackPolicyEnum | `${OpenShiftDrFinalizerFallbackPolicyEnum}`>;
  protection_cluster_finalizer?: InputMaybe<OpenShiftCmFinalizerInput>;
  recovery_cluster_finalizer?: InputMaybe<Scalars['String']['input']>;
  recovery_type_code?: InputMaybe<OpenShiftDrFinalizerRecoveryTypeCodeEnum | `${OpenShiftDrFinalizerRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrFinalizerRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanStateNotFoundFinalizer = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.not-found-finalizer',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanStateNotSetFinalizer = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.not-set-finalizer'
}

export type OpenShiftDrFinalizerRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrFinalizerRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrFinalizerRecoveryPlanStateCodeEnum | `${OpenShiftDrFinalizerRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrFinalizerRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrFinalizerRecoveryPlanStateCodeEnum | `${OpenShiftDrFinalizerRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrFinalizerRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanRecoveryTypeNoAction = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.no-action',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.unused',
  CdmDisasterRecoveryOpenshiftRecoveryPlanFinalizerRecoveryPlanRecoveryTypeUpdate = 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.update'
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateDuplicatedName = 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.duplicated-name',
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateInvalidName = 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.invalid-name',
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanNamespaceRecoveryPlanStateNotSetName = 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.not-set-name'
}

export type OpenShiftDrNamespaceRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrNamespaceRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrNamespaceRecoveryPlanStateCodeEnum | `${OpenShiftDrNamespaceRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrNamespaceRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrNamespaceRecoveryPlanStateCodeEnum | `${OpenShiftDrNamespaceRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrPriorityClassFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.ignore-warning',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanFallbackPolicyUsingDefault = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.using-default'
}

export type OpenShiftDrPriorityClassRecoveryPlan = {
  __typename?: 'OpenShiftDrPriorityClassRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrPriorityClassFallbackPolicyEnum | `${OpenShiftDrPriorityClassFallbackPolicyEnum}`>;
  protection_cluster_priority_class?: Maybe<OpenShiftCmPriorityClass>;
  recovery_cluster_priority_class?: Maybe<OpenShiftCmPriorityClass>;
  recovery_type_code?: Maybe<OpenShiftDrPriorityClassRecoveryTypeCodeEnum | `${OpenShiftDrPriorityClassRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrPriorityClassRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrPriorityClassFallbackPolicyEnum | `${OpenShiftDrPriorityClassFallbackPolicyEnum}`>;
  protection_cluster_priority_class?: InputMaybe<OpenShiftCmPriorityClassInput>;
  recovery_cluster_priority_class?: InputMaybe<OpenShiftCmPriorityClassInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrPriorityClassRecoveryTypeCodeEnum | `${OpenShiftDrPriorityClassRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanStateNotFoundPriorityClass = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.not-found-priority-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanStateNotSetPriorityClass = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.not-set-priority-class'
}

export type OpenShiftDrPriorityClassRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrPriorityClassRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum | `${OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrPriorityClassRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum | `${OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrPriorityClassRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanRecoveryTypeMapping = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.mapping',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanRecoveryTypeMirror = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.mirror',
  CdmDisasterRecoveryOpenshiftRecoveryPlanPriorityClassRecoveryPlanRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.unused'
}

export enum OpenShiftDrReadinessGateConditionFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.ignore-warning',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanFallbackPolicyUsingDefault = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.using-default'
}

export type OpenShiftDrReadinessGateConditionRecoveryPlan = {
  __typename?: 'OpenShiftDrReadinessGateConditionRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrReadinessGateConditionFallbackPolicyEnum | `${OpenShiftDrReadinessGateConditionFallbackPolicyEnum}`>;
  protection_cluster_readiness_gate_condition?: Maybe<Scalars['String']['output']>;
  recovery_cluster_readiness_gate_condition?: Maybe<Scalars['String']['output']>;
  recovery_type_code?: Maybe<OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum | `${OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrReadinessGateConditionRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrReadinessGateConditionFallbackPolicyEnum | `${OpenShiftDrReadinessGateConditionFallbackPolicyEnum}`>;
  protection_cluster_readiness_gate_condition?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_readiness_gate_condition?: InputMaybe<Scalars['String']['input']>;
  recovery_type_code?: InputMaybe<OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum | `${OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanStateNotSetCondition = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.state.not-set-condition'
}

export type OpenShiftDrReadinessGateConditionRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrReadinessGateConditionRecoveryPlanStatus';
  readiness_gate_condition?: Maybe<Scalars['String']['output']>;
  state_code?: Maybe<OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum | `${OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput = {
  readiness_gate_condition?: InputMaybe<Scalars['String']['input']>;
  state_code?: InputMaybe<OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum | `${OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanRecoveryTypeNoAction = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.no-action',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.unused',
  CdmDisasterRecoveryOpenshiftRecoveryPlanReadinessGateConditionRecoveryPlanRecoveryTypeUpdate = 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.update'
}

export enum OpenShiftDrRecoveryClusterStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRecoveryClusterStateInactive = 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.inactive',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRecoveryClusterStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRecoveryClusterStateNotFound = 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.not-found'
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
  recovery_point_type_code?: Maybe<OpenShiftDrRecoveryPointTypeCodeEnum | `${OpenShiftDrRecoveryPointTypeCodeEnum}`>;
  recovery_type_code?: Maybe<OpenShiftDrRecoveryTypeCodeEnum | `${OpenShiftDrRecoveryTypeCodeEnum}`>;
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
  recovery_point_type_code?: InputMaybe<OpenShiftDrRecoveryPointTypeCodeEnum | `${OpenShiftDrRecoveryPointTypeCodeEnum}`>;
  recovery_type_code?: InputMaybe<OpenShiftDrRecoveryTypeCodeEnum | `${OpenShiftDrRecoveryTypeCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryJobResultCanceled = 'cdm-disaster-recovery-openshift.recovery-job.result.canceled',
  CdmDisasterRecoveryOpenshiftRecoveryJobResultFailed = 'cdm-disaster-recovery-openshift.recovery-job.result.failed',
  CdmDisasterRecoveryOpenshiftRecoveryJobResultSucceed = 'cdm-disaster-recovery-openshift.recovery-job.result.succeed'
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
  recovery_point_type_code?: Maybe<OpenShiftDrRecoveryPointTypeCodeEnum | `${OpenShiftDrRecoveryPointTypeCodeEnum}`>;
  recovery_type_code?: Maybe<OpenShiftDrRecoveryTypeCodeEnum | `${OpenShiftDrRecoveryTypeCodeEnum}`>;
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
  recovery_point_type_code?: InputMaybe<OpenShiftDrRecoveryPointTypeCodeEnum | `${OpenShiftDrRecoveryPointTypeCodeEnum}`>;
  recovery_type_code?: InputMaybe<OpenShiftDrRecoveryTypeCodeEnum | `${OpenShiftDrRecoveryTypeCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryJobScheduleStateFailed = 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.failed',
  CdmDisasterRecoveryOpenshiftRecoveryJobScheduleStateNormal = 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryJobScheduleStatePreparing = 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.preparing'
}

export type OpenShiftDrRecoveryJobScheduleStatus = {
  __typename?: 'OpenShiftDrRecoveryJobScheduleStatus';
  failed_reason_code?: Maybe<Scalars['String']['output']>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRecoveryJobScheduleStateCodeEnum | `${OpenShiftDrRecoveryJobScheduleStateCodeEnum}`>;
};

export type OpenShiftDrRecoveryJobScheduleStatusInput = {
  failed_reason_code?: InputMaybe<Scalars['String']['input']>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRecoveryJobScheduleStateCodeEnum | `${OpenShiftDrRecoveryJobScheduleStateCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryJobStateCanceled = 'cdm.disaster-recovery-openshift.recovery-job.state.canceled',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateCanceling = 'cdm.disaster-recovery-openshift.recovery-job.state.canceling',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateCompleted = 'cdm.disaster-recovery-openshift.recovery-job.state.completed',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateConfirmed = 'cdm.disaster-recovery-openshift.recovery-job.state.confirmed',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateConfirming = 'cdm.disaster-recovery-openshift.recovery-job.state.confirming',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateForceConfirmed = 'cdm.disaster-recovery-openshift.recovery-job.state.force-confirmed',
  CdmDisasterRecoveryOpenshiftRecoveryJobStatePaused = 'cdm.disaster-recovery-openshift.recovery-job.state.paused',
  CdmDisasterRecoveryOpenshiftRecoveryJobStatePausing = 'cdm.disaster-recovery-openshift.recovery-job.state.pausing',
  CdmDisasterRecoveryOpenshiftRecoveryJobStatePending = 'cdm.disaster-recovery-openshift.recovery-job.state.pending',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRollbackIgnored = 'cdm.disaster-recovery-openshift.recovery-job.state.rollback-ignored',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRolledBack = 'cdm.disaster-recovery-openshift.recovery-job.state.rolled-back',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRollingBack = 'cdm.disaster-recovery-openshift.recovery-job.state.rolling-back',
  CdmDisasterRecoveryOpenshiftRecoveryJobStateRunning = 'cdm.disaster-recovery-openshift.recovery-job.state.running'
}

export type OpenShiftDrRecoveryJobStatus = {
  __typename?: 'OpenShiftDrRecoveryJobStatus';
  result_code?: Maybe<OpenShiftDrRecoveryJobResultCodeEnum | `${OpenShiftDrRecoveryJobResultCodeEnum}`>;
  state_code?: Maybe<OpenShiftDrRecoveryJobStateCodeEnum | `${OpenShiftDrRecoveryJobStateCodeEnum}`>;
};

export type OpenShiftDrRecoveryJobStatusInput = {
  result_code?: InputMaybe<OpenShiftDrRecoveryJobResultCodeEnum | `${OpenShiftDrRecoveryJobResultCodeEnum}`>;
  state_code?: InputMaybe<OpenShiftDrRecoveryJobStateCodeEnum | `${OpenShiftDrRecoveryJobStateCodeEnum}`>;
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
  type_code?: Maybe<OpenShiftDrRecoveryJobTaskTypeCodeEnum | `${OpenShiftDrRecoveryJobTaskTypeCodeEnum}`>;
  volume_id?: Maybe<Scalars['BigInt']['output']>;
  volume_snapshot_id?: Maybe<Scalars['BigInt']['output']>;
};

export enum OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskFailedDependencyTaskFailed = 'cdm-disaster-recovery-openshift.recovery-job-task.failed.dependency_task_failed',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskFailedUnexpectedError = 'cdm-disaster-recovery-openshift.recovery-job-task.failed.unexpected_error'
}

export type OpenShiftDrRecoveryJobTaskInput = {
  dependencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dependents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenShiftDrRecoveryJobTaskTypeCodeEnum | `${OpenShiftDrRecoveryJobTaskTypeCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskResultCanceled = 'cdm-disaster-recovery-openshift.recovery-job-task.result.canceled',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskResultFailed = 'cdm-disaster-recovery-openshift.recovery-job-task.result.failed',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskResultSucceed = 'cdm-disaster-recovery-openshift.recovery-job-task.result.succeed'
}

export enum OpenShiftDrRecoveryJobTaskStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateCanceled = 'cdm.disaster-recovery-openshift.recovery-job-task.state.canceled',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateCompleted = 'cdm.disaster-recovery-openshift.recovery-job-task.state.completed',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateConfirmed = 'cdm.disaster-recovery-openshift.recovery-job-task.state.confirmed',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStatePaused = 'cdm.disaster-recovery-openshift.recovery-job-task.state.paused',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStatePending = 'cdm.disaster-recovery-openshift.recovery-job-task.state.pending',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRollbackFailed = 'cdm.disaster-recovery-openshift.recovery-job-task.state.rollback-failed',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRollbackIgnored = 'cdm.disaster-recovery-openshift.recovery-job-task.state.rollback-ignored',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRolledBack = 'cdm.disaster-recovery-openshift.recovery-job-task.state.rolled-back',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRollingBack = 'cdm.disaster-recovery-openshift.recovery-job-task.state.rolling-back',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskStateRunning = 'cdm.disaster-recovery-openshift.recovery-job-task.state.running'
}

export type OpenShiftDrRecoveryJobTaskStatus = {
  __typename?: 'OpenShiftDrRecoveryJobTaskStatus';
  failed_reason_code?: Maybe<OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum | `${OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum}`>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  result_code?: Maybe<OpenShiftDrRecoveryJobTaskResultCodeEnum | `${OpenShiftDrRecoveryJobTaskResultCodeEnum}`>;
  retry_count?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRecoveryJobTaskStateCodeEnum | `${OpenShiftDrRecoveryJobTaskStateCodeEnum}`>;
};

export type OpenShiftDrRecoveryJobTaskStatusInput = {
  failed_reason_code?: InputMaybe<OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum | `${OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum}`>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  result_code?: InputMaybe<OpenShiftDrRecoveryJobTaskResultCodeEnum | `${OpenShiftDrRecoveryJobTaskResultCodeEnum}`>;
  retry_count?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRecoveryJobTaskStateCodeEnum | `${OpenShiftDrRecoveryJobTaskStateCodeEnum}`>;
};

export enum OpenShiftDrRecoveryJobTaskTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypeCreateResource = 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-resource',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypeCreateVolume = 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-volume',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypeCreateVolumeSnapshot = 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-volume-snapshot',
  CdmDisasterRecoveryOpenshiftRecoveryJobTaskTypePushImage = 'cdm.disaster-recovery-openshift.recovery-job-task.type.push-image'
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
  direction?: Maybe<OpenShiftDrRecoveryPlanDirectionCodeEnum | `${OpenShiftDrRecoveryPlanDirectionCodeEnum}`>;
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
  CdmDrOpenshiftRecoveryPlanDirectionFailback = 'cdm.dr-openshift.recovery-plan.direction.failback',
  CdmDrOpenshiftRecoveryPlanDirectionFailover = 'cdm.dr-openshift.recovery-plan.direction.failover'
}

export type OpenShiftDrRecoveryPlanInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<OpenShiftDrRecoveryPlanDirectionCodeEnum | `${OpenShiftDrRecoveryPlanDirectionCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanStatePreparing = 'cdm.disaster-recovery-openshift.recovery-plan.state.preparing',
  CdmDisasterRecoveryOpenshiftRecoveryPlanStateWarning = 'cdm.disaster-recovery-openshift.recovery-plan.state.warning'
}

export type OpenShiftDrRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrRecoveryPlanStatus';
  finalizer_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrFinalizerRecoveryPlanStatus>>>;
  namespace_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrNamespaceRecoveryPlanStatus>>>;
  priority_class_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrPriorityClassRecoveryPlanStatus>>>;
  readiness_gate_condition_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrReadinessGateConditionRecoveryPlanStatus>>>;
  recovery_cluster_state_code?: Maybe<OpenShiftDrRecoveryClusterStateCodeEnum | `${OpenShiftDrRecoveryClusterStateCodeEnum}`>;
  registry_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrRegistryRecoveryPlanStatus>>>;
  runtime_class_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrRuntimeClassRecoveryPlanStatus>>>;
  scheduler_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrSchedulerRecoveryPlanStatus>>>;
  service_account_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrServiceAccountRecoveryPlanStatus>>>;
  service_recovery_plan_statuses?: Maybe<Array<Maybe<OpenShiftDrServiceRecoveryPlanStatus>>>;
  state_code?: Maybe<OpenShiftDrRecoveryPlanStateCodeEnum | `${OpenShiftDrRecoveryPlanStateCodeEnum}`>;
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
  recovery_cluster_state_code?: InputMaybe<OpenShiftDrRecoveryClusterStateCodeEnum | `${OpenShiftDrRecoveryClusterStateCodeEnum}`>;
  registry_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrRegistryRecoveryPlanStatusInput>>>;
  runtime_class_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrRuntimeClassRecoveryPlanStatusInput>>>;
  scheduler_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrSchedulerRecoveryPlanStatusInput>>>;
  service_account_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrServiceAccountRecoveryPlanStatusInput>>>;
  service_recovery_plan_statuses?: InputMaybe<Array<InputMaybe<OpenShiftDrServiceRecoveryPlanStatusInput>>>;
  state_code?: InputMaybe<OpenShiftDrRecoveryPlanStateCodeEnum | `${OpenShiftDrRecoveryPlanStateCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryPointTypeLatest = 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.latest',
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryPointTypeLatestSnapshot = 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.latest_snapshot',
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryPointTypeSnapshot = 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.snapshot'
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
  recovery_point_type_code?: Maybe<OpenShiftDrRecoveryPointTypeCodeEnum | `${OpenShiftDrRecoveryPointTypeCodeEnum}`>;
  recovery_type_code?: Maybe<OpenShiftDrRecoveryTypeCodeEnum | `${OpenShiftDrRecoveryTypeCodeEnum}`>;
  resource_name?: Maybe<Scalars['String']['output']>;
  result_code?: Maybe<OpenShiftDrRecoveryResultCodeEnum | `${OpenShiftDrRecoveryResultCodeEnum}`>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
};

export enum OpenShiftDrRecoveryResultCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryResultCanceled = 'cdm.disaster-recovery-openshift.recovery-result.canceled',
  CdmDisasterRecoveryOpenshiftRecoveryResultFailed = 'cdm.disaster-recovery-openshift.recovery-result.failed',
  CdmDisasterRecoveryOpenshiftRecoveryResultSuccess = 'cdm.disaster-recovery-openshift.recovery-result.success'
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
  recovery_point_type_code?: InputMaybe<OpenShiftDrRecoveryPointTypeCodeEnum | `${OpenShiftDrRecoveryPointTypeCodeEnum}`>;
  recovery_type_code?: InputMaybe<OpenShiftDrRecoveryTypeCodeEnum | `${OpenShiftDrRecoveryTypeCodeEnum}`>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  result_code?: InputMaybe<OpenShiftDrRecoveryResultCodeEnum | `${OpenShiftDrRecoveryResultCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryTypeRecovery = 'cdm.disaster-recovery-openshift.recovery-job.recovery-type.recovery',
  CdmDisasterRecoveryOpenshiftRecoveryJobRecoveryTypeTest = 'cdm.disaster-recovery-openshift.recovery-job.recovery-type.test'
}

export enum OpenShiftDrRegistryFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.ignore-warning',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanFallbackPolicyUsingDefault = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.using-default'
}

export type OpenShiftDrRegistryRecoveryPlan = {
  __typename?: 'OpenShiftDrRegistryRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrRegistryFallbackPolicyEnum | `${OpenShiftDrRegistryFallbackPolicyEnum}`>;
  protection_cluster_registry?: Maybe<OpenShiftCmRegistry>;
  recovery_cluster_registry?: Maybe<OpenShiftCmRegistry>;
  recovery_type_code?: Maybe<OpenShiftDrRegistryRecoveryTypeCodeEnum | `${OpenShiftDrRegistryRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrRegistryRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrRegistryFallbackPolicyEnum | `${OpenShiftDrRegistryFallbackPolicyEnum}`>;
  protection_cluster_registry?: InputMaybe<OpenShiftCmRegistryInput>;
  recovery_cluster_registry?: InputMaybe<OpenShiftCmRegistryInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrRegistryRecoveryTypeCodeEnum | `${OpenShiftDrRegistryRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrRegistryRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNotFoundRegistry = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-found-registry',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNotSetRegistry = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-set-registry',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanStateNotSetRegistryPushCredential = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-set-registry-push-credential'
}

export type OpenShiftDrRegistryRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrRegistryRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRegistryRecoveryPlanStateCodeEnum | `${OpenShiftDrRegistryRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrRegistryRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRegistryRecoveryPlanStateCodeEnum | `${OpenShiftDrRegistryRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrRegistryRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanRecoveryTypeMirrorImage = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.recovery-type.mirror-image',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRegistryRecoveryPlanRecoveryTypeMirrorSecret = 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.recovery-type.mirror-secret'
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.ignore-warning',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanFallbackPolicyUsingDefault = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.using-default'
}

export type OpenShiftDrRuntimeClassRecoveryPlan = {
  __typename?: 'OpenShiftDrRuntimeClassRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrRuntimeClassFallbackPolicyEnum | `${OpenShiftDrRuntimeClassFallbackPolicyEnum}`>;
  protection_cluster_runtime_class?: Maybe<OpenShiftCmRuntimeClass>;
  recovery_cluster_runtime_class?: Maybe<OpenShiftCmRuntimeClass>;
  recovery_type_code?: Maybe<OpenShiftDrRuntimeClassRecoveryTypeCodeEnum | `${OpenShiftDrRuntimeClassRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrRuntimeClassRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrRuntimeClassFallbackPolicyEnum | `${OpenShiftDrRuntimeClassFallbackPolicyEnum}`>;
  protection_cluster_runtime_class?: InputMaybe<OpenShiftCmRuntimeClassInput>;
  recovery_cluster_runtime_class?: InputMaybe<OpenShiftCmRuntimeClassInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrRuntimeClassRecoveryTypeCodeEnum | `${OpenShiftDrRuntimeClassRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanStateNotFoundRuntimeClass = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.not-found-runtime-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanStateNotSetRuntimeClass = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.not-set-runtime-class'
}

export type OpenShiftDrRuntimeClassRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrRuntimeClassRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum | `${OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrRuntimeClassRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum | `${OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrRuntimeClassRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanRecoveryTypeMapping = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.recovery-type.mapping',
  CdmDisasterRecoveryOpenshiftRecoveryPlanRuntimeClassRecoveryPlanRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.recovery-type.unused'
}

export enum OpenShiftDrSchedulerFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.ignore-warning',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanFallbackPolicyUsingDefault = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.using-default'
}

export type OpenShiftDrSchedulerRecoveryPlan = {
  __typename?: 'OpenShiftDrSchedulerRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrSchedulerFallbackPolicyEnum | `${OpenShiftDrSchedulerFallbackPolicyEnum}`>;
  protection_cluster_scheduler?: Maybe<OpenShiftCmScheduler>;
  recovery_cluster_scheduler?: Maybe<OpenShiftCmScheduler>;
  recovery_type_code?: Maybe<OpenShiftDrSchedulerRecoveryTypeCodeEnum | `${OpenShiftDrSchedulerRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrSchedulerRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrSchedulerFallbackPolicyEnum | `${OpenShiftDrSchedulerFallbackPolicyEnum}`>;
  protection_cluster_scheduler?: InputMaybe<OpenShiftCmSchedulerInput>;
  recovery_cluster_scheduler?: InputMaybe<OpenShiftCmSchedulerInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrSchedulerRecoveryTypeCodeEnum | `${OpenShiftDrSchedulerRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrSchedulerRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanStateNotFoundScheduler = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.not-found-scheduler',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanStateNotSetScheduler = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.not-set-scheduler'
}

export type OpenShiftDrSchedulerRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrSchedulerRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrSchedulerRecoveryPlanStateCodeEnum | `${OpenShiftDrSchedulerRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrSchedulerRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrSchedulerRecoveryPlanStateCodeEnum | `${OpenShiftDrSchedulerRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrSchedulerRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanRecoveryTypeMapping = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.recovery-type.mapping',
  CdmDisasterRecoveryOpenshiftRecoveryPlanSchedulerRecoveryPlanRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.recovery-type.unused'
}

export enum OpenShiftDrServiceAccountFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.fallback_policy.ignore-warning'
}

export type OpenShiftDrServiceAccountRecoveryPlan = {
  __typename?: 'OpenShiftDrServiceAccountRecoveryPlan';
  fallback_policy?: Maybe<OpenShiftDrServiceAccountFallbackPolicyEnum | `${OpenShiftDrServiceAccountFallbackPolicyEnum}`>;
  protection_cluster_service_account?: Maybe<OpenShiftCmServiceAccount>;
  recovery_cluster_service_account?: Maybe<OpenShiftCmServiceAccount>;
  recovery_type_code?: Maybe<OpenShiftDrServiceAccountRecoveryTypeCodeEnum | `${OpenShiftDrServiceAccountRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrServiceAccountRecoveryPlanInput = {
  fallback_policy?: InputMaybe<OpenShiftDrServiceAccountFallbackPolicyEnum | `${OpenShiftDrServiceAccountFallbackPolicyEnum}`>;
  protection_cluster_service_account?: InputMaybe<OpenShiftCmServiceAccountInput>;
  recovery_cluster_service_account?: InputMaybe<OpenShiftCmServiceAccountInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrServiceAccountRecoveryTypeCodeEnum | `${OpenShiftDrServiceAccountRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.state.normal'
}

export type OpenShiftDrServiceAccountRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrServiceAccountRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum | `${OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrServiceAccountRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum | `${OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrServiceAccountRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceAccountRecoveryPlanRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.recovery-type.unused'
}

export enum OpenShiftDrServiceFallbackPolicyEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanFallbackPolicyIgnoreRecovery = 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.fallback_policy.ignore-recovery',
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanFallbackPolicyIgnoreWarning = 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.fallback_policy.ignore-warning'
}

export type OpenShiftDrServiceRecoveryPlan = {
  __typename?: 'OpenShiftDrServiceRecoveryPlan';
  cluster_ip?: Maybe<Scalars['String']['output']>;
  external_name?: Maybe<Scalars['String']['output']>;
  fallback_policy?: Maybe<OpenShiftDrServiceFallbackPolicyEnum | `${OpenShiftDrServiceFallbackPolicyEnum}`>;
  load_balancer_class?: Maybe<Scalars['String']['output']>;
  load_balancer_ip?: Maybe<Scalars['String']['output']>;
  load_balancer_source_ranges?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  protection_cluster_service?: Maybe<OpenShiftCmService>;
  recovery_type_code?: Maybe<OpenShiftDrServiceRecoveryTypeCodeEnum | `${OpenShiftDrServiceRecoveryTypeCodeEnum}`>;
};

export type OpenShiftDrServiceRecoveryPlanInput = {
  cluster_ip?: InputMaybe<Scalars['String']['input']>;
  external_name?: InputMaybe<Scalars['String']['input']>;
  fallback_policy?: InputMaybe<OpenShiftDrServiceFallbackPolicyEnum | `${OpenShiftDrServiceFallbackPolicyEnum}`>;
  load_balancer_class?: InputMaybe<Scalars['String']['input']>;
  load_balancer_ip?: InputMaybe<Scalars['String']['input']>;
  load_balancer_source_ranges?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protection_cluster_service?: InputMaybe<OpenShiftCmServiceInput>;
  recovery_type_code?: InputMaybe<OpenShiftDrServiceRecoveryTypeCodeEnum | `${OpenShiftDrServiceRecoveryTypeCodeEnum}`>;
};

export enum OpenShiftDrServiceRecoveryPlanStateCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.state.normal'
}

export type OpenShiftDrServiceRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrServiceRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrServiceRecoveryPlanStateCodeEnum | `${OpenShiftDrServiceRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrServiceRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrServiceRecoveryPlanStateCodeEnum | `${OpenShiftDrServiceRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrServiceRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanRecoveryTypeNoAction = 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.recovery-type.no-action',
  CdmDisasterRecoveryOpenshiftRecoveryPlanServiceRecoveryPlanRecoveryTypeUpdate = 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.recovery-type.update'
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotFoundSnapshotClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-found-snapshot-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotFoundStorageClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-found-storage-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotSetSnapshotClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-set-snapshot-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeRecoveryPlanStateNotSetStorageClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-set-storage-class'
}

export type OpenShiftDrVolumeRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrVolumeRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrVolumeRecoveryPlanStateCodeEnum | `${OpenShiftDrVolumeRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrVolumeRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrVolumeRecoveryPlanStateCodeEnum | `${OpenShiftDrVolumeRecoveryPlanStateCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotFoundSnapshotClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-found-snapshot-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotFoundStorageClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-found-storage-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotSetSnapshotClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-set-snapshot-class',
  CdmDisasterRecoveryOpenshiftRecoveryPlanVolumeSnapshotRecoveryPlanStateNotSetStorageClass = 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-set-storage-class'
}

export type OpenShiftDrVolumeSnapshotRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrVolumeSnapshotRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum | `${OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum | `${OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum {
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanDnsConfigRecoveryTypeNoAction = 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.no-action',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanDnsConfigRecoveryTypeUnused = 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.unused',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanDnsConfigRecoveryTypeUpdate = 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.update'
}

export enum OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum {
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryFailedDependencyWorkloadNotRecovered = 'cdm-disaster-recovery-openshift.workload-recovery.failed.dependency_workload_not_recovered',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryFailedRecoveryJobTaskFailed = 'cdm-disaster-recovery-openshift.workload-recovery.failed.recovery_job_task_failed'
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
  recovery_type_code?: Maybe<OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum | `${OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum}`>;
  searches?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type OpenShiftDrWorkloadRecoveryPlanDnsConfigInput = {
  nameservers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options?: InputMaybe<Array<InputMaybe<OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput>>>;
  recovery_type_code?: InputMaybe<OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum | `${OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum}`>;
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
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanStateInvalidDnsConfigNameservers = 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.invalid-dns-config-nameservers',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanStateNormal = 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.normal',
  CdmDisasterRecoveryOpenshiftRecoveryPlanWorkloadRecoveryPlanStateNotSetDnsConfigNameservers = 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.not-set-dns-config-nameservers'
}

export type OpenShiftDrWorkloadRecoveryPlanStatus = {
  __typename?: 'OpenShiftDrWorkloadRecoveryPlanStatus';
  id?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenShiftDrWorkloadRecoveryPlanStateCodeEnum | `${OpenShiftDrWorkloadRecoveryPlanStateCodeEnum}`>;
};

export type OpenShiftDrWorkloadRecoveryPlanStatusInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenShiftDrWorkloadRecoveryPlanStateCodeEnum | `${OpenShiftDrWorkloadRecoveryPlanStateCodeEnum}`>;
};

export enum OpenShiftDrWorkloadRecoveryResultCodeEnum {
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryResultCanceled = 'cdm-disaster-recovery-openshift.workload-recovery.result.canceled',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryResultFailed = 'cdm-disaster-recovery-openshift.workload-recovery.result.failed',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryResultSucceed = 'cdm-disaster-recovery-openshift.workload-recovery.result.succeed'
}

export enum OpenShiftDrWorkloadRecoveryStateCodeEnum {
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateBeingRecovered = 'cdm.disaster-recovery-openshift.workload-recovery.state.being-recovered',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateCanceled = 'cdm.disaster-recovery-openshift.workload-recovery.state.canceled',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateFailed = 'cdm.disaster-recovery-openshift.workload-recovery.state.failed',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateIgnored = 'cdm.disaster-recovery-openshift.workload-recovery.state.ignored',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStatePaused = 'cdm.disaster-recovery-openshift.workload-recovery.state.paused',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStatePending = 'cdm.disaster-recovery-openshift.workload-recovery.state.pending',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRecovered = 'cdm.disaster-recovery-openshift.workload-recovery.state.recovered',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRollbackIgnored = 'cdm.disaster-recovery-openshift.workload-recovery.state.rollback-ignored',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRolledBack = 'cdm.disaster-recovery-openshift.workload-recovery.state.rolled-back',
  CdmDisasterRecoveryOpenshiftWorkloadRecoveryStateRollingBack = 'cdm.disaster-recovery-openshift.workload-recovery.state.rolling-back'
}

export type OpenShiftDrWorkloadRecoveryStatus = {
  __typename?: 'OpenShiftDrWorkloadRecoveryStatus';
  failed_reason_code?: Maybe<OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum | `${OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum}`>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  recovery_job_tasks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  result_code?: Maybe<OpenShiftDrWorkloadRecoveryResultCodeEnum | `${OpenShiftDrWorkloadRecoveryResultCodeEnum}`>;
  state_code?: Maybe<OpenShiftDrWorkloadRecoveryStateCodeEnum | `${OpenShiftDrWorkloadRecoveryStateCodeEnum}`>;
  workload_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftDrWorkloadRecoveryStatusInput = {
  failed_reason_code?: InputMaybe<OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum | `${OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum}`>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  recovery_job_tasks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  result_code?: InputMaybe<OpenShiftDrWorkloadRecoveryResultCodeEnum | `${OpenShiftDrWorkloadRecoveryResultCodeEnum}`>;
  state_code?: InputMaybe<OpenShiftDrWorkloadRecoveryStateCodeEnum | `${OpenShiftDrWorkloadRecoveryStateCodeEnum}`>;
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
  status?: Maybe<ReplicatorImageReplicationStatusStateCodeEnum | `${ReplicatorImageReplicationStatusStateCodeEnum}`>;
};

export type ReplicatorImageReplicationStatusInput = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ReplicatorImageReplicationStatusStateCodeEnum | `${ReplicatorImageReplicationStatusStateCodeEnum}`>;
};

export enum ReplicatorImageReplicationStatusStateCodeEnum {
  CdmReplicatorImageReplicationStateDone = 'cdm.replicator.image-replication.state.done',
  CdmReplicatorImageReplicationStateError = 'cdm.replicator.image-replication.state.error',
  CdmReplicatorImageReplicationStateSyncing = 'cdm.replicator.image-replication.state.syncing'
}

export enum ReplicatorLastPrimarySnapshotStateCodeEnum {
  CdmReplicatorLatestSnapshotCreationStateBeingCreated = 'cdm.replicator.latest-snapshot-creation.state.being-created',
  CdmReplicatorLatestSnapshotCreationStateError = 'cdm.replicator.latest-snapshot-creation.state.error',
  CdmReplicatorLatestSnapshotCreationStateFailure = 'cdm.replicator.latest-snapshot-creation.state.failure',
  CdmReplicatorLatestSnapshotCreationStateNotYet = 'cdm.replicator.latest-snapshot-creation.state.not-yet',
  CdmReplicatorLatestSnapshotCreationStateSuccess = 'cdm.replicator.latest-snapshot-creation.state.success'
}

export type ReplicatorMirroringStatus = {
  __typename?: 'ReplicatorMirroringStatus';
  cause?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<ReplicatorMirroringStatusStateCodeEnum | `${ReplicatorMirroringStatusStateCodeEnum}`>;
};

export type ReplicatorMirroringStatusInput = {
  cause?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<ReplicatorMirroringStatusStateCodeEnum | `${ReplicatorMirroringStatusStateCodeEnum}`>;
};

export enum ReplicatorMirroringStatusStateCodeEnum {
  CdmReplicatorVolumeReplicationStateError = 'cdm.replicator.volume-replication.state.error',
  CdmReplicatorVolumeReplicationStateMirroring = 'cdm.replicator.volume-replication.state.mirroring',
  CdmReplicatorVolumeReplicationStateSyncing = 'cdm.replicator.volume-replication.state.syncing'
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
  last_primary_snapshot_status?: Maybe<ReplicatorLastPrimarySnapshotStateCodeEnum | `${ReplicatorLastPrimarySnapshotStateCodeEnum}`>;
  status?: Maybe<ReplicatorReplicationInfoStatusStateCodeEnum | `${ReplicatorReplicationInfoStatusStateCodeEnum}`>;
  volume_replication_status?: Maybe<Array<Maybe<ReplicatorVolumeReplicationStatus>>>;
};

export type ReplicatorReplicationInfoStatusInput = {
  image_replication_status?: InputMaybe<Array<InputMaybe<ReplicatorImageReplicationStatusInput>>>;
  last_primary_snapshot_status?: InputMaybe<ReplicatorLastPrimarySnapshotStateCodeEnum | `${ReplicatorLastPrimarySnapshotStateCodeEnum}`>;
  status?: InputMaybe<ReplicatorReplicationInfoStatusStateCodeEnum | `${ReplicatorReplicationInfoStatusStateCodeEnum}`>;
  volume_replication_status?: InputMaybe<Array<InputMaybe<ReplicatorVolumeReplicationStatusInput>>>;
};

export enum ReplicatorReplicationInfoStatusStateCodeEnum {
  CdmReplicatorOpenshiftReplicationInfoStateError = 'cdm.replicator.openshift.replication-info.state.error',
  CdmReplicatorOpenshiftReplicationInfoStateNormal = 'cdm.replicator.openshift.replication-info.state.normal',
  CdmReplicatorOpenshiftReplicationInfoStatePreparationFailed = 'cdm.replicator.openshift.replication-info.state.preparation-failed',
  CdmReplicatorOpenshiftReplicationInfoStatePreparing = 'cdm.replicator.openshift.replication-info.state.preparing'
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
  CancelRecoveryJobInput: CancelRecoveryJobInput;
  CloudDayOfMonthEnum: CloudDayOfMonthEnum;
  CloudIntervalHourEnum: CloudIntervalHourEnum;
  CloudIntervalMinuteEnum: CloudIntervalMinuteEnum;
  CloudIntervalMonthEnum: CloudIntervalMonthEnum;
  CloudLanguageSetEnum: CloudLanguageSetEnum;
  CloudRole: ResolverTypeWrapper<CloudRole>;
  CloudRoleEnum: CloudRoleEnum;
  CloudRoleInput: CloudRoleInput;
  CloudSchedule: ResolverTypeWrapper<CloudSchedule>;
  CloudScheduleInput: CloudScheduleInput;
  CloudScheduleTypeEnum: CloudScheduleTypeEnum;
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
  CloudWeekEnum: CloudWeekEnum;
  CloudWeekOfMonthEnum: CloudWeekOfMonthEnum;
  ConfirmRecoveryJobInput: ConfirmRecoveryJobInput;
  CreateRecoveryJobScheduleInput: CreateRecoveryJobScheduleInput;
  CreateRecoveryPlanInput: CreateRecoveryPlanInput;
  DeleteRecoveryJobInput: DeleteRecoveryJobInput;
  DeleteRecoveryJobScheduleInput: DeleteRecoveryJobScheduleInput;
  DeleteRecoveryPlanInput: DeleteRecoveryPlanInput;
  DeleteRecoveryResultInput: DeleteRecoveryResultInput;
  ForcedConfirmRecoveryJobInput: ForcedConfirmRecoveryJobInput;
  IgnoreRollbackRecoveryJobInput: IgnoreRollbackRecoveryJobInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OpenShiftCmCluster: ResolverTypeWrapper<OpenShiftCmCluster>;
  OpenShiftCmClusterInput: OpenShiftCmClusterInput;
  OpenShiftCmClusterResourceServiceTypeEnum: OpenShiftCmClusterResourceServiceTypeEnum;
  OpenShiftCmClusterResourceVolumeTypeEnum: OpenShiftCmClusterResourceVolumeTypeEnum;
  OpenShiftCmClusterStateCodeEnum: OpenShiftCmClusterStateCodeEnum;
  OpenShiftCmClusterStatus: ResolverTypeWrapper<OpenShiftCmClusterStatus>;
  OpenShiftCmClusterStatusInput: OpenShiftCmClusterStatusInput;
  OpenShiftCmClusterSyncStateCodeEnum: OpenShiftCmClusterSyncStateCodeEnum;
  OpenShiftCmClusterSyncStatus: ResolverTypeWrapper<OpenShiftCmClusterSyncStatus>;
  OpenShiftCmClusterSyncStatusInput: OpenShiftCmClusterSyncStatusInput;
  OpenShiftCmClusterTypeCodeEnum: OpenShiftCmClusterTypeCodeEnum;
  OpenShiftCmFinalizer: ResolverTypeWrapper<OpenShiftCmFinalizer>;
  OpenShiftCmFinalizerInput: OpenShiftCmFinalizerInput;
  OpenShiftCmMessage: ResolverTypeWrapper<OpenShiftCmMessage>;
  OpenShiftCmMessageInput: OpenShiftCmMessageInput;
  OpenShiftCmNamespace: ResolverTypeWrapper<OpenShiftCmNamespace>;
  OpenShiftCmNamespaceInput: OpenShiftCmNamespaceInput;
  OpenShiftCmPriorityClass: ResolverTypeWrapper<OpenShiftCmPriorityClass>;
  OpenShiftCmPriorityClassInput: OpenShiftCmPriorityClassInput;
  OpenShiftCmRegistry: ResolverTypeWrapper<OpenShiftCmRegistry>;
  OpenShiftCmRegistryInput: OpenShiftCmRegistryInput;
  OpenShiftCmResource: ResolverTypeWrapper<OpenShiftCmResource>;
  OpenShiftCmResourceInput: OpenShiftCmResourceInput;
  OpenShiftCmRuntimeClass: ResolverTypeWrapper<OpenShiftCmRuntimeClass>;
  OpenShiftCmRuntimeClassInput: OpenShiftCmRuntimeClassInput;
  OpenShiftCmScheduler: ResolverTypeWrapper<OpenShiftCmScheduler>;
  OpenShiftCmSchedulerInput: OpenShiftCmSchedulerInput;
  OpenShiftCmService: ResolverTypeWrapper<OpenShiftCmService>;
  OpenShiftCmServiceAccount: ResolverTypeWrapper<OpenShiftCmServiceAccount>;
  OpenShiftCmServiceAccountInput: OpenShiftCmServiceAccountInput;
  OpenShiftCmServiceInput: OpenShiftCmServiceInput;
  OpenShiftCmStorageClass: ResolverTypeWrapper<OpenShiftCmStorageClass>;
  OpenShiftCmStorageClassInput: OpenShiftCmStorageClassInput;
  OpenShiftCmVolume: ResolverTypeWrapper<OpenShiftCmVolume>;
  OpenShiftCmVolumeInput: OpenShiftCmVolumeInput;
  OpenShiftCmVolumeSnapshot: ResolverTypeWrapper<OpenShiftCmVolumeSnapshot>;
  OpenShiftCmVolumeSnapshotClass: ResolverTypeWrapper<OpenShiftCmVolumeSnapshotClass>;
  OpenShiftCmVolumeSnapshotClassInput: OpenShiftCmVolumeSnapshotClassInput;
  OpenShiftCmVolumeSnapshotInput: OpenShiftCmVolumeSnapshotInput;
  OpenShiftCmWorkload: ResolverTypeWrapper<OpenShiftCmWorkload>;
  OpenShiftCmWorkloadInput: OpenShiftCmWorkloadInput;
  OpenShiftCmWorkloadVolume: ResolverTypeWrapper<OpenShiftCmWorkloadVolume>;
  OpenShiftCmWorkloadVolumeInput: OpenShiftCmWorkloadVolumeInput;
  OpenShiftDrFinalizerFallbackPolicyEnum: OpenShiftDrFinalizerFallbackPolicyEnum;
  OpenShiftDrFinalizerRecoveryPlan: ResolverTypeWrapper<OpenShiftDrFinalizerRecoveryPlan>;
  OpenShiftDrFinalizerRecoveryPlanInput: OpenShiftDrFinalizerRecoveryPlanInput;
  OpenShiftDrFinalizerRecoveryPlanStateCodeEnum: OpenShiftDrFinalizerRecoveryPlanStateCodeEnum;
  OpenShiftDrFinalizerRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrFinalizerRecoveryPlanStatus>;
  OpenShiftDrFinalizerRecoveryPlanStatusInput: OpenShiftDrFinalizerRecoveryPlanStatusInput;
  OpenShiftDrFinalizerRecoveryTypeCodeEnum: OpenShiftDrFinalizerRecoveryTypeCodeEnum;
  OpenShiftDrImageRecoveryInfo: ResolverTypeWrapper<OpenShiftDrImageRecoveryInfo>;
  OpenShiftDrImageRecoveryInfoInput: OpenShiftDrImageRecoveryInfoInput;
  OpenShiftDrNamespaceRecoveryPlan: ResolverTypeWrapper<OpenShiftDrNamespaceRecoveryPlan>;
  OpenShiftDrNamespaceRecoveryPlanInput: OpenShiftDrNamespaceRecoveryPlanInput;
  OpenShiftDrNamespaceRecoveryPlanStateCodeEnum: OpenShiftDrNamespaceRecoveryPlanStateCodeEnum;
  OpenShiftDrNamespaceRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrNamespaceRecoveryPlanStatus>;
  OpenShiftDrNamespaceRecoveryPlanStatusInput: OpenShiftDrNamespaceRecoveryPlanStatusInput;
  OpenShiftDrPriorityClassFallbackPolicyEnum: OpenShiftDrPriorityClassFallbackPolicyEnum;
  OpenShiftDrPriorityClassRecoveryPlan: ResolverTypeWrapper<OpenShiftDrPriorityClassRecoveryPlan>;
  OpenShiftDrPriorityClassRecoveryPlanInput: OpenShiftDrPriorityClassRecoveryPlanInput;
  OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum: OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum;
  OpenShiftDrPriorityClassRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrPriorityClassRecoveryPlanStatus>;
  OpenShiftDrPriorityClassRecoveryPlanStatusInput: OpenShiftDrPriorityClassRecoveryPlanStatusInput;
  OpenShiftDrPriorityClassRecoveryTypeCodeEnum: OpenShiftDrPriorityClassRecoveryTypeCodeEnum;
  OpenShiftDrReadinessGateConditionFallbackPolicyEnum: OpenShiftDrReadinessGateConditionFallbackPolicyEnum;
  OpenShiftDrReadinessGateConditionRecoveryPlan: ResolverTypeWrapper<OpenShiftDrReadinessGateConditionRecoveryPlan>;
  OpenShiftDrReadinessGateConditionRecoveryPlanInput: OpenShiftDrReadinessGateConditionRecoveryPlanInput;
  OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum: OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum;
  OpenShiftDrReadinessGateConditionRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrReadinessGateConditionRecoveryPlanStatus>;
  OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput: OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput;
  OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum: OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum;
  OpenShiftDrRecoveryClusterStateCodeEnum: OpenShiftDrRecoveryClusterStateCodeEnum;
  OpenShiftDrRecoveryInfo: ResolverTypeWrapper<OpenShiftDrRecoveryInfo>;
  OpenShiftDrRecoveryInfoInput: OpenShiftDrRecoveryInfoInput;
  OpenShiftDrRecoveryInfoResponse: ResolverTypeWrapper<OpenShiftDrRecoveryInfoResponse>;
  OpenShiftDrRecoveryInfoResponseInput: OpenShiftDrRecoveryInfoResponseInput;
  OpenShiftDrRecoveryJob: ResolverTypeWrapper<OpenShiftDrRecoveryJob>;
  OpenShiftDrRecoveryJobInput: OpenShiftDrRecoveryJobInput;
  OpenShiftDrRecoveryJobResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobResponse>;
  OpenShiftDrRecoveryJobResponseInput: OpenShiftDrRecoveryJobResponseInput;
  OpenShiftDrRecoveryJobResultCodeEnum: OpenShiftDrRecoveryJobResultCodeEnum;
  OpenShiftDrRecoveryJobRetryRequest: ResolverTypeWrapper<OpenShiftDrRecoveryJobRetryRequest>;
  OpenShiftDrRecoveryJobRetryRequestInput: OpenShiftDrRecoveryJobRetryRequestInput;
  OpenShiftDrRecoveryJobSchedule: ResolverTypeWrapper<OpenShiftDrRecoveryJobSchedule>;
  OpenShiftDrRecoveryJobScheduleInput: OpenShiftDrRecoveryJobScheduleInput;
  OpenShiftDrRecoveryJobScheduleRequest: ResolverTypeWrapper<OpenShiftDrRecoveryJobScheduleRequest>;
  OpenShiftDrRecoveryJobScheduleRequestInput: OpenShiftDrRecoveryJobScheduleRequestInput;
  OpenShiftDrRecoveryJobScheduleResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobScheduleResponse>;
  OpenShiftDrRecoveryJobScheduleResponseInput: OpenShiftDrRecoveryJobScheduleResponseInput;
  OpenShiftDrRecoveryJobScheduleStateCodeEnum: OpenShiftDrRecoveryJobScheduleStateCodeEnum;
  OpenShiftDrRecoveryJobScheduleStatus: ResolverTypeWrapper<OpenShiftDrRecoveryJobScheduleStatus>;
  OpenShiftDrRecoveryJobScheduleStatusInput: OpenShiftDrRecoveryJobScheduleStatusInput;
  OpenShiftDrRecoveryJobScheduleStatusResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobScheduleStatusResponse>;
  OpenShiftDrRecoveryJobScheduleStatusResponseInput: OpenShiftDrRecoveryJobScheduleStatusResponseInput;
  OpenShiftDrRecoveryJobSchedulesResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobSchedulesResponse>;
  OpenShiftDrRecoveryJobSchedulesResponseInput: OpenShiftDrRecoveryJobSchedulesResponseInput;
  OpenShiftDrRecoveryJobSchedulesResponseObject: ResolverTypeWrapper<OpenShiftDrRecoveryJobSchedulesResponseObject>;
  OpenShiftDrRecoveryJobSchedulesResponseObjectInput: OpenShiftDrRecoveryJobSchedulesResponseObjectInput;
  OpenShiftDrRecoveryJobStateCodeEnum: OpenShiftDrRecoveryJobStateCodeEnum;
  OpenShiftDrRecoveryJobStatus: ResolverTypeWrapper<OpenShiftDrRecoveryJobStatus>;
  OpenShiftDrRecoveryJobStatusInput: OpenShiftDrRecoveryJobStatusInput;
  OpenShiftDrRecoveryJobStatusResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobStatusResponse>;
  OpenShiftDrRecoveryJobStatusResponseInput: OpenShiftDrRecoveryJobStatusResponseInput;
  OpenShiftDrRecoveryJobTask: ResolverTypeWrapper<OpenShiftDrRecoveryJobTask>;
  OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum: OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum;
  OpenShiftDrRecoveryJobTaskInput: OpenShiftDrRecoveryJobTaskInput;
  OpenShiftDrRecoveryJobTaskLogsResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobTaskLogsResponse>;
  OpenShiftDrRecoveryJobTaskLogsResponseInput: OpenShiftDrRecoveryJobTaskLogsResponseInput;
  OpenShiftDrRecoveryJobTaskResultCodeEnum: OpenShiftDrRecoveryJobTaskResultCodeEnum;
  OpenShiftDrRecoveryJobTaskStateCodeEnum: OpenShiftDrRecoveryJobTaskStateCodeEnum;
  OpenShiftDrRecoveryJobTaskStatus: ResolverTypeWrapper<OpenShiftDrRecoveryJobTaskStatus>;
  OpenShiftDrRecoveryJobTaskStatusInput: OpenShiftDrRecoveryJobTaskStatusInput;
  OpenShiftDrRecoveryJobTaskTypeCodeEnum: OpenShiftDrRecoveryJobTaskTypeCodeEnum;
  OpenShiftDrRecoveryJobTasksResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobTasksResponse>;
  OpenShiftDrRecoveryJobTasksResponseInput: OpenShiftDrRecoveryJobTasksResponseInput;
  OpenShiftDrRecoveryJobsResponse: ResolverTypeWrapper<OpenShiftDrRecoveryJobsResponse>;
  OpenShiftDrRecoveryJobsResponseInput: OpenShiftDrRecoveryJobsResponseInput;
  OpenShiftDrRecoveryJobsResponseQueue: ResolverTypeWrapper<OpenShiftDrRecoveryJobsResponseQueue>;
  OpenShiftDrRecoveryJobsResponseQueueInput: OpenShiftDrRecoveryJobsResponseQueueInput;
  OpenShiftDrRecoveryPlan: ResolverTypeWrapper<OpenShiftDrRecoveryPlan>;
  OpenShiftDrRecoveryPlanDirectionCodeEnum: OpenShiftDrRecoveryPlanDirectionCodeEnum;
  OpenShiftDrRecoveryPlanInput: OpenShiftDrRecoveryPlanInput;
  OpenShiftDrRecoveryPlanRequest: ResolverTypeWrapper<OpenShiftDrRecoveryPlanRequest>;
  OpenShiftDrRecoveryPlanRequestInput: OpenShiftDrRecoveryPlanRequestInput;
  OpenShiftDrRecoveryPlanResponse: ResolverTypeWrapper<OpenShiftDrRecoveryPlanResponse>;
  OpenShiftDrRecoveryPlanResponseInput: OpenShiftDrRecoveryPlanResponseInput;
  OpenShiftDrRecoveryPlanStateCodeEnum: OpenShiftDrRecoveryPlanStateCodeEnum;
  OpenShiftDrRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrRecoveryPlanStatus>;
  OpenShiftDrRecoveryPlanStatusInput: OpenShiftDrRecoveryPlanStatusInput;
  OpenShiftDrRecoveryPlanStatusResponse: ResolverTypeWrapper<OpenShiftDrRecoveryPlanStatusResponse>;
  OpenShiftDrRecoveryPlanStatusResponseInput: OpenShiftDrRecoveryPlanStatusResponseInput;
  OpenShiftDrRecoveryPlanWarningStatusResponse: ResolverTypeWrapper<OpenShiftDrRecoveryPlanWarningStatusResponse>;
  OpenShiftDrRecoveryPlanWarningStatusResponseInput: OpenShiftDrRecoveryPlanWarningStatusResponseInput;
  OpenShiftDrRecoveryPlansResponse: ResolverTypeWrapper<OpenShiftDrRecoveryPlansResponse>;
  OpenShiftDrRecoveryPlansResponseInput: OpenShiftDrRecoveryPlansResponseInput;
  OpenShiftDrRecoveryPointTypeCodeEnum: OpenShiftDrRecoveryPointTypeCodeEnum;
  OpenShiftDrRecoveryResult: ResolverTypeWrapper<OpenShiftDrRecoveryResult>;
  OpenShiftDrRecoveryResultCodeEnum: OpenShiftDrRecoveryResultCodeEnum;
  OpenShiftDrRecoveryResultInput: OpenShiftDrRecoveryResultInput;
  OpenShiftDrRecoveryResultResponse: ResolverTypeWrapper<OpenShiftDrRecoveryResultResponse>;
  OpenShiftDrRecoveryResultResponseInput: OpenShiftDrRecoveryResultResponseInput;
  OpenShiftDrRecoveryResultsResponse: ResolverTypeWrapper<OpenShiftDrRecoveryResultsResponse>;
  OpenShiftDrRecoveryResultsResponseInput: OpenShiftDrRecoveryResultsResponseInput;
  OpenShiftDrRecoveryTypeCodeEnum: OpenShiftDrRecoveryTypeCodeEnum;
  OpenShiftDrRegistryFallbackPolicyEnum: OpenShiftDrRegistryFallbackPolicyEnum;
  OpenShiftDrRegistryRecoveryPlan: ResolverTypeWrapper<OpenShiftDrRegistryRecoveryPlan>;
  OpenShiftDrRegistryRecoveryPlanInput: OpenShiftDrRegistryRecoveryPlanInput;
  OpenShiftDrRegistryRecoveryPlanStateCodeEnum: OpenShiftDrRegistryRecoveryPlanStateCodeEnum;
  OpenShiftDrRegistryRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrRegistryRecoveryPlanStatus>;
  OpenShiftDrRegistryRecoveryPlanStatusInput: OpenShiftDrRegistryRecoveryPlanStatusInput;
  OpenShiftDrRegistryRecoveryTypeCodeEnum: OpenShiftDrRegistryRecoveryTypeCodeEnum;
  OpenShiftDrResourceRecoveryInfo: ResolverTypeWrapper<OpenShiftDrResourceRecoveryInfo>;
  OpenShiftDrResourceRecoveryInfoInput: OpenShiftDrResourceRecoveryInfoInput;
  OpenShiftDrRuntimeClassFallbackPolicyEnum: OpenShiftDrRuntimeClassFallbackPolicyEnum;
  OpenShiftDrRuntimeClassRecoveryPlan: ResolverTypeWrapper<OpenShiftDrRuntimeClassRecoveryPlan>;
  OpenShiftDrRuntimeClassRecoveryPlanInput: OpenShiftDrRuntimeClassRecoveryPlanInput;
  OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum: OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum;
  OpenShiftDrRuntimeClassRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrRuntimeClassRecoveryPlanStatus>;
  OpenShiftDrRuntimeClassRecoveryPlanStatusInput: OpenShiftDrRuntimeClassRecoveryPlanStatusInput;
  OpenShiftDrRuntimeClassRecoveryTypeCodeEnum: OpenShiftDrRuntimeClassRecoveryTypeCodeEnum;
  OpenShiftDrSchedulerFallbackPolicyEnum: OpenShiftDrSchedulerFallbackPolicyEnum;
  OpenShiftDrSchedulerRecoveryPlan: ResolverTypeWrapper<OpenShiftDrSchedulerRecoveryPlan>;
  OpenShiftDrSchedulerRecoveryPlanInput: OpenShiftDrSchedulerRecoveryPlanInput;
  OpenShiftDrSchedulerRecoveryPlanStateCodeEnum: OpenShiftDrSchedulerRecoveryPlanStateCodeEnum;
  OpenShiftDrSchedulerRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrSchedulerRecoveryPlanStatus>;
  OpenShiftDrSchedulerRecoveryPlanStatusInput: OpenShiftDrSchedulerRecoveryPlanStatusInput;
  OpenShiftDrSchedulerRecoveryTypeCodeEnum: OpenShiftDrSchedulerRecoveryTypeCodeEnum;
  OpenShiftDrServiceAccountFallbackPolicyEnum: OpenShiftDrServiceAccountFallbackPolicyEnum;
  OpenShiftDrServiceAccountRecoveryPlan: ResolverTypeWrapper<OpenShiftDrServiceAccountRecoveryPlan>;
  OpenShiftDrServiceAccountRecoveryPlanInput: OpenShiftDrServiceAccountRecoveryPlanInput;
  OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum: OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum;
  OpenShiftDrServiceAccountRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrServiceAccountRecoveryPlanStatus>;
  OpenShiftDrServiceAccountRecoveryPlanStatusInput: OpenShiftDrServiceAccountRecoveryPlanStatusInput;
  OpenShiftDrServiceAccountRecoveryTypeCodeEnum: OpenShiftDrServiceAccountRecoveryTypeCodeEnum;
  OpenShiftDrServiceFallbackPolicyEnum: OpenShiftDrServiceFallbackPolicyEnum;
  OpenShiftDrServiceRecoveryPlan: ResolverTypeWrapper<OpenShiftDrServiceRecoveryPlan>;
  OpenShiftDrServiceRecoveryPlanInput: OpenShiftDrServiceRecoveryPlanInput;
  OpenShiftDrServiceRecoveryPlanStateCodeEnum: OpenShiftDrServiceRecoveryPlanStateCodeEnum;
  OpenShiftDrServiceRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrServiceRecoveryPlanStatus>;
  OpenShiftDrServiceRecoveryPlanStatusInput: OpenShiftDrServiceRecoveryPlanStatusInput;
  OpenShiftDrServiceRecoveryTypeCodeEnum: OpenShiftDrServiceRecoveryTypeCodeEnum;
  OpenShiftDrVolumeRecoveryInfo: ResolverTypeWrapper<OpenShiftDrVolumeRecoveryInfo>;
  OpenShiftDrVolumeRecoveryInfoInput: OpenShiftDrVolumeRecoveryInfoInput;
  OpenShiftDrVolumeRecoveryPlan: ResolverTypeWrapper<OpenShiftDrVolumeRecoveryPlan>;
  OpenShiftDrVolumeRecoveryPlanInput: OpenShiftDrVolumeRecoveryPlanInput;
  OpenShiftDrVolumeRecoveryPlanStateCodeEnum: OpenShiftDrVolumeRecoveryPlanStateCodeEnum;
  OpenShiftDrVolumeRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrVolumeRecoveryPlanStatus>;
  OpenShiftDrVolumeRecoveryPlanStatusInput: OpenShiftDrVolumeRecoveryPlanStatusInput;
  OpenShiftDrVolumeSnapshotRecoveryInfo: ResolverTypeWrapper<OpenShiftDrVolumeSnapshotRecoveryInfo>;
  OpenShiftDrVolumeSnapshotRecoveryInfoInput: OpenShiftDrVolumeSnapshotRecoveryInfoInput;
  OpenShiftDrVolumeSnapshotRecoveryPlan: ResolverTypeWrapper<OpenShiftDrVolumeSnapshotRecoveryPlan>;
  OpenShiftDrVolumeSnapshotRecoveryPlanInput: OpenShiftDrVolumeSnapshotRecoveryPlanInput;
  OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum: OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum;
  OpenShiftDrVolumeSnapshotRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrVolumeSnapshotRecoveryPlanStatus>;
  OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput: OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput;
  OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum: OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum;
  OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum: OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum;
  OpenShiftDrWorkloadRecoveryInfo: ResolverTypeWrapper<OpenShiftDrWorkloadRecoveryInfo>;
  OpenShiftDrWorkloadRecoveryInfoInput: OpenShiftDrWorkloadRecoveryInfoInput;
  OpenShiftDrWorkloadRecoveryPlan: ResolverTypeWrapper<OpenShiftDrWorkloadRecoveryPlan>;
  OpenShiftDrWorkloadRecoveryPlanDnsConfig: ResolverTypeWrapper<OpenShiftDrWorkloadRecoveryPlanDnsConfig>;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigInput: OpenShiftDrWorkloadRecoveryPlanDnsConfigInput;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigOption: ResolverTypeWrapper<OpenShiftDrWorkloadRecoveryPlanDnsConfigOption>;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput: OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput;
  OpenShiftDrWorkloadRecoveryPlanInput: OpenShiftDrWorkloadRecoveryPlanInput;
  OpenShiftDrWorkloadRecoveryPlanStateCodeEnum: OpenShiftDrWorkloadRecoveryPlanStateCodeEnum;
  OpenShiftDrWorkloadRecoveryPlanStatus: ResolverTypeWrapper<OpenShiftDrWorkloadRecoveryPlanStatus>;
  OpenShiftDrWorkloadRecoveryPlanStatusInput: OpenShiftDrWorkloadRecoveryPlanStatusInput;
  OpenShiftDrWorkloadRecoveryResultCodeEnum: OpenShiftDrWorkloadRecoveryResultCodeEnum;
  OpenShiftDrWorkloadRecoveryStateCodeEnum: OpenShiftDrWorkloadRecoveryStateCodeEnum;
  OpenShiftDrWorkloadRecoveryStatus: ResolverTypeWrapper<OpenShiftDrWorkloadRecoveryStatus>;
  OpenShiftDrWorkloadRecoveryStatusInput: OpenShiftDrWorkloadRecoveryStatusInput;
  PauseRecoveryJobInput: PauseRecoveryJobInput;
  Query: ResolverTypeWrapper<{}>;
  ReplicatorImageReplicationStatus: ResolverTypeWrapper<ReplicatorImageReplicationStatus>;
  ReplicatorImageReplicationStatusInput: ReplicatorImageReplicationStatusInput;
  ReplicatorImageReplicationStatusStateCodeEnum: ReplicatorImageReplicationStatusStateCodeEnum;
  ReplicatorLastPrimarySnapshotStateCodeEnum: ReplicatorLastPrimarySnapshotStateCodeEnum;
  ReplicatorMirroringStatus: ResolverTypeWrapper<ReplicatorMirroringStatus>;
  ReplicatorMirroringStatusInput: ReplicatorMirroringStatusInput;
  ReplicatorMirroringStatusStateCodeEnum: ReplicatorMirroringStatusStateCodeEnum;
  ReplicatorPrimarySnapshot: ResolverTypeWrapper<ReplicatorPrimarySnapshot>;
  ReplicatorPrimarySnapshotInput: ReplicatorPrimarySnapshotInput;
  ReplicatorReplicationInfoStatus: ResolverTypeWrapper<ReplicatorReplicationInfoStatus>;
  ReplicatorReplicationInfoStatusInput: ReplicatorReplicationInfoStatusInput;
  ReplicatorReplicationInfoStatusStateCodeEnum: ReplicatorReplicationInfoStatusStateCodeEnum;
  ReplicatorSnapshotSchedule: ResolverTypeWrapper<ReplicatorSnapshotSchedule>;
  ReplicatorSnapshotScheduleInput: ReplicatorSnapshotScheduleInput;
  ReplicatorVolumeReplicationStatus: ResolverTypeWrapper<ReplicatorVolumeReplicationStatus>;
  ReplicatorVolumeReplicationStatusInput: ReplicatorVolumeReplicationStatusInput;
  ResumeRecoveryJobInput: ResumeRecoveryJobInput;
  RetryRecoveryJobInput: RetryRecoveryJobInput;
  RollbackMigrationRecoveryJobInput: RollbackMigrationRecoveryJobInput;
  RollbackSimulationRecoveryJobInput: RollbackSimulationRecoveryJobInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateRecoveryJobScheduleInput: UpdateRecoveryJobScheduleInput;
  UpdateRecoveryPlanInput: UpdateRecoveryPlanInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  CancelRecoveryJobInput: CancelRecoveryJobInput;
  CloudRole: CloudRole;
  CloudRoleInput: CloudRoleInput;
  CloudSchedule: CloudSchedule;
  CloudScheduleInput: CloudScheduleInput;
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
  ConfirmRecoveryJobInput: ConfirmRecoveryJobInput;
  CreateRecoveryJobScheduleInput: CreateRecoveryJobScheduleInput;
  CreateRecoveryPlanInput: CreateRecoveryPlanInput;
  DeleteRecoveryJobInput: DeleteRecoveryJobInput;
  DeleteRecoveryJobScheduleInput: DeleteRecoveryJobScheduleInput;
  DeleteRecoveryPlanInput: DeleteRecoveryPlanInput;
  DeleteRecoveryResultInput: DeleteRecoveryResultInput;
  ForcedConfirmRecoveryJobInput: ForcedConfirmRecoveryJobInput;
  IgnoreRollbackRecoveryJobInput: IgnoreRollbackRecoveryJobInput;
  JSONObject: Scalars['JSONObject']['output'];
  Mutation: {};
  OpenShiftCmCluster: OpenShiftCmCluster;
  OpenShiftCmClusterInput: OpenShiftCmClusterInput;
  OpenShiftCmClusterStatus: OpenShiftCmClusterStatus;
  OpenShiftCmClusterStatusInput: OpenShiftCmClusterStatusInput;
  OpenShiftCmClusterSyncStatus: OpenShiftCmClusterSyncStatus;
  OpenShiftCmClusterSyncStatusInput: OpenShiftCmClusterSyncStatusInput;
  OpenShiftCmFinalizer: OpenShiftCmFinalizer;
  OpenShiftCmFinalizerInput: OpenShiftCmFinalizerInput;
  OpenShiftCmMessage: OpenShiftCmMessage;
  OpenShiftCmMessageInput: OpenShiftCmMessageInput;
  OpenShiftCmNamespace: OpenShiftCmNamespace;
  OpenShiftCmNamespaceInput: OpenShiftCmNamespaceInput;
  OpenShiftCmPriorityClass: OpenShiftCmPriorityClass;
  OpenShiftCmPriorityClassInput: OpenShiftCmPriorityClassInput;
  OpenShiftCmRegistry: OpenShiftCmRegistry;
  OpenShiftCmRegistryInput: OpenShiftCmRegistryInput;
  OpenShiftCmResource: OpenShiftCmResource;
  OpenShiftCmResourceInput: OpenShiftCmResourceInput;
  OpenShiftCmRuntimeClass: OpenShiftCmRuntimeClass;
  OpenShiftCmRuntimeClassInput: OpenShiftCmRuntimeClassInput;
  OpenShiftCmScheduler: OpenShiftCmScheduler;
  OpenShiftCmSchedulerInput: OpenShiftCmSchedulerInput;
  OpenShiftCmService: OpenShiftCmService;
  OpenShiftCmServiceAccount: OpenShiftCmServiceAccount;
  OpenShiftCmServiceAccountInput: OpenShiftCmServiceAccountInput;
  OpenShiftCmServiceInput: OpenShiftCmServiceInput;
  OpenShiftCmStorageClass: OpenShiftCmStorageClass;
  OpenShiftCmStorageClassInput: OpenShiftCmStorageClassInput;
  OpenShiftCmVolume: OpenShiftCmVolume;
  OpenShiftCmVolumeInput: OpenShiftCmVolumeInput;
  OpenShiftCmVolumeSnapshot: OpenShiftCmVolumeSnapshot;
  OpenShiftCmVolumeSnapshotClass: OpenShiftCmVolumeSnapshotClass;
  OpenShiftCmVolumeSnapshotClassInput: OpenShiftCmVolumeSnapshotClassInput;
  OpenShiftCmVolumeSnapshotInput: OpenShiftCmVolumeSnapshotInput;
  OpenShiftCmWorkload: OpenShiftCmWorkload;
  OpenShiftCmWorkloadInput: OpenShiftCmWorkloadInput;
  OpenShiftCmWorkloadVolume: OpenShiftCmWorkloadVolume;
  OpenShiftCmWorkloadVolumeInput: OpenShiftCmWorkloadVolumeInput;
  OpenShiftDrFinalizerRecoveryPlan: OpenShiftDrFinalizerRecoveryPlan;
  OpenShiftDrFinalizerRecoveryPlanInput: OpenShiftDrFinalizerRecoveryPlanInput;
  OpenShiftDrFinalizerRecoveryPlanStatus: OpenShiftDrFinalizerRecoveryPlanStatus;
  OpenShiftDrFinalizerRecoveryPlanStatusInput: OpenShiftDrFinalizerRecoveryPlanStatusInput;
  OpenShiftDrImageRecoveryInfo: OpenShiftDrImageRecoveryInfo;
  OpenShiftDrImageRecoveryInfoInput: OpenShiftDrImageRecoveryInfoInput;
  OpenShiftDrNamespaceRecoveryPlan: OpenShiftDrNamespaceRecoveryPlan;
  OpenShiftDrNamespaceRecoveryPlanInput: OpenShiftDrNamespaceRecoveryPlanInput;
  OpenShiftDrNamespaceRecoveryPlanStatus: OpenShiftDrNamespaceRecoveryPlanStatus;
  OpenShiftDrNamespaceRecoveryPlanStatusInput: OpenShiftDrNamespaceRecoveryPlanStatusInput;
  OpenShiftDrPriorityClassRecoveryPlan: OpenShiftDrPriorityClassRecoveryPlan;
  OpenShiftDrPriorityClassRecoveryPlanInput: OpenShiftDrPriorityClassRecoveryPlanInput;
  OpenShiftDrPriorityClassRecoveryPlanStatus: OpenShiftDrPriorityClassRecoveryPlanStatus;
  OpenShiftDrPriorityClassRecoveryPlanStatusInput: OpenShiftDrPriorityClassRecoveryPlanStatusInput;
  OpenShiftDrReadinessGateConditionRecoveryPlan: OpenShiftDrReadinessGateConditionRecoveryPlan;
  OpenShiftDrReadinessGateConditionRecoveryPlanInput: OpenShiftDrReadinessGateConditionRecoveryPlanInput;
  OpenShiftDrReadinessGateConditionRecoveryPlanStatus: OpenShiftDrReadinessGateConditionRecoveryPlanStatus;
  OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput: OpenShiftDrReadinessGateConditionRecoveryPlanStatusInput;
  OpenShiftDrRecoveryInfo: OpenShiftDrRecoveryInfo;
  OpenShiftDrRecoveryInfoInput: OpenShiftDrRecoveryInfoInput;
  OpenShiftDrRecoveryInfoResponse: OpenShiftDrRecoveryInfoResponse;
  OpenShiftDrRecoveryInfoResponseInput: OpenShiftDrRecoveryInfoResponseInput;
  OpenShiftDrRecoveryJob: OpenShiftDrRecoveryJob;
  OpenShiftDrRecoveryJobInput: OpenShiftDrRecoveryJobInput;
  OpenShiftDrRecoveryJobResponse: OpenShiftDrRecoveryJobResponse;
  OpenShiftDrRecoveryJobResponseInput: OpenShiftDrRecoveryJobResponseInput;
  OpenShiftDrRecoveryJobRetryRequest: OpenShiftDrRecoveryJobRetryRequest;
  OpenShiftDrRecoveryJobRetryRequestInput: OpenShiftDrRecoveryJobRetryRequestInput;
  OpenShiftDrRecoveryJobSchedule: OpenShiftDrRecoveryJobSchedule;
  OpenShiftDrRecoveryJobScheduleInput: OpenShiftDrRecoveryJobScheduleInput;
  OpenShiftDrRecoveryJobScheduleRequest: OpenShiftDrRecoveryJobScheduleRequest;
  OpenShiftDrRecoveryJobScheduleRequestInput: OpenShiftDrRecoveryJobScheduleRequestInput;
  OpenShiftDrRecoveryJobScheduleResponse: OpenShiftDrRecoveryJobScheduleResponse;
  OpenShiftDrRecoveryJobScheduleResponseInput: OpenShiftDrRecoveryJobScheduleResponseInput;
  OpenShiftDrRecoveryJobScheduleStatus: OpenShiftDrRecoveryJobScheduleStatus;
  OpenShiftDrRecoveryJobScheduleStatusInput: OpenShiftDrRecoveryJobScheduleStatusInput;
  OpenShiftDrRecoveryJobScheduleStatusResponse: OpenShiftDrRecoveryJobScheduleStatusResponse;
  OpenShiftDrRecoveryJobScheduleStatusResponseInput: OpenShiftDrRecoveryJobScheduleStatusResponseInput;
  OpenShiftDrRecoveryJobSchedulesResponse: OpenShiftDrRecoveryJobSchedulesResponse;
  OpenShiftDrRecoveryJobSchedulesResponseInput: OpenShiftDrRecoveryJobSchedulesResponseInput;
  OpenShiftDrRecoveryJobSchedulesResponseObject: OpenShiftDrRecoveryJobSchedulesResponseObject;
  OpenShiftDrRecoveryJobSchedulesResponseObjectInput: OpenShiftDrRecoveryJobSchedulesResponseObjectInput;
  OpenShiftDrRecoveryJobStatus: OpenShiftDrRecoveryJobStatus;
  OpenShiftDrRecoveryJobStatusInput: OpenShiftDrRecoveryJobStatusInput;
  OpenShiftDrRecoveryJobStatusResponse: OpenShiftDrRecoveryJobStatusResponse;
  OpenShiftDrRecoveryJobStatusResponseInput: OpenShiftDrRecoveryJobStatusResponseInput;
  OpenShiftDrRecoveryJobTask: OpenShiftDrRecoveryJobTask;
  OpenShiftDrRecoveryJobTaskInput: OpenShiftDrRecoveryJobTaskInput;
  OpenShiftDrRecoveryJobTaskLogsResponse: OpenShiftDrRecoveryJobTaskLogsResponse;
  OpenShiftDrRecoveryJobTaskLogsResponseInput: OpenShiftDrRecoveryJobTaskLogsResponseInput;
  OpenShiftDrRecoveryJobTaskStatus: OpenShiftDrRecoveryJobTaskStatus;
  OpenShiftDrRecoveryJobTaskStatusInput: OpenShiftDrRecoveryJobTaskStatusInput;
  OpenShiftDrRecoveryJobTasksResponse: OpenShiftDrRecoveryJobTasksResponse;
  OpenShiftDrRecoveryJobTasksResponseInput: OpenShiftDrRecoveryJobTasksResponseInput;
  OpenShiftDrRecoveryJobsResponse: OpenShiftDrRecoveryJobsResponse;
  OpenShiftDrRecoveryJobsResponseInput: OpenShiftDrRecoveryJobsResponseInput;
  OpenShiftDrRecoveryJobsResponseQueue: OpenShiftDrRecoveryJobsResponseQueue;
  OpenShiftDrRecoveryJobsResponseQueueInput: OpenShiftDrRecoveryJobsResponseQueueInput;
  OpenShiftDrRecoveryPlan: OpenShiftDrRecoveryPlan;
  OpenShiftDrRecoveryPlanInput: OpenShiftDrRecoveryPlanInput;
  OpenShiftDrRecoveryPlanRequest: OpenShiftDrRecoveryPlanRequest;
  OpenShiftDrRecoveryPlanRequestInput: OpenShiftDrRecoveryPlanRequestInput;
  OpenShiftDrRecoveryPlanResponse: OpenShiftDrRecoveryPlanResponse;
  OpenShiftDrRecoveryPlanResponseInput: OpenShiftDrRecoveryPlanResponseInput;
  OpenShiftDrRecoveryPlanStatus: OpenShiftDrRecoveryPlanStatus;
  OpenShiftDrRecoveryPlanStatusInput: OpenShiftDrRecoveryPlanStatusInput;
  OpenShiftDrRecoveryPlanStatusResponse: OpenShiftDrRecoveryPlanStatusResponse;
  OpenShiftDrRecoveryPlanStatusResponseInput: OpenShiftDrRecoveryPlanStatusResponseInput;
  OpenShiftDrRecoveryPlanWarningStatusResponse: OpenShiftDrRecoveryPlanWarningStatusResponse;
  OpenShiftDrRecoveryPlanWarningStatusResponseInput: OpenShiftDrRecoveryPlanWarningStatusResponseInput;
  OpenShiftDrRecoveryPlansResponse: OpenShiftDrRecoveryPlansResponse;
  OpenShiftDrRecoveryPlansResponseInput: OpenShiftDrRecoveryPlansResponseInput;
  OpenShiftDrRecoveryResult: OpenShiftDrRecoveryResult;
  OpenShiftDrRecoveryResultInput: OpenShiftDrRecoveryResultInput;
  OpenShiftDrRecoveryResultResponse: OpenShiftDrRecoveryResultResponse;
  OpenShiftDrRecoveryResultResponseInput: OpenShiftDrRecoveryResultResponseInput;
  OpenShiftDrRecoveryResultsResponse: OpenShiftDrRecoveryResultsResponse;
  OpenShiftDrRecoveryResultsResponseInput: OpenShiftDrRecoveryResultsResponseInput;
  OpenShiftDrRegistryRecoveryPlan: OpenShiftDrRegistryRecoveryPlan;
  OpenShiftDrRegistryRecoveryPlanInput: OpenShiftDrRegistryRecoveryPlanInput;
  OpenShiftDrRegistryRecoveryPlanStatus: OpenShiftDrRegistryRecoveryPlanStatus;
  OpenShiftDrRegistryRecoveryPlanStatusInput: OpenShiftDrRegistryRecoveryPlanStatusInput;
  OpenShiftDrResourceRecoveryInfo: OpenShiftDrResourceRecoveryInfo;
  OpenShiftDrResourceRecoveryInfoInput: OpenShiftDrResourceRecoveryInfoInput;
  OpenShiftDrRuntimeClassRecoveryPlan: OpenShiftDrRuntimeClassRecoveryPlan;
  OpenShiftDrRuntimeClassRecoveryPlanInput: OpenShiftDrRuntimeClassRecoveryPlanInput;
  OpenShiftDrRuntimeClassRecoveryPlanStatus: OpenShiftDrRuntimeClassRecoveryPlanStatus;
  OpenShiftDrRuntimeClassRecoveryPlanStatusInput: OpenShiftDrRuntimeClassRecoveryPlanStatusInput;
  OpenShiftDrSchedulerRecoveryPlan: OpenShiftDrSchedulerRecoveryPlan;
  OpenShiftDrSchedulerRecoveryPlanInput: OpenShiftDrSchedulerRecoveryPlanInput;
  OpenShiftDrSchedulerRecoveryPlanStatus: OpenShiftDrSchedulerRecoveryPlanStatus;
  OpenShiftDrSchedulerRecoveryPlanStatusInput: OpenShiftDrSchedulerRecoveryPlanStatusInput;
  OpenShiftDrServiceAccountRecoveryPlan: OpenShiftDrServiceAccountRecoveryPlan;
  OpenShiftDrServiceAccountRecoveryPlanInput: OpenShiftDrServiceAccountRecoveryPlanInput;
  OpenShiftDrServiceAccountRecoveryPlanStatus: OpenShiftDrServiceAccountRecoveryPlanStatus;
  OpenShiftDrServiceAccountRecoveryPlanStatusInput: OpenShiftDrServiceAccountRecoveryPlanStatusInput;
  OpenShiftDrServiceRecoveryPlan: OpenShiftDrServiceRecoveryPlan;
  OpenShiftDrServiceRecoveryPlanInput: OpenShiftDrServiceRecoveryPlanInput;
  OpenShiftDrServiceRecoveryPlanStatus: OpenShiftDrServiceRecoveryPlanStatus;
  OpenShiftDrServiceRecoveryPlanStatusInput: OpenShiftDrServiceRecoveryPlanStatusInput;
  OpenShiftDrVolumeRecoveryInfo: OpenShiftDrVolumeRecoveryInfo;
  OpenShiftDrVolumeRecoveryInfoInput: OpenShiftDrVolumeRecoveryInfoInput;
  OpenShiftDrVolumeRecoveryPlan: OpenShiftDrVolumeRecoveryPlan;
  OpenShiftDrVolumeRecoveryPlanInput: OpenShiftDrVolumeRecoveryPlanInput;
  OpenShiftDrVolumeRecoveryPlanStatus: OpenShiftDrVolumeRecoveryPlanStatus;
  OpenShiftDrVolumeRecoveryPlanStatusInput: OpenShiftDrVolumeRecoveryPlanStatusInput;
  OpenShiftDrVolumeSnapshotRecoveryInfo: OpenShiftDrVolumeSnapshotRecoveryInfo;
  OpenShiftDrVolumeSnapshotRecoveryInfoInput: OpenShiftDrVolumeSnapshotRecoveryInfoInput;
  OpenShiftDrVolumeSnapshotRecoveryPlan: OpenShiftDrVolumeSnapshotRecoveryPlan;
  OpenShiftDrVolumeSnapshotRecoveryPlanInput: OpenShiftDrVolumeSnapshotRecoveryPlanInput;
  OpenShiftDrVolumeSnapshotRecoveryPlanStatus: OpenShiftDrVolumeSnapshotRecoveryPlanStatus;
  OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput: OpenShiftDrVolumeSnapshotRecoveryPlanStatusInput;
  OpenShiftDrWorkloadRecoveryInfo: OpenShiftDrWorkloadRecoveryInfo;
  OpenShiftDrWorkloadRecoveryInfoInput: OpenShiftDrWorkloadRecoveryInfoInput;
  OpenShiftDrWorkloadRecoveryPlan: OpenShiftDrWorkloadRecoveryPlan;
  OpenShiftDrWorkloadRecoveryPlanDnsConfig: OpenShiftDrWorkloadRecoveryPlanDnsConfig;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigInput: OpenShiftDrWorkloadRecoveryPlanDnsConfigInput;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigOption: OpenShiftDrWorkloadRecoveryPlanDnsConfigOption;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput: OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionInput;
  OpenShiftDrWorkloadRecoveryPlanInput: OpenShiftDrWorkloadRecoveryPlanInput;
  OpenShiftDrWorkloadRecoveryPlanStatus: OpenShiftDrWorkloadRecoveryPlanStatus;
  OpenShiftDrWorkloadRecoveryPlanStatusInput: OpenShiftDrWorkloadRecoveryPlanStatusInput;
  OpenShiftDrWorkloadRecoveryStatus: OpenShiftDrWorkloadRecoveryStatus;
  OpenShiftDrWorkloadRecoveryStatusInput: OpenShiftDrWorkloadRecoveryStatusInput;
  PauseRecoveryJobInput: PauseRecoveryJobInput;
  Query: {};
  ReplicatorImageReplicationStatus: ReplicatorImageReplicationStatus;
  ReplicatorImageReplicationStatusInput: ReplicatorImageReplicationStatusInput;
  ReplicatorMirroringStatus: ReplicatorMirroringStatus;
  ReplicatorMirroringStatusInput: ReplicatorMirroringStatusInput;
  ReplicatorPrimarySnapshot: ReplicatorPrimarySnapshot;
  ReplicatorPrimarySnapshotInput: ReplicatorPrimarySnapshotInput;
  ReplicatorReplicationInfoStatus: ReplicatorReplicationInfoStatus;
  ReplicatorReplicationInfoStatusInput: ReplicatorReplicationInfoStatusInput;
  ReplicatorSnapshotSchedule: ReplicatorSnapshotSchedule;
  ReplicatorSnapshotScheduleInput: ReplicatorSnapshotScheduleInput;
  ReplicatorVolumeReplicationStatus: ReplicatorVolumeReplicationStatus;
  ReplicatorVolumeReplicationStatusInput: ReplicatorVolumeReplicationStatusInput;
  ResumeRecoveryJobInput: ResumeRecoveryJobInput;
  RetryRecoveryJobInput: RetryRecoveryJobInput;
  RollbackMigrationRecoveryJobInput: RollbackMigrationRecoveryJobInput;
  RollbackSimulationRecoveryJobInput: RollbackSimulationRecoveryJobInput;
  String: Scalars['String']['output'];
  UpdateRecoveryJobScheduleInput: UpdateRecoveryJobScheduleInput;
  UpdateRecoveryPlanInput: UpdateRecoveryPlanInput;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CloudDayOfMonthEnumResolvers = { EIGHT: '8', EIGHTEEN: '18', ELEVEN: '11', FIFTEEN: '15', FIVE: '5', FOUR: '4', FOURTEEN: '14', LAST_DAY: 'L', NINE: '9', NINETEEN: '19', ONE: '1', SEVEN: '7', SEVENTEEN: '17', SIX: '6', SIXTEEN: '16', TEN: '10', THIRTEEN: '13', THIRTY: '30', THIRTY_ONE: '31', THREE: '3', TWELVE: '12', TWENTY: '20', TWENTY_EIGHT: '28', TWENTY_FIVE: '25', TWENTY_FOUR: '24', TWENTY_NINE: '29', TWENTY_ONE: '21', TWENTY_SEVEN: '27', TWENTY_SIX: '26', TWENTY_THREE: '23', TWENTY_TWO: '22', TWO: '2' };

export type CloudIntervalHourEnumResolvers = { FOUR: '4', ONE: '1', SIX: '6', THREE: '3', TWELVE: '12', TWO: '2' };

export type CloudIntervalMinuteEnumResolvers = { FIFTEEN: '15', FIVE: '5', FOUR: '4', ONE: '1', SIX: '6', TEN: '10', THIRTY: '30', THREE: '3', TWELVE: '12', TWENTY: '20', TWO: '2' };

export type CloudIntervalMonthEnumResolvers = { FOUR: '4', ONE: '1', SIX: '6', THREE: '3', TWELVE: '12', TWO: '2' };

export type CloudLanguageSetEnumResolvers = { ENG: 'eng', KOR: 'kor' };

export type CloudRoleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudRole'] = ResolversParentTypes['CloudRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CloudRoleEnum']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudRoleEnumResolvers = { ADMIN: 'admin', MANAGER: 'manager', OPERATOR: 'operator', USER: 'user' };

export type CloudScheduleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudSchedule'] = ResolversParentTypes['CloudSchedule']> = ResolversObject<{
  activation_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  day_of_month?: Resolver<Maybe<ResolversTypes['CloudDayOfMonthEnum']>, ParentType, ContextType>;
  day_of_week?: Resolver<Maybe<ResolversTypes['CloudWeekEnum']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  interval_day?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  interval_hour?: Resolver<Maybe<ResolversTypes['CloudIntervalHourEnum']>, ParentType, ContextType>;
  interval_minute?: Resolver<Maybe<ResolversTypes['CloudIntervalMinuteEnum']>, ParentType, ContextType>;
  interval_month?: Resolver<Maybe<ResolversTypes['CloudIntervalMonthEnum']>, ParentType, ContextType>;
  interval_week?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CloudScheduleTypeEnum']>, ParentType, ContextType>;
  week_of_month?: Resolver<Maybe<ResolversTypes['CloudWeekOfMonthEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudScheduleTypeEnumResolvers = { SCHEDULE_TYPE_DAILY: 'schedule.type.daily', SCHEDULE_TYPE_DAY_OF_MONTHLY: 'schedule.type.day-of-monthly', SCHEDULE_TYPE_HOURLY: 'schedule.type.hourly', SCHEDULE_TYPE_MINUTELY: 'schedule.type.minutely', SCHEDULE_TYPE_MONTHLY: 'schedule.type.monthly', SCHEDULE_TYPE_SPECIFIED: 'schedule.type.specified', SCHEDULE_TYPE_WEEKLY: 'schedule.type.weekly', SCHEDULE_TYPE_WEEK_OF_MONTHLY: 'schedule.type.week-of-monthly', SCHEDULE_TYPE_YEARLY: 'schedule.type.yearly' };

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

export type CloudWeekEnumResolvers = { FRI: 'fri', MON: 'mon', SAT: 'sat', SUN: 'sun', THU: 'thu', TUE: 'tue', WED: 'wed' };

export type CloudWeekOfMonthEnumResolvers = { FIVE: '#5', FOUR: '#4', LAST_WEEK: 'L', ONE: '#1', THREE: '#3', TWO: '#2' };

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CancelRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationCancelRecoveryJobArgs>>;
  ConfirmRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationConfirmRecoveryJobArgs>>;
  CreateRecoveryJobSchedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleResponse']>, ParentType, ContextType, Partial<MutationCreateRecoveryJobScheduleArgs>>;
  CreateRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanResponse']>, ParentType, ContextType, Partial<MutationCreateRecoveryPlanArgs>>;
  DeleteRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteRecoveryJobArgs>>;
  DeleteRecoveryJobSchedule?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteRecoveryJobScheduleArgs>>;
  DeleteRecoveryPlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteRecoveryPlanArgs>>;
  DeleteRecoveryResult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteRecoveryResultArgs>>;
  ForcedConfirmRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationForcedConfirmRecoveryJobArgs>>;
  IgnoreRollbackRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationIgnoreRollbackRecoveryJobArgs>>;
  PauseRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationPauseRecoveryJobArgs>>;
  ResumeRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationResumeRecoveryJobArgs>>;
  RetryRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationRetryRecoveryJobArgs>>;
  RollbackMigrationRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationRollbackMigrationRecoveryJobArgs>>;
  RollbackSimulationRecoveryJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationRollbackSimulationRecoveryJobArgs>>;
  UpdateRecoveryJobSchedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleResponse']>, ParentType, ContextType, Partial<MutationUpdateRecoveryJobScheduleArgs>>;
  UpdateRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanResponse']>, ParentType, ContextType, Partial<MutationUpdateRecoveryPlanArgs>>;
}>;

export type OpenShiftCmClusterResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmCluster'] = ResolversParentTypes['OpenShiftCmCluster']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterStatus']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterSyncStatus']>, ParentType, ContextType>;
  synchronized_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterTypeCodeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterResourceServiceTypeEnumResolvers = { CLUSTERIP: 'ClusterIP', EXTERNALNAME: 'ExternalName', LOADBALANCER: 'LoadBalancer', NODEPORT: 'NodePort' };

export type OpenShiftCmClusterResourceVolumeTypeEnumResolvers = { AWS_ELASTIC_BLOCK_STORE: 'awsElasticBlockStore', AZURE_DISK: 'azureDisk', AZURE_FILE: 'azureFile', CEPHFS: 'cephfs', CINDER: 'cinder', CONFIG_MAP: 'configMap', CSI: 'csi', EMPTY_DIR: 'emptyDir', EPHEMERAL: 'ephemeral', FC: 'fc', FLEX_VOLUME: 'flexVolume', FLOCKER: 'flocker', GCE_PERSISTENT_DISK: 'gcePersistentDisk', GIT_REPO: 'gitRepo', GLUSTERFS: 'glusterfs', HOST_PATH: 'hostPath', ISCSI: 'iscsi', NFS: 'nfs', PERSISTENT_VOLUME_CLAIM: 'persistentVolumeClaim', PHOTON_PERSISTENT_DISK: 'photonPersistentDisk', PORTWORX_VOLUME: 'portworxVolume', QUOBYTE: 'quobyte', RBD: 'rbd', SCALE_I_O: 'scaleIO', STORAGEOS: 'storageos', VSPHERE_VOLUME: 'vsphereVolume' };

export type OpenShiftCmClusterStateCodeEnumResolvers = { CLUSTER_STATE_ACTIVE: 'cluster.state.active', CLUSTER_STATE_INACTIVE: 'cluster.state.inactive', CLUSTER_STATE_UNKNOWN: 'cluster.state.unknown' };

export type OpenShiftCmClusterStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterStatus'] = ResolversParentTypes['OpenShiftCmClusterStatus']> = ResolversObject<{
  reason?: Resolver<Maybe<ResolversTypes['OpenShiftCmMessage']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterSyncStateCodeEnumResolvers = { CLUSTER_SYNC_STATE_SYNCHRONIZED: 'cluster.sync.state.synchronized', CLUSTER_SYNC_STATE_SYNCHRONIZE_FAILED: 'cluster.sync.state.synchronize-failed', CLUSTER_SYNC_STATE_SYNCHRONIZING: 'cluster.sync.state.synchronizing', CLUSTER_SYNC_STATE_UNKNOWN: 'cluster.sync.state.unknown' };

export type OpenShiftCmClusterSyncStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterSyncStatus'] = ResolversParentTypes['OpenShiftCmClusterSyncStatus']> = ResolversObject<{
  reason?: Resolver<Maybe<ResolversTypes['OpenShiftCmMessage']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterSyncStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterTypeCodeEnumResolvers = { CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes', CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift' };

export type OpenShiftCmFinalizerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmFinalizer'] = ResolversParentTypes['OpenShiftCmFinalizer']> = ResolversObject<{
  controller_workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmMessageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmMessage'] = ResolversParentTypes['OpenShiftCmMessage']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNamespaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNamespace'] = ResolversParentTypes['OpenShiftCmNamespace']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmPriorityClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmPriorityClass'] = ResolversParentTypes['OpenShiftCmPriorityClass']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRegistryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRegistry'] = ResolversParentTypes['OpenShiftCmRegistry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  image_pull_secret_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  is_private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_required_push_credential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  push_credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmResourceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmResource'] = ResolversParentTypes['OpenShiftCmResource']> = ResolversObject<{
  dependency_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  dependent_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manifest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRuntimeClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRuntimeClass'] = ResolversParentTypes['OpenShiftCmRuntimeClass']> = ResolversObject<{
  handler?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmSchedulerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmScheduler'] = ResolversParentTypes['OpenShiftCmScheduler']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmServiceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmService'] = ResolversParentTypes['OpenShiftCmService']> = ResolversObject<{
  cluster_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_source_ranges?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterResourceServiceTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmServiceAccountResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmServiceAccount'] = ResolversParentTypes['OpenShiftCmServiceAccount']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStorageClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStorageClass'] = ResolversParentTypes['OpenShiftCmStorageClass']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provisioner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolume'] = ResolversParentTypes['OpenShiftCmVolume']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterResourceVolumeTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshot'] = ResolversParentTypes['OpenShiftCmVolumeSnapshot']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  volume_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshotClass'] = ResolversParentTypes['OpenShiftCmVolumeSnapshotClass']> = ResolversObject<{
  driver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkload'] = ResolversParentTypes['OpenShiftCmWorkload']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkloadVolume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkloadVolume'] = ResolversParentTypes['OpenShiftCmWorkloadVolume']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrFinalizerFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.ignore-warning', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.using-default' };

export type OpenShiftDrFinalizerRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrFinalizerRecoveryPlan'] = ResolversParentTypes['OpenShiftDrFinalizerRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrFinalizerFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_finalizer?: Resolver<Maybe<ResolversTypes['OpenShiftCmFinalizer']>, ParentType, ContextType>;
  recovery_cluster_finalizer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrFinalizerRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrFinalizerRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NOT_FOUND_FINALIZER: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.not-found-finalizer', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NOT_SET_FINALIZER: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.not-set-finalizer' };

export type OpenShiftDrFinalizerRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrFinalizerRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrFinalizerRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrFinalizerRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrFinalizerRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.no-action', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.unused', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.update' };

export type OpenShiftDrImageRecoveryInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrImageRecoveryInfo'] = ResolversParentTypes['OpenShiftDrImageRecoveryInfo']> = ResolversObject<{
  image_pull_secret_manifests?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  image_push_credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_registry_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrNamespaceRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrNamespaceRecoveryPlan'] = ResolversParentTypes['OpenShiftDrNamespaceRecoveryPlan']> = ResolversObject<{
  protection_cluster_namespace?: Resolver<Maybe<ResolversTypes['OpenShiftCmNamespace']>, ParentType, ContextType>;
  recovery_cluster_namespace_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrNamespaceRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_DUPLICATED_NAME: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.duplicated-name', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_INVALID_NAME: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.invalid-name', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_NOT_SET_NAME: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.not-set-name' };

export type OpenShiftDrNamespaceRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrNamespaceRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrNamespaceRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrNamespaceRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrPriorityClassFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.ignore-warning', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.using-default' };

export type OpenShiftDrPriorityClassRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrPriorityClassRecoveryPlan'] = ResolversParentTypes['OpenShiftDrPriorityClassRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrPriorityClassFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_priority_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmPriorityClass']>, ParentType, ContextType>;
  recovery_cluster_priority_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmPriorityClass']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrPriorityClassRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrPriorityClassRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NOT_FOUND_PRIORITY_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.not-found-priority-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NOT_SET_PRIORITY_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.not-set-priority-class' };

export type OpenShiftDrPriorityClassRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrPriorityClassRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrPriorityClassRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrPriorityClassRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.mapping', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.mirror', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.unused' };

export type OpenShiftDrReadinessGateConditionFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.ignore-warning', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.using-default' };

export type OpenShiftDrReadinessGateConditionRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrReadinessGateConditionRecoveryPlan'] = ResolversParentTypes['OpenShiftDrReadinessGateConditionRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrReadinessGateConditionFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_readiness_gate_condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_readiness_gate_condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_STATE_NOT_SET_CONDITION: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.state.not-set-condition' };

export type OpenShiftDrReadinessGateConditionRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrReadinessGateConditionRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrReadinessGateConditionRecoveryPlanStatus']> = ResolversObject<{
  readiness_gate_condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.no-action', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.unused', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.update' };

export type OpenShiftDrRecoveryClusterStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_INACTIVE: 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.inactive', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_NOT_FOUND: 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.not-found' };

export type OpenShiftDrRecoveryInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryInfo'] = ResolversParentTypes['OpenShiftDrRecoveryInfo']> = ResolversObject<{
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrImageRecoveryInfo']>>>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrResourceRecoveryInfo']>>>, ParentType, ContextType>;
  volume_snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrVolumeSnapshotRecoveryInfo']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrVolumeRecoveryInfo']>>>, ParentType, ContextType>;
  workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryInfoResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryInfoResponse'] = ResolversParentTypes['OpenShiftDrRecoveryInfoResponse']> = ResolversObject<{
  recovery_info?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJob'] = ResolversParentTypes['OpenShiftDrRecoveryJob']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  recovery_job_schedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobSchedule']>, ParentType, ContextType>;
  recovery_plan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlan']>, ParentType, ContextType>;
  recovery_point_backup_result?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  recovery_point_snapshot?: Resolver<Maybe<ResolversTypes['ReplicatorPrimarySnapshot']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobResponse']> = ResolversObject<{
  recovery_job?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJob']>, ParentType, ContextType>;
  recovery_job_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobResultCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_CANCELED: 'cdm-disaster-recovery-openshift.recovery-job.result.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_FAILED: 'cdm-disaster-recovery-openshift.recovery-job.result.failed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_SUCCEED: 'cdm-disaster-recovery-openshift.recovery-job.result.succeed' };

export type OpenShiftDrRecoveryJobRetryRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobRetryRequest'] = ResolversParentTypes['OpenShiftDrRecoveryJobRetryRequest']> = ResolversObject<{
  workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobScheduleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobSchedule'] = ResolversParentTypes['OpenShiftDrRecoveryJobSchedule']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  recovery_plan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlan']>, ParentType, ContextType>;
  recovery_point_backup_result?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  recovery_point_snapshot?: Resolver<Maybe<ResolversTypes['ReplicatorPrimarySnapshot']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['CloudSchedule']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobScheduleRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobScheduleRequest'] = ResolversParentTypes['OpenShiftDrRecoveryJobScheduleRequest']> = ResolversObject<{
  recovery_job_schedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobSchedule']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobScheduleResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobScheduleResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobScheduleResponse']> = ResolversObject<{
  recovery_job_schedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobSchedule']>, ParentType, ContextType>;
  recovery_job_schedule_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobScheduleStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_FAILED: 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.failed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_PREPARING: 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.preparing' };

export type OpenShiftDrRecoveryJobScheduleStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobScheduleStatus'] = ResolversParentTypes['OpenShiftDrRecoveryJobScheduleStatus']> = ResolversObject<{
  failed_reason_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failed_reason_contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  next_runtime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobScheduleStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobScheduleStatusResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobScheduleStatusResponse']> = ResolversObject<{
  recovery_job_schedule_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobSchedulesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobSchedulesResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobSchedulesResponse']> = ResolversObject<{
  recovery_job_schedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRecoveryJobSchedulesResponseObject']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobSchedulesResponseObjectResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobSchedulesResponseObject'] = ResolversParentTypes['OpenShiftDrRecoveryJobSchedulesResponseObject']> = ResolversObject<{
  recovery_job_schedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobSchedule']>, ParentType, ContextType>;
  recovery_job_schedule_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CANCELED: 'cdm.disaster-recovery-openshift.recovery-job.state.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CANCELING: 'cdm.disaster-recovery-openshift.recovery-job.state.canceling', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_COMPLETED: 'cdm.disaster-recovery-openshift.recovery-job.state.completed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CONFIRMED: 'cdm.disaster-recovery-openshift.recovery-job.state.confirmed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CONFIRMING: 'cdm.disaster-recovery-openshift.recovery-job.state.confirming', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_FORCE_CONFIRMED: 'cdm.disaster-recovery-openshift.recovery-job.state.force-confirmed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PAUSED: 'cdm.disaster-recovery-openshift.recovery-job.state.paused', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PAUSING: 'cdm.disaster-recovery-openshift.recovery-job.state.pausing', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PENDING: 'cdm.disaster-recovery-openshift.recovery-job.state.pending', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLBACK_IGNORED: 'cdm.disaster-recovery-openshift.recovery-job.state.rollback-ignored', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLED_BACK: 'cdm.disaster-recovery-openshift.recovery-job.state.rolled-back', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLING_BACK: 'cdm.disaster-recovery-openshift.recovery-job.state.rolling-back', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_RUNNING: 'cdm.disaster-recovery-openshift.recovery-job.state.running' };

export type OpenShiftDrRecoveryJobStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobStatus'] = ResolversParentTypes['OpenShiftDrRecoveryJobStatus']> = ResolversObject<{
  result_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobResultCodeEnum']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobStatusResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobStatusResponse']> = ResolversObject<{
  recovery_job_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobStatus']>, ParentType, ContextType>;
  recovery_job_task_status?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTaskStatus']>>>, ParentType, ContextType>;
  workload_recovery_status?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobTaskResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobTask'] = ResolversParentTypes['OpenShiftDrRecoveryJobTask']> = ResolversObject<{
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  dependents?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTaskTypeCodeEnum']>, ParentType, ContextType>;
  volume_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  volume_snapshot_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobTaskFailedReasonCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_FAILED_DEPENDENCY_TASK_FAILED: 'cdm-disaster-recovery-openshift.recovery-job-task.failed.dependency_task_failed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_FAILED_UNEXPECTED_ERROR: 'cdm-disaster-recovery-openshift.recovery-job-task.failed.unexpected_error' };

export type OpenShiftDrRecoveryJobTaskLogsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobTaskLogsResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobTaskLogsResponse']> = ResolversObject<{
  logs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobTaskResultCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_CANCELED: 'cdm-disaster-recovery-openshift.recovery-job-task.result.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_FAILED: 'cdm-disaster-recovery-openshift.recovery-job-task.result.failed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_SUCCEED: 'cdm-disaster-recovery-openshift.recovery-job-task.result.succeed' };

export type OpenShiftDrRecoveryJobTaskStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_CANCELED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_COMPLETED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.completed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_CONFIRMED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.confirmed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_PAUSED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.paused', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_PENDING: 'cdm.disaster-recovery-openshift.recovery-job-task.state.pending', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLBACK_FAILED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rollback-failed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLBACK_IGNORED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rollback-ignored', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLED_BACK: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rolled-back', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLING_BACK: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rolling-back', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_RUNNING: 'cdm.disaster-recovery-openshift.recovery-job-task.state.running' };

export type OpenShiftDrRecoveryJobTaskStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobTaskStatus'] = ResolversParentTypes['OpenShiftDrRecoveryJobTaskStatus']> = ResolversObject<{
  failed_reason_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum']>, ParentType, ContextType>;
  failed_reason_contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTaskResultCodeEnum']>, ParentType, ContextType>;
  retry_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTaskStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobTaskTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_RESOURCE: 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-resource', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_VOLUME: 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-volume', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_VOLUME_SNAPSHOT: 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-volume-snapshot', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_PUSH_IMAGE: 'cdm.disaster-recovery-openshift.recovery-job-task.type.push-image' };

export type OpenShiftDrRecoveryJobTasksResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobTasksResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobTasksResponse']> = ResolversObject<{
  recovery_job_tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTask']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobsResponse'] = ResolversParentTypes['OpenShiftDrRecoveryJobsResponse']> = ResolversObject<{
  queue?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRecoveryJobsResponseQueue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryJobsResponseQueueResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryJobsResponseQueue'] = ResolversParentTypes['OpenShiftDrRecoveryJobsResponseQueue']> = ResolversObject<{
  recovery_job?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJob']>, ParentType, ContextType>;
  recovery_job_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobStatus']>, ParentType, ContextType>;
  seq?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlan'] = ResolversParentTypes['OpenShiftDrRecoveryPlan']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanDirectionCodeEnum']>, ParentType, ContextType>;
  finalizer_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrFinalizerRecoveryPlan']>>>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrNamespaceRecoveryPlan']>>>, ParentType, ContextType>;
  priority_class_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrPriorityClassRecoveryPlan']>>>, ParentType, ContextType>;
  readiness_gate_condition_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrReadinessGateConditionRecoveryPlan']>>>, ParentType, ContextType>;
  recovery_cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  recovery_from_backup_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  registry_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRegistryRecoveryPlan']>>>, ParentType, ContextType>;
  replication_info_resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtime_class_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRuntimeClassRecoveryPlan']>>>, ParentType, ContextType>;
  scheduler_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrSchedulerRecoveryPlan']>>>, ParentType, ContextType>;
  service_account_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrServiceAccountRecoveryPlan']>>>, ParentType, ContextType>;
  service_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrServiceRecoveryPlan']>>>, ParentType, ContextType>;
  snapshot_schedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplicatorSnapshotSchedule']>>>, ParentType, ContextType>;
  volume_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrVolumeRecoveryPlan']>>>, ParentType, ContextType>;
  volume_snapshot_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrVolumeSnapshotRecoveryPlan']>>>, ParentType, ContextType>;
  workload_recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryPlan']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlanDirectionCodeEnumResolvers = { CDM_DR_OPENSHIFT_RECOVERY_PLAN_DIRECTION_FAILBACK: 'cdm.dr-openshift.recovery-plan.direction.failback', CDM_DR_OPENSHIFT_RECOVERY_PLAN_DIRECTION_FAILOVER: 'cdm.dr-openshift.recovery-plan.direction.failover' };

export type OpenShiftDrRecoveryPlanRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlanRequest'] = ResolversParentTypes['OpenShiftDrRecoveryPlanRequest']> = ResolversObject<{
  force?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_plan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlanResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlanResponse'] = ResolversParentTypes['OpenShiftDrRecoveryPlanResponse']> = ResolversObject<{
  recovery_plan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_PREPARING: 'cdm.disaster-recovery-openshift.recovery-plan.state.preparing', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.state.warning' };

export type OpenShiftDrRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrRecoveryPlanStatus']> = ResolversObject<{
  finalizer_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrFinalizerRecoveryPlanStatus']>>>, ParentType, ContextType>;
  namespace_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrNamespaceRecoveryPlanStatus']>>>, ParentType, ContextType>;
  priority_class_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrPriorityClassRecoveryPlanStatus']>>>, ParentType, ContextType>;
  readiness_gate_condition_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrReadinessGateConditionRecoveryPlanStatus']>>>, ParentType, ContextType>;
  recovery_cluster_state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryClusterStateCodeEnum']>, ParentType, ContextType>;
  registry_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRegistryRecoveryPlanStatus']>>>, ParentType, ContextType>;
  runtime_class_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRuntimeClassRecoveryPlanStatus']>>>, ParentType, ContextType>;
  scheduler_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrSchedulerRecoveryPlanStatus']>>>, ParentType, ContextType>;
  service_account_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrServiceAccountRecoveryPlanStatus']>>>, ParentType, ContextType>;
  service_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrServiceRecoveryPlanStatus']>>>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  volume_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrVolumeRecoveryPlanStatus']>>>, ParentType, ContextType>;
  volume_snapshot_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrVolumeSnapshotRecoveryPlanStatus']>>>, ParentType, ContextType>;
  warning_reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  workload_recovery_plan_statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryPlanStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlanStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlanStatusResponse'] = ResolversParentTypes['OpenShiftDrRecoveryPlanStatusResponse']> = ResolversObject<{
  recovery_plan_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanStatus']>, ParentType, ContextType>;
  replication_info_status?: Resolver<Maybe<ResolversTypes['ReplicatorReplicationInfoStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlanWarningStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlanWarningStatusResponse'] = ResolversParentTypes['OpenShiftDrRecoveryPlanWarningStatusResponse']> = ResolversObject<{
  recovery_plan_status?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPlansResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryPlansResponse'] = ResolversParentTypes['OpenShiftDrRecoveryPlansResponse']> = ResolversObject<{
  recovery_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRecoveryPlan']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryPointTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_LATEST: 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.latest', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT: 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.latest_snapshot', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_SNAPSHOT: 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.snapshot' };

export type OpenShiftDrRecoveryResultResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryResult'] = ResolversParentTypes['OpenShiftDrRecoveryResult']> = ResolversObject<{
  approver?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  elapsed_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  protection_cluster_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_from_backup_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_plan_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryResultCodeEnum']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryResultCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_CANCELED: 'cdm.disaster-recovery-openshift.recovery-result.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_FAILED: 'cdm.disaster-recovery-openshift.recovery-result.failed', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_SUCCESS: 'cdm.disaster-recovery-openshift.recovery-result.success' };

export type OpenShiftDrRecoveryResultResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryResultResponse'] = ResolversParentTypes['OpenShiftDrRecoveryResultResponse']> = ResolversObject<{
  recovery_result?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryResultsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRecoveryResultsResponse'] = ResolversParentTypes['OpenShiftDrRecoveryResultsResponse']> = ResolversObject<{
  recovery_results?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrRecoveryResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_TYPE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-job.recovery-type.recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_TYPE_TEST: 'cdm.disaster-recovery-openshift.recovery-job.recovery-type.test' };

export type OpenShiftDrRegistryFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.ignore-warning', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.using-default' };

export type OpenShiftDrRegistryRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRegistryRecoveryPlan'] = ResolversParentTypes['OpenShiftDrRegistryRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrRegistryFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_registry?: Resolver<Maybe<ResolversTypes['OpenShiftCmRegistry']>, ParentType, ContextType>;
  recovery_cluster_registry?: Resolver<Maybe<ResolversTypes['OpenShiftCmRegistry']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRegistryRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRegistryRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_FOUND_REGISTRY: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-found-registry', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_SET_REGISTRY: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-set-registry', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_SET_REGISTRY_PUSH_CREDENTIAL: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-set-registry-push-credential' };

export type OpenShiftDrRegistryRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRegistryRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrRegistryRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRegistryRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRegistryRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR_IMAGE: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.recovery-type.mirror-image', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR_SECRET: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.recovery-type.mirror-secret' };

export type OpenShiftDrResourceRecoveryInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrResourceRecoveryInfo'] = ResolversParentTypes['OpenShiftDrResourceRecoveryInfo']> = ResolversObject<{
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  dependents?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  protection_cluster_resource?: Resolver<Maybe<ResolversTypes['OpenShiftCmResource']>, ParentType, ContextType>;
  recovery_cluster_resource?: Resolver<Maybe<ResolversTypes['OpenShiftCmResource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRuntimeClassFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.ignore-warning', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.using-default' };

export type OpenShiftDrRuntimeClassRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRuntimeClassRecoveryPlan'] = ResolversParentTypes['OpenShiftDrRuntimeClassRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrRuntimeClassFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_runtime_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmRuntimeClass']>, ParentType, ContextType>;
  recovery_cluster_runtime_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmRuntimeClass']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRuntimeClassRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NOT_FOUND_RUNTIME_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.not-found-runtime-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NOT_SET_RUNTIME_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.not-set-runtime-class' };

export type OpenShiftDrRuntimeClassRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrRuntimeClassRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrRuntimeClassRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrRuntimeClassRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.recovery-type.mapping', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.recovery-type.unused' };

export type OpenShiftDrSchedulerFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.ignore-warning', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.using-default' };

export type OpenShiftDrSchedulerRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrSchedulerRecoveryPlan'] = ResolversParentTypes['OpenShiftDrSchedulerRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrSchedulerFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_scheduler?: Resolver<Maybe<ResolversTypes['OpenShiftCmScheduler']>, ParentType, ContextType>;
  recovery_cluster_scheduler?: Resolver<Maybe<ResolversTypes['OpenShiftCmScheduler']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrSchedulerRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrSchedulerRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NOT_FOUND_SCHEDULER: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.not-found-scheduler', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NOT_SET_SCHEDULER: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.not-set-scheduler' };

export type OpenShiftDrSchedulerRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrSchedulerRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrSchedulerRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrSchedulerRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrSchedulerRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.recovery-type.mapping', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.recovery-type.unused' };

export type OpenShiftDrServiceAccountFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.fallback_policy.ignore-warning' };

export type OpenShiftDrServiceAccountRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrServiceAccountRecoveryPlan'] = ResolversParentTypes['OpenShiftDrServiceAccountRecoveryPlan']> = ResolversObject<{
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrServiceAccountFallbackPolicyEnum']>, ParentType, ContextType>;
  protection_cluster_service_account?: Resolver<Maybe<ResolversTypes['OpenShiftCmServiceAccount']>, ParentType, ContextType>;
  recovery_cluster_service_account?: Resolver<Maybe<ResolversTypes['OpenShiftCmServiceAccount']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrServiceAccountRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrServiceAccountRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.state.normal' };

export type OpenShiftDrServiceAccountRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrServiceAccountRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrServiceAccountRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrServiceAccountRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.recovery-type.unused' };

export type OpenShiftDrServiceFallbackPolicyEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.fallback_policy.ignore-recovery', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.fallback_policy.ignore-warning' };

export type OpenShiftDrServiceRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrServiceRecoveryPlan'] = ResolversParentTypes['OpenShiftDrServiceRecoveryPlan']> = ResolversObject<{
  cluster_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fallback_policy?: Resolver<Maybe<ResolversTypes['OpenShiftDrServiceFallbackPolicyEnum']>, ParentType, ContextType>;
  load_balancer_class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_source_ranges?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  protection_cluster_service?: Resolver<Maybe<ResolversTypes['OpenShiftCmService']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrServiceRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrServiceRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.state.normal' };

export type OpenShiftDrServiceRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrServiceRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrServiceRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrServiceRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrServiceRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.recovery-type.no-action', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.recovery-type.update' };

export type OpenShiftDrVolumeRecoveryInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrVolumeRecoveryInfo'] = ResolversParentTypes['OpenShiftDrVolumeRecoveryInfo']> = ResolversObject<{
  protection_cluster_volume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolume']>, ParentType, ContextType>;
  recovery_cluster_storage_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmStorageClass']>, ParentType, ContextType>;
  recovery_cluster_volume_snapshot_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrVolumeRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrVolumeRecoveryPlan'] = ResolversParentTypes['OpenShiftDrVolumeRecoveryPlan']> = ResolversObject<{
  protection_cluster_volume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolume']>, ParentType, ContextType>;
  recovery_cluster_storage_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmStorageClass']>, ParentType, ContextType>;
  recovery_cluster_volume_snapshot_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrVolumeRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_FOUND_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-found-snapshot-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_FOUND_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-found-storage-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_SET_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-set-snapshot-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_SET_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-set-storage-class' };

export type OpenShiftDrVolumeRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrVolumeRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrVolumeRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrVolumeRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrVolumeSnapshotRecoveryInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrVolumeSnapshotRecoveryInfo'] = ResolversParentTypes['OpenShiftDrVolumeSnapshotRecoveryInfo']> = ResolversObject<{
  protection_cluster_volume_snapshot?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>, ParentType, ContextType>;
  recovery_cluster_storage_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmStorageClass']>, ParentType, ContextType>;
  recovery_cluster_volume_snapshot_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrVolumeSnapshotRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrVolumeSnapshotRecoveryPlan'] = ResolversParentTypes['OpenShiftDrVolumeSnapshotRecoveryPlan']> = ResolversObject<{
  protection_cluster_volume_snapshot?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>, ParentType, ContextType>;
  recovery_cluster_storage_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmStorageClass']>, ParentType, ContextType>;
  recovery_cluster_volume_snapshot_class?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_FOUND_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-found-snapshot-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_FOUND_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-found-storage-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_SET_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-set-snapshot-class', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_SET_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-set-storage-class' };

export type OpenShiftDrVolumeSnapshotRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrVolumeSnapshotRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrVolumeSnapshotRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.no-action', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.unused', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.update' };

export type OpenShiftDrWorkloadRecoveryFailedReasonCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_FAILED_DEPENDENCY_WORKLOAD_NOT_RECOVERED: 'cdm-disaster-recovery-openshift.workload-recovery.failed.dependency_workload_not_recovered', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_FAILED_RECOVERY_JOB_TASK_FAILED: 'cdm-disaster-recovery-openshift.workload-recovery.failed.recovery_job_task_failed' };

export type OpenShiftDrWorkloadRecoveryInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrWorkloadRecoveryInfo'] = ResolversParentTypes['OpenShiftDrWorkloadRecoveryInfo']> = ResolversObject<{
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  protection_cluster_workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  volume_snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrWorkloadRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlan'] = ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlan']> = ResolversObject<{
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  dns_config?: Resolver<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryPlanDnsConfig']>, ParentType, ContextType>;
  protection_cluster_workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrWorkloadRecoveryPlanDnsConfigResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlanDnsConfig'] = ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlanDnsConfig']> = ResolversObject<{
  nameservers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryPlanDnsConfigOption']>>>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  searches?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlanDnsConfigOption'] = ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlanDnsConfigOption']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrWorkloadRecoveryPlanStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_INVALID_DNS_CONFIG_NAMESERVERS: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.invalid-dns-config-nameservers', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.normal', CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_NOT_SET_DNS_CONFIG_NAMESERVERS: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.not-set-dns-config-nameservers' };

export type OpenShiftDrWorkloadRecoveryPlanStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlanStatus'] = ResolversParentTypes['OpenShiftDrWorkloadRecoveryPlanStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrWorkloadRecoveryResultCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_CANCELED: 'cdm-disaster-recovery-openshift.workload-recovery.result.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_FAILED: 'cdm-disaster-recovery-openshift.workload-recovery.result.failed', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_SUCCEED: 'cdm-disaster-recovery-openshift.workload-recovery.result.succeed' };

export type OpenShiftDrWorkloadRecoveryStateCodeEnumResolvers = { CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_BEING_RECOVERED: 'cdm.disaster-recovery-openshift.workload-recovery.state.being-recovered', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_CANCELED: 'cdm.disaster-recovery-openshift.workload-recovery.state.canceled', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_FAILED: 'cdm.disaster-recovery-openshift.workload-recovery.state.failed', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_IGNORED: 'cdm.disaster-recovery-openshift.workload-recovery.state.ignored', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_PAUSED: 'cdm.disaster-recovery-openshift.workload-recovery.state.paused', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_PENDING: 'cdm.disaster-recovery-openshift.workload-recovery.state.pending', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_RECOVERED: 'cdm.disaster-recovery-openshift.workload-recovery.state.recovered', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLBACK_IGNORED: 'cdm.disaster-recovery-openshift.workload-recovery.state.rollback-ignored', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLED_BACK: 'cdm.disaster-recovery-openshift.workload-recovery.state.rolled-back', CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLING_BACK: 'cdm.disaster-recovery-openshift.workload-recovery.state.rolling-back' };

export type OpenShiftDrWorkloadRecoveryStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrWorkloadRecoveryStatus'] = ResolversParentTypes['OpenShiftDrWorkloadRecoveryStatus']> = ResolversObject<{
  failed_reason_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum']>, ParentType, ContextType>;
  failed_reason_contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_job_tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryResultCodeEnum']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftDrWorkloadRecoveryStateCodeEnum']>, ParentType, ContextType>;
  workload_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetRecoveryInfo?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryInfoResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryInfoArgs>>;
  GetRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobArgs>>;
  GetRecoveryJobInfo?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryInfoResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobInfoArgs>>;
  GetRecoveryJobSchedule?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobScheduleArgs>>;
  GetRecoveryJobScheduleStatus?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobScheduleStatusResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobScheduleStatusArgs>>;
  GetRecoveryJobSchedules?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobSchedulesResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobSchedulesArgs>>;
  GetRecoveryJobStatus?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobStatusResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobStatusArgs>>;
  GetRecoveryJobTaskLog?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTaskLogsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobTaskLogArgs>>;
  GetRecoveryJobTasks?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobTasksResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobTasksArgs>>;
  GetRecoveryJobs?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryJobsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobsArgs>>;
  GetRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryPlanArgs>>;
  GetRecoveryPlanStatus?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlanStatusResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryPlanStatusArgs>>;
  GetRecoveryPlans?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryPlansResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryPlansArgs>>;
  GetRecoveryResult?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryResultResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryResultArgs>>;
  GetRecoveryResults?: Resolver<Maybe<ResolversTypes['OpenShiftDrRecoveryResultsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryResultsArgs>>;
}>;

export type ReplicatorImageReplicationStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorImageReplicationStatus'] = ResolversParentTypes['ReplicatorImageReplicationStatus']> = ResolversObject<{
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReplicatorImageReplicationStatusStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorImageReplicationStatusStateCodeEnumResolvers = { CDM_REPLICATOR_IMAGE_REPLICATION_STATE_DONE: 'cdm.replicator.image-replication.state.done', CDM_REPLICATOR_IMAGE_REPLICATION_STATE_ERROR: 'cdm.replicator.image-replication.state.error', CDM_REPLICATOR_IMAGE_REPLICATION_STATE_SYNCING: 'cdm.replicator.image-replication.state.syncing' };

export type ReplicatorLastPrimarySnapshotStateCodeEnumResolvers = { CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_BEING_CREATED: 'cdm.replicator.latest-snapshot-creation.state.being-created', CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_ERROR: 'cdm.replicator.latest-snapshot-creation.state.error', CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_FAILURE: 'cdm.replicator.latest-snapshot-creation.state.failure', CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_NOT_YET: 'cdm.replicator.latest-snapshot-creation.state.not-yet', CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_SUCCESS: 'cdm.replicator.latest-snapshot-creation.state.success' };

export type ReplicatorMirroringStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorMirroringStatus'] = ResolversParentTypes['ReplicatorMirroringStatus']> = ResolversObject<{
  cause?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReplicatorMirroringStatusStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorMirroringStatusStateCodeEnumResolvers = { CDM_REPLICATOR_VOLUME_REPLICATION_STATE_ERROR: 'cdm.replicator.volume-replication.state.error', CDM_REPLICATOR_VOLUME_REPLICATION_STATE_MIRRORING: 'cdm.replicator.volume-replication.state.mirroring', CDM_REPLICATOR_VOLUME_REPLICATION_STATE_SYNCING: 'cdm.replicator.volume-replication.state.syncing' };

export type ReplicatorPrimarySnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorPrimarySnapshot'] = ResolversParentTypes['ReplicatorPrimarySnapshot']> = ResolversObject<{
  is_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary_snapshot_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  retain_count_over?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorReplicationInfoStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorReplicationInfoStatus'] = ResolversParentTypes['ReplicatorReplicationInfoStatus']> = ResolversObject<{
  image_replication_status?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplicatorImageReplicationStatus']>>>, ParentType, ContextType>;
  last_primary_snapshot_status?: Resolver<Maybe<ResolversTypes['ReplicatorLastPrimarySnapshotStateCodeEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ReplicatorReplicationInfoStatusStateCodeEnum']>, ParentType, ContextType>;
  volume_replication_status?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplicatorVolumeReplicationStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorReplicationInfoStatusStateCodeEnumResolvers = { CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_ERROR: 'cdm.replicator.openshift.replication-info.state.error', CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_NORMAL: 'cdm.replicator.openshift.replication-info.state.normal', CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_PREPARATION_FAILED: 'cdm.replicator.openshift.replication-info.state.preparation-failed', CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_PREPARING: 'cdm.replicator.openshift.replication-info.state.preparing' };

export type ReplicatorSnapshotScheduleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorSnapshotSchedule'] = ResolversParentTypes['ReplicatorSnapshotSchedule']> = ResolversObject<{
  end_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  primary_snapshot_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  primary_snapshot_retain_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  schedule_type?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  secondary_snapshot_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  secondary_snapshot_retain_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorVolumeReplicationStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorVolumeReplicationStatus'] = ResolversParentTypes['ReplicatorVolumeReplicationStatus']> = ResolversObject<{
  mirroring_replication_status?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplicatorMirroringStatus']>>>, ParentType, ContextType>;
  volume_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  CloudDayOfMonthEnum?: CloudDayOfMonthEnumResolvers;
  CloudIntervalHourEnum?: CloudIntervalHourEnumResolvers;
  CloudIntervalMinuteEnum?: CloudIntervalMinuteEnumResolvers;
  CloudIntervalMonthEnum?: CloudIntervalMonthEnumResolvers;
  CloudLanguageSetEnum?: CloudLanguageSetEnumResolvers;
  CloudRole?: CloudRoleResolvers<ContextType>;
  CloudRoleEnum?: CloudRoleEnumResolvers;
  CloudSchedule?: CloudScheduleResolvers<ContextType>;
  CloudScheduleTypeEnum?: CloudScheduleTypeEnumResolvers;
  CloudSession?: CloudSessionResolvers<ContextType>;
  CloudTenant?: CloudTenantResolvers<ContextType>;
  CloudTenantSolution?: CloudTenantSolutionResolvers<ContextType>;
  CloudUser?: CloudUserResolvers<ContextType>;
  CloudUserGroup?: CloudUserGroupResolvers<ContextType>;
  CloudWeekEnum?: CloudWeekEnumResolvers;
  CloudWeekOfMonthEnum?: CloudWeekOfMonthEnumResolvers;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OpenShiftCmCluster?: OpenShiftCmClusterResolvers<ContextType>;
  OpenShiftCmClusterResourceServiceTypeEnum?: OpenShiftCmClusterResourceServiceTypeEnumResolvers;
  OpenShiftCmClusterResourceVolumeTypeEnum?: OpenShiftCmClusterResourceVolumeTypeEnumResolvers;
  OpenShiftCmClusterStateCodeEnum?: OpenShiftCmClusterStateCodeEnumResolvers;
  OpenShiftCmClusterStatus?: OpenShiftCmClusterStatusResolvers<ContextType>;
  OpenShiftCmClusterSyncStateCodeEnum?: OpenShiftCmClusterSyncStateCodeEnumResolvers;
  OpenShiftCmClusterSyncStatus?: OpenShiftCmClusterSyncStatusResolvers<ContextType>;
  OpenShiftCmClusterTypeCodeEnum?: OpenShiftCmClusterTypeCodeEnumResolvers;
  OpenShiftCmFinalizer?: OpenShiftCmFinalizerResolvers<ContextType>;
  OpenShiftCmMessage?: OpenShiftCmMessageResolvers<ContextType>;
  OpenShiftCmNamespace?: OpenShiftCmNamespaceResolvers<ContextType>;
  OpenShiftCmPriorityClass?: OpenShiftCmPriorityClassResolvers<ContextType>;
  OpenShiftCmRegistry?: OpenShiftCmRegistryResolvers<ContextType>;
  OpenShiftCmResource?: OpenShiftCmResourceResolvers<ContextType>;
  OpenShiftCmRuntimeClass?: OpenShiftCmRuntimeClassResolvers<ContextType>;
  OpenShiftCmScheduler?: OpenShiftCmSchedulerResolvers<ContextType>;
  OpenShiftCmService?: OpenShiftCmServiceResolvers<ContextType>;
  OpenShiftCmServiceAccount?: OpenShiftCmServiceAccountResolvers<ContextType>;
  OpenShiftCmStorageClass?: OpenShiftCmStorageClassResolvers<ContextType>;
  OpenShiftCmVolume?: OpenShiftCmVolumeResolvers<ContextType>;
  OpenShiftCmVolumeSnapshot?: OpenShiftCmVolumeSnapshotResolvers<ContextType>;
  OpenShiftCmVolumeSnapshotClass?: OpenShiftCmVolumeSnapshotClassResolvers<ContextType>;
  OpenShiftCmWorkload?: OpenShiftCmWorkloadResolvers<ContextType>;
  OpenShiftCmWorkloadVolume?: OpenShiftCmWorkloadVolumeResolvers<ContextType>;
  OpenShiftDrFinalizerFallbackPolicyEnum?: OpenShiftDrFinalizerFallbackPolicyEnumResolvers;
  OpenShiftDrFinalizerRecoveryPlan?: OpenShiftDrFinalizerRecoveryPlanResolvers<ContextType>;
  OpenShiftDrFinalizerRecoveryPlanStateCodeEnum?: OpenShiftDrFinalizerRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrFinalizerRecoveryPlanStatus?: OpenShiftDrFinalizerRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrFinalizerRecoveryTypeCodeEnum?: OpenShiftDrFinalizerRecoveryTypeCodeEnumResolvers;
  OpenShiftDrImageRecoveryInfo?: OpenShiftDrImageRecoveryInfoResolvers<ContextType>;
  OpenShiftDrNamespaceRecoveryPlan?: OpenShiftDrNamespaceRecoveryPlanResolvers<ContextType>;
  OpenShiftDrNamespaceRecoveryPlanStateCodeEnum?: OpenShiftDrNamespaceRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrNamespaceRecoveryPlanStatus?: OpenShiftDrNamespaceRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrPriorityClassFallbackPolicyEnum?: OpenShiftDrPriorityClassFallbackPolicyEnumResolvers;
  OpenShiftDrPriorityClassRecoveryPlan?: OpenShiftDrPriorityClassRecoveryPlanResolvers<ContextType>;
  OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum?: OpenShiftDrPriorityClassRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrPriorityClassRecoveryPlanStatus?: OpenShiftDrPriorityClassRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrPriorityClassRecoveryTypeCodeEnum?: OpenShiftDrPriorityClassRecoveryTypeCodeEnumResolvers;
  OpenShiftDrReadinessGateConditionFallbackPolicyEnum?: OpenShiftDrReadinessGateConditionFallbackPolicyEnumResolvers;
  OpenShiftDrReadinessGateConditionRecoveryPlan?: OpenShiftDrReadinessGateConditionRecoveryPlanResolvers<ContextType>;
  OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum?: OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrReadinessGateConditionRecoveryPlanStatus?: OpenShiftDrReadinessGateConditionRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum?: OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnumResolvers;
  OpenShiftDrRecoveryClusterStateCodeEnum?: OpenShiftDrRecoveryClusterStateCodeEnumResolvers;
  OpenShiftDrRecoveryInfo?: OpenShiftDrRecoveryInfoResolvers<ContextType>;
  OpenShiftDrRecoveryInfoResponse?: OpenShiftDrRecoveryInfoResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJob?: OpenShiftDrRecoveryJobResolvers<ContextType>;
  OpenShiftDrRecoveryJobResponse?: OpenShiftDrRecoveryJobResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobResultCodeEnum?: OpenShiftDrRecoveryJobResultCodeEnumResolvers;
  OpenShiftDrRecoveryJobRetryRequest?: OpenShiftDrRecoveryJobRetryRequestResolvers<ContextType>;
  OpenShiftDrRecoveryJobSchedule?: OpenShiftDrRecoveryJobScheduleResolvers<ContextType>;
  OpenShiftDrRecoveryJobScheduleRequest?: OpenShiftDrRecoveryJobScheduleRequestResolvers<ContextType>;
  OpenShiftDrRecoveryJobScheduleResponse?: OpenShiftDrRecoveryJobScheduleResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobScheduleStateCodeEnum?: OpenShiftDrRecoveryJobScheduleStateCodeEnumResolvers;
  OpenShiftDrRecoveryJobScheduleStatus?: OpenShiftDrRecoveryJobScheduleStatusResolvers<ContextType>;
  OpenShiftDrRecoveryJobScheduleStatusResponse?: OpenShiftDrRecoveryJobScheduleStatusResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobSchedulesResponse?: OpenShiftDrRecoveryJobSchedulesResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobSchedulesResponseObject?: OpenShiftDrRecoveryJobSchedulesResponseObjectResolvers<ContextType>;
  OpenShiftDrRecoveryJobStateCodeEnum?: OpenShiftDrRecoveryJobStateCodeEnumResolvers;
  OpenShiftDrRecoveryJobStatus?: OpenShiftDrRecoveryJobStatusResolvers<ContextType>;
  OpenShiftDrRecoveryJobStatusResponse?: OpenShiftDrRecoveryJobStatusResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobTask?: OpenShiftDrRecoveryJobTaskResolvers<ContextType>;
  OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum?: OpenShiftDrRecoveryJobTaskFailedReasonCodeEnumResolvers;
  OpenShiftDrRecoveryJobTaskLogsResponse?: OpenShiftDrRecoveryJobTaskLogsResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobTaskResultCodeEnum?: OpenShiftDrRecoveryJobTaskResultCodeEnumResolvers;
  OpenShiftDrRecoveryJobTaskStateCodeEnum?: OpenShiftDrRecoveryJobTaskStateCodeEnumResolvers;
  OpenShiftDrRecoveryJobTaskStatus?: OpenShiftDrRecoveryJobTaskStatusResolvers<ContextType>;
  OpenShiftDrRecoveryJobTaskTypeCodeEnum?: OpenShiftDrRecoveryJobTaskTypeCodeEnumResolvers;
  OpenShiftDrRecoveryJobTasksResponse?: OpenShiftDrRecoveryJobTasksResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobsResponse?: OpenShiftDrRecoveryJobsResponseResolvers<ContextType>;
  OpenShiftDrRecoveryJobsResponseQueue?: OpenShiftDrRecoveryJobsResponseQueueResolvers<ContextType>;
  OpenShiftDrRecoveryPlan?: OpenShiftDrRecoveryPlanResolvers<ContextType>;
  OpenShiftDrRecoveryPlanDirectionCodeEnum?: OpenShiftDrRecoveryPlanDirectionCodeEnumResolvers;
  OpenShiftDrRecoveryPlanRequest?: OpenShiftDrRecoveryPlanRequestResolvers<ContextType>;
  OpenShiftDrRecoveryPlanResponse?: OpenShiftDrRecoveryPlanResponseResolvers<ContextType>;
  OpenShiftDrRecoveryPlanStateCodeEnum?: OpenShiftDrRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrRecoveryPlanStatus?: OpenShiftDrRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrRecoveryPlanStatusResponse?: OpenShiftDrRecoveryPlanStatusResponseResolvers<ContextType>;
  OpenShiftDrRecoveryPlanWarningStatusResponse?: OpenShiftDrRecoveryPlanWarningStatusResponseResolvers<ContextType>;
  OpenShiftDrRecoveryPlansResponse?: OpenShiftDrRecoveryPlansResponseResolvers<ContextType>;
  OpenShiftDrRecoveryPointTypeCodeEnum?: OpenShiftDrRecoveryPointTypeCodeEnumResolvers;
  OpenShiftDrRecoveryResult?: OpenShiftDrRecoveryResultResolvers<ContextType>;
  OpenShiftDrRecoveryResultCodeEnum?: OpenShiftDrRecoveryResultCodeEnumResolvers;
  OpenShiftDrRecoveryResultResponse?: OpenShiftDrRecoveryResultResponseResolvers<ContextType>;
  OpenShiftDrRecoveryResultsResponse?: OpenShiftDrRecoveryResultsResponseResolvers<ContextType>;
  OpenShiftDrRecoveryTypeCodeEnum?: OpenShiftDrRecoveryTypeCodeEnumResolvers;
  OpenShiftDrRegistryFallbackPolicyEnum?: OpenShiftDrRegistryFallbackPolicyEnumResolvers;
  OpenShiftDrRegistryRecoveryPlan?: OpenShiftDrRegistryRecoveryPlanResolvers<ContextType>;
  OpenShiftDrRegistryRecoveryPlanStateCodeEnum?: OpenShiftDrRegistryRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrRegistryRecoveryPlanStatus?: OpenShiftDrRegistryRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrRegistryRecoveryTypeCodeEnum?: OpenShiftDrRegistryRecoveryTypeCodeEnumResolvers;
  OpenShiftDrResourceRecoveryInfo?: OpenShiftDrResourceRecoveryInfoResolvers<ContextType>;
  OpenShiftDrRuntimeClassFallbackPolicyEnum?: OpenShiftDrRuntimeClassFallbackPolicyEnumResolvers;
  OpenShiftDrRuntimeClassRecoveryPlan?: OpenShiftDrRuntimeClassRecoveryPlanResolvers<ContextType>;
  OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum?: OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrRuntimeClassRecoveryPlanStatus?: OpenShiftDrRuntimeClassRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrRuntimeClassRecoveryTypeCodeEnum?: OpenShiftDrRuntimeClassRecoveryTypeCodeEnumResolvers;
  OpenShiftDrSchedulerFallbackPolicyEnum?: OpenShiftDrSchedulerFallbackPolicyEnumResolvers;
  OpenShiftDrSchedulerRecoveryPlan?: OpenShiftDrSchedulerRecoveryPlanResolvers<ContextType>;
  OpenShiftDrSchedulerRecoveryPlanStateCodeEnum?: OpenShiftDrSchedulerRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrSchedulerRecoveryPlanStatus?: OpenShiftDrSchedulerRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrSchedulerRecoveryTypeCodeEnum?: OpenShiftDrSchedulerRecoveryTypeCodeEnumResolvers;
  OpenShiftDrServiceAccountFallbackPolicyEnum?: OpenShiftDrServiceAccountFallbackPolicyEnumResolvers;
  OpenShiftDrServiceAccountRecoveryPlan?: OpenShiftDrServiceAccountRecoveryPlanResolvers<ContextType>;
  OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum?: OpenShiftDrServiceAccountRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrServiceAccountRecoveryPlanStatus?: OpenShiftDrServiceAccountRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrServiceAccountRecoveryTypeCodeEnum?: OpenShiftDrServiceAccountRecoveryTypeCodeEnumResolvers;
  OpenShiftDrServiceFallbackPolicyEnum?: OpenShiftDrServiceFallbackPolicyEnumResolvers;
  OpenShiftDrServiceRecoveryPlan?: OpenShiftDrServiceRecoveryPlanResolvers<ContextType>;
  OpenShiftDrServiceRecoveryPlanStateCodeEnum?: OpenShiftDrServiceRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrServiceRecoveryPlanStatus?: OpenShiftDrServiceRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrServiceRecoveryTypeCodeEnum?: OpenShiftDrServiceRecoveryTypeCodeEnumResolvers;
  OpenShiftDrVolumeRecoveryInfo?: OpenShiftDrVolumeRecoveryInfoResolvers<ContextType>;
  OpenShiftDrVolumeRecoveryPlan?: OpenShiftDrVolumeRecoveryPlanResolvers<ContextType>;
  OpenShiftDrVolumeRecoveryPlanStateCodeEnum?: OpenShiftDrVolumeRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrVolumeRecoveryPlanStatus?: OpenShiftDrVolumeRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrVolumeSnapshotRecoveryInfo?: OpenShiftDrVolumeSnapshotRecoveryInfoResolvers<ContextType>;
  OpenShiftDrVolumeSnapshotRecoveryPlan?: OpenShiftDrVolumeSnapshotRecoveryPlanResolvers<ContextType>;
  OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum?: OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrVolumeSnapshotRecoveryPlanStatus?: OpenShiftDrVolumeSnapshotRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum?: OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnumResolvers;
  OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum?: OpenShiftDrWorkloadRecoveryFailedReasonCodeEnumResolvers;
  OpenShiftDrWorkloadRecoveryInfo?: OpenShiftDrWorkloadRecoveryInfoResolvers<ContextType>;
  OpenShiftDrWorkloadRecoveryPlan?: OpenShiftDrWorkloadRecoveryPlanResolvers<ContextType>;
  OpenShiftDrWorkloadRecoveryPlanDnsConfig?: OpenShiftDrWorkloadRecoveryPlanDnsConfigResolvers<ContextType>;
  OpenShiftDrWorkloadRecoveryPlanDnsConfigOption?: OpenShiftDrWorkloadRecoveryPlanDnsConfigOptionResolvers<ContextType>;
  OpenShiftDrWorkloadRecoveryPlanStateCodeEnum?: OpenShiftDrWorkloadRecoveryPlanStateCodeEnumResolvers;
  OpenShiftDrWorkloadRecoveryPlanStatus?: OpenShiftDrWorkloadRecoveryPlanStatusResolvers<ContextType>;
  OpenShiftDrWorkloadRecoveryResultCodeEnum?: OpenShiftDrWorkloadRecoveryResultCodeEnumResolvers;
  OpenShiftDrWorkloadRecoveryStateCodeEnum?: OpenShiftDrWorkloadRecoveryStateCodeEnumResolvers;
  OpenShiftDrWorkloadRecoveryStatus?: OpenShiftDrWorkloadRecoveryStatusResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReplicatorImageReplicationStatus?: ReplicatorImageReplicationStatusResolvers<ContextType>;
  ReplicatorImageReplicationStatusStateCodeEnum?: ReplicatorImageReplicationStatusStateCodeEnumResolvers;
  ReplicatorLastPrimarySnapshotStateCodeEnum?: ReplicatorLastPrimarySnapshotStateCodeEnumResolvers;
  ReplicatorMirroringStatus?: ReplicatorMirroringStatusResolvers<ContextType>;
  ReplicatorMirroringStatusStateCodeEnum?: ReplicatorMirroringStatusStateCodeEnumResolvers;
  ReplicatorPrimarySnapshot?: ReplicatorPrimarySnapshotResolvers<ContextType>;
  ReplicatorReplicationInfoStatus?: ReplicatorReplicationInfoStatusResolvers<ContextType>;
  ReplicatorReplicationInfoStatusStateCodeEnum?: ReplicatorReplicationInfoStatusStateCodeEnumResolvers;
  ReplicatorSnapshotSchedule?: ReplicatorSnapshotScheduleResolvers<ContextType>;
  ReplicatorVolumeReplicationStatus?: ReplicatorVolumeReplicationStatusResolvers<ContextType>;
}>;

