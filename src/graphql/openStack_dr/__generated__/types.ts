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
  state_code?: Maybe<OpenStackCmClusterStateCodeEnum>;
  synchronized_at?: Maybe<Scalars['BigInt']['output']>;
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum>;
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
  state_code?: Maybe<OpenStackCmClusterStateCodeEnum>;
  synchronized_at?: Maybe<Scalars['BigInt']['output']>;
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum>;
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
  state_code?: InputMaybe<OpenStackCmClusterStateCodeEnum>;
  synchronized_at?: InputMaybe<Scalars['BigInt']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterTypeCodeEnum>;
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
  status?: Maybe<OpenStackCmClusterFloatingIpStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterFloatingIp1 = {
  __typename?: 'OpenStackCmClusterFloatingIp1';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterFloatingIpStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterFloatingIp1Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterFloatingIpStatusEnum>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterFloatingIpInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterFloatingIpStatusEnum>;
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
  state?: Maybe<OpenStackCmClusterHypervisorStateEnum>;
  status?: Maybe<OpenStackCmClusterHypervisorStatusEnum>;
  type_code?: Maybe<OpenStackCmClusterHypervisorTypeCodeEnum>;
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
  state?: Maybe<OpenStackCmClusterHypervisorStateEnum>;
  status?: Maybe<OpenStackCmClusterHypervisorStatusEnum>;
  type_code?: Maybe<OpenStackCmClusterHypervisorTypeCodeEnum>;
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
  state?: InputMaybe<OpenStackCmClusterHypervisorStateEnum>;
  status?: InputMaybe<OpenStackCmClusterHypervisorStatusEnum>;
  type_code?: InputMaybe<OpenStackCmClusterHypervisorTypeCodeEnum>;
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
  state?: InputMaybe<OpenStackCmClusterHypervisorStateEnum>;
  status?: InputMaybe<OpenStackCmClusterHypervisorStatusEnum>;
  type_code?: InputMaybe<OpenStackCmClusterHypervisorTypeCodeEnum>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  vcpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
  vcpu_used_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackCmClusterHypervisorStateEnum {
  Down = 'DOWN',
  Unknown = 'UNKNOWN',
  Up = 'UP'
}

export enum OpenStackCmClusterHypervisorStatusEnum {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Unknown = 'UNKNOWN'
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
  state_code?: InputMaybe<OpenStackCmClusterStateCodeEnum>;
  synchronized_at?: InputMaybe<Scalars['BigInt']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterTypeCodeEnum>;
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
  state?: Maybe<OpenStackCmClusterInstanceStateEnum>;
  status?: Maybe<OpenStackCmClusterInstanceStatusEnum>;
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
  state?: Maybe<OpenStackCmClusterInstanceStateEnum>;
  status?: Maybe<OpenStackCmClusterInstanceStatusEnum>;
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
  state?: InputMaybe<OpenStackCmClusterInstanceStateEnum>;
  status?: InputMaybe<OpenStackCmClusterInstanceStatusEnum>;
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
  key?: Maybe<OpenStackCmClusterInstanceExtraSpecKeyEnum>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterInstanceExtraSpec1 = {
  __typename?: 'OpenStackCmClusterInstanceExtraSpec1';
  key?: Maybe<OpenStackCmClusterInstanceExtraSpecKeyEnum>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterInstanceExtraSpec1Input = {
  key?: InputMaybe<OpenStackCmClusterInstanceExtraSpecKeyEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterInstanceExtraSpecInput = {
  key?: InputMaybe<OpenStackCmClusterInstanceExtraSpecKeyEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterInstanceExtraSpecKeyEnum {
  HwCpuCores = 'HW_CPU_CORES',
  HwCpuMaxCores = 'HW_CPU_MAX_CORES',
  HwCpuMaxSockets = 'HW_CPU_MAX_SOCKETS',
  HwCpuMaxThreads = 'HW_CPU_MAX_THREADS',
  HwCpuPolicy = 'HW_CPU_POLICY',
  HwCpuSockets = 'HW_CPU_SOCKETS',
  HwCpuThreads = 'HW_CPU_THREADS',
  HwCpuThreadPolicy = 'HW_CPU_THREAD_POLICY',
  HwMemPageSize = 'HW_MEM_PAGE_SIZE',
  HwNumaCpusN = 'HW_NUMA_CPUS__N',
  HwNumaMemN = 'HW_NUMA_MEM__N',
  HwNumaNodes = 'HW_NUMA_NODES',
  HwRngRateAllowed = 'HW_RNG_RATE_ALLOWED',
  HwRngRateBytes = 'HW_RNG_RATE_BYTES',
  HwRngRatePeriod = 'HW_RNG_RATE_PERIOD',
  HwWatchdogAction = 'HW_WATCHDOG_ACTION',
  OsSecureBoot = 'OS_SECURE_BOOT',
  PciPassthroughAlias = 'PCI_PASSTHROUGH_ALIAS',
  QuotaCpuLimit = 'QUOTA_CPU_LIMIT',
  QuotaCpuPeriod = 'QUOTA_CPU_PERIOD',
  QuotaCpuQuota = 'QUOTA_CPU_QUOTA',
  QuotaCpuReservation = 'QUOTA_CPU_RESERVATION',
  QuotaCpuShares = 'QUOTA_CPU_SHARES',
  QuotaCpuSharesLevel = 'QUOTA_CPU_SHARES_LEVEL',
  QuotaDiskIoLimit = 'QUOTA_DISK_IO_LIMIT',
  QuotaDiskIoReservation = 'QUOTA_DISK_IO_RESERVATION',
  QuotaDiskIoSharesLevel = 'QUOTA_DISK_IO_SHARES_LEVEL',
  QuotaDiskIoSharesShare = 'QUOTA_DISK_IO_SHARES_SHARE',
  QuotaDiskReadBytesSec = 'QUOTA_DISK_READ_BYTES_SEC',
  QuotaDiskReadIopsSec = 'QUOTA_DISK_READ_IOPS_SEC',
  QuotaDiskTotalBytesSec = 'QUOTA_DISK_TOTAL_BYTES_SEC',
  QuotaDiskTotalIopsSec = 'QUOTA_DISK_TOTAL_IOPS_SEC',
  QuotaDiskWriteBytesSec = 'QUOTA_DISK_WRITE_BYTES_SEC',
  QuotaDiskWriteIopsSec = 'QUOTA_DISK_WRITE_IOPS_SEC',
  QuotaMemoryLimit = 'QUOTA_MEMORY_LIMIT',
  QuotaMemoryReservation = 'QUOTA_MEMORY_RESERVATION',
  QuotaMemorySharesLevel = 'QUOTA_MEMORY_SHARES_LEVEL',
  QuotaMemorySharesShare = 'QUOTA_MEMORY_SHARES_SHARE',
  QuotaVifInboundAverage = 'QUOTA_VIF_INBOUND_AVERAGE',
  QuotaVifInboundBurst = 'QUOTA_VIF_INBOUND_BURST',
  QuotaVifInboundPeak = 'QUOTA_VIF_INBOUND_PEAK',
  QuotaVifOutboundAverage = 'QUOTA_VIF_OUTBOUND_AVERAGE',
  QuotaVifOutboundBurst = 'QUOTA_VIF_OUTBOUND_BURST',
  QuotaVifOutboundPeak = 'QUOTA_VIF_OUTBOUND_PEAK'
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
  state?: InputMaybe<OpenStackCmClusterInstanceStateEnum>;
  status?: InputMaybe<OpenStackCmClusterInstanceStatusEnum>;
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
  type_code?: Maybe<OpenStackCmClusterKeyPairTypeCodeEnum>;
};

export type OpenStackCmClusterKeyPair1 = {
  __typename?: 'OpenStackCmClusterKeyPair1';
  fingerprint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  type_code?: Maybe<OpenStackCmClusterKeyPairTypeCodeEnum>;
};

export type OpenStackCmClusterKeyPair1Input = {
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterKeyPairTypeCodeEnum>;
};

export type OpenStackCmClusterKeyPairInput = {
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterKeyPairTypeCodeEnum>;
};

export enum OpenStackCmClusterKeyPairTypeCodeEnum {
  Ssh = 'SSH',
  X509 = 'X509'
}

export type OpenStackCmClusterNetwork = {
  __typename?: 'OpenStackCmClusterNetwork';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  external_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ips?: Maybe<Array<Maybe<OpenStackCmClusterFloatingIp>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OpenStackCmClusterNetworkStateEnum>;
  status?: Maybe<OpenStackCmClusterNetworkStatusEnum>;
  subnets?: Maybe<Array<Maybe<OpenStackCmClusterSubnet>>>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  type_code?: Maybe<OpenStackCmClusterNetworkTypeCodeEnum>;
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
  state?: Maybe<OpenStackCmClusterNetworkStateEnum>;
  status?: Maybe<OpenStackCmClusterNetworkStatusEnum>;
  subnets?: Maybe<Array<Maybe<OpenStackCmClusterSubnet1>>>;
  tenant?: Maybe<OpenStackCmClusterTenant1>;
  type_code?: Maybe<OpenStackCmClusterNetworkTypeCodeEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterNetwork1Input = {
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  external_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackCmClusterFloatingIp1Input>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OpenStackCmClusterNetworkStateEnum>;
  status?: InputMaybe<OpenStackCmClusterNetworkStatusEnum>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnet1Input>>>;
  tenant?: InputMaybe<OpenStackCmClusterTenant1Input>;
  type_code?: InputMaybe<OpenStackCmClusterNetworkTypeCodeEnum>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterNetworkInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  external_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackCmClusterFloatingIpInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OpenStackCmClusterNetworkStateEnum>;
  status?: InputMaybe<OpenStackCmClusterNetworkStatusEnum>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetInput>>>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  type_code?: InputMaybe<OpenStackCmClusterNetworkTypeCodeEnum>;
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
  Down = 'DOWN',
  Up = 'UP'
}

export enum OpenStackCmClusterNetworkStatusEnum {
  Active = 'ACTIVE',
  Build = 'BUILD',
  Down = 'DOWN',
  Error = 'ERROR'
}

export enum OpenStackCmClusterNetworkTypeCodeEnum {
  Flat = 'FLAT',
  Geneve = 'GENEVE',
  Gre = 'GRE',
  Local = 'LOCAL',
  Vlan = 'VLAN',
  Vxlan = 'VXLAN'
}

export type OpenStackCmClusterPermission = {
  __typename?: 'OpenStackCmClusterPermission';
  group?: Maybe<CloudUserGroup>;
  mode_code?: Maybe<OpenStackCmClusterPermissionModeCodeEnum>;
};

export type OpenStackCmClusterPermission1 = {
  __typename?: 'OpenStackCmClusterPermission1';
  group?: Maybe<CloudUserGroup>;
  mode_code?: Maybe<OpenStackCmClusterPermissionModeCodeEnum>;
};

export type OpenStackCmClusterPermission1Input = {
  group?: InputMaybe<CloudUserGroupInput>;
  mode_code?: InputMaybe<OpenStackCmClusterPermissionModeCodeEnum>;
};

export type OpenStackCmClusterPermissionInput = {
  group?: InputMaybe<CloudUserGroupInput>;
  mode_code?: InputMaybe<OpenStackCmClusterPermissionModeCodeEnum>;
};

export enum OpenStackCmClusterPermissionModeCodeEnum {
  ClusterPermissionModeReadonly = 'CLUSTER_PERMISSION_MODE_READONLY',
  ClusterPermissionModeReadwrite = 'CLUSTER_PERMISSION_MODE_READWRITE'
}

export type OpenStackCmClusterRouter = {
  __typename?: 'OpenStackCmClusterRouter';
  description?: Maybe<Scalars['String']['output']>;
  external_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface>>>;
  extra_routes?: Maybe<Array<Maybe<OpenStackCmClusterRouterExtraRoute>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  internal_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface>>>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OpenStackCmClusterRouterStateEnum>;
  status?: Maybe<OpenStackCmClusterRouterStatusEnum>;
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
  state?: Maybe<OpenStackCmClusterRouterStateEnum>;
  status?: Maybe<OpenStackCmClusterRouterStatusEnum>;
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
  state?: InputMaybe<OpenStackCmClusterRouterStateEnum>;
  status?: InputMaybe<OpenStackCmClusterRouterStatusEnum>;
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
  state?: InputMaybe<OpenStackCmClusterRouterStateEnum>;
  status?: InputMaybe<OpenStackCmClusterRouterStatusEnum>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterRouterStateEnum {
  Down = 'DOWN',
  Up = 'UP'
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
  direction?: Maybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum>;
  ether_type?: Maybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum>;
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
  direction?: Maybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum>;
  ether_type?: Maybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum>;
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
  direction?: InputMaybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum>;
  ether_type?: InputMaybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  port_range_max?: InputMaybe<Scalars['BigInt']['input']>;
  port_range_min?: InputMaybe<Scalars['BigInt']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  remote_security_group?: InputMaybe<OpenStackCmClusterSecurityGroup1Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterSecurityGroupRuleDirectionEnum {
  Egress = 'EGRESS',
  Ingress = 'INGRESS'
}

export enum OpenStackCmClusterSecurityGroupRuleEtherTypeEnum {
  Four = 'FOUR',
  Six = 'SIX'
}

export type OpenStackCmClusterSecurityGroupRuleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<OpenStackCmClusterSecurityGroupRuleDirectionEnum>;
  ether_type?: InputMaybe<OpenStackCmClusterSecurityGroupRuleEtherTypeEnum>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  port_range_max?: InputMaybe<Scalars['BigInt']['input']>;
  port_range_min?: InputMaybe<Scalars['BigInt']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  remote_security_group?: InputMaybe<OpenStackCmClusterSecurityGroupInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterStateCodeEnum {
  ClusterStateActive = 'CLUSTER_STATE_ACTIVE',
  ClusterStateInactive = 'CLUSTER_STATE_INACTIVE',
  ClusterStateLoading = 'CLUSTER_STATE_LOADING',
  ClusterStateWarning = 'CLUSTER_STATE_WARNING'
}

export type OpenStackCmClusterStorage = {
  __typename?: 'OpenStackCmClusterStorage';
  capacity_bytes?: Maybe<Scalars['BigInt']['output']>;
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterStorageStatusEnum>;
  type_code?: Maybe<OpenStackCmClusterStorageTypeCodeEnum>;
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
  status?: Maybe<OpenStackCmClusterStorageStatusEnum>;
  type_code?: Maybe<OpenStackCmClusterStorageTypeCodeEnum>;
  used_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterStorage1Input = {
  capacity_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  cluster?: InputMaybe<OpenStackCmCluster1Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterStorageStatusEnum>;
  type_code?: InputMaybe<OpenStackCmClusterStorageTypeCodeEnum>;
  used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterStorageInput = {
  capacity_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpenStackCmClusterStorageStatusEnum>;
  type_code?: InputMaybe<OpenStackCmClusterStorageTypeCodeEnum>;
  used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterStorageStatusEnum {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
  Unknown = 'UNKNOWN'
}

export enum OpenStackCmClusterStorageTypeCodeEnum {
  OpenstackStorageTypeCeph = 'OPENSTACK_STORAGE_TYPE_CEPH',
  OpenstackStorageTypeLvm = 'OPENSTACK_STORAGE_TYPE_LVM',
  OpenstackStorageTypeNfs = 'OPENSTACK_STORAGE_TYPE_NFS',
  OpenstackStorageTypeUnknown = 'OPENSTACK_STORAGE_TYPE_UNKNOWN'
}

export type OpenStackCmClusterSubnet = {
  __typename?: 'OpenStackCmClusterSubnet';
  description?: Maybe<Scalars['String']['output']>;
  dhcp_enabled?: Maybe<Scalars['Boolean']['output']>;
  dhcp_pools?: Maybe<Array<Maybe<OpenStackCmClusterSubnetDhcpPool>>>;
  gateway_enabled?: Maybe<Scalars['Boolean']['output']>;
  gateway_ip_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ipv6_address_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum>;
  ipv6_ra_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum>;
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
  ipv6_address_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum>;
  ipv6_ra_mode_code?: Maybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum>;
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
  ipv6_address_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum>;
  ipv6_ra_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum>;
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
  ipv6_address_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6AddressModeCodeEnum>;
  ipv6_ra_mode_code?: InputMaybe<OpenStackCmClusterSubnetIpv6RaModeCodeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameservers?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSubnetNameserverInput>>>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterSubnetIpv6AddressModeCodeEnum {
  Dhcpv6Stateful = 'DHCPV6_STATEFUL',
  Dhcpv6Stateless = 'DHCPV6_STATELESS',
  Slaac = 'SLAAC'
}

export enum OpenStackCmClusterSubnetIpv6RaModeCodeEnum {
  Dhcpv6Stateful = 'DHCPV6_STATEFUL',
  Dhcpv6Stateless = 'DHCPV6_STATELESS',
  Slaac = 'SLAAC'
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
  ClusterTypeKubernetes = 'CLUSTER_TYPE_KUBERNETES',
  ClusterTypeOpenshift = 'CLUSTER_TYPE_OPENSHIFT',
  ClusterTypeOpenstack = 'CLUSTER_TYPE_OPENSTACK',
  ClusterTypeVmware = 'CLUSTER_TYPE_VMWARE'
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
  status?: Maybe<OpenStackCmClusterVolumeStatusEnum>;
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
  status?: Maybe<OpenStackCmClusterVolumeStatusEnum>;
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
  status?: InputMaybe<OpenStackCmClusterVolumeStatusEnum>;
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
  status?: InputMaybe<OpenStackCmClusterVolumeStatusEnum>;
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
  status?: Maybe<OpenStackCmClusterVolumeSnapshotStatusEnum>;
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
  status?: Maybe<OpenStackCmClusterVolumeSnapshotStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterVolumeSnapshot1Input = {
  cluster_volume_group_snapshot_uuid?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackCmClusterVolumeSnapshotStatusEnum>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterVolumeSnapshotInput = {
  cluster_volume_group_snapshot_uuid?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackCmClusterVolumeSnapshotStatusEnum>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackCmClusterVolumeSnapshotStatusEnum {
  Available = 'AVAILABLE',
  Creating = 'CREATING',
  Deleting = 'DELETING',
  Error = 'ERROR',
  ErrorDeleting = 'ERROR_DELETING'
}

export enum OpenStackCmClusterVolumeStatusEnum {
  Attaching = 'ATTACHING',
  Available = 'AVAILABLE',
  Creating = 'CREATING',
  Deleting = 'DELETING',
  Detaching = 'DETACHING',
  Error = 'ERROR',
  ErrorDeleting = 'ERROR_DELETING',
  InUse = 'IN_USE',
  Maintenance = 'MAINTENANCE'
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
  recovery_type_code?: Maybe<OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum>;
};

export type OpenStackDrAvailabilityZoneRecoveryPlanInput = {
  protection_cluster_availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  recovery_cluster_availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  recovery_cluster_availability_zone_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_availability_zone_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum>;
};

export enum OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanAvailabilityZoneRecoveryTypeMapping = 'DR_RECOVERY_PLAN_AVAILABILITY_ZONE_RECOVERY_TYPE_MAPPING'
}

export type OpenStackDrClusterRelationship = {
  __typename?: 'OpenStackDrClusterRelationship';
  plans?: Maybe<Array<Maybe<OpenStackDrClusterRelationshipPlan>>>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  state_code?: Maybe<OpenStackDrClusterRelationshipStateCodeEnum>;
};

export type OpenStackDrClusterRelationshipInput = {
  plans?: InputMaybe<Array<InputMaybe<OpenStackDrClusterRelationshipPlanInput>>>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  state_code?: InputMaybe<OpenStackDrClusterRelationshipStateCodeEnum>;
};

export type OpenStackDrClusterRelationshipPlan = {
  __typename?: 'OpenStackDrClusterRelationshipPlan';
  abnormal_state_reasons?: Maybe<OpenStackDrAbnormalStateReasons>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  detail?: Maybe<OpenStackDrRecoveryPlanDetail>;
  direction_code?: Maybe<OpenStackDrRecoveryPlanDirectionCodeEnum>;
  group?: Maybe<OpenStackDrProtectionGroup>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mirror_state_code?: Maybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum>;
  name?: Maybe<Scalars['String']['output']>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  remarks?: Maybe<Scalars['String']['output']>;
  snapshot_retention_count?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryPlanStateCodeEnum>;
  updatable?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrClusterRelationshipPlanInput = {
  abnormal_state_reasons?: InputMaybe<OpenStackDrAbnormalStateReasonsInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  detail?: InputMaybe<OpenStackDrRecoveryPlanDetailInput>;
  direction_code?: InputMaybe<OpenStackDrRecoveryPlanDirectionCodeEnum>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mirror_state_code?: InputMaybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  snapshot_retention_count?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryPlanStateCodeEnum>;
  updatable?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrClusterRelationshipStateCodeEnum {
  DrClusterRelationshipStateCritical = 'DR_CLUSTER_RELATIONSHIP_STATE_CRITICAL',
  DrClusterRelationshipStateEmergency = 'DR_CLUSTER_RELATIONSHIP_STATE_EMERGENCY',
  DrClusterRelationshipStateNormal = 'DR_CLUSTER_RELATIONSHIP_STATE_NORMAL',
  DrClusterRelationshipStateWarning = 'DR_CLUSTER_RELATIONSHIP_STATE_WARNING'
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
  recovery_type_code?: Maybe<OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum>;
};

export type OpenStackDrExternalNetworkRecoveryPlanInput = {
  protection_cluster_external_network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_cluster_external_network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_cluster_external_network_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_external_network_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum>;
};

export enum OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanNetworkRecoveryTypeMapping = 'DR_RECOVERY_PLAN_NETWORK_RECOVERY_TYPE_MAPPING'
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
  diagnosis_method_code?: Maybe<OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum>;
  diagnosis_method_data?: Maybe<Scalars['String']['output']>;
  diagnosis_timeout?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_availability_zone?: Maybe<OpenStackCmClusterAvailabilityZone>;
  recovery_cluster_availability_zone_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_availability_zone_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_cluster_hypervisor?: Maybe<OpenStackCmClusterHypervisor>;
  recovery_type_code?: Maybe<OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum>;
};

export enum OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum {
  DrRecoveryPlanInstanceDiagnosisMethodHttpGet = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET',
  DrRecoveryPlanInstanceDiagnosisMethodPortScan = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN',
  DrRecoveryPlanInstanceDiagnosisMethodShellScript = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT'
}

export type OpenStackDrInstanceRecoveryPlanInput = {
  auto_start_flag?: InputMaybe<Scalars['Boolean']['input']>;
  dependencies?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  diagnosis_flag?: InputMaybe<Scalars['Boolean']['input']>;
  diagnosis_method_code?: InputMaybe<OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum>;
  diagnosis_method_data?: InputMaybe<Scalars['String']['input']>;
  diagnosis_timeout?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_availability_zone?: InputMaybe<OpenStackCmClusterAvailabilityZoneInput>;
  recovery_cluster_availability_zone_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_availability_zone_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_cluster_hypervisor?: InputMaybe<OpenStackCmClusterHypervisorInput>;
  recovery_type_code?: InputMaybe<OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum>;
};

export enum OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanInstanceRecoveryTypeMirroring = 'DR_RECOVERY_PLAN_INSTANCE_RECOVERY_TYPE_MIRRORING'
}

export type OpenStackDrInstanceRecoveryResult = {
  __typename?: 'OpenStackDrInstanceRecoveryResult';
  auto_start_flag?: Maybe<Scalars['Boolean']['output']>;
  dependencies?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  diagnosis_flag?: Maybe<Scalars['Boolean']['output']>;
  diagnosis_method_code?: Maybe<OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum>;
  diagnosis_method_data?: Maybe<Scalars['String']['output']>;
  diagnosis_timeout?: Maybe<Scalars['BigInt']['output']>;
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_cluster_instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrInstanceRecoveryResultResultCodeEnum>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
};

export enum OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum {
  DrRecoveryPlanInstanceDiagnosisMethodHttpGet = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET',
  DrRecoveryPlanInstanceDiagnosisMethodPortScan = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN',
  DrRecoveryPlanInstanceDiagnosisMethodShellScript = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT'
}

export type OpenStackDrInstanceRecoveryResultInput = {
  auto_start_flag?: InputMaybe<Scalars['Boolean']['input']>;
  dependencies?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  diagnosis_flag?: InputMaybe<Scalars['Boolean']['input']>;
  diagnosis_method_code?: InputMaybe<OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum>;
  diagnosis_method_data?: InputMaybe<Scalars['String']['input']>;
  diagnosis_timeout?: InputMaybe<Scalars['BigInt']['input']>;
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_cluster_instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrInstanceRecoveryResultResultCodeEnum>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrInstanceRecoveryResultResultCodeEnum {
  DrRecoveryInstanceResultCanceled = 'DR_RECOVERY_INSTANCE_RESULT_CANCELED',
  DrRecoveryInstanceResultFailed = 'DR_RECOVERY_INSTANCE_RESULT_FAILED',
  DrRecoveryInstanceResultSuccess = 'DR_RECOVERY_INSTANCE_RESULT_SUCCESS'
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
  diagnosis_method_code?: Maybe<OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum>;
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
  DrRecoveryPlanInstanceDiagnosisMethodHttpGet = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET',
  DrRecoveryPlanInstanceDiagnosisMethodPortScan = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN',
  DrRecoveryPlanInstanceDiagnosisMethodShellScript = 'DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT'
}

export type OpenStackDrInstanceTemplateInstanceInput = {
  auto_start_flag?: InputMaybe<Scalars['Boolean']['input']>;
  dependencies?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceTemplateInstanceDependencyInput>>>;
  diagnosis_flag?: InputMaybe<Scalars['Boolean']['input']>;
  diagnosis_method_code?: InputMaybe<OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum>;
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
  CustomizationCreate = 'CUSTOMIZATION_CREATE',
  CustomizationDelete = 'CUSTOMIZATION_DELETE',
  CustomizationStatusCheck = 'CUSTOMIZATION_STATUS_CHECK',
  Done = 'DONE',
  Failed = 'FAILED',
  NotFound = 'NOT_FOUND',
  PreparationRun = 'PREPARATION_RUN',
  PreparationStatusCheck = 'PREPARATION_STATUS_CHECK',
  ReplicationDelete = 'REPLICATION_DELETE',
  ReplicationLock = 'REPLICATION_LOCK',
  ReplicationLockStatusCheck = 'REPLICATION_LOCK_STATUS_CHECK',
  ReplicationStatusCheck = 'REPLICATION_STATUS_CHECK',
  ReplicationUnlock = 'REPLICATION_UNLOCK',
  ReplicationUnlockStatusCheck = 'REPLICATION_UNLOCK_STATUS_CHECK',
  Start = 'START',
  Unknown = 'UNKNOWN',
  VmCreate = 'VM_CREATE',
  VolumeAttach = 'VOLUME_ATTACH',
  VolumeCreate = 'VOLUME_CREATE',
  VolumeDetach = 'VOLUME_DETACH',
  VolumeSnapshotCreate = 'VOLUME_SNAPSHOT_CREATE'
}

export type OpenStackDrMigrationJobStatusResponse = {
  __typename?: 'OpenStackDrMigrationJobStatusResponse';
  job_type?: Maybe<OpenStackDrMigrationJobTypeEnum>;
  message?: Maybe<OpenStackDrMessage>;
  status?: Maybe<OpenStackDrMigrationJobStatusEnum>;
};

export type OpenStackDrMigrationJobStatusResponseInput = {
  job_type?: InputMaybe<OpenStackDrMigrationJobTypeEnum>;
  message?: InputMaybe<OpenStackDrMessageInput>;
  status?: InputMaybe<OpenStackDrMigrationJobStatusEnum>;
};

export enum OpenStackDrMigrationJobTypeEnum {
  Cutover = 'CUTOVER',
  Simulation = 'SIMULATION'
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
  status?: Maybe<OpenStackDrMigrationReplicationStatusEnum>;
  vm_replication_status?: Maybe<Array<Maybe<OpenStackDrMigrationVmStatus>>>;
};

export enum OpenStackDrMigrationReplicationStatusEnum {
  Done = 'DONE',
  Mirroring = 'MIRRORING',
  NotFound = 'NOT_FOUND',
  Running = 'RUNNING',
  Switching = 'SWITCHING',
  Unknown = 'UNKNOWN',
  Updating = 'UPDATING'
}

export type OpenStackDrMigrationReplicationStatusInput = {
  cause?: InputMaybe<Scalars['String']['input']>;
  err_code?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackDrMigrationReplicationStatusEnum>;
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
  status?: Maybe<OpenStackDrMigrationReplicationStatusEnum>;
};

export type OpenStackDrMigrationVmStatusInput = {
  cause?: InputMaybe<Scalars['String']['input']>;
  err_code?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenStackDrMigrationReplicationStatusEnum>;
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
  ClusterTypeKubernetes = 'CLUSTER_TYPE_KUBERNETES',
  ClusterTypeOpenshift = 'CLUSTER_TYPE_OPENSHIFT',
  ClusterTypeOpenstack = 'CLUSTER_TYPE_OPENSTACK',
  ClusterTypeVmware = 'CLUSTER_TYPE_VMWARE'
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
  recovery_point_objective_type?: Maybe<OpenStackDrRecoveryPointObjectiveTypeEnum>;
  recovery_time_objective?: Maybe<Scalars['BigInt']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  snapshot_interval?: Maybe<Scalars['BigInt']['output']>;
  snapshot_interval_type?: Maybe<OpenStackDrScheduleSnapshotIntervalTypeEnum>;
  state_code?: Maybe<OpenStackDrScheduleStateCodeEnum>;
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
  recovery_point_objective_type?: InputMaybe<OpenStackDrRecoveryPointObjectiveTypeEnum>;
  recovery_time_objective?: InputMaybe<Scalars['BigInt']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  snapshot_interval?: InputMaybe<Scalars['BigInt']['input']>;
  snapshot_interval_type?: InputMaybe<OpenStackDrScheduleSnapshotIntervalTypeEnum>;
  state_code?: InputMaybe<OpenStackDrScheduleStateCodeEnum>;
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
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  schedule?: Maybe<CloudSchedule>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryTypeEnum>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryJobFloatingIpStatus = {
  __typename?: 'OpenStackDrRecoveryJobFloatingIpStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  floating_ip?: Maybe<OpenStackCmClusterFloatingIp>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobFloatingIpStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  floating_ip?: InputMaybe<OpenStackCmClusterFloatingIpInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
}

export type OpenStackDrRecoveryJobInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  schedule?: InputMaybe<CloudScheduleInput>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryJobInstanceSpecStatus = {
  __typename?: 'OpenStackDrRecoveryJobInstanceSpecStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  instance_spec?: Maybe<OpenStackCmClusterInstanceSpec>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobInstanceSpecStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  instance_spec?: InputMaybe<OpenStackCmClusterInstanceSpecInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
}

export type OpenStackDrRecoveryJobInstanceStatus = {
  __typename?: 'OpenStackDrRecoveryJobInstanceStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  instance?: Maybe<OpenStackCmClusterInstance>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobInstanceStatusResultCodeEnum>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobInstanceStatusStateCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobInstanceStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobInstanceStatusResultCodeEnum>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobInstanceStatusStateCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobInstanceStatusResponse = {
  __typename?: 'OpenStackDrRecoveryJobInstanceStatusResponse';
  instances?: Maybe<Array<Maybe<OpenStackDrRecoveryJobInstanceStatus>>>;
};

export type OpenStackDrRecoveryJobInstanceStatusResponseInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrRecoveryJobInstanceStatusInput>>>;
};

export enum OpenStackDrRecoveryJobInstanceStatusResultCodeEnum {
  DrRecoveryInstanceResultCanceled = 'DR_RECOVERY_INSTANCE_RESULT_CANCELED',
  DrRecoveryInstanceResultFailed = 'DR_RECOVERY_INSTANCE_RESULT_FAILED',
  DrRecoveryInstanceResultSuccess = 'DR_RECOVERY_INSTANCE_RESULT_SUCCESS',
  DrRecoveryInstanceResultUnknown = 'DR_RECOVERY_INSTANCE_RESULT_UNKNOWN'
}

export enum OpenStackDrRecoveryJobInstanceStatusStateCodeEnum {
  DrRecoveryJobInstanceStateBooting = 'DR_RECOVERY_JOB_INSTANCE_STATE_BOOTING',
  DrRecoveryJobInstanceStateDiagnosing = 'DR_RECOVERY_JOB_INSTANCE_STATE_DIAGNOSING',
  DrRecoveryJobInstanceStateDone = 'DR_RECOVERY_JOB_INSTANCE_STATE_DONE',
  DrRecoveryJobInstanceStateExcepted = 'DR_RECOVERY_JOB_INSTANCE_STATE_EXCEPTED',
  DrRecoveryJobInstanceStateFailed = 'DR_RECOVERY_JOB_INSTANCE_STATE_FAILED',
  DrRecoveryJobInstanceStateIgnored = 'DR_RECOVERY_JOB_INSTANCE_STATE_IGNORED',
  DrRecoveryJobInstanceStatePreparing = 'DR_RECOVERY_JOB_INSTANCE_STATE_PREPARING',
  DrRecoveryJobInstanceStateReady = 'DR_RECOVERY_JOB_INSTANCE_STATE_READY',
  DrRecoveryJobInstanceStateRunning = 'DR_RECOVERY_JOB_INSTANCE_STATE_RUNNING',
  DrRecoveryJobInstanceStateSuccess = 'DR_RECOVERY_JOB_INSTANCE_STATE_SUCCESS'
}

export type OpenStackDrRecoveryJobKeyPairStatus = {
  __typename?: 'OpenStackDrRecoveryJobKeyPairStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  keypair?: Maybe<OpenStackCmClusterKeyPair>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobKeyPairStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  keypair?: InputMaybe<OpenStackCmClusterKeyPairInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
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
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobNetworkStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobNetworkStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobNetworkStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobNetworkStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
}

export enum OpenStackDrRecoveryJobOperationCodeEnum {
  Cancel = 'CANCEL',
  CancelConfirm = 'CANCEL_CONFIRM',
  Confirm = 'CONFIRM',
  IgnoreRollback = 'IGNORE_ROLLBACK',
  Pause = 'PAUSE',
  Retry = 'RETRY',
  RetryConfirm = 'RETRY_CONFIRM',
  RetryRollback = 'RETRY_ROLLBACK',
  Rollback = 'ROLLBACK',
  Run = 'RUN'
}

export enum OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum {
  DrRecoveryRecoveryPointTypeLatest = 'DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST',
  DrRecoveryRecoveryPointTypeLatestSnapshot = 'DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT',
  DrRecoveryRecoveryPointTypeSnapshot = 'DR_RECOVERY_RECOVERY_POINT_TYPE_SNAPSHOT'
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
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  operator?: Maybe<CloudUser>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  schedule?: Maybe<CloudSchedule>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryTypeEnum>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryJobResponseJobInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  operator?: InputMaybe<CloudUserInput>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  schedule?: InputMaybe<CloudScheduleInput>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryJobRouterStatus = {
  __typename?: 'OpenStackDrRecoveryJobRouterStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobRouterStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  router?: Maybe<OpenStackCmClusterRouter>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobRouterStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobRouterStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  router?: InputMaybe<OpenStackCmClusterRouterInput>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobRouterStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
}

export type OpenStackDrRecoveryJobSecurityGroupStatus = {
  __typename?: 'OpenStackDrRecoveryJobSecurityGroupStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  security_group?: Maybe<OpenStackCmClusterSecurityGroup>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobSecurityGroupStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  security_group?: InputMaybe<OpenStackCmClusterSecurityGroupInput>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Success = 'SUCCESS'
}

export enum OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum {
  Done = 'DONE',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Preparing = 'PREPARING',
  Success = 'SUCCESS'
}

export enum OpenStackDrRecoveryJobStateCodeEnum {
  DrRecoveryJobStateCanceling = 'DR_RECOVERY_JOB_STATE_CANCELING',
  DrRecoveryJobStateClearing = 'DR_RECOVERY_JOB_STATE_CLEARING',
  DrRecoveryJobStateClearFailed = 'DR_RECOVERY_JOB_STATE_CLEAR_FAILED',
  DrRecoveryJobStateCompleted = 'DR_RECOVERY_JOB_STATE_COMPLETED',
  DrRecoveryJobStateFinished = 'DR_RECOVERY_JOB_STATE_FINISHED',
  DrRecoveryJobStatePaused = 'DR_RECOVERY_JOB_STATE_PAUSED',
  DrRecoveryJobStatePending = 'DR_RECOVERY_JOB_STATE_PENDING',
  DrRecoveryJobStateReporting = 'DR_RECOVERY_JOB_STATE_REPORTING',
  DrRecoveryJobStateRunning = 'DR_RECOVERY_JOB_STATE_RUNNING',
  DrRecoveryJobStateWaiting = 'DR_RECOVERY_JOB_STATE_WAITING'
}

export type OpenStackDrRecoveryJobStatus = {
  __typename?: 'OpenStackDrRecoveryJobStatus';
  elapsed_time?: Maybe<Scalars['BigInt']['output']>;
  failed_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobStatusResultCodeEnum>;
  resume_at?: Maybe<Scalars['BigInt']['output']>;
  rollback_at?: Maybe<Scalars['BigInt']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum>;
  warning_flag?: Maybe<Scalars['Boolean']['output']>;
  warning_reasons?: Maybe<Array<Maybe<OpenStackDrMessage>>>;
};

export enum OpenStackDrRecoveryJobStatusCodeEnum {
  Done = 'DONE',
  Running = 'RUNNING',
  Waiting = 'WAITING'
}

export type OpenStackDrRecoveryJobStatusInput = {
  elapsed_time?: InputMaybe<Scalars['BigInt']['input']>;
  failed_reasons?: InputMaybe<Array<InputMaybe<OpenStackDrMessageInput>>>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobStatusResultCodeEnum>;
  resume_at?: InputMaybe<Scalars['BigInt']['input']>;
  rollback_at?: InputMaybe<Scalars['BigInt']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum>;
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
  DrRecoveryResultCanceled = 'DR_RECOVERY_RESULT_CANCELED',
  DrRecoveryResultFailed = 'DR_RECOVERY_RESULT_FAILED',
  DrRecoveryResultPartialSuccess = 'DR_RECOVERY_RESULT_PARTIAL_SUCCESS',
  DrRecoveryResultSuccess = 'DR_RECOVERY_RESULT_SUCCESS'
}

export enum OpenStackDrRecoveryJobStatusTypeCodeEnum {
  DrMigrationTaskCreate = 'DR_MIGRATION_TASK_CREATE',
  DrMigrationTaskDelete = 'DR_MIGRATION_TASK_DELETE'
}

export type OpenStackDrRecoveryJobSubnetStatus = {
  __typename?: 'OpenStackDrRecoveryJobSubnetStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobSubnetStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  subnet?: Maybe<OpenStackCmClusterSubnet>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobSubnetStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobSubnetStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  subnet?: InputMaybe<OpenStackCmClusterSubnetInput>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobSubnetStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
}

export type OpenStackDrRecoveryJobTenantStatus = {
  __typename?: 'OpenStackDrRecoveryJobTenantStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobTenantStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export type OpenStackDrRecoveryJobTenantStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobTenantStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStatusCodeEnum>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
};

export enum OpenStackDrRecoveryJobTenantStatusResultCodeEnum {
  Canceled = 'CANCELED',
  Excepted = 'EXCEPTED',
  Failed = 'FAILED',
  Ignored = 'IGNORED',
  Success = 'SUCCESS'
}

export type OpenStackDrRecoveryJobVolumeStatus = {
  __typename?: 'OpenStackDrRecoveryJobVolumeStatus';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryJobVolumeStatusResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryJobVolumeStatusStateCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
  volume?: Maybe<OpenStackCmClusterVolume>;
};

export type OpenStackDrRecoveryJobVolumeStatusInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryJobVolumeStatusResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobVolumeStatusStateCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryJobStatusTypeCodeEnum>;
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
  DrRecoveryVolumeResultCanceled = 'DR_RECOVERY_VOLUME_RESULT_CANCELED',
  DrRecoveryVolumeResultFailed = 'DR_RECOVERY_VOLUME_RESULT_FAILED',
  DrRecoveryVolumeResultSuccess = 'DR_RECOVERY_VOLUME_RESULT_SUCCESS'
}

export enum OpenStackDrRecoveryJobVolumeStatusStateCodeEnum {
  DrRecoveryJobVolumeStateDone = 'DR_RECOVERY_JOB_VOLUME_STATE_DONE',
  DrRecoveryJobVolumeStateExcepted = 'DR_RECOVERY_JOB_VOLUME_STATE_EXCEPTED',
  DrRecoveryJobVolumeStateFailed = 'DR_RECOVERY_JOB_VOLUME_STATE_FAILED',
  DrRecoveryJobVolumeStatePreparing = 'DR_RECOVERY_JOB_VOLUME_STATE_PREPARING',
  DrRecoveryJobVolumeStateSuccess = 'DR_RECOVERY_JOB_VOLUME_STATE_SUCCESS'
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
  operation_code?: Maybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  operator?: Maybe<CloudUser>;
  plan?: Maybe<OpenStackDrRecoveryPlan>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  schedule?: Maybe<CloudSchedule>;
  state_code?: Maybe<OpenStackDrRecoveryJobStateCodeEnum>;
  type_code?: Maybe<OpenStackDrRecoveryTypeEnum>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrRecoveryJobsResponseJobsInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<OpenStackDrProtectionGroupInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  operation_code?: InputMaybe<OpenStackDrRecoveryJobOperationCodeEnum>;
  operator?: InputMaybe<CloudUserInput>;
  plan?: InputMaybe<OpenStackDrRecoveryPlanInput>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  schedule?: InputMaybe<CloudScheduleInput>;
  state_code?: InputMaybe<OpenStackDrRecoveryJobStateCodeEnum>;
  type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrRecoveryPlan = {
  __typename?: 'OpenStackDrRecoveryPlan';
  abnormal_state_reasons?: Maybe<OpenStackDrAbnormalStateReasons>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  detail?: Maybe<OpenStackDrRecoveryPlanDetail>;
  direction_code?: Maybe<OpenStackDrRecoveryPlanDirectionCodeEnum>;
  id?: Maybe<Scalars['BigInt']['output']>;
  mirror_state_code?: Maybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum>;
  name?: Maybe<Scalars['String']['output']>;
  protection_cluster?: Maybe<OpenStackCmCluster>;
  recovery_cluster?: Maybe<OpenStackCmCluster>;
  remarks?: Maybe<Scalars['String']['output']>;
  snapshot_retention_count?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<OpenStackDrRecoveryPlanStateCodeEnum>;
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
  DrRecoveryDirectionFailback = 'DR_RECOVERY_DIRECTION_FAILBACK',
  DrRecoveryDirectionFailover = 'DR_RECOVERY_DIRECTION_FAILOVER'
}

export type OpenStackDrRecoveryPlanInput = {
  abnormal_state_reasons?: InputMaybe<OpenStackDrAbnormalStateReasonsInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  detail?: InputMaybe<OpenStackDrRecoveryPlanDetailInput>;
  direction_code?: InputMaybe<OpenStackDrRecoveryPlanDirectionCodeEnum>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  mirror_state_code?: InputMaybe<OpenStackDrRecoveryPlanMirrorStateCodeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster?: InputMaybe<OpenStackCmClusterInput>;
  recovery_cluster?: InputMaybe<OpenStackCmClusterInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  snapshot_retention_count?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<OpenStackDrRecoveryPlanStateCodeEnum>;
  updatable?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrRecoveryPlanMirrorStateCodeEnum {
  DrRecoveryPlanStateMirroring = 'DR_RECOVERY_PLAN_STATE_MIRRORING',
  DrRecoveryPlanStatePaused = 'DR_RECOVERY_PLAN_STATE_PAUSED',
  DrRecoveryPlanStatePrepare = 'DR_RECOVERY_PLAN_STATE_PREPARE',
  DrRecoveryPlanStateStopped = 'DR_RECOVERY_PLAN_STATE_STOPPED',
  DrRecoveryPlanStateWarning = 'DR_RECOVERY_PLAN_STATE_WARNING'
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
  DrRecoveryPlanStateCritical = 'DR_RECOVERY_PLAN_STATE_CRITICAL',
  DrRecoveryPlanStateEmergency = 'DR_RECOVERY_PLAN_STATE_EMERGENCY',
  DrRecoveryPlanStateNormal = 'DR_RECOVERY_PLAN_STATE_NORMAL',
  DrRecoveryPlanStateWarning = 'DR_RECOVERY_PLAN_STATE_WARNING'
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
  RecoveryPointObjectiveTypeDay = 'RECOVERY_POINT_OBJECTIVE_TYPE_DAY',
  RecoveryPointObjectiveTypeHour = 'RECOVERY_POINT_OBJECTIVE_TYPE_HOUR',
  RecoveryPointObjectiveTypeMinute = 'RECOVERY_POINT_OBJECTIVE_TYPE_MINUTE'
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
  recovery_direction_code?: Maybe<OpenStackDrRecoveryPlanDirectionCodeEnum>;
  recovery_plan_id?: Maybe<Scalars['BigInt']['output']>;
  recovery_plan_name?: Maybe<Scalars['String']['output']>;
  recovery_plan_remarks?: Maybe<Scalars['String']['output']>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective_type?: Maybe<OpenStackDrRecoveryPointObjectiveTypeEnum>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  recovery_time_objective?: Maybe<Scalars['BigInt']['output']>;
  recovery_type_code?: Maybe<OpenStackDrRecoveryTypeEnum>;
  result_code?: Maybe<OpenStackDrRecoveryResultResultCodeEnum>;
  routers?: Maybe<Array<Maybe<OpenStackDrRouterRecoveryResult>>>;
  schedule_type?: Maybe<CloudScheduleTypeEnum>;
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
  recovery_direction_code?: InputMaybe<OpenStackDrRecoveryPlanDirectionCodeEnum>;
  recovery_plan_id?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_plan_name?: InputMaybe<Scalars['String']['input']>;
  recovery_plan_remarks?: InputMaybe<Scalars['String']['input']>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective_type?: InputMaybe<OpenStackDrRecoveryPointObjectiveTypeEnum>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  recovery_time_objective?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_type_code?: InputMaybe<OpenStackDrRecoveryTypeEnum>;
  result_code?: InputMaybe<OpenStackDrRecoveryResultResultCodeEnum>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackDrRouterRecoveryResultInput>>>;
  schedule_type?: InputMaybe<CloudScheduleTypeEnum>;
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
  DrRecoveryResultCanceled = 'DR_RECOVERY_RESULT_CANCELED',
  DrRecoveryResultFailed = 'DR_RECOVERY_RESULT_FAILED',
  DrRecoveryResultPartialSuccess = 'DR_RECOVERY_RESULT_PARTIAL_SUCCESS',
  DrRecoveryResultSuccess = 'DR_RECOVERY_RESULT_SUCCESS'
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
  DrRecoveryTypeMigration = 'DR_RECOVERY_TYPE_MIGRATION',
  DrRecoveryTypeSimulation = 'DR_RECOVERY_TYPE_SIMULATION'
}

export enum OpenStackDrReportResultEnum {
  DrRecoveryResultCanceled = 'DR_RECOVERY_RESULT_CANCELED',
  DrRecoveryResultFailed = 'DR_RECOVERY_RESULT_FAILED',
  DrRecoveryResultPartialSuccess = 'DR_RECOVERY_RESULT_PARTIAL_SUCCESS',
  DrRecoveryResultSuccess = 'DR_RECOVERY_RESULT_SUCCESS'
}

export type OpenStackDrRetryInstancesRequest = {
  __typename?: 'OpenStackDrRetryInstancesRequest';
  instances?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  recovery_point_snapshot?: Maybe<OpenStackDrProtectionGroupSnapshot>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
};

export type OpenStackDrRetryInstancesRequestInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  recovery_point_snapshot?: InputMaybe<OpenStackDrProtectionGroupSnapshotInput>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
};

export type OpenStackDrRouterRecoveryPlan = {
  __typename?: 'OpenStackDrRouterRecoveryPlan';
  protection_cluster_router?: Maybe<OpenStackCmClusterRouter>;
  recovery_cluster_external_network?: Maybe<OpenStackCmClusterNetwork>;
  recovery_cluster_external_network_update_flag?: Maybe<Scalars['Boolean']['output']>;
  recovery_cluster_external_network_update_reason?: Maybe<OpenStackDrMessage>;
  recovery_cluster_external_routing_interfaces?: Maybe<Array<Maybe<OpenStackCmClusterNetworkRoutingInterface>>>;
  recovery_type_code?: Maybe<OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum>;
};

export type OpenStackDrRouterRecoveryPlanInput = {
  protection_cluster_router?: InputMaybe<OpenStackCmClusterRouterInput>;
  recovery_cluster_external_network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  recovery_cluster_external_network_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_external_network_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_cluster_external_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkRoutingInterfaceInput>>>;
  recovery_type_code?: InputMaybe<OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum>;
};

export enum OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanNetworkRecoveryTypeMirroring = 'DR_RECOVERY_PLAN_NETWORK_RECOVERY_TYPE_MIRRORING'
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
  SnapshotIntervalTypeDaily = 'SNAPSHOT_INTERVAL_TYPE_DAILY',
  SnapshotIntervalTypeHourly = 'SNAPSHOT_INTERVAL_TYPE_HOURLY',
  SnapshotIntervalTypeMinutely = 'SNAPSHOT_INTERVAL_TYPE_MINUTELY'
}

export enum OpenStackDrScheduleStateCodeEnum {
  DrProtectionGroupStateCritical = 'DR_PROTECTION_GROUP_STATE_CRITICAL',
  DrProtectionGroupStateEmergency = 'DR_PROTECTION_GROUP_STATE_EMERGENCY',
  DrProtectionGroupStateNormal = 'DR_PROTECTION_GROUP_STATE_NORMAL',
  DrProtectionGroupStateWarning = 'DR_PROTECTION_GROUP_STATE_WARNING'
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
  recovery_type_code?: Maybe<OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum>;
  unavailable_flag?: Maybe<Scalars['Boolean']['output']>;
  unavailable_reason?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrStorageRecoveryPlanInput = {
  protection_cluster_storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  recovery_cluster_storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  recovery_cluster_storage_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_storage_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum>;
  unavailable_flag?: InputMaybe<Scalars['Boolean']['input']>;
  unavailable_reason?: InputMaybe<OpenStackDrMessageInput>;
};

export enum OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanStorageRecoveryTypeMapping = 'DR_RECOVERY_PLAN_STORAGE_RECOVERY_TYPE_MAPPING'
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
  recovery_type_code?: Maybe<OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum>;
};

export type OpenStackDrTenantRecoveryPlanInput = {
  protection_cluster_tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  recovery_cluster_tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  recovery_cluster_tenant_mirror_name?: InputMaybe<Scalars['String']['input']>;
  recovery_cluster_tenant_mirror_name_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_tenant_mirror_name_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum>;
};

export enum OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanTenantRecoveryTypeMirroring = 'DR_RECOVERY_PLAN_TENANT_RECOVERY_TYPE_MIRRORING'
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
  recovery_type_code?: Maybe<OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum>;
  unavailable_flag?: Maybe<Scalars['Boolean']['output']>;
  unavailable_reason?: Maybe<OpenStackDrMessage>;
};

export type OpenStackDrVolumeRecoveryPlanInput = {
  protection_cluster_volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
  recovery_cluster_storage?: InputMaybe<OpenStackCmClusterStorageInput>;
  recovery_cluster_storage_update_flag?: InputMaybe<Scalars['Boolean']['input']>;
  recovery_cluster_storage_update_reason?: InputMaybe<OpenStackDrMessageInput>;
  recovery_type_code?: InputMaybe<OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum>;
  unavailable_flag?: InputMaybe<Scalars['Boolean']['input']>;
  unavailable_reason?: InputMaybe<OpenStackDrMessageInput>;
};

export enum OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum {
  DrRecoveryPlanVolumeRecoveryTypeMirroring = 'DR_RECOVERY_PLAN_VOLUME_RECOVERY_TYPE_MIRRORING'
}

export type OpenStackDrVolumeRecoveryResult = {
  __typename?: 'OpenStackDrVolumeRecoveryResult';
  failed_reason?: Maybe<OpenStackDrMessage>;
  finished_at?: Maybe<Scalars['BigInt']['output']>;
  protection_cluster_volume?: Maybe<OpenStackCmClusterVolume>;
  recovery_cluster_volume?: Maybe<OpenStackCmClusterVolume>;
  recovery_point?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_type_code?: Maybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: Maybe<OpenStackDrVolumeRecoveryResultResultCodeEnum>;
  rollback_flag?: Maybe<Scalars['Boolean']['output']>;
  started_at?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrVolumeRecoveryResultInput = {
  failed_reason?: InputMaybe<OpenStackDrMessageInput>;
  finished_at?: InputMaybe<Scalars['BigInt']['input']>;
  protection_cluster_volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
  recovery_cluster_volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
  recovery_point?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_type_code?: InputMaybe<OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum>;
  result_code?: InputMaybe<OpenStackDrVolumeRecoveryResultResultCodeEnum>;
  rollback_flag?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum OpenStackDrVolumeRecoveryResultResultCodeEnum {
  DrRecoveryVolumeResultCanceled = 'DR_RECOVERY_VOLUME_RESULT_CANCELED',
  DrRecoveryVolumeResultFailed = 'DR_RECOVERY_VOLUME_RESULT_FAILED',
  DrRecoveryVolumeResultSuccess = 'DR_RECOVERY_VOLUME_RESULT_SUCCESS'
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
