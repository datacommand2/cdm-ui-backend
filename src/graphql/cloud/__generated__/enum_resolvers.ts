import {
  CloudAuthMechanismEnumResolvers,
  CloudBackupWeekEnumResolvers,
  CloudBackupWeekOfMonthEnumResolvers,
  CloudDayOfMonthEnumResolvers,
  CloudEncryptionEnumResolvers,
  CloudIntervalHourEnumResolvers,
  CloudIntervalMinuteEnumResolvers,
  CloudIntervalMonthEnumResolvers,
  CloudLanguageSetEnumResolvers,
  CloudLogLevelEnumResolvers,
  CloudPlatformEnumResolvers,
  CloudRoleEnumResolvers,
  CloudScheduleTypeEnumResolvers,
  CloudServiceConfigItemEnumResolvers,
  CloudServiceNameEnumResolvers,
  CloudStorageEnumResolvers,
  CloudWeekEnumResolvers,
  CloudWeekOfMonthEnumResolvers,
} from './resolvers-types';

export const CloudAuthMechanismEnum = <CloudAuthMechanismEnumResolvers>{
  PLAIN: 'PLAIN',
  LOGIN: 'LOGIN',
  GSSAPI: 'GSSAPI',
  DIGEST_MD5: 'DIGEST-MD5',
  MD5: 'MD5',
  CRAM_MD5: 'CRAM-MD5',
  OAUTH10A: 'OAUTH10A',
  OAUTHBEARER: 'OAUTHBEARER',
};

export const CloudBackupWeekEnum = <CloudBackupWeekEnumResolvers>{
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
  SATURDAY: 'saturday',
  SUNDAY: 'sunday',
};

export const CloudBackupWeekOfMonthEnum = <CloudBackupWeekOfMonthEnumResolvers>{
  FIRST_WEEK: 'first-week',
  SECOND_WEEK: 'second-week',
  THIRD_WEEK: 'third-week',
  FOURTH_WEEK: 'fourth-week',
  FIFTH_WEEK: 'fifth-week',
  LAST_WEEK: 'last-week',
};

export const CloudDayOfMonthEnum = <CloudDayOfMonthEnumResolvers>{
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  ELEVEN: '11',
  TWELVE: '12',
  THIRTEEN: '13',
  FOURTEEN: '14',
  FIFTEEN: '15',
  SIXTEEN: '16',
  SEVENTEEN: '17',
  EIGHTEEN: '18',
  NINETEEN: '19',
  TWENTY: '20',
  TWENTY_ONE: '21',
  TWENTY_TWO: '22',
  TWENTY_THREE: '23',
  TWENTY_FOUR: '24',
  TWENTY_FIVE: '25',
  TWENTY_SIX: '26',
  TWENTY_SEVEN: '27',
  TWENTY_EIGHT: '28',
  TWENTY_NINE: '29',
  THIRTY: '30',
  THIRTY_ONE: '31',
  LAST_DAY: 'L',
};

export const CloudEncryptionEnum = <CloudEncryptionEnumResolvers>{
  NONE: 'none',
  SSL_TLS: 'ssl/tls',
  STARTTLS: 'starttls',
};

export const CloudIntervalHourEnum = <CloudIntervalHourEnumResolvers>{
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  SIX: '6',
  TWELVE: '12',
};

export const CloudIntervalMinuteEnum = <CloudIntervalMinuteEnumResolvers>{
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  TEN: '10',
  TWELVE: '12',
  FIFTEEN: '15',
  TWENTY: '20',
  THIRTY: '30',
};

export const CloudIntervalMonthEnum = <CloudIntervalMonthEnumResolvers>{
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  SIX: '6',
  TWELVE: '12',
};

export const CloudLanguageSetEnum = <CloudLanguageSetEnumResolvers>{
  ENG: 'eng',
  KOR: 'kor',
};

export const CloudLogLevelEnum = <CloudLogLevelEnumResolvers>{
  TRACE: 'trace',
  DEBUG: 'debug',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  FATAL: 'fatal',
};

export const CloudPlatformEnum = <CloudPlatformEnumResolvers>{
  OPENSTACK: 'openstack',
  OPENSHIFT: 'openshift',
  KUBERNETES: 'kubernetes',
  VMWARE: 'vmware',
};

export const CloudRoleEnum = <CloudRoleEnumResolvers>{
  ADMIN: 'admin',
  MANAGER: 'manager',
  OPERATOR: 'operator',
  USER: 'user',
};

export const CloudScheduleTypeEnum = <CloudScheduleTypeEnumResolvers>{
  SCHEDULE_TYPE_SPECIFIED: 'schedule.type.specified',
  SCHEDULE_TYPE_MINUTELY: 'schedule.type.minutely',
  SCHEDULE_TYPE_HOURLY: 'schedule.type.hourly',
  SCHEDULE_TYPE_DAILY: 'schedule.type.daily',
  SCHEDULE_TYPE_WEEKLY: 'schedule.type.weekly',
  SCHEDULE_TYPE_MONTHLY: 'schedule.type.monthly',
  SCHEDULE_TYPE_YEARLY: 'schedule.type.yearly',
  SCHEDULE_TYPE_DAY_OF_MONTHLY: 'schedule.type.day-of-monthly',
  SCHEDULE_TYPE_WEEK_OF_MONTHLY: 'schedule.type.week-of-monthly',
};

export const CloudServiceConfigItemEnum = <CloudServiceConfigItemEnumResolvers>{
  SERVICE_LOG_TYPE: 'service_log_type',
  SERVICE_LOG_LEVEL: 'service_log_level',
  SERVICE_LOG_STORE_PERIOD: 'service_log_store_period',
};

export const CloudServiceNameEnum = <CloudServiceNameEnumResolvers>{
  SERVICE_NODE: 'service_node',
  CDM_CLOUD_API_GATEWAY: 'cdm-cloud-api-gateway',
  CDM_CLOUD_IDENTITY: 'cdm-cloud-identity',
  CDM_CLOUD_LICENSE: 'cdm-cloud-license',
  CDM_CLOUD_NOTIFICATION: 'cdm-cloud-notification',
  CDM_CLOUD_SCHEDULER: 'cdm-cloud-scheduler',
  CDM_CLUSTER_MANAGER: 'cdm-cluster-manager',
  CDM_DR_MANAGER: 'cdm-dr-manager',
  CDM_TARGET_SNAPSHOT: 'cdm-target-snapshot',
  CDM_DR_MIGRATOR: 'cdm-dr-migrator',
  CDM_DR_MIRRORD: 'cdm-dr-mirrord',
  CDM_OPENSTACK_REQUEST: 'cdm-openstack-request',
};

export const CloudStorageEnum = <CloudStorageEnumResolvers>{
  LVM: 'lvm',
  NFS: 'nfs',
  CEPH: 'ceph',
  NETAPP: 'netapp',
};

export const CloudWeekEnum = <CloudWeekEnumResolvers>{
  MON: 'mon',
  TUE: 'tue',
  WED: 'wed',
  THU: 'thu',
  FRI: 'fri',
  SAT: 'sat',
  SUN: 'sun',
};

export const CloudWeekOfMonthEnum = <CloudWeekOfMonthEnumResolvers>{
  ONE: '#1',
  TWO: '#2',
  THREE: '#3',
  FOUR: '#4',
  FIVE: '#5',
  LAST_WEEK: 'L',
};

