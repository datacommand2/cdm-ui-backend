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

export type ActivateTenantInput = {
  tenantId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CancelCloudBackupReservationInput = {
  scheduleId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CheckLicenseInput = {
  cloudLicenseRequest?: InputMaybe<CloudLicenseRequestInput>;
};

export enum CloudAuthMechanismEnum {
  CramMd5 = 'CRAM-MD5',
  DigestMd5 = 'DIGEST-MD5',
  Gssapi = 'GSSAPI',
  Login = 'LOGIN',
  Md5 = 'MD5',
  Oauth10A = 'OAUTH10A',
  Oauthbearer = 'OAUTHBEARER',
  Plain = 'PLAIN'
}

export type CloudAuthRequest = {
  __typename?: 'CloudAuthRequest';
  account?: Maybe<Scalars['String']['output']>;
  force?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type CloudAuthRequestInput = {
  account?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CloudBackup = {
  __typename?: 'CloudBackup';
  backup_dt?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
};

export type CloudBackupInput = {
  backup_dt?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudBackupWeekEnum {
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday'
}

export enum CloudBackupWeekOfMonthEnum {
  FifthWeek = 'fifth-week',
  FirstWeek = 'first-week',
  FourthWeek = 'fourth-week',
  LastWeek = 'last-week',
  SecondWeek = 'second-week',
  ThirdWeek = 'third-week'
}

export type CloudConfigBackup = {
  __typename?: 'CloudConfigBackup';
  backup_schedule?: Maybe<CloudConfigBackupSchedule>;
  backup_schedule_enable?: Maybe<Scalars['Boolean']['output']>;
  backup_store_period?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudConfigBackupInput = {
  backup_schedule?: InputMaybe<CloudConfigBackupScheduleInput>;
  backup_schedule_enable?: InputMaybe<Scalars['Boolean']['input']>;
  backup_store_period?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudConfigBackupSchedule = {
  __typename?: 'CloudConfigBackupSchedule';
  day_of_month?: Maybe<CloudBackupWeekOfMonthEnum | `${CloudBackupWeekOfMonthEnum}`>;
  day_of_week?: Maybe<CloudBackupWeekEnum | `${CloudBackupWeekEnum}`>;
  hour?: Maybe<Scalars['BigInt']['output']>;
  interval_day?: Maybe<Scalars['BigInt']['output']>;
  interval_month?: Maybe<CloudIntervalMonthEnum | `${CloudIntervalMonthEnum}`>;
  interval_week?: Maybe<Scalars['BigInt']['output']>;
  minute?: Maybe<Scalars['BigInt']['output']>;
  start_day?: Maybe<Scalars['BigInt']['output']>;
  start_month?: Maybe<Scalars['BigInt']['output']>;
  start_year?: Maybe<Scalars['BigInt']['output']>;
  type?: Maybe<CloudScheduleTypeEnum | `${CloudScheduleTypeEnum}`>;
  tz?: Maybe<Scalars['String']['output']>;
  week_of_month?: Maybe<CloudBackupWeekOfMonthEnum | `${CloudBackupWeekOfMonthEnum}`>;
};

export type CloudConfigBackupScheduleInput = {
  day_of_month?: InputMaybe<CloudBackupWeekOfMonthEnum | `${CloudBackupWeekOfMonthEnum}`>;
  day_of_week?: InputMaybe<CloudBackupWeekEnum | `${CloudBackupWeekEnum}`>;
  hour?: InputMaybe<Scalars['BigInt']['input']>;
  interval_day?: InputMaybe<Scalars['BigInt']['input']>;
  interval_month?: InputMaybe<CloudIntervalMonthEnum | `${CloudIntervalMonthEnum}`>;
  interval_week?: InputMaybe<Scalars['BigInt']['input']>;
  minute?: InputMaybe<Scalars['BigInt']['input']>;
  start_day?: InputMaybe<Scalars['BigInt']['input']>;
  start_month?: InputMaybe<Scalars['BigInt']['input']>;
  start_year?: InputMaybe<Scalars['BigInt']['input']>;
  type?: InputMaybe<CloudScheduleTypeEnum | `${CloudScheduleTypeEnum}`>;
  tz?: InputMaybe<Scalars['String']['input']>;
  week_of_month?: InputMaybe<CloudBackupWeekOfMonthEnum | `${CloudBackupWeekOfMonthEnum}`>;
};

export type CloudConfigEvent = {
  __typename?: 'CloudConfigEvent';
  event_custom_notification_enable?: Maybe<Scalars['Boolean']['output']>;
  event_desktop_notification_enable?: Maybe<Scalars['Boolean']['output']>;
  event_email_notification_enable?: Maybe<Scalars['Boolean']['output']>;
  event_notification_enable?: Maybe<Scalars['Boolean']['output']>;
  event_popup_notification_enable?: Maybe<Scalars['Boolean']['output']>;
  event_sms_notification_enable?: Maybe<Scalars['Boolean']['output']>;
  event_sms_notifier?: Maybe<CloudConfigEventSmsNotifier>;
  event_smtp_notifier?: Maybe<CloudConfigEventSmtpNotifier>;
  event_store_period?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudConfigEventInput = {
  event_custom_notification_enable?: InputMaybe<Scalars['Boolean']['input']>;
  event_desktop_notification_enable?: InputMaybe<Scalars['Boolean']['input']>;
  event_email_notification_enable?: InputMaybe<Scalars['Boolean']['input']>;
  event_notification_enable?: InputMaybe<Scalars['Boolean']['input']>;
  event_popup_notification_enable?: InputMaybe<Scalars['Boolean']['input']>;
  event_sms_notification_enable?: InputMaybe<Scalars['Boolean']['input']>;
  event_sms_notifier?: InputMaybe<CloudConfigEventSmsNotifierInput>;
  event_smtp_notifier?: InputMaybe<CloudConfigEventSmtpNotifierInput>;
  event_store_period?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudConfigEventSmsNotifier = {
  __typename?: 'CloudConfigEventSmsNotifier';
  provider?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CloudConfigEventSmsNotifierInput = {
  provider?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CloudConfigEventSmtpNotifier = {
  __typename?: 'CloudConfigEventSmtpNotifier';
  auth_mechanism?: Maybe<CloudAuthMechanismEnum | `${CloudAuthMechanismEnum}`>;
  auth_password?: Maybe<Scalars['String']['output']>;
  auth_username?: Maybe<Scalars['String']['output']>;
  encryption?: Maybe<CloudEncryptionEnum | `${CloudEncryptionEnum}`>;
  sender?: Maybe<Scalars['String']['output']>;
  server_address?: Maybe<Scalars['String']['output']>;
  server_port?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudConfigEventSmtpNotifierInput = {
  auth_mechanism?: InputMaybe<CloudAuthMechanismEnum | `${CloudAuthMechanismEnum}`>;
  auth_password?: InputMaybe<Scalars['String']['input']>;
  auth_username?: InputMaybe<Scalars['String']['input']>;
  encryption?: InputMaybe<CloudEncryptionEnum | `${CloudEncryptionEnum}`>;
  sender?: InputMaybe<Scalars['String']['input']>;
  server_address?: InputMaybe<Scalars['String']['input']>;
  server_port?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudConfigIdentity = {
  __typename?: 'CloudConfigIdentity';
  global_language_set?: Maybe<Scalars['String']['output']>;
  global_timezone?: Maybe<Scalars['String']['output']>;
  user_login_restriction_enable?: Maybe<Scalars['Boolean']['output']>;
  user_login_restriction_time?: Maybe<Scalars['BigInt']['output']>;
  user_login_restriction_try_count?: Maybe<Scalars['BigInt']['output']>;
  user_password_change_cycle?: Maybe<Scalars['BigInt']['output']>;
  user_reuse_old_password?: Maybe<Scalars['Boolean']['output']>;
  user_session_timeout?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudConfigIdentityInput = {
  global_language_set?: InputMaybe<Scalars['String']['input']>;
  global_timezone?: InputMaybe<Scalars['String']['input']>;
  user_login_restriction_enable?: InputMaybe<Scalars['Boolean']['input']>;
  user_login_restriction_time?: InputMaybe<Scalars['BigInt']['input']>;
  user_login_restriction_try_count?: InputMaybe<Scalars['BigInt']['input']>;
  user_password_change_cycle?: InputMaybe<Scalars['BigInt']['input']>;
  user_reuse_old_password?: InputMaybe<Scalars['Boolean']['input']>;
  user_session_timeout?: InputMaybe<Scalars['BigInt']['input']>;
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

export type CloudDeactivateTenantResponse = {
  __typename?: 'CloudDeactivateTenantResponse';
  tenant?: Maybe<CloudTenant>;
};

export type CloudDeactivateTenantResponseInput = {
  tenant?: InputMaybe<CloudTenantInput>;
};

export enum CloudEncryptionEnum {
  None = 'none',
  SslTls = 'ssl/tls',
  Starttls = 'starttls'
}

export type CloudEvent = {
  __typename?: 'CloudEvent';
  class_1?: Maybe<Scalars['String']['output']>;
  class_2?: Maybe<Scalars['String']['output']>;
  class_3?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  error_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  level?: Maybe<CloudLogLevelEnum | `${CloudLogLevelEnum}`>;
  solution?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<CloudTenant>;
};

export type CloudEventClassification = {
  __typename?: 'CloudEventClassification';
  class_1?: Maybe<Scalars['String']['output']>;
  class_2?: Maybe<Scalars['String']['output']>;
  class_3?: Maybe<Scalars['String']['output']>;
  solution?: Maybe<Scalars['String']['output']>;
};

export type CloudEventClassificationInput = {
  class_1?: InputMaybe<Scalars['String']['input']>;
  class_2?: InputMaybe<Scalars['String']['input']>;
  class_3?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
};

export type CloudEventClassificationsResponse = {
  __typename?: 'CloudEventClassificationsResponse';
  event_classifications?: Maybe<Array<Maybe<CloudEventClassification>>>;
};

export type CloudEventClassificationsResponseInput = {
  event_classifications?: InputMaybe<Array<InputMaybe<CloudEventClassificationInput>>>;
};

export type CloudEventConfigRequest = {
  __typename?: 'CloudEventConfigRequest';
  event_config?: Maybe<CloudConfigEvent>;
};

export type CloudEventConfigRequestInput = {
  event_config?: InputMaybe<CloudConfigEventInput>;
};

export type CloudEventConfigResponse = {
  __typename?: 'CloudEventConfigResponse';
  event_config?: Maybe<CloudConfigEvent>;
};

export type CloudEventConfigResponseInput = {
  event_config?: InputMaybe<CloudConfigEventInput>;
};

export type CloudEventInput = {
  class_1?: InputMaybe<Scalars['String']['input']>;
  class_2?: InputMaybe<Scalars['String']['input']>;
  class_3?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  error_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  level?: InputMaybe<CloudLogLevelEnum | `${CloudLogLevelEnum}`>;
  solution?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<CloudTenantInput>;
};

export type CloudEventNotification = {
  __typename?: 'CloudEventNotification';
  code?: Maybe<Scalars['String']['output']>;
  enable?: Maybe<Scalars['Boolean']['output']>;
};

export type CloudEventNotificationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudEventNotificationRequest = {
  __typename?: 'CloudEventNotificationRequest';
  event_notifications?: Maybe<Array<Maybe<CloudEventNotification>>>;
};

export type CloudEventNotificationRequestInput = {
  event_notifications?: InputMaybe<Array<InputMaybe<CloudEventNotificationInput>>>;
};

export type CloudEventNotificationResponse = {
  __typename?: 'CloudEventNotificationResponse';
  event_notifications?: Maybe<Array<Maybe<CloudEventNotification>>>;
};

export type CloudEventNotificationResponseInput = {
  event_notifications?: InputMaybe<Array<InputMaybe<CloudEventNotificationInput>>>;
};

export type CloudEventResponse = {
  __typename?: 'CloudEventResponse';
  event?: Maybe<CloudEvent>;
};

export type CloudEventResponseInput = {
  event?: InputMaybe<CloudEventInput>;
};

export type CloudEventsResponse = {
  __typename?: 'CloudEventsResponse';
  events?: Maybe<Array<Maybe<CloudEvent>>>;
  pagination?: Maybe<CloudPagination>;
};

export type CloudEventsResponseInput = {
  events?: InputMaybe<Array<InputMaybe<CloudEventInput>>>;
  pagination?: InputMaybe<CloudPaginationInput>;
};

export type CloudGlobalConfigRequest = {
  __typename?: 'CloudGlobalConfigRequest';
  global_config?: Maybe<CloudMonitorCloudGlobalConfig>;
};

export type CloudGlobalConfigRequestInput = {
  global_config?: InputMaybe<CloudMonitorCloudGlobalConfigInput>;
};

export type CloudGlobalConfigResponse = {
  __typename?: 'CloudGlobalConfigResponse';
  global_config?: Maybe<CloudMonitorCloudGlobalConfig>;
};

export type CloudGlobalConfigResponseInput = {
  global_config?: InputMaybe<CloudMonitorCloudGlobalConfigInput>;
};

export type CloudGroupUsersRequest = {
  __typename?: 'CloudGroupUsersRequest';
  users?: Maybe<Array<Maybe<CloudUser>>>;
};

export type CloudGroupUsersRequestInput = {
  users?: InputMaybe<Array<InputMaybe<CloudUserInput>>>;
};

export type CloudGroupUsersResponse = {
  __typename?: 'CloudGroupUsersResponse';
  users?: Maybe<Array<Maybe<CloudUser>>>;
};

export type CloudGroupUsersResponseInput = {
  users?: InputMaybe<Array<InputMaybe<CloudUserInput>>>;
};

export type CloudIdentityConfigRequest = {
  __typename?: 'CloudIdentityConfigRequest';
  identity_config?: Maybe<CloudConfigIdentity>;
};

export type CloudIdentityConfigRequestInput = {
  identity_config?: InputMaybe<CloudConfigIdentityInput>;
};

export type CloudIdentityConfigResponse = {
  __typename?: 'CloudIdentityConfigResponse';
  identity_config?: Maybe<CloudConfigIdentity>;
};

export type CloudIdentityConfigResponseInput = {
  identity_config?: InputMaybe<CloudConfigIdentityInput>;
};

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

export type CloudLicense = {
  __typename?: 'CloudLicense';
  cdm_cloud_customer?: Maybe<Scalars['String']['output']>;
  cdm_cloud_license_key?: Maybe<Scalars['String']['output']>;
  cdm_cloud_provider?: Maybe<Scalars['String']['output']>;
  cdm_dr_expiry_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_issue_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_cluster?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_instance?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_platform?: Maybe<Array<Maybe<CloudPlatformEnum | `${CloudPlatformEnum}`>>>;
  cdm_dr_limits_storage?: Maybe<Array<Maybe<CloudStorageEnum | `${CloudStorageEnum}`>>>;
  cdm_dr_limits_tenant?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_volume?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_openshift_expiry_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_openshift_issue_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_openshift_limits_core?: Maybe<Scalars['BigInt']['output']>;
  cdm_r_expiry_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_r_issue_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_r_limits_agent?: Maybe<Scalars['BigInt']['output']>;
  cdm_r_limits_group?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudLicenseInput = {
  cdm_cloud_customer?: InputMaybe<Scalars['String']['input']>;
  cdm_cloud_license_key?: InputMaybe<Scalars['String']['input']>;
  cdm_cloud_provider?: InputMaybe<Scalars['String']['input']>;
  cdm_dr_expiry_dt?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_issue_dt?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_limits_cluster?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_limits_instance?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_limits_platform?: InputMaybe<Array<InputMaybe<CloudPlatformEnum | `${CloudPlatformEnum}`>>>;
  cdm_dr_limits_storage?: InputMaybe<Array<InputMaybe<CloudStorageEnum | `${CloudStorageEnum}`>>>;
  cdm_dr_limits_tenant?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_limits_volume?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_openshift_expiry_dt?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_openshift_issue_dt?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_dr_openshift_limits_core?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_r_expiry_dt?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_r_issue_dt?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_r_limits_agent?: InputMaybe<Scalars['BigInt']['input']>;
  cdm_r_limits_group?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudLicenseRequest = {
  __typename?: 'CloudLicenseRequest';
  license?: Maybe<Scalars['String']['output']>;
};

export type CloudLicenseRequestInput = {
  license?: InputMaybe<Scalars['String']['input']>;
};

export type CloudLicenseResponse = {
  __typename?: 'CloudLicenseResponse';
  payloads?: Maybe<CloudLicense>;
};

export type CloudLicenseResponseInput = {
  payloads?: InputMaybe<CloudLicenseInput>;
};

export enum CloudLogLevelEnum {
  Debug = 'debug',
  Error = 'error',
  Fatal = 'fatal',
  Info = 'info',
  Trace = 'trace',
  Warning = 'warning'
}

export type CloudMonitorCloudGlobalConfig = {
  __typename?: 'CloudMonitorCloudGlobalConfig';
  global_log_level?: Maybe<CloudLogLevelEnum | `${CloudLogLevelEnum}`>;
  global_log_store_period?: Maybe<Scalars['BigInt']['output']>;
  system_monitor_interval?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudMonitorCloudGlobalConfigInput = {
  global_log_level?: InputMaybe<CloudLogLevelEnum | `${CloudLogLevelEnum}`>;
  global_log_store_period?: InputMaybe<Scalars['BigInt']['input']>;
  system_monitor_interval?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudMonitorCloudNode = {
  __typename?: 'CloudMonitorCloudNode';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CloudNodeStatus>;
};

export type CloudMonitorCloudNodeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CloudNodeStatusInput>;
};

export type CloudMonitorCloudService = {
  __typename?: 'CloudMonitorCloudService';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  solution?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CloudServiceStatus>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CloudMonitorCloudServiceConfig = {
  __typename?: 'CloudMonitorCloudServiceConfig';
  log_level?: Maybe<CloudLogLevelEnum | `${CloudLogLevelEnum}`>;
  log_store_period?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CloudMonitorCloudServiceConfigInput = {
  log_level?: InputMaybe<CloudLogLevelEnum | `${CloudLogLevelEnum}`>;
  log_store_period?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CloudMonitorCloudServiceInfo = {
  __typename?: 'CloudMonitorCloudServiceInfo';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  replicas?: Maybe<Array<Maybe<CloudServiceReplica>>>;
  solution?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CloudServiceStatus>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CloudMonitorCloudServiceInfoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  replicas?: InputMaybe<Array<InputMaybe<CloudServiceReplicaInput>>>;
  solution?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CloudServiceStatusInput>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CloudMonitorCloudServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CloudServiceStatusInput>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CloudNewTenantRequest = {
  __typename?: 'CloudNewTenantRequest';
  tenant?: Maybe<CloudTenant>;
};

export type CloudNewTenantRequestInput = {
  tenant?: InputMaybe<CloudTenantInput>;
};

export type CloudNewUserGroupRequest = {
  __typename?: 'CloudNewUserGroupRequest';
  group?: Maybe<CloudUserGroup>;
};

export type CloudNewUserGroupRequestInput = {
  group?: InputMaybe<CloudUserGroupInput>;
};

export type CloudNewUserResponse = {
  __typename?: 'CloudNewUserResponse';
  password?: Maybe<Scalars['String']['output']>;
  user?: Maybe<CloudUser>;
};

export type CloudNewUserResponseInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<CloudUserInput>;
};

export type CloudNode = {
  __typename?: 'CloudNode';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CloudNodeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CloudNodeResourceUsage = {
  __typename?: 'CloudNodeResourceUsage';
  cpu_core_cnt?: Maybe<Scalars['BigInt']['output']>;
  cpu_used_rate?: Maybe<Scalars['Float']['output']>;
  filesystem_size_bytes?: Maybe<Scalars['BigInt']['output']>;
  filesystem_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  mem_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  network_receive_bytes?: Maybe<Scalars['BigInt']['output']>;
  network_transmit_bytes?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudNodeResourceUsageInput = {
  cpu_core_cnt?: InputMaybe<Scalars['BigInt']['input']>;
  cpu_used_rate?: InputMaybe<Scalars['Float']['input']>;
  filesystem_size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  filesystem_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  mem_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  network_receive_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  network_transmit_bytes?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudNodeResponse = {
  __typename?: 'CloudNodeResponse';
  node?: Maybe<CloudMonitorCloudNode>;
};

export type CloudNodeResponseInput = {
  node?: InputMaybe<CloudMonitorCloudNodeInput>;
};

export type CloudNodeStatus = {
  __typename?: 'CloudNodeStatus';
  resource_usage?: Maybe<CloudNodeResourceUsage>;
};

export type CloudNodeStatusInput = {
  resource_usage?: InputMaybe<CloudNodeResourceUsageInput>;
};

export type CloudNodesResponse = {
  __typename?: 'CloudNodesResponse';
  nodes?: Maybe<Array<Maybe<CloudMonitorCloudNode>>>;
};

export type CloudNodesResponseInput = {
  nodes?: InputMaybe<Array<InputMaybe<CloudMonitorCloudNodeInput>>>;
};

export type CloudPagination = {
  __typename?: 'CloudPagination';
  page?: Maybe<Scalars['BigInt']['output']>;
  total_items?: Maybe<Scalars['BigInt']['output']>;
  total_page?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudPaginationInput = {
  page?: InputMaybe<Scalars['BigInt']['input']>;
  total_items?: InputMaybe<Scalars['BigInt']['input']>;
  total_page?: InputMaybe<Scalars['BigInt']['input']>;
};

export enum CloudPlatformEnum {
  Kubernetes = 'kubernetes',
  Openshift = 'openshift',
  Openstack = 'openstack',
  Vmware = 'vmware'
}

export type CloudProductUuidResponse = {
  __typename?: 'CloudProductUuidResponse';
  uuid?: Maybe<Scalars['String']['output']>;
};

export type CloudProductUuidResponseInput = {
  uuid?: InputMaybe<Scalars['String']['input']>;
};

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

export type CloudRolesResponse = {
  __typename?: 'CloudRolesResponse';
  roles?: Maybe<Array<Maybe<CloudRole>>>;
};

export type CloudRolesResponseInput = {
  roles?: InputMaybe<Array<InputMaybe<CloudRoleInput>>>;
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

export type CloudService = {
  __typename?: 'CloudService';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  solution?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CloudServiceConfig = {
  __typename?: 'CloudServiceConfig';
  key?: Maybe<CloudServiceConfigItemEnum | `${CloudServiceConfigItemEnum}`>;
  name?: Maybe<CloudServiceNameEnum | `${CloudServiceNameEnum}`>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CloudServiceConfigInput = {
  key?: InputMaybe<CloudServiceConfigItemEnum | `${CloudServiceConfigItemEnum}`>;
  name?: InputMaybe<CloudServiceNameEnum | `${CloudServiceNameEnum}`>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudServiceConfigItemEnum {
  ServiceLogLevel = 'service_log_level',
  ServiceLogStorePeriod = 'service_log_store_period',
  ServiceLogType = 'service_log_type'
}

export type CloudServiceConfigsRequest = {
  __typename?: 'CloudServiceConfigsRequest';
  service_configs?: Maybe<Array<Maybe<CloudServiceConfig>>>;
};

export type CloudServiceConfigsRequestInput = {
  service_configs?: InputMaybe<Array<InputMaybe<CloudServiceConfigInput>>>;
};

export type CloudServiceConfigsResponse = {
  __typename?: 'CloudServiceConfigsResponse';
  service_configs?: Maybe<Array<Maybe<CloudServiceConfig>>>;
};

export type CloudServiceConfigsResponseInput = {
  service_configs?: InputMaybe<Array<InputMaybe<CloudServiceConfigInput>>>;
};

export type CloudServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CloudServiceLogResponse = {
  __typename?: 'CloudServiceLogResponse';
  log?: Maybe<Scalars['String']['output']>;
};

export type CloudServiceLogResponseInput = {
  log?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudServiceNameEnum {
  CdmCloudApiGateway = 'cdm-cloud-api-gateway',
  CdmCloudIdentity = 'cdm-cloud-identity',
  CdmCloudLicense = 'cdm-cloud-license',
  CdmCloudNotification = 'cdm-cloud-notification',
  CdmCloudScheduler = 'cdm-cloud-scheduler',
  CdmClusterManager = 'cdm-cluster-manager',
  CdmDrManager = 'cdm-dr-manager',
  CdmDrMigrator = 'cdm-dr-migrator',
  CdmDrMirrord = 'cdm-dr-mirrord',
  CdmOpenstackRequest = 'cdm-openstack-request',
  CdmTargetSnapshot = 'cdm-target-snapshot',
  ServiceNode = 'service_node'
}

export type CloudServiceReplica = {
  __typename?: 'CloudServiceReplica';
  id?: Maybe<Scalars['String']['output']>;
  node?: Maybe<CloudNode>;
  status?: Maybe<CloudServiceReplicaStatus>;
};

export type CloudServiceReplicaInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  node?: InputMaybe<CloudNodeInput>;
  status?: InputMaybe<CloudServiceReplicaStatusInput>;
};

export type CloudServiceReplicaStatus = {
  __typename?: 'CloudServiceReplicaStatus';
  resource_usage?: Maybe<CloudServiceResourceUsage>;
};

export type CloudServiceReplicaStatusInput = {
  resource_usage?: InputMaybe<CloudServiceResourceUsageInput>;
};

export type CloudServiceResourceUsage = {
  __typename?: 'CloudServiceResourceUsage';
  mem_used_bytes?: Maybe<Scalars['BigInt']['output']>;
  network_receive_bytes?: Maybe<Scalars['BigInt']['output']>;
  network_transmit_bytes?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudServiceResourceUsageInput = {
  mem_used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  network_receive_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  network_transmit_bytes?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CloudServiceResponse = {
  __typename?: 'CloudServiceResponse';
  service?: Maybe<CloudMonitorCloudServiceInfo>;
};

export type CloudServiceResponseInput = {
  service?: InputMaybe<CloudMonitorCloudServiceInfoInput>;
};

export type CloudServiceStatus = {
  __typename?: 'CloudServiceStatus';
  resource_usage?: Maybe<CloudServiceResourceUsage>;
};

export type CloudServiceStatusInput = {
  resource_usage?: InputMaybe<CloudServiceResourceUsageInput>;
};

export type CloudServicesResponse = {
  __typename?: 'CloudServicesResponse';
  services?: Maybe<Array<Maybe<CloudMonitorCloudService>>>;
};

export type CloudServicesResponseInput = {
  services?: InputMaybe<Array<InputMaybe<CloudMonitorCloudServiceInput>>>;
};

export type CloudSession = {
  __typename?: 'CloudSession';
  key?: Maybe<Scalars['String']['output']>;
};

export type CloudSessionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudStorageEnum {
  Ceph = 'ceph',
  Lvm = 'lvm',
  Netapp = 'netapp',
  Nfs = 'nfs'
}

export type CloudStreamEventsResponse = {
  __typename?: 'CloudStreamEventsResponse';
  events?: Maybe<Array<Maybe<CloudEvent>>>;
};

export type CloudStreamEventsResponseInput = {
  events?: InputMaybe<Array<InputMaybe<CloudEventInput>>>;
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

export type CloudTenantRequest = {
  __typename?: 'CloudTenantRequest';
  tenant?: Maybe<CloudTenant>;
};

export type CloudTenantRequestInput = {
  tenant?: InputMaybe<CloudTenantInput>;
};

export type CloudTenantResponse = {
  __typename?: 'CloudTenantResponse';
  tenant?: Maybe<CloudTenant>;
};

export type CloudTenantResponseInput = {
  tenant?: InputMaybe<CloudTenantInput>;
};

export type CloudTenantSolution = {
  __typename?: 'CloudTenantSolution';
  name?: Maybe<Scalars['String']['output']>;
};

export type CloudTenantSolutionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CloudTenantsResponse = {
  __typename?: 'CloudTenantsResponse';
  tenants?: Maybe<Array<Maybe<CloudTenant>>>;
};

export type CloudTenantsResponseInput = {
  tenants?: InputMaybe<Array<InputMaybe<CloudTenantInput>>>;
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

export type CloudUserGroupRequest = {
  __typename?: 'CloudUserGroupRequest';
  group?: Maybe<CloudUserGroup>;
};

export type CloudUserGroupRequestInput = {
  group?: InputMaybe<CloudUserGroupInput>;
};

export type CloudUserGroupResponse = {
  __typename?: 'CloudUserGroupResponse';
  group?: Maybe<CloudUserGroup>;
};

export type CloudUserGroupResponseInput = {
  group?: InputMaybe<CloudUserGroupInput>;
};

export type CloudUserGroupsResponse = {
  __typename?: 'CloudUserGroupsResponse';
  groups?: Maybe<Array<Maybe<CloudUserGroup>>>;
};

export type CloudUserGroupsResponseInput = {
  groups?: InputMaybe<Array<InputMaybe<CloudUserGroupInput>>>;
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

export type CloudUserPasswordRequest = {
  __typename?: 'CloudUserPasswordRequest';
  current_password?: Maybe<Scalars['String']['output']>;
  new_password?: Maybe<Scalars['String']['output']>;
};

export type CloudUserPasswordRequestInput = {
  current_password?: InputMaybe<Scalars['String']['input']>;
  new_password?: InputMaybe<Scalars['String']['input']>;
};

export type CloudUserPasswordResponse = {
  __typename?: 'CloudUserPasswordResponse';
  password?: Maybe<Scalars['String']['output']>;
};

export type CloudUserPasswordResponseInput = {
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CloudUserRequest = {
  __typename?: 'CloudUserRequest';
  user?: Maybe<CloudUser>;
};

export type CloudUserRequestInput = {
  user?: InputMaybe<CloudUserInput>;
};

export type CloudUserResponse = {
  __typename?: 'CloudUserResponse';
  user?: Maybe<CloudUser>;
};

export type CloudUserResponseInput = {
  user?: InputMaybe<CloudUserInput>;
};

export type CloudUsersResponse = {
  __typename?: 'CloudUsersResponse';
  pagination?: Maybe<CloudPagination>;
  users?: Maybe<Array<Maybe<CloudUser>>>;
};

export type CloudUsersResponseInput = {
  pagination?: InputMaybe<CloudPaginationInput>;
  users?: InputMaybe<Array<InputMaybe<CloudUserInput>>>;
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

export type CreateCloudBackupReservationInput = {
  cloudSchedule?: InputMaybe<CloudScheduleInput>;
};

export type CreateTenantInput = {
  cloudNewTenantRequest?: InputMaybe<CloudNewTenantRequestInput>;
};

export type CreateUserGroupInput = {
  cloudNewUserGroupRequest?: InputMaybe<CloudNewUserGroupRequestInput>;
};

export type CreateUserInput = {
  cloudUserRequest?: InputMaybe<CloudUserRequestInput>;
};

export type DeactivateTenantInput = {
  tenantId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteCloudBackupInput = {
  backupId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteIdentityServiceConfigsInput = {
  cloudServiceConfigsRequest?: InputMaybe<CloudServiceConfigsRequestInput>;
};

export type DeleteUserGroupInput = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type DeleteUserInput = {
  userId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type LoginUserInput = {
  cloudAuthRequest?: InputMaybe<CloudAuthRequestInput>;
};

export type LogoutUserInput = {
  xAuthenticatedSession?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ActivateTenant?: Maybe<CloudTenantResponse>;
  CancelCloudBackupReservation?: Maybe<Scalars['Boolean']['output']>;
  CheckLicense?: Maybe<CloudLicenseResponse>;
  CreateCloudBackup?: Maybe<CloudBackup>;
  CreateCloudBackupReservation?: Maybe<CloudSchedule>;
  CreateTenant?: Maybe<CloudTenantResponse>;
  CreateUser?: Maybe<CloudNewUserResponse>;
  CreateUserGroup?: Maybe<CloudUserGroupResponse>;
  DeactivateTenant?: Maybe<CloudDeactivateTenantResponse>;
  DeleteCloudBackup?: Maybe<Scalars['Boolean']['output']>;
  DeleteIdentityServiceConfigs?: Maybe<Scalars['Boolean']['output']>;
  DeleteUser?: Maybe<Scalars['Boolean']['output']>;
  DeleteUserGroup?: Maybe<Scalars['Boolean']['output']>;
  LoginUser?: Maybe<CloudUserResponse>;
  LogoutUser?: Maybe<Scalars['Boolean']['output']>;
  ResetUserEventReceives?: Maybe<Scalars['Boolean']['output']>;
  ResetUserPassword?: Maybe<CloudUserPasswordResponse>;
  RevokeSession?: Maybe<Scalars['Boolean']['output']>;
  UpdateCloudBackup?: Maybe<CloudBackup>;
  UpdateCloudBackupConfig?: Maybe<CloudConfigBackup>;
  UpdateIdentityConfig?: Maybe<CloudIdentityConfigResponse>;
  UpdateIdentityServiceConfigs?: Maybe<Scalars['Boolean']['output']>;
  UpdateLicense?: Maybe<CloudLicenseResponse>;
  UpdateMonitorGlobalConfig?: Maybe<CloudGlobalConfigResponse>;
  UpdateMonitorServiceConfigs?: Maybe<CloudServiceConfigsResponse>;
  UpdateNotificationConfig?: Maybe<CloudEventConfigResponse>;
  UpdateTenant?: Maybe<CloudTenantResponse>;
  UpdateTenantEventReceives?: Maybe<Scalars['Boolean']['output']>;
  UpdateUser?: Maybe<CloudUserResponse>;
  UpdateUserEventReceives?: Maybe<Scalars['Boolean']['output']>;
  UpdateUserGroup?: Maybe<CloudUserGroupResponse>;
  UpdateUserGroupUsers?: Maybe<CloudGroupUsersResponse>;
  UpdateUserPassword?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationActivateTenantArgs = {
  input?: InputMaybe<ActivateTenantInput>;
};


export type MutationCancelCloudBackupReservationArgs = {
  input?: InputMaybe<CancelCloudBackupReservationInput>;
};


export type MutationCheckLicenseArgs = {
  input?: InputMaybe<CheckLicenseInput>;
};


export type MutationCreateCloudBackupReservationArgs = {
  input?: InputMaybe<CreateCloudBackupReservationInput>;
};


export type MutationCreateTenantArgs = {
  input?: InputMaybe<CreateTenantInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateUserGroupArgs = {
  input?: InputMaybe<CreateUserGroupInput>;
};


export type MutationDeactivateTenantArgs = {
  input?: InputMaybe<DeactivateTenantInput>;
};


export type MutationDeleteCloudBackupArgs = {
  input?: InputMaybe<DeleteCloudBackupInput>;
};


export type MutationDeleteIdentityServiceConfigsArgs = {
  input?: InputMaybe<DeleteIdentityServiceConfigsInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteUserGroupArgs = {
  input?: InputMaybe<DeleteUserGroupInput>;
};


export type MutationLoginUserArgs = {
  input?: InputMaybe<LoginUserInput>;
};


export type MutationLogoutUserArgs = {
  input?: InputMaybe<LogoutUserInput>;
};


export type MutationResetUserPasswordArgs = {
  input?: InputMaybe<ResetUserPasswordInput>;
};


export type MutationRevokeSessionArgs = {
  input?: InputMaybe<RevokeSessionInput>;
};


export type MutationUpdateCloudBackupArgs = {
  input?: InputMaybe<UpdateCloudBackupInput>;
};


export type MutationUpdateCloudBackupConfigArgs = {
  input?: InputMaybe<UpdateCloudBackupConfigInput>;
};


export type MutationUpdateIdentityConfigArgs = {
  input?: InputMaybe<UpdateIdentityConfigInput>;
};


export type MutationUpdateIdentityServiceConfigsArgs = {
  input?: InputMaybe<UpdateIdentityServiceConfigsInput>;
};


export type MutationUpdateLicenseArgs = {
  input?: InputMaybe<UpdateLicenseInput>;
};


export type MutationUpdateMonitorGlobalConfigArgs = {
  input?: InputMaybe<UpdateMonitorGlobalConfigInput>;
};


export type MutationUpdateMonitorServiceConfigsArgs = {
  input?: InputMaybe<UpdateMonitorServiceConfigsInput>;
};


export type MutationUpdateNotificationConfigArgs = {
  input?: InputMaybe<UpdateNotificationConfigInput>;
};


export type MutationUpdateTenantArgs = {
  input?: InputMaybe<UpdateTenantInput>;
};


export type MutationUpdateTenantEventReceivesArgs = {
  input?: InputMaybe<UpdateTenantEventReceivesInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateUserEventReceivesArgs = {
  input?: InputMaybe<UpdateUserEventReceivesInput>;
};


export type MutationUpdateUserGroupArgs = {
  input?: InputMaybe<UpdateUserGroupInput>;
};


export type MutationUpdateUserGroupUsersArgs = {
  input?: InputMaybe<UpdateUserGroupUsersInput>;
};


export type MutationUpdateUserPasswordArgs = {
  input?: InputMaybe<UpdateUserPasswordInput>;
};

export type Query = {
  __typename?: 'Query';
  GetCloudBackup?: Maybe<CloudBackup>;
  GetCloudBackupConfig?: Maybe<CloudConfigBackup>;
  GetCloudBackupReservations?: Maybe<CloudSchedule>;
  GetCloudBackups?: Maybe<CloudBackup>;
  GetEvent?: Maybe<CloudEventResponse>;
  GetEventClasses?: Maybe<CloudEventClassificationsResponse>;
  GetEvents?: Maybe<CloudEventsResponse>;
  GetIdentityConfig?: Maybe<CloudIdentityConfigResponse>;
  GetIdentityServiceConfigs?: Maybe<CloudServiceConfigsResponse>;
  GetLicense?: Maybe<CloudLicenseResponse>;
  GetMonitorEvents?: Maybe<CloudStreamEventsResponse>;
  GetMonitorGlobalConfig?: Maybe<CloudGlobalConfigResponse>;
  GetMonitorNode?: Maybe<CloudNodeResponse>;
  GetMonitorNodeServices?: Maybe<CloudServicesResponse>;
  GetMonitorNodes?: Maybe<CloudNodesResponse>;
  GetMonitorService?: Maybe<CloudServiceResponse>;
  GetMonitorServiceConfigs?: Maybe<CloudServiceConfigsResponse>;
  GetMonitorServiceLog?: Maybe<CloudServiceLogResponse>;
  GetMonitorServices?: Maybe<CloudServicesResponse>;
  GetNotificationConfig?: Maybe<CloudEventConfigResponse>;
  GetProductUuid?: Maybe<CloudProductUuidResponse>;
  GetRoles?: Maybe<CloudRolesResponse>;
  GetTenant?: Maybe<CloudTenantResponse>;
  GetTenantEventReceives?: Maybe<CloudEventNotificationResponse>;
  GetTenants?: Maybe<CloudTenantsResponse>;
  GetUser?: Maybe<CloudUserResponse>;
  GetUserEventReceives?: Maybe<CloudEventNotificationResponse>;
  GetUserGroup?: Maybe<CloudUserGroupResponse>;
  GetUserGroups?: Maybe<CloudUserGroupsResponse>;
  GetUsers?: Maybe<CloudUsersResponse>;
  RestoreCloudBackup?: Maybe<Scalars['Boolean']['output']>;
  VerifySession?: Maybe<CloudUserResponse>;
};


export type QueryGetCloudBackupArgs = {
  backupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetCloudBackupsArgs = {
  endDate?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  startDate?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetEventArgs = {
  eventId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetEventsArgs = {
  class1?: InputMaybe<Scalars['String']['input']>;
  class2?: InputMaybe<Scalars['String']['input']>;
  class3?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['BigInt']['input']>;
  level?: InputMaybe<CloudLogLevelEnum>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetIdentityServiceConfigsArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMonitorEventsArgs = {
  class1?: InputMaybe<Scalars['String']['input']>;
  class2?: InputMaybe<Scalars['String']['input']>;
  class3?: InputMaybe<Scalars['String']['input']>;
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  level?: InputMaybe<CloudLogLevelEnum>;
  solution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMonitorNodeArgs = {
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMonitorNodeServicesArgs = {
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMonitorServiceArgs = {
  interval?: InputMaybe<Scalars['BigInt']['input']>;
  serviceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMonitorServiceLogArgs = {
  logDate?: InputMaybe<Scalars['String']['input']>;
  serviceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRolesArgs = {
  role?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTenantArgs = {
  tenantId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetTenantEventReceivesArgs = {
  class1?: InputMaybe<Scalars['String']['input']>;
  class2?: InputMaybe<Scalars['String']['input']>;
  class3?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<CloudLogLevelEnum>;
  solution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTenantsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserArgs = {
  userId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetUserEventReceivesArgs = {
  class1?: InputMaybe<Scalars['String']['input']>;
  class2?: InputMaybe<Scalars['String']['input']>;
  class3?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<CloudLogLevelEnum>;
  solution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserGroupArgs = {
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetUserGroupsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersArgs = {
  department?: InputMaybe<Scalars['String']['input']>;
  excludeGroupId?: InputMaybe<Scalars['BigInt']['input']>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  loginOnly?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  solution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRestoreCloudBackupArgs = {
  backupId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryVerifySessionArgs = {
  xAuthenticatedSession?: InputMaybe<Scalars['String']['input']>;
};

export type ResetUserPasswordInput = {
  userId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RevokeSessionInput = {
  sessionKey?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCloudBackupConfigInput = {
  cloudConfigBackup?: InputMaybe<CloudConfigBackupInput>;
};

export type UpdateCloudBackupInput = {
  backupId?: InputMaybe<Scalars['BigInt']['input']>;
  cloudBackup?: InputMaybe<CloudBackupInput>;
};

export type UpdateIdentityConfigInput = {
  cloudIdentityConfigRequest?: InputMaybe<CloudIdentityConfigRequestInput>;
};

export type UpdateIdentityServiceConfigsInput = {
  cloudServiceConfigsRequest?: InputMaybe<CloudServiceConfigsRequestInput>;
};

export type UpdateLicenseInput = {
  cloudLicenseRequest?: InputMaybe<CloudLicenseRequestInput>;
};

export type UpdateMonitorGlobalConfigInput = {
  cloudGlobalConfigRequest?: InputMaybe<CloudGlobalConfigRequestInput>;
};

export type UpdateMonitorServiceConfigsInput = {
  cloudServiceConfigsRequest?: InputMaybe<CloudServiceConfigsRequestInput>;
};

export type UpdateNotificationConfigInput = {
  cloudEventConfigRequest?: InputMaybe<CloudEventConfigRequestInput>;
};

export type UpdateTenantEventReceivesInput = {
  cloudEventNotificationRequest?: InputMaybe<CloudEventNotificationRequestInput>;
};

export type UpdateTenantInput = {
  cloudTenantRequest?: InputMaybe<CloudTenantRequestInput>;
  tenantId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateUserEventReceivesInput = {
  cloudEventNotificationRequest?: InputMaybe<CloudEventNotificationRequestInput>;
};

export type UpdateUserGroupInput = {
  cloudUserGroupRequest?: InputMaybe<CloudUserGroupRequestInput>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateUserGroupUsersInput = {
  cloudGroupUsersRequest?: InputMaybe<CloudGroupUsersRequestInput>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateUserInput = {
  cloudUserRequest?: InputMaybe<CloudUserRequestInput>;
  userId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateUserPasswordInput = {
  cloudUserPasswordRequest?: InputMaybe<CloudUserPasswordRequestInput>;
  userId?: InputMaybe<Scalars['BigInt']['input']>;
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
  ActivateTenantInput: ActivateTenantInput;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CancelCloudBackupReservationInput: CancelCloudBackupReservationInput;
  CheckLicenseInput: CheckLicenseInput;
  CloudAuthMechanismEnum: CloudAuthMechanismEnum;
  CloudAuthRequest: ResolverTypeWrapper<CloudAuthRequest>;
  CloudAuthRequestInput: CloudAuthRequestInput;
  CloudBackup: ResolverTypeWrapper<CloudBackup>;
  CloudBackupInput: CloudBackupInput;
  CloudBackupWeekEnum: CloudBackupWeekEnum;
  CloudBackupWeekOfMonthEnum: CloudBackupWeekOfMonthEnum;
  CloudConfigBackup: ResolverTypeWrapper<CloudConfigBackup>;
  CloudConfigBackupInput: CloudConfigBackupInput;
  CloudConfigBackupSchedule: ResolverTypeWrapper<CloudConfigBackupSchedule>;
  CloudConfigBackupScheduleInput: CloudConfigBackupScheduleInput;
  CloudConfigEvent: ResolverTypeWrapper<CloudConfigEvent>;
  CloudConfigEventInput: CloudConfigEventInput;
  CloudConfigEventSmsNotifier: ResolverTypeWrapper<CloudConfigEventSmsNotifier>;
  CloudConfigEventSmsNotifierInput: CloudConfigEventSmsNotifierInput;
  CloudConfigEventSmtpNotifier: ResolverTypeWrapper<CloudConfigEventSmtpNotifier>;
  CloudConfigEventSmtpNotifierInput: CloudConfigEventSmtpNotifierInput;
  CloudConfigIdentity: ResolverTypeWrapper<CloudConfigIdentity>;
  CloudConfigIdentityInput: CloudConfigIdentityInput;
  CloudDayOfMonthEnum: CloudDayOfMonthEnum;
  CloudDeactivateTenantResponse: ResolverTypeWrapper<CloudDeactivateTenantResponse>;
  CloudDeactivateTenantResponseInput: CloudDeactivateTenantResponseInput;
  CloudEncryptionEnum: CloudEncryptionEnum;
  CloudEvent: ResolverTypeWrapper<CloudEvent>;
  CloudEventClassification: ResolverTypeWrapper<CloudEventClassification>;
  CloudEventClassificationInput: CloudEventClassificationInput;
  CloudEventClassificationsResponse: ResolverTypeWrapper<CloudEventClassificationsResponse>;
  CloudEventClassificationsResponseInput: CloudEventClassificationsResponseInput;
  CloudEventConfigRequest: ResolverTypeWrapper<CloudEventConfigRequest>;
  CloudEventConfigRequestInput: CloudEventConfigRequestInput;
  CloudEventConfigResponse: ResolverTypeWrapper<CloudEventConfigResponse>;
  CloudEventConfigResponseInput: CloudEventConfigResponseInput;
  CloudEventInput: CloudEventInput;
  CloudEventNotification: ResolverTypeWrapper<CloudEventNotification>;
  CloudEventNotificationInput: CloudEventNotificationInput;
  CloudEventNotificationRequest: ResolverTypeWrapper<CloudEventNotificationRequest>;
  CloudEventNotificationRequestInput: CloudEventNotificationRequestInput;
  CloudEventNotificationResponse: ResolverTypeWrapper<CloudEventNotificationResponse>;
  CloudEventNotificationResponseInput: CloudEventNotificationResponseInput;
  CloudEventResponse: ResolverTypeWrapper<CloudEventResponse>;
  CloudEventResponseInput: CloudEventResponseInput;
  CloudEventsResponse: ResolverTypeWrapper<CloudEventsResponse>;
  CloudEventsResponseInput: CloudEventsResponseInput;
  CloudGlobalConfigRequest: ResolverTypeWrapper<CloudGlobalConfigRequest>;
  CloudGlobalConfigRequestInput: CloudGlobalConfigRequestInput;
  CloudGlobalConfigResponse: ResolverTypeWrapper<CloudGlobalConfigResponse>;
  CloudGlobalConfigResponseInput: CloudGlobalConfigResponseInput;
  CloudGroupUsersRequest: ResolverTypeWrapper<CloudGroupUsersRequest>;
  CloudGroupUsersRequestInput: CloudGroupUsersRequestInput;
  CloudGroupUsersResponse: ResolverTypeWrapper<CloudGroupUsersResponse>;
  CloudGroupUsersResponseInput: CloudGroupUsersResponseInput;
  CloudIdentityConfigRequest: ResolverTypeWrapper<CloudIdentityConfigRequest>;
  CloudIdentityConfigRequestInput: CloudIdentityConfigRequestInput;
  CloudIdentityConfigResponse: ResolverTypeWrapper<CloudIdentityConfigResponse>;
  CloudIdentityConfigResponseInput: CloudIdentityConfigResponseInput;
  CloudIntervalHourEnum: CloudIntervalHourEnum;
  CloudIntervalMinuteEnum: CloudIntervalMinuteEnum;
  CloudIntervalMonthEnum: CloudIntervalMonthEnum;
  CloudLanguageSetEnum: CloudLanguageSetEnum;
  CloudLicense: ResolverTypeWrapper<CloudLicense>;
  CloudLicenseInput: CloudLicenseInput;
  CloudLicenseRequest: ResolverTypeWrapper<CloudLicenseRequest>;
  CloudLicenseRequestInput: CloudLicenseRequestInput;
  CloudLicenseResponse: ResolverTypeWrapper<CloudLicenseResponse>;
  CloudLicenseResponseInput: CloudLicenseResponseInput;
  CloudLogLevelEnum: CloudLogLevelEnum;
  CloudMonitorCloudGlobalConfig: ResolverTypeWrapper<CloudMonitorCloudGlobalConfig>;
  CloudMonitorCloudGlobalConfigInput: CloudMonitorCloudGlobalConfigInput;
  CloudMonitorCloudNode: ResolverTypeWrapper<CloudMonitorCloudNode>;
  CloudMonitorCloudNodeInput: CloudMonitorCloudNodeInput;
  CloudMonitorCloudService: ResolverTypeWrapper<CloudMonitorCloudService>;
  CloudMonitorCloudServiceConfig: ResolverTypeWrapper<CloudMonitorCloudServiceConfig>;
  CloudMonitorCloudServiceConfigInput: CloudMonitorCloudServiceConfigInput;
  CloudMonitorCloudServiceInfo: ResolverTypeWrapper<CloudMonitorCloudServiceInfo>;
  CloudMonitorCloudServiceInfoInput: CloudMonitorCloudServiceInfoInput;
  CloudMonitorCloudServiceInput: CloudMonitorCloudServiceInput;
  CloudNewTenantRequest: ResolverTypeWrapper<CloudNewTenantRequest>;
  CloudNewTenantRequestInput: CloudNewTenantRequestInput;
  CloudNewUserGroupRequest: ResolverTypeWrapper<CloudNewUserGroupRequest>;
  CloudNewUserGroupRequestInput: CloudNewUserGroupRequestInput;
  CloudNewUserResponse: ResolverTypeWrapper<CloudNewUserResponse>;
  CloudNewUserResponseInput: CloudNewUserResponseInput;
  CloudNode: ResolverTypeWrapper<CloudNode>;
  CloudNodeInput: CloudNodeInput;
  CloudNodeResourceUsage: ResolverTypeWrapper<CloudNodeResourceUsage>;
  CloudNodeResourceUsageInput: CloudNodeResourceUsageInput;
  CloudNodeResponse: ResolverTypeWrapper<CloudNodeResponse>;
  CloudNodeResponseInput: CloudNodeResponseInput;
  CloudNodeStatus: ResolverTypeWrapper<CloudNodeStatus>;
  CloudNodeStatusInput: CloudNodeStatusInput;
  CloudNodesResponse: ResolverTypeWrapper<CloudNodesResponse>;
  CloudNodesResponseInput: CloudNodesResponseInput;
  CloudPagination: ResolverTypeWrapper<CloudPagination>;
  CloudPaginationInput: CloudPaginationInput;
  CloudPlatformEnum: CloudPlatformEnum;
  CloudProductUuidResponse: ResolverTypeWrapper<CloudProductUuidResponse>;
  CloudProductUuidResponseInput: CloudProductUuidResponseInput;
  CloudRole: ResolverTypeWrapper<CloudRole>;
  CloudRoleEnum: CloudRoleEnum;
  CloudRoleInput: CloudRoleInput;
  CloudRolesResponse: ResolverTypeWrapper<CloudRolesResponse>;
  CloudRolesResponseInput: CloudRolesResponseInput;
  CloudSchedule: ResolverTypeWrapper<CloudSchedule>;
  CloudScheduleInput: CloudScheduleInput;
  CloudScheduleTypeEnum: CloudScheduleTypeEnum;
  CloudService: ResolverTypeWrapper<CloudService>;
  CloudServiceConfig: ResolverTypeWrapper<CloudServiceConfig>;
  CloudServiceConfigInput: CloudServiceConfigInput;
  CloudServiceConfigItemEnum: CloudServiceConfigItemEnum;
  CloudServiceConfigsRequest: ResolverTypeWrapper<CloudServiceConfigsRequest>;
  CloudServiceConfigsRequestInput: CloudServiceConfigsRequestInput;
  CloudServiceConfigsResponse: ResolverTypeWrapper<CloudServiceConfigsResponse>;
  CloudServiceConfigsResponseInput: CloudServiceConfigsResponseInput;
  CloudServiceInput: CloudServiceInput;
  CloudServiceLogResponse: ResolverTypeWrapper<CloudServiceLogResponse>;
  CloudServiceLogResponseInput: CloudServiceLogResponseInput;
  CloudServiceNameEnum: CloudServiceNameEnum;
  CloudServiceReplica: ResolverTypeWrapper<CloudServiceReplica>;
  CloudServiceReplicaInput: CloudServiceReplicaInput;
  CloudServiceReplicaStatus: ResolverTypeWrapper<CloudServiceReplicaStatus>;
  CloudServiceReplicaStatusInput: CloudServiceReplicaStatusInput;
  CloudServiceResourceUsage: ResolverTypeWrapper<CloudServiceResourceUsage>;
  CloudServiceResourceUsageInput: CloudServiceResourceUsageInput;
  CloudServiceResponse: ResolverTypeWrapper<CloudServiceResponse>;
  CloudServiceResponseInput: CloudServiceResponseInput;
  CloudServiceStatus: ResolverTypeWrapper<CloudServiceStatus>;
  CloudServiceStatusInput: CloudServiceStatusInput;
  CloudServicesResponse: ResolverTypeWrapper<CloudServicesResponse>;
  CloudServicesResponseInput: CloudServicesResponseInput;
  CloudSession: ResolverTypeWrapper<CloudSession>;
  CloudSessionInput: CloudSessionInput;
  CloudStorageEnum: CloudStorageEnum;
  CloudStreamEventsResponse: ResolverTypeWrapper<CloudStreamEventsResponse>;
  CloudStreamEventsResponseInput: CloudStreamEventsResponseInput;
  CloudTenant: ResolverTypeWrapper<CloudTenant>;
  CloudTenantInput: CloudTenantInput;
  CloudTenantRequest: ResolverTypeWrapper<CloudTenantRequest>;
  CloudTenantRequestInput: CloudTenantRequestInput;
  CloudTenantResponse: ResolverTypeWrapper<CloudTenantResponse>;
  CloudTenantResponseInput: CloudTenantResponseInput;
  CloudTenantSolution: ResolverTypeWrapper<CloudTenantSolution>;
  CloudTenantSolutionInput: CloudTenantSolutionInput;
  CloudTenantsResponse: ResolverTypeWrapper<CloudTenantsResponse>;
  CloudTenantsResponseInput: CloudTenantsResponseInput;
  CloudUser: ResolverTypeWrapper<CloudUser>;
  CloudUserGroup: ResolverTypeWrapper<CloudUserGroup>;
  CloudUserGroupInput: CloudUserGroupInput;
  CloudUserGroupRequest: ResolverTypeWrapper<CloudUserGroupRequest>;
  CloudUserGroupRequestInput: CloudUserGroupRequestInput;
  CloudUserGroupResponse: ResolverTypeWrapper<CloudUserGroupResponse>;
  CloudUserGroupResponseInput: CloudUserGroupResponseInput;
  CloudUserGroupsResponse: ResolverTypeWrapper<CloudUserGroupsResponse>;
  CloudUserGroupsResponseInput: CloudUserGroupsResponseInput;
  CloudUserInput: CloudUserInput;
  CloudUserPasswordRequest: ResolverTypeWrapper<CloudUserPasswordRequest>;
  CloudUserPasswordRequestInput: CloudUserPasswordRequestInput;
  CloudUserPasswordResponse: ResolverTypeWrapper<CloudUserPasswordResponse>;
  CloudUserPasswordResponseInput: CloudUserPasswordResponseInput;
  CloudUserRequest: ResolverTypeWrapper<CloudUserRequest>;
  CloudUserRequestInput: CloudUserRequestInput;
  CloudUserResponse: ResolverTypeWrapper<CloudUserResponse>;
  CloudUserResponseInput: CloudUserResponseInput;
  CloudUsersResponse: ResolverTypeWrapper<CloudUsersResponse>;
  CloudUsersResponseInput: CloudUsersResponseInput;
  CloudWeekEnum: CloudWeekEnum;
  CloudWeekOfMonthEnum: CloudWeekOfMonthEnum;
  CreateCloudBackupReservationInput: CreateCloudBackupReservationInput;
  CreateTenantInput: CreateTenantInput;
  CreateUserGroupInput: CreateUserGroupInput;
  CreateUserInput: CreateUserInput;
  DeactivateTenantInput: DeactivateTenantInput;
  DeleteCloudBackupInput: DeleteCloudBackupInput;
  DeleteIdentityServiceConfigsInput: DeleteIdentityServiceConfigsInput;
  DeleteUserGroupInput: DeleteUserGroupInput;
  DeleteUserInput: DeleteUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  LoginUserInput: LoginUserInput;
  LogoutUserInput: LogoutUserInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ResetUserPasswordInput: ResetUserPasswordInput;
  RevokeSessionInput: RevokeSessionInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateCloudBackupConfigInput: UpdateCloudBackupConfigInput;
  UpdateCloudBackupInput: UpdateCloudBackupInput;
  UpdateIdentityConfigInput: UpdateIdentityConfigInput;
  UpdateIdentityServiceConfigsInput: UpdateIdentityServiceConfigsInput;
  UpdateLicenseInput: UpdateLicenseInput;
  UpdateMonitorGlobalConfigInput: UpdateMonitorGlobalConfigInput;
  UpdateMonitorServiceConfigsInput: UpdateMonitorServiceConfigsInput;
  UpdateNotificationConfigInput: UpdateNotificationConfigInput;
  UpdateTenantEventReceivesInput: UpdateTenantEventReceivesInput;
  UpdateTenantInput: UpdateTenantInput;
  UpdateUserEventReceivesInput: UpdateUserEventReceivesInput;
  UpdateUserGroupInput: UpdateUserGroupInput;
  UpdateUserGroupUsersInput: UpdateUserGroupUsersInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPasswordInput: UpdateUserPasswordInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ActivateTenantInput: ActivateTenantInput;
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  CancelCloudBackupReservationInput: CancelCloudBackupReservationInput;
  CheckLicenseInput: CheckLicenseInput;
  CloudAuthRequest: CloudAuthRequest;
  CloudAuthRequestInput: CloudAuthRequestInput;
  CloudBackup: CloudBackup;
  CloudBackupInput: CloudBackupInput;
  CloudConfigBackup: CloudConfigBackup;
  CloudConfigBackupInput: CloudConfigBackupInput;
  CloudConfigBackupSchedule: CloudConfigBackupSchedule;
  CloudConfigBackupScheduleInput: CloudConfigBackupScheduleInput;
  CloudConfigEvent: CloudConfigEvent;
  CloudConfigEventInput: CloudConfigEventInput;
  CloudConfigEventSmsNotifier: CloudConfigEventSmsNotifier;
  CloudConfigEventSmsNotifierInput: CloudConfigEventSmsNotifierInput;
  CloudConfigEventSmtpNotifier: CloudConfigEventSmtpNotifier;
  CloudConfigEventSmtpNotifierInput: CloudConfigEventSmtpNotifierInput;
  CloudConfigIdentity: CloudConfigIdentity;
  CloudConfigIdentityInput: CloudConfigIdentityInput;
  CloudDeactivateTenantResponse: CloudDeactivateTenantResponse;
  CloudDeactivateTenantResponseInput: CloudDeactivateTenantResponseInput;
  CloudEvent: CloudEvent;
  CloudEventClassification: CloudEventClassification;
  CloudEventClassificationInput: CloudEventClassificationInput;
  CloudEventClassificationsResponse: CloudEventClassificationsResponse;
  CloudEventClassificationsResponseInput: CloudEventClassificationsResponseInput;
  CloudEventConfigRequest: CloudEventConfigRequest;
  CloudEventConfigRequestInput: CloudEventConfigRequestInput;
  CloudEventConfigResponse: CloudEventConfigResponse;
  CloudEventConfigResponseInput: CloudEventConfigResponseInput;
  CloudEventInput: CloudEventInput;
  CloudEventNotification: CloudEventNotification;
  CloudEventNotificationInput: CloudEventNotificationInput;
  CloudEventNotificationRequest: CloudEventNotificationRequest;
  CloudEventNotificationRequestInput: CloudEventNotificationRequestInput;
  CloudEventNotificationResponse: CloudEventNotificationResponse;
  CloudEventNotificationResponseInput: CloudEventNotificationResponseInput;
  CloudEventResponse: CloudEventResponse;
  CloudEventResponseInput: CloudEventResponseInput;
  CloudEventsResponse: CloudEventsResponse;
  CloudEventsResponseInput: CloudEventsResponseInput;
  CloudGlobalConfigRequest: CloudGlobalConfigRequest;
  CloudGlobalConfigRequestInput: CloudGlobalConfigRequestInput;
  CloudGlobalConfigResponse: CloudGlobalConfigResponse;
  CloudGlobalConfigResponseInput: CloudGlobalConfigResponseInput;
  CloudGroupUsersRequest: CloudGroupUsersRequest;
  CloudGroupUsersRequestInput: CloudGroupUsersRequestInput;
  CloudGroupUsersResponse: CloudGroupUsersResponse;
  CloudGroupUsersResponseInput: CloudGroupUsersResponseInput;
  CloudIdentityConfigRequest: CloudIdentityConfigRequest;
  CloudIdentityConfigRequestInput: CloudIdentityConfigRequestInput;
  CloudIdentityConfigResponse: CloudIdentityConfigResponse;
  CloudIdentityConfigResponseInput: CloudIdentityConfigResponseInput;
  CloudLicense: CloudLicense;
  CloudLicenseInput: CloudLicenseInput;
  CloudLicenseRequest: CloudLicenseRequest;
  CloudLicenseRequestInput: CloudLicenseRequestInput;
  CloudLicenseResponse: CloudLicenseResponse;
  CloudLicenseResponseInput: CloudLicenseResponseInput;
  CloudMonitorCloudGlobalConfig: CloudMonitorCloudGlobalConfig;
  CloudMonitorCloudGlobalConfigInput: CloudMonitorCloudGlobalConfigInput;
  CloudMonitorCloudNode: CloudMonitorCloudNode;
  CloudMonitorCloudNodeInput: CloudMonitorCloudNodeInput;
  CloudMonitorCloudService: CloudMonitorCloudService;
  CloudMonitorCloudServiceConfig: CloudMonitorCloudServiceConfig;
  CloudMonitorCloudServiceConfigInput: CloudMonitorCloudServiceConfigInput;
  CloudMonitorCloudServiceInfo: CloudMonitorCloudServiceInfo;
  CloudMonitorCloudServiceInfoInput: CloudMonitorCloudServiceInfoInput;
  CloudMonitorCloudServiceInput: CloudMonitorCloudServiceInput;
  CloudNewTenantRequest: CloudNewTenantRequest;
  CloudNewTenantRequestInput: CloudNewTenantRequestInput;
  CloudNewUserGroupRequest: CloudNewUserGroupRequest;
  CloudNewUserGroupRequestInput: CloudNewUserGroupRequestInput;
  CloudNewUserResponse: CloudNewUserResponse;
  CloudNewUserResponseInput: CloudNewUserResponseInput;
  CloudNode: CloudNode;
  CloudNodeInput: CloudNodeInput;
  CloudNodeResourceUsage: CloudNodeResourceUsage;
  CloudNodeResourceUsageInput: CloudNodeResourceUsageInput;
  CloudNodeResponse: CloudNodeResponse;
  CloudNodeResponseInput: CloudNodeResponseInput;
  CloudNodeStatus: CloudNodeStatus;
  CloudNodeStatusInput: CloudNodeStatusInput;
  CloudNodesResponse: CloudNodesResponse;
  CloudNodesResponseInput: CloudNodesResponseInput;
  CloudPagination: CloudPagination;
  CloudPaginationInput: CloudPaginationInput;
  CloudProductUuidResponse: CloudProductUuidResponse;
  CloudProductUuidResponseInput: CloudProductUuidResponseInput;
  CloudRole: CloudRole;
  CloudRoleInput: CloudRoleInput;
  CloudRolesResponse: CloudRolesResponse;
  CloudRolesResponseInput: CloudRolesResponseInput;
  CloudSchedule: CloudSchedule;
  CloudScheduleInput: CloudScheduleInput;
  CloudService: CloudService;
  CloudServiceConfig: CloudServiceConfig;
  CloudServiceConfigInput: CloudServiceConfigInput;
  CloudServiceConfigsRequest: CloudServiceConfigsRequest;
  CloudServiceConfigsRequestInput: CloudServiceConfigsRequestInput;
  CloudServiceConfigsResponse: CloudServiceConfigsResponse;
  CloudServiceConfigsResponseInput: CloudServiceConfigsResponseInput;
  CloudServiceInput: CloudServiceInput;
  CloudServiceLogResponse: CloudServiceLogResponse;
  CloudServiceLogResponseInput: CloudServiceLogResponseInput;
  CloudServiceReplica: CloudServiceReplica;
  CloudServiceReplicaInput: CloudServiceReplicaInput;
  CloudServiceReplicaStatus: CloudServiceReplicaStatus;
  CloudServiceReplicaStatusInput: CloudServiceReplicaStatusInput;
  CloudServiceResourceUsage: CloudServiceResourceUsage;
  CloudServiceResourceUsageInput: CloudServiceResourceUsageInput;
  CloudServiceResponse: CloudServiceResponse;
  CloudServiceResponseInput: CloudServiceResponseInput;
  CloudServiceStatus: CloudServiceStatus;
  CloudServiceStatusInput: CloudServiceStatusInput;
  CloudServicesResponse: CloudServicesResponse;
  CloudServicesResponseInput: CloudServicesResponseInput;
  CloudSession: CloudSession;
  CloudSessionInput: CloudSessionInput;
  CloudStreamEventsResponse: CloudStreamEventsResponse;
  CloudStreamEventsResponseInput: CloudStreamEventsResponseInput;
  CloudTenant: CloudTenant;
  CloudTenantInput: CloudTenantInput;
  CloudTenantRequest: CloudTenantRequest;
  CloudTenantRequestInput: CloudTenantRequestInput;
  CloudTenantResponse: CloudTenantResponse;
  CloudTenantResponseInput: CloudTenantResponseInput;
  CloudTenantSolution: CloudTenantSolution;
  CloudTenantSolutionInput: CloudTenantSolutionInput;
  CloudTenantsResponse: CloudTenantsResponse;
  CloudTenantsResponseInput: CloudTenantsResponseInput;
  CloudUser: CloudUser;
  CloudUserGroup: CloudUserGroup;
  CloudUserGroupInput: CloudUserGroupInput;
  CloudUserGroupRequest: CloudUserGroupRequest;
  CloudUserGroupRequestInput: CloudUserGroupRequestInput;
  CloudUserGroupResponse: CloudUserGroupResponse;
  CloudUserGroupResponseInput: CloudUserGroupResponseInput;
  CloudUserGroupsResponse: CloudUserGroupsResponse;
  CloudUserGroupsResponseInput: CloudUserGroupsResponseInput;
  CloudUserInput: CloudUserInput;
  CloudUserPasswordRequest: CloudUserPasswordRequest;
  CloudUserPasswordRequestInput: CloudUserPasswordRequestInput;
  CloudUserPasswordResponse: CloudUserPasswordResponse;
  CloudUserPasswordResponseInput: CloudUserPasswordResponseInput;
  CloudUserRequest: CloudUserRequest;
  CloudUserRequestInput: CloudUserRequestInput;
  CloudUserResponse: CloudUserResponse;
  CloudUserResponseInput: CloudUserResponseInput;
  CloudUsersResponse: CloudUsersResponse;
  CloudUsersResponseInput: CloudUsersResponseInput;
  CreateCloudBackupReservationInput: CreateCloudBackupReservationInput;
  CreateTenantInput: CreateTenantInput;
  CreateUserGroupInput: CreateUserGroupInput;
  CreateUserInput: CreateUserInput;
  DeactivateTenantInput: DeactivateTenantInput;
  DeleteCloudBackupInput: DeleteCloudBackupInput;
  DeleteIdentityServiceConfigsInput: DeleteIdentityServiceConfigsInput;
  DeleteUserGroupInput: DeleteUserGroupInput;
  DeleteUserInput: DeleteUserInput;
  Float: Scalars['Float']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  LoginUserInput: LoginUserInput;
  LogoutUserInput: LogoutUserInput;
  Mutation: {};
  Query: {};
  ResetUserPasswordInput: ResetUserPasswordInput;
  RevokeSessionInput: RevokeSessionInput;
  String: Scalars['String']['output'];
  UpdateCloudBackupConfigInput: UpdateCloudBackupConfigInput;
  UpdateCloudBackupInput: UpdateCloudBackupInput;
  UpdateIdentityConfigInput: UpdateIdentityConfigInput;
  UpdateIdentityServiceConfigsInput: UpdateIdentityServiceConfigsInput;
  UpdateLicenseInput: UpdateLicenseInput;
  UpdateMonitorGlobalConfigInput: UpdateMonitorGlobalConfigInput;
  UpdateMonitorServiceConfigsInput: UpdateMonitorServiceConfigsInput;
  UpdateNotificationConfigInput: UpdateNotificationConfigInput;
  UpdateTenantEventReceivesInput: UpdateTenantEventReceivesInput;
  UpdateTenantInput: UpdateTenantInput;
  UpdateUserEventReceivesInput: UpdateUserEventReceivesInput;
  UpdateUserGroupInput: UpdateUserGroupInput;
  UpdateUserGroupUsersInput: UpdateUserGroupUsersInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPasswordInput: UpdateUserPasswordInput;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CloudAuthMechanismEnumResolvers = { CRAM_MD5: 'CRAM-MD5', DIGEST_MD5: 'DIGEST-MD5', GSSAPI: 'GSSAPI', LOGIN: 'LOGIN', MD5: 'MD5', OAUTH10A: 'OAUTH10A', OAUTHBEARER: 'OAUTHBEARER', PLAIN: 'PLAIN' };

export type CloudAuthRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudAuthRequest'] = ResolversParentTypes['CloudAuthRequest']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  force?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudBackupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudBackup'] = ResolversParentTypes['CloudBackup']> = ResolversObject<{
  backup_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudBackupWeekEnumResolvers = { FRIDAY: 'friday', MONDAY: 'monday', SATURDAY: 'saturday', SUNDAY: 'sunday', THURSDAY: 'thursday', TUESDAY: 'tuesday', WEDNESDAY: 'wednesday' };

export type CloudBackupWeekOfMonthEnumResolvers = { FIFTH_WEEK: 'fifth-week', FIRST_WEEK: 'first-week', FOURTH_WEEK: 'fourth-week', LAST_WEEK: 'last-week', SECOND_WEEK: 'second-week', THIRD_WEEK: 'third-week' };

export type CloudConfigBackupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudConfigBackup'] = ResolversParentTypes['CloudConfigBackup']> = ResolversObject<{
  backup_schedule?: Resolver<Maybe<ResolversTypes['CloudConfigBackupSchedule']>, ParentType, ContextType>;
  backup_schedule_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  backup_store_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudConfigBackupScheduleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudConfigBackupSchedule'] = ResolversParentTypes['CloudConfigBackupSchedule']> = ResolversObject<{
  day_of_month?: Resolver<Maybe<ResolversTypes['CloudBackupWeekOfMonthEnum']>, ParentType, ContextType>;
  day_of_week?: Resolver<Maybe<ResolversTypes['CloudBackupWeekEnum']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  interval_day?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  interval_month?: Resolver<Maybe<ResolversTypes['CloudIntervalMonthEnum']>, ParentType, ContextType>;
  interval_week?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_day?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_month?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_year?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CloudScheduleTypeEnum']>, ParentType, ContextType>;
  tz?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  week_of_month?: Resolver<Maybe<ResolversTypes['CloudBackupWeekOfMonthEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudConfigEventResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudConfigEvent'] = ResolversParentTypes['CloudConfigEvent']> = ResolversObject<{
  event_custom_notification_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event_desktop_notification_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event_email_notification_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event_notification_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event_popup_notification_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event_sms_notification_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  event_sms_notifier?: Resolver<Maybe<ResolversTypes['CloudConfigEventSmsNotifier']>, ParentType, ContextType>;
  event_smtp_notifier?: Resolver<Maybe<ResolversTypes['CloudConfigEventSmtpNotifier']>, ParentType, ContextType>;
  event_store_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudConfigEventSmsNotifierResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudConfigEventSmsNotifier'] = ResolversParentTypes['CloudConfigEventSmsNotifier']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudConfigEventSmtpNotifierResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudConfigEventSmtpNotifier'] = ResolversParentTypes['CloudConfigEventSmtpNotifier']> = ResolversObject<{
  auth_mechanism?: Resolver<Maybe<ResolversTypes['CloudAuthMechanismEnum']>, ParentType, ContextType>;
  auth_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  auth_username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  encryption?: Resolver<Maybe<ResolversTypes['CloudEncryptionEnum']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  server_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  server_port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudConfigIdentityResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudConfigIdentity'] = ResolversParentTypes['CloudConfigIdentity']> = ResolversObject<{
  global_language_set?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  global_timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_login_restriction_enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user_login_restriction_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  user_login_restriction_try_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  user_password_change_cycle?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  user_reuse_old_password?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user_session_timeout?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudDayOfMonthEnumResolvers = { EIGHT: '8', EIGHTEEN: '18', ELEVEN: '11', FIFTEEN: '15', FIVE: '5', FOUR: '4', FOURTEEN: '14', LAST_DAY: 'L', NINE: '9', NINETEEN: '19', ONE: '1', SEVEN: '7', SEVENTEEN: '17', SIX: '6', SIXTEEN: '16', TEN: '10', THIRTEEN: '13', THIRTY: '30', THIRTY_ONE: '31', THREE: '3', TWELVE: '12', TWENTY: '20', TWENTY_EIGHT: '28', TWENTY_FIVE: '25', TWENTY_FOUR: '24', TWENTY_NINE: '29', TWENTY_ONE: '21', TWENTY_SEVEN: '27', TWENTY_SIX: '26', TWENTY_THREE: '23', TWENTY_TWO: '22', TWO: '2' };

export type CloudDeactivateTenantResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudDeactivateTenantResponse'] = ResolversParentTypes['CloudDeactivateTenantResponse']> = ResolversObject<{
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEncryptionEnumResolvers = { NONE: 'none', SSL_TLS: 'ssl/tls', STARTTLS: 'starttls' };

export type CloudEventResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEvent'] = ResolversParentTypes['CloudEvent']> = ResolversObject<{
  class_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  class_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  class_3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  error_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['CloudLogLevelEnum']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventClassificationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventClassification'] = ResolversParentTypes['CloudEventClassification']> = ResolversObject<{
  class_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  class_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  class_3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventClassificationsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventClassificationsResponse'] = ResolversParentTypes['CloudEventClassificationsResponse']> = ResolversObject<{
  event_classifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudEventClassification']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventConfigRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventConfigRequest'] = ResolversParentTypes['CloudEventConfigRequest']> = ResolversObject<{
  event_config?: Resolver<Maybe<ResolversTypes['CloudConfigEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventConfigResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventConfigResponse'] = ResolversParentTypes['CloudEventConfigResponse']> = ResolversObject<{
  event_config?: Resolver<Maybe<ResolversTypes['CloudConfigEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventNotificationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventNotification'] = ResolversParentTypes['CloudEventNotification']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventNotificationRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventNotificationRequest'] = ResolversParentTypes['CloudEventNotificationRequest']> = ResolversObject<{
  event_notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudEventNotification']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventNotificationResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventNotificationResponse'] = ResolversParentTypes['CloudEventNotificationResponse']> = ResolversObject<{
  event_notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudEventNotification']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventResponse'] = ResolversParentTypes['CloudEventResponse']> = ResolversObject<{
  event?: Resolver<Maybe<ResolversTypes['CloudEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudEventsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudEventsResponse'] = ResolversParentTypes['CloudEventsResponse']> = ResolversObject<{
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudEvent']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['CloudPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudGlobalConfigRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudGlobalConfigRequest'] = ResolversParentTypes['CloudGlobalConfigRequest']> = ResolversObject<{
  global_config?: Resolver<Maybe<ResolversTypes['CloudMonitorCloudGlobalConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudGlobalConfigResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudGlobalConfigResponse'] = ResolversParentTypes['CloudGlobalConfigResponse']> = ResolversObject<{
  global_config?: Resolver<Maybe<ResolversTypes['CloudMonitorCloudGlobalConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudGroupUsersRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudGroupUsersRequest'] = ResolversParentTypes['CloudGroupUsersRequest']> = ResolversObject<{
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudGroupUsersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudGroupUsersResponse'] = ResolversParentTypes['CloudGroupUsersResponse']> = ResolversObject<{
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudIdentityConfigRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudIdentityConfigRequest'] = ResolversParentTypes['CloudIdentityConfigRequest']> = ResolversObject<{
  identity_config?: Resolver<Maybe<ResolversTypes['CloudConfigIdentity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudIdentityConfigResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudIdentityConfigResponse'] = ResolversParentTypes['CloudIdentityConfigResponse']> = ResolversObject<{
  identity_config?: Resolver<Maybe<ResolversTypes['CloudConfigIdentity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudIntervalHourEnumResolvers = { FOUR: '4', ONE: '1', SIX: '6', THREE: '3', TWELVE: '12', TWO: '2' };

export type CloudIntervalMinuteEnumResolvers = { FIFTEEN: '15', FIVE: '5', FOUR: '4', ONE: '1', SIX: '6', TEN: '10', THIRTY: '30', THREE: '3', TWELVE: '12', TWENTY: '20', TWO: '2' };

export type CloudIntervalMonthEnumResolvers = { FOUR: '4', ONE: '1', SIX: '6', THREE: '3', TWELVE: '12', TWO: '2' };

export type CloudLanguageSetEnumResolvers = { ENG: 'eng', KOR: 'kor' };

export type CloudLicenseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudLicense'] = ResolversParentTypes['CloudLicense']> = ResolversObject<{
  cdm_cloud_customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cdm_cloud_license_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cdm_cloud_provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cdm_dr_expiry_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_issue_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_limits_cluster?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_limits_instance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_limits_platform?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudPlatformEnum']>>>, ParentType, ContextType>;
  cdm_dr_limits_storage?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudStorageEnum']>>>, ParentType, ContextType>;
  cdm_dr_limits_tenant?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_limits_volume?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_openshift_expiry_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_openshift_issue_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_dr_openshift_limits_core?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_r_expiry_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_r_issue_dt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_r_limits_agent?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cdm_r_limits_group?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudLicenseRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudLicenseRequest'] = ResolversParentTypes['CloudLicenseRequest']> = ResolversObject<{
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudLicenseResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudLicenseResponse'] = ResolversParentTypes['CloudLicenseResponse']> = ResolversObject<{
  payloads?: Resolver<Maybe<ResolversTypes['CloudLicense']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudLogLevelEnumResolvers = { DEBUG: 'debug', ERROR: 'error', FATAL: 'fatal', INFO: 'info', TRACE: 'trace', WARNING: 'warning' };

export type CloudMonitorCloudGlobalConfigResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudMonitorCloudGlobalConfig'] = ResolversParentTypes['CloudMonitorCloudGlobalConfig']> = ResolversObject<{
  global_log_level?: Resolver<Maybe<ResolversTypes['CloudLogLevelEnum']>, ParentType, ContextType>;
  global_log_store_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  system_monitor_interval?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudMonitorCloudNodeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudMonitorCloudNode'] = ResolversParentTypes['CloudMonitorCloudNode']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CloudNodeStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudMonitorCloudServiceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudMonitorCloudService'] = ResolversParentTypes['CloudMonitorCloudService']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CloudServiceStatus']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudMonitorCloudServiceConfigResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudMonitorCloudServiceConfig'] = ResolversParentTypes['CloudMonitorCloudServiceConfig']> = ResolversObject<{
  log_level?: Resolver<Maybe<ResolversTypes['CloudLogLevelEnum']>, ParentType, ContextType>;
  log_store_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudMonitorCloudServiceInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudMonitorCloudServiceInfo'] = ResolversParentTypes['CloudMonitorCloudServiceInfo']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  replicas?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudServiceReplica']>>>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CloudServiceStatus']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNewTenantRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNewTenantRequest'] = ResolversParentTypes['CloudNewTenantRequest']> = ResolversObject<{
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNewUserGroupRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNewUserGroupRequest'] = ResolversParentTypes['CloudNewUserGroupRequest']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNewUserResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNewUserResponse'] = ResolversParentTypes['CloudNewUserResponse']> = ResolversObject<{
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNodeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNode'] = ResolversParentTypes['CloudNode']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNodeResourceUsageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNodeResourceUsage'] = ResolversParentTypes['CloudNodeResourceUsage']> = ResolversObject<{
  cpu_core_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  cpu_used_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  filesystem_size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  filesystem_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mem_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network_receive_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network_transmit_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNodeResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNodeResponse'] = ResolversParentTypes['CloudNodeResponse']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['CloudMonitorCloudNode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNodeStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNodeStatus'] = ResolversParentTypes['CloudNodeStatus']> = ResolversObject<{
  resource_usage?: Resolver<Maybe<ResolversTypes['CloudNodeResourceUsage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudNodesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudNodesResponse'] = ResolversParentTypes['CloudNodesResponse']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudMonitorCloudNode']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudPaginationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudPagination'] = ResolversParentTypes['CloudPagination']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_items?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudPlatformEnumResolvers = { KUBERNETES: 'kubernetes', OPENSHIFT: 'openshift', OPENSTACK: 'openstack', VMWARE: 'vmware' };

export type CloudProductUuidResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudProductUuidResponse'] = ResolversParentTypes['CloudProductUuidResponse']> = ResolversObject<{
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudRoleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudRole'] = ResolversParentTypes['CloudRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CloudRoleEnum']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudRoleEnumResolvers = { ADMIN: 'admin', MANAGER: 'manager', OPERATOR: 'operator', USER: 'user' };

export type CloudRolesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudRolesResponse'] = ResolversParentTypes['CloudRolesResponse']> = ResolversObject<{
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudRole']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

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

export type CloudServiceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudService'] = ResolversParentTypes['CloudService']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceConfigResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceConfig'] = ResolversParentTypes['CloudServiceConfig']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['CloudServiceConfigItemEnum']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['CloudServiceNameEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceConfigItemEnumResolvers = { SERVICE_LOG_LEVEL: 'service_log_level', SERVICE_LOG_STORE_PERIOD: 'service_log_store_period', SERVICE_LOG_TYPE: 'service_log_type' };

export type CloudServiceConfigsRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceConfigsRequest'] = ResolversParentTypes['CloudServiceConfigsRequest']> = ResolversObject<{
  service_configs?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudServiceConfig']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceConfigsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceConfigsResponse'] = ResolversParentTypes['CloudServiceConfigsResponse']> = ResolversObject<{
  service_configs?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudServiceConfig']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceLogResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceLogResponse'] = ResolversParentTypes['CloudServiceLogResponse']> = ResolversObject<{
  log?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceNameEnumResolvers = { CDM_CLOUD_API_GATEWAY: 'cdm-cloud-api-gateway', CDM_CLOUD_IDENTITY: 'cdm-cloud-identity', CDM_CLOUD_LICENSE: 'cdm-cloud-license', CDM_CLOUD_NOTIFICATION: 'cdm-cloud-notification', CDM_CLOUD_SCHEDULER: 'cdm-cloud-scheduler', CDM_CLUSTER_MANAGER: 'cdm-cluster-manager', CDM_DR_MANAGER: 'cdm-dr-manager', CDM_DR_MIGRATOR: 'cdm-dr-migrator', CDM_DR_MIRRORD: 'cdm-dr-mirrord', CDM_OPENSTACK_REQUEST: 'cdm-openstack-request', CDM_TARGET_SNAPSHOT: 'cdm-target-snapshot', SERVICE_NODE: 'service_node' };

export type CloudServiceReplicaResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceReplica'] = ResolversParentTypes['CloudServiceReplica']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CloudNode']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['CloudServiceReplicaStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceReplicaStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceReplicaStatus'] = ResolversParentTypes['CloudServiceReplicaStatus']> = ResolversObject<{
  resource_usage?: Resolver<Maybe<ResolversTypes['CloudServiceResourceUsage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceResourceUsageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceResourceUsage'] = ResolversParentTypes['CloudServiceResourceUsage']> = ResolversObject<{
  mem_used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network_receive_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  network_transmit_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceResponse'] = ResolversParentTypes['CloudServiceResponse']> = ResolversObject<{
  service?: Resolver<Maybe<ResolversTypes['CloudMonitorCloudServiceInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServiceStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServiceStatus'] = ResolversParentTypes['CloudServiceStatus']> = ResolversObject<{
  resource_usage?: Resolver<Maybe<ResolversTypes['CloudServiceResourceUsage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudServicesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudServicesResponse'] = ResolversParentTypes['CloudServicesResponse']> = ResolversObject<{
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudMonitorCloudService']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudSessionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudSession'] = ResolversParentTypes['CloudSession']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudStorageEnumResolvers = { CEPH: 'ceph', LVM: 'lvm', NETAPP: 'netapp', NFS: 'nfs' };

export type CloudStreamEventsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudStreamEventsResponse'] = ResolversParentTypes['CloudStreamEventsResponse']> = ResolversObject<{
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudEvent']>>>, ParentType, ContextType>;
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

export type CloudTenantRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudTenantRequest'] = ResolversParentTypes['CloudTenantRequest']> = ResolversObject<{
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudTenantResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudTenantResponse'] = ResolversParentTypes['CloudTenantResponse']> = ResolversObject<{
  tenant?: Resolver<Maybe<ResolversTypes['CloudTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudTenantSolutionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudTenantSolution'] = ResolversParentTypes['CloudTenantSolution']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudTenantsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudTenantsResponse'] = ResolversParentTypes['CloudTenantsResponse']> = ResolversObject<{
  tenants?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudTenant']>>>, ParentType, ContextType>;
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

export type CloudUserGroupRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserGroupRequest'] = ResolversParentTypes['CloudUserGroupRequest']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserGroupResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserGroupResponse'] = ResolversParentTypes['CloudUserGroupResponse']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserGroupsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserGroupsResponse'] = ResolversParentTypes['CloudUserGroupsResponse']> = ResolversObject<{
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudUserGroup']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserPasswordRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserPasswordRequest'] = ResolversParentTypes['CloudUserPasswordRequest']> = ResolversObject<{
  current_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserPasswordResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserPasswordResponse'] = ResolversParentTypes['CloudUserPasswordResponse']> = ResolversObject<{
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserRequest'] = ResolversParentTypes['CloudUserRequest']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUserResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUserResponse'] = ResolversParentTypes['CloudUserResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudUsersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudUsersResponse'] = ResolversParentTypes['CloudUsersResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['CloudPagination']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['CloudUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudWeekEnumResolvers = { FRI: 'fri', MON: 'mon', SAT: 'sat', SUN: 'sun', THU: 'thu', TUE: 'tue', WED: 'wed' };

export type CloudWeekOfMonthEnumResolvers = { FIVE: '#5', FOUR: '#4', LAST_WEEK: 'L', ONE: '#1', THREE: '#3', TWO: '#2' };

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ActivateTenant?: Resolver<Maybe<ResolversTypes['CloudTenantResponse']>, ParentType, ContextType, Partial<MutationActivateTenantArgs>>;
  CancelCloudBackupReservation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationCancelCloudBackupReservationArgs>>;
  CheckLicense?: Resolver<Maybe<ResolversTypes['CloudLicenseResponse']>, ParentType, ContextType, Partial<MutationCheckLicenseArgs>>;
  CreateCloudBackup?: Resolver<Maybe<ResolversTypes['CloudBackup']>, ParentType, ContextType>;
  CreateCloudBackupReservation?: Resolver<Maybe<ResolversTypes['CloudSchedule']>, ParentType, ContextType, Partial<MutationCreateCloudBackupReservationArgs>>;
  CreateTenant?: Resolver<Maybe<ResolversTypes['CloudTenantResponse']>, ParentType, ContextType, Partial<MutationCreateTenantArgs>>;
  CreateUser?: Resolver<Maybe<ResolversTypes['CloudNewUserResponse']>, ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  CreateUserGroup?: Resolver<Maybe<ResolversTypes['CloudUserGroupResponse']>, ParentType, ContextType, Partial<MutationCreateUserGroupArgs>>;
  DeactivateTenant?: Resolver<Maybe<ResolversTypes['CloudDeactivateTenantResponse']>, ParentType, ContextType, Partial<MutationDeactivateTenantArgs>>;
  DeleteCloudBackup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteCloudBackupArgs>>;
  DeleteIdentityServiceConfigs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteIdentityServiceConfigsArgs>>;
  DeleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteUserArgs>>;
  DeleteUserGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteUserGroupArgs>>;
  LoginUser?: Resolver<Maybe<ResolversTypes['CloudUserResponse']>, ParentType, ContextType, Partial<MutationLoginUserArgs>>;
  LogoutUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationLogoutUserArgs>>;
  ResetUserEventReceives?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ResetUserPassword?: Resolver<Maybe<ResolversTypes['CloudUserPasswordResponse']>, ParentType, ContextType, Partial<MutationResetUserPasswordArgs>>;
  RevokeSession?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationRevokeSessionArgs>>;
  UpdateCloudBackup?: Resolver<Maybe<ResolversTypes['CloudBackup']>, ParentType, ContextType, Partial<MutationUpdateCloudBackupArgs>>;
  UpdateCloudBackupConfig?: Resolver<Maybe<ResolversTypes['CloudConfigBackup']>, ParentType, ContextType, Partial<MutationUpdateCloudBackupConfigArgs>>;
  UpdateIdentityConfig?: Resolver<Maybe<ResolversTypes['CloudIdentityConfigResponse']>, ParentType, ContextType, Partial<MutationUpdateIdentityConfigArgs>>;
  UpdateIdentityServiceConfigs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationUpdateIdentityServiceConfigsArgs>>;
  UpdateLicense?: Resolver<Maybe<ResolversTypes['CloudLicenseResponse']>, ParentType, ContextType, Partial<MutationUpdateLicenseArgs>>;
  UpdateMonitorGlobalConfig?: Resolver<Maybe<ResolversTypes['CloudGlobalConfigResponse']>, ParentType, ContextType, Partial<MutationUpdateMonitorGlobalConfigArgs>>;
  UpdateMonitorServiceConfigs?: Resolver<Maybe<ResolversTypes['CloudServiceConfigsResponse']>, ParentType, ContextType, Partial<MutationUpdateMonitorServiceConfigsArgs>>;
  UpdateNotificationConfig?: Resolver<Maybe<ResolversTypes['CloudEventConfigResponse']>, ParentType, ContextType, Partial<MutationUpdateNotificationConfigArgs>>;
  UpdateTenant?: Resolver<Maybe<ResolversTypes['CloudTenantResponse']>, ParentType, ContextType, Partial<MutationUpdateTenantArgs>>;
  UpdateTenantEventReceives?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationUpdateTenantEventReceivesArgs>>;
  UpdateUser?: Resolver<Maybe<ResolversTypes['CloudUserResponse']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
  UpdateUserEventReceives?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationUpdateUserEventReceivesArgs>>;
  UpdateUserGroup?: Resolver<Maybe<ResolversTypes['CloudUserGroupResponse']>, ParentType, ContextType, Partial<MutationUpdateUserGroupArgs>>;
  UpdateUserGroupUsers?: Resolver<Maybe<ResolversTypes['CloudGroupUsersResponse']>, ParentType, ContextType, Partial<MutationUpdateUserGroupUsersArgs>>;
  UpdateUserPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationUpdateUserPasswordArgs>>;
}>;

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetCloudBackup?: Resolver<Maybe<ResolversTypes['CloudBackup']>, ParentType, ContextType, Partial<QueryGetCloudBackupArgs>>;
  GetCloudBackupConfig?: Resolver<Maybe<ResolversTypes['CloudConfigBackup']>, ParentType, ContextType>;
  GetCloudBackupReservations?: Resolver<Maybe<ResolversTypes['CloudSchedule']>, ParentType, ContextType>;
  GetCloudBackups?: Resolver<Maybe<ResolversTypes['CloudBackup']>, ParentType, ContextType, Partial<QueryGetCloudBackupsArgs>>;
  GetEvent?: Resolver<Maybe<ResolversTypes['CloudEventResponse']>, ParentType, ContextType, Partial<QueryGetEventArgs>>;
  GetEventClasses?: Resolver<Maybe<ResolversTypes['CloudEventClassificationsResponse']>, ParentType, ContextType>;
  GetEvents?: Resolver<Maybe<ResolversTypes['CloudEventsResponse']>, ParentType, ContextType, Partial<QueryGetEventsArgs>>;
  GetIdentityConfig?: Resolver<Maybe<ResolversTypes['CloudIdentityConfigResponse']>, ParentType, ContextType>;
  GetIdentityServiceConfigs?: Resolver<Maybe<ResolversTypes['CloudServiceConfigsResponse']>, ParentType, ContextType, Partial<QueryGetIdentityServiceConfigsArgs>>;
  GetLicense?: Resolver<Maybe<ResolversTypes['CloudLicenseResponse']>, ParentType, ContextType>;
  GetMonitorEvents?: Resolver<Maybe<ResolversTypes['CloudStreamEventsResponse']>, ParentType, ContextType, Partial<QueryGetMonitorEventsArgs>>;
  GetMonitorGlobalConfig?: Resolver<Maybe<ResolversTypes['CloudGlobalConfigResponse']>, ParentType, ContextType>;
  GetMonitorNode?: Resolver<Maybe<ResolversTypes['CloudNodeResponse']>, ParentType, ContextType, Partial<QueryGetMonitorNodeArgs>>;
  GetMonitorNodeServices?: Resolver<Maybe<ResolversTypes['CloudServicesResponse']>, ParentType, ContextType, Partial<QueryGetMonitorNodeServicesArgs>>;
  GetMonitorNodes?: Resolver<Maybe<ResolversTypes['CloudNodesResponse']>, ParentType, ContextType>;
  GetMonitorService?: Resolver<Maybe<ResolversTypes['CloudServiceResponse']>, ParentType, ContextType, Partial<QueryGetMonitorServiceArgs>>;
  GetMonitorServiceConfigs?: Resolver<Maybe<ResolversTypes['CloudServiceConfigsResponse']>, ParentType, ContextType>;
  GetMonitorServiceLog?: Resolver<Maybe<ResolversTypes['CloudServiceLogResponse']>, ParentType, ContextType, Partial<QueryGetMonitorServiceLogArgs>>;
  GetMonitorServices?: Resolver<Maybe<ResolversTypes['CloudServicesResponse']>, ParentType, ContextType>;
  GetNotificationConfig?: Resolver<Maybe<ResolversTypes['CloudEventConfigResponse']>, ParentType, ContextType>;
  GetProductUuid?: Resolver<Maybe<ResolversTypes['CloudProductUuidResponse']>, ParentType, ContextType>;
  GetRoles?: Resolver<Maybe<ResolversTypes['CloudRolesResponse']>, ParentType, ContextType, Partial<QueryGetRolesArgs>>;
  GetTenant?: Resolver<Maybe<ResolversTypes['CloudTenantResponse']>, ParentType, ContextType, Partial<QueryGetTenantArgs>>;
  GetTenantEventReceives?: Resolver<Maybe<ResolversTypes['CloudEventNotificationResponse']>, ParentType, ContextType, Partial<QueryGetTenantEventReceivesArgs>>;
  GetTenants?: Resolver<Maybe<ResolversTypes['CloudTenantsResponse']>, ParentType, ContextType, Partial<QueryGetTenantsArgs>>;
  GetUser?: Resolver<Maybe<ResolversTypes['CloudUserResponse']>, ParentType, ContextType, Partial<QueryGetUserArgs>>;
  GetUserEventReceives?: Resolver<Maybe<ResolversTypes['CloudEventNotificationResponse']>, ParentType, ContextType, Partial<QueryGetUserEventReceivesArgs>>;
  GetUserGroup?: Resolver<Maybe<ResolversTypes['CloudUserGroupResponse']>, ParentType, ContextType, Partial<QueryGetUserGroupArgs>>;
  GetUserGroups?: Resolver<Maybe<ResolversTypes['CloudUserGroupsResponse']>, ParentType, ContextType, Partial<QueryGetUserGroupsArgs>>;
  GetUsers?: Resolver<Maybe<ResolversTypes['CloudUsersResponse']>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
  RestoreCloudBackup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<QueryRestoreCloudBackupArgs>>;
  VerifySession?: Resolver<Maybe<ResolversTypes['CloudUserResponse']>, ParentType, ContextType, Partial<QueryVerifySessionArgs>>;
}>;

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  CloudAuthMechanismEnum?: CloudAuthMechanismEnumResolvers;
  CloudAuthRequest?: CloudAuthRequestResolvers<ContextType>;
  CloudBackup?: CloudBackupResolvers<ContextType>;
  CloudBackupWeekEnum?: CloudBackupWeekEnumResolvers;
  CloudBackupWeekOfMonthEnum?: CloudBackupWeekOfMonthEnumResolvers;
  CloudConfigBackup?: CloudConfigBackupResolvers<ContextType>;
  CloudConfigBackupSchedule?: CloudConfigBackupScheduleResolvers<ContextType>;
  CloudConfigEvent?: CloudConfigEventResolvers<ContextType>;
  CloudConfigEventSmsNotifier?: CloudConfigEventSmsNotifierResolvers<ContextType>;
  CloudConfigEventSmtpNotifier?: CloudConfigEventSmtpNotifierResolvers<ContextType>;
  CloudConfigIdentity?: CloudConfigIdentityResolvers<ContextType>;
  CloudDayOfMonthEnum?: CloudDayOfMonthEnumResolvers;
  CloudDeactivateTenantResponse?: CloudDeactivateTenantResponseResolvers<ContextType>;
  CloudEncryptionEnum?: CloudEncryptionEnumResolvers;
  CloudEvent?: CloudEventResolvers<ContextType>;
  CloudEventClassification?: CloudEventClassificationResolvers<ContextType>;
  CloudEventClassificationsResponse?: CloudEventClassificationsResponseResolvers<ContextType>;
  CloudEventConfigRequest?: CloudEventConfigRequestResolvers<ContextType>;
  CloudEventConfigResponse?: CloudEventConfigResponseResolvers<ContextType>;
  CloudEventNotification?: CloudEventNotificationResolvers<ContextType>;
  CloudEventNotificationRequest?: CloudEventNotificationRequestResolvers<ContextType>;
  CloudEventNotificationResponse?: CloudEventNotificationResponseResolvers<ContextType>;
  CloudEventResponse?: CloudEventResponseResolvers<ContextType>;
  CloudEventsResponse?: CloudEventsResponseResolvers<ContextType>;
  CloudGlobalConfigRequest?: CloudGlobalConfigRequestResolvers<ContextType>;
  CloudGlobalConfigResponse?: CloudGlobalConfigResponseResolvers<ContextType>;
  CloudGroupUsersRequest?: CloudGroupUsersRequestResolvers<ContextType>;
  CloudGroupUsersResponse?: CloudGroupUsersResponseResolvers<ContextType>;
  CloudIdentityConfigRequest?: CloudIdentityConfigRequestResolvers<ContextType>;
  CloudIdentityConfigResponse?: CloudIdentityConfigResponseResolvers<ContextType>;
  CloudIntervalHourEnum?: CloudIntervalHourEnumResolvers;
  CloudIntervalMinuteEnum?: CloudIntervalMinuteEnumResolvers;
  CloudIntervalMonthEnum?: CloudIntervalMonthEnumResolvers;
  CloudLanguageSetEnum?: CloudLanguageSetEnumResolvers;
  CloudLicense?: CloudLicenseResolvers<ContextType>;
  CloudLicenseRequest?: CloudLicenseRequestResolvers<ContextType>;
  CloudLicenseResponse?: CloudLicenseResponseResolvers<ContextType>;
  CloudLogLevelEnum?: CloudLogLevelEnumResolvers;
  CloudMonitorCloudGlobalConfig?: CloudMonitorCloudGlobalConfigResolvers<ContextType>;
  CloudMonitorCloudNode?: CloudMonitorCloudNodeResolvers<ContextType>;
  CloudMonitorCloudService?: CloudMonitorCloudServiceResolvers<ContextType>;
  CloudMonitorCloudServiceConfig?: CloudMonitorCloudServiceConfigResolvers<ContextType>;
  CloudMonitorCloudServiceInfo?: CloudMonitorCloudServiceInfoResolvers<ContextType>;
  CloudNewTenantRequest?: CloudNewTenantRequestResolvers<ContextType>;
  CloudNewUserGroupRequest?: CloudNewUserGroupRequestResolvers<ContextType>;
  CloudNewUserResponse?: CloudNewUserResponseResolvers<ContextType>;
  CloudNode?: CloudNodeResolvers<ContextType>;
  CloudNodeResourceUsage?: CloudNodeResourceUsageResolvers<ContextType>;
  CloudNodeResponse?: CloudNodeResponseResolvers<ContextType>;
  CloudNodeStatus?: CloudNodeStatusResolvers<ContextType>;
  CloudNodesResponse?: CloudNodesResponseResolvers<ContextType>;
  CloudPagination?: CloudPaginationResolvers<ContextType>;
  CloudPlatformEnum?: CloudPlatformEnumResolvers;
  CloudProductUuidResponse?: CloudProductUuidResponseResolvers<ContextType>;
  CloudRole?: CloudRoleResolvers<ContextType>;
  CloudRoleEnum?: CloudRoleEnumResolvers;
  CloudRolesResponse?: CloudRolesResponseResolvers<ContextType>;
  CloudSchedule?: CloudScheduleResolvers<ContextType>;
  CloudScheduleTypeEnum?: CloudScheduleTypeEnumResolvers;
  CloudService?: CloudServiceResolvers<ContextType>;
  CloudServiceConfig?: CloudServiceConfigResolvers<ContextType>;
  CloudServiceConfigItemEnum?: CloudServiceConfigItemEnumResolvers;
  CloudServiceConfigsRequest?: CloudServiceConfigsRequestResolvers<ContextType>;
  CloudServiceConfigsResponse?: CloudServiceConfigsResponseResolvers<ContextType>;
  CloudServiceLogResponse?: CloudServiceLogResponseResolvers<ContextType>;
  CloudServiceNameEnum?: CloudServiceNameEnumResolvers;
  CloudServiceReplica?: CloudServiceReplicaResolvers<ContextType>;
  CloudServiceReplicaStatus?: CloudServiceReplicaStatusResolvers<ContextType>;
  CloudServiceResourceUsage?: CloudServiceResourceUsageResolvers<ContextType>;
  CloudServiceResponse?: CloudServiceResponseResolvers<ContextType>;
  CloudServiceStatus?: CloudServiceStatusResolvers<ContextType>;
  CloudServicesResponse?: CloudServicesResponseResolvers<ContextType>;
  CloudSession?: CloudSessionResolvers<ContextType>;
  CloudStorageEnum?: CloudStorageEnumResolvers;
  CloudStreamEventsResponse?: CloudStreamEventsResponseResolvers<ContextType>;
  CloudTenant?: CloudTenantResolvers<ContextType>;
  CloudTenantRequest?: CloudTenantRequestResolvers<ContextType>;
  CloudTenantResponse?: CloudTenantResponseResolvers<ContextType>;
  CloudTenantSolution?: CloudTenantSolutionResolvers<ContextType>;
  CloudTenantsResponse?: CloudTenantsResponseResolvers<ContextType>;
  CloudUser?: CloudUserResolvers<ContextType>;
  CloudUserGroup?: CloudUserGroupResolvers<ContextType>;
  CloudUserGroupRequest?: CloudUserGroupRequestResolvers<ContextType>;
  CloudUserGroupResponse?: CloudUserGroupResponseResolvers<ContextType>;
  CloudUserGroupsResponse?: CloudUserGroupsResponseResolvers<ContextType>;
  CloudUserPasswordRequest?: CloudUserPasswordRequestResolvers<ContextType>;
  CloudUserPasswordResponse?: CloudUserPasswordResponseResolvers<ContextType>;
  CloudUserRequest?: CloudUserRequestResolvers<ContextType>;
  CloudUserResponse?: CloudUserResponseResolvers<ContextType>;
  CloudUsersResponse?: CloudUsersResponseResolvers<ContextType>;
  CloudWeekEnum?: CloudWeekEnumResolvers;
  CloudWeekOfMonthEnum?: CloudWeekOfMonthEnumResolvers;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

