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
  CramMd5 = 'CRAM_MD5',
  DigestMd5 = 'DIGEST_MD5',
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
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export enum CloudBackupWeekOfMonthEnum {
  FifthWeek = 'FIFTH_WEEK',
  FirstWeek = 'FIRST_WEEK',
  FourthWeek = 'FOURTH_WEEK',
  LastWeek = 'LAST_WEEK',
  SecondWeek = 'SECOND_WEEK',
  ThirdWeek = 'THIRD_WEEK'
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
  day_of_month?: Maybe<CloudBackupWeekOfMonthEnum>;
  day_of_week?: Maybe<CloudBackupWeekEnum>;
  hour?: Maybe<Scalars['BigInt']['output']>;
  interval_day?: Maybe<Scalars['BigInt']['output']>;
  interval_month?: Maybe<CloudIntervalMonthEnum>;
  interval_week?: Maybe<Scalars['BigInt']['output']>;
  minute?: Maybe<Scalars['BigInt']['output']>;
  start_day?: Maybe<Scalars['BigInt']['output']>;
  start_month?: Maybe<Scalars['BigInt']['output']>;
  start_year?: Maybe<Scalars['BigInt']['output']>;
  type?: Maybe<CloudScheduleTypeEnum>;
  tz?: Maybe<Scalars['String']['output']>;
  week_of_month?: Maybe<CloudBackupWeekOfMonthEnum>;
};

export type CloudConfigBackupScheduleInput = {
  day_of_month?: InputMaybe<CloudBackupWeekOfMonthEnum>;
  day_of_week?: InputMaybe<CloudBackupWeekEnum>;
  hour?: InputMaybe<Scalars['BigInt']['input']>;
  interval_day?: InputMaybe<Scalars['BigInt']['input']>;
  interval_month?: InputMaybe<CloudIntervalMonthEnum>;
  interval_week?: InputMaybe<Scalars['BigInt']['input']>;
  minute?: InputMaybe<Scalars['BigInt']['input']>;
  start_day?: InputMaybe<Scalars['BigInt']['input']>;
  start_month?: InputMaybe<Scalars['BigInt']['input']>;
  start_year?: InputMaybe<Scalars['BigInt']['input']>;
  type?: InputMaybe<CloudScheduleTypeEnum>;
  tz?: InputMaybe<Scalars['String']['input']>;
  week_of_month?: InputMaybe<CloudBackupWeekOfMonthEnum>;
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
  auth_mechanism?: Maybe<CloudAuthMechanismEnum>;
  auth_password?: Maybe<Scalars['String']['output']>;
  auth_username?: Maybe<Scalars['String']['output']>;
  encryption?: Maybe<CloudEncryptionEnum>;
  sender?: Maybe<Scalars['String']['output']>;
  server_address?: Maybe<Scalars['String']['output']>;
  server_port?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudConfigEventSmtpNotifierInput = {
  auth_mechanism?: InputMaybe<CloudAuthMechanismEnum>;
  auth_password?: InputMaybe<Scalars['String']['input']>;
  auth_username?: InputMaybe<Scalars['String']['input']>;
  encryption?: InputMaybe<CloudEncryptionEnum>;
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

export type CloudDeactivateTenantResponse = {
  __typename?: 'CloudDeactivateTenantResponse';
  tenant?: Maybe<CloudTenant>;
};

export type CloudDeactivateTenantResponseInput = {
  tenant?: InputMaybe<CloudTenantInput>;
};

export enum CloudEncryptionEnum {
  None = 'NONE',
  SslTls = 'SSL_TLS',
  Starttls = 'STARTTLS'
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
  level?: Maybe<CloudLogLevelEnum>;
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
  level?: InputMaybe<CloudLogLevelEnum>;
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

export type CloudLicense = {
  __typename?: 'CloudLicense';
  cdm_cloud_customer?: Maybe<Scalars['String']['output']>;
  cdm_cloud_license_key?: Maybe<Scalars['String']['output']>;
  cdm_cloud_provider?: Maybe<Scalars['String']['output']>;
  cdm_dr_expiry_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_issue_dt?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_cluster?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_instance?: Maybe<Scalars['BigInt']['output']>;
  cdm_dr_limits_platform?: Maybe<Array<Maybe<CloudPlatformEnum>>>;
  cdm_dr_limits_storage?: Maybe<Array<Maybe<CloudStorageEnum>>>;
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
  cdm_dr_limits_platform?: InputMaybe<Array<InputMaybe<CloudPlatformEnum>>>;
  cdm_dr_limits_storage?: InputMaybe<Array<InputMaybe<CloudStorageEnum>>>;
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
  Debug = 'DEBUG',
  Error = 'ERROR',
  Fatal = 'FATAL',
  Info = 'INFO',
  Trace = 'TRACE',
  Warning = 'WARNING'
}

export type CloudMonitorCloudGlobalConfig = {
  __typename?: 'CloudMonitorCloudGlobalConfig';
  global_log_level?: Maybe<CloudLogLevelEnum>;
  global_log_store_period?: Maybe<Scalars['BigInt']['output']>;
  system_monitor_interval?: Maybe<Scalars['BigInt']['output']>;
};

export type CloudMonitorCloudGlobalConfigInput = {
  global_log_level?: InputMaybe<CloudLogLevelEnum>;
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
  log_level?: Maybe<CloudLogLevelEnum>;
  log_store_period?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CloudMonitorCloudServiceConfigInput = {
  log_level?: InputMaybe<CloudLogLevelEnum>;
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
  Kubernetes = 'KUBERNETES',
  Openshift = 'OPENSHIFT',
  Openstack = 'OPENSTACK',
  Vmware = 'VMWARE'
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

export type CloudService = {
  __typename?: 'CloudService';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  solution?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CloudServiceConfig = {
  __typename?: 'CloudServiceConfig';
  key?: Maybe<CloudServiceConfigItemEnum>;
  name?: Maybe<CloudServiceNameEnum>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CloudServiceConfigInput = {
  key?: InputMaybe<CloudServiceConfigItemEnum>;
  name?: InputMaybe<CloudServiceNameEnum>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum CloudServiceConfigItemEnum {
  ServiceLogLevel = 'SERVICE_LOG_LEVEL',
  ServiceLogStorePeriod = 'SERVICE_LOG_STORE_PERIOD',
  ServiceLogType = 'SERVICE_LOG_TYPE'
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
  CdmCloudApiGateway = 'CDM_CLOUD_API_GATEWAY',
  CdmCloudIdentity = 'CDM_CLOUD_IDENTITY',
  CdmCloudLicense = 'CDM_CLOUD_LICENSE',
  CdmCloudNotification = 'CDM_CLOUD_NOTIFICATION',
  CdmCloudScheduler = 'CDM_CLOUD_SCHEDULER',
  CdmClusterManager = 'CDM_CLUSTER_MANAGER',
  CdmDrManager = 'CDM_DR_MANAGER',
  CdmDrMigrator = 'CDM_DR_MIGRATOR',
  CdmDrMirrord = 'CDM_DR_MIRRORD',
  CdmOpenstackRequest = 'CDM_OPENSTACK_REQUEST',
  CdmTargetSnapshot = 'CDM_TARGET_SNAPSHOT',
  ServiceNode = 'SERVICE_NODE'
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
  Ceph = 'CEPH',
  Lvm = 'LVM',
  Netapp = 'NETAPP',
  Nfs = 'NFS'
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
