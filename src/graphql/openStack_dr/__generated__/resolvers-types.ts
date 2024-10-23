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

export type CancelRecoveryJobConfirmInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CancelRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
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
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ConfirmRecoveryJobRetryInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CreateInstanceTemplateInput = {
  openStackDrAddInstanceTemplateRequest?: InputMaybe<OpenStackDrAddInstanceTemplateRequestInput>;
};

export type CreateMigrationJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobType?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CreateMigrationPreparationInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
  replicator?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMigrationReplicationInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
  replicator?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProtectionGroupInput = {
  openStackDrProtectionGroupRequest?: InputMaybe<OpenStackDrProtectionGroupRequestInput>;
};

export type CreateProtectionGroupSnapshotInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CreateRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrAddRecoveryJobRequest?: InputMaybe<OpenStackDrAddRecoveryJobRequestInput>;
};

export type CreateRecoveryPlanInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrRecoveryPlanRequest?: InputMaybe<OpenStackDrRecoveryPlanRequestInput>;
};

export type DeleteInstanceTemplateInput = {
  templateId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteMigrationInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteMigrationReplicationInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteProtectionGroupInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteRecoveryJobForceInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteRecoveryPlanInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteRecoveryReportInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  resultId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ExtendRecoveryJobPauseInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrExtendRecoveryJobPausingTimeRequest?: InputMaybe<OpenStackDrExtendRecoveryJobPausingTimeRequestInput>;
};

export type ExtendRecoveryJobRollbackTimeInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrExtendRecoveryJobRollbackWaitingTimeRequest?: InputMaybe<OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestInput>;
};

export type IgnoreRecoveryJobRollbackInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CancelRecoveryJob?: Maybe<OpenStackDrMessageResponse>;
  CancelRecoveryJobConfirm?: Maybe<OpenStackDrMessageResponse>;
  ConfirmRecoveryJob?: Maybe<OpenStackDrMessageResponse>;
  ConfirmRecoveryJobRetry?: Maybe<OpenStackDrMessageResponse>;
  CreateInstanceTemplate?: Maybe<OpenStackDrInstanceTemplateResponse>;
  CreateMigrationJob?: Maybe<OpenStackDrMessageResponse>;
  CreateMigrationPreparation?: Maybe<OpenStackDrMessageResponse>;
  CreateMigrationReplication?: Maybe<OpenStackDrMessageResponse>;
  CreateProtectionGroup?: Maybe<OpenStackDrProtectionGroupResponse>;
  CreateProtectionGroupSnapshot?: Maybe<OpenStackDrSnapshotMessageResponse>;
  CreateRecoveryJob?: Maybe<OpenStackDrRecoveryJobResponse>;
  CreateRecoveryPlan?: Maybe<OpenStackDrRecoveryPlanResponse>;
  DeleteInstanceTemplate?: Maybe<OpenStackDrMessageResponse>;
  DeleteMigration?: Maybe<OpenStackDrMessageResponse>;
  DeleteMigrationReplication?: Maybe<OpenStackDrMessageResponse>;
  DeleteProtectionGroup?: Maybe<OpenStackDrMessageResponse>;
  DeleteRecoveryJob?: Maybe<OpenStackDrMessageResponse>;
  DeleteRecoveryJobForce?: Maybe<OpenStackDrMessageResponse>;
  DeleteRecoveryPlan?: Maybe<OpenStackDrMessageResponse>;
  DeleteRecoveryReport?: Maybe<OpenStackDrMessageResponse>;
  ExtendRecoveryJobPause?: Maybe<OpenStackDrMessageResponse>;
  ExtendRecoveryJobRollbackTime?: Maybe<OpenStackDrMessageResponse>;
  IgnoreRecoveryJobRollback?: Maybe<Scalars['Boolean']['output']>;
  PauseRecoveryJob?: Maybe<OpenStackDrMessageResponse>;
  ResumeRecoveryJob?: Maybe<OpenStackDrMessageResponse>;
  ResumeRecoveryJobMigrationRollback?: Maybe<OpenStackDrMessageResponse>;
  RetryRecoveryJob?: Maybe<OpenStackDrMessageResponse>;
  RetryRecoveryJobRollback?: Maybe<OpenStackDrMessageResponse>;
  RollbackRecoveryJobSimulation?: Maybe<OpenStackDrMessageResponse>;
  UpdateProtectionGroup?: Maybe<OpenStackDrProtectionGroupResponse>;
  UpdateRecoveryJob?: Maybe<OpenStackDrRecoveryJobResponse>;
  UpdateRecoveryPlan?: Maybe<OpenStackDrRecoveryPlanResponse>;
};


export type MutationCancelRecoveryJobArgs = {
  input?: InputMaybe<CancelRecoveryJobInput>;
};


export type MutationCancelRecoveryJobConfirmArgs = {
  input?: InputMaybe<CancelRecoveryJobConfirmInput>;
};


export type MutationConfirmRecoveryJobArgs = {
  input?: InputMaybe<ConfirmRecoveryJobInput>;
};


export type MutationConfirmRecoveryJobRetryArgs = {
  input?: InputMaybe<ConfirmRecoveryJobRetryInput>;
};


export type MutationCreateInstanceTemplateArgs = {
  input?: InputMaybe<CreateInstanceTemplateInput>;
};


export type MutationCreateMigrationJobArgs = {
  input?: InputMaybe<CreateMigrationJobInput>;
};


export type MutationCreateMigrationPreparationArgs = {
  input?: InputMaybe<CreateMigrationPreparationInput>;
};


export type MutationCreateMigrationReplicationArgs = {
  input?: InputMaybe<CreateMigrationReplicationInput>;
};


export type MutationCreateProtectionGroupArgs = {
  input?: InputMaybe<CreateProtectionGroupInput>;
};


export type MutationCreateProtectionGroupSnapshotArgs = {
  input?: InputMaybe<CreateProtectionGroupSnapshotInput>;
};


export type MutationCreateRecoveryJobArgs = {
  input?: InputMaybe<CreateRecoveryJobInput>;
};


export type MutationCreateRecoveryPlanArgs = {
  input?: InputMaybe<CreateRecoveryPlanInput>;
};


export type MutationDeleteInstanceTemplateArgs = {
  input?: InputMaybe<DeleteInstanceTemplateInput>;
};


export type MutationDeleteMigrationArgs = {
  input?: InputMaybe<DeleteMigrationInput>;
};


export type MutationDeleteMigrationReplicationArgs = {
  input?: InputMaybe<DeleteMigrationReplicationInput>;
};


export type MutationDeleteProtectionGroupArgs = {
  input?: InputMaybe<DeleteProtectionGroupInput>;
};


export type MutationDeleteRecoveryJobArgs = {
  input?: InputMaybe<DeleteRecoveryJobInput>;
};


export type MutationDeleteRecoveryJobForceArgs = {
  input?: InputMaybe<DeleteRecoveryJobForceInput>;
};


export type MutationDeleteRecoveryPlanArgs = {
  input?: InputMaybe<DeleteRecoveryPlanInput>;
};


export type MutationDeleteRecoveryReportArgs = {
  input?: InputMaybe<DeleteRecoveryReportInput>;
};


export type MutationExtendRecoveryJobPauseArgs = {
  input?: InputMaybe<ExtendRecoveryJobPauseInput>;
};


export type MutationExtendRecoveryJobRollbackTimeArgs = {
  input?: InputMaybe<ExtendRecoveryJobRollbackTimeInput>;
};


export type MutationIgnoreRecoveryJobRollbackArgs = {
  input?: InputMaybe<IgnoreRecoveryJobRollbackInput>;
};


export type MutationPauseRecoveryJobArgs = {
  input?: InputMaybe<PauseRecoveryJobInput>;
};


export type MutationResumeRecoveryJobArgs = {
  input?: InputMaybe<ResumeRecoveryJobInput>;
};


export type MutationResumeRecoveryJobMigrationRollbackArgs = {
  input?: InputMaybe<ResumeRecoveryJobMigrationRollbackInput>;
};


export type MutationRetryRecoveryJobArgs = {
  input?: InputMaybe<RetryRecoveryJobInput>;
};


export type MutationRetryRecoveryJobRollbackArgs = {
  input?: InputMaybe<RetryRecoveryJobRollbackInput>;
};


export type MutationRollbackRecoveryJobSimulationArgs = {
  input?: InputMaybe<RollbackRecoveryJobSimulationInput>;
};


export type MutationUpdateProtectionGroupArgs = {
  input?: InputMaybe<UpdateProtectionGroupInput>;
};


export type MutationUpdateRecoveryJobArgs = {
  input?: InputMaybe<UpdateRecoveryJobInput>;
};


export type MutationUpdateRecoveryPlanArgs = {
  input?: InputMaybe<UpdateRecoveryPlanInput>;
};

export type OpenStackCmCluster = {
  __typename?: 'OpenStackCmCluster';
  api_server_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  credential?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_group?: Maybe<CloudUserGroup>;
  permissions?: Maybe<Array<Maybe<OpenStackCmClusterPermission>>>;
  remarks?: Maybe<Scalars['String']['output']>;
  state_code?: Maybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
  synchronized_at?: Maybe<Scalars['BigInt']['output']>;
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmCluster1 = {
  __typename?: 'OpenStackCmCluster1';
  api_server_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  credential?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_group?: Maybe<CloudUserGroup>;
  permissions?: Maybe<Array<Maybe<OpenStackCmClusterPermission1>>>;
  remarks?: Maybe<Scalars['String']['output']>;
  state_code?: Maybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
  synchronized_at?: Maybe<Scalars['BigInt']['output']>;
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmCluster1Input = {
  api_server_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_group?: InputMaybe<CloudUserGroupInput>;
  permissions?: InputMaybe<Array<InputMaybe<OpenStackCmClusterPermission1Input>>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  state_code?: InputMaybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
  synchronized_at?: InputMaybe<Scalars['BigInt']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmClusterAvailabilityZone = {
  __typename?: 'OpenStackCmClusterAvailabilityZone';
  available?: Maybe<Scalars['Boolean']['output']>;
  cluster?: Maybe<OpenStackCmCluster>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterAvailabilityZone1 = {
  __typename?: 'OpenStackCmClusterAvailabilityZone1';
  available?: Maybe<Scalars['Boolean']['output']>;
  cluster?: Maybe<OpenStackCmCluster1>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterAvailabilityZone1Input = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterAvailabilityZoneInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterFloatingIp = {
  __typename?: 'OpenStackCmClusterFloatingIp';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterFloatingIpStatusEnum | `${OpenStackCmClusterFloatingIpStatusEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterFloatingIp1 = {
  __typename?: 'OpenStackCmClusterFloatingIp1';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterFloatingIpStatusEnum | `${OpenStackCmClusterFloatingIpStatusEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterFloatingIp1Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterFloatingIpStatusEnum | `${OpenStackCmClusterFloatingIpStatusEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterFloatingIpInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterFloatingIpStatusEnum | `${OpenStackCmClusterFloatingIpStatusEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterFloatingIpStatusEnum {
  Active = 'ACTIVE',
  Down = 'DOWN',
  Error = 'ERROR'
}

export type OpenStackCmClusterHypervisor = {
  __typename?: 'OpenStackCmClusterHypervisor';
  agent_installed_at?: Maybe<Scalars['BigInt']['output']>;
  agent_last_upgraded_at?: Maybe<Scalars['BigInt']['output']>;
  agent_port?: Maybe<Scalars['BigInt']['output']>;
  agent_version?: Maybe<Scalars['String']['output']>;
  availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone>;
  cluster?: Maybe<OpenStackCmCluster>;
  disk_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  disk_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  hostname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  mem_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  ssh_account?: Maybe<Scalars['String']['output']>;
  ssh_password?: Maybe<Scalars['String']['output']>;
  ssh_port?: Maybe<Scalars['BigInt']['output']>;
  state?: Maybe<OpenStackCmClusterHypervisorStateEnum | `${OpenStackCmClusterHypervisorStateEnum}`>;
  status?: Maybe<OpenStackCmClusterHypervisorStatusEnum | `${OpenStackCmClusterHypervisorStatusEnum}`>;
  type_code?: Maybe<OpenStackCmClusterHypervisorTypeCodeEnum | `${OpenStackCmClusterHypervisorTypeCodeEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
  vcpu_total_cnt?: Maybe<Scalars['BigInt']['output']>;
  vcpu_used_cnt?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterHypervisor1 = {
  __typename?: 'OpenStackCmClusterHypervisor1';
  agent_installed_at?: Maybe<Scalars['BigInt']['output']>;
  agent_last_upgraded_at?: Maybe<Scalars['BigInt']['output']>;
  agent_port?: Maybe<Scalars['BigInt']['output']>;
  agent_version?: Maybe<Scalars['String']['output']>;
  availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone1>;
  cluster?: Maybe<OpenStackCmCluster1>;
  disk_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  disk_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  hostname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  mem_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  ssh_account?: Maybe<Scalars['String']['output']>;
  ssh_password?: Maybe<Scalars['String']['output']>;
  ssh_port?: Maybe<Scalars['BigInt']['output']>;
  state?: Maybe<OpenStackCmClusterHypervisorStateEnum | `${OpenStackCmClusterHypervisorStateEnum}`>;
  status?: Maybe<OpenStackCmClusterHypervisorStatusEnum | `${OpenStackCmClusterHypervisorStatusEnum}`>;
  type_code?: Maybe<OpenStackCmClusterHypervisorTypeCodeEnum | `${OpenStackCmClusterHypervisorTypeCodeEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
  vcpu_total_cnt?: Maybe<Scalars['BigInt']['output']>;
  vcpu_used_cnt?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterHypervisor1Input = {
  agent_installed_at?: InputMaybe<Scalars['BigInt']['input']>;
  agent_last_upgraded_at?: InputMaybe<Scalars['BigInt']['input']>;
  agent_port?: InputMaybe<Scalars['BigInt']['input']>;
  agent_version?: InputMaybe<Scalars['String']['input']>;
  availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZone1Input>;
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  disk_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  disk_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  mem_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  ssh_account?: InputMaybe<Scalars['String']['input']>;
  ssh_password?: InputMaybe<Scalars['String']['input']>;
  ssh_port?: InputMaybe<Scalars['BigInt']['input']>;
  state?: InputMaybe<OpenStackCmClusterHypervisorStateEnum | `${OpenStackCmClusterHypervisorStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterHypervisorStatusEnum | `${OpenStackCmClusterHypervisorStatusEnum}`>;
  type_code?: InputMaybe<OpenStackCmClusterHypervisorTypeCodeEnum | `${OpenStackCmClusterHypervisorTypeCodeEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  vcpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
  vcpu_used_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmClusterHypervisorInput = {
  agent_installed_at?: InputMaybe<Scalars['BigInt']['input']>;
  agent_last_upgraded_at?: InputMaybe<Scalars['BigInt']['input']>;
  agent_port?: InputMaybe<Scalars['BigInt']['input']>;
  agent_version?: InputMaybe<Scalars['String']['input']>;
  availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  disk_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  disk_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  mem_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  ssh_account?: InputMaybe<Scalars['String']['input']>;
  ssh_password?: InputMaybe<Scalars['String']['input']>;
  ssh_port?: InputMaybe<Scalars['BigInt']['input']>;
  state?: InputMaybe<OpenStackCmClusterHypervisorStateEnum | `${OpenStackCmClusterHypervisorStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterHypervisorStatusEnum | `${OpenStackCmClusterHypervisorStatusEnum}`>;
  type_code?: InputMaybe<OpenStackCmClusterHypervisorTypeCodeEnum | `${OpenStackCmClusterHypervisorTypeCodeEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  vcpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
  vcpu_used_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackCmClusterHypervisorStateEnum {
  Down = 'down',
  Unknown = 'unknown',
  Up = 'up'
}

export enum OpenStackCmClusterHypervisorStatusEnum {
  Disabled = 'disabled',
  Enabled = 'enabled',
  Unknown = 'unknown'
}

export enum OpenStackCmClusterHypervisorTypeCodeEnum {
  HyperV = 'HYPER_V',
  Kvm = 'KVM',
  Lxc = 'LXC',
  Qemu = 'QEMU',
  Uml = 'UML',
  Virtuozzo = 'VIRTUOZZO',
  Vmware = 'VMWARE',
  Xen = 'XEN',
  Xenserver = 'XENSERVER'
}

export type OpenStackCmClusterInput = {
  api_server_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_group?: InputMaybe<CloudUserGroupInput>;
  permissions?: InputMaybe<Array<InputMaybe<OpenStackCmClusterPermissionInput>>>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  state_code?: InputMaybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
  synchronized_at?: InputMaybe<Scalars['BigInt']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmClusterInstance = {
  __typename?: 'OpenStackCmClusterInstance';
  availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone>;
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  hypervisor?: Maybe<OpenStackCmClusterHypervisor>;
  id?: Maybe<Scalars['BigInt']['output']>;
  keypair?: Maybe<OpenStackCmClusterKeyPair>;
  name?: Maybe<Scalars['String']['output']>;
  networks?: Maybe<Array<Maybe<OpenStackCmClusterInstanceNetwork>>>;
  routers?: Maybe<Array<Maybe<OpenStackCmClusterRouter>>>;
  security_groups?: Maybe<Array<Maybe<OpenStackCmClusterInstanceSecurityGroup>>>;
  spec?: Maybe<OpenStackCmClusterInstanceSpec>;
  state?: Maybe<OpenStackCmClusterInstanceStateEnum | `${OpenStackCmClusterInstanceStateEnum}`>;
  status?: Maybe<OpenStackCmClusterInstanceStatusEnum | `${OpenStackCmClusterInstanceStatusEnum}`>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  uuid?: Maybe<Scalars['String']['output']>;
  volumes?: Maybe<Array<Maybe<OpenStackCmClusterInstanceVolume>>>;
};

export type OpenStackCmClusterInstance1 = {
  __typename?: 'OpenStackCmClusterInstance1';
  availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone1>;
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<OpenStackCmClusterInstanceExtra>;
  hypervisor?: Maybe<OpenStackCmClusterHypervisor1>;
  id?: Maybe<Scalars['BigInt']['output']>;
  keypair?: Maybe<OpenStackCmClusterKeyPair1>;
  name?: Maybe<Scalars['String']['output']>;
  networks?: Maybe<Array<Maybe<OpenStackCmClusterInstanceNetwork1>>>;
  proxy?: Maybe<OpenStackCmClusterInstanceProxy>;
  routers?: Maybe<Array<Maybe<OpenStackCmClusterRouter1>>>;
  security_groups?: Maybe<Array<Maybe<OpenStackCmClusterInstanceSecurityGroup1>>>;
  spec?: Maybe<OpenStackCmClusterInstanceSpec1>;
  state?: Maybe<OpenStackCmClusterInstanceStateEnum | `${OpenStackCmClusterInstanceStateEnum}`>;
  status?: Maybe<OpenStackCmClusterInstanceStatusEnum | `${OpenStackCmClusterInstanceStatusEnum}`>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  uuid?: Maybe<Scalars['String']['output']>;
  volumes?: Maybe<Array<Maybe<OpenStackCmClusterInstanceVolume1>>>;
};

export type OpenStackCmClusterInstance1Input = {
  availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZone1Input>;
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<OpenStackCmClusterInstanceExtraInput>;
  hypervisor?: InputMaybe<OpenStackCmClusterHypervisor1Input>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  keypair?: InputMaybe<OpenStackCmClusterKeyPair1Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceNetwork1Input>>>;
  proxy?: InputMaybe<OpenStackCmClusterInstanceProxyInput>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackCmClusterRouter1Input>>>;
  security_groups?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceSecurityGroup1Input>>>;
  spec?: InputMaybe<OpenStackCmClusterInstanceSpec1Input>;
  state?: InputMaybe<OpenStackCmClusterInstanceStateEnum | `${OpenStackCmClusterInstanceStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterInstanceStatusEnum | `${OpenStackCmClusterInstanceStatusEnum}`>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceVolume1Input>>>;
};

export type OpenStackCmClusterInstanceExtra = {
  __typename?: 'OpenStackCmClusterInstanceExtra';
  os?: Maybe<Scalars['String']['output']>;
  uefi?: Maybe<Scalars['Boolean']['output']>;
  vm_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterInstanceExtraInput = {
  os?: InputMaybe<Scalars['String']['input']>;
  uefi?: InputMaybe<Scalars['Boolean']['input']>;
  vm_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmClusterInstanceExtraSpec = {
  __typename?: 'OpenStackCmClusterInstanceExtraSpec';
  key?: Maybe<OpenStackCmClusterInstanceExtraSpecKeyEnum | `${OpenStackCmClusterInstanceExtraSpecKeyEnum}`>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterInstanceExtraSpec1 = {
  __typename?: 'OpenStackCmClusterInstanceExtraSpec1';
  key?: Maybe<OpenStackCmClusterInstanceExtraSpecKeyEnum | `${OpenStackCmClusterInstanceExtraSpecKeyEnum}`>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterInstanceExtraSpec1Input = {
  key?: InputMaybe<OpenStackCmClusterInstanceExtraSpecKeyEnum | `${OpenStackCmClusterInstanceExtraSpecKeyEnum}`>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterInstanceExtraSpecInput = {
  key?: InputMaybe<OpenStackCmClusterInstanceExtraSpecKeyEnum | `${OpenStackCmClusterInstanceExtraSpecKeyEnum}`>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterInstanceExtraSpecKeyEnum {
  HwCpuCores = 'hw:cpu_cores',
  HwCpuMaxCores = 'hw:cpu_max_cores',
  HwCpuMaxSockets = 'hw:cpu_max_sockets',
  HwCpuMaxThreads = 'hw:cpu_max_threads',
  HwCpuPolicy = 'hw:cpu_policy',
  HwCpuSockets = 'hw:cpu_sockets',
  HwCpuThreads = 'hw:cpu_threads',
  HwCpuThreadPolicy = 'hw:cpu_thread_policy',
  HwMemPageSize = 'hw:mem_page_size',
  HwNumaCpusN = 'hw:numa_cpus.N',
  HwNumaMemN = 'hw:numa_mem.N',
  HwNumaNodes = 'hw:numa_nodes',
  HwRngRateAllowed = 'hw_rng:rate-allowed',
  HwRngRateBytes = 'hw_rng:rate_bytes',
  HwRngRatePeriod = 'hw_rng:rate_period',
  HwWatchdogAction = 'hw:watchdog_action',
  OsSecureBoot = 'os:secure_boot',
  PciPassthroughAlias = 'pci_passthrough:alias',
  QuotaCpuLimit = 'quota:cpu_limit',
  QuotaCpuPeriod = 'quota:cpu_period',
  QuotaCpuQuota = 'quota:cpu_quota',
  QuotaCpuReservation = 'quota:cpu_reservation',
  QuotaCpuShares = 'quota:cpu_shares',
  QuotaCpuSharesLevel = 'quota:cpu_shares_level',
  QuotaDiskIoLimit = 'quota:disk_io_limit',
  QuotaDiskIoReservation = 'quota:disk_io_reservation',
  QuotaDiskIoSharesLevel = 'quota:disk_io_shares_level',
  QuotaDiskIoSharesShare = 'quota:disk_io_shares_share',
  QuotaDiskReadBytesSec = 'quota:disk_read_bytes_sec',
  QuotaDiskReadIopsSec = 'quota:disk_read_iops_sec',
  QuotaDiskTotalBytesSec = 'quota:disk_total_bytes_sec',
  QuotaDiskTotalIopsSec = 'quota:disk_total_iops_sec',
  QuotaDiskWriteBytesSec = 'quota:disk_write_bytes_sec',
  QuotaDiskWriteIopsSec = 'quota:disk_write_iops_sec',
  QuotaMemoryLimit = 'quota:memory_limit',
  QuotaMemoryReservation = 'quota:memory_reservation',
  QuotaMemorySharesLevel = 'quota:memory_shares_level',
  QuotaMemorySharesShare = 'quota:memory_shares_share',
  QuotaVifInboundAverage = 'quota:vif_inbound_average',
  QuotaVifInboundBurst = 'quota:vif_inbound_burst',
  QuotaVifInboundPeak = 'quota:vif_inbound_peak',
  QuotaVifOutboundAverage = 'quota:vif_outbound_average',
  QuotaVifOutboundBurst = 'quota:vif_outbound_burst',
  QuotaVifOutboundPeak = 'quota:vif_outbound_peak'
}

export type OpenStackCmClusterInstanceInput = {
  availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  hypervisor?: InputMaybe<OpenStackCmClusterHypervisorInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  keypair?: InputMaybe<OpenStackCmClusterKeyPairInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceNetworkInput>>>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackCmClusterRouterInput>>>;
  security_groups?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceSecurityGroupInput>>>;
  spec?: InputMaybe<OpenStackCmClusterInstanceSpecInput>;
  state?: InputMaybe<OpenStackCmClusterInstanceStateEnum | `${OpenStackCmClusterInstanceStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterInstanceStatusEnum | `${OpenStackCmClusterInstanceStatusEnum}`>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceVolumeInput>>>;
};

export type OpenStackCmClusterInstanceNetwork = {
  __typename?: 'OpenStackCmClusterInstanceNetwork';
  dhcp_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ip?: Maybe<OpenStackCmClusterFloatingIp>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<OpenStackCmClusterNetwork>;
  subnet?: Maybe<OpenStackCmClusterSubnet>;
};

export type OpenStackCmClusterInstanceNetwork1 = {
  __typename?: 'OpenStackCmClusterInstanceNetwork1';
  dhcp_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ip?: Maybe<OpenStackCmClusterFloatingIp1>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<OpenStackCmClusterNetwork1>;
  subnet?: Maybe<OpenStackCmClusterSubnet1>;
};

export type OpenStackCmClusterInstanceNetwork1Input = {
  dhcp_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ip?: InputMaybe<OpenStackCmClusterFloatingIp1Input>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetwork1Input>;
  subnet?: InputMaybe<OpenStackCmClusterSubnet1Input>;
};

export type OpenStackCmClusterInstanceNetworkInput = {
  dhcp_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ip?: InputMaybe<OpenStackCmClusterFloatingIpInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  subnet?: InputMaybe<OpenStackCmClusterSubnetInput>;
};

export type OpenStackCmClusterInstanceProxy = {
  __typename?: 'OpenStackCmClusterInstanceProxy';
  ip_address?: Maybe<Scalars['String']['output']>;
  os_type?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['BigInt']['output']>;
  proxy_flag?: Maybe<Scalars['Boolean']['output']>;
};

export type OpenStackCmClusterInstanceProxyInput = {
  ip_address?: InputMaybe<Scalars['String']['input']>;
  os_type?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['BigInt']['input']>;
  proxy_flag?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OpenStackCmClusterInstanceProxyLink = {
  __typename?: 'OpenStackCmClusterInstanceProxyLink';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  protection_proxy?: Maybe<OpenStackCmClusterInstance1>;
  recovery_proxy?: Maybe<OpenStackCmClusterInstance1>;
};

export type OpenStackCmClusterInstanceProxyLinkInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_proxy?: InputMaybe<OpenStackCmClusterInstance1Input>;
  recovery_proxy?: InputMaybe<OpenStackCmClusterInstance1Input>;
};

export type OpenStackCmClusterInstanceSecurityGroup = {
  __typename?: 'OpenStackCmClusterInstanceSecurityGroup';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Array<Maybe<OpenStackCmClusterSecurityGroupRule>>>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterInstanceSecurityGroup1 = {
  __typename?: 'OpenStackCmClusterInstanceSecurityGroup1';
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Array<Maybe<OpenStackCmClusterSecurityGroupRule1>>>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterInstanceSecurityGroup1Input = {
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSecurityGroupRule1Input>>>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterInstanceSecurityGroupInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSecurityGroupRuleInput>>>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterInstanceSpec = {
  __typename?: 'OpenStackCmClusterInstanceSpec';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  disk_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  ephemeral_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  extra_specs?: Maybe<Array<Maybe<OpenStackCmClusterInstanceExtraSpec>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  swap_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  vcpu_total_cnt?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterInstanceSpec1 = {
  __typename?: 'OpenStackCmClusterInstanceSpec1';
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  disk_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  ephemeral_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  extra_specs?: Maybe<Array<Maybe<OpenStackCmClusterInstanceExtraSpec1>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  swap_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  vcpu_total_cnt?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterInstanceSpec1Input = {
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  disk_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  ephemeral_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  extra_specs?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceExtraSpec1Input>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  swap_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  vcpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmClusterInstanceSpecInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  disk_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  ephemeral_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  extra_specs?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceExtraSpecInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  swap_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  vcpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackCmClusterInstanceStateEnum {
  Crashed = 'CRASHED',
  Nostate = 'NOSTATE',
  Paused = 'PAUSED',
  Running = 'RUNNING',
  Shutdown = 'SHUTDOWN',
  Suspended = 'SUSPENDED'
}

export enum OpenStackCmClusterInstanceStatusEnum {
  Active = 'ACTIVE',
  Build = 'BUILD',
  Deleted = 'DELETED',
  Error = 'ERROR',
  HardReboot = 'HARD_REBOOT',
  Migrating = 'MIGRATING',
  Password = 'PASSWORD',
  Paused = 'PAUSED',
  Reboot = 'REBOOT',
  Rebuild = 'REBUILD',
  Rescue = 'RESCUE',
  Resize = 'RESIZE',
  RevertResize = 'REVERT_RESIZE',
  Shelved = 'SHELVED',
  ShelvedOffloaded = 'SHELVED_OFFLOADED',
  Shutoff = 'SHUTOFF',
  SoftDeleted = 'SOFT_DELETED',
  Suspended = 'SUSPENDED',
  Unknown = 'UNKNOWN',
  VerifyResize = 'VERIFY_RESIZE'
}

export type OpenStackCmClusterInstanceVolume = {
  __typename?: 'OpenStackCmClusterInstanceVolume';
  boot_index?: Maybe<Scalars['BigInt']['output']>;
  device_path?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<OpenStackCmClusterStorage>;
  volume?: Maybe<OpenStackCmClusterVolume>;
};

export type OpenStackCmClusterInstanceVolume1 = {
  __typename?: 'OpenStackCmClusterInstanceVolume1';
  boot_index?: Maybe<Scalars['BigInt']['output']>;
  device_path?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<OpenStackCmClusterStorage1>;
  volume?: Maybe<OpenStackCmClusterVolume1>;
};

export type OpenStackCmClusterInstanceVolume1Input = {
  boot_index?: InputMaybe<Scalars['BigInt']['input']>;
  device_path?: InputMaybe<Scalars['String']['input']>;
  storage?: InputMaybe<OpenStackCmClusterStorage1Input>;
  volume?: InputMaybe<OpenStackCmClusterVolume1Input>;
};

export type OpenStackCmClusterInstanceVolumeInput = {
  boot_index?: InputMaybe<Scalars['BigInt']['input']>;
  device_path?: InputMaybe<Scalars['String']['input']>;
  storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
};

export type OpenStackCmClusterKeyPair = {
  __typename?: 'OpenStackCmClusterKeyPair';
  fingerprint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  type_code?: Maybe<OpenStackCmClusterKeyPairTypeCodeEnum | `${OpenStackCmClusterKeyPairTypeCodeEnum}`>;
};

export type OpenStackCmClusterKeyPair1 = {
  __typename?: 'OpenStackCmClusterKeyPair1';
  fingerprint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  type_code?: Maybe<OpenStackCmClusterKeyPairTypeCodeEnum | `${OpenStackCmClusterKeyPairTypeCodeEnum}`>;
};

export type OpenStackCmClusterKeyPair1Input = {
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterKeyPairTypeCodeEnum | `${OpenStackCmClusterKeyPairTypeCodeEnum}`>;
};

export type OpenStackCmClusterKeyPairInput = {
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterKeyPairTypeCodeEnum | `${OpenStackCmClusterKeyPairTypeCodeEnum}`>;
};

export enum OpenStackCmClusterKeyPairTypeCodeEnum {
  Ssh = 'ssh',
  X509 = 'x509'
}

export type OpenStackCmClusterNetwork = {
  __typename?: 'OpenStackCmClusterNetwork';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  external_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ips?: Maybe<Array<Maybe<OpenStackCmClusterFloatingIp>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OpenStackCmClusterNetworkStateEnum | `${OpenStackCmClusterNetworkStateEnum}`>;
  status?: Maybe<OpenStackCmClusterNetworkStatusEnum | `${OpenStackCmClusterNetworkStatusEnum}`>;
  subnets?: Maybe<Array<Maybe<OpenStackCmClusterSubnet>>>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  type_code?: Maybe<OpenStackCmClusterNetworkTypeCodeEnum | `${OpenStackCmClusterNetworkTypeCodeEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterNetwork1 = {
  __typename?: 'OpenStackCmClusterNetwork1';
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  external_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ips?: Maybe<Array<Maybe<OpenStackCmClusterFloatingIp1>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OpenStackCmClusterNetworkStateEnum | `${OpenStackCmClusterNetworkStateEnum}`>;
  status?: Maybe<OpenStackCmClusterNetworkStatusEnum | `${OpenStackCmClusterNetworkStatusEnum}`>;
  subnets?: Maybe<Array<Maybe<OpenStackCmClusterSubnet1>>>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  type_code?: Maybe<OpenStackCmClusterNetworkTypeCodeEnum | `${OpenStackCmClusterNetworkTypeCodeEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterNetwork1Input = {
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  external_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackCmClusterFloatingIp1Input>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OpenStackCmClusterNetworkStateEnum | `${OpenStackCmClusterNetworkStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterNetworkStatusEnum | `${OpenStackCmClusterNetworkStatusEnum}`>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnet1Input>>>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  type_code?: InputMaybe<OpenStackCmClusterNetworkTypeCodeEnum | `${OpenStackCmClusterNetworkTypeCodeEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterNetworkInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  external_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackCmClusterFloatingIpInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OpenStackCmClusterNetworkStateEnum | `${OpenStackCmClusterNetworkStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterNetworkStatusEnum | `${OpenStackCmClusterNetworkStatusEnum}`>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetInput>>>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  type_code?: InputMaybe<OpenStackCmClusterNetworkTypeCodeEnum | `${OpenStackCmClusterNetworkTypeCodeEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterNetworkRoutingInterface = {
  __typename?: 'OpenStackCmClusterNetworkRoutingInterface';
  ip_address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<OpenStackCmClusterNetwork>;
  subnet?: Maybe<OpenStackCmClusterSubnet>;
};

export type OpenStackCmClusterNetworkRoutingInterface1 = {
  __typename?: 'OpenStackCmClusterNetworkRoutingInterface1';
  ip_address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<OpenStackCmClusterNetwork1>;
  subnet?: Maybe<OpenStackCmClusterSubnet1>;
};

export type OpenStackCmClusterNetworkRoutingInterface1Input = {
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetwork1Input>;
  subnet?: InputMaybe<OpenStackCmClusterSubnet1Input>;
};

export type OpenStackCmClusterNetworkRoutingInterfaceInput = {
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  subnet?: InputMaybe<OpenStackCmClusterSubnetInput>;
};

export enum OpenStackCmClusterNetworkStateEnum {
  Down = 'down',
  Up = 'up'
}

export enum OpenStackCmClusterNetworkStatusEnum {
  Active = 'ACTIVE',
  Build = 'BUILD',
  Down = 'DOWN',
  Error = 'ERROR'
}

export enum OpenStackCmClusterNetworkTypeCodeEnum {
  Flat = 'flat',
  Geneve = 'geneve',
  Gre = 'gre',
  Local = 'local',
  Vlan = 'vlan',
  Vxlan = 'vxlan'
}

export type OpenStackCmClusterPermission = {
  __typename?: 'OpenStackCmClusterPermission';
  group?: Maybe<CloudUserGroup>;
  mode_code?: Maybe<OpenStackCmClusterPermissionModeCodeEnum | `${OpenStackCmClusterPermissionModeCodeEnum}`>;
};

export type OpenStackCmClusterPermission1 = {
  __typename?: 'OpenStackCmClusterPermission1';
  group?: Maybe<CloudUserGroup>;
  mode_code?: Maybe<OpenStackCmClusterPermissionModeCodeEnum | `${OpenStackCmClusterPermissionModeCodeEnum}`>;
};

export type OpenStackCmClusterPermission1Input = {
  group?: InputMaybe<CloudUserGroupInput>;
  mode_code?: InputMaybe<OpenStackCmClusterPermissionModeCodeEnum | `${OpenStackCmClusterPermissionModeCodeEnum}`>;
};

export type OpenStackCmClusterPermissionInput = {
  group?: InputMaybe<CloudUserGroupInput>;
  mode_code?: InputMaybe<OpenStackCmClusterPermissionModeCodeEnum | `${OpenStackCmClusterPermissionModeCodeEnum}`>;
};

export enum OpenStackCmClusterPermissionModeCodeEnum {
  ClusterPermissionModeReadonly = 'cluster.permission.mode.readonly',
  ClusterPermissionModeReadwrite = 'cluster.permission.mode.readwrite'
}

export type OpenStackCmClusterRouter = {
  __typename?: 'OpenStackCmClusterRouter';
  description?: Maybe<Scalars['String']['output']>;
  external_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface>>>;
  extra_routes?: Maybe<Array<Maybe<OpenStackCmClusterRouterExtraRoute>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  internal_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface>>>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OpenStackCmClusterRouterStateEnum | `${OpenStackCmClusterRouterStateEnum}`>;
  status?: Maybe<OpenStackCmClusterRouterStatusEnum | `${OpenStackCmClusterRouterStatusEnum}`>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterRouter1 = {
  __typename?: 'OpenStackCmClusterRouter1';
  description?: Maybe<Scalars['String']['output']>;
  external_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface1>>>;
  extra_routes?: Maybe<Array<Maybe<OpenStackCmClusterRouterExtraRoute>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  internal_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface1>>>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OpenStackCmClusterRouterStateEnum | `${OpenStackCmClusterRouterStateEnum}`>;
  status?: Maybe<OpenStackCmClusterRouterStatusEnum | `${OpenStackCmClusterRouterStatusEnum}`>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterRouter1Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  external_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkRoutingInterface1Input>>>;
  extra_routes?: InputMaybe<Array<InputMaybe<OpenStackCmClusterRouterExtraRouteInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  internal_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkRoutingInterface1Input>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OpenStackCmClusterRouterStateEnum | `${OpenStackCmClusterRouterStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterRouterStatusEnum | `${OpenStackCmClusterRouterStatusEnum}`>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterRouterExtraRoute = {
  __typename?: 'OpenStackCmClusterRouterExtraRoute';
  destination?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  nexthop?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterRouterExtraRouteInput = {
  destination?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  nexthop?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterRouterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  external_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkRoutingInterfaceInput>>>;
  extra_routes?: InputMaybe<Array<InputMaybe<OpenStackCmClusterRouterExtraRouteInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  internal_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkRoutingInterfaceInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OpenStackCmClusterRouterStateEnum | `${OpenStackCmClusterRouterStateEnum}`>;
  status?: InputMaybe<OpenStackCmClusterRouterStatusEnum | `${OpenStackCmClusterRouterStatusEnum}`>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterRouterStateEnum {
  Down = 'down',
  Up = 'up'
}

export enum OpenStackCmClusterRouterStatusEnum {
  Active = 'ACTIVE',
  Build = 'BUILD',
  Down = 'DOWN',
  Error = 'ERROR'
}

export type OpenStackCmClusterSecurityGroup = {
  __typename?: 'OpenStackCmClusterSecurityGroup';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSecurityGroup1 = {
  __typename?: 'OpenStackCmClusterSecurityGroup1';
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSecurityGroup1Input = {
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterSecurityGroupInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterSecurityGroupRule = {
  __typename?: 'OpenStackCmClusterSecurityGroupRule';
  description?: Maybe<Scalars['String']['output']>;
  direction?: Maybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum | `${OpenStackCmClusterSecurityGroupRuleDirectionEnum}`>;
  ether_type?: Maybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum | `${OpenStackCmClusterSecurityGroupRuleEtherTypeEnum}`>;
  id?: Maybe<Scalars['BigInt']['output']>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  port_range_max?: Maybe<Scalars['BigInt']['output']>;
  port_range_min?: Maybe<Scalars['BigInt']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  remote_security_group?: Maybe<OpenStackCmClusterSecurityGroup>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSecurityGroupRule1 = {
  __typename?: 'OpenStackCmClusterSecurityGroupRule1';
  description?: Maybe<Scalars['String']['output']>;
  direction?: Maybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum | `${OpenStackCmClusterSecurityGroupRuleDirectionEnum}`>;
  ether_type?: Maybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum | `${OpenStackCmClusterSecurityGroupRuleEtherTypeEnum}`>;
  id?: Maybe<Scalars['BigInt']['output']>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  port_range_max?: Maybe<Scalars['BigInt']['output']>;
  port_range_min?: Maybe<Scalars['BigInt']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  remote_security_group?: Maybe<OpenStackCmClusterSecurityGroup1>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSecurityGroupRule1Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum | `${OpenStackCmClusterSecurityGroupRuleDirectionEnum}`>;
  ether_type?: InputMaybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum | `${OpenStackCmClusterSecurityGroupRuleEtherTypeEnum}`>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  port_range_max?: InputMaybe<Scalars['BigInt']['input']>;
  port_range_min?: InputMaybe<Scalars['BigInt']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  remote_security_group?: InputMaybe<OpenStackCmClusterSecurityGroup1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterSecurityGroupRuleDirectionEnum {
  Egress = 'egress',
  Ingress = 'ingress'
}

export enum OpenStackCmClusterSecurityGroupRuleEtherTypeEnum {
  Four = '4',
  Six = '6'
}

export type OpenStackCmClusterSecurityGroupRuleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum | `${OpenStackCmClusterSecurityGroupRuleDirectionEnum}`>;
  ether_type?: InputMaybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum | `${OpenStackCmClusterSecurityGroupRuleEtherTypeEnum}`>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  port_range_max?: InputMaybe<Scalars['BigInt']['input']>;
  port_range_min?: InputMaybe<Scalars['BigInt']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  remote_security_group?: InputMaybe<OpenStackCmClusterSecurityGroupInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterStateCodeEnum {
  ClusterStateActive = 'cluster.state.active',
  ClusterStateInactive = 'cluster.state.inactive',
  ClusterStateLoading = 'cluster.state.loading',
  ClusterStateWarning = 'cluster.state.warning'
}

export type OpenStackCmClusterStorage = {
  __typename?: 'OpenStackCmClusterStorage';
  capacity_bytes?: Maybe<Scalars['BigInt']['output']>;
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterStorageStatusEnum | `${OpenStackCmClusterStorageStatusEnum}`>;
  type_code?: Maybe<OpenStackCmClusterStorageTypeCodeEnum | `${OpenStackCmClusterStorageTypeCodeEnum}`>;
  used_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterStorage1 = {
  __typename?: 'OpenStackCmClusterStorage1';
  capacity_bytes?: Maybe<Scalars['BigInt']['output']>;
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterStorageStatusEnum | `${OpenStackCmClusterStorageStatusEnum}`>;
  type_code?: Maybe<OpenStackCmClusterStorageTypeCodeEnum | `${OpenStackCmClusterStorageTypeCodeEnum}`>;
  used_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterStorage1Input = {
  capacity_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterStorageStatusEnum | `${OpenStackCmClusterStorageStatusEnum}`>;
  type_code?: InputMaybe<OpenStackCmClusterStorageTypeCodeEnum | `${OpenStackCmClusterStorageTypeCodeEnum}`>;
  used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterStorageInput = {
  capacity_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterStorageStatusEnum | `${OpenStackCmClusterStorageStatusEnum}`>;
  type_code?: InputMaybe<OpenStackCmClusterStorageTypeCodeEnum | `${OpenStackCmClusterStorageTypeCodeEnum}`>;
  used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterStorageStatusEnum {
  Available = 'available',
  Unavailable = 'unavailable',
  Unknown = 'unknown'
}

export enum OpenStackCmClusterStorageTypeCodeEnum {
  OpenstackStorageTypeCeph = 'openstack.storage.type.ceph',
  OpenstackStorageTypeLvm = 'openstack.storage.type.lvm',
  OpenstackStorageTypeNfs = 'openstack.storage.type.nfs',
  OpenstackStorageTypeUnknown = 'openstack.storage.type.unknown'
}

export type OpenStackCmClusterSubnet = {
  __typename?: 'OpenStackCmClusterSubnet';
  description?: Maybe<Scalars['String']['output']>;
  dhcp_enabled?: Maybe<Scalars['Boolean']['output']>;
  dhcp_pools?: Maybe<Array<Maybe<OpenStackCmClusterSubnetDhcpPool>>>;
  gateway_enabled?: Maybe<Scalars['Boolean']['output']>;
  gateway_ip_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ipv6_address_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum | `${OpenStackCmClusterSubnetIpv6AddressModeCodeEnum}`>;
  ipv6_ra_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum | `${OpenStackCmClusterSubnetIpv6RaModeCodeEnum}`>;
  name?: Maybe<Scalars['String']['output']>;
  nameservers?: Maybe<Array<Maybe<OpenStackCmClusterSubnetNameserver>>>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSubnet1 = {
  __typename?: 'OpenStackCmClusterSubnet1';
  description?: Maybe<Scalars['String']['output']>;
  dhcp_enabled?: Maybe<Scalars['Boolean']['output']>;
  dhcp_pools?: Maybe<Array<Maybe<OpenStackCmClusterSubnetDhcpPool>>>;
  gateway_enabled?: Maybe<Scalars['Boolean']['output']>;
  gateway_ip_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ipv6_address_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum | `${OpenStackCmClusterSubnetIpv6AddressModeCodeEnum}`>;
  ipv6_ra_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum | `${OpenStackCmClusterSubnetIpv6RaModeCodeEnum}`>;
  name?: Maybe<Scalars['String']['output']>;
  nameservers?: Maybe<Array<Maybe<OpenStackCmClusterSubnetNameserver>>>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSubnet1Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  dhcp_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  dhcp_pools?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetDhcpPoolInput>>>;
  gateway_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  gateway_ip_address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ipv6_address_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum | `${OpenStackCmClusterSubnetIpv6AddressModeCodeEnum}`>;
  ipv6_ra_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum | `${OpenStackCmClusterSubnetIpv6RaModeCodeEnum}`>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameservers?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetNameserverInput>>>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterSubnetDhcpPool = {
  __typename?: 'OpenStackCmClusterSubnetDhcpPool';
  end_ip_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  start_ip_address?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSubnetDhcpPoolInput = {
  end_ip_address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  start_ip_address?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterSubnetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  dhcp_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  dhcp_pools?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetDhcpPoolInput>>>;
  gateway_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  gateway_ip_address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ipv6_address_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum | `${OpenStackCmClusterSubnetIpv6AddressModeCodeEnum}`>;
  ipv6_ra_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum | `${OpenStackCmClusterSubnetIpv6RaModeCodeEnum}`>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameservers?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetNameserverInput>>>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterSubnetIpv6AddressModeCodeEnum {
  Dhcpv6Stateful = 'dhcpv6-stateful',
  Dhcpv6Stateless = 'dhcpv6-stateless',
  Slaac = 'slaac'
}

export enum OpenStackCmClusterSubnetIpv6RaModeCodeEnum {
  Dhcpv6Stateful = 'dhcpv6-stateful',
  Dhcpv6Stateless = 'dhcpv6-stateless',
  Slaac = 'slaac'
}

export type OpenStackCmClusterSubnetNameserver = {
  __typename?: 'OpenStackCmClusterSubnetNameserver';
  id?: Maybe<Scalars['BigInt']['output']>;
  nameserver?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterSubnetNameserverInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  nameserver?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterTenant = {
  __typename?: 'OpenStackCmClusterTenant';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quotas?: Maybe<Array<Maybe<OpenStackCmClusterTenantQuota>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterTenant1 = {
  __typename?: 'OpenStackCmClusterTenant1';
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quotas?: Maybe<Array<Maybe<OpenStackCmClusterTenantQuota>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterTenant1Input = {
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quotas?: InputMaybe<Array<InputMaybe<OpenStackCmClusterTenantQuotaInput>>>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterTenantInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quotas?: InputMaybe<Array<InputMaybe<OpenStackCmClusterTenantQuotaInput>>>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterTenantQuota = {
  __typename?: 'OpenStackCmClusterTenantQuota';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterTenantQuotaInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackCmClusterTypeCodeEnum {
  ClusterTypeKubernetes = 'cluster.type.kubernetes',
  ClusterTypeOpenshift = 'cluster.type.openshift',
  ClusterTypeOpenstack = 'cluster.type.openstack',
  ClusterTypeVmware = 'cluster.type.vmware'
}

export type OpenStackCmClusterVolume = {
  __typename?: 'OpenStackCmClusterVolume';
  bootable?: Maybe<Scalars['Boolean']['output']>;
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  multiattach?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  size_bytes?: Maybe<Scalars['BigInt']['output']>;
  snapshots?: Maybe<Array<Maybe<OpenStackCmClusterVolumeSnapshot>>>;
  status?: Maybe<OpenStackCmClusterVolumeStatusEnum | `${OpenStackCmClusterVolumeStatusEnum}`>;
  storage?: Maybe<OpenStackCmClusterStorage>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterVolume1 = {
  __typename?: 'OpenStackCmClusterVolume1';
  bootable?: Maybe<Scalars['Boolean']['output']>;
  cluster?: Maybe<OpenStackCmCluster1>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  multiattach?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  size_bytes?: Maybe<Scalars['BigInt']['output']>;
  snapshots?: Maybe<Array<Maybe<OpenStackCmClusterVolumeSnapshot1>>>;
  status?: Maybe<OpenStackCmClusterVolumeStatusEnum | `${OpenStackCmClusterVolumeStatusEnum}`>;
  storage?: Maybe<OpenStackCmClusterStorage1>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterVolume1Input = {
  bootable?: InputMaybe<Scalars['Boolean']['input']>;
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  multiattach?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenStackCmClusterVolumeSnapshot1Input>>>;
  status?: InputMaybe<OpenStackCmClusterVolumeStatusEnum | `${OpenStackCmClusterVolumeStatusEnum}`>;
  storage?: InputMaybe<OpenStackCmClusterStorage1Input>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterVolumeInput = {
  bootable?: InputMaybe<Scalars['Boolean']['input']>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  multiattach?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenStackCmClusterVolumeSnapshotInput>>>;
  status?: InputMaybe<OpenStackCmClusterVolumeStatusEnum | `${OpenStackCmClusterVolumeStatusEnum}`>;
  storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterVolumeSnapshot = {
  __typename?: 'OpenStackCmClusterVolumeSnapshot';
  cluster_volume_group_snapshot_uuid?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size_bytes?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<OpenStackCmClusterVolumeSnapshotStatusEnum | `${OpenStackCmClusterVolumeSnapshotStatusEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterVolumeSnapshot1 = {
  __typename?: 'OpenStackCmClusterVolumeSnapshot1';
  cluster_volume_group_snapshot_uuid?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size_bytes?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<OpenStackCmClusterVolumeSnapshotStatusEnum | `${OpenStackCmClusterVolumeSnapshotStatusEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterVolumeSnapshot1Input = {
  cluster_volume_group_snapshot_uuid?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackCmClusterVolumeSnapshotStatusEnum | `${OpenStackCmClusterVolumeSnapshotStatusEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterVolumeSnapshotInput = {
  cluster_volume_group_snapshot_uuid?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackCmClusterVolumeSnapshotStatusEnum | `${OpenStackCmClusterVolumeSnapshotStatusEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterVolumeSnapshotStatusEnum {
  Available = 'available',
  Creating = 'creating',
  Deleting = 'deleting',
  Error = 'error',
  ErrorDeleting = 'error_deleting'
}

export enum OpenStackCmClusterVolumeStatusEnum {
  Attaching = 'attaching',
  Available = 'available',
  Creating = 'creating',
  Deleting = 'deleting',
  Detaching = 'detaching',
  Error = 'error',
  ErrorDeleting = 'error_deleting',
  InUse = 'in-use',
  Maintenance = 'maintenance'
}

export type OpenStackDrAbnormalStateReasons = {
  __typename?: 'OpenStackDrAbnormalStateReasons';
  critical?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  emergency?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  mirroring?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  prepare?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  warning?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
};

export type OpenStackDrAbnormalStateReasonsInput = {
  critical?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  emergency?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  mirroring?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  prepare?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  warning?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
};

export type OpenStackDrAbnormalStateReasonsResponse = {
  __typename?: 'OpenStackDrAbnormalStateReasonsResponse';
  message?: Maybe<OpenStackDrMessage>;
  reasons?: Maybe<Array<Maybe<OpenStackDrAbnormalStateReasons>>>;
};

export type OpenStackDrAbnormalStateReasonsResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  reasons?: InputMaybe<Array<InputMaybe<OpenStackDrAbnormalStateReasonsInput>>>;
};

export type OpenStackDrAddInstanceTemplateRequest = {
  __typename?: 'OpenStackDrAddInstanceTemplateRequest';
  template?: Maybe<OpenStackDrInstanceTemplate>;
};

export type OpenStackDrAddInstanceTemplateRequestInput = {
  template?: InputMaybe<OpenStackDrInstanceTemplateInput>;
};

export type OpenStackDrAddRecoveryJobRequest = {
  __typename?: 'OpenStackDrAddRecoveryJobRequest';
  force?: Maybe<Scalars['Boolean']['output']>;
  job?: Maybe<OpenStackDrRecoveryJob>;
};

export type OpenStackDrAddRecoveryJobRequestInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  job?: InputMaybe<OpenStackDrRecoveryJobInput>;
};

export type OpenStackDrAvailabilityZoneRecoveryPlan = {
  __typename?: 'OpenStackDrAvailabilityZoneRecoveryPlan';
  protection_cluster_availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone>;
  recovery_cluster_availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone>;
  recovery_cluster_availability_zone_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_availability_zone_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_type_code?: Maybe<OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export type OpenStackDrAvailabilityZoneRecoveryPlanInput = {
  protection_cluster_availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  recovery_cluster_availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  recovery_cluster_availability_zone_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_availability_zone_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export enum OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanAvailabilityZoneRecoveryTypeMapping = 'dr.recovery.plan.availability-zone.recovery.type.mapping'
}

export type OpenStackDrClusterRelationship = {
  __typename?: 'OpenStackDrClusterRelationship';
  plans?: Maybe<Array<Maybe<OpenStackDrClusterRelationshipPlan>>>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  state_code?: Maybe<OpenStackDrClusterRelationshipStateCodeEnum | `${OpenStackDrClusterRelationshipStateCodeEnum}`>;
};

export type OpenStackDrClusterRelationshipInput = {
  plans?: InputMaybe<Array<InputMaybe<OpenStackDrClusterRelationshipPlanInput>>>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  state_code?: InputMaybe<OpenStackDrClusterRelationshipStateCodeEnum | `${OpenStackDrClusterRelationshipStateCodeEnum}`>;
};

export type OpenStackDrClusterRelationshipPlan = {
  __typename?: 'OpenStackDrClusterRelationshipPlan';
  abnormal_state_reasons?: Maybe<OpenStackDrAbnormalStateReasons>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  detail?: Maybe<OpenStackDrRecoveryPlanDetail>;
  direction_code?: Maybe<OpenStackDrRecoveryPlanDirectionCodeEnum | `${OpenStackDrRecoveryPlanDirectionCodeEnum}`>;
  group?: Maybe<OpenStackDrProtectionGroup>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mirror_state_code?: Maybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum | `${OpenStackDrRecoveryPlanMirrorStateCodeEnum}`>;
  name?: Maybe<Scalars['String']['output']>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  remarks?: Maybe<Scalars['String']['output']>;
  snapshot_retention_count?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryPlanStateCodeEnum | `${OpenStackDrRecoveryPlanStateCodeEnum}`>;
  updatable?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrClusterRelationshipPlanInput = {
  abnormal_state_reasons?: InputMaybe<OpenStackDrAbnormalStateReasonsInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  detail?: InputMaybe<OpenStackDrRecoveryPlanDetailInput>;
  direction_code?: InputMaybe<OpenStackDrRecoveryPlanDirectionCodeEnum | `${OpenStackDrRecoveryPlanDirectionCodeEnum}`>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mirror_state_code?: InputMaybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum | `${OpenStackDrRecoveryPlanMirrorStateCodeEnum}`>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  snapshot_retention_count?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryPlanStateCodeEnum | `${OpenStackDrRecoveryPlanStateCodeEnum}`>;
  updatable?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrClusterRelationshipStateCodeEnum {
  DrClusterRelationshipStateCritical = 'dr.cluster.relationship.state.critical',
  DrClusterRelationshipStateEmergency = 'dr.cluster.relationship.state.emergency',
  DrClusterRelationshipStateNormal = 'dr.cluster.relationship.state.normal',
  DrClusterRelationshipStateWarning = 'dr.cluster.relationship.state.warning'
}

export type OpenStackDrClusterRelationshipsResponse = {
  __typename?: 'OpenStackDrClusterRelationshipsResponse';
  cluster_relationships?: Maybe<Array<Maybe<OpenStackDrClusterRelationship>>>;
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
};

export type OpenStackDrClusterRelationshipsResponseInput = {
  cluster_relationships?: InputMaybe<Array<InputMaybe<OpenStackDrClusterRelationshipInput>>>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
};

export type OpenStackDrExtendRecoveryJobPausingTimeRequest = {
  __typename?: 'OpenStackDrExtendRecoveryJobPausingTimeRequest';
  extend_time?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrExtendRecoveryJobPausingTimeRequestInput = {
  extend_time?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest = {
  __typename?: 'OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest';
  extend_time?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestInput = {
  extend_time?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrExternalNetworkRecoveryPlan = {
  __typename?: 'OpenStackDrExternalNetworkRecoveryPlan';
  protection_cluster_external_network?: Maybe<OpenStackCmClusterNetwork>;
  recovery_cluster_external_network?: Maybe<OpenStackCmClusterNetwork>;
  recovery_cluster_external_network_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_external_network_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_type_code?: Maybe<OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export type OpenStackDrExternalNetworkRecoveryPlanInput = {
  protection_cluster_external_network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_cluster_external_network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_cluster_external_network_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_external_network_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export enum OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanNetworkRecoveryTypeMapping = 'dr.recovery.plan.network.recovery.type.mapping'
}

export type OpenStackDrFloatingIpRecoveryPlan = {
  __typename?: 'OpenStackDrFloatingIpRecoveryPlan';
  protection_cluster_floating_ip?: Maybe<OpenStackCmClusterFloatingIp>;
  unavailable_flag?: Maybe<Scalars['Boolean']['output']>;
  unavailable_reason?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrFloatingIpRecoveryPlanInput = {
  protection_cluster_floating_ip?: InputMaybe<OpenStackCmClusterFloatingIpInput>;
  unavailable_flag?: InputMaybe<Scalars['Boolean']['input']>;
  unavailable_reason?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrHistoryResponse = {
  __typename?: 'OpenStackDrHistoryResponse';
  history?: Maybe<OpenStackDrProtectionGroupHistory>;
  message?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrHistoryResponseInput = {
  history?: InputMaybe<OpenStackDrProtectionGroupHistoryInput>;
  message?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrHypervisorResources = {
  __typename?: 'OpenStackDrHypervisorResources';
  disk_expected_usage?: Maybe<Scalars['BigInt']['output']>;
  disk_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mem_expected_usage?: Maybe<Scalars['BigInt']['output']>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  mem_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  vcpu_expected_usage?: Maybe<Scalars['BigInt']['output']>;
  vpu_total_cnt?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrHypervisorResourcesInput = {
  disk_expected_usage?: InputMaybe<Scalars['BigInt']['input']>;
  disk_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mem_expected_usage?: InputMaybe<Scalars['BigInt']['input']>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  mem_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  vcpu_expected_usage?: InputMaybe<Scalars['BigInt']['input']>;
  vpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrHypervisorResourcesResponse = {
  __typename?: 'OpenStackDrHypervisorResourcesResponse';
  hypervisor_resources?: Maybe<Array<Maybe<OpenStackDrHypervisorResources>>>;
  message?: Maybe<OpenStackDrMessage>;
  usable?: Maybe<OpenStackDrUsable>;
};

export type OpenStackDrHypervisorResourcesResponseInput = {
  hypervisor_resources?: InputMaybe<Array<InputMaybe<OpenStackDrHypervisorResourcesInput>>>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  usable?: InputMaybe<OpenStackDrUsableInput>;
};

export type OpenStackDrInstanceMigrationPlan = {
  __typename?: 'OpenStackDrInstanceMigrationPlan';
  instance_proxy_link?: Maybe<OpenStackCmClusterInstanceProxyLink>;
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_availability_zone_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_hypervisor_hostname?: Maybe<Scalars['String']['output']>;
  recovery_cluster_hypervisor_ip_address?: Maybe<Scalars['String']['output']>;
  recovery_cluster_instance_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_instance_spec_uuid?: Maybe<Scalars['String']['output']>;
  recovery_cluster_instance_user_script_user_data?: Maybe<Scalars['String']['output']>;
  recovery_cluster_keypair_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_storage_id?: Maybe<Scalars['BigInt']['output']>;
  recovery_cluster_storage_type_code?: Maybe<Scalars['String']['output']>;
  recovery_cluster_tenant_uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceMigrationPlanInput = {
  instance_proxy_link?: InputMaybe<OpenStackCmClusterInstanceProxyLinkInput>;
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_availability_zone_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_hypervisor_hostname?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_hypervisor_ip_address?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_instance_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_instance_spec_uuid?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_instance_user_script_user_data?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_keypair_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_storage_id?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_cluster_storage_type_code?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_tenant_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceNetworkMigrationPlan = {
  __typename?: 'OpenStackDrInstanceNetworkMigrationPlan';
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_floating_ip_uuid?: Maybe<Scalars['String']['output']>;
  recovery_cluster_network_uuid?: Maybe<Scalars['String']['output']>;
  recovery_cluster_subnet_uuid?: Maybe<Scalars['String']['output']>;
  recovery_dhcp_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_ip_address?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceNetworkMigrationPlanInput = {
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_floating_ip_uuid?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_network_uuid?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_subnet_uuid?: InputMaybe<Scalars['String']['input']>;
  recovery_dhcp_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_ip_address?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceRecoveryPlan = {
  __typename?: 'OpenStackDrInstanceRecoveryPlan';
  auto_start_flag?: Maybe<Scalars['Boolean']['output']>;
  dependencies?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  diagnosis_flag?: Maybe<Scalars['Boolean']['output']>;
  diagnosis_method_code?: Maybe<OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum | `${OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum}`>;
  diagnosis_method_data?: Maybe<Scalars['String']['output']>;
  diagnosis_timeout?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone>;
  recovery_cluster_availability_zone_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_availability_zone_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_cluster_hypervisor?: Maybe<OpenStackCmClusterHypervisor>;
  recovery_type_code?: Maybe<OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export enum OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum {
  DrRecoveryPlanInstanceDiagnosisMethodHttpGet = 'dr.recovery.plan.instance.diagnosis.method.http-get',
  DrRecoveryPlanInstanceDiagnosisMethodPortScan = 'dr.recovery.plan.instance.diagnosis.method.port-scan',
  DrRecoveryPlanInstanceDiagnosisMethodShellScript = 'dr.recovery.plan.instance.diagnosis.method.shell-script'
}

export type OpenStackDrInstanceRecoveryPlanInput = {
  auto_start_flag?: InputMaybe<Scalars['Boolean']['input']>;
  dependencies?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  diagnosis_flag?: InputMaybe<Scalars['Boolean']['input']>;
  diagnosis_method_code?: InputMaybe<OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum | `${OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum}`>;
  diagnosis_method_data?: InputMaybe<Scalars['String']['input']>;
  diagnosis_timeout?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  recovery_cluster_availability_zone_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_availability_zone_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_cluster_hypervisor?: InputMaybe<OpenStackCmClusterHypervisorInput>;
  recovery_type_code?: InputMaybe<OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export enum OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanInstanceRecoveryTypeMirroring = 'dr.recovery.plan.instance.recovery.type.mirroring'
}

export type OpenStackDrInstanceRecoveryResult = {
  __typename?: 'OpenStackDrInstanceRecoveryResult';
  auto_start_flag?: Maybe<Scalars['Boolean']['output']>;
  dependencies?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  diagnosis_flag?: Maybe<Scalars['Boolean']['output']>;
  diagnosis_method_code?: Maybe<OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum | `${OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum}`>;
  diagnosis_method_data?: Maybe<Scalars['String']['output']>;
  diagnosis_timeout?: Maybe<Scalars['BigInt']['output']>;
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrInstanceRecoveryResultResultCodeEnum | `${OpenStackDrInstanceRecoveryResultResultCodeEnum}`>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
};

export enum OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum {
  DrRecoveryPlanInstanceDiagnosisMethodHttpGet = 'dr.recovery.plan.instance.diagnosis.method.http-get',
  DrRecoveryPlanInstanceDiagnosisMethodPortScan = 'dr.recovery.plan.instance.diagnosis.method.port-scan',
  DrRecoveryPlanInstanceDiagnosisMethodShellScript = 'dr.recovery.plan.instance.diagnosis.method.shell-script'
}

export type OpenStackDrInstanceRecoveryResultInput = {
  auto_start_flag?: InputMaybe<Scalars['Boolean']['input']>;
  dependencies?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  diagnosis_flag?: InputMaybe<Scalars['Boolean']['input']>;
  diagnosis_method_code?: InputMaybe<OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum | `${OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum}`>;
  diagnosis_method_data?: InputMaybe<Scalars['String']['input']>;
  diagnosis_timeout?: InputMaybe<Scalars['BigInt']['input']>;
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrInstanceRecoveryResultResultCodeEnum | `${OpenStackDrInstanceRecoveryResultResultCodeEnum}`>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrInstanceRecoveryResultResultCodeEnum {
  DrRecoveryInstanceResultCanceled = 'dr.recovery.instance.result.canceled',
  DrRecoveryInstanceResultFailed = 'dr.recovery.instance.result.failed',
  DrRecoveryInstanceResultSuccess = 'dr.recovery.instance.result.success'
}

export type OpenStackDrInstanceSecurityGroupMigrationPlan = {
  __typename?: 'OpenStackDrInstanceSecurityGroupMigrationPlan';
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_security_group_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_security_group_uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceSecurityGroupMigrationPlanInput = {
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_security_group_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_security_group_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceTemplate = {
  __typename?: 'OpenStackDrInstanceTemplate';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  instances?: Maybe<Array<Maybe<OpenStackDrInstanceTemplateInstance>>>;
  name?: Maybe<Scalars['String']['output']>;
  owner_group?: Maybe<CloudUserGroup>;
  remarks?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceTemplateInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceTemplateInstanceInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_group?: InputMaybe<CloudUserGroupInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceTemplateInstance = {
  __typename?: 'OpenStackDrInstanceTemplateInstance';
  auto_start_flag?: Maybe<Scalars['Boolean']['output']>;
  dependencies?: Maybe<Array<Maybe<OpenStackDrInstanceTemplateInstanceDependency>>>;
  diagnosis_flag?: Maybe<Scalars['Boolean']['output']>;
  diagnosis_method_code?: Maybe<OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum | `${OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum}`>;
  diagnosis_method_data?: Maybe<Scalars['String']['output']>;
  diagnosis_timeout?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceTemplateInstanceDependency = {
  __typename?: 'OpenStackDrInstanceTemplateInstanceDependency';
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceTemplateInstanceDependencyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum {
  DrRecoveryPlanInstanceDiagnosisMethodHttpGet = 'dr.recovery.plan.instance.diagnosis.method.http-get',
  DrRecoveryPlanInstanceDiagnosisMethodPortScan = 'dr.recovery.plan.instance.diagnosis.method.port-scan',
  DrRecoveryPlanInstanceDiagnosisMethodShellScript = 'dr.recovery.plan.instance.diagnosis.method.shell-script'
}

export type OpenStackDrInstanceTemplateInstanceInput = {
  auto_start_flag?: InputMaybe<Scalars['Boolean']['input']>;
  dependencies?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceTemplateInstanceDependencyInput>>>;
  diagnosis_flag?: InputMaybe<Scalars['Boolean']['input']>;
  diagnosis_method_code?: InputMaybe<OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum | `${OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum}`>;
  diagnosis_method_data?: InputMaybe<Scalars['String']['input']>;
  diagnosis_timeout?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceTemplateResponse = {
  __typename?: 'OpenStackDrInstanceTemplateResponse';
  message?: Maybe<OpenStackDrMessage>;
  template?: Maybe<OpenStackDrInstanceTemplate>;
};

export type OpenStackDrInstanceTemplateResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  template?: InputMaybe<OpenStackDrInstanceTemplateInput>;
};

export type OpenStackDrInstanceTemplatesResponse = {
  __typename?: 'OpenStackDrInstanceTemplatesResponse';
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
  templates?: Maybe<Array<Maybe<OpenStackDrInstanceTemplate>>>;
};

export type OpenStackDrInstanceTemplatesResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
  templates?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceTemplateInput>>>;
};

export type OpenStackDrInstanceVolumeMigrationPlan = {
  __typename?: 'OpenStackDrInstanceVolumeMigrationPlan';
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_snapshot_volume_uuid?: Maybe<Scalars['String']['output']>;
  recovery_cluster_volume_boot_index?: Maybe<Scalars['BigInt']['output']>;
  recovery_cluster_volume_bootable?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_volume_device_path?: Maybe<Scalars['String']['output']>;
  recovery_cluster_volume_uefi_image?: Maybe<Scalars['String']['output']>;
  recovery_cluster_volume_uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceVolumeMigrationPlanInput = {
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_snapshot_volume_uuid?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_volume_boot_index?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_cluster_volume_bootable?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_volume_device_path?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_volume_uefi_image?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_volume_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstancesResponse = {
  __typename?: 'OpenStackDrInstancesResponse';
  instances?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
};

export type OpenStackDrInstancesResponseInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
};

export type OpenStackDrMessage = {
  __typename?: 'OpenStackDrMessage';
  code?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrMessageInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrMessageResponse = {
  __typename?: 'OpenStackDrMessageResponse';
  message?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrMessageResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrMigration = {
  __typename?: 'OpenStackDrMigration';
  abnormal_state_reasons?: Maybe<OpenStackDrAbnormalStateReasons>;
  auto_sync_interval?: Maybe<Scalars['BigInt']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  details?: Maybe<Array<Maybe<OpenStackDrMigrationPlanInstanceDetail>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  remarks?: Maybe<Scalars['String']['output']>;
  updatable?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrMigrationInput = {
  abnormal_state_reasons?: InputMaybe<OpenStackDrAbnormalStateReasonsInput>;
  auto_sync_interval?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  details?: InputMaybe<Array<InputMaybe<OpenStackDrMigrationPlanInstanceDetailInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  updatable?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrMigrationJobStatusEnum {
  CustomizationCreate = 'customization.create',
  CustomizationDelete = 'customization.delete',
  CustomizationStatusCheck = 'customization.status.check',
  Done = 'done',
  Failed = 'failed',
  NotFound = 'not.found',
  PreparationRun = 'preparation.run',
  PreparationStatusCheck = 'preparation.status.check',
  ReplicationDelete = 'replication.delete',
  ReplicationLock = 'replication.lock',
  ReplicationLockStatusCheck = 'replication.lock.status.check',
  ReplicationStatusCheck = 'replication.status.check',
  ReplicationUnlock = 'replication.unlock',
  ReplicationUnlockStatusCheck = 'replication.unlock.status.check',
  Start = 'start',
  Unknown = 'unknown',
  VmCreate = 'vm.create',
  VolumeAttach = 'volume.attach',
  VolumeCreate = 'volume.create',
  VolumeDetach = 'volume.detach',
  VolumeSnapshotCreate = 'volume.snapshot.create'
}

export type OpenStackDrMigrationJobStatusResponse = {
  __typename?: 'OpenStackDrMigrationJobStatusResponse';
  job_type?: Maybe<OpenStackDrMigrationJobTypeEnum | `${OpenStackDrMigrationJobTypeEnum}`>;
  message?: Maybe<OpenStackDrMessage>;
  status?: Maybe<OpenStackDrMigrationJobStatusEnum | `${OpenStackDrMigrationJobStatusEnum}`>;
};

export type OpenStackDrMigrationJobStatusResponseInput = {
  job_type?: InputMaybe<OpenStackDrMigrationJobTypeEnum | `${OpenStackDrMigrationJobTypeEnum}`>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  status?: InputMaybe<OpenStackDrMigrationJobStatusEnum | `${OpenStackDrMigrationJobStatusEnum}`>;
};

export enum OpenStackDrMigrationJobTypeEnum {
  Cutover = 'cutover',
  Simulation = 'simulation'
}

export type OpenStackDrMigrationPlanInstanceDetail = {
  __typename?: 'OpenStackDrMigrationPlanInstanceDetail';
  instance?: Maybe<OpenStackDrInstanceMigrationPlan>;
  networks?: Maybe<Array<Maybe<OpenStackDrInstanceNetworkMigrationPlan>>>;
  security_groups?: Maybe<Array<Maybe<OpenStackDrInstanceSecurityGroupMigrationPlan>>>;
  volumes?: Maybe<Array<Maybe<OpenStackDrInstanceVolumeMigrationPlan>>>;
};

export type OpenStackDrMigrationPlanInstanceDetailInput = {
  instance?: InputMaybe<OpenStackDrInstanceMigrationPlanInput>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceNetworkMigrationPlanInput>>>;
  security_groups?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceSecurityGroupMigrationPlanInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceVolumeMigrationPlanInput>>>;
};

export type OpenStackDrMigrationReplicationStatus = {
  __typename?: 'OpenStackDrMigrationReplicationStatus';
  cause?: Maybe<Scalars['String']['output']>;
  err_code?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<OpenStackDrMigrationReplicationStatusEnum | `${OpenStackDrMigrationReplicationStatusEnum}`>;
  vm_replication_status?: Maybe<Array<Maybe<OpenStackDrMigrationVmStatus>>>;
};

export enum OpenStackDrMigrationReplicationStatusEnum {
  Done = 'done',
  Mirroring = 'mirroring',
  NotFound = 'notFound',
  Running = 'running',
  Switching = 'switching',
  Unknown = 'unknown',
  Updating = 'updating'
}

export type OpenStackDrMigrationReplicationStatusInput = {
  cause?: InputMaybe<Scalars['String']['input']>;
  err_code?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackDrMigrationReplicationStatusEnum | `${OpenStackDrMigrationReplicationStatusEnum}`>;
  vm_replication_status?: InputMaybe<Array<InputMaybe<OpenStackDrMigrationVmStatusInput>>>;
};

export type OpenStackDrMigrationReplicationStatusResponse = {
  __typename?: 'OpenStackDrMigrationReplicationStatusResponse';
  message?: Maybe<OpenStackDrMessage>;
  status?: Maybe<OpenStackDrMigrationReplicationStatus>;
};

export type OpenStackDrMigrationReplicationStatusResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  status?: InputMaybe<OpenStackDrMigrationReplicationStatusInput>;
};

export type OpenStackDrMigrationResponse = {
  __typename?: 'OpenStackDrMigrationResponse';
  message?: Maybe<OpenStackDrMessage>;
  plan?: Maybe<OpenStackDrMigration>;
};

export type OpenStackDrMigrationResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  plan?: InputMaybe<OpenStackDrMigrationInput>;
};

export type OpenStackDrMigrationVmStatus = {
  __typename?: 'OpenStackDrMigrationVmStatus';
  cause?: Maybe<Scalars['String']['output']>;
  err_code?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<OpenStackDrMigrationReplicationStatusEnum | `${OpenStackDrMigrationReplicationStatusEnum}`>;
};

export type OpenStackDrMigrationVmStatusInput = {
  cause?: InputMaybe<Scalars['String']['input']>;
  err_code?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackDrMigrationReplicationStatusEnum | `${OpenStackDrMigrationReplicationStatusEnum}`>;
};

export type OpenStackDrMigrationsResponse = {
  __typename?: 'OpenStackDrMigrationsResponse';
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
  plans?: Maybe<Array<Maybe<OpenStackDrMigration>>>;
};

export type OpenStackDrMigrationsResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
  plans?: InputMaybe<Array<InputMaybe<OpenStackDrMigrationInput>>>;
};

export type OpenStackDrPagination = {
  __typename?: 'OpenStackDrPagination';
  page?: Maybe<Scalars['BigInt']['output']>;
  total_items?: Maybe<Scalars['BigInt']['output']>;
  total_page?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrPaginationInput = {
  page?: InputMaybe<Scalars['BigInt']['input']>;
  total_items?: InputMaybe<Scalars['BigInt']['input']>;
  total_page?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrProtectionClusterHistory = {
  __typename?: 'OpenStackDrProtectionClusterHistory';
  groups?: Maybe<Array<Maybe<OpenStackDrProtectionGroup>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrProtectionClusterHistoryInput = {
  groups?: InputMaybe<Array<InputMaybe<OpenStackDrProtectionGroupInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrProtectionClusterTypeCodeEnum {
  ClusterTypeKubernetes = 'cluster.type.kubernetes',
  ClusterTypeOpenshift = 'cluster.type.openshift',
  ClusterTypeOpenstack = 'cluster.type.openstack',
  ClusterTypeVmware = 'cluster.type.vmware'
}

export type OpenStackDrProtectionGroup = {
  __typename?: 'OpenStackDrProtectionGroup';
  abnormal_state_reasons?: Maybe<OpenStackDrAbnormalStateReasons>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  instances?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  name?: Maybe<Scalars['String']['output']>;
  owner_group?: Maybe<CloudUserGroup>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_point_objective?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective_type?: Maybe<OpenStackDrRecoveryPointObjectiveTypeEnum | `${OpenStackDrRecoveryPointObjectiveTypeEnum}`>;
  recovery_time_objective?: Maybe<Scalars['BigInt']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  snapshot_interval?: Maybe<Scalars['BigInt']['output']>;
  snapshot_interval_type?: Maybe<OpenStackDrScheduleSnapshotIntervalTypeEnum | `${OpenStackDrScheduleSnapshotIntervalTypeEnum}`>;
  state_code?: Maybe<OpenStackDrScheduleStateCodeEnum | `${OpenStackDrScheduleStateCodeEnum}`>;
  updatable?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrProtectionGroupHistory = {
  __typename?: 'OpenStackDrProtectionGroupHistory';
  clusters?: Maybe<Array<Maybe<OpenStackDrProtectionClusterHistory>>>;
};

export type OpenStackDrProtectionGroupHistoryInput = {
  clusters?: InputMaybe<Array<InputMaybe<OpenStackDrProtectionClusterHistoryInput>>>;
};

export type OpenStackDrProtectionGroupInput = {
  abnormal_state_reasons?: InputMaybe<OpenStackDrAbnormalStateReasonsInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  instances?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_group?: InputMaybe<CloudUserGroupInput>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_point_objective?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective_type?: InputMaybe<OpenStackDrRecoveryPointObjectiveTypeEnum | `${OpenStackDrRecoveryPointObjectiveTypeEnum}`>;
  recovery_time_objective?: InputMaybe<Scalars['BigInt']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  snapshot_interval?: InputMaybe<Scalars['BigInt']['input']>;
  snapshot_interval_type?: InputMaybe<OpenStackDrScheduleSnapshotIntervalTypeEnum | `${OpenStackDrScheduleSnapshotIntervalTypeEnum}`>;
  state_code?: InputMaybe<OpenStackDrScheduleStateCodeEnum | `${OpenStackDrScheduleStateCodeEnum}`>;
  updatable?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrProtectionGroupRequest = {
  __typename?: 'OpenStackDrProtectionGroupRequest';
  group?: Maybe<OpenStackDrProtectionGroup>;
};

export type OpenStackDrProtectionGroupRequestInput = {
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
};

export type OpenStackDrProtectionGroupResponse = {
  __typename?: 'OpenStackDrProtectionGroupResponse';
  group?: Maybe<OpenStackDrProtectionGroup>;
  message?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrProtectionGroupResponseInput = {
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  message?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrProtectionGroupSnapshot = {
  __typename?: 'OpenStackDrProtectionGroupSnapshot';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrProtectionGroupSnapshotInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrProtectionGroupsResponse = {
  __typename?: 'OpenStackDrProtectionGroupsResponse';
  groups?: Maybe<Array<Maybe<OpenStackDrProtectionGroup>>>;
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
};

export type OpenStackDrProtectionGroupsResponseInput = {
  groups?: InputMaybe<Array<InputMaybe<OpenStackDrProtectionGroupInput>>>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
};

export type OpenStackDrRecoveryJob = {
  __typename?: 'OpenStackDrRecoveryJob';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  group?: Maybe<OpenStackDrProtectionGroup>;
  id?: Maybe<Scalars['BigInt']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  schedule?: Maybe<CloudSchedule>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryJobFloatingIpStatus = {
  __typename?: 'OpenStackDrRecoveryJobFloatingIpStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  floating_ip?: Maybe<OpenStackCmClusterFloatingIp>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum | `${OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobFloatingIpStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  floating_ip?: InputMaybe<OpenStackCmClusterFloatingIpInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum | `${OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export type OpenStackDrRecoveryJobInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  schedule?: InputMaybe<CloudScheduleInput>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryJobInstanceSpecStatus = {
  __typename?: 'OpenStackDrRecoveryJobInstanceSpecStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  instance_spec?: Maybe<OpenStackCmClusterInstanceSpec>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum | `${OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobInstanceSpecStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  instance_spec?: InputMaybe<OpenStackCmClusterInstanceSpecInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum | `${OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export type OpenStackDrRecoveryJobInstanceStatus = {
  __typename?: 'OpenStackDrRecoveryJobInstanceStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobInstanceStatusResultCodeEnum | `${OpenStackDrRecoveryJobInstanceStatusResultCodeEnum}`>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobInstanceStatusStateCodeEnum | `${OpenStackDrRecoveryJobInstanceStatusStateCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobInstanceStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobInstanceStatusResultCodeEnum | `${OpenStackDrRecoveryJobInstanceStatusResultCodeEnum}`>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobInstanceStatusStateCodeEnum | `${OpenStackDrRecoveryJobInstanceStatusStateCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobInstanceStatusResponse = {
  __typename?: 'OpenStackDrRecoveryJobInstanceStatusResponse';
  instances?: Maybe<Array<Maybe<OpenStackDrRecoveryJobInstanceStatus>>>;
};

export type OpenStackDrRecoveryJobInstanceStatusResponseInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobInstanceStatusInput>>>;
};

export enum OpenStackDrRecoveryJobInstanceStatusResultCodeEnum {
  DrRecoveryInstanceResultCanceled = 'dr.recovery.instance.result.canceled',
  DrRecoveryInstanceResultFailed = 'dr.recovery.instance.result.failed',
  DrRecoveryInstanceResultSuccess = 'dr.recovery.instance.result.success',
  DrRecoveryInstanceResultUnknown = 'dr.recovery.instance.result.unknown'
}

export enum OpenStackDrRecoveryJobInstanceStatusStateCodeEnum {
  DrRecoveryJobInstanceStateBooting = 'dr.recovery.job.instance.state.booting',
  DrRecoveryJobInstanceStateDiagnosing = 'dr.recovery.job.instance.state.diagnosing',
  DrRecoveryJobInstanceStateDone = 'dr.recovery.job.instance.state.done',
  DrRecoveryJobInstanceStateExcepted = 'dr.recovery.job.instance.state.excepted',
  DrRecoveryJobInstanceStateFailed = 'dr.recovery.job.instance.state.failed',
  DrRecoveryJobInstanceStateIgnored = 'dr.recovery.job.instance.state.ignored',
  DrRecoveryJobInstanceStatePreparing = 'dr.recovery.job.instance.state.preparing',
  DrRecoveryJobInstanceStateReady = 'dr.recovery.job.instance.state.ready',
  DrRecoveryJobInstanceStateRunning = 'dr.recovery.job.instance.state.running',
  DrRecoveryJobInstanceStateSuccess = 'dr.recovery.job.instance.state.success'
}

export type OpenStackDrRecoveryJobKeyPairStatus = {
  __typename?: 'OpenStackDrRecoveryJobKeyPairStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  keypair?: Maybe<OpenStackCmClusterKeyPair>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum | `${OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobKeyPairStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  keypair?: InputMaybe<OpenStackCmClusterKeyPairInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum | `${OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export type OpenStackDrRecoveryJobMonitorsResponse = {
  __typename?: 'OpenStackDrRecoveryJobMonitorsResponse';
  floating_ips?: Maybe<Array<Maybe<OpenStackDrRecoveryJobFloatingIpStatus>>>;
  instance_specs?: Maybe<Array<Maybe<OpenStackDrRecoveryJobInstanceSpecStatus>>>;
  instances?: Maybe<Array<Maybe<OpenStackDrRecoveryJobInstanceStatus>>>;
  keypairs?: Maybe<Array<Maybe<OpenStackDrRecoveryJobKeyPairStatus>>>;
  networks?: Maybe<Array<Maybe<OpenStackDrRecoveryJobNetworkStatus>>>;
  routers?: Maybe<Array<Maybe<OpenStackDrRecoveryJobRouterStatus>>>;
  security_groups?: Maybe<Array<Maybe<OpenStackDrRecoveryJobSecurityGroupStatus>>>;
  status?: Maybe<OpenStackDrRecoveryJobStatus>;
  subnets?: Maybe<Array<Maybe<OpenStackDrRecoveryJobSubnetStatus>>>;
  tenants?: Maybe<Array<Maybe<OpenStackDrRecoveryJobTenantStatus>>>;
  volumes?: Maybe<Array<Maybe<OpenStackDrRecoveryJobVolumeStatus>>>;
};

export type OpenStackDrRecoveryJobMonitorsResponseInput = {
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobFloatingIpStatusInput>>>;
  instance_specs?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobInstanceSpecStatusInput>>>;
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobInstanceStatusInput>>>;
  keypairs?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobKeyPairStatusInput>>>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobNetworkStatusInput>>>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobRouterStatusInput>>>;
  security_groups?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobSecurityGroupStatusInput>>>;
  status?: InputMaybe<OpenStackDrRecoveryJobStatusInput>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobSubnetStatusInput>>>;
  tenants?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobTenantStatusInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobVolumeStatusInput>>>;
};

export type OpenStackDrRecoveryJobNetworkStatus = {
  __typename?: 'OpenStackDrRecoveryJobNetworkStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  network?: Maybe<OpenStackCmClusterNetwork>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobNetworkStatusResultCodeEnum | `${OpenStackDrRecoveryJobNetworkStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobNetworkStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobNetworkStatusResultCodeEnum | `${OpenStackDrRecoveryJobNetworkStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobNetworkStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export enum OpenStackDrRecoveryJobOperationCodeEnum {
  Cancel = 'cancel',
  CancelConfirm = 'cancel-confirm',
  Confirm = 'confirm',
  IgnoreRollback = 'ignore-rollback',
  Pause = 'pause',
  Retry = 'retry',
  RetryConfirm = 'retry-confirm',
  RetryRollback = 'retry-rollback',
  Rollback = 'rollback',
  Run = 'run'
}

export enum OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum {
  DrRecoveryRecoveryPointTypeLatest = 'dr.recovery.recovery_point.type.latest',
  DrRecoveryRecoveryPointTypeLatestSnapshot = 'dr.recovery.recovery_point.type.latest_snapshot',
  DrRecoveryRecoveryPointTypeSnapshot = 'dr.recovery.recovery_point.type.snapshot'
}

export type OpenStackDrRecoveryJobResponse = {
  __typename?: 'OpenStackDrRecoveryJobResponse';
  job?: Maybe<OpenStackDrRecoveryJobResponseJob>;
  message?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrRecoveryJobResponseInput = {
  job?: InputMaybe<OpenStackDrRecoveryJobResponseJobInput>;
  message?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrRecoveryJobResponseJob = {
  __typename?: 'OpenStackDrRecoveryJobResponseJob';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  group?: Maybe<OpenStackDrProtectionGroup>;
  id?: Maybe<Scalars['BigInt']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  operator?: Maybe<CloudUser>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  schedule?: Maybe<CloudSchedule>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryJobResponseJobInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  operator?: InputMaybe<CloudUserInput>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  schedule?: InputMaybe<CloudScheduleInput>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryJobRouterStatus = {
  __typename?: 'OpenStackDrRecoveryJobRouterStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobRouterStatusResultCodeEnum | `${OpenStackDrRecoveryJobRouterStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  router?: Maybe<OpenStackCmClusterRouter>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobRouterStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobRouterStatusResultCodeEnum | `${OpenStackDrRecoveryJobRouterStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  router?: InputMaybe<OpenStackCmClusterRouterInput>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobRouterStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export type OpenStackDrRecoveryJobSecurityGroupStatus = {
  __typename?: 'OpenStackDrRecoveryJobSecurityGroupStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum | `${OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  security_group?: Maybe<OpenStackCmClusterSecurityGroup>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum | `${OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobSecurityGroupStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum | `${OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  security_group?: InputMaybe<OpenStackCmClusterSecurityGroupInput>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum | `${OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum {
  Canceled = 'canceled',
  Failed = 'failed',
  Success = 'success'
}

export enum OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum {
  Done = 'done',
  Excepted = 'excepted',
  Failed = 'failed',
  Preparing = 'preparing',
  Success = 'success'
}

export enum OpenStackDrRecoveryJobStateCodeEnum {
  DrRecoveryJobStateCanceling = 'dr.recovery.job.state.canceling',
  DrRecoveryJobStateClearing = 'dr.recovery.job.state.clearing',
  DrRecoveryJobStateClearFailed = 'dr.recovery.job.state.clear-failed',
  DrRecoveryJobStateCompleted = 'dr.recovery.job.state.completed',
  DrRecoveryJobStateFinished = 'dr.recovery.job.state.finished',
  DrRecoveryJobStatePaused = 'dr.recovery.job.state.paused',
  DrRecoveryJobStatePending = 'dr.recovery.job.state.pending',
  DrRecoveryJobStateReporting = 'dr.recovery.job.state.reporting',
  DrRecoveryJobStateRunning = 'dr.recovery.job.state.running',
  DrRecoveryJobStateWaiting = 'dr.recovery.job.state.waiting'
}

export type OpenStackDrRecoveryJobStatus = {
  __typename?: 'OpenStackDrRecoveryJobStatus';
  elapsed_time?: Maybe<Scalars['BigInt']['output']>;
  failed_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobStatusResultCodeEnum | `${OpenStackDrRecoveryJobStatusResultCodeEnum}`>;
  resume_at?: Maybe<Scalars['BigInt']['output']>;
  rollback_at?: Maybe<Scalars['BigInt']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  warning_flag?: Maybe<Scalars['Boolean']['output']>;
  warning_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
};

export enum OpenStackDrRecoveryJobStatusCodeEnum {
  Done = 'done',
  Running = 'running',
  Waiting = 'waiting'
}

export type OpenStackDrRecoveryJobStatusInput = {
  elapsed_time?: InputMaybe<Scalars['BigInt']['input']>;
  failed_reasons?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobStatusResultCodeEnum | `${OpenStackDrRecoveryJobStatusResultCodeEnum}`>;
  resume_at?: InputMaybe<Scalars['BigInt']['input']>;
  rollback_at?: InputMaybe<Scalars['BigInt']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  warning_flag?: InputMaybe<Scalars['Boolean']['input']>;
  warning_reasons?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
};

export type OpenStackDrRecoveryJobStatusResponse = {
  __typename?: 'OpenStackDrRecoveryJobStatusResponse';
  status?: Maybe<OpenStackDrRecoveryJobStatus>;
};

export type OpenStackDrRecoveryJobStatusResponseInput = {
  status?: InputMaybe<OpenStackDrRecoveryJobStatusInput>;
};

export enum OpenStackDrRecoveryJobStatusResultCodeEnum {
  DrRecoveryResultCanceled = 'dr.recovery.result.canceled',
  DrRecoveryResultFailed = 'dr.recovery.result.failed',
  DrRecoveryResultPartialSuccess = 'dr.recovery.result.partial_success',
  DrRecoveryResultSuccess = 'dr.recovery.result.success'
}

export enum OpenStackDrRecoveryJobStatusTypeCodeEnum {
  DrMigrationTaskCreate = 'dr.migration.task.create',
  DrMigrationTaskDelete = 'dr.migration.task.delete'
}

export type OpenStackDrRecoveryJobSubnetStatus = {
  __typename?: 'OpenStackDrRecoveryJobSubnetStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobSubnetStatusResultCodeEnum | `${OpenStackDrRecoveryJobSubnetStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  subnet?: Maybe<OpenStackCmClusterSubnet>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobSubnetStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobSubnetStatusResultCodeEnum | `${OpenStackDrRecoveryJobSubnetStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  subnet?: InputMaybe<OpenStackCmClusterSubnetInput>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobSubnetStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export type OpenStackDrRecoveryJobTenantStatus = {
  __typename?: 'OpenStackDrRecoveryJobTenantStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobTenantStatusResultCodeEnum | `${OpenStackDrRecoveryJobTenantStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export type OpenStackDrRecoveryJobTenantStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobTenantStatusResultCodeEnum | `${OpenStackDrRecoveryJobTenantStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum | `${OpenStackDrRecoveryJobStatusCodeEnum}`>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
};

export enum OpenStackDrRecoveryJobTenantStatusResultCodeEnum {
  Canceled = 'canceled',
  Excepted = 'excepted',
  Failed = 'failed',
  Ignored = 'ignored',
  Success = 'success'
}

export type OpenStackDrRecoveryJobVolumeStatus = {
  __typename?: 'OpenStackDrRecoveryJobVolumeStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryJobVolumeStatusResultCodeEnum | `${OpenStackDrRecoveryJobVolumeStatusResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobVolumeStatusStateCodeEnum | `${OpenStackDrRecoveryJobVolumeStatusStateCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
  volume?: Maybe<OpenStackCmClusterVolume>;
};

export type OpenStackDrRecoveryJobVolumeStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobVolumeStatusResultCodeEnum | `${OpenStackDrRecoveryJobVolumeStatusResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobVolumeStatusStateCodeEnum | `${OpenStackDrRecoveryJobVolumeStatusStateCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum | `${OpenStackDrRecoveryJobStatusTypeCodeEnum}`>;
  volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
};

export type OpenStackDrRecoveryJobVolumeStatusResponse = {
  __typename?: 'OpenStackDrRecoveryJobVolumeStatusResponse';
  volumes?: Maybe<Array<Maybe<OpenStackDrRecoveryJobVolumeStatus>>>;
};

export type OpenStackDrRecoveryJobVolumeStatusResponseInput = {
  volumes?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobVolumeStatusInput>>>;
};

export enum OpenStackDrRecoveryJobVolumeStatusResultCodeEnum {
  DrRecoveryVolumeResultCanceled = 'dr.recovery.volume.result.canceled',
  DrRecoveryVolumeResultFailed = 'dr.recovery.volume.result.failed',
  DrRecoveryVolumeResultSuccess = 'dr.recovery.volume.result.success'
}

export enum OpenStackDrRecoveryJobVolumeStatusStateCodeEnum {
  DrRecoveryJobVolumeStateDone = 'dr.recovery.job.volume.state.done',
  DrRecoveryJobVolumeStateExcepted = 'dr.recovery.job.volume.state.excepted',
  DrRecoveryJobVolumeStateFailed = 'dr.recovery.job.volume.state.failed',
  DrRecoveryJobVolumeStatePreparing = 'dr.recovery.job.volume.state.preparing',
  DrRecoveryJobVolumeStateSuccess = 'dr.recovery.job.volume.state.success'
}

export type OpenStackDrRecoveryJobsResponse = {
  __typename?: 'OpenStackDrRecoveryJobsResponse';
  jobs?: Maybe<Array<Maybe<OpenStackDrRecoveryJobsResponseJobs>>>;
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
};

export type OpenStackDrRecoveryJobsResponseInput = {
  jobs?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobsResponseJobsInput>>>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
};

export type OpenStackDrRecoveryJobsResponseJobs = {
  __typename?: 'OpenStackDrRecoveryJobsResponseJobs';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  group?: Maybe<OpenStackDrProtectionGroup>;
  id?: Maybe<Scalars['BigInt']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  operator?: Maybe<CloudUser>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  schedule?: Maybe<CloudSchedule>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  type_code?: Maybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryJobsResponseJobsInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum | `${OpenStackDrRecoveryJobOperationCodeEnum}`>;
  operator?: InputMaybe<CloudUserInput>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  schedule?: InputMaybe<CloudScheduleInput>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum | `${OpenStackDrRecoveryJobStateCodeEnum}`>;
  type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryPlan = {
  __typename?: 'OpenStackDrRecoveryPlan';
  abnormal_state_reasons?: Maybe<OpenStackDrAbnormalStateReasons>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  detail?: Maybe<OpenStackDrRecoveryPlanDetail>;
  direction_code?: Maybe<OpenStackDrRecoveryPlanDirectionCodeEnum | `${OpenStackDrRecoveryPlanDirectionCodeEnum}`>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mirror_state_code?: Maybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum | `${OpenStackDrRecoveryPlanMirrorStateCodeEnum}`>;
  name?: Maybe<Scalars['String']['output']>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  remarks?: Maybe<Scalars['String']['output']>;
  snapshot_retention_count?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryPlanStateCodeEnum | `${OpenStackDrRecoveryPlanStateCodeEnum}`>;
  updatable?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryPlanDetail = {
  __typename?: 'OpenStackDrRecoveryPlanDetail';
  availability_zones?: Maybe<Array<Maybe<OpenStackDrAvailabilityZoneRecoveryPlan>>>;
  external_networks?: Maybe<Array<Maybe<OpenStackDrExternalNetworkRecoveryPlan>>>;
  extra_remote_security_groups?: Maybe<Array<Maybe<OpenStackCmClusterSecurityGroup>>>;
  floating_ips?: Maybe<Array<Maybe<OpenStackDrFloatingIpRecoveryPlan>>>;
  instances?: Maybe<Array<Maybe<OpenStackDrInstanceRecoveryPlan>>>;
  routers?: Maybe<Array<Maybe<OpenStackDrRouterRecoveryPlan>>>;
  storages?: Maybe<Array<Maybe<OpenStackDrStorageRecoveryPlan>>>;
  tenants?: Maybe<Array<Maybe<OpenStackDrTenantRecoveryPlan>>>;
  volumes?: Maybe<Array<Maybe<OpenStackDrVolumeRecoveryPlan>>>;
};

export type OpenStackDrRecoveryPlanDetailInput = {
  availability_zones?: InputMaybe<Array<InputMaybe<OpenStackDrAvailabilityZoneRecoveryPlanInput>>>;
  external_networks?: InputMaybe<Array<InputMaybe<OpenStackDrExternalNetworkRecoveryPlanInput>>>;
  extra_remote_security_groups?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSecurityGroupInput>>>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackDrFloatingIpRecoveryPlanInput>>>;
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceRecoveryPlanInput>>>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackDrRouterRecoveryPlanInput>>>;
  storages?: InputMaybe<Array<InputMaybe<OpenStackDrStorageRecoveryPlanInput>>>;
  tenants?: InputMaybe<Array<InputMaybe<OpenStackDrTenantRecoveryPlanInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackDrVolumeRecoveryPlanInput>>>;
};

export enum OpenStackDrRecoveryPlanDirectionCodeEnum {
  DrRecoveryDirectionFailback = 'dr.recovery.direction.failback',
  DrRecoveryDirectionFailover = 'dr.recovery.direction.failover'
}

export type OpenStackDrRecoveryPlanInput = {
  abnormal_state_reasons?: InputMaybe<OpenStackDrAbnormalStateReasonsInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  detail?: InputMaybe<OpenStackDrRecoveryPlanDetailInput>;
  direction_code?: InputMaybe<OpenStackDrRecoveryPlanDirectionCodeEnum | `${OpenStackDrRecoveryPlanDirectionCodeEnum}`>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mirror_state_code?: InputMaybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum | `${OpenStackDrRecoveryPlanMirrorStateCodeEnum}`>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  snapshot_retention_count?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryPlanStateCodeEnum | `${OpenStackDrRecoveryPlanStateCodeEnum}`>;
  updatable?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrRecoveryPlanMirrorStateCodeEnum {
  DrRecoveryPlanStateMirroring = 'dr.recovery.plan.state.mirroring',
  DrRecoveryPlanStatePaused = 'dr.recovery.plan.state.paused',
  DrRecoveryPlanStatePrepare = 'dr.recovery.plan.state.prepare',
  DrRecoveryPlanStateStopped = 'dr.recovery.plan.state.stopped',
  DrRecoveryPlanStateWarning = 'dr.recovery.plan.state.warning'
}

export type OpenStackDrRecoveryPlanRequest = {
  __typename?: 'OpenStackDrRecoveryPlanRequest';
  force?: Maybe<Scalars['Boolean']['output']>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
};

export type OpenStackDrRecoveryPlanRequestInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
};

export type OpenStackDrRecoveryPlanResponse = {
  __typename?: 'OpenStackDrRecoveryPlanResponse';
  message?: Maybe<OpenStackDrMessage>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
};

export type OpenStackDrRecoveryPlanResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
};

export enum OpenStackDrRecoveryPlanStateCodeEnum {
  DrRecoveryPlanStateCritical = 'dr.recovery.plan.state.critical',
  DrRecoveryPlanStateEmergency = 'dr.recovery.plan.state.emergency',
  DrRecoveryPlanStateNormal = 'dr.recovery.plan.state.normal',
  DrRecoveryPlanStateWarning = 'dr.recovery.plan.state.warning'
}

export type OpenStackDrRecoveryPlansResponse = {
  __typename?: 'OpenStackDrRecoveryPlansResponse';
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
  plans?: Maybe<Array<Maybe<OpenStackDrRecoveryPlan>>>;
};

export type OpenStackDrRecoveryPlansResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
  plans?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryPlanInput>>>;
};

export enum OpenStackDrRecoveryPointObjectiveTypeEnum {
  RecoveryPointObjectiveTypeDay = 'recovery.point.objective.type.day',
  RecoveryPointObjectiveTypeHour = 'recovery.point.objective.type.hour',
  RecoveryPointObjectiveTypeMinute = 'recovery.point.objective.type.minute'
}

export type OpenStackDrRecoveryResult = {
  __typename?: 'OpenStackDrRecoveryResult';
  approver_account?: Maybe<Scalars['String']['output']>;
  approver_department?: Maybe<Scalars['String']['output']>;
  approver_id?: Maybe<Scalars['BigInt']['output']>;
  approver_name?: Maybe<Scalars['String']['output']>;
  approver_position?: Maybe<Scalars['String']['output']>;
  elapsed_time?: Maybe<Scalars['BigInt']['output']>;
  failed_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  instances?: Maybe<Array<Maybe<OpenStackDrInstanceRecoveryResult>>>;
  operator_account?: Maybe<Scalars['String']['output']>;
  operator_department?: Maybe<Scalars['String']['output']>;
  operator_id?: Maybe<Scalars['BigInt']['output']>;
  operator_name?: Maybe<Scalars['String']['output']>;
  operator_position?: Maybe<Scalars['String']['output']>;
  protection_cluster_id?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_name?: Maybe<Scalars['String']['output']>;
  protection_cluster_remarks?: Maybe<Scalars['String']['output']>;
  protection_cluster_type_code?: Maybe<Scalars['String']['output']>;
  protection_group_id?: Maybe<Scalars['BigInt']['output']>;
  protection_group_name?: Maybe<Scalars['String']['output']>;
  protection_group_remarks?: Maybe<Scalars['String']['output']>;
  recovery_cluster_id?: Maybe<Scalars['BigInt']['output']>;
  recovery_cluster_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_remarks?: Maybe<Scalars['String']['output']>;
  recovery_cluster_type_code?: Maybe<Scalars['String']['output']>;
  recovery_direction_code?: Maybe<OpenStackDrRecoveryPlanDirectionCodeEnum | `${OpenStackDrRecoveryPlanDirectionCodeEnum}`>;
  recovery_plan_id?: Maybe<Scalars['BigInt']['output']>;
  recovery_plan_name?: Maybe<Scalars['String']['output']>;
  recovery_plan_remarks?: Maybe<Scalars['String']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective_type?: Maybe<OpenStackDrRecoveryPointObjectiveTypeEnum | `${OpenStackDrRecoveryPointObjectiveTypeEnum}`>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  recovery_time_objective?: Maybe<Scalars['BigInt']['output']>;
  recovery_type_code?: Maybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  result_code?: Maybe<OpenStackDrRecoveryResultResultCodeEnum | `${OpenStackDrRecoveryResultResultCodeEnum}`>;
  routers?: Maybe<Array<Maybe<OpenStackDrRouterRecoveryResult>>>;
  schedule_type?: Maybe<CloudScheduleTypeEnum | `${CloudScheduleTypeEnum}`>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  task_logs?: Maybe<Array<Maybe<OpenStackDrRecoveryTaskLog>>>;
  volumes?: Maybe<Array<Maybe<OpenStackDrVolumeRecoveryResult>>>;
  warning_flag?: Maybe<Scalars['Boolean']['output']>;
  warning_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
};

export type OpenStackDrRecoveryResultInput = {
  approver_account?: InputMaybe<Scalars['String']['input']>;
  approver_department?: InputMaybe<Scalars['String']['input']>;
  approver_id?: InputMaybe<Scalars['BigInt']['input']>;
  approver_name?: InputMaybe<Scalars['String']['input']>;
  approver_position?: InputMaybe<Scalars['String']['input']>;
  elapsed_time?: InputMaybe<Scalars['BigInt']['input']>;
  failed_reasons?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceRecoveryResultInput>>>;
  operator_account?: InputMaybe<Scalars['String']['input']>;
  operator_department?: InputMaybe<Scalars['String']['input']>;
  operator_id?: InputMaybe<Scalars['BigInt']['input']>;
  operator_name?: InputMaybe<Scalars['String']['input']>;
  operator_position?: InputMaybe<Scalars['String']['input']>;
  protection_cluster_id?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster_remarks?: InputMaybe<Scalars['String']['input']>;
  protection_cluster_type_code?: InputMaybe<Scalars['String']['input']>;
  protection_group_id?: InputMaybe<Scalars['BigInt']['input']>;
  protection_group_name?: InputMaybe<Scalars['String']['input']>;
  protection_group_remarks?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_id?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_cluster_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_remarks?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_type_code?: InputMaybe<Scalars['String']['input']>;
  recovery_direction_code?: InputMaybe<OpenStackDrRecoveryPlanDirectionCodeEnum | `${OpenStackDrRecoveryPlanDirectionCodeEnum}`>;
  recovery_plan_id?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_plan_name?: InputMaybe<Scalars['String']['input']>;
  recovery_plan_remarks?: InputMaybe<Scalars['String']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective_type?: InputMaybe<OpenStackDrRecoveryPointObjectiveTypeEnum | `${OpenStackDrRecoveryPointObjectiveTypeEnum}`>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  recovery_time_objective?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum | `${OpenStackDrRecoveryTypeEnum}`>;
  result_code?: InputMaybe<OpenStackDrRecoveryResultResultCodeEnum | `${OpenStackDrRecoveryResultResultCodeEnum}`>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackDrRouterRecoveryResultInput>>>;
  schedule_type?: InputMaybe<CloudScheduleTypeEnum | `${CloudScheduleTypeEnum}`>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  task_logs?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryTaskLogInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackDrVolumeRecoveryResultInput>>>;
  warning_flag?: InputMaybe<Scalars['Boolean']['input']>;
  warning_reasons?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
};

export type OpenStackDrRecoveryResultReportResponse = {
  __typename?: 'OpenStackDrRecoveryResultReportResponse';
  message?: Maybe<OpenStackDrMessage>;
  report?: Maybe<OpenStackDrRecoveryResult>;
};

export type OpenStackDrRecoveryResultReportResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  report?: InputMaybe<OpenStackDrRecoveryResultInput>;
};

export type OpenStackDrRecoveryResultReportsResponse = {
  __typename?: 'OpenStackDrRecoveryResultReportsResponse';
  message?: Maybe<OpenStackDrMessage>;
  pagination?: Maybe<OpenStackDrPagination>;
  reports?: Maybe<Array<Maybe<OpenStackDrRecoveryResult>>>;
};

export type OpenStackDrRecoveryResultReportsResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  pagination?: InputMaybe<OpenStackDrPaginationInput>;
  reports?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryResultInput>>>;
};

export enum OpenStackDrRecoveryResultResultCodeEnum {
  DrRecoveryResultCanceled = 'dr.recovery.result.canceled',
  DrRecoveryResultFailed = 'dr.recovery.result.failed',
  DrRecoveryResultPartialSuccess = 'dr.recovery.result.partial_success',
  DrRecoveryResultSuccess = 'dr.recovery.result.success'
}

export type OpenStackDrRecoveryTaskLog = {
  __typename?: 'OpenStackDrRecoveryTaskLog';
  code?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  log_dt?: Maybe<Scalars['BigInt']['output']>;
  log_seq?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryTaskLogInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  log_dt?: InputMaybe<Scalars['BigInt']['input']>;
  log_seq?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryTaskLogsResponse = {
  __typename?: 'OpenStackDrRecoveryTaskLogsResponse';
  task_logs?: Maybe<Array<Maybe<OpenStackDrRecoveryTaskLog>>>;
};

export type OpenStackDrRecoveryTaskLogsResponseInput = {
  task_logs?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryTaskLogInput>>>;
};

export enum OpenStackDrRecoveryTypeEnum {
  DrRecoveryTypeMigration = 'dr.recovery.type.migration',
  DrRecoveryTypeSimulation = 'dr.recovery.type.simulation'
}

export enum OpenStackDrReportResultEnum {
  DrRecoveryResultCanceled = 'dr.recovery.result.canceled',
  DrRecoveryResultFailed = 'dr.recovery.result.failed',
  DrRecoveryResultPartialSuccess = 'dr.recovery.result.partial_success',
  DrRecoveryResultSuccess = 'dr.recovery.result.success'
}

export type OpenStackDrRetryInstancesRequest = {
  __typename?: 'OpenStackDrRetryInstancesRequest';
  instances?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
};

export type OpenStackDrRetryInstancesRequestInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
};

export type OpenStackDrRouterRecoveryPlan = {
  __typename?: 'OpenStackDrRouterRecoveryPlan';
  protection_cluster_router?: Maybe<OpenStackCmClusterRouter>;
  recovery_cluster_external_network?: Maybe<OpenStackCmClusterNetwork>;
  recovery_cluster_external_network_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_external_network_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_cluster_external_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface>>>;
  recovery_type_code?: Maybe<OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export type OpenStackDrRouterRecoveryPlanInput = {
  protection_cluster_router?: InputMaybe<OpenStackCmClusterRouterInput>;
  recovery_cluster_external_network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_cluster_external_network_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_external_network_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_cluster_external_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkRoutingInterfaceInput>>>;
  recovery_type_code?: InputMaybe<OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export enum OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanNetworkRecoveryTypeMirroring = 'dr.recovery.plan.network.recovery.type.mirroring'
}

export type OpenStackDrRouterRecoveryResult = {
  __typename?: 'OpenStackDrRouterRecoveryResult';
  protection_cluster_router?: Maybe<OpenStackCmClusterRouter>;
  recovery_cluster_router?: Maybe<OpenStackCmClusterRouter>;
};

export type OpenStackDrRouterRecoveryResultInput = {
  protection_cluster_router?: InputMaybe<OpenStackCmClusterRouterInput>;
  recovery_cluster_router?: InputMaybe<OpenStackCmClusterRouterInput>;
};

export enum OpenStackDrScheduleSnapshotIntervalTypeEnum {
  SnapshotIntervalTypeDaily = 'snapshot.interval.type.daily',
  SnapshotIntervalTypeHourly = 'snapshot.interval.type.hourly',
  SnapshotIntervalTypeMinutely = 'snapshot.interval.type.minutely'
}

export enum OpenStackDrScheduleStateCodeEnum {
  DrProtectionGroupStateCritical = 'dr.protection.group.state.critical',
  DrProtectionGroupStateEmergency = 'dr.protection.group.state.emergency',
  DrProtectionGroupStateNormal = 'dr.protection.group.state.normal',
  DrProtectionGroupStateWarning = 'dr.protection.group.state.warning'
}

export type OpenStackDrSnapshotMessageResponse = {
  __typename?: 'OpenStackDrSnapshotMessageResponse';
  message?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrSnapshotMessageResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrSnapshotsResponse = {
  __typename?: 'OpenStackDrSnapshotsResponse';
  message?: Maybe<OpenStackDrMessage>;
  snapshots?: Maybe<Array<Maybe<OpenStackDrProtectionGroupSnapshot>>>;
};

export type OpenStackDrSnapshotsResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenStackDrProtectionGroupSnapshotInput>>>;
};

export type OpenStackDrStorageRecoveryPlan = {
  __typename?: 'OpenStackDrStorageRecoveryPlan';
  protection_cluster_storage?: Maybe<OpenStackCmClusterStorage>;
  recovery_cluster_storage?: Maybe<OpenStackCmClusterStorage>;
  recovery_cluster_storage_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_storage_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_type_code?: Maybe<OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum}`>;
  unavailable_flag?: Maybe<Scalars['Boolean']['output']>;
  unavailable_reason?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrStorageRecoveryPlanInput = {
  protection_cluster_storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  recovery_cluster_storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  recovery_cluster_storage_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_storage_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum}`>;
  unavailable_flag?: InputMaybe<Scalars['Boolean']['input']>;
  unavailable_reason?: InputMaybe<OpenStackDrMessageInput>;
};

export enum OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanStorageRecoveryTypeMapping = 'dr.recovery.plan.storage.recovery.type.mapping'
}

export type OpenStackDrSummaryClustersResponse = {
  __typename?: 'OpenStackDrSummaryClustersResponse';
  message?: Maybe<OpenStackDrMessage>;
  summary?: Maybe<OpenStackDrSummaryClustersResponseSummary>;
};

export type OpenStackDrSummaryClustersResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  summary?: InputMaybe<OpenStackDrSummaryClustersResponseSummaryInput>;
};

export type OpenStackDrSummaryClustersResponseSummary = {
  __typename?: 'OpenStackDrSummaryClustersResponseSummary';
  active_cluster?: Maybe<Scalars['BigInt']['output']>;
  inactive_cluster?: Maybe<Scalars['BigInt']['output']>;
  total_cluster?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrSummaryClustersResponseSummaryInput = {
  active_cluster?: InputMaybe<Scalars['BigInt']['input']>;
  inactive_cluster?: InputMaybe<Scalars['BigInt']['input']>;
  total_cluster?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrSummaryGroupsResponse = {
  __typename?: 'OpenStackDrSummaryGroupsResponse';
  message?: Maybe<OpenStackDrMessage>;
  summary?: Maybe<OpenStackDrSummaryGroupsResponseSummary>;
};

export type OpenStackDrSummaryGroupsResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  summary?: InputMaybe<OpenStackDrSummaryGroupsResponseSummaryInput>;
};

export type OpenStackDrSummaryGroupsResponseSummary = {
  __typename?: 'OpenStackDrSummaryGroupsResponseSummary';
  critical_group?: Maybe<Scalars['BigInt']['output']>;
  emergency_group?: Maybe<Scalars['BigInt']['output']>;
  normal_group?: Maybe<Scalars['BigInt']['output']>;
  total_group?: Maybe<Scalars['BigInt']['output']>;
  warning_group?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrSummaryGroupsResponseSummaryInput = {
  critical_group?: InputMaybe<Scalars['BigInt']['input']>;
  emergency_group?: InputMaybe<Scalars['BigInt']['input']>;
  normal_group?: InputMaybe<Scalars['BigInt']['input']>;
  total_group?: InputMaybe<Scalars['BigInt']['input']>;
  warning_group?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrSummaryInstancesResponse = {
  __typename?: 'OpenStackDrSummaryInstancesResponse';
  message?: Maybe<OpenStackDrMessage>;
  summary?: Maybe<OpenStackDrSummaryInstancesSummary>;
};

export type OpenStackDrSummaryInstancesResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  summary?: InputMaybe<OpenStackDrSummaryInstancesSummaryInput>;
};

export type OpenStackDrSummaryInstancesSummary = {
  __typename?: 'OpenStackDrSummaryInstancesSummary';
  protection_instance?: Maybe<Scalars['BigInt']['output']>;
  total_instance?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrSummaryInstancesSummaryInput = {
  protection_instance?: InputMaybe<Scalars['BigInt']['input']>;
  total_instance?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrSummaryJobsResponse = {
  __typename?: 'OpenStackDrSummaryJobsResponse';
  message?: Maybe<OpenStackDrMessage>;
  summary?: Maybe<Array<Maybe<OpenStackDrSummaryJobsResponseSummary>>>;
};

export type OpenStackDrSummaryJobsResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  summary?: InputMaybe<Array<InputMaybe<OpenStackDrSummaryJobsResponseSummaryInput>>>;
};

export type OpenStackDrSummaryJobsResponseSummary = {
  __typename?: 'OpenStackDrSummaryJobsResponseSummary';
  date?: Maybe<Scalars['String']['output']>;
  fail?: Maybe<Scalars['BigInt']['output']>;
  success?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrSummaryJobsResponseSummaryInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  fail?: InputMaybe<Scalars['BigInt']['input']>;
  success?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrSummaryVolumesResponse = {
  __typename?: 'OpenStackDrSummaryVolumesResponse';
  message?: Maybe<OpenStackDrMessage>;
  summary?: Maybe<OpenStackDrSummaryVolumesResponseSummary>;
};

export type OpenStackDrSummaryVolumesResponseInput = {
  message?: InputMaybe<OpenStackDrMessageInput>;
  summary?: InputMaybe<OpenStackDrSummaryVolumesResponseSummaryInput>;
};

export type OpenStackDrSummaryVolumesResponseSummary = {
  __typename?: 'OpenStackDrSummaryVolumesResponseSummary';
  protection_volume?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrSummaryVolumesResponseSummaryInput = {
  protection_volume?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrTenantRecoveryPlan = {
  __typename?: 'OpenStackDrTenantRecoveryPlan';
  protection_cluster_tenant?: Maybe<OpenStackCmClusterTenant>;
  recovery_cluster_tenant?: Maybe<OpenStackCmClusterTenant>;
  recovery_cluster_tenant_mirror_name?: Maybe<Scalars['String']['output']>;
  recovery_cluster_tenant_mirror_name_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_tenant_mirror_name_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_type_code?: Maybe<OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export type OpenStackDrTenantRecoveryPlanInput = {
  protection_cluster_tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  recovery_cluster_tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  recovery_cluster_tenant_mirror_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_tenant_mirror_name_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_tenant_mirror_name_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum}`>;
};

export enum OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanTenantRecoveryTypeMirroring = 'dr.recovery.plan.tenant.recovery.type.mirroring'
}

export type OpenStackDrUnavailableInstancesResponse = {
  __typename?: 'OpenStackDrUnavailableInstancesResponse';
  instances?: Maybe<Array<Maybe<OpenStackDrUnavailableInstancesResponseInstances>>>;
  message?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrUnavailableInstancesResponseInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrUnavailableInstancesResponseInstancesInput>>>;
  message?: InputMaybe<OpenStackDrMessageInput>;
};

export type OpenStackDrUnavailableInstancesResponseInstances = {
  __typename?: 'OpenStackDrUnavailableInstancesResponseInstances';
  instance?: Maybe<OpenStackCmClusterInstance>;
  unavailable_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
};

export type OpenStackDrUnavailableInstancesResponseInstancesInput = {
  instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  unavailable_reasons?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
};

export type OpenStackDrUpdateRecoveryJobRequest = {
  __typename?: 'OpenStackDrUpdateRecoveryJobRequest';
  force?: Maybe<Scalars['Boolean']['output']>;
  job?: Maybe<OpenStackDrRecoveryJob>;
};

export type OpenStackDrUpdateRecoveryJobRequestInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  job?: InputMaybe<OpenStackDrRecoveryJobInput>;
};

export type OpenStackDrUsable = {
  __typename?: 'OpenStackDrUsable';
  usable?: Maybe<Scalars['Boolean']['output']>;
};

export type OpenStackDrUsableInput = {
  usable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OpenStackDrVolumeRecoveryPlan = {
  __typename?: 'OpenStackDrVolumeRecoveryPlan';
  protection_cluster_volume?: Maybe<OpenStackCmClusterVolume>;
  recovery_cluster_storage?: Maybe<OpenStackCmClusterStorage>;
  recovery_cluster_storage_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_storage_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_type_code?: Maybe<OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum}`>;
  unavailable_flag?: Maybe<Scalars['Boolean']['output']>;
  unavailable_reason?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrVolumeRecoveryPlanInput = {
  protection_cluster_volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
  recovery_cluster_storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  recovery_cluster_storage_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_storage_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum | `${OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum}`>;
  unavailable_flag?: InputMaybe<Scalars['Boolean']['input']>;
  unavailable_reason?: InputMaybe<OpenStackDrMessageInput>;
};

export enum OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanVolumeRecoveryTypeMirroring = 'dr.recovery.plan.volume.recovery.type.mirroring'
}

export type OpenStackDrVolumeRecoveryResult = {
  __typename?: 'OpenStackDrVolumeRecoveryResult';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_volume?: Maybe<OpenStackCmClusterVolume>;
  recovery_cluster_volume?: Maybe<OpenStackCmClusterVolume>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: Maybe<OpenStackDrVolumeRecoveryResultResultCodeEnum | `${OpenStackDrVolumeRecoveryResultResultCodeEnum}`>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrVolumeRecoveryResultInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
  recovery_cluster_volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum | `${OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum}`>;
  result_code?: InputMaybe<OpenStackDrVolumeRecoveryResultResultCodeEnum | `${OpenStackDrVolumeRecoveryResultResultCodeEnum}`>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrVolumeRecoveryResultResultCodeEnum {
  DrRecoveryVolumeResultCanceled = 'dr.recovery.volume.result.canceled',
  DrRecoveryVolumeResultFailed = 'dr.recovery.volume.result.failed',
  DrRecoveryVolumeResultSuccess = 'dr.recovery.volume.result.success'
}

export type PauseRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Query = {
  __typename?: 'Query';
  GetDashboardClusterRelationships?: Maybe<OpenStackDrClusterRelationshipsResponse>;
  GetDashboardClustersSummary?: Maybe<OpenStackDrSummaryClustersResponse>;
  GetDashboardGroupsSummary?: Maybe<OpenStackDrSummaryGroupsResponse>;
  GetDashboardInstancesSummary?: Maybe<OpenStackDrSummaryInstancesResponse>;
  GetDashboardJobsSummary?: Maybe<OpenStackDrSummaryJobsResponse>;
  GetDashboardVolumesSummary?: Maybe<OpenStackDrSummaryVolumesResponse>;
  GetHypervisor?: Maybe<OpenStackDrHypervisorResourcesResponse>;
  GetInstanceTemplate?: Maybe<OpenStackDrInstanceTemplateResponse>;
  GetInstanceTemplates?: Maybe<OpenStackDrInstanceTemplatesResponse>;
  GetMigration?: Maybe<OpenStackDrMigrationResponse>;
  GetMigrationJobStatus?: Maybe<OpenStackDrMigrationJobStatusResponse>;
  GetMigrationReplicationStatus?: Maybe<OpenStackDrMigrationReplicationStatusResponse>;
  GetMigrations?: Maybe<OpenStackDrMigrationsResponse>;
  GetProtectionGroup?: Maybe<OpenStackDrProtectionGroupResponse>;
  GetProtectionGroupSnapshot?: Maybe<OpenStackDrSnapshotsResponse>;
  GetProtectionGroups?: Maybe<OpenStackDrProtectionGroupsResponse>;
  GetRecoveryJob?: Maybe<OpenStackDrRecoveryJobResponse>;
  GetRecoveryJobInstanceStatus?: Maybe<OpenStackDrRecoveryJobInstanceStatusResponse>;
  GetRecoveryJobMonitors?: Maybe<OpenStackDrRecoveryJobMonitorsResponse>;
  GetRecoveryJobStatus?: Maybe<OpenStackDrRecoveryJobStatusResponse>;
  GetRecoveryJobTaskLog?: Maybe<OpenStackDrRecoveryTaskLogsResponse>;
  GetRecoveryJobVolumeStatus?: Maybe<OpenStackDrRecoveryJobVolumeStatusResponse>;
  GetRecoveryJobs?: Maybe<OpenStackDrRecoveryJobsResponse>;
  GetRecoveryPlan?: Maybe<OpenStackDrRecoveryPlanResponse>;
  GetRecoveryPlans?: Maybe<OpenStackDrRecoveryPlansResponse>;
  GetRecoveryReport?: Maybe<OpenStackDrRecoveryResultReportResponse>;
  GetRecoveryReportHistory?: Maybe<OpenStackDrHistoryResponse>;
  GetRecoveryReports?: Maybe<OpenStackDrRecoveryResultReportsResponse>;
  GetUnprotectedInstances?: Maybe<OpenStackDrInstancesResponse>;
};


export type QueryGetDashboardClusterRelationshipsArgs = {
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetDashboardJobsSummaryArgs = {
  endDate?: InputMaybe<Scalars['BigInt']['input']>;
  recoveryType?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  startDate?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetHypervisorArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
  recoveryPointTypeCode?: InputMaybe<Scalars['String']['input']>;
  snapshotId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetInstanceTemplateArgs = {
  templateId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetInstanceTemplatesArgs = {
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  ownerGroupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetMigrationArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetMigrationJobStatusArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetMigrationReplicationStatusArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetMigrationsArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  ownerGroupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetProtectionGroupArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetProtectionGroupSnapshotArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetProtectionGroupsArgs = {
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  ownerGroupId?: InputMaybe<Scalars['BigInt']['input']>;
  protectionClusterId?: InputMaybe<Scalars['BigInt']['input']>;
  protectionClusterTypeCode?: InputMaybe<OpenStackDrProtectionClusterTypeCodeEnum>;
};


export type QueryGetRecoveryJobArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryJobInstanceStatusArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryJobMonitorsArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryJobStatusArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryJobTaskLogArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryJobVolumeStatusArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryJobsArgs = {
  Type_?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryPlanArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
  snapshotId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryPlansArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryReportArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  resultId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRecoveryReportsArgs = {
  Type_?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  result?: InputMaybe<OpenStackDrReportResultEnum>;
};


export type QueryGetUnprotectedInstancesArgs = {
  clusterAvailabilityZoneId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterHypervisorId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ResumeRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ResumeRecoveryJobMigrationRollbackInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RetryRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrRetryInstancesRequest?: InputMaybe<OpenStackDrRetryInstancesRequestInput>;
};

export type RetryRecoveryJobRollbackInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RollbackRecoveryJobSimulationInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateProtectionGroupInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrProtectionGroupRequest?: InputMaybe<OpenStackDrProtectionGroupRequestInput>;
};

export type UpdateRecoveryJobInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  jobId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrUpdateRecoveryJobRequest?: InputMaybe<OpenStackDrUpdateRecoveryJobRequestInput>;
};

export type UpdateRecoveryPlanInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackDrRecoveryPlanRequest?: InputMaybe<OpenStackDrRecoveryPlanRequestInput>;
  planId?: InputMaybe<Scalars['BigInt']['input']>;
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
  CancelRecoveryJobConfirmInput: CancelRecoveryJobConfirmInput;
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
  ConfirmRecoveryJobRetryInput: ConfirmRecoveryJobRetryInput;
  CreateInstanceTemplateInput: CreateInstanceTemplateInput;
  CreateMigrationJobInput: CreateMigrationJobInput;
  CreateMigrationPreparationInput: CreateMigrationPreparationInput;
  CreateMigrationReplicationInput: CreateMigrationReplicationInput;
  CreateProtectionGroupInput: CreateProtectionGroupInput;
  CreateProtectionGroupSnapshotInput: CreateProtectionGroupSnapshotInput;
  CreateRecoveryJobInput: CreateRecoveryJobInput;
  CreateRecoveryPlanInput: CreateRecoveryPlanInput;
  DeleteInstanceTemplateInput: DeleteInstanceTemplateInput;
  DeleteMigrationInput: DeleteMigrationInput;
  DeleteMigrationReplicationInput: DeleteMigrationReplicationInput;
  DeleteProtectionGroupInput: DeleteProtectionGroupInput;
  DeleteRecoveryJobForceInput: DeleteRecoveryJobForceInput;
  DeleteRecoveryJobInput: DeleteRecoveryJobInput;
  DeleteRecoveryPlanInput: DeleteRecoveryPlanInput;
  DeleteRecoveryReportInput: DeleteRecoveryReportInput;
  ExtendRecoveryJobPauseInput: ExtendRecoveryJobPauseInput;
  ExtendRecoveryJobRollbackTimeInput: ExtendRecoveryJobRollbackTimeInput;
  IgnoreRecoveryJobRollbackInput: IgnoreRecoveryJobRollbackInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OpenStackCmCluster: ResolverTypeWrapper<OpenStackCmCluster>;
  OpenStackCmCluster1: ResolverTypeWrapper<OpenStackCmCluster1>;
  OpenStackCmCluster1Input: OpenStackCmCluster1Input;
  OpenStackCmClusterAvailabilityZone: ResolverTypeWrapper<OpenStackCmClusterAvailabilityZone>;
  OpenStackCmClusterAvailabilityZone1: ResolverTypeWrapper<OpenStackCmClusterAvailabilityZone1>;
  OpenStackCmClusterAvailabilityZone1Input: OpenStackCmClusterAvailabilityZone1Input;
  OpenStackCmClusterAvailabilityZoneInput: OpenStackCmClusterAvailabilityZoneInput;
  OpenStackCmClusterFloatingIp: ResolverTypeWrapper<OpenStackCmClusterFloatingIp>;
  OpenStackCmClusterFloatingIp1: ResolverTypeWrapper<OpenStackCmClusterFloatingIp1>;
  OpenStackCmClusterFloatingIp1Input: OpenStackCmClusterFloatingIp1Input;
  OpenStackCmClusterFloatingIpInput: OpenStackCmClusterFloatingIpInput;
  OpenStackCmClusterFloatingIpStatusEnum: OpenStackCmClusterFloatingIpStatusEnum;
  OpenStackCmClusterHypervisor: ResolverTypeWrapper<OpenStackCmClusterHypervisor>;
  OpenStackCmClusterHypervisor1: ResolverTypeWrapper<OpenStackCmClusterHypervisor1>;
  OpenStackCmClusterHypervisor1Input: OpenStackCmClusterHypervisor1Input;
  OpenStackCmClusterHypervisorInput: OpenStackCmClusterHypervisorInput;
  OpenStackCmClusterHypervisorStateEnum: OpenStackCmClusterHypervisorStateEnum;
  OpenStackCmClusterHypervisorStatusEnum: OpenStackCmClusterHypervisorStatusEnum;
  OpenStackCmClusterHypervisorTypeCodeEnum: OpenStackCmClusterHypervisorTypeCodeEnum;
  OpenStackCmClusterInput: OpenStackCmClusterInput;
  OpenStackCmClusterInstance: ResolverTypeWrapper<OpenStackCmClusterInstance>;
  OpenStackCmClusterInstance1: ResolverTypeWrapper<OpenStackCmClusterInstance1>;
  OpenStackCmClusterInstance1Input: OpenStackCmClusterInstance1Input;
  OpenStackCmClusterInstanceExtra: ResolverTypeWrapper<OpenStackCmClusterInstanceExtra>;
  OpenStackCmClusterInstanceExtraInput: OpenStackCmClusterInstanceExtraInput;
  OpenStackCmClusterInstanceExtraSpec: ResolverTypeWrapper<OpenStackCmClusterInstanceExtraSpec>;
  OpenStackCmClusterInstanceExtraSpec1: ResolverTypeWrapper<OpenStackCmClusterInstanceExtraSpec1>;
  OpenStackCmClusterInstanceExtraSpec1Input: OpenStackCmClusterInstanceExtraSpec1Input;
  OpenStackCmClusterInstanceExtraSpecInput: OpenStackCmClusterInstanceExtraSpecInput;
  OpenStackCmClusterInstanceExtraSpecKeyEnum: OpenStackCmClusterInstanceExtraSpecKeyEnum;
  OpenStackCmClusterInstanceInput: OpenStackCmClusterInstanceInput;
  OpenStackCmClusterInstanceNetwork: ResolverTypeWrapper<OpenStackCmClusterInstanceNetwork>;
  OpenStackCmClusterInstanceNetwork1: ResolverTypeWrapper<OpenStackCmClusterInstanceNetwork1>;
  OpenStackCmClusterInstanceNetwork1Input: OpenStackCmClusterInstanceNetwork1Input;
  OpenStackCmClusterInstanceNetworkInput: OpenStackCmClusterInstanceNetworkInput;
  OpenStackCmClusterInstanceProxy: ResolverTypeWrapper<OpenStackCmClusterInstanceProxy>;
  OpenStackCmClusterInstanceProxyInput: OpenStackCmClusterInstanceProxyInput;
  OpenStackCmClusterInstanceProxyLink: ResolverTypeWrapper<OpenStackCmClusterInstanceProxyLink>;
  OpenStackCmClusterInstanceProxyLinkInput: OpenStackCmClusterInstanceProxyLinkInput;
  OpenStackCmClusterInstanceSecurityGroup: ResolverTypeWrapper<OpenStackCmClusterInstanceSecurityGroup>;
  OpenStackCmClusterInstanceSecurityGroup1: ResolverTypeWrapper<OpenStackCmClusterInstanceSecurityGroup1>;
  OpenStackCmClusterInstanceSecurityGroup1Input: OpenStackCmClusterInstanceSecurityGroup1Input;
  OpenStackCmClusterInstanceSecurityGroupInput: OpenStackCmClusterInstanceSecurityGroupInput;
  OpenStackCmClusterInstanceSpec: ResolverTypeWrapper<OpenStackCmClusterInstanceSpec>;
  OpenStackCmClusterInstanceSpec1: ResolverTypeWrapper<OpenStackCmClusterInstanceSpec1>;
  OpenStackCmClusterInstanceSpec1Input: OpenStackCmClusterInstanceSpec1Input;
  OpenStackCmClusterInstanceSpecInput: OpenStackCmClusterInstanceSpecInput;
  OpenStackCmClusterInstanceStateEnum: OpenStackCmClusterInstanceStateEnum;
  OpenStackCmClusterInstanceStatusEnum: OpenStackCmClusterInstanceStatusEnum;
  OpenStackCmClusterInstanceVolume: ResolverTypeWrapper<OpenStackCmClusterInstanceVolume>;
  OpenStackCmClusterInstanceVolume1: ResolverTypeWrapper<OpenStackCmClusterInstanceVolume1>;
  OpenStackCmClusterInstanceVolume1Input: OpenStackCmClusterInstanceVolume1Input;
  OpenStackCmClusterInstanceVolumeInput: OpenStackCmClusterInstanceVolumeInput;
  OpenStackCmClusterKeyPair: ResolverTypeWrapper<OpenStackCmClusterKeyPair>;
  OpenStackCmClusterKeyPair1: ResolverTypeWrapper<OpenStackCmClusterKeyPair1>;
  OpenStackCmClusterKeyPair1Input: OpenStackCmClusterKeyPair1Input;
  OpenStackCmClusterKeyPairInput: OpenStackCmClusterKeyPairInput;
  OpenStackCmClusterKeyPairTypeCodeEnum: OpenStackCmClusterKeyPairTypeCodeEnum;
  OpenStackCmClusterNetwork: ResolverTypeWrapper<OpenStackCmClusterNetwork>;
  OpenStackCmClusterNetwork1: ResolverTypeWrapper<OpenStackCmClusterNetwork1>;
  OpenStackCmClusterNetwork1Input: OpenStackCmClusterNetwork1Input;
  OpenStackCmClusterNetworkInput: OpenStackCmClusterNetworkInput;
  OpenStackCmClusterNetworkRoutingInterface: ResolverTypeWrapper<OpenStackCmClusterNetworkRoutingInterface>;
  OpenStackCmClusterNetworkRoutingInterface1: ResolverTypeWrapper<OpenStackCmClusterNetworkRoutingInterface1>;
  OpenStackCmClusterNetworkRoutingInterface1Input: OpenStackCmClusterNetworkRoutingInterface1Input;
  OpenStackCmClusterNetworkRoutingInterfaceInput: OpenStackCmClusterNetworkRoutingInterfaceInput;
  OpenStackCmClusterNetworkStateEnum: OpenStackCmClusterNetworkStateEnum;
  OpenStackCmClusterNetworkStatusEnum: OpenStackCmClusterNetworkStatusEnum;
  OpenStackCmClusterNetworkTypeCodeEnum: OpenStackCmClusterNetworkTypeCodeEnum;
  OpenStackCmClusterPermission: ResolverTypeWrapper<OpenStackCmClusterPermission>;
  OpenStackCmClusterPermission1: ResolverTypeWrapper<OpenStackCmClusterPermission1>;
  OpenStackCmClusterPermission1Input: OpenStackCmClusterPermission1Input;
  OpenStackCmClusterPermissionInput: OpenStackCmClusterPermissionInput;
  OpenStackCmClusterPermissionModeCodeEnum: OpenStackCmClusterPermissionModeCodeEnum;
  OpenStackCmClusterRouter: ResolverTypeWrapper<OpenStackCmClusterRouter>;
  OpenStackCmClusterRouter1: ResolverTypeWrapper<OpenStackCmClusterRouter1>;
  OpenStackCmClusterRouter1Input: OpenStackCmClusterRouter1Input;
  OpenStackCmClusterRouterExtraRoute: ResolverTypeWrapper<OpenStackCmClusterRouterExtraRoute>;
  OpenStackCmClusterRouterExtraRouteInput: OpenStackCmClusterRouterExtraRouteInput;
  OpenStackCmClusterRouterInput: OpenStackCmClusterRouterInput;
  OpenStackCmClusterRouterStateEnum: OpenStackCmClusterRouterStateEnum;
  OpenStackCmClusterRouterStatusEnum: OpenStackCmClusterRouterStatusEnum;
  OpenStackCmClusterSecurityGroup: ResolverTypeWrapper<OpenStackCmClusterSecurityGroup>;
  OpenStackCmClusterSecurityGroup1: ResolverTypeWrapper<OpenStackCmClusterSecurityGroup1>;
  OpenStackCmClusterSecurityGroup1Input: OpenStackCmClusterSecurityGroup1Input;
  OpenStackCmClusterSecurityGroupInput: OpenStackCmClusterSecurityGroupInput;
  OpenStackCmClusterSecurityGroupRule: ResolverTypeWrapper<OpenStackCmClusterSecurityGroupRule>;
  OpenStackCmClusterSecurityGroupRule1: ResolverTypeWrapper<OpenStackCmClusterSecurityGroupRule1>;
  OpenStackCmClusterSecurityGroupRule1Input: OpenStackCmClusterSecurityGroupRule1Input;
  OpenStackCmClusterSecurityGroupRuleDirectionEnum: OpenStackCmClusterSecurityGroupRuleDirectionEnum;
  OpenStackCmClusterSecurityGroupRuleEtherTypeEnum: OpenStackCmClusterSecurityGroupRuleEtherTypeEnum;
  OpenStackCmClusterSecurityGroupRuleInput: OpenStackCmClusterSecurityGroupRuleInput;
  OpenStackCmClusterStateCodeEnum: OpenStackCmClusterStateCodeEnum;
  OpenStackCmClusterStorage: ResolverTypeWrapper<OpenStackCmClusterStorage>;
  OpenStackCmClusterStorage1: ResolverTypeWrapper<OpenStackCmClusterStorage1>;
  OpenStackCmClusterStorage1Input: OpenStackCmClusterStorage1Input;
  OpenStackCmClusterStorageInput: OpenStackCmClusterStorageInput;
  OpenStackCmClusterStorageStatusEnum: OpenStackCmClusterStorageStatusEnum;
  OpenStackCmClusterStorageTypeCodeEnum: OpenStackCmClusterStorageTypeCodeEnum;
  OpenStackCmClusterSubnet: ResolverTypeWrapper<OpenStackCmClusterSubnet>;
  OpenStackCmClusterSubnet1: ResolverTypeWrapper<OpenStackCmClusterSubnet1>;
  OpenStackCmClusterSubnet1Input: OpenStackCmClusterSubnet1Input;
  OpenStackCmClusterSubnetDhcpPool: ResolverTypeWrapper<OpenStackCmClusterSubnetDhcpPool>;
  OpenStackCmClusterSubnetDhcpPoolInput: OpenStackCmClusterSubnetDhcpPoolInput;
  OpenStackCmClusterSubnetInput: OpenStackCmClusterSubnetInput;
  OpenStackCmClusterSubnetIpv6AddressModeCodeEnum: OpenStackCmClusterSubnetIpv6AddressModeCodeEnum;
  OpenStackCmClusterSubnetIpv6RaModeCodeEnum: OpenStackCmClusterSubnetIpv6RaModeCodeEnum;
  OpenStackCmClusterSubnetNameserver: ResolverTypeWrapper<OpenStackCmClusterSubnetNameserver>;
  OpenStackCmClusterSubnetNameserverInput: OpenStackCmClusterSubnetNameserverInput;
  OpenStackCmClusterTenant: ResolverTypeWrapper<OpenStackCmClusterTenant>;
  OpenStackCmClusterTenant1: ResolverTypeWrapper<OpenStackCmClusterTenant1>;
  OpenStackCmClusterTenant1Input: OpenStackCmClusterTenant1Input;
  OpenStackCmClusterTenantInput: OpenStackCmClusterTenantInput;
  OpenStackCmClusterTenantQuota: ResolverTypeWrapper<OpenStackCmClusterTenantQuota>;
  OpenStackCmClusterTenantQuotaInput: OpenStackCmClusterTenantQuotaInput;
  OpenStackCmClusterTypeCodeEnum: OpenStackCmClusterTypeCodeEnum;
  OpenStackCmClusterVolume: ResolverTypeWrapper<OpenStackCmClusterVolume>;
  OpenStackCmClusterVolume1: ResolverTypeWrapper<OpenStackCmClusterVolume1>;
  OpenStackCmClusterVolume1Input: OpenStackCmClusterVolume1Input;
  OpenStackCmClusterVolumeInput: OpenStackCmClusterVolumeInput;
  OpenStackCmClusterVolumeSnapshot: ResolverTypeWrapper<OpenStackCmClusterVolumeSnapshot>;
  OpenStackCmClusterVolumeSnapshot1: ResolverTypeWrapper<OpenStackCmClusterVolumeSnapshot1>;
  OpenStackCmClusterVolumeSnapshot1Input: OpenStackCmClusterVolumeSnapshot1Input;
  OpenStackCmClusterVolumeSnapshotInput: OpenStackCmClusterVolumeSnapshotInput;
  OpenStackCmClusterVolumeSnapshotStatusEnum: OpenStackCmClusterVolumeSnapshotStatusEnum;
  OpenStackCmClusterVolumeStatusEnum: OpenStackCmClusterVolumeStatusEnum;
  OpenStackDrAbnormalStateReasons: ResolverTypeWrapper<OpenStackDrAbnormalStateReasons>;
  OpenStackDrAbnormalStateReasonsInput: OpenStackDrAbnormalStateReasonsInput;
  OpenStackDrAbnormalStateReasonsResponse: ResolverTypeWrapper<OpenStackDrAbnormalStateReasonsResponse>;
  OpenStackDrAbnormalStateReasonsResponseInput: OpenStackDrAbnormalStateReasonsResponseInput;
  OpenStackDrAddInstanceTemplateRequest: ResolverTypeWrapper<OpenStackDrAddInstanceTemplateRequest>;
  OpenStackDrAddInstanceTemplateRequestInput: OpenStackDrAddInstanceTemplateRequestInput;
  OpenStackDrAddRecoveryJobRequest: ResolverTypeWrapper<OpenStackDrAddRecoveryJobRequest>;
  OpenStackDrAddRecoveryJobRequestInput: OpenStackDrAddRecoveryJobRequestInput;
  OpenStackDrAvailabilityZoneRecoveryPlan: ResolverTypeWrapper<OpenStackDrAvailabilityZoneRecoveryPlan>;
  OpenStackDrAvailabilityZoneRecoveryPlanInput: OpenStackDrAvailabilityZoneRecoveryPlanInput;
  OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrClusterRelationship: ResolverTypeWrapper<OpenStackDrClusterRelationship>;
  OpenStackDrClusterRelationshipInput: OpenStackDrClusterRelationshipInput;
  OpenStackDrClusterRelationshipPlan: ResolverTypeWrapper<OpenStackDrClusterRelationshipPlan>;
  OpenStackDrClusterRelationshipPlanInput: OpenStackDrClusterRelationshipPlanInput;
  OpenStackDrClusterRelationshipStateCodeEnum: OpenStackDrClusterRelationshipStateCodeEnum;
  OpenStackDrClusterRelationshipsResponse: ResolverTypeWrapper<OpenStackDrClusterRelationshipsResponse>;
  OpenStackDrClusterRelationshipsResponseInput: OpenStackDrClusterRelationshipsResponseInput;
  OpenStackDrExtendRecoveryJobPausingTimeRequest: ResolverTypeWrapper<OpenStackDrExtendRecoveryJobPausingTimeRequest>;
  OpenStackDrExtendRecoveryJobPausingTimeRequestInput: OpenStackDrExtendRecoveryJobPausingTimeRequestInput;
  OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest: ResolverTypeWrapper<OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest>;
  OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestInput: OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestInput;
  OpenStackDrExternalNetworkRecoveryPlan: ResolverTypeWrapper<OpenStackDrExternalNetworkRecoveryPlan>;
  OpenStackDrExternalNetworkRecoveryPlanInput: OpenStackDrExternalNetworkRecoveryPlanInput;
  OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrFloatingIpRecoveryPlan: ResolverTypeWrapper<OpenStackDrFloatingIpRecoveryPlan>;
  OpenStackDrFloatingIpRecoveryPlanInput: OpenStackDrFloatingIpRecoveryPlanInput;
  OpenStackDrHistoryResponse: ResolverTypeWrapper<OpenStackDrHistoryResponse>;
  OpenStackDrHistoryResponseInput: OpenStackDrHistoryResponseInput;
  OpenStackDrHypervisorResources: ResolverTypeWrapper<OpenStackDrHypervisorResources>;
  OpenStackDrHypervisorResourcesInput: OpenStackDrHypervisorResourcesInput;
  OpenStackDrHypervisorResourcesResponse: ResolverTypeWrapper<OpenStackDrHypervisorResourcesResponse>;
  OpenStackDrHypervisorResourcesResponseInput: OpenStackDrHypervisorResourcesResponseInput;
  OpenStackDrInstanceMigrationPlan: ResolverTypeWrapper<OpenStackDrInstanceMigrationPlan>;
  OpenStackDrInstanceMigrationPlanInput: OpenStackDrInstanceMigrationPlanInput;
  OpenStackDrInstanceNetworkMigrationPlan: ResolverTypeWrapper<OpenStackDrInstanceNetworkMigrationPlan>;
  OpenStackDrInstanceNetworkMigrationPlanInput: OpenStackDrInstanceNetworkMigrationPlanInput;
  OpenStackDrInstanceRecoveryPlan: ResolverTypeWrapper<OpenStackDrInstanceRecoveryPlan>;
  OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum: OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum;
  OpenStackDrInstanceRecoveryPlanInput: OpenStackDrInstanceRecoveryPlanInput;
  OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrInstanceRecoveryResult: ResolverTypeWrapper<OpenStackDrInstanceRecoveryResult>;
  OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum: OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum;
  OpenStackDrInstanceRecoveryResultInput: OpenStackDrInstanceRecoveryResultInput;
  OpenStackDrInstanceRecoveryResultResultCodeEnum: OpenStackDrInstanceRecoveryResultResultCodeEnum;
  OpenStackDrInstanceSecurityGroupMigrationPlan: ResolverTypeWrapper<OpenStackDrInstanceSecurityGroupMigrationPlan>;
  OpenStackDrInstanceSecurityGroupMigrationPlanInput: OpenStackDrInstanceSecurityGroupMigrationPlanInput;
  OpenStackDrInstanceTemplate: ResolverTypeWrapper<OpenStackDrInstanceTemplate>;
  OpenStackDrInstanceTemplateInput: OpenStackDrInstanceTemplateInput;
  OpenStackDrInstanceTemplateInstance: ResolverTypeWrapper<OpenStackDrInstanceTemplateInstance>;
  OpenStackDrInstanceTemplateInstanceDependency: ResolverTypeWrapper<OpenStackDrInstanceTemplateInstanceDependency>;
  OpenStackDrInstanceTemplateInstanceDependencyInput: OpenStackDrInstanceTemplateInstanceDependencyInput;
  OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum: OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum;
  OpenStackDrInstanceTemplateInstanceInput: OpenStackDrInstanceTemplateInstanceInput;
  OpenStackDrInstanceTemplateResponse: ResolverTypeWrapper<OpenStackDrInstanceTemplateResponse>;
  OpenStackDrInstanceTemplateResponseInput: OpenStackDrInstanceTemplateResponseInput;
  OpenStackDrInstanceTemplatesResponse: ResolverTypeWrapper<OpenStackDrInstanceTemplatesResponse>;
  OpenStackDrInstanceTemplatesResponseInput: OpenStackDrInstanceTemplatesResponseInput;
  OpenStackDrInstanceVolumeMigrationPlan: ResolverTypeWrapper<OpenStackDrInstanceVolumeMigrationPlan>;
  OpenStackDrInstanceVolumeMigrationPlanInput: OpenStackDrInstanceVolumeMigrationPlanInput;
  OpenStackDrInstancesResponse: ResolverTypeWrapper<OpenStackDrInstancesResponse>;
  OpenStackDrInstancesResponseInput: OpenStackDrInstancesResponseInput;
  OpenStackDrMessage: ResolverTypeWrapper<OpenStackDrMessage>;
  OpenStackDrMessageInput: OpenStackDrMessageInput;
  OpenStackDrMessageResponse: ResolverTypeWrapper<OpenStackDrMessageResponse>;
  OpenStackDrMessageResponseInput: OpenStackDrMessageResponseInput;
  OpenStackDrMigration: ResolverTypeWrapper<OpenStackDrMigration>;
  OpenStackDrMigrationInput: OpenStackDrMigrationInput;
  OpenStackDrMigrationJobStatusEnum: OpenStackDrMigrationJobStatusEnum;
  OpenStackDrMigrationJobStatusResponse: ResolverTypeWrapper<OpenStackDrMigrationJobStatusResponse>;
  OpenStackDrMigrationJobStatusResponseInput: OpenStackDrMigrationJobStatusResponseInput;
  OpenStackDrMigrationJobTypeEnum: OpenStackDrMigrationJobTypeEnum;
  OpenStackDrMigrationPlanInstanceDetail: ResolverTypeWrapper<OpenStackDrMigrationPlanInstanceDetail>;
  OpenStackDrMigrationPlanInstanceDetailInput: OpenStackDrMigrationPlanInstanceDetailInput;
  OpenStackDrMigrationReplicationStatus: ResolverTypeWrapper<OpenStackDrMigrationReplicationStatus>;
  OpenStackDrMigrationReplicationStatusEnum: OpenStackDrMigrationReplicationStatusEnum;
  OpenStackDrMigrationReplicationStatusInput: OpenStackDrMigrationReplicationStatusInput;
  OpenStackDrMigrationReplicationStatusResponse: ResolverTypeWrapper<OpenStackDrMigrationReplicationStatusResponse>;
  OpenStackDrMigrationReplicationStatusResponseInput: OpenStackDrMigrationReplicationStatusResponseInput;
  OpenStackDrMigrationResponse: ResolverTypeWrapper<OpenStackDrMigrationResponse>;
  OpenStackDrMigrationResponseInput: OpenStackDrMigrationResponseInput;
  OpenStackDrMigrationVmStatus: ResolverTypeWrapper<OpenStackDrMigrationVmStatus>;
  OpenStackDrMigrationVmStatusInput: OpenStackDrMigrationVmStatusInput;
  OpenStackDrMigrationsResponse: ResolverTypeWrapper<OpenStackDrMigrationsResponse>;
  OpenStackDrMigrationsResponseInput: OpenStackDrMigrationsResponseInput;
  OpenStackDrPagination: ResolverTypeWrapper<OpenStackDrPagination>;
  OpenStackDrPaginationInput: OpenStackDrPaginationInput;
  OpenStackDrProtectionClusterHistory: ResolverTypeWrapper<OpenStackDrProtectionClusterHistory>;
  OpenStackDrProtectionClusterHistoryInput: OpenStackDrProtectionClusterHistoryInput;
  OpenStackDrProtectionClusterTypeCodeEnum: OpenStackDrProtectionClusterTypeCodeEnum;
  OpenStackDrProtectionGroup: ResolverTypeWrapper<OpenStackDrProtectionGroup>;
  OpenStackDrProtectionGroupHistory: ResolverTypeWrapper<OpenStackDrProtectionGroupHistory>;
  OpenStackDrProtectionGroupHistoryInput: OpenStackDrProtectionGroupHistoryInput;
  OpenStackDrProtectionGroupInput: OpenStackDrProtectionGroupInput;
  OpenStackDrProtectionGroupRequest: ResolverTypeWrapper<OpenStackDrProtectionGroupRequest>;
  OpenStackDrProtectionGroupRequestInput: OpenStackDrProtectionGroupRequestInput;
  OpenStackDrProtectionGroupResponse: ResolverTypeWrapper<OpenStackDrProtectionGroupResponse>;
  OpenStackDrProtectionGroupResponseInput: OpenStackDrProtectionGroupResponseInput;
  OpenStackDrProtectionGroupSnapshot: ResolverTypeWrapper<OpenStackDrProtectionGroupSnapshot>;
  OpenStackDrProtectionGroupSnapshotInput: OpenStackDrProtectionGroupSnapshotInput;
  OpenStackDrProtectionGroupsResponse: ResolverTypeWrapper<OpenStackDrProtectionGroupsResponse>;
  OpenStackDrProtectionGroupsResponseInput: OpenStackDrProtectionGroupsResponseInput;
  OpenStackDrRecoveryJob: ResolverTypeWrapper<OpenStackDrRecoveryJob>;
  OpenStackDrRecoveryJobFloatingIpStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobFloatingIpStatus>;
  OpenStackDrRecoveryJobFloatingIpStatusInput: OpenStackDrRecoveryJobFloatingIpStatusInput;
  OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum: OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum;
  OpenStackDrRecoveryJobInput: OpenStackDrRecoveryJobInput;
  OpenStackDrRecoveryJobInstanceSpecStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobInstanceSpecStatus>;
  OpenStackDrRecoveryJobInstanceSpecStatusInput: OpenStackDrRecoveryJobInstanceSpecStatusInput;
  OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum: OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum;
  OpenStackDrRecoveryJobInstanceStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobInstanceStatus>;
  OpenStackDrRecoveryJobInstanceStatusInput: OpenStackDrRecoveryJobInstanceStatusInput;
  OpenStackDrRecoveryJobInstanceStatusResponse: ResolverTypeWrapper<OpenStackDrRecoveryJobInstanceStatusResponse>;
  OpenStackDrRecoveryJobInstanceStatusResponseInput: OpenStackDrRecoveryJobInstanceStatusResponseInput;
  OpenStackDrRecoveryJobInstanceStatusResultCodeEnum: OpenStackDrRecoveryJobInstanceStatusResultCodeEnum;
  OpenStackDrRecoveryJobInstanceStatusStateCodeEnum: OpenStackDrRecoveryJobInstanceStatusStateCodeEnum;
  OpenStackDrRecoveryJobKeyPairStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobKeyPairStatus>;
  OpenStackDrRecoveryJobKeyPairStatusInput: OpenStackDrRecoveryJobKeyPairStatusInput;
  OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum: OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum;
  OpenStackDrRecoveryJobMonitorsResponse: ResolverTypeWrapper<OpenStackDrRecoveryJobMonitorsResponse>;
  OpenStackDrRecoveryJobMonitorsResponseInput: OpenStackDrRecoveryJobMonitorsResponseInput;
  OpenStackDrRecoveryJobNetworkStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobNetworkStatus>;
  OpenStackDrRecoveryJobNetworkStatusInput: OpenStackDrRecoveryJobNetworkStatusInput;
  OpenStackDrRecoveryJobNetworkStatusResultCodeEnum: OpenStackDrRecoveryJobNetworkStatusResultCodeEnum;
  OpenStackDrRecoveryJobOperationCodeEnum: OpenStackDrRecoveryJobOperationCodeEnum;
  OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum: OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum;
  OpenStackDrRecoveryJobResponse: ResolverTypeWrapper<OpenStackDrRecoveryJobResponse>;
  OpenStackDrRecoveryJobResponseInput: OpenStackDrRecoveryJobResponseInput;
  OpenStackDrRecoveryJobResponseJob: ResolverTypeWrapper<OpenStackDrRecoveryJobResponseJob>;
  OpenStackDrRecoveryJobResponseJobInput: OpenStackDrRecoveryJobResponseJobInput;
  OpenStackDrRecoveryJobRouterStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobRouterStatus>;
  OpenStackDrRecoveryJobRouterStatusInput: OpenStackDrRecoveryJobRouterStatusInput;
  OpenStackDrRecoveryJobRouterStatusResultCodeEnum: OpenStackDrRecoveryJobRouterStatusResultCodeEnum;
  OpenStackDrRecoveryJobSecurityGroupStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobSecurityGroupStatus>;
  OpenStackDrRecoveryJobSecurityGroupStatusInput: OpenStackDrRecoveryJobSecurityGroupStatusInput;
  OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum: OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum;
  OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum: OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum;
  OpenStackDrRecoveryJobStateCodeEnum: OpenStackDrRecoveryJobStateCodeEnum;
  OpenStackDrRecoveryJobStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobStatus>;
  OpenStackDrRecoveryJobStatusCodeEnum: OpenStackDrRecoveryJobStatusCodeEnum;
  OpenStackDrRecoveryJobStatusInput: OpenStackDrRecoveryJobStatusInput;
  OpenStackDrRecoveryJobStatusResponse: ResolverTypeWrapper<OpenStackDrRecoveryJobStatusResponse>;
  OpenStackDrRecoveryJobStatusResponseInput: OpenStackDrRecoveryJobStatusResponseInput;
  OpenStackDrRecoveryJobStatusResultCodeEnum: OpenStackDrRecoveryJobStatusResultCodeEnum;
  OpenStackDrRecoveryJobStatusTypeCodeEnum: OpenStackDrRecoveryJobStatusTypeCodeEnum;
  OpenStackDrRecoveryJobSubnetStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobSubnetStatus>;
  OpenStackDrRecoveryJobSubnetStatusInput: OpenStackDrRecoveryJobSubnetStatusInput;
  OpenStackDrRecoveryJobSubnetStatusResultCodeEnum: OpenStackDrRecoveryJobSubnetStatusResultCodeEnum;
  OpenStackDrRecoveryJobTenantStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobTenantStatus>;
  OpenStackDrRecoveryJobTenantStatusInput: OpenStackDrRecoveryJobTenantStatusInput;
  OpenStackDrRecoveryJobTenantStatusResultCodeEnum: OpenStackDrRecoveryJobTenantStatusResultCodeEnum;
  OpenStackDrRecoveryJobVolumeStatus: ResolverTypeWrapper<OpenStackDrRecoveryJobVolumeStatus>;
  OpenStackDrRecoveryJobVolumeStatusInput: OpenStackDrRecoveryJobVolumeStatusInput;
  OpenStackDrRecoveryJobVolumeStatusResponse: ResolverTypeWrapper<OpenStackDrRecoveryJobVolumeStatusResponse>;
  OpenStackDrRecoveryJobVolumeStatusResponseInput: OpenStackDrRecoveryJobVolumeStatusResponseInput;
  OpenStackDrRecoveryJobVolumeStatusResultCodeEnum: OpenStackDrRecoveryJobVolumeStatusResultCodeEnum;
  OpenStackDrRecoveryJobVolumeStatusStateCodeEnum: OpenStackDrRecoveryJobVolumeStatusStateCodeEnum;
  OpenStackDrRecoveryJobsResponse: ResolverTypeWrapper<OpenStackDrRecoveryJobsResponse>;
  OpenStackDrRecoveryJobsResponseInput: OpenStackDrRecoveryJobsResponseInput;
  OpenStackDrRecoveryJobsResponseJobs: ResolverTypeWrapper<OpenStackDrRecoveryJobsResponseJobs>;
  OpenStackDrRecoveryJobsResponseJobsInput: OpenStackDrRecoveryJobsResponseJobsInput;
  OpenStackDrRecoveryPlan: ResolverTypeWrapper<OpenStackDrRecoveryPlan>;
  OpenStackDrRecoveryPlanDetail: ResolverTypeWrapper<OpenStackDrRecoveryPlanDetail>;
  OpenStackDrRecoveryPlanDetailInput: OpenStackDrRecoveryPlanDetailInput;
  OpenStackDrRecoveryPlanDirectionCodeEnum: OpenStackDrRecoveryPlanDirectionCodeEnum;
  OpenStackDrRecoveryPlanInput: OpenStackDrRecoveryPlanInput;
  OpenStackDrRecoveryPlanMirrorStateCodeEnum: OpenStackDrRecoveryPlanMirrorStateCodeEnum;
  OpenStackDrRecoveryPlanRequest: ResolverTypeWrapper<OpenStackDrRecoveryPlanRequest>;
  OpenStackDrRecoveryPlanRequestInput: OpenStackDrRecoveryPlanRequestInput;
  OpenStackDrRecoveryPlanResponse: ResolverTypeWrapper<OpenStackDrRecoveryPlanResponse>;
  OpenStackDrRecoveryPlanResponseInput: OpenStackDrRecoveryPlanResponseInput;
  OpenStackDrRecoveryPlanStateCodeEnum: OpenStackDrRecoveryPlanStateCodeEnum;
  OpenStackDrRecoveryPlansResponse: ResolverTypeWrapper<OpenStackDrRecoveryPlansResponse>;
  OpenStackDrRecoveryPlansResponseInput: OpenStackDrRecoveryPlansResponseInput;
  OpenStackDrRecoveryPointObjectiveTypeEnum: OpenStackDrRecoveryPointObjectiveTypeEnum;
  OpenStackDrRecoveryResult: ResolverTypeWrapper<OpenStackDrRecoveryResult>;
  OpenStackDrRecoveryResultInput: OpenStackDrRecoveryResultInput;
  OpenStackDrRecoveryResultReportResponse: ResolverTypeWrapper<OpenStackDrRecoveryResultReportResponse>;
  OpenStackDrRecoveryResultReportResponseInput: OpenStackDrRecoveryResultReportResponseInput;
  OpenStackDrRecoveryResultReportsResponse: ResolverTypeWrapper<OpenStackDrRecoveryResultReportsResponse>;
  OpenStackDrRecoveryResultReportsResponseInput: OpenStackDrRecoveryResultReportsResponseInput;
  OpenStackDrRecoveryResultResultCodeEnum: OpenStackDrRecoveryResultResultCodeEnum;
  OpenStackDrRecoveryTaskLog: ResolverTypeWrapper<OpenStackDrRecoveryTaskLog>;
  OpenStackDrRecoveryTaskLogInput: OpenStackDrRecoveryTaskLogInput;
  OpenStackDrRecoveryTaskLogsResponse: ResolverTypeWrapper<OpenStackDrRecoveryTaskLogsResponse>;
  OpenStackDrRecoveryTaskLogsResponseInput: OpenStackDrRecoveryTaskLogsResponseInput;
  OpenStackDrRecoveryTypeEnum: OpenStackDrRecoveryTypeEnum;
  OpenStackDrReportResultEnum: OpenStackDrReportResultEnum;
  OpenStackDrRetryInstancesRequest: ResolverTypeWrapper<OpenStackDrRetryInstancesRequest>;
  OpenStackDrRetryInstancesRequestInput: OpenStackDrRetryInstancesRequestInput;
  OpenStackDrRouterRecoveryPlan: ResolverTypeWrapper<OpenStackDrRouterRecoveryPlan>;
  OpenStackDrRouterRecoveryPlanInput: OpenStackDrRouterRecoveryPlanInput;
  OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrRouterRecoveryResult: ResolverTypeWrapper<OpenStackDrRouterRecoveryResult>;
  OpenStackDrRouterRecoveryResultInput: OpenStackDrRouterRecoveryResultInput;
  OpenStackDrScheduleSnapshotIntervalTypeEnum: OpenStackDrScheduleSnapshotIntervalTypeEnum;
  OpenStackDrScheduleStateCodeEnum: OpenStackDrScheduleStateCodeEnum;
  OpenStackDrSnapshotMessageResponse: ResolverTypeWrapper<OpenStackDrSnapshotMessageResponse>;
  OpenStackDrSnapshotMessageResponseInput: OpenStackDrSnapshotMessageResponseInput;
  OpenStackDrSnapshotsResponse: ResolverTypeWrapper<OpenStackDrSnapshotsResponse>;
  OpenStackDrSnapshotsResponseInput: OpenStackDrSnapshotsResponseInput;
  OpenStackDrStorageRecoveryPlan: ResolverTypeWrapper<OpenStackDrStorageRecoveryPlan>;
  OpenStackDrStorageRecoveryPlanInput: OpenStackDrStorageRecoveryPlanInput;
  OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrSummaryClustersResponse: ResolverTypeWrapper<OpenStackDrSummaryClustersResponse>;
  OpenStackDrSummaryClustersResponseInput: OpenStackDrSummaryClustersResponseInput;
  OpenStackDrSummaryClustersResponseSummary: ResolverTypeWrapper<OpenStackDrSummaryClustersResponseSummary>;
  OpenStackDrSummaryClustersResponseSummaryInput: OpenStackDrSummaryClustersResponseSummaryInput;
  OpenStackDrSummaryGroupsResponse: ResolverTypeWrapper<OpenStackDrSummaryGroupsResponse>;
  OpenStackDrSummaryGroupsResponseInput: OpenStackDrSummaryGroupsResponseInput;
  OpenStackDrSummaryGroupsResponseSummary: ResolverTypeWrapper<OpenStackDrSummaryGroupsResponseSummary>;
  OpenStackDrSummaryGroupsResponseSummaryInput: OpenStackDrSummaryGroupsResponseSummaryInput;
  OpenStackDrSummaryInstancesResponse: ResolverTypeWrapper<OpenStackDrSummaryInstancesResponse>;
  OpenStackDrSummaryInstancesResponseInput: OpenStackDrSummaryInstancesResponseInput;
  OpenStackDrSummaryInstancesSummary: ResolverTypeWrapper<OpenStackDrSummaryInstancesSummary>;
  OpenStackDrSummaryInstancesSummaryInput: OpenStackDrSummaryInstancesSummaryInput;
  OpenStackDrSummaryJobsResponse: ResolverTypeWrapper<OpenStackDrSummaryJobsResponse>;
  OpenStackDrSummaryJobsResponseInput: OpenStackDrSummaryJobsResponseInput;
  OpenStackDrSummaryJobsResponseSummary: ResolverTypeWrapper<OpenStackDrSummaryJobsResponseSummary>;
  OpenStackDrSummaryJobsResponseSummaryInput: OpenStackDrSummaryJobsResponseSummaryInput;
  OpenStackDrSummaryVolumesResponse: ResolverTypeWrapper<OpenStackDrSummaryVolumesResponse>;
  OpenStackDrSummaryVolumesResponseInput: OpenStackDrSummaryVolumesResponseInput;
  OpenStackDrSummaryVolumesResponseSummary: ResolverTypeWrapper<OpenStackDrSummaryVolumesResponseSummary>;
  OpenStackDrSummaryVolumesResponseSummaryInput: OpenStackDrSummaryVolumesResponseSummaryInput;
  OpenStackDrTenantRecoveryPlan: ResolverTypeWrapper<OpenStackDrTenantRecoveryPlan>;
  OpenStackDrTenantRecoveryPlanInput: OpenStackDrTenantRecoveryPlanInput;
  OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrUnavailableInstancesResponse: ResolverTypeWrapper<OpenStackDrUnavailableInstancesResponse>;
  OpenStackDrUnavailableInstancesResponseInput: OpenStackDrUnavailableInstancesResponseInput;
  OpenStackDrUnavailableInstancesResponseInstances: ResolverTypeWrapper<OpenStackDrUnavailableInstancesResponseInstances>;
  OpenStackDrUnavailableInstancesResponseInstancesInput: OpenStackDrUnavailableInstancesResponseInstancesInput;
  OpenStackDrUpdateRecoveryJobRequest: ResolverTypeWrapper<OpenStackDrUpdateRecoveryJobRequest>;
  OpenStackDrUpdateRecoveryJobRequestInput: OpenStackDrUpdateRecoveryJobRequestInput;
  OpenStackDrUsable: ResolverTypeWrapper<OpenStackDrUsable>;
  OpenStackDrUsableInput: OpenStackDrUsableInput;
  OpenStackDrVolumeRecoveryPlan: ResolverTypeWrapper<OpenStackDrVolumeRecoveryPlan>;
  OpenStackDrVolumeRecoveryPlanInput: OpenStackDrVolumeRecoveryPlanInput;
  OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum: OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum;
  OpenStackDrVolumeRecoveryResult: ResolverTypeWrapper<OpenStackDrVolumeRecoveryResult>;
  OpenStackDrVolumeRecoveryResultInput: OpenStackDrVolumeRecoveryResultInput;
  OpenStackDrVolumeRecoveryResultResultCodeEnum: OpenStackDrVolumeRecoveryResultResultCodeEnum;
  PauseRecoveryJobInput: PauseRecoveryJobInput;
  Query: ResolverTypeWrapper<{}>;
  ResumeRecoveryJobInput: ResumeRecoveryJobInput;
  ResumeRecoveryJobMigrationRollbackInput: ResumeRecoveryJobMigrationRollbackInput;
  RetryRecoveryJobInput: RetryRecoveryJobInput;
  RetryRecoveryJobRollbackInput: RetryRecoveryJobRollbackInput;
  RollbackRecoveryJobSimulationInput: RollbackRecoveryJobSimulationInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateProtectionGroupInput: UpdateProtectionGroupInput;
  UpdateRecoveryJobInput: UpdateRecoveryJobInput;
  UpdateRecoveryPlanInput: UpdateRecoveryPlanInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  CancelRecoveryJobConfirmInput: CancelRecoveryJobConfirmInput;
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
  ConfirmRecoveryJobRetryInput: ConfirmRecoveryJobRetryInput;
  CreateInstanceTemplateInput: CreateInstanceTemplateInput;
  CreateMigrationJobInput: CreateMigrationJobInput;
  CreateMigrationPreparationInput: CreateMigrationPreparationInput;
  CreateMigrationReplicationInput: CreateMigrationReplicationInput;
  CreateProtectionGroupInput: CreateProtectionGroupInput;
  CreateProtectionGroupSnapshotInput: CreateProtectionGroupSnapshotInput;
  CreateRecoveryJobInput: CreateRecoveryJobInput;
  CreateRecoveryPlanInput: CreateRecoveryPlanInput;
  DeleteInstanceTemplateInput: DeleteInstanceTemplateInput;
  DeleteMigrationInput: DeleteMigrationInput;
  DeleteMigrationReplicationInput: DeleteMigrationReplicationInput;
  DeleteProtectionGroupInput: DeleteProtectionGroupInput;
  DeleteRecoveryJobForceInput: DeleteRecoveryJobForceInput;
  DeleteRecoveryJobInput: DeleteRecoveryJobInput;
  DeleteRecoveryPlanInput: DeleteRecoveryPlanInput;
  DeleteRecoveryReportInput: DeleteRecoveryReportInput;
  ExtendRecoveryJobPauseInput: ExtendRecoveryJobPauseInput;
  ExtendRecoveryJobRollbackTimeInput: ExtendRecoveryJobRollbackTimeInput;
  IgnoreRecoveryJobRollbackInput: IgnoreRecoveryJobRollbackInput;
  JSONObject: Scalars['JSONObject']['output'];
  Mutation: {};
  OpenStackCmCluster: OpenStackCmCluster;
  OpenStackCmCluster1: OpenStackCmCluster1;
  OpenStackCmCluster1Input: OpenStackCmCluster1Input;
  OpenStackCmClusterAvailabilityZone: OpenStackCmClusterAvailabilityZone;
  OpenStackCmClusterAvailabilityZone1: OpenStackCmClusterAvailabilityZone1;
  OpenStackCmClusterAvailabilityZone1Input: OpenStackCmClusterAvailabilityZone1Input;
  OpenStackCmClusterAvailabilityZoneInput: OpenStackCmClusterAvailabilityZoneInput;
  OpenStackCmClusterFloatingIp: OpenStackCmClusterFloatingIp;
  OpenStackCmClusterFloatingIp1: OpenStackCmClusterFloatingIp1;
  OpenStackCmClusterFloatingIp1Input: OpenStackCmClusterFloatingIp1Input;
  OpenStackCmClusterFloatingIpInput: OpenStackCmClusterFloatingIpInput;
  OpenStackCmClusterHypervisor: OpenStackCmClusterHypervisor;
  OpenStackCmClusterHypervisor1: OpenStackCmClusterHypervisor1;
  OpenStackCmClusterHypervisor1Input: OpenStackCmClusterHypervisor1Input;
  OpenStackCmClusterHypervisorInput: OpenStackCmClusterHypervisorInput;
  OpenStackCmClusterInput: OpenStackCmClusterInput;
  OpenStackCmClusterInstance: OpenStackCmClusterInstance;
  OpenStackCmClusterInstance1: OpenStackCmClusterInstance1;
  OpenStackCmClusterInstance1Input: OpenStackCmClusterInstance1Input;
  OpenStackCmClusterInstanceExtra: OpenStackCmClusterInstanceExtra;
  OpenStackCmClusterInstanceExtraInput: OpenStackCmClusterInstanceExtraInput;
  OpenStackCmClusterInstanceExtraSpec: OpenStackCmClusterInstanceExtraSpec;
  OpenStackCmClusterInstanceExtraSpec1: OpenStackCmClusterInstanceExtraSpec1;
  OpenStackCmClusterInstanceExtraSpec1Input: OpenStackCmClusterInstanceExtraSpec1Input;
  OpenStackCmClusterInstanceExtraSpecInput: OpenStackCmClusterInstanceExtraSpecInput;
  OpenStackCmClusterInstanceInput: OpenStackCmClusterInstanceInput;
  OpenStackCmClusterInstanceNetwork: OpenStackCmClusterInstanceNetwork;
  OpenStackCmClusterInstanceNetwork1: OpenStackCmClusterInstanceNetwork1;
  OpenStackCmClusterInstanceNetwork1Input: OpenStackCmClusterInstanceNetwork1Input;
  OpenStackCmClusterInstanceNetworkInput: OpenStackCmClusterInstanceNetworkInput;
  OpenStackCmClusterInstanceProxy: OpenStackCmClusterInstanceProxy;
  OpenStackCmClusterInstanceProxyInput: OpenStackCmClusterInstanceProxyInput;
  OpenStackCmClusterInstanceProxyLink: OpenStackCmClusterInstanceProxyLink;
  OpenStackCmClusterInstanceProxyLinkInput: OpenStackCmClusterInstanceProxyLinkInput;
  OpenStackCmClusterInstanceSecurityGroup: OpenStackCmClusterInstanceSecurityGroup;
  OpenStackCmClusterInstanceSecurityGroup1: OpenStackCmClusterInstanceSecurityGroup1;
  OpenStackCmClusterInstanceSecurityGroup1Input: OpenStackCmClusterInstanceSecurityGroup1Input;
  OpenStackCmClusterInstanceSecurityGroupInput: OpenStackCmClusterInstanceSecurityGroupInput;
  OpenStackCmClusterInstanceSpec: OpenStackCmClusterInstanceSpec;
  OpenStackCmClusterInstanceSpec1: OpenStackCmClusterInstanceSpec1;
  OpenStackCmClusterInstanceSpec1Input: OpenStackCmClusterInstanceSpec1Input;
  OpenStackCmClusterInstanceSpecInput: OpenStackCmClusterInstanceSpecInput;
  OpenStackCmClusterInstanceVolume: OpenStackCmClusterInstanceVolume;
  OpenStackCmClusterInstanceVolume1: OpenStackCmClusterInstanceVolume1;
  OpenStackCmClusterInstanceVolume1Input: OpenStackCmClusterInstanceVolume1Input;
  OpenStackCmClusterInstanceVolumeInput: OpenStackCmClusterInstanceVolumeInput;
  OpenStackCmClusterKeyPair: OpenStackCmClusterKeyPair;
  OpenStackCmClusterKeyPair1: OpenStackCmClusterKeyPair1;
  OpenStackCmClusterKeyPair1Input: OpenStackCmClusterKeyPair1Input;
  OpenStackCmClusterKeyPairInput: OpenStackCmClusterKeyPairInput;
  OpenStackCmClusterNetwork: OpenStackCmClusterNetwork;
  OpenStackCmClusterNetwork1: OpenStackCmClusterNetwork1;
  OpenStackCmClusterNetwork1Input: OpenStackCmClusterNetwork1Input;
  OpenStackCmClusterNetworkInput: OpenStackCmClusterNetworkInput;
  OpenStackCmClusterNetworkRoutingInterface: OpenStackCmClusterNetworkRoutingInterface;
  OpenStackCmClusterNetworkRoutingInterface1: OpenStackCmClusterNetworkRoutingInterface1;
  OpenStackCmClusterNetworkRoutingInterface1Input: OpenStackCmClusterNetworkRoutingInterface1Input;
  OpenStackCmClusterNetworkRoutingInterfaceInput: OpenStackCmClusterNetworkRoutingInterfaceInput;
  OpenStackCmClusterPermission: OpenStackCmClusterPermission;
  OpenStackCmClusterPermission1: OpenStackCmClusterPermission1;
  OpenStackCmClusterPermission1Input: OpenStackCmClusterPermission1Input;
  OpenStackCmClusterPermissionInput: OpenStackCmClusterPermissionInput;
  OpenStackCmClusterRouter: OpenStackCmClusterRouter;
  OpenStackCmClusterRouter1: OpenStackCmClusterRouter1;
  OpenStackCmClusterRouter1Input: OpenStackCmClusterRouter1Input;
  OpenStackCmClusterRouterExtraRoute: OpenStackCmClusterRouterExtraRoute;
  OpenStackCmClusterRouterExtraRouteInput: OpenStackCmClusterRouterExtraRouteInput;
  OpenStackCmClusterRouterInput: OpenStackCmClusterRouterInput;
  OpenStackCmClusterSecurityGroup: OpenStackCmClusterSecurityGroup;
  OpenStackCmClusterSecurityGroup1: OpenStackCmClusterSecurityGroup1;
  OpenStackCmClusterSecurityGroup1Input: OpenStackCmClusterSecurityGroup1Input;
  OpenStackCmClusterSecurityGroupInput: OpenStackCmClusterSecurityGroupInput;
  OpenStackCmClusterSecurityGroupRule: OpenStackCmClusterSecurityGroupRule;
  OpenStackCmClusterSecurityGroupRule1: OpenStackCmClusterSecurityGroupRule1;
  OpenStackCmClusterSecurityGroupRule1Input: OpenStackCmClusterSecurityGroupRule1Input;
  OpenStackCmClusterSecurityGroupRuleInput: OpenStackCmClusterSecurityGroupRuleInput;
  OpenStackCmClusterStorage: OpenStackCmClusterStorage;
  OpenStackCmClusterStorage1: OpenStackCmClusterStorage1;
  OpenStackCmClusterStorage1Input: OpenStackCmClusterStorage1Input;
  OpenStackCmClusterStorageInput: OpenStackCmClusterStorageInput;
  OpenStackCmClusterSubnet: OpenStackCmClusterSubnet;
  OpenStackCmClusterSubnet1: OpenStackCmClusterSubnet1;
  OpenStackCmClusterSubnet1Input: OpenStackCmClusterSubnet1Input;
  OpenStackCmClusterSubnetDhcpPool: OpenStackCmClusterSubnetDhcpPool;
  OpenStackCmClusterSubnetDhcpPoolInput: OpenStackCmClusterSubnetDhcpPoolInput;
  OpenStackCmClusterSubnetInput: OpenStackCmClusterSubnetInput;
  OpenStackCmClusterSubnetNameserver: OpenStackCmClusterSubnetNameserver;
  OpenStackCmClusterSubnetNameserverInput: OpenStackCmClusterSubnetNameserverInput;
  OpenStackCmClusterTenant: OpenStackCmClusterTenant;
  OpenStackCmClusterTenant1: OpenStackCmClusterTenant1;
  OpenStackCmClusterTenant1Input: OpenStackCmClusterTenant1Input;
  OpenStackCmClusterTenantInput: OpenStackCmClusterTenantInput;
  OpenStackCmClusterTenantQuota: OpenStackCmClusterTenantQuota;
  OpenStackCmClusterTenantQuotaInput: OpenStackCmClusterTenantQuotaInput;
  OpenStackCmClusterVolume: OpenStackCmClusterVolume;
  OpenStackCmClusterVolume1: OpenStackCmClusterVolume1;
  OpenStackCmClusterVolume1Input: OpenStackCmClusterVolume1Input;
  OpenStackCmClusterVolumeInput: OpenStackCmClusterVolumeInput;
  OpenStackCmClusterVolumeSnapshot: OpenStackCmClusterVolumeSnapshot;
  OpenStackCmClusterVolumeSnapshot1: OpenStackCmClusterVolumeSnapshot1;
  OpenStackCmClusterVolumeSnapshot1Input: OpenStackCmClusterVolumeSnapshot1Input;
  OpenStackCmClusterVolumeSnapshotInput: OpenStackCmClusterVolumeSnapshotInput;
  OpenStackDrAbnormalStateReasons: OpenStackDrAbnormalStateReasons;
  OpenStackDrAbnormalStateReasonsInput: OpenStackDrAbnormalStateReasonsInput;
  OpenStackDrAbnormalStateReasonsResponse: OpenStackDrAbnormalStateReasonsResponse;
  OpenStackDrAbnormalStateReasonsResponseInput: OpenStackDrAbnormalStateReasonsResponseInput;
  OpenStackDrAddInstanceTemplateRequest: OpenStackDrAddInstanceTemplateRequest;
  OpenStackDrAddInstanceTemplateRequestInput: OpenStackDrAddInstanceTemplateRequestInput;
  OpenStackDrAddRecoveryJobRequest: OpenStackDrAddRecoveryJobRequest;
  OpenStackDrAddRecoveryJobRequestInput: OpenStackDrAddRecoveryJobRequestInput;
  OpenStackDrAvailabilityZoneRecoveryPlan: OpenStackDrAvailabilityZoneRecoveryPlan;
  OpenStackDrAvailabilityZoneRecoveryPlanInput: OpenStackDrAvailabilityZoneRecoveryPlanInput;
  OpenStackDrClusterRelationship: OpenStackDrClusterRelationship;
  OpenStackDrClusterRelationshipInput: OpenStackDrClusterRelationshipInput;
  OpenStackDrClusterRelationshipPlan: OpenStackDrClusterRelationshipPlan;
  OpenStackDrClusterRelationshipPlanInput: OpenStackDrClusterRelationshipPlanInput;
  OpenStackDrClusterRelationshipsResponse: OpenStackDrClusterRelationshipsResponse;
  OpenStackDrClusterRelationshipsResponseInput: OpenStackDrClusterRelationshipsResponseInput;
  OpenStackDrExtendRecoveryJobPausingTimeRequest: OpenStackDrExtendRecoveryJobPausingTimeRequest;
  OpenStackDrExtendRecoveryJobPausingTimeRequestInput: OpenStackDrExtendRecoveryJobPausingTimeRequestInput;
  OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest: OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest;
  OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestInput: OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestInput;
  OpenStackDrExternalNetworkRecoveryPlan: OpenStackDrExternalNetworkRecoveryPlan;
  OpenStackDrExternalNetworkRecoveryPlanInput: OpenStackDrExternalNetworkRecoveryPlanInput;
  OpenStackDrFloatingIpRecoveryPlan: OpenStackDrFloatingIpRecoveryPlan;
  OpenStackDrFloatingIpRecoveryPlanInput: OpenStackDrFloatingIpRecoveryPlanInput;
  OpenStackDrHistoryResponse: OpenStackDrHistoryResponse;
  OpenStackDrHistoryResponseInput: OpenStackDrHistoryResponseInput;
  OpenStackDrHypervisorResources: OpenStackDrHypervisorResources;
  OpenStackDrHypervisorResourcesInput: OpenStackDrHypervisorResourcesInput;
  OpenStackDrHypervisorResourcesResponse: OpenStackDrHypervisorResourcesResponse;
  OpenStackDrHypervisorResourcesResponseInput: OpenStackDrHypervisorResourcesResponseInput;
  OpenStackDrInstanceMigrationPlan: OpenStackDrInstanceMigrationPlan;
  OpenStackDrInstanceMigrationPlanInput: OpenStackDrInstanceMigrationPlanInput;
  OpenStackDrInstanceNetworkMigrationPlan: OpenStackDrInstanceNetworkMigrationPlan;
  OpenStackDrInstanceNetworkMigrationPlanInput: OpenStackDrInstanceNetworkMigrationPlanInput;
  OpenStackDrInstanceRecoveryPlan: OpenStackDrInstanceRecoveryPlan;
  OpenStackDrInstanceRecoveryPlanInput: OpenStackDrInstanceRecoveryPlanInput;
  OpenStackDrInstanceRecoveryResult: OpenStackDrInstanceRecoveryResult;
  OpenStackDrInstanceRecoveryResultInput: OpenStackDrInstanceRecoveryResultInput;
  OpenStackDrInstanceSecurityGroupMigrationPlan: OpenStackDrInstanceSecurityGroupMigrationPlan;
  OpenStackDrInstanceSecurityGroupMigrationPlanInput: OpenStackDrInstanceSecurityGroupMigrationPlanInput;
  OpenStackDrInstanceTemplate: OpenStackDrInstanceTemplate;
  OpenStackDrInstanceTemplateInput: OpenStackDrInstanceTemplateInput;
  OpenStackDrInstanceTemplateInstance: OpenStackDrInstanceTemplateInstance;
  OpenStackDrInstanceTemplateInstanceDependency: OpenStackDrInstanceTemplateInstanceDependency;
  OpenStackDrInstanceTemplateInstanceDependencyInput: OpenStackDrInstanceTemplateInstanceDependencyInput;
  OpenStackDrInstanceTemplateInstanceInput: OpenStackDrInstanceTemplateInstanceInput;
  OpenStackDrInstanceTemplateResponse: OpenStackDrInstanceTemplateResponse;
  OpenStackDrInstanceTemplateResponseInput: OpenStackDrInstanceTemplateResponseInput;
  OpenStackDrInstanceTemplatesResponse: OpenStackDrInstanceTemplatesResponse;
  OpenStackDrInstanceTemplatesResponseInput: OpenStackDrInstanceTemplatesResponseInput;
  OpenStackDrInstanceVolumeMigrationPlan: OpenStackDrInstanceVolumeMigrationPlan;
  OpenStackDrInstanceVolumeMigrationPlanInput: OpenStackDrInstanceVolumeMigrationPlanInput;
  OpenStackDrInstancesResponse: OpenStackDrInstancesResponse;
  OpenStackDrInstancesResponseInput: OpenStackDrInstancesResponseInput;
  OpenStackDrMessage: OpenStackDrMessage;
  OpenStackDrMessageInput: OpenStackDrMessageInput;
  OpenStackDrMessageResponse: OpenStackDrMessageResponse;
  OpenStackDrMessageResponseInput: OpenStackDrMessageResponseInput;
  OpenStackDrMigration: OpenStackDrMigration;
  OpenStackDrMigrationInput: OpenStackDrMigrationInput;
  OpenStackDrMigrationJobStatusResponse: OpenStackDrMigrationJobStatusResponse;
  OpenStackDrMigrationJobStatusResponseInput: OpenStackDrMigrationJobStatusResponseInput;
  OpenStackDrMigrationPlanInstanceDetail: OpenStackDrMigrationPlanInstanceDetail;
  OpenStackDrMigrationPlanInstanceDetailInput: OpenStackDrMigrationPlanInstanceDetailInput;
  OpenStackDrMigrationReplicationStatus: OpenStackDrMigrationReplicationStatus;
  OpenStackDrMigrationReplicationStatusInput: OpenStackDrMigrationReplicationStatusInput;
  OpenStackDrMigrationReplicationStatusResponse: OpenStackDrMigrationReplicationStatusResponse;
  OpenStackDrMigrationReplicationStatusResponseInput: OpenStackDrMigrationReplicationStatusResponseInput;
  OpenStackDrMigrationResponse: OpenStackDrMigrationResponse;
  OpenStackDrMigrationResponseInput: OpenStackDrMigrationResponseInput;
  OpenStackDrMigrationVmStatus: OpenStackDrMigrationVmStatus;
  OpenStackDrMigrationVmStatusInput: OpenStackDrMigrationVmStatusInput;
  OpenStackDrMigrationsResponse: OpenStackDrMigrationsResponse;
  OpenStackDrMigrationsResponseInput: OpenStackDrMigrationsResponseInput;
  OpenStackDrPagination: OpenStackDrPagination;
  OpenStackDrPaginationInput: OpenStackDrPaginationInput;
  OpenStackDrProtectionClusterHistory: OpenStackDrProtectionClusterHistory;
  OpenStackDrProtectionClusterHistoryInput: OpenStackDrProtectionClusterHistoryInput;
  OpenStackDrProtectionGroup: OpenStackDrProtectionGroup;
  OpenStackDrProtectionGroupHistory: OpenStackDrProtectionGroupHistory;
  OpenStackDrProtectionGroupHistoryInput: OpenStackDrProtectionGroupHistoryInput;
  OpenStackDrProtectionGroupInput: OpenStackDrProtectionGroupInput;
  OpenStackDrProtectionGroupRequest: OpenStackDrProtectionGroupRequest;
  OpenStackDrProtectionGroupRequestInput: OpenStackDrProtectionGroupRequestInput;
  OpenStackDrProtectionGroupResponse: OpenStackDrProtectionGroupResponse;
  OpenStackDrProtectionGroupResponseInput: OpenStackDrProtectionGroupResponseInput;
  OpenStackDrProtectionGroupSnapshot: OpenStackDrProtectionGroupSnapshot;
  OpenStackDrProtectionGroupSnapshotInput: OpenStackDrProtectionGroupSnapshotInput;
  OpenStackDrProtectionGroupsResponse: OpenStackDrProtectionGroupsResponse;
  OpenStackDrProtectionGroupsResponseInput: OpenStackDrProtectionGroupsResponseInput;
  OpenStackDrRecoveryJob: OpenStackDrRecoveryJob;
  OpenStackDrRecoveryJobFloatingIpStatus: OpenStackDrRecoveryJobFloatingIpStatus;
  OpenStackDrRecoveryJobFloatingIpStatusInput: OpenStackDrRecoveryJobFloatingIpStatusInput;
  OpenStackDrRecoveryJobInput: OpenStackDrRecoveryJobInput;
  OpenStackDrRecoveryJobInstanceSpecStatus: OpenStackDrRecoveryJobInstanceSpecStatus;
  OpenStackDrRecoveryJobInstanceSpecStatusInput: OpenStackDrRecoveryJobInstanceSpecStatusInput;
  OpenStackDrRecoveryJobInstanceStatus: OpenStackDrRecoveryJobInstanceStatus;
  OpenStackDrRecoveryJobInstanceStatusInput: OpenStackDrRecoveryJobInstanceStatusInput;
  OpenStackDrRecoveryJobInstanceStatusResponse: OpenStackDrRecoveryJobInstanceStatusResponse;
  OpenStackDrRecoveryJobInstanceStatusResponseInput: OpenStackDrRecoveryJobInstanceStatusResponseInput;
  OpenStackDrRecoveryJobKeyPairStatus: OpenStackDrRecoveryJobKeyPairStatus;
  OpenStackDrRecoveryJobKeyPairStatusInput: OpenStackDrRecoveryJobKeyPairStatusInput;
  OpenStackDrRecoveryJobMonitorsResponse: OpenStackDrRecoveryJobMonitorsResponse;
  OpenStackDrRecoveryJobMonitorsResponseInput: OpenStackDrRecoveryJobMonitorsResponseInput;
  OpenStackDrRecoveryJobNetworkStatus: OpenStackDrRecoveryJobNetworkStatus;
  OpenStackDrRecoveryJobNetworkStatusInput: OpenStackDrRecoveryJobNetworkStatusInput;
  OpenStackDrRecoveryJobResponse: OpenStackDrRecoveryJobResponse;
  OpenStackDrRecoveryJobResponseInput: OpenStackDrRecoveryJobResponseInput;
  OpenStackDrRecoveryJobResponseJob: OpenStackDrRecoveryJobResponseJob;
  OpenStackDrRecoveryJobResponseJobInput: OpenStackDrRecoveryJobResponseJobInput;
  OpenStackDrRecoveryJobRouterStatus: OpenStackDrRecoveryJobRouterStatus;
  OpenStackDrRecoveryJobRouterStatusInput: OpenStackDrRecoveryJobRouterStatusInput;
  OpenStackDrRecoveryJobSecurityGroupStatus: OpenStackDrRecoveryJobSecurityGroupStatus;
  OpenStackDrRecoveryJobSecurityGroupStatusInput: OpenStackDrRecoveryJobSecurityGroupStatusInput;
  OpenStackDrRecoveryJobStatus: OpenStackDrRecoveryJobStatus;
  OpenStackDrRecoveryJobStatusInput: OpenStackDrRecoveryJobStatusInput;
  OpenStackDrRecoveryJobStatusResponse: OpenStackDrRecoveryJobStatusResponse;
  OpenStackDrRecoveryJobStatusResponseInput: OpenStackDrRecoveryJobStatusResponseInput;
  OpenStackDrRecoveryJobSubnetStatus: OpenStackDrRecoveryJobSubnetStatus;
  OpenStackDrRecoveryJobSubnetStatusInput: OpenStackDrRecoveryJobSubnetStatusInput;
  OpenStackDrRecoveryJobTenantStatus: OpenStackDrRecoveryJobTenantStatus;
  OpenStackDrRecoveryJobTenantStatusInput: OpenStackDrRecoveryJobTenantStatusInput;
  OpenStackDrRecoveryJobVolumeStatus: OpenStackDrRecoveryJobVolumeStatus;
  OpenStackDrRecoveryJobVolumeStatusInput: OpenStackDrRecoveryJobVolumeStatusInput;
  OpenStackDrRecoveryJobVolumeStatusResponse: OpenStackDrRecoveryJobVolumeStatusResponse;
  OpenStackDrRecoveryJobVolumeStatusResponseInput: OpenStackDrRecoveryJobVolumeStatusResponseInput;
  OpenStackDrRecoveryJobsResponse: OpenStackDrRecoveryJobsResponse;
  OpenStackDrRecoveryJobsResponseInput: OpenStackDrRecoveryJobsResponseInput;
  OpenStackDrRecoveryJobsResponseJobs: OpenStackDrRecoveryJobsResponseJobs;
  OpenStackDrRecoveryJobsResponseJobsInput: OpenStackDrRecoveryJobsResponseJobsInput;
  OpenStackDrRecoveryPlan: OpenStackDrRecoveryPlan;
  OpenStackDrRecoveryPlanDetail: OpenStackDrRecoveryPlanDetail;
  OpenStackDrRecoveryPlanDetailInput: OpenStackDrRecoveryPlanDetailInput;
  OpenStackDrRecoveryPlanInput: OpenStackDrRecoveryPlanInput;
  OpenStackDrRecoveryPlanRequest: OpenStackDrRecoveryPlanRequest;
  OpenStackDrRecoveryPlanRequestInput: OpenStackDrRecoveryPlanRequestInput;
  OpenStackDrRecoveryPlanResponse: OpenStackDrRecoveryPlanResponse;
  OpenStackDrRecoveryPlanResponseInput: OpenStackDrRecoveryPlanResponseInput;
  OpenStackDrRecoveryPlansResponse: OpenStackDrRecoveryPlansResponse;
  OpenStackDrRecoveryPlansResponseInput: OpenStackDrRecoveryPlansResponseInput;
  OpenStackDrRecoveryResult: OpenStackDrRecoveryResult;
  OpenStackDrRecoveryResultInput: OpenStackDrRecoveryResultInput;
  OpenStackDrRecoveryResultReportResponse: OpenStackDrRecoveryResultReportResponse;
  OpenStackDrRecoveryResultReportResponseInput: OpenStackDrRecoveryResultReportResponseInput;
  OpenStackDrRecoveryResultReportsResponse: OpenStackDrRecoveryResultReportsResponse;
  OpenStackDrRecoveryResultReportsResponseInput: OpenStackDrRecoveryResultReportsResponseInput;
  OpenStackDrRecoveryTaskLog: OpenStackDrRecoveryTaskLog;
  OpenStackDrRecoveryTaskLogInput: OpenStackDrRecoveryTaskLogInput;
  OpenStackDrRecoveryTaskLogsResponse: OpenStackDrRecoveryTaskLogsResponse;
  OpenStackDrRecoveryTaskLogsResponseInput: OpenStackDrRecoveryTaskLogsResponseInput;
  OpenStackDrRetryInstancesRequest: OpenStackDrRetryInstancesRequest;
  OpenStackDrRetryInstancesRequestInput: OpenStackDrRetryInstancesRequestInput;
  OpenStackDrRouterRecoveryPlan: OpenStackDrRouterRecoveryPlan;
  OpenStackDrRouterRecoveryPlanInput: OpenStackDrRouterRecoveryPlanInput;
  OpenStackDrRouterRecoveryResult: OpenStackDrRouterRecoveryResult;
  OpenStackDrRouterRecoveryResultInput: OpenStackDrRouterRecoveryResultInput;
  OpenStackDrSnapshotMessageResponse: OpenStackDrSnapshotMessageResponse;
  OpenStackDrSnapshotMessageResponseInput: OpenStackDrSnapshotMessageResponseInput;
  OpenStackDrSnapshotsResponse: OpenStackDrSnapshotsResponse;
  OpenStackDrSnapshotsResponseInput: OpenStackDrSnapshotsResponseInput;
  OpenStackDrStorageRecoveryPlan: OpenStackDrStorageRecoveryPlan;
  OpenStackDrStorageRecoveryPlanInput: OpenStackDrStorageRecoveryPlanInput;
  OpenStackDrSummaryClustersResponse: OpenStackDrSummaryClustersResponse;
  OpenStackDrSummaryClustersResponseInput: OpenStackDrSummaryClustersResponseInput;
  OpenStackDrSummaryClustersResponseSummary: OpenStackDrSummaryClustersResponseSummary;
  OpenStackDrSummaryClustersResponseSummaryInput: OpenStackDrSummaryClustersResponseSummaryInput;
  OpenStackDrSummaryGroupsResponse: OpenStackDrSummaryGroupsResponse;
  OpenStackDrSummaryGroupsResponseInput: OpenStackDrSummaryGroupsResponseInput;
  OpenStackDrSummaryGroupsResponseSummary: OpenStackDrSummaryGroupsResponseSummary;
  OpenStackDrSummaryGroupsResponseSummaryInput: OpenStackDrSummaryGroupsResponseSummaryInput;
  OpenStackDrSummaryInstancesResponse: OpenStackDrSummaryInstancesResponse;
  OpenStackDrSummaryInstancesResponseInput: OpenStackDrSummaryInstancesResponseInput;
  OpenStackDrSummaryInstancesSummary: OpenStackDrSummaryInstancesSummary;
  OpenStackDrSummaryInstancesSummaryInput: OpenStackDrSummaryInstancesSummaryInput;
  OpenStackDrSummaryJobsResponse: OpenStackDrSummaryJobsResponse;
  OpenStackDrSummaryJobsResponseInput: OpenStackDrSummaryJobsResponseInput;
  OpenStackDrSummaryJobsResponseSummary: OpenStackDrSummaryJobsResponseSummary;
  OpenStackDrSummaryJobsResponseSummaryInput: OpenStackDrSummaryJobsResponseSummaryInput;
  OpenStackDrSummaryVolumesResponse: OpenStackDrSummaryVolumesResponse;
  OpenStackDrSummaryVolumesResponseInput: OpenStackDrSummaryVolumesResponseInput;
  OpenStackDrSummaryVolumesResponseSummary: OpenStackDrSummaryVolumesResponseSummary;
  OpenStackDrSummaryVolumesResponseSummaryInput: OpenStackDrSummaryVolumesResponseSummaryInput;
  OpenStackDrTenantRecoveryPlan: OpenStackDrTenantRecoveryPlan;
  OpenStackDrTenantRecoveryPlanInput: OpenStackDrTenantRecoveryPlanInput;
  OpenStackDrUnavailableInstancesResponse: OpenStackDrUnavailableInstancesResponse;
  OpenStackDrUnavailableInstancesResponseInput: OpenStackDrUnavailableInstancesResponseInput;
  OpenStackDrUnavailableInstancesResponseInstances: OpenStackDrUnavailableInstancesResponseInstances;
  OpenStackDrUnavailableInstancesResponseInstancesInput: OpenStackDrUnavailableInstancesResponseInstancesInput;
  OpenStackDrUpdateRecoveryJobRequest: OpenStackDrUpdateRecoveryJobRequest;
  OpenStackDrUpdateRecoveryJobRequestInput: OpenStackDrUpdateRecoveryJobRequestInput;
  OpenStackDrUsable: OpenStackDrUsable;
  OpenStackDrUsableInput: OpenStackDrUsableInput;
  OpenStackDrVolumeRecoveryPlan: OpenStackDrVolumeRecoveryPlan;
  OpenStackDrVolumeRecoveryPlanInput: OpenStackDrVolumeRecoveryPlanInput;
  OpenStackDrVolumeRecoveryResult: OpenStackDrVolumeRecoveryResult;
  OpenStackDrVolumeRecoveryResultInput: OpenStackDrVolumeRecoveryResultInput;
  PauseRecoveryJobInput: PauseRecoveryJobInput;
  Query: {};
  ResumeRecoveryJobInput: ResumeRecoveryJobInput;
  ResumeRecoveryJobMigrationRollbackInput: ResumeRecoveryJobMigrationRollbackInput;
  RetryRecoveryJobInput: RetryRecoveryJobInput;
  RetryRecoveryJobRollbackInput: RetryRecoveryJobRollbackInput;
  RollbackRecoveryJobSimulationInput: RollbackRecoveryJobSimulationInput;
  String: Scalars['String']['output'];
  UpdateProtectionGroupInput: UpdateProtectionGroupInput;
  UpdateRecoveryJobInput: UpdateRecoveryJobInput;
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
  CancelRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationCancelRecoveryJobArgs>>;
  CancelRecoveryJobConfirm?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationCancelRecoveryJobConfirmArgs>>;
  ConfirmRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationConfirmRecoveryJobArgs>>;
  ConfirmRecoveryJobRetry?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationConfirmRecoveryJobRetryArgs>>;
  CreateInstanceTemplate?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceTemplateResponse']>, ParentType, ContextType, Partial<MutationCreateInstanceTemplateArgs>>;
  CreateMigrationJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationCreateMigrationJobArgs>>;
  CreateMigrationPreparation?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationCreateMigrationPreparationArgs>>;
  CreateMigrationReplication?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationCreateMigrationReplicationArgs>>;
  CreateProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupResponse']>, ParentType, ContextType, Partial<MutationCreateProtectionGroupArgs>>;
  CreateProtectionGroupSnapshot?: Resolver<Maybe<ResolversTypes['OpenStackDrSnapshotMessageResponse']>, ParentType, ContextType, Partial<MutationCreateProtectionGroupSnapshotArgs>>;
  CreateRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobResponse']>, ParentType, ContextType, Partial<MutationCreateRecoveryJobArgs>>;
  CreateRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanResponse']>, ParentType, ContextType, Partial<MutationCreateRecoveryPlanArgs>>;
  DeleteInstanceTemplate?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteInstanceTemplateArgs>>;
  DeleteMigration?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteMigrationArgs>>;
  DeleteMigrationReplication?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteMigrationReplicationArgs>>;
  DeleteProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteProtectionGroupArgs>>;
  DeleteRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteRecoveryJobArgs>>;
  DeleteRecoveryJobForce?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteRecoveryJobForceArgs>>;
  DeleteRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteRecoveryPlanArgs>>;
  DeleteRecoveryReport?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteRecoveryReportArgs>>;
  ExtendRecoveryJobPause?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationExtendRecoveryJobPauseArgs>>;
  ExtendRecoveryJobRollbackTime?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationExtendRecoveryJobRollbackTimeArgs>>;
  IgnoreRecoveryJobRollback?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationIgnoreRecoveryJobRollbackArgs>>;
  PauseRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationPauseRecoveryJobArgs>>;
  ResumeRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationResumeRecoveryJobArgs>>;
  ResumeRecoveryJobMigrationRollback?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationResumeRecoveryJobMigrationRollbackArgs>>;
  RetryRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationRetryRecoveryJobArgs>>;
  RetryRecoveryJobRollback?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationRetryRecoveryJobRollbackArgs>>;
  RollbackRecoveryJobSimulation?: Resolver<Maybe<ResolversTypes['OpenStackDrMessageResponse']>, ParentType, ContextType, Partial<MutationRollbackRecoveryJobSimulationArgs>>;
  UpdateProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupResponse']>, ParentType, ContextType, Partial<MutationUpdateProtectionGroupArgs>>;
  UpdateRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobResponse']>, ParentType, ContextType, Partial<MutationUpdateRecoveryJobArgs>>;
  UpdateRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanResponse']>, ParentType, ContextType, Partial<MutationUpdateRecoveryPlanArgs>>;
}>;

export type OpenStackCmClusterResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmCluster'] = ResolversParentTypes['OpenStackCmCluster']> = ResolversObject<{
  api_server_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterPermission']>>>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStateCodeEnum']>, ParentType, ContextType>;
  synchronized_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTypeCodeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmCluster1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmCluster1'] = ResolversParentTypes['OpenStackCmCluster1']> = ResolversObject<{
  api_server_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterPermission1']>>>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStateCodeEnum']>, ParentType, ContextType>;
  synchronized_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTypeCodeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterAvailabilityZoneResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterAvailabilityZone'] = ResolversParentTypes['OpenStackCmClusterAvailabilityZone']> = ResolversObject<{
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterAvailabilityZone1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterAvailabilityZone1'] = ResolversParentTypes['OpenStackCmClusterAvailabilityZone1']> = ResolversObject<{
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterFloatingIpResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterFloatingIp'] = ResolversParentTypes['OpenStackCmClusterFloatingIp']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIpStatusEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterFloatingIp1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterFloatingIp1'] = ResolversParentTypes['OpenStackCmClusterFloatingIp1']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIpStatusEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterFloatingIpStatusEnumResolvers = { ACTIVE: 'ACTIVE', DOWN: 'DOWN', ERROR: 'ERROR' };

export type OpenStackCmClusterHypervisorResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterHypervisor'] = ResolversParentTypes['OpenStackCmClusterHypervisor']> = ResolversObject<{
  agent_installed_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent_last_upgraded_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent_port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  disk_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  disk_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hostname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ssh_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ssh_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ssh_port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisorStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisorStatusEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisorTypeCodeEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vcpu_total_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  vcpu_used_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterHypervisor1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterHypervisor1'] = ResolversParentTypes['OpenStackCmClusterHypervisor1']> = ResolversObject<{
  agent_installed_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent_last_upgraded_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent_port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone1']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  disk_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  disk_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hostname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ssh_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ssh_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ssh_port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisorStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisorStatusEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisorTypeCodeEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vcpu_total_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  vcpu_used_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterHypervisorStateEnumResolvers = { DOWN: 'down', UNKNOWN: 'unknown', UP: 'up' };

export type OpenStackCmClusterHypervisorStatusEnumResolvers = { DISABLED: 'disabled', ENABLED: 'enabled', UNKNOWN: 'unknown' };

export type OpenStackCmClusterHypervisorTypeCodeEnumResolvers = { HYPER_V: 'HYPER_V', KVM: 'KVM', LXC: 'LXC', QEMU: 'QEMU', UML: 'UML', VIRTUOZZO: 'VIRTUOZZO', VMWARE: 'VMWARE', XEN: 'XEN', XENSERVER: 'XENSERVER' };

export type OpenStackCmClusterInstanceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstance'] = ResolversParentTypes['OpenStackCmClusterInstance']> = ResolversObject<{
  availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisor']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  keypair?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterKeyPair']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceNetwork']>>>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterRouter']>>>, ParentType, ContextType>;
  security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceSecurityGroup']>>>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceSpec']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceStatusEnum']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceVolume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstance1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstance1'] = ResolversParentTypes['OpenStackCmClusterInstance1']> = ResolversObject<{
  availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone1']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtra']>, ParentType, ContextType>;
  hypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisor1']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  keypair?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterKeyPair1']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceNetwork1']>>>, ParentType, ContextType>;
  proxy?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceProxy']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterRouter1']>>>, ParentType, ContextType>;
  security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceSecurityGroup1']>>>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceSpec1']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceStatusEnum']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant1']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceVolume1']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceExtraResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceExtra'] = ResolversParentTypes['OpenStackCmClusterInstanceExtra']> = ResolversObject<{
  os?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uefi?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vm_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceExtraSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec'] = ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtraSpecKeyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceExtraSpec1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec1'] = ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec1']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtraSpecKeyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers = { HW_CPU_CORES: 'hw:cpu_cores', HW_CPU_MAX_CORES: 'hw:cpu_max_cores', HW_CPU_MAX_SOCKETS: 'hw:cpu_max_sockets', HW_CPU_MAX_THREADS: 'hw:cpu_max_threads', HW_CPU_POLICY: 'hw:cpu_policy', HW_CPU_SOCKETS: 'hw:cpu_sockets', HW_CPU_THREADS: 'hw:cpu_threads', HW_CPU_THREAD_POLICY: 'hw:cpu_thread_policy', HW_MEM_PAGE_SIZE: 'hw:mem_page_size', HW_NUMA_CPUS__N: 'hw:numa_cpus.N', HW_NUMA_MEM__N: 'hw:numa_mem.N', HW_NUMA_NODES: 'hw:numa_nodes', HW_RNG_RATE_ALLOWED: 'hw_rng:rate-allowed', HW_RNG_RATE_BYTES: 'hw_rng:rate_bytes', HW_RNG_RATE_PERIOD: 'hw_rng:rate_period', HW_WATCHDOG_ACTION: 'hw:watchdog_action', OS_SECURE_BOOT: 'os:secure_boot', PCI_PASSTHROUGH_ALIAS: 'pci_passthrough:alias', QUOTA_CPU_LIMIT: 'quota:cpu_limit', QUOTA_CPU_PERIOD: 'quota:cpu_period', QUOTA_CPU_QUOTA: 'quota:cpu_quota', QUOTA_CPU_RESERVATION: 'quota:cpu_reservation', QUOTA_CPU_SHARES: 'quota:cpu_shares', QUOTA_CPU_SHARES_LEVEL: 'quota:cpu_shares_level', QUOTA_DISK_IO_LIMIT: 'quota:disk_io_limit', QUOTA_DISK_IO_RESERVATION: 'quota:disk_io_reservation', QUOTA_DISK_IO_SHARES_LEVEL: 'quota:disk_io_shares_level', QUOTA_DISK_IO_SHARES_SHARE: 'quota:disk_io_shares_share', QUOTA_DISK_READ_BYTES_SEC: 'quota:disk_read_bytes_sec', QUOTA_DISK_READ_IOPS_SEC: 'quota:disk_read_iops_sec', QUOTA_DISK_TOTAL_BYTES_SEC: 'quota:disk_total_bytes_sec', QUOTA_DISK_TOTAL_IOPS_SEC: 'quota:disk_total_iops_sec', QUOTA_DISK_WRITE_BYTES_SEC: 'quota:disk_write_bytes_sec', QUOTA_DISK_WRITE_IOPS_SEC: 'quota:disk_write_iops_sec', QUOTA_MEMORY_LIMIT: 'quota:memory_limit', QUOTA_MEMORY_RESERVATION: 'quota:memory_reservation', QUOTA_MEMORY_SHARES_LEVEL: 'quota:memory_shares_level', QUOTA_MEMORY_SHARES_SHARE: 'quota:memory_shares_share', QUOTA_VIF_INBOUND_AVERAGE: 'quota:vif_inbound_average', QUOTA_VIF_INBOUND_BURST: 'quota:vif_inbound_burst', QUOTA_VIF_INBOUND_PEAK: 'quota:vif_inbound_peak', QUOTA_VIF_OUTBOUND_AVERAGE: 'quota:vif_outbound_average', QUOTA_VIF_OUTBOUND_BURST: 'quota:vif_outbound_burst', QUOTA_VIF_OUTBOUND_PEAK: 'quota:vif_outbound_peak' };

export type OpenStackCmClusterInstanceNetworkResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceNetwork'] = ResolversParentTypes['OpenStackCmClusterInstanceNetwork']> = ResolversObject<{
  dhcp_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  floating_ip?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceNetwork1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceNetwork1'] = ResolversParentTypes['OpenStackCmClusterInstanceNetwork1']> = ResolversObject<{
  dhcp_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  floating_ip?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp1']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork1']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet1']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceProxyResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceProxy'] = ResolversParentTypes['OpenStackCmClusterInstanceProxy']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  os_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  proxy_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceProxyLinkResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceProxyLink'] = ResolversParentTypes['OpenStackCmClusterInstanceProxyLink']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_proxy?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance1']>, ParentType, ContextType>;
  recovery_proxy?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance1']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceSecurityGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceSecurityGroup'] = ResolversParentTypes['OpenStackCmClusterInstanceSecurityGroup']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRule']>>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceSecurityGroup1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceSecurityGroup1'] = ResolversParentTypes['OpenStackCmClusterInstanceSecurityGroup1']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRule1']>>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant1']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceSpec'] = ResolversParentTypes['OpenStackCmClusterInstanceSpec']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disk_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ephemeral_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  extra_specs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtraSpec']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swap_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vcpu_total_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceSpec1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceSpec1'] = ResolversParentTypes['OpenStackCmClusterInstanceSpec1']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disk_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ephemeral_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  extra_specs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtraSpec1']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swap_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vcpu_total_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceStateEnumResolvers = { CRASHED: 'CRASHED', NOSTATE: 'NOSTATE', PAUSED: 'PAUSED', RUNNING: 'RUNNING', SHUTDOWN: 'SHUTDOWN', SUSPENDED: 'SUSPENDED' };

export type OpenStackCmClusterInstanceStatusEnumResolvers = { ACTIVE: 'ACTIVE', BUILD: 'BUILD', DELETED: 'DELETED', ERROR: 'ERROR', HARD_REBOOT: 'HARD_REBOOT', MIGRATING: 'MIGRATING', PASSWORD: 'PASSWORD', PAUSED: 'PAUSED', REBOOT: 'REBOOT', REBUILD: 'REBUILD', RESCUE: 'RESCUE', RESIZE: 'RESIZE', REVERT_RESIZE: 'REVERT_RESIZE', SHELVED: 'SHELVED', SHELVED_OFFLOADED: 'SHELVED_OFFLOADED', SHUTOFF: 'SHUTOFF', SOFT_DELETED: 'SOFT_DELETED', SUSPENDED: 'SUSPENDED', UNKNOWN: 'UNKNOWN', VERIFY_RESIZE: 'VERIFY_RESIZE' };

export type OpenStackCmClusterInstanceVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceVolume'] = ResolversParentTypes['OpenStackCmClusterInstanceVolume']> = ResolversObject<{
  boot_index?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  device_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceVolume1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceVolume1'] = ResolversParentTypes['OpenStackCmClusterInstanceVolume1']> = ResolversObject<{
  boot_index?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  device_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage1']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume1']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterKeyPairResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterKeyPair'] = ResolversParentTypes['OpenStackCmClusterKeyPair']> = ResolversObject<{
  fingerprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterKeyPairTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterKeyPair1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterKeyPair1'] = ResolversParentTypes['OpenStackCmClusterKeyPair1']> = ResolversObject<{
  fingerprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterKeyPairTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterKeyPairTypeCodeEnumResolvers = { SSH: 'ssh', X509: 'x509' };

export type OpenStackCmClusterNetworkResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterNetwork'] = ResolversParentTypes['OpenStackCmClusterNetwork']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  floating_ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetworkStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetworkStatusEnum']>, ParentType, ContextType>;
  subnets?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSubnet']>>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetworkTypeCodeEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterNetwork1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterNetwork1'] = ResolversParentTypes['OpenStackCmClusterNetwork1']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  floating_ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp1']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetworkStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetworkStatusEnum']>, ParentType, ContextType>;
  subnets?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSubnet1']>>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant1']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetworkTypeCodeEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterNetworkRoutingInterfaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterNetworkRoutingInterface'] = ResolversParentTypes['OpenStackCmClusterNetworkRoutingInterface']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterNetworkRoutingInterface1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterNetworkRoutingInterface1'] = ResolversParentTypes['OpenStackCmClusterNetworkRoutingInterface1']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork1']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet1']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterNetworkStateEnumResolvers = { DOWN: 'down', UP: 'up' };

export type OpenStackCmClusterNetworkStatusEnumResolvers = { ACTIVE: 'ACTIVE', BUILD: 'BUILD', DOWN: 'DOWN', ERROR: 'ERROR' };

export type OpenStackCmClusterNetworkTypeCodeEnumResolvers = { FLAT: 'flat', GENEVE: 'geneve', GRE: 'gre', LOCAL: 'local', VLAN: 'vlan', VXLAN: 'vxlan' };

export type OpenStackCmClusterPermissionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterPermission'] = ResolversParentTypes['OpenStackCmClusterPermission']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  mode_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterPermissionModeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterPermission1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterPermission1'] = ResolversParentTypes['OpenStackCmClusterPermission1']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  mode_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterPermissionModeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterPermissionModeCodeEnumResolvers = { CLUSTER_PERMISSION_MODE_READONLY: 'cluster.permission.mode.readonly', CLUSTER_PERMISSION_MODE_READWRITE: 'cluster.permission.mode.readwrite' };

export type OpenStackCmClusterRouterResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterRouter'] = ResolversParentTypes['OpenStackCmClusterRouter']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterNetworkRoutingInterface']>>>, ParentType, ContextType>;
  extra_routes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterRouterExtraRoute']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  internal_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterNetworkRoutingInterface']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouterStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouterStatusEnum']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterRouter1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterRouter1'] = ResolversParentTypes['OpenStackCmClusterRouter1']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterNetworkRoutingInterface1']>>>, ParentType, ContextType>;
  extra_routes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterRouterExtraRoute']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  internal_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterNetworkRoutingInterface1']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouterStateEnum']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouterStatusEnum']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant1']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterRouterExtraRouteResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterRouterExtraRoute'] = ResolversParentTypes['OpenStackCmClusterRouterExtraRoute']> = ResolversObject<{
  destination?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nexthop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterRouterStateEnumResolvers = { DOWN: 'down', UP: 'up' };

export type OpenStackCmClusterRouterStatusEnumResolvers = { ACTIVE: 'ACTIVE', BUILD: 'BUILD', DOWN: 'DOWN', ERROR: 'ERROR' };

export type OpenStackCmClusterSecurityGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSecurityGroup'] = ResolversParentTypes['OpenStackCmClusterSecurityGroup']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSecurityGroup1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSecurityGroup1'] = ResolversParentTypes['OpenStackCmClusterSecurityGroup1']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant1']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSecurityGroupRuleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSecurityGroupRule'] = ResolversParentTypes['OpenStackCmClusterSecurityGroupRule']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRuleDirectionEnum']>, ParentType, ContextType>;
  ether_type?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRuleEtherTypeEnum']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network_cidr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port_range_max?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  port_range_min?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remote_security_group?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroup']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSecurityGroupRule1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSecurityGroupRule1'] = ResolversParentTypes['OpenStackCmClusterSecurityGroupRule1']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRuleDirectionEnum']>, ParentType, ContextType>;
  ether_type?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRuleEtherTypeEnum']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network_cidr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port_range_max?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  port_range_min?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remote_security_group?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroup1']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSecurityGroupRuleDirectionEnumResolvers = { EGRESS: 'egress', INGRESS: 'ingress' };

export type OpenStackCmClusterSecurityGroupRuleEtherTypeEnumResolvers = { FOUR: '4', SIX: '6' };

export type OpenStackCmClusterStateCodeEnumResolvers = { CLUSTER_STATE_ACTIVE: 'cluster.state.active', CLUSTER_STATE_INACTIVE: 'cluster.state.inactive', CLUSTER_STATE_LOADING: 'cluster.state.loading', CLUSTER_STATE_WARNING: 'cluster.state.warning' };

export type OpenStackCmClusterStorageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterStorage'] = ResolversParentTypes['OpenStackCmClusterStorage']> = ResolversObject<{
  capacity_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorageStatusEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorageTypeCodeEnum']>, ParentType, ContextType>;
  used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterStorage1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterStorage1'] = ResolversParentTypes['OpenStackCmClusterStorage1']> = ResolversObject<{
  capacity_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorageStatusEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorageTypeCodeEnum']>, ParentType, ContextType>;
  used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterStorageStatusEnumResolvers = { AVAILABLE: 'available', UNAVAILABLE: 'unavailable', UNKNOWN: 'unknown' };

export type OpenStackCmClusterStorageTypeCodeEnumResolvers = { OPENSTACK_STORAGE_TYPE_CEPH: 'openstack.storage.type.ceph', OPENSTACK_STORAGE_TYPE_LVM: 'openstack.storage.type.lvm', OPENSTACK_STORAGE_TYPE_NFS: 'openstack.storage.type.nfs', OPENSTACK_STORAGE_TYPE_UNKNOWN: 'openstack.storage.type.unknown' };

export type OpenStackCmClusterSubnetResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSubnet'] = ResolversParentTypes['OpenStackCmClusterSubnet']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dhcp_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dhcp_pools?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSubnetDhcpPool']>>>, ParentType, ContextType>;
  gateway_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gateway_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ipv6_address_mode_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnetIpv6AddressModeCodeEnum']>, ParentType, ContextType>;
  ipv6_ra_mode_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnetIpv6RaModeCodeEnum']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameservers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSubnetNameserver']>>>, ParentType, ContextType>;
  network_cidr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSubnet1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSubnet1'] = ResolversParentTypes['OpenStackCmClusterSubnet1']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dhcp_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dhcp_pools?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSubnetDhcpPool']>>>, ParentType, ContextType>;
  gateway_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gateway_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ipv6_address_mode_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnetIpv6AddressModeCodeEnum']>, ParentType, ContextType>;
  ipv6_ra_mode_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnetIpv6RaModeCodeEnum']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameservers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSubnetNameserver']>>>, ParentType, ContextType>;
  network_cidr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSubnetDhcpPoolResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSubnetDhcpPool'] = ResolversParentTypes['OpenStackCmClusterSubnetDhcpPool']> = ResolversObject<{
  end_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterSubnetIpv6AddressModeCodeEnumResolvers = { DHCPV6_STATEFUL: 'dhcpv6-stateful', DHCPV6_STATELESS: 'dhcpv6-stateless', SLAAC: 'slaac' };

export type OpenStackCmClusterSubnetIpv6RaModeCodeEnumResolvers = { DHCPV6_STATEFUL: 'dhcpv6-stateful', DHCPV6_STATELESS: 'dhcpv6-stateless', SLAAC: 'slaac' };

export type OpenStackCmClusterSubnetNameserverResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterSubnetNameserver'] = ResolversParentTypes['OpenStackCmClusterSubnetNameserver']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nameserver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterTenantResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterTenant'] = ResolversParentTypes['OpenStackCmClusterTenant']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quotas?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterTenantQuota']>>>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterTenant1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterTenant1'] = ResolversParentTypes['OpenStackCmClusterTenant1']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quotas?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterTenantQuota']>>>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterTenantQuotaResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterTenantQuota'] = ResolversParentTypes['OpenStackCmClusterTenantQuota']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterTypeCodeEnumResolvers = { CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes', CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift', CLUSTER_TYPE_OPENSTACK: 'cluster.type.openstack', CLUSTER_TYPE_VMWARE: 'cluster.type.vmware' };

export type OpenStackCmClusterVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterVolume'] = ResolversParentTypes['OpenStackCmClusterVolume']> = ResolversObject<{
  bootable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  multiattach?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterVolumeSnapshot']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolumeStatusEnum']>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterVolume1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterVolume1'] = ResolversParentTypes['OpenStackCmClusterVolume1']> = ResolversObject<{
  bootable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster1']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  multiattach?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterVolumeSnapshot1']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolumeStatusEnum']>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage1']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant1']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterVolumeSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterVolumeSnapshot'] = ResolversParentTypes['OpenStackCmClusterVolumeSnapshot']> = ResolversObject<{
  cluster_volume_group_snapshot_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolumeSnapshotStatusEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterVolumeSnapshot1Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterVolumeSnapshot1'] = ResolversParentTypes['OpenStackCmClusterVolumeSnapshot1']> = ResolversObject<{
  cluster_volume_group_snapshot_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolumeSnapshotStatusEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterVolumeSnapshotStatusEnumResolvers = { AVAILABLE: 'available', CREATING: 'creating', DELETING: 'deleting', ERROR: 'error', ERROR_DELETING: 'error_deleting' };

export type OpenStackCmClusterVolumeStatusEnumResolvers = { ATTACHING: 'attaching', AVAILABLE: 'available', CREATING: 'creating', DELETING: 'deleting', DETACHING: 'detaching', ERROR: 'error', ERROR_DELETING: 'error_deleting', IN_USE: 'in-use', MAINTENANCE: 'maintenance' };

export type OpenStackDrAbnormalStateReasonsResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrAbnormalStateReasons'] = ResolversParentTypes['OpenStackDrAbnormalStateReasons']> = ResolversObject<{
  critical?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  emergency?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  mirroring?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  prepare?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  warning?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrAbnormalStateReasonsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrAbnormalStateReasonsResponse'] = ResolversParentTypes['OpenStackDrAbnormalStateReasonsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrAbnormalStateReasons']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrAddInstanceTemplateRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrAddInstanceTemplateRequest'] = ResolversParentTypes['OpenStackDrAddInstanceTemplateRequest']> = ResolversObject<{
  template?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceTemplate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrAddRecoveryJobRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrAddRecoveryJobRequest'] = ResolversParentTypes['OpenStackDrAddRecoveryJobRequest']> = ResolversObject<{
  force?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJob']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrAvailabilityZoneRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrAvailabilityZoneRecoveryPlan'] = ResolversParentTypes['OpenStackDrAvailabilityZoneRecoveryPlan']> = ResolversObject<{
  protection_cluster_availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone']>, ParentType, ContextType>;
  recovery_cluster_availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone']>, ParentType, ContextType>;
  recovery_cluster_availability_zone_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_availability_zone_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_AVAILABILITY_ZONE_RECOVERY_TYPE_MAPPING: 'dr.recovery.plan.availability-zone.recovery.type.mapping' };

export type OpenStackDrClusterRelationshipResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrClusterRelationship'] = ResolversParentTypes['OpenStackDrClusterRelationship']> = ResolversObject<{
  plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrClusterRelationshipPlan']>>>, ParentType, ContextType>;
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  recovery_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrClusterRelationshipStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrClusterRelationshipPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrClusterRelationshipPlan'] = ResolversParentTypes['OpenStackDrClusterRelationshipPlan']> = ResolversObject<{
  abnormal_state_reasons?: Resolver<Maybe<ResolversTypes['OpenStackDrAbnormalStateReasons']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanDetail']>, ParentType, ContextType>;
  direction_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanDirectionCodeEnum']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mirror_state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanMirrorStateCodeEnum']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  recovery_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshot_retention_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  updatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrClusterRelationshipStateCodeEnumResolvers = { DR_CLUSTER_RELATIONSHIP_STATE_CRITICAL: 'dr.cluster.relationship.state.critical', DR_CLUSTER_RELATIONSHIP_STATE_EMERGENCY: 'dr.cluster.relationship.state.emergency', DR_CLUSTER_RELATIONSHIP_STATE_NORMAL: 'dr.cluster.relationship.state.normal', DR_CLUSTER_RELATIONSHIP_STATE_WARNING: 'dr.cluster.relationship.state.warning' };

export type OpenStackDrClusterRelationshipsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrClusterRelationshipsResponse'] = ResolversParentTypes['OpenStackDrClusterRelationshipsResponse']> = ResolversObject<{
  cluster_relationships?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrClusterRelationship']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrExtendRecoveryJobPausingTimeRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrExtendRecoveryJobPausingTimeRequest'] = ResolversParentTypes['OpenStackDrExtendRecoveryJobPausingTimeRequest']> = ResolversObject<{
  extend_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest'] = ResolversParentTypes['OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest']> = ResolversObject<{
  extend_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrExternalNetworkRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrExternalNetworkRecoveryPlan'] = ResolversParentTypes['OpenStackDrExternalNetworkRecoveryPlan']> = ResolversObject<{
  protection_cluster_external_network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  recovery_cluster_external_network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  recovery_cluster_external_network_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_external_network_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_NETWORK_RECOVERY_TYPE_MAPPING: 'dr.recovery.plan.network.recovery.type.mapping' };

export type OpenStackDrFloatingIpRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrFloatingIpRecoveryPlan'] = ResolversParentTypes['OpenStackDrFloatingIpRecoveryPlan']> = ResolversObject<{
  protection_cluster_floating_ip?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp']>, ParentType, ContextType>;
  unavailable_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unavailable_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrHistoryResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrHistoryResponse'] = ResolversParentTypes['OpenStackDrHistoryResponse']> = ResolversObject<{
  history?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupHistory']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrHypervisorResourcesResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrHypervisorResources'] = ResolversParentTypes['OpenStackDrHypervisorResources']> = ResolversObject<{
  disk_expected_usage?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  disk_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_expected_usage?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vcpu_expected_usage?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  vpu_total_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrHypervisorResourcesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrHypervisorResourcesResponse'] = ResolversParentTypes['OpenStackDrHypervisorResourcesResponse']> = ResolversObject<{
  hypervisor_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrHypervisorResources']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  usable?: Resolver<Maybe<ResolversTypes['OpenStackDrUsable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceMigrationPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceMigrationPlan'] = ResolversParentTypes['OpenStackDrInstanceMigrationPlan']> = ResolversObject<{
  instance_proxy_link?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceProxyLink']>, ParentType, ContextType>;
  protection_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_cluster_availability_zone_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_hypervisor_hostname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_hypervisor_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_instance_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_instance_spec_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_instance_user_script_user_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_keypair_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_storage_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_cluster_storage_type_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_tenant_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceNetworkMigrationPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceNetworkMigrationPlan'] = ResolversParentTypes['OpenStackDrInstanceNetworkMigrationPlan']> = ResolversObject<{
  protection_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_cluster_floating_ip_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_network_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_subnet_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_dhcp_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceRecoveryPlan'] = ResolversParentTypes['OpenStackDrInstanceRecoveryPlan']> = ResolversObject<{
  auto_start_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstance']>>>, ParentType, ContextType>;
  diagnosis_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  diagnosis_method_code?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum']>, ParentType, ContextType>;
  diagnosis_method_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diagnosis_timeout?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protection_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_cluster_availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone']>, ParentType, ContextType>;
  recovery_cluster_availability_zone_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_availability_zone_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_cluster_hypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisor']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnumResolvers = { DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET: 'dr.recovery.plan.instance.diagnosis.method.http-get', DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN: 'dr.recovery.plan.instance.diagnosis.method.port-scan', DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT: 'dr.recovery.plan.instance.diagnosis.method.shell-script' };

export type OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_INSTANCE_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.instance.recovery.type.mirroring' };

export type OpenStackDrInstanceRecoveryResultResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceRecoveryResult'] = ResolversParentTypes['OpenStackDrInstanceRecoveryResult']> = ResolversObject<{
  auto_start_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstance']>>>, ParentType, ContextType>;
  diagnosis_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  diagnosis_method_code?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum']>, ParentType, ContextType>;
  diagnosis_method_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diagnosis_timeout?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protection_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceRecoveryResultResultCodeEnum']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnumResolvers = { DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET: 'dr.recovery.plan.instance.diagnosis.method.http-get', DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN: 'dr.recovery.plan.instance.diagnosis.method.port-scan', DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT: 'dr.recovery.plan.instance.diagnosis.method.shell-script' };

export type OpenStackDrInstanceRecoveryResultResultCodeEnumResolvers = { DR_RECOVERY_INSTANCE_RESULT_CANCELED: 'dr.recovery.instance.result.canceled', DR_RECOVERY_INSTANCE_RESULT_FAILED: 'dr.recovery.instance.result.failed', DR_RECOVERY_INSTANCE_RESULT_SUCCESS: 'dr.recovery.instance.result.success' };

export type OpenStackDrInstanceSecurityGroupMigrationPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceSecurityGroupMigrationPlan'] = ResolversParentTypes['OpenStackDrInstanceSecurityGroupMigrationPlan']> = ResolversObject<{
  protection_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_cluster_security_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_security_group_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceTemplateResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceTemplate'] = ResolversParentTypes['OpenStackDrInstanceTemplate']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceTemplateInstance']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceTemplateInstanceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceTemplateInstance'] = ResolversParentTypes['OpenStackDrInstanceTemplateInstance']> = ResolversObject<{
  auto_start_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceTemplateInstanceDependency']>>>, ParentType, ContextType>;
  diagnosis_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  diagnosis_method_code?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum']>, ParentType, ContextType>;
  diagnosis_method_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diagnosis_timeout?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceTemplateInstanceDependencyResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceTemplateInstanceDependency'] = ResolversParentTypes['OpenStackDrInstanceTemplateInstanceDependency']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnumResolvers = { DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET: 'dr.recovery.plan.instance.diagnosis.method.http-get', DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN: 'dr.recovery.plan.instance.diagnosis.method.port-scan', DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT: 'dr.recovery.plan.instance.diagnosis.method.shell-script' };

export type OpenStackDrInstanceTemplateResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceTemplateResponse'] = ResolversParentTypes['OpenStackDrInstanceTemplateResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceTemplate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceTemplatesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceTemplatesResponse'] = ResolversParentTypes['OpenStackDrInstanceTemplatesResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  templates?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceTemplate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceVolumeMigrationPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceVolumeMigrationPlan'] = ResolversParentTypes['OpenStackDrInstanceVolumeMigrationPlan']> = ResolversObject<{
  protection_cluster_instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_cluster_snapshot_volume_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_volume_boot_index?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_cluster_volume_bootable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_volume_device_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_volume_uefi_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_volume_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstancesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstancesResponse'] = ResolversParentTypes['OpenStackDrInstancesResponse']> = ResolversObject<{
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstance']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMessageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMessage'] = ResolversParentTypes['OpenStackDrMessage']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMessageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMessageResponse'] = ResolversParentTypes['OpenStackDrMessageResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigration'] = ResolversParentTypes['OpenStackDrMigration']> = ResolversObject<{
  abnormal_state_reasons?: Resolver<Maybe<ResolversTypes['OpenStackDrAbnormalStateReasons']>, ParentType, ContextType>;
  auto_sync_interval?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMigrationPlanInstanceDetail']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  recovery_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationJobStatusEnumResolvers = { CUSTOMIZATION_CREATE: 'customization.create', CUSTOMIZATION_DELETE: 'customization.delete', CUSTOMIZATION_STATUS_CHECK: 'customization.status.check', DONE: 'done', FAILED: 'failed', NOT_FOUND: 'not.found', PREPARATION_RUN: 'preparation.run', PREPARATION_STATUS_CHECK: 'preparation.status.check', REPLICATION_DELETE: 'replication.delete', REPLICATION_LOCK: 'replication.lock', REPLICATION_LOCK_STATUS_CHECK: 'replication.lock.status.check', REPLICATION_STATUS_CHECK: 'replication.status.check', REPLICATION_UNLOCK: 'replication.unlock', REPLICATION_UNLOCK_STATUS_CHECK: 'replication.unlock.status.check', START: 'start', UNKNOWN: 'unknown', VM_CREATE: 'vm.create', VOLUME_ATTACH: 'volume.attach', VOLUME_CREATE: 'volume.create', VOLUME_DETACH: 'volume.detach', VOLUME_SNAPSHOT_CREATE: 'volume.snapshot.create' };

export type OpenStackDrMigrationJobStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationJobStatusResponse'] = ResolversParentTypes['OpenStackDrMigrationJobStatusResponse']> = ResolversObject<{
  job_type?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationJobTypeEnum']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationJobStatusEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationJobTypeEnumResolvers = { CUTOVER: 'cutover', SIMULATION: 'simulation' };

export type OpenStackDrMigrationPlanInstanceDetailResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationPlanInstanceDetail'] = ResolversParentTypes['OpenStackDrMigrationPlanInstanceDetail']> = ResolversObject<{
  instance?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceMigrationPlan']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceNetworkMigrationPlan']>>>, ParentType, ContextType>;
  security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceSecurityGroupMigrationPlan']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceVolumeMigrationPlan']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationReplicationStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationReplicationStatus'] = ResolversParentTypes['OpenStackDrMigrationReplicationStatus']> = ResolversObject<{
  cause?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  err_code?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationReplicationStatusEnum']>, ParentType, ContextType>;
  vm_replication_status?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMigrationVmStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationReplicationStatusEnumResolvers = { DONE: 'done', MIRRORING: 'mirroring', NOT_FOUND: 'notFound', RUNNING: 'running', SWITCHING: 'switching', UNKNOWN: 'unknown', UPDATING: 'updating' };

export type OpenStackDrMigrationReplicationStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationReplicationStatusResponse'] = ResolversParentTypes['OpenStackDrMigrationReplicationStatusResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationReplicationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationResponse'] = ResolversParentTypes['OpenStackDrMigrationResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['OpenStackDrMigration']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationVmStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationVmStatus'] = ResolversParentTypes['OpenStackDrMigrationVmStatus']> = ResolversObject<{
  cause?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  err_code?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percentage?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationReplicationStatusEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrMigrationsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrMigrationsResponse'] = ResolversParentTypes['OpenStackDrMigrationsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMigration']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrPaginationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrPagination'] = ResolversParentTypes['OpenStackDrPagination']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_items?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionClusterHistoryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionClusterHistory'] = ResolversParentTypes['OpenStackDrProtectionClusterHistory']> = ResolversObject<{
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionClusterTypeCodeEnumResolvers = { CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes', CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift', CLUSTER_TYPE_OPENSTACK: 'cluster.type.openstack', CLUSTER_TYPE_VMWARE: 'cluster.type.vmware' };

export type OpenStackDrProtectionGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroup'] = ResolversParentTypes['OpenStackDrProtectionGroup']> = ResolversObject<{
  abnormal_state_reasons?: Resolver<Maybe<ResolversTypes['OpenStackDrAbnormalStateReasons']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstance']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  recovery_point_objective?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_objective_type?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPointObjectiveTypeEnum']>, ParentType, ContextType>;
  recovery_time_objective?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshot_interval?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  snapshot_interval_type?: Resolver<Maybe<ResolversTypes['OpenStackDrScheduleSnapshotIntervalTypeEnum']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrScheduleStateCodeEnum']>, ParentType, ContextType>;
  updatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionGroupHistoryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroupHistory'] = ResolversParentTypes['OpenStackDrProtectionGroupHistory']> = ResolversObject<{
  clusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrProtectionClusterHistory']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionGroupRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroupRequest'] = ResolversParentTypes['OpenStackDrProtectionGroupRequest']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionGroupResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroupResponse'] = ResolversParentTypes['OpenStackDrProtectionGroupResponse']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionGroupSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroupSnapshot'] = ResolversParentTypes['OpenStackDrProtectionGroupSnapshot']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrProtectionGroupsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroupsResponse'] = ResolversParentTypes['OpenStackDrProtectionGroupsResponse']> = ResolversObject<{
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJob'] = ResolversParentTypes['OpenStackDrRecoveryJob']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  next_runtime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  operation_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobOperationCodeEnum']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlan']>, ParentType, ContextType>;
  recovery_point_snapshot?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupSnapshot']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['CloudSchedule']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStateCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryTypeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobFloatingIpStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobFloatingIpStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobFloatingIpStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  floating_ip?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobInstanceSpecStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobInstanceSpecStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobInstanceSpecStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  instance_spec?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceSpec']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobInstanceStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobInstanceStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobInstanceStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceStatusResultCodeEnum']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceStatusStateCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobInstanceStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobInstanceStatusResponse'] = ResolversParentTypes['OpenStackDrRecoveryJobInstanceStatusResponse']> = ResolversObject<{
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobInstanceStatusResultCodeEnumResolvers = { DR_RECOVERY_INSTANCE_RESULT_CANCELED: 'dr.recovery.instance.result.canceled', DR_RECOVERY_INSTANCE_RESULT_FAILED: 'dr.recovery.instance.result.failed', DR_RECOVERY_INSTANCE_RESULT_SUCCESS: 'dr.recovery.instance.result.success', DR_RECOVERY_INSTANCE_RESULT_UNKNOWN: 'dr.recovery.instance.result.unknown' };

export type OpenStackDrRecoveryJobInstanceStatusStateCodeEnumResolvers = { DR_RECOVERY_JOB_INSTANCE_STATE_BOOTING: 'dr.recovery.job.instance.state.booting', DR_RECOVERY_JOB_INSTANCE_STATE_DIAGNOSING: 'dr.recovery.job.instance.state.diagnosing', DR_RECOVERY_JOB_INSTANCE_STATE_DONE: 'dr.recovery.job.instance.state.done', DR_RECOVERY_JOB_INSTANCE_STATE_EXCEPTED: 'dr.recovery.job.instance.state.excepted', DR_RECOVERY_JOB_INSTANCE_STATE_FAILED: 'dr.recovery.job.instance.state.failed', DR_RECOVERY_JOB_INSTANCE_STATE_IGNORED: 'dr.recovery.job.instance.state.ignored', DR_RECOVERY_JOB_INSTANCE_STATE_PREPARING: 'dr.recovery.job.instance.state.preparing', DR_RECOVERY_JOB_INSTANCE_STATE_READY: 'dr.recovery.job.instance.state.ready', DR_RECOVERY_JOB_INSTANCE_STATE_RUNNING: 'dr.recovery.job.instance.state.running', DR_RECOVERY_JOB_INSTANCE_STATE_SUCCESS: 'dr.recovery.job.instance.state.success' };

export type OpenStackDrRecoveryJobKeyPairStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobKeyPairStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobKeyPairStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  keypair?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterKeyPair']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobKeyPairStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobMonitorsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobMonitorsResponse'] = ResolversParentTypes['OpenStackDrRecoveryJobMonitorsResponse']> = ResolversObject<{
  floating_ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobFloatingIpStatus']>>>, ParentType, ContextType>;
  instance_specs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceSpecStatus']>>>, ParentType, ContextType>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceStatus']>>>, ParentType, ContextType>;
  keypairs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobKeyPairStatus']>>>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobNetworkStatus']>>>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobRouterStatus']>>>, ParentType, ContextType>;
  security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobSecurityGroupStatus']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatus']>, ParentType, ContextType>;
  subnets?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobSubnetStatus']>>>, ParentType, ContextType>;
  tenants?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobTenantStatus']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobVolumeStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobNetworkStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobNetworkStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobNetworkStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobNetworkStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobNetworkStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobOperationCodeEnumResolvers = { CANCEL: 'cancel', CANCEL_CONFIRM: 'cancel-confirm', CONFIRM: 'confirm', IGNORE_ROLLBACK: 'ignore-rollback', PAUSE: 'pause', RETRY: 'retry', RETRY_CONFIRM: 'retry-confirm', RETRY_ROLLBACK: 'retry-rollback', ROLLBACK: 'rollback', RUN: 'run' };

export type OpenStackDrRecoveryJobRecoveryPointTypeCodeEnumResolvers = { DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST: 'dr.recovery.recovery_point.type.latest', DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT: 'dr.recovery.recovery_point.type.latest_snapshot', DR_RECOVERY_RECOVERY_POINT_TYPE_SNAPSHOT: 'dr.recovery.recovery_point.type.snapshot' };

export type OpenStackDrRecoveryJobResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobResponse'] = ResolversParentTypes['OpenStackDrRecoveryJobResponse']> = ResolversObject<{
  job?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobResponseJob']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobResponseJobResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobResponseJob'] = ResolversParentTypes['OpenStackDrRecoveryJobResponseJob']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  next_runtime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  operation_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobOperationCodeEnum']>, ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlan']>, ParentType, ContextType>;
  recovery_point_snapshot?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupSnapshot']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['CloudSchedule']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStateCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryTypeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobRouterStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobRouterStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobRouterStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRouterStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  router?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouter']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobRouterStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobSecurityGroupStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobSecurityGroupStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobSecurityGroupStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  security_group?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroup']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnumResolvers = { CANCELED: 'canceled', FAILED: 'failed', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnumResolvers = { DONE: 'done', EXCEPTED: 'excepted', FAILED: 'failed', PREPARING: 'preparing', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobStateCodeEnumResolvers = { DR_RECOVERY_JOB_STATE_CANCELING: 'dr.recovery.job.state.canceling', DR_RECOVERY_JOB_STATE_CLEARING: 'dr.recovery.job.state.clearing', DR_RECOVERY_JOB_STATE_CLEAR_FAILED: 'dr.recovery.job.state.clear-failed', DR_RECOVERY_JOB_STATE_COMPLETED: 'dr.recovery.job.state.completed', DR_RECOVERY_JOB_STATE_FINISHED: 'dr.recovery.job.state.finished', DR_RECOVERY_JOB_STATE_PAUSED: 'dr.recovery.job.state.paused', DR_RECOVERY_JOB_STATE_PENDING: 'dr.recovery.job.state.pending', DR_RECOVERY_JOB_STATE_REPORTING: 'dr.recovery.job.state.reporting', DR_RECOVERY_JOB_STATE_RUNNING: 'dr.recovery.job.state.running', DR_RECOVERY_JOB_STATE_WAITING: 'dr.recovery.job.state.waiting' };

export type OpenStackDrRecoveryJobStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobStatus']> = ResolversObject<{
  elapsed_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  failed_reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  operation_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobOperationCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusResultCodeEnum']>, ParentType, ContextType>;
  resume_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rollback_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStateCodeEnum']>, ParentType, ContextType>;
  warning_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  warning_reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobStatusCodeEnumResolvers = { DONE: 'done', RUNNING: 'running', WAITING: 'waiting' };

export type OpenStackDrRecoveryJobStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobStatusResponse'] = ResolversParentTypes['OpenStackDrRecoveryJobStatusResponse']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobStatusResultCodeEnumResolvers = { DR_RECOVERY_RESULT_CANCELED: 'dr.recovery.result.canceled', DR_RECOVERY_RESULT_FAILED: 'dr.recovery.result.failed', DR_RECOVERY_RESULT_PARTIAL_SUCCESS: 'dr.recovery.result.partial_success', DR_RECOVERY_RESULT_SUCCESS: 'dr.recovery.result.success' };

export type OpenStackDrRecoveryJobStatusTypeCodeEnumResolvers = { DR_MIGRATION_TASK_CREATE: 'dr.migration.task.create', DR_MIGRATION_TASK_DELETE: 'dr.migration.task.delete' };

export type OpenStackDrRecoveryJobSubnetStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobSubnetStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobSubnetStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobSubnetStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobSubnetStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobTenantStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobTenantStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobTenantStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobTenantStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusCodeEnum']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobTenantStatusResultCodeEnumResolvers = { CANCELED: 'canceled', EXCEPTED: 'excepted', FAILED: 'failed', IGNORED: 'ignored', SUCCESS: 'success' };

export type OpenStackDrRecoveryJobVolumeStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobVolumeStatus'] = ResolversParentTypes['OpenStackDrRecoveryJobVolumeStatus']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobVolumeStatusResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobVolumeStatusStateCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusTypeCodeEnum']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobVolumeStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobVolumeStatusResponse'] = ResolversParentTypes['OpenStackDrRecoveryJobVolumeStatusResponse']> = ResolversObject<{
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobVolumeStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobVolumeStatusResultCodeEnumResolvers = { DR_RECOVERY_VOLUME_RESULT_CANCELED: 'dr.recovery.volume.result.canceled', DR_RECOVERY_VOLUME_RESULT_FAILED: 'dr.recovery.volume.result.failed', DR_RECOVERY_VOLUME_RESULT_SUCCESS: 'dr.recovery.volume.result.success' };

export type OpenStackDrRecoveryJobVolumeStatusStateCodeEnumResolvers = { DR_RECOVERY_JOB_VOLUME_STATE_DONE: 'dr.recovery.job.volume.state.done', DR_RECOVERY_JOB_VOLUME_STATE_EXCEPTED: 'dr.recovery.job.volume.state.excepted', DR_RECOVERY_JOB_VOLUME_STATE_FAILED: 'dr.recovery.job.volume.state.failed', DR_RECOVERY_JOB_VOLUME_STATE_PREPARING: 'dr.recovery.job.volume.state.preparing', DR_RECOVERY_JOB_VOLUME_STATE_SUCCESS: 'dr.recovery.job.volume.state.success' };

export type OpenStackDrRecoveryJobsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobsResponse'] = ResolversParentTypes['OpenStackDrRecoveryJobsResponse']> = ResolversObject<{
  jobs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryJobsResponseJobs']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryJobsResponseJobsResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryJobsResponseJobs'] = ResolversParentTypes['OpenStackDrRecoveryJobsResponseJobs']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroup']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  next_runtime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  operation_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobOperationCodeEnum']>, ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlan']>, ParentType, ContextType>;
  recovery_point_snapshot?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupSnapshot']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['CloudSchedule']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStateCodeEnum']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryTypeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryPlan'] = ResolversParentTypes['OpenStackDrRecoveryPlan']> = ResolversObject<{
  abnormal_state_reasons?: Resolver<Maybe<ResolversTypes['OpenStackDrAbnormalStateReasons']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanDetail']>, ParentType, ContextType>;
  direction_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanDirectionCodeEnum']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mirror_state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanMirrorStateCodeEnum']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  recovery_cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshot_retention_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanStateCodeEnum']>, ParentType, ContextType>;
  updatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryPlanDetailResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryPlanDetail'] = ResolversParentTypes['OpenStackDrRecoveryPlanDetail']> = ResolversObject<{
  availability_zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrAvailabilityZoneRecoveryPlan']>>>, ParentType, ContextType>;
  external_networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrExternalNetworkRecoveryPlan']>>>, ParentType, ContextType>;
  extra_remote_security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroup']>>>, ParentType, ContextType>;
  floating_ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrFloatingIpRecoveryPlan']>>>, ParentType, ContextType>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceRecoveryPlan']>>>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRouterRecoveryPlan']>>>, ParentType, ContextType>;
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrStorageRecoveryPlan']>>>, ParentType, ContextType>;
  tenants?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrTenantRecoveryPlan']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrVolumeRecoveryPlan']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryPlanDirectionCodeEnumResolvers = { DR_RECOVERY_DIRECTION_FAILBACK: 'dr.recovery.direction.failback', DR_RECOVERY_DIRECTION_FAILOVER: 'dr.recovery.direction.failover' };

export type OpenStackDrRecoveryPlanMirrorStateCodeEnumResolvers = { DR_RECOVERY_PLAN_STATE_MIRRORING: 'dr.recovery.plan.state.mirroring', DR_RECOVERY_PLAN_STATE_PAUSED: 'dr.recovery.plan.state.paused', DR_RECOVERY_PLAN_STATE_PREPARE: 'dr.recovery.plan.state.prepare', DR_RECOVERY_PLAN_STATE_STOPPED: 'dr.recovery.plan.state.stopped', DR_RECOVERY_PLAN_STATE_WARNING: 'dr.recovery.plan.state.warning' };

export type OpenStackDrRecoveryPlanRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryPlanRequest'] = ResolversParentTypes['OpenStackDrRecoveryPlanRequest']> = ResolversObject<{
  force?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryPlanResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryPlanResponse'] = ResolversParentTypes['OpenStackDrRecoveryPlanResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryPlanStateCodeEnumResolvers = { DR_RECOVERY_PLAN_STATE_CRITICAL: 'dr.recovery.plan.state.critical', DR_RECOVERY_PLAN_STATE_EMERGENCY: 'dr.recovery.plan.state.emergency', DR_RECOVERY_PLAN_STATE_NORMAL: 'dr.recovery.plan.state.normal', DR_RECOVERY_PLAN_STATE_WARNING: 'dr.recovery.plan.state.warning' };

export type OpenStackDrRecoveryPlansResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryPlansResponse'] = ResolversParentTypes['OpenStackDrRecoveryPlansResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryPlan']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryPointObjectiveTypeEnumResolvers = { RECOVERY_POINT_OBJECTIVE_TYPE_DAY: 'recovery.point.objective.type.day', RECOVERY_POINT_OBJECTIVE_TYPE_HOUR: 'recovery.point.objective.type.hour', RECOVERY_POINT_OBJECTIVE_TYPE_MINUTE: 'recovery.point.objective.type.minute' };

export type OpenStackDrRecoveryResultResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryResult'] = ResolversParentTypes['OpenStackDrRecoveryResult']> = ResolversObject<{
  approver_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  approver_department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  approver_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  approver_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  approver_position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elapsed_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  failed_reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstanceRecoveryResult']>>>, ParentType, ContextType>;
  operator_account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operator_department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operator_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  operator_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operator_position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protection_cluster_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster_remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster_type_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protection_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_cluster_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_type_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_direction_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanDirectionCodeEnum']>, ParentType, ContextType>;
  recovery_plan_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_plan_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_plan_remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_objective?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_objective_type?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPointObjectiveTypeEnum']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  recovery_time_objective?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryTypeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryResultResultCodeEnum']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRouterRecoveryResult']>>>, ParentType, ContextType>;
  schedule_type?: Resolver<Maybe<ResolversTypes['CloudScheduleTypeEnum']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  task_logs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryTaskLog']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrVolumeRecoveryResult']>>>, ParentType, ContextType>;
  warning_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  warning_reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryResultReportResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryResultReportResponse'] = ResolversParentTypes['OpenStackDrRecoveryResultReportResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  report?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryResultReportsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryResultReportsResponse'] = ResolversParentTypes['OpenStackDrRecoveryResultReportsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackDrPagination']>, ParentType, ContextType>;
  reports?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryResultResultCodeEnumResolvers = { DR_RECOVERY_RESULT_CANCELED: 'dr.recovery.result.canceled', DR_RECOVERY_RESULT_FAILED: 'dr.recovery.result.failed', DR_RECOVERY_RESULT_PARTIAL_SUCCESS: 'dr.recovery.result.partial_success', DR_RECOVERY_RESULT_SUCCESS: 'dr.recovery.result.success' };

export type OpenStackDrRecoveryTaskLogResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryTaskLog'] = ResolversParentTypes['OpenStackDrRecoveryTaskLog']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  log_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  log_seq?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryTaskLogsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRecoveryTaskLogsResponse'] = ResolversParentTypes['OpenStackDrRecoveryTaskLogsResponse']> = ResolversObject<{
  task_logs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRecoveryTaskLog']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRecoveryTypeEnumResolvers = { DR_RECOVERY_TYPE_MIGRATION: 'dr.recovery.type.migration', DR_RECOVERY_TYPE_SIMULATION: 'dr.recovery.type.simulation' };

export type OpenStackDrReportResultEnumResolvers = { DR_RECOVERY_RESULT_CANCELED: 'dr.recovery.result.canceled', DR_RECOVERY_RESULT_FAILED: 'dr.recovery.result.failed', DR_RECOVERY_RESULT_PARTIAL_SUCCESS: 'dr.recovery.result.partial_success', DR_RECOVERY_RESULT_SUCCESS: 'dr.recovery.result.success' };

export type OpenStackDrRetryInstancesRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRetryInstancesRequest'] = ResolversParentTypes['OpenStackDrRetryInstancesRequest']> = ResolversObject<{
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstance']>>>, ParentType, ContextType>;
  recovery_point_snapshot?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupSnapshot']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRouterRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRouterRecoveryPlan'] = ResolversParentTypes['OpenStackDrRouterRecoveryPlan']> = ResolversObject<{
  protection_cluster_router?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouter']>, ParentType, ContextType>;
  recovery_cluster_external_network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  recovery_cluster_external_network_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_external_network_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_cluster_external_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterNetworkRoutingInterface']>>>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_NETWORK_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.network.recovery.type.mirroring' };

export type OpenStackDrRouterRecoveryResultResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRouterRecoveryResult'] = ResolversParentTypes['OpenStackDrRouterRecoveryResult']> = ResolversObject<{
  protection_cluster_router?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouter']>, ParentType, ContextType>;
  recovery_cluster_router?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrScheduleSnapshotIntervalTypeEnumResolvers = { SNAPSHOT_INTERVAL_TYPE_DAILY: 'snapshot.interval.type.daily', SNAPSHOT_INTERVAL_TYPE_HOURLY: 'snapshot.interval.type.hourly', SNAPSHOT_INTERVAL_TYPE_MINUTELY: 'snapshot.interval.type.minutely' };

export type OpenStackDrScheduleStateCodeEnumResolvers = { DR_PROTECTION_GROUP_STATE_CRITICAL: 'dr.protection.group.state.critical', DR_PROTECTION_GROUP_STATE_EMERGENCY: 'dr.protection.group.state.emergency', DR_PROTECTION_GROUP_STATE_NORMAL: 'dr.protection.group.state.normal', DR_PROTECTION_GROUP_STATE_WARNING: 'dr.protection.group.state.warning' };

export type OpenStackDrSnapshotMessageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSnapshotMessageResponse'] = ResolversParentTypes['OpenStackDrSnapshotMessageResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSnapshotsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSnapshotsResponse'] = ResolversParentTypes['OpenStackDrSnapshotsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrProtectionGroupSnapshot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrStorageRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrStorageRecoveryPlan'] = ResolversParentTypes['OpenStackDrStorageRecoveryPlan']> = ResolversObject<{
  protection_cluster_storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  recovery_cluster_storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  recovery_cluster_storage_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_storage_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  unavailable_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unavailable_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_STORAGE_RECOVERY_TYPE_MAPPING: 'dr.recovery.plan.storage.recovery.type.mapping' };

export type OpenStackDrSummaryClustersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryClustersResponse'] = ResolversParentTypes['OpenStackDrSummaryClustersResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryClustersResponseSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryClustersResponseSummaryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryClustersResponseSummary'] = ResolversParentTypes['OpenStackDrSummaryClustersResponseSummary']> = ResolversObject<{
  active_cluster?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  inactive_cluster?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_cluster?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryGroupsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryGroupsResponse'] = ResolversParentTypes['OpenStackDrSummaryGroupsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryGroupsResponseSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryGroupsResponseSummaryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryGroupsResponseSummary'] = ResolversParentTypes['OpenStackDrSummaryGroupsResponseSummary']> = ResolversObject<{
  critical_group?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  emergency_group?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  normal_group?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_group?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  warning_group?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryInstancesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryInstancesResponse'] = ResolversParentTypes['OpenStackDrSummaryInstancesResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryInstancesSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryInstancesSummaryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryInstancesSummary'] = ResolversParentTypes['OpenStackDrSummaryInstancesSummary']> = ResolversObject<{
  protection_instance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_instance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryJobsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryJobsResponse'] = ResolversParentTypes['OpenStackDrSummaryJobsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrSummaryJobsResponseSummary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryJobsResponseSummaryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryJobsResponseSummary'] = ResolversParentTypes['OpenStackDrSummaryJobsResponseSummary']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fail?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryVolumesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryVolumesResponse'] = ResolversParentTypes['OpenStackDrSummaryVolumesResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryVolumesResponseSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSummaryVolumesResponseSummaryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSummaryVolumesResponseSummary'] = ResolversParentTypes['OpenStackDrSummaryVolumesResponseSummary']> = ResolversObject<{
  protection_volume?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrTenantRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrTenantRecoveryPlan'] = ResolversParentTypes['OpenStackDrTenantRecoveryPlan']> = ResolversObject<{
  protection_cluster_tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  recovery_cluster_tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  recovery_cluster_tenant_mirror_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recovery_cluster_tenant_mirror_name_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_tenant_mirror_name_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_TENANT_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.tenant.recovery.type.mirroring' };

export type OpenStackDrUnavailableInstancesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrUnavailableInstancesResponse'] = ResolversParentTypes['OpenStackDrUnavailableInstancesResponse']> = ResolversObject<{
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrUnavailableInstancesResponseInstances']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrUnavailableInstancesResponseInstancesResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrUnavailableInstancesResponseInstances'] = ResolversParentTypes['OpenStackDrUnavailableInstancesResponseInstances']> = ResolversObject<{
  instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  unavailable_reasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrUpdateRecoveryJobRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrUpdateRecoveryJobRequest'] = ResolversParentTypes['OpenStackDrUpdateRecoveryJobRequest']> = ResolversObject<{
  force?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJob']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrUsableResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrUsable'] = ResolversParentTypes['OpenStackDrUsable']> = ResolversObject<{
  usable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrVolumeRecoveryPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrVolumeRecoveryPlan'] = ResolversParentTypes['OpenStackDrVolumeRecoveryPlan']> = ResolversObject<{
  protection_cluster_volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
  recovery_cluster_storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  recovery_cluster_storage_update_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_cluster_storage_update_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  recovery_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum']>, ParentType, ContextType>;
  unavailable_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unavailable_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnumResolvers = { DR_RECOVERY_PLAN_VOLUME_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.volume.recovery.type.mirroring' };

export type OpenStackDrVolumeRecoveryResultResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrVolumeRecoveryResult'] = ResolversParentTypes['OpenStackDrVolumeRecoveryResult']> = ResolversObject<{
  failed_reason?: Resolver<Maybe<ResolversTypes['OpenStackDrMessage']>, ParentType, ContextType>;
  finished_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protection_cluster_volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
  recovery_cluster_volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
  recovery_point?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_type_code?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum']>, ParentType, ContextType>;
  result_code?: Resolver<Maybe<ResolversTypes['OpenStackDrVolumeRecoveryResultResultCodeEnum']>, ParentType, ContextType>;
  rollback_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  started_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrVolumeRecoveryResultResultCodeEnumResolvers = { DR_RECOVERY_VOLUME_RESULT_CANCELED: 'dr.recovery.volume.result.canceled', DR_RECOVERY_VOLUME_RESULT_FAILED: 'dr.recovery.volume.result.failed', DR_RECOVERY_VOLUME_RESULT_SUCCESS: 'dr.recovery.volume.result.success' };

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetDashboardClusterRelationships?: Resolver<Maybe<ResolversTypes['OpenStackDrClusterRelationshipsResponse']>, ParentType, ContextType, Partial<QueryGetDashboardClusterRelationshipsArgs>>;
  GetDashboardClustersSummary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryClustersResponse']>, ParentType, ContextType>;
  GetDashboardGroupsSummary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryGroupsResponse']>, ParentType, ContextType>;
  GetDashboardInstancesSummary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryInstancesResponse']>, ParentType, ContextType>;
  GetDashboardJobsSummary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryJobsResponse']>, ParentType, ContextType, Partial<QueryGetDashboardJobsSummaryArgs>>;
  GetDashboardVolumesSummary?: Resolver<Maybe<ResolversTypes['OpenStackDrSummaryVolumesResponse']>, ParentType, ContextType>;
  GetHypervisor?: Resolver<Maybe<ResolversTypes['OpenStackDrHypervisorResourcesResponse']>, ParentType, ContextType, Partial<QueryGetHypervisorArgs>>;
  GetInstanceTemplate?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceTemplateResponse']>, ParentType, ContextType, Partial<QueryGetInstanceTemplateArgs>>;
  GetInstanceTemplates?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceTemplatesResponse']>, ParentType, ContextType, Partial<QueryGetInstanceTemplatesArgs>>;
  GetMigration?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationResponse']>, ParentType, ContextType, Partial<QueryGetMigrationArgs>>;
  GetMigrationJobStatus?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationJobStatusResponse']>, ParentType, ContextType, Partial<QueryGetMigrationJobStatusArgs>>;
  GetMigrationReplicationStatus?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationReplicationStatusResponse']>, ParentType, ContextType, Partial<QueryGetMigrationReplicationStatusArgs>>;
  GetMigrations?: Resolver<Maybe<ResolversTypes['OpenStackDrMigrationsResponse']>, ParentType, ContextType, Partial<QueryGetMigrationsArgs>>;
  GetProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupArgs>>;
  GetProtectionGroupSnapshot?: Resolver<Maybe<ResolversTypes['OpenStackDrSnapshotsResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupSnapshotArgs>>;
  GetProtectionGroups?: Resolver<Maybe<ResolversTypes['OpenStackDrProtectionGroupsResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupsArgs>>;
  GetRecoveryJob?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobArgs>>;
  GetRecoveryJobInstanceStatus?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobInstanceStatusResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobInstanceStatusArgs>>;
  GetRecoveryJobMonitors?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobMonitorsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobMonitorsArgs>>;
  GetRecoveryJobStatus?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobStatusResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobStatusArgs>>;
  GetRecoveryJobTaskLog?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryTaskLogsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobTaskLogArgs>>;
  GetRecoveryJobVolumeStatus?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobVolumeStatusResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobVolumeStatusArgs>>;
  GetRecoveryJobs?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryJobsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryJobsArgs>>;
  GetRecoveryPlan?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlanResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryPlanArgs>>;
  GetRecoveryPlans?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryPlansResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryPlansArgs>>;
  GetRecoveryReport?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryResultReportResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryReportArgs>>;
  GetRecoveryReportHistory?: Resolver<Maybe<ResolversTypes['OpenStackDrHistoryResponse']>, ParentType, ContextType>;
  GetRecoveryReports?: Resolver<Maybe<ResolversTypes['OpenStackDrRecoveryResultReportsResponse']>, ParentType, ContextType, Partial<QueryGetRecoveryReportsArgs>>;
  GetUnprotectedInstances?: Resolver<Maybe<ResolversTypes['OpenStackDrInstancesResponse']>, ParentType, ContextType, Partial<QueryGetUnprotectedInstancesArgs>>;
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
  OpenStackCmCluster?: OpenStackCmClusterResolvers<ContextType>;
  OpenStackCmCluster1?: OpenStackCmCluster1Resolvers<ContextType>;
  OpenStackCmClusterAvailabilityZone?: OpenStackCmClusterAvailabilityZoneResolvers<ContextType>;
  OpenStackCmClusterAvailabilityZone1?: OpenStackCmClusterAvailabilityZone1Resolvers<ContextType>;
  OpenStackCmClusterFloatingIp?: OpenStackCmClusterFloatingIpResolvers<ContextType>;
  OpenStackCmClusterFloatingIp1?: OpenStackCmClusterFloatingIp1Resolvers<ContextType>;
  OpenStackCmClusterFloatingIpStatusEnum?: OpenStackCmClusterFloatingIpStatusEnumResolvers;
  OpenStackCmClusterHypervisor?: OpenStackCmClusterHypervisorResolvers<ContextType>;
  OpenStackCmClusterHypervisor1?: OpenStackCmClusterHypervisor1Resolvers<ContextType>;
  OpenStackCmClusterHypervisorStateEnum?: OpenStackCmClusterHypervisorStateEnumResolvers;
  OpenStackCmClusterHypervisorStatusEnum?: OpenStackCmClusterHypervisorStatusEnumResolvers;
  OpenStackCmClusterHypervisorTypeCodeEnum?: OpenStackCmClusterHypervisorTypeCodeEnumResolvers;
  OpenStackCmClusterInstance?: OpenStackCmClusterInstanceResolvers<ContextType>;
  OpenStackCmClusterInstance1?: OpenStackCmClusterInstance1Resolvers<ContextType>;
  OpenStackCmClusterInstanceExtra?: OpenStackCmClusterInstanceExtraResolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpec?: OpenStackCmClusterInstanceExtraSpecResolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpec1?: OpenStackCmClusterInstanceExtraSpec1Resolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpecKeyEnum?: OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers;
  OpenStackCmClusterInstanceNetwork?: OpenStackCmClusterInstanceNetworkResolvers<ContextType>;
  OpenStackCmClusterInstanceNetwork1?: OpenStackCmClusterInstanceNetwork1Resolvers<ContextType>;
  OpenStackCmClusterInstanceProxy?: OpenStackCmClusterInstanceProxyResolvers<ContextType>;
  OpenStackCmClusterInstanceProxyLink?: OpenStackCmClusterInstanceProxyLinkResolvers<ContextType>;
  OpenStackCmClusterInstanceSecurityGroup?: OpenStackCmClusterInstanceSecurityGroupResolvers<ContextType>;
  OpenStackCmClusterInstanceSecurityGroup1?: OpenStackCmClusterInstanceSecurityGroup1Resolvers<ContextType>;
  OpenStackCmClusterInstanceSpec?: OpenStackCmClusterInstanceSpecResolvers<ContextType>;
  OpenStackCmClusterInstanceSpec1?: OpenStackCmClusterInstanceSpec1Resolvers<ContextType>;
  OpenStackCmClusterInstanceStateEnum?: OpenStackCmClusterInstanceStateEnumResolvers;
  OpenStackCmClusterInstanceStatusEnum?: OpenStackCmClusterInstanceStatusEnumResolvers;
  OpenStackCmClusterInstanceVolume?: OpenStackCmClusterInstanceVolumeResolvers<ContextType>;
  OpenStackCmClusterInstanceVolume1?: OpenStackCmClusterInstanceVolume1Resolvers<ContextType>;
  OpenStackCmClusterKeyPair?: OpenStackCmClusterKeyPairResolvers<ContextType>;
  OpenStackCmClusterKeyPair1?: OpenStackCmClusterKeyPair1Resolvers<ContextType>;
  OpenStackCmClusterKeyPairTypeCodeEnum?: OpenStackCmClusterKeyPairTypeCodeEnumResolvers;
  OpenStackCmClusterNetwork?: OpenStackCmClusterNetworkResolvers<ContextType>;
  OpenStackCmClusterNetwork1?: OpenStackCmClusterNetwork1Resolvers<ContextType>;
  OpenStackCmClusterNetworkRoutingInterface?: OpenStackCmClusterNetworkRoutingInterfaceResolvers<ContextType>;
  OpenStackCmClusterNetworkRoutingInterface1?: OpenStackCmClusterNetworkRoutingInterface1Resolvers<ContextType>;
  OpenStackCmClusterNetworkStateEnum?: OpenStackCmClusterNetworkStateEnumResolvers;
  OpenStackCmClusterNetworkStatusEnum?: OpenStackCmClusterNetworkStatusEnumResolvers;
  OpenStackCmClusterNetworkTypeCodeEnum?: OpenStackCmClusterNetworkTypeCodeEnumResolvers;
  OpenStackCmClusterPermission?: OpenStackCmClusterPermissionResolvers<ContextType>;
  OpenStackCmClusterPermission1?: OpenStackCmClusterPermission1Resolvers<ContextType>;
  OpenStackCmClusterPermissionModeCodeEnum?: OpenStackCmClusterPermissionModeCodeEnumResolvers;
  OpenStackCmClusterRouter?: OpenStackCmClusterRouterResolvers<ContextType>;
  OpenStackCmClusterRouter1?: OpenStackCmClusterRouter1Resolvers<ContextType>;
  OpenStackCmClusterRouterExtraRoute?: OpenStackCmClusterRouterExtraRouteResolvers<ContextType>;
  OpenStackCmClusterRouterStateEnum?: OpenStackCmClusterRouterStateEnumResolvers;
  OpenStackCmClusterRouterStatusEnum?: OpenStackCmClusterRouterStatusEnumResolvers;
  OpenStackCmClusterSecurityGroup?: OpenStackCmClusterSecurityGroupResolvers<ContextType>;
  OpenStackCmClusterSecurityGroup1?: OpenStackCmClusterSecurityGroup1Resolvers<ContextType>;
  OpenStackCmClusterSecurityGroupRule?: OpenStackCmClusterSecurityGroupRuleResolvers<ContextType>;
  OpenStackCmClusterSecurityGroupRule1?: OpenStackCmClusterSecurityGroupRule1Resolvers<ContextType>;
  OpenStackCmClusterSecurityGroupRuleDirectionEnum?: OpenStackCmClusterSecurityGroupRuleDirectionEnumResolvers;
  OpenStackCmClusterSecurityGroupRuleEtherTypeEnum?: OpenStackCmClusterSecurityGroupRuleEtherTypeEnumResolvers;
  OpenStackCmClusterStateCodeEnum?: OpenStackCmClusterStateCodeEnumResolvers;
  OpenStackCmClusterStorage?: OpenStackCmClusterStorageResolvers<ContextType>;
  OpenStackCmClusterStorage1?: OpenStackCmClusterStorage1Resolvers<ContextType>;
  OpenStackCmClusterStorageStatusEnum?: OpenStackCmClusterStorageStatusEnumResolvers;
  OpenStackCmClusterStorageTypeCodeEnum?: OpenStackCmClusterStorageTypeCodeEnumResolvers;
  OpenStackCmClusterSubnet?: OpenStackCmClusterSubnetResolvers<ContextType>;
  OpenStackCmClusterSubnet1?: OpenStackCmClusterSubnet1Resolvers<ContextType>;
  OpenStackCmClusterSubnetDhcpPool?: OpenStackCmClusterSubnetDhcpPoolResolvers<ContextType>;
  OpenStackCmClusterSubnetIpv6AddressModeCodeEnum?: OpenStackCmClusterSubnetIpv6AddressModeCodeEnumResolvers;
  OpenStackCmClusterSubnetIpv6RaModeCodeEnum?: OpenStackCmClusterSubnetIpv6RaModeCodeEnumResolvers;
  OpenStackCmClusterSubnetNameserver?: OpenStackCmClusterSubnetNameserverResolvers<ContextType>;
  OpenStackCmClusterTenant?: OpenStackCmClusterTenantResolvers<ContextType>;
  OpenStackCmClusterTenant1?: OpenStackCmClusterTenant1Resolvers<ContextType>;
  OpenStackCmClusterTenantQuota?: OpenStackCmClusterTenantQuotaResolvers<ContextType>;
  OpenStackCmClusterTypeCodeEnum?: OpenStackCmClusterTypeCodeEnumResolvers;
  OpenStackCmClusterVolume?: OpenStackCmClusterVolumeResolvers<ContextType>;
  OpenStackCmClusterVolume1?: OpenStackCmClusterVolume1Resolvers<ContextType>;
  OpenStackCmClusterVolumeSnapshot?: OpenStackCmClusterVolumeSnapshotResolvers<ContextType>;
  OpenStackCmClusterVolumeSnapshot1?: OpenStackCmClusterVolumeSnapshot1Resolvers<ContextType>;
  OpenStackCmClusterVolumeSnapshotStatusEnum?: OpenStackCmClusterVolumeSnapshotStatusEnumResolvers;
  OpenStackCmClusterVolumeStatusEnum?: OpenStackCmClusterVolumeStatusEnumResolvers;
  OpenStackDrAbnormalStateReasons?: OpenStackDrAbnormalStateReasonsResolvers<ContextType>;
  OpenStackDrAbnormalStateReasonsResponse?: OpenStackDrAbnormalStateReasonsResponseResolvers<ContextType>;
  OpenStackDrAddInstanceTemplateRequest?: OpenStackDrAddInstanceTemplateRequestResolvers<ContextType>;
  OpenStackDrAddRecoveryJobRequest?: OpenStackDrAddRecoveryJobRequestResolvers<ContextType>;
  OpenStackDrAvailabilityZoneRecoveryPlan?: OpenStackDrAvailabilityZoneRecoveryPlanResolvers<ContextType>;
  OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrClusterRelationship?: OpenStackDrClusterRelationshipResolvers<ContextType>;
  OpenStackDrClusterRelationshipPlan?: OpenStackDrClusterRelationshipPlanResolvers<ContextType>;
  OpenStackDrClusterRelationshipStateCodeEnum?: OpenStackDrClusterRelationshipStateCodeEnumResolvers;
  OpenStackDrClusterRelationshipsResponse?: OpenStackDrClusterRelationshipsResponseResolvers<ContextType>;
  OpenStackDrExtendRecoveryJobPausingTimeRequest?: OpenStackDrExtendRecoveryJobPausingTimeRequestResolvers<ContextType>;
  OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequest?: OpenStackDrExtendRecoveryJobRollbackWaitingTimeRequestResolvers<ContextType>;
  OpenStackDrExternalNetworkRecoveryPlan?: OpenStackDrExternalNetworkRecoveryPlanResolvers<ContextType>;
  OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrFloatingIpRecoveryPlan?: OpenStackDrFloatingIpRecoveryPlanResolvers<ContextType>;
  OpenStackDrHistoryResponse?: OpenStackDrHistoryResponseResolvers<ContextType>;
  OpenStackDrHypervisorResources?: OpenStackDrHypervisorResourcesResolvers<ContextType>;
  OpenStackDrHypervisorResourcesResponse?: OpenStackDrHypervisorResourcesResponseResolvers<ContextType>;
  OpenStackDrInstanceMigrationPlan?: OpenStackDrInstanceMigrationPlanResolvers<ContextType>;
  OpenStackDrInstanceNetworkMigrationPlan?: OpenStackDrInstanceNetworkMigrationPlanResolvers<ContextType>;
  OpenStackDrInstanceRecoveryPlan?: OpenStackDrInstanceRecoveryPlanResolvers<ContextType>;
  OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum?: OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnumResolvers;
  OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrInstanceRecoveryResult?: OpenStackDrInstanceRecoveryResultResolvers<ContextType>;
  OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum?: OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnumResolvers;
  OpenStackDrInstanceRecoveryResultResultCodeEnum?: OpenStackDrInstanceRecoveryResultResultCodeEnumResolvers;
  OpenStackDrInstanceSecurityGroupMigrationPlan?: OpenStackDrInstanceSecurityGroupMigrationPlanResolvers<ContextType>;
  OpenStackDrInstanceTemplate?: OpenStackDrInstanceTemplateResolvers<ContextType>;
  OpenStackDrInstanceTemplateInstance?: OpenStackDrInstanceTemplateInstanceResolvers<ContextType>;
  OpenStackDrInstanceTemplateInstanceDependency?: OpenStackDrInstanceTemplateInstanceDependencyResolvers<ContextType>;
  OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum?: OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnumResolvers;
  OpenStackDrInstanceTemplateResponse?: OpenStackDrInstanceTemplateResponseResolvers<ContextType>;
  OpenStackDrInstanceTemplatesResponse?: OpenStackDrInstanceTemplatesResponseResolvers<ContextType>;
  OpenStackDrInstanceVolumeMigrationPlan?: OpenStackDrInstanceVolumeMigrationPlanResolvers<ContextType>;
  OpenStackDrInstancesResponse?: OpenStackDrInstancesResponseResolvers<ContextType>;
  OpenStackDrMessage?: OpenStackDrMessageResolvers<ContextType>;
  OpenStackDrMessageResponse?: OpenStackDrMessageResponseResolvers<ContextType>;
  OpenStackDrMigration?: OpenStackDrMigrationResolvers<ContextType>;
  OpenStackDrMigrationJobStatusEnum?: OpenStackDrMigrationJobStatusEnumResolvers;
  OpenStackDrMigrationJobStatusResponse?: OpenStackDrMigrationJobStatusResponseResolvers<ContextType>;
  OpenStackDrMigrationJobTypeEnum?: OpenStackDrMigrationJobTypeEnumResolvers;
  OpenStackDrMigrationPlanInstanceDetail?: OpenStackDrMigrationPlanInstanceDetailResolvers<ContextType>;
  OpenStackDrMigrationReplicationStatus?: OpenStackDrMigrationReplicationStatusResolvers<ContextType>;
  OpenStackDrMigrationReplicationStatusEnum?: OpenStackDrMigrationReplicationStatusEnumResolvers;
  OpenStackDrMigrationReplicationStatusResponse?: OpenStackDrMigrationReplicationStatusResponseResolvers<ContextType>;
  OpenStackDrMigrationResponse?: OpenStackDrMigrationResponseResolvers<ContextType>;
  OpenStackDrMigrationVmStatus?: OpenStackDrMigrationVmStatusResolvers<ContextType>;
  OpenStackDrMigrationsResponse?: OpenStackDrMigrationsResponseResolvers<ContextType>;
  OpenStackDrPagination?: OpenStackDrPaginationResolvers<ContextType>;
  OpenStackDrProtectionClusterHistory?: OpenStackDrProtectionClusterHistoryResolvers<ContextType>;
  OpenStackDrProtectionClusterTypeCodeEnum?: OpenStackDrProtectionClusterTypeCodeEnumResolvers;
  OpenStackDrProtectionGroup?: OpenStackDrProtectionGroupResolvers<ContextType>;
  OpenStackDrProtectionGroupHistory?: OpenStackDrProtectionGroupHistoryResolvers<ContextType>;
  OpenStackDrProtectionGroupRequest?: OpenStackDrProtectionGroupRequestResolvers<ContextType>;
  OpenStackDrProtectionGroupResponse?: OpenStackDrProtectionGroupResponseResolvers<ContextType>;
  OpenStackDrProtectionGroupSnapshot?: OpenStackDrProtectionGroupSnapshotResolvers<ContextType>;
  OpenStackDrProtectionGroupsResponse?: OpenStackDrProtectionGroupsResponseResolvers<ContextType>;
  OpenStackDrRecoveryJob?: OpenStackDrRecoveryJobResolvers<ContextType>;
  OpenStackDrRecoveryJobFloatingIpStatus?: OpenStackDrRecoveryJobFloatingIpStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum?: OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobInstanceSpecStatus?: OpenStackDrRecoveryJobInstanceSpecStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum?: OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobInstanceStatus?: OpenStackDrRecoveryJobInstanceStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobInstanceStatusResponse?: OpenStackDrRecoveryJobInstanceStatusResponseResolvers<ContextType>;
  OpenStackDrRecoveryJobInstanceStatusResultCodeEnum?: OpenStackDrRecoveryJobInstanceStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobInstanceStatusStateCodeEnum?: OpenStackDrRecoveryJobInstanceStatusStateCodeEnumResolvers;
  OpenStackDrRecoveryJobKeyPairStatus?: OpenStackDrRecoveryJobKeyPairStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum?: OpenStackDrRecoveryJobKeyPairStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobMonitorsResponse?: OpenStackDrRecoveryJobMonitorsResponseResolvers<ContextType>;
  OpenStackDrRecoveryJobNetworkStatus?: OpenStackDrRecoveryJobNetworkStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobNetworkStatusResultCodeEnum?: OpenStackDrRecoveryJobNetworkStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobOperationCodeEnum?: OpenStackDrRecoveryJobOperationCodeEnumResolvers;
  OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum?: OpenStackDrRecoveryJobRecoveryPointTypeCodeEnumResolvers;
  OpenStackDrRecoveryJobResponse?: OpenStackDrRecoveryJobResponseResolvers<ContextType>;
  OpenStackDrRecoveryJobResponseJob?: OpenStackDrRecoveryJobResponseJobResolvers<ContextType>;
  OpenStackDrRecoveryJobRouterStatus?: OpenStackDrRecoveryJobRouterStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobRouterStatusResultCodeEnum?: OpenStackDrRecoveryJobRouterStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobSecurityGroupStatus?: OpenStackDrRecoveryJobSecurityGroupStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum?: OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum?: OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnumResolvers;
  OpenStackDrRecoveryJobStateCodeEnum?: OpenStackDrRecoveryJobStateCodeEnumResolvers;
  OpenStackDrRecoveryJobStatus?: OpenStackDrRecoveryJobStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobStatusCodeEnum?: OpenStackDrRecoveryJobStatusCodeEnumResolvers;
  OpenStackDrRecoveryJobStatusResponse?: OpenStackDrRecoveryJobStatusResponseResolvers<ContextType>;
  OpenStackDrRecoveryJobStatusResultCodeEnum?: OpenStackDrRecoveryJobStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobStatusTypeCodeEnum?: OpenStackDrRecoveryJobStatusTypeCodeEnumResolvers;
  OpenStackDrRecoveryJobSubnetStatus?: OpenStackDrRecoveryJobSubnetStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobSubnetStatusResultCodeEnum?: OpenStackDrRecoveryJobSubnetStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobTenantStatus?: OpenStackDrRecoveryJobTenantStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobTenantStatusResultCodeEnum?: OpenStackDrRecoveryJobTenantStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobVolumeStatus?: OpenStackDrRecoveryJobVolumeStatusResolvers<ContextType>;
  OpenStackDrRecoveryJobVolumeStatusResponse?: OpenStackDrRecoveryJobVolumeStatusResponseResolvers<ContextType>;
  OpenStackDrRecoveryJobVolumeStatusResultCodeEnum?: OpenStackDrRecoveryJobVolumeStatusResultCodeEnumResolvers;
  OpenStackDrRecoveryJobVolumeStatusStateCodeEnum?: OpenStackDrRecoveryJobVolumeStatusStateCodeEnumResolvers;
  OpenStackDrRecoveryJobsResponse?: OpenStackDrRecoveryJobsResponseResolvers<ContextType>;
  OpenStackDrRecoveryJobsResponseJobs?: OpenStackDrRecoveryJobsResponseJobsResolvers<ContextType>;
  OpenStackDrRecoveryPlan?: OpenStackDrRecoveryPlanResolvers<ContextType>;
  OpenStackDrRecoveryPlanDetail?: OpenStackDrRecoveryPlanDetailResolvers<ContextType>;
  OpenStackDrRecoveryPlanDirectionCodeEnum?: OpenStackDrRecoveryPlanDirectionCodeEnumResolvers;
  OpenStackDrRecoveryPlanMirrorStateCodeEnum?: OpenStackDrRecoveryPlanMirrorStateCodeEnumResolvers;
  OpenStackDrRecoveryPlanRequest?: OpenStackDrRecoveryPlanRequestResolvers<ContextType>;
  OpenStackDrRecoveryPlanResponse?: OpenStackDrRecoveryPlanResponseResolvers<ContextType>;
  OpenStackDrRecoveryPlanStateCodeEnum?: OpenStackDrRecoveryPlanStateCodeEnumResolvers;
  OpenStackDrRecoveryPlansResponse?: OpenStackDrRecoveryPlansResponseResolvers<ContextType>;
  OpenStackDrRecoveryPointObjectiveTypeEnum?: OpenStackDrRecoveryPointObjectiveTypeEnumResolvers;
  OpenStackDrRecoveryResult?: OpenStackDrRecoveryResultResolvers<ContextType>;
  OpenStackDrRecoveryResultReportResponse?: OpenStackDrRecoveryResultReportResponseResolvers<ContextType>;
  OpenStackDrRecoveryResultReportsResponse?: OpenStackDrRecoveryResultReportsResponseResolvers<ContextType>;
  OpenStackDrRecoveryResultResultCodeEnum?: OpenStackDrRecoveryResultResultCodeEnumResolvers;
  OpenStackDrRecoveryTaskLog?: OpenStackDrRecoveryTaskLogResolvers<ContextType>;
  OpenStackDrRecoveryTaskLogsResponse?: OpenStackDrRecoveryTaskLogsResponseResolvers<ContextType>;
  OpenStackDrRecoveryTypeEnum?: OpenStackDrRecoveryTypeEnumResolvers;
  OpenStackDrReportResultEnum?: OpenStackDrReportResultEnumResolvers;
  OpenStackDrRetryInstancesRequest?: OpenStackDrRetryInstancesRequestResolvers<ContextType>;
  OpenStackDrRouterRecoveryPlan?: OpenStackDrRouterRecoveryPlanResolvers<ContextType>;
  OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrRouterRecoveryResult?: OpenStackDrRouterRecoveryResultResolvers<ContextType>;
  OpenStackDrScheduleSnapshotIntervalTypeEnum?: OpenStackDrScheduleSnapshotIntervalTypeEnumResolvers;
  OpenStackDrScheduleStateCodeEnum?: OpenStackDrScheduleStateCodeEnumResolvers;
  OpenStackDrSnapshotMessageResponse?: OpenStackDrSnapshotMessageResponseResolvers<ContextType>;
  OpenStackDrSnapshotsResponse?: OpenStackDrSnapshotsResponseResolvers<ContextType>;
  OpenStackDrStorageRecoveryPlan?: OpenStackDrStorageRecoveryPlanResolvers<ContextType>;
  OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrSummaryClustersResponse?: OpenStackDrSummaryClustersResponseResolvers<ContextType>;
  OpenStackDrSummaryClustersResponseSummary?: OpenStackDrSummaryClustersResponseSummaryResolvers<ContextType>;
  OpenStackDrSummaryGroupsResponse?: OpenStackDrSummaryGroupsResponseResolvers<ContextType>;
  OpenStackDrSummaryGroupsResponseSummary?: OpenStackDrSummaryGroupsResponseSummaryResolvers<ContextType>;
  OpenStackDrSummaryInstancesResponse?: OpenStackDrSummaryInstancesResponseResolvers<ContextType>;
  OpenStackDrSummaryInstancesSummary?: OpenStackDrSummaryInstancesSummaryResolvers<ContextType>;
  OpenStackDrSummaryJobsResponse?: OpenStackDrSummaryJobsResponseResolvers<ContextType>;
  OpenStackDrSummaryJobsResponseSummary?: OpenStackDrSummaryJobsResponseSummaryResolvers<ContextType>;
  OpenStackDrSummaryVolumesResponse?: OpenStackDrSummaryVolumesResponseResolvers<ContextType>;
  OpenStackDrSummaryVolumesResponseSummary?: OpenStackDrSummaryVolumesResponseSummaryResolvers<ContextType>;
  OpenStackDrTenantRecoveryPlan?: OpenStackDrTenantRecoveryPlanResolvers<ContextType>;
  OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrUnavailableInstancesResponse?: OpenStackDrUnavailableInstancesResponseResolvers<ContextType>;
  OpenStackDrUnavailableInstancesResponseInstances?: OpenStackDrUnavailableInstancesResponseInstancesResolvers<ContextType>;
  OpenStackDrUpdateRecoveryJobRequest?: OpenStackDrUpdateRecoveryJobRequestResolvers<ContextType>;
  OpenStackDrUsable?: OpenStackDrUsableResolvers<ContextType>;
  OpenStackDrVolumeRecoveryPlan?: OpenStackDrVolumeRecoveryPlanResolvers<ContextType>;
  OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum?: OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnumResolvers;
  OpenStackDrVolumeRecoveryResult?: OpenStackDrVolumeRecoveryResultResolvers<ContextType>;
  OpenStackDrVolumeRecoveryResultResultCodeEnum?: OpenStackDrVolumeRecoveryResultResultCodeEnumResolvers;
  Query?: QueryResolvers<ContextType>;
}>;

