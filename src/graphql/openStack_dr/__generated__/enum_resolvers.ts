import {
  CloudDayOfMonthEnumResolvers,
  CloudIntervalHourEnumResolvers,
  CloudIntervalMinuteEnumResolvers,
  CloudIntervalMonthEnumResolvers,
  CloudLanguageSetEnumResolvers,
  CloudRoleEnumResolvers,
  CloudScheduleTypeEnumResolvers,
  CloudWeekEnumResolvers,
  CloudWeekOfMonthEnumResolvers,
  OpenStackCmClusterFloatingIpStatusEnumResolvers,
  OpenStackCmClusterHypervisorStateEnumResolvers,
  OpenStackCmClusterHypervisorStatusEnumResolvers,
  OpenStackCmClusterHypervisorTypeCodeEnumResolvers,
  OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers,
  OpenStackCmClusterInstanceStateEnumResolvers,
  OpenStackCmClusterInstanceStatusEnumResolvers,
  OpenStackCmClusterKeyPairTypeCodeEnumResolvers,
  OpenStackCmClusterNetworkStateEnumResolvers,
  OpenStackCmClusterNetworkStatusEnumResolvers,
  OpenStackCmClusterNetworkTypeCodeEnumResolvers,
  OpenStackCmClusterPermissionModeCodeEnumResolvers,
  OpenStackCmClusterRouterStateEnumResolvers,
  OpenStackCmClusterRouterStatusEnumResolvers,
  OpenStackCmClusterSecurityGroupRuleDirectionEnumResolvers,
  OpenStackCmClusterSecurityGroupRuleEtherTypeEnumResolvers,
  OpenStackCmClusterStateCodeEnumResolvers,
  OpenStackCmClusterStorageStatusEnumResolvers,
  OpenStackCmClusterStorageTypeCodeEnumResolvers,
  OpenStackCmClusterSubnetIpv6AddressModeCodeEnumResolvers,
  OpenStackCmClusterSubnetIpv6RaModeCodeEnumResolvers,
  OpenStackCmClusterTypeCodeEnumResolvers,
  OpenStackCmClusterVolumeSnapshotStatusEnumResolvers,
  OpenStackCmClusterVolumeStatusEnumResolvers,
  OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrClusterRelationshipStateCodeEnumResolvers,
  OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnumResolvers,
  OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnumResolvers,
  OpenStackDrInstanceRecoveryResultResultCodeEnumResolvers,
  OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnumResolvers,
  OpenStackDrMigrationJobStatusEnumResolvers,
  OpenStackDrMigrationJobTypeEnumResolvers,
  OpenStackDrMigrationReplicationStatusEnumResolvers,
  OpenStackDrProtectionClusterTypeCodeEnumResolvers,
  OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobInstanceStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobInstanceStatusStateCodeEnumResolvers,
  OpenStackDrRecoveryJobKeyPairStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobNetworkStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobOperationCodeEnumResolvers,
  OpenStackDrRecoveryJobRecoveryPointTypeCodeEnumResolvers,
  OpenStackDrRecoveryJobRouterStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnumResolvers,
  OpenStackDrRecoveryJobStateCodeEnumResolvers,
  OpenStackDrRecoveryJobStatusCodeEnumResolvers,
  OpenStackDrRecoveryJobStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobStatusTypeCodeEnumResolvers,
  OpenStackDrRecoveryJobSubnetStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobTenantStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobVolumeStatusResultCodeEnumResolvers,
  OpenStackDrRecoveryJobVolumeStatusStateCodeEnumResolvers,
  OpenStackDrRecoveryPlanDirectionCodeEnumResolvers,
  OpenStackDrRecoveryPlanMirrorStateCodeEnumResolvers,
  OpenStackDrRecoveryPlanStateCodeEnumResolvers,
  OpenStackDrRecoveryPointObjectiveTypeEnumResolvers,
  OpenStackDrRecoveryResultResultCodeEnumResolvers,
  OpenStackDrRecoveryTypeEnumResolvers,
  OpenStackDrReportResultEnumResolvers,
  OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrScheduleSnapshotIntervalTypeEnumResolvers,
  OpenStackDrScheduleStateCodeEnumResolvers,
  OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnumResolvers,
  OpenStackDrVolumeRecoveryResultResultCodeEnumResolvers,
} from './resolvers-types';

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

export const OpenStackCmClusterFloatingIpStatusEnum = <OpenStackCmClusterFloatingIpStatusEnumResolvers>{
  ACTIVE: 'ACTIVE',
  DOWN: 'DOWN',
  ERROR: 'ERROR',
};

export const OpenStackCmClusterHypervisorStateEnum = <OpenStackCmClusterHypervisorStateEnumResolvers>{
  UP: 'up',
  DOWN: 'down',
  UNKNOWN: 'unknown',
};

export const OpenStackCmClusterHypervisorStatusEnum = <OpenStackCmClusterHypervisorStatusEnumResolvers>{
  ENABLED: 'enabled',
  DISABLED: 'disabled',
  UNKNOWN: 'unknown',
};

export const OpenStackCmClusterHypervisorTypeCodeEnum = <OpenStackCmClusterHypervisorTypeCodeEnumResolvers>{
  KVM: 'KVM',
  LXC: 'LXC',
  QEMU: 'QEMU',
  UML: 'UML',
  VMWARE: 'VMWARE',
  XEN: 'XEN',
  XENSERVER: 'XENSERVER',
  HYPER_V: 'HYPER_V',
  VIRTUOZZO: 'VIRTUOZZO',
};

export const OpenStackCmClusterInstanceExtraSpecKeyEnum = <OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers>{
  QUOTA_CPU_SHARES: 'quota:cpu_shares',
  QUOTA_CPU_SHARES_LEVEL: 'quota:cpu_shares_level',
  QUOTA_CPU_PERIOD: 'quota:cpu_period',
  QUOTA_CPU_LIMIT: 'quota:cpu_limit',
  QUOTA_CPU_RESERVATION: 'quota:cpu_reservation',
  QUOTA_CPU_QUOTA: 'quota:cpu_quota',
  QUOTA_MEMORY_LIMIT: 'quota:memory_limit',
  QUOTA_MEMORY_RESERVATION: 'quota:memory_reservation',
  QUOTA_MEMORY_SHARES_LEVEL: 'quota:memory_shares_level',
  QUOTA_MEMORY_SHARES_SHARE: 'quota:memory_shares_share',
  QUOTA_DISK_IO_LIMIT: 'quota:disk_io_limit',
  QUOTA_DISK_IO_RESERVATION: 'quota:disk_io_reservation',
  QUOTA_DISK_IO_SHARES_LEVEL: 'quota:disk_io_shares_level',
  QUOTA_DISK_IO_SHARES_SHARE: 'quota:disk_io_shares_share',
  QUOTA_DISK_READ_BYTES_SEC: 'quota:disk_read_bytes_sec',
  QUOTA_DISK_READ_IOPS_SEC: 'quota:disk_read_iops_sec',
  QUOTA_DISK_WRITE_BYTES_SEC: 'quota:disk_write_bytes_sec',
  QUOTA_DISK_WRITE_IOPS_SEC: 'quota:disk_write_iops_sec',
  QUOTA_DISK_TOTAL_BYTES_SEC: 'quota:disk_total_bytes_sec',
  QUOTA_DISK_TOTAL_IOPS_SEC: 'quota:disk_total_iops_sec',
  QUOTA_VIF_INBOUND_AVERAGE: 'quota:vif_inbound_average',
  QUOTA_VIF_INBOUND_BURST: 'quota:vif_inbound_burst',
  QUOTA_VIF_INBOUND_PEAK: 'quota:vif_inbound_peak',
  QUOTA_VIF_OUTBOUND_AVERAGE: 'quota:vif_outbound_average',
  QUOTA_VIF_OUTBOUND_BURST: 'quota:vif_outbound_burst',
  QUOTA_VIF_OUTBOUND_PEAK: 'quota:vif_outbound_peak',
  HW_WATCHDOG_ACTION: 'hw:watchdog_action',
  HW_RNG_RATE_ALLOWED: 'hw_rng:rate-allowed',
  HW_RNG_RATE_BYTES: 'hw_rng:rate_bytes',
  HW_RNG_RATE_PERIOD: 'hw_rng:rate_period',
  HW_CPU_SOCKETS: 'hw:cpu_sockets',
  HW_CPU_CORES: 'hw:cpu_cores',
  HW_CPU_THREADS: 'hw:cpu_threads',
  HW_CPU_MAX_SOCKETS: 'hw:cpu_max_sockets',
  HW_CPU_MAX_CORES: 'hw:cpu_max_cores',
  HW_CPU_MAX_THREADS: 'hw:cpu_max_threads',
  HW_CPU_POLICY: 'hw:cpu_policy',
  HW_CPU_THREAD_POLICY: 'hw:cpu_thread_policy',
  HW_NUMA_NODES: 'hw:numa_nodes',
  HW_NUMA_CPUS__N: 'hw:numa_cpus.N',
  HW_NUMA_MEM__N: 'hw:numa_mem.N',
  HW_MEM_PAGE_SIZE: 'hw:mem_page_size',
  PCI_PASSTHROUGH_ALIAS: 'pci_passthrough:alias',
  OS_SECURE_BOOT: 'os:secure_boot',
};

export const OpenStackCmClusterInstanceStateEnum = <OpenStackCmClusterInstanceStateEnumResolvers>{
  NOSTATE: 'NOSTATE',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  SHUTDOWN: 'SHUTDOWN',
  CRASHED: 'CRASHED',
  SUSPENDED: 'SUSPENDED',
};

export const OpenStackCmClusterInstanceStatusEnum = <OpenStackCmClusterInstanceStatusEnumResolvers>{
  ACTIVE: 'ACTIVE',
  BUILD: 'BUILD',
  DELETED: 'DELETED',
  ERROR: 'ERROR',
  HARD_REBOOT: 'HARD_REBOOT',
  MIGRATING: 'MIGRATING',
  PASSWORD: 'PASSWORD',
  PAUSED: 'PAUSED',
  REBOOT: 'REBOOT',
  REBUILD: 'REBUILD',
  RESCUE: 'RESCUE',
  RESIZE: 'RESIZE',
  REVERT_RESIZE: 'REVERT_RESIZE',
  SHELVED: 'SHELVED',
  SHELVED_OFFLOADED: 'SHELVED_OFFLOADED',
  SHUTOFF: 'SHUTOFF',
  SOFT_DELETED: 'SOFT_DELETED',
  SUSPENDED: 'SUSPENDED',
  UNKNOWN: 'UNKNOWN',
  VERIFY_RESIZE: 'VERIFY_RESIZE',
};

export const OpenStackCmClusterKeyPairTypeCodeEnum = <OpenStackCmClusterKeyPairTypeCodeEnumResolvers>{
  SSH: 'ssh',
  X509: 'x509',
};

export const OpenStackCmClusterNetworkStateEnum = <OpenStackCmClusterNetworkStateEnumResolvers>{
  UP: 'up',
  DOWN: 'down',
};

export const OpenStackCmClusterNetworkStatusEnum = <OpenStackCmClusterNetworkStatusEnumResolvers>{
  ACTIVE: 'ACTIVE',
  DOWN: 'DOWN',
  BUILD: 'BUILD',
  ERROR: 'ERROR',
};

export const OpenStackCmClusterNetworkTypeCodeEnum = <OpenStackCmClusterNetworkTypeCodeEnumResolvers>{
  VLAN: 'vlan',
  VXLAN: 'vxlan',
  GRE: 'gre',
  FLAT: 'flat',
  LOCAL: 'local',
  GENEVE: 'geneve',
};

export const OpenStackCmClusterPermissionModeCodeEnum = <OpenStackCmClusterPermissionModeCodeEnumResolvers>{
  CLUSTER_PERMISSION_MODE_READONLY: 'cluster.permission.mode.readonly',
  CLUSTER_PERMISSION_MODE_READWRITE: 'cluster.permission.mode.readwrite',
};

export const OpenStackCmClusterRouterStateEnum = <OpenStackCmClusterRouterStateEnumResolvers>{
  UP: 'up',
  DOWN: 'down',
};

export const OpenStackCmClusterRouterStatusEnum = <OpenStackCmClusterRouterStatusEnumResolvers>{
  ACTIVE: 'ACTIVE',
  DOWN: 'DOWN',
  BUILD: 'BUILD',
  ERROR: 'ERROR',
};

export const OpenStackCmClusterSecurityGroupRuleDirectionEnum = <OpenStackCmClusterSecurityGroupRuleDirectionEnumResolvers>{
  INGRESS: 'ingress',
  EGRESS: 'egress',
};

export const OpenStackCmClusterSecurityGroupRuleEtherTypeEnum = <OpenStackCmClusterSecurityGroupRuleEtherTypeEnumResolvers>{
  FOUR: '4',
  SIX: '6',
};

export const OpenStackCmClusterStateCodeEnum = <OpenStackCmClusterStateCodeEnumResolvers>{
  CLUSTER_STATE_ACTIVE: 'cluster.state.active',
  CLUSTER_STATE_INACTIVE: 'cluster.state.inactive',
  CLUSTER_STATE_WARNING: 'cluster.state.warning',
  CLUSTER_STATE_LOADING: 'cluster.state.loading',
};

export const OpenStackCmClusterStorageStatusEnum = <OpenStackCmClusterStorageStatusEnumResolvers>{
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable',
  UNKNOWN: 'unknown',
};

export const OpenStackCmClusterStorageTypeCodeEnum = <OpenStackCmClusterStorageTypeCodeEnumResolvers>{
  OPENSTACK_STORAGE_TYPE_LVM: 'openstack.storage.type.lvm',
  OPENSTACK_STORAGE_TYPE_NFS: 'openstack.storage.type.nfs',
  OPENSTACK_STORAGE_TYPE_CEPH: 'openstack.storage.type.ceph',
  OPENSTACK_STORAGE_TYPE_UNKNOWN: 'openstack.storage.type.unknown',
};

export const OpenStackCmClusterSubnetIpv6AddressModeCodeEnum = <OpenStackCmClusterSubnetIpv6AddressModeCodeEnumResolvers>{
  SLAAC: 'slaac',
  DHCPV6_STATEFUL: 'dhcpv6-stateful',
  DHCPV6_STATELESS: 'dhcpv6-stateless',
};

export const OpenStackCmClusterSubnetIpv6RaModeCodeEnum = <OpenStackCmClusterSubnetIpv6RaModeCodeEnumResolvers>{
  SLAAC: 'slaac',
  DHCPV6_STATEFUL: 'dhcpv6-stateful',
  DHCPV6_STATELESS: 'dhcpv6-stateless',
};

export const OpenStackCmClusterTypeCodeEnum = <OpenStackCmClusterTypeCodeEnumResolvers>{
  CLUSTER_TYPE_OPENSTACK: 'cluster.type.openstack',
  CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift',
  CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes',
  CLUSTER_TYPE_VMWARE: 'cluster.type.vmware',
};

export const OpenStackCmClusterVolumeSnapshotStatusEnum = <OpenStackCmClusterVolumeSnapshotStatusEnumResolvers>{
  AVAILABLE: 'available',
  ERROR: 'error',
  CREATING: 'creating',
  DELETING: 'deleting',
  ERROR_DELETING: 'error_deleting',
};

export const OpenStackCmClusterVolumeStatusEnum = <OpenStackCmClusterVolumeStatusEnumResolvers>{
  AVAILABLE: 'available',
  ERROR: 'error',
  CREATING: 'creating',
  DELETING: 'deleting',
  IN_USE: 'in-use',
  ATTACHING: 'attaching',
  DETACHING: 'detaching',
  ERROR_DELETING: 'error_deleting',
  MAINTENANCE: 'maintenance',
};

export const OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrAvailabilityZoneRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_AVAILABILITY_ZONE_RECOVERY_TYPE_MAPPING: 'dr.recovery.plan.availability-zone.recovery.type.mapping',
};

export const OpenStackDrClusterRelationshipStateCodeEnum = <OpenStackDrClusterRelationshipStateCodeEnumResolvers>{
  DR_CLUSTER_RELATIONSHIP_STATE_NORMAL: 'dr.cluster.relationship.state.normal',
  DR_CLUSTER_RELATIONSHIP_STATE_WARNING: 'dr.cluster.relationship.state.warning',
  DR_CLUSTER_RELATIONSHIP_STATE_CRITICAL: 'dr.cluster.relationship.state.critical',
  DR_CLUSTER_RELATIONSHIP_STATE_EMERGENCY: 'dr.cluster.relationship.state.emergency',
};

export const OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrExternalNetworkRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_NETWORK_RECOVERY_TYPE_MAPPING: 'dr.recovery.plan.network.recovery.type.mapping',
};

export const OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnum = <OpenStackDrInstanceRecoveryPlanDiagnosisMethodCodeEnumResolvers>{
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT: 'dr.recovery.plan.instance.diagnosis.method.shell-script',
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN: 'dr.recovery.plan.instance.diagnosis.method.port-scan',
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET: 'dr.recovery.plan.instance.diagnosis.method.http-get',
};

export const OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrInstanceRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_INSTANCE_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.instance.recovery.type.mirroring',
};

export const OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnum = <OpenStackDrInstanceRecoveryResultDiagnosisMethodCodeEnumResolvers>{
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT: 'dr.recovery.plan.instance.diagnosis.method.shell-script',
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN: 'dr.recovery.plan.instance.diagnosis.method.port-scan',
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET: 'dr.recovery.plan.instance.diagnosis.method.http-get',
};

export const OpenStackDrInstanceRecoveryResultResultCodeEnum = <OpenStackDrInstanceRecoveryResultResultCodeEnumResolvers>{
  DR_RECOVERY_INSTANCE_RESULT_SUCCESS: 'dr.recovery.instance.result.success',
  DR_RECOVERY_INSTANCE_RESULT_FAILED: 'dr.recovery.instance.result.failed',
  DR_RECOVERY_INSTANCE_RESULT_CANCELED: 'dr.recovery.instance.result.canceled',
};

export const OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnum = <OpenStackDrInstanceTemplateInstanceDiagnosisMethodCodeEnumResolvers>{
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_SHELL_SCRIPT: 'dr.recovery.plan.instance.diagnosis.method.shell-script',
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_PORT_SCAN: 'dr.recovery.plan.instance.diagnosis.method.port-scan',
  DR_RECOVERY_PLAN_INSTANCE_DIAGNOSIS_METHOD_HTTP_GET: 'dr.recovery.plan.instance.diagnosis.method.http-get',
};

export const OpenStackDrMigrationJobStatusEnum = <OpenStackDrMigrationJobStatusEnumResolvers>{
  START: 'start',
  PREPARATION_RUN: 'preparation.run',
  PREPARATION_STATUS_CHECK: 'preparation.status.check',
  REPLICATION_STATUS_CHECK: 'replication.status.check',
  REPLICATION_LOCK: 'replication.lock',
  REPLICATION_LOCK_STATUS_CHECK: 'replication.lock.status.check',
  REPLICATION_UNLOCK: 'replication.unlock',
  REPLICATION_UNLOCK_STATUS_CHECK: 'replication.unlock.status.check',
  REPLICATION_DELETE: 'replication.delete',
  VOLUME_SNAPSHOT_CREATE: 'volume.snapshot.create',
  VOLUME_CREATE: 'volume.create',
  VOLUME_ATTACH: 'volume.attach',
  VOLUME_DETACH: 'volume.detach',
  CUSTOMIZATION_CREATE: 'customization.create',
  CUSTOMIZATION_STATUS_CHECK: 'customization.status.check',
  CUSTOMIZATION_DELETE: 'customization.delete',
  VM_CREATE: 'vm.create',
  FAILED: 'failed',
  DONE: 'done',
  NOT_FOUND: 'not.found',
  UNKNOWN: 'unknown',
};

export const OpenStackDrMigrationJobTypeEnum = <OpenStackDrMigrationJobTypeEnumResolvers>{
  SIMULATION: 'simulation',
  CUTOVER: 'cutover',
};

export const OpenStackDrMigrationReplicationStatusEnum = <OpenStackDrMigrationReplicationStatusEnumResolvers>{
  UPDATING: 'updating',
  RUNNING: 'running',
  DONE: 'done',
  SWITCHING: 'switching',
  MIRRORING: 'mirroring',
  UNKNOWN: 'unknown',
  NOT_FOUND: 'notFound',
};

export const OpenStackDrProtectionClusterTypeCodeEnum = <OpenStackDrProtectionClusterTypeCodeEnumResolvers>{
  CLUSTER_TYPE_OPENSTACK: 'cluster.type.openstack',
  CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift',
  CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes',
  CLUSTER_TYPE_VMWARE: 'cluster.type.vmware',
};

export const OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnum = <OpenStackDrRecoveryJobFloatingIpStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnum = <OpenStackDrRecoveryJobInstanceSpecStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobInstanceStatusResultCodeEnum = <OpenStackDrRecoveryJobInstanceStatusResultCodeEnumResolvers>{
  DR_RECOVERY_INSTANCE_RESULT_SUCCESS: 'dr.recovery.instance.result.success',
  DR_RECOVERY_INSTANCE_RESULT_FAILED: 'dr.recovery.instance.result.failed',
  DR_RECOVERY_INSTANCE_RESULT_CANCELED: 'dr.recovery.instance.result.canceled',
  DR_RECOVERY_INSTANCE_RESULT_UNKNOWN: 'dr.recovery.instance.result.unknown',
};

export const OpenStackDrRecoveryJobInstanceStatusStateCodeEnum = <OpenStackDrRecoveryJobInstanceStatusStateCodeEnumResolvers>{
  DR_RECOVERY_JOB_INSTANCE_STATE_EXCEPTED: 'dr.recovery.job.instance.state.excepted',
  DR_RECOVERY_JOB_INSTANCE_STATE_IGNORED: 'dr.recovery.job.instance.state.ignored',
  DR_RECOVERY_JOB_INSTANCE_STATE_PREPARING: 'dr.recovery.job.instance.state.preparing',
  DR_RECOVERY_JOB_INSTANCE_STATE_READY: 'dr.recovery.job.instance.state.ready',
  DR_RECOVERY_JOB_INSTANCE_STATE_BOOTING: 'dr.recovery.job.instance.state.booting',
  DR_RECOVERY_JOB_INSTANCE_STATE_DIAGNOSING: 'dr.recovery.job.instance.state.diagnosing',
  DR_RECOVERY_JOB_INSTANCE_STATE_SUCCESS: 'dr.recovery.job.instance.state.success',
  DR_RECOVERY_JOB_INSTANCE_STATE_FAILED: 'dr.recovery.job.instance.state.failed',
  DR_RECOVERY_JOB_INSTANCE_STATE_DONE: 'dr.recovery.job.instance.state.done',
  DR_RECOVERY_JOB_INSTANCE_STATE_RUNNING: 'dr.recovery.job.instance.state.running',
};

export const OpenStackDrRecoveryJobKeyPairStatusResultCodeEnum = <OpenStackDrRecoveryJobKeyPairStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobNetworkStatusResultCodeEnum = <OpenStackDrRecoveryJobNetworkStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobOperationCodeEnum = <OpenStackDrRecoveryJobOperationCodeEnumResolvers>{
  RUN: 'run',
  PAUSE: 'pause',
  CANCEL: 'cancel',
  RETRY: 'retry',
  ROLLBACK: 'rollback',
  RETRY_ROLLBACK: 'retry-rollback',
  IGNORE_ROLLBACK: 'ignore-rollback',
  CONFIRM: 'confirm',
  RETRY_CONFIRM: 'retry-confirm',
  CANCEL_CONFIRM: 'cancel-confirm',
};

export const OpenStackDrRecoveryJobRecoveryPointTypeCodeEnum = <OpenStackDrRecoveryJobRecoveryPointTypeCodeEnumResolvers>{
  DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST: 'dr.recovery.recovery_point.type.latest',
  DR_RECOVERY_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT: 'dr.recovery.recovery_point.type.latest_snapshot',
  DR_RECOVERY_RECOVERY_POINT_TYPE_SNAPSHOT: 'dr.recovery.recovery_point.type.snapshot',
};

export const OpenStackDrRecoveryJobRouterStatusResultCodeEnum = <OpenStackDrRecoveryJobRouterStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnum = <OpenStackDrRecoveryJobSecurityGroupStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnum = <OpenStackDrRecoveryJobSecurityGroupStatusStateCodeEnumResolvers>{
  PREPARING: 'preparing',
  EXCEPTED: 'excepted',
  SUCCESS: 'success',
  FAILED: 'failed',
  DONE: 'done',
};

export const OpenStackDrRecoveryJobStateCodeEnum = <OpenStackDrRecoveryJobStateCodeEnumResolvers>{
  DR_RECOVERY_JOB_STATE_WAITING: 'dr.recovery.job.state.waiting',
  DR_RECOVERY_JOB_STATE_PENDING: 'dr.recovery.job.state.pending',
  DR_RECOVERY_JOB_STATE_RUNNING: 'dr.recovery.job.state.running',
  DR_RECOVERY_JOB_STATE_CANCELING: 'dr.recovery.job.state.canceling',
  DR_RECOVERY_JOB_STATE_PAUSED: 'dr.recovery.job.state.paused',
  DR_RECOVERY_JOB_STATE_COMPLETED: 'dr.recovery.job.state.completed',
  DR_RECOVERY_JOB_STATE_CLEARING: 'dr.recovery.job.state.clearing',
  DR_RECOVERY_JOB_STATE_CLEAR_FAILED: 'dr.recovery.job.state.clear-failed',
  DR_RECOVERY_JOB_STATE_REPORTING: 'dr.recovery.job.state.reporting',
  DR_RECOVERY_JOB_STATE_FINISHED: 'dr.recovery.job.state.finished',
};

export const OpenStackDrRecoveryJobStatusCodeEnum = <OpenStackDrRecoveryJobStatusCodeEnumResolvers>{
  WAITING: 'waiting',
  RUNNING: 'running',
  DONE: 'done',
};

export const OpenStackDrRecoveryJobStatusResultCodeEnum = <OpenStackDrRecoveryJobStatusResultCodeEnumResolvers>{
  DR_RECOVERY_RESULT_SUCCESS: 'dr.recovery.result.success',
  DR_RECOVERY_RESULT_PARTIAL_SUCCESS: 'dr.recovery.result.partial_success',
  DR_RECOVERY_RESULT_FAILED: 'dr.recovery.result.failed',
  DR_RECOVERY_RESULT_CANCELED: 'dr.recovery.result.canceled',
};

export const OpenStackDrRecoveryJobStatusTypeCodeEnum = <OpenStackDrRecoveryJobStatusTypeCodeEnumResolvers>{
  DR_MIGRATION_TASK_CREATE: 'dr.migration.task.create',
  DR_MIGRATION_TASK_DELETE: 'dr.migration.task.delete',
};

export const OpenStackDrRecoveryJobSubnetStatusResultCodeEnum = <OpenStackDrRecoveryJobSubnetStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobTenantStatusResultCodeEnum = <OpenStackDrRecoveryJobTenantStatusResultCodeEnumResolvers>{
  SUCCESS: 'success',
  FAILED: 'failed',
  EXCEPTED: 'excepted',
  IGNORED: 'ignored',
  CANCELED: 'canceled',
};

export const OpenStackDrRecoveryJobVolumeStatusResultCodeEnum = <OpenStackDrRecoveryJobVolumeStatusResultCodeEnumResolvers>{
  DR_RECOVERY_VOLUME_RESULT_SUCCESS: 'dr.recovery.volume.result.success',
  DR_RECOVERY_VOLUME_RESULT_FAILED: 'dr.recovery.volume.result.failed',
  DR_RECOVERY_VOLUME_RESULT_CANCELED: 'dr.recovery.volume.result.canceled',
};

export const OpenStackDrRecoveryJobVolumeStatusStateCodeEnum = <OpenStackDrRecoveryJobVolumeStatusStateCodeEnumResolvers>{
  DR_RECOVERY_JOB_VOLUME_STATE_PREPARING: 'dr.recovery.job.volume.state.preparing',
  DR_RECOVERY_JOB_VOLUME_STATE_EXCEPTED: 'dr.recovery.job.volume.state.excepted',
  DR_RECOVERY_JOB_VOLUME_STATE_SUCCESS: 'dr.recovery.job.volume.state.success',
  DR_RECOVERY_JOB_VOLUME_STATE_FAILED: 'dr.recovery.job.volume.state.failed',
  DR_RECOVERY_JOB_VOLUME_STATE_DONE: 'dr.recovery.job.volume.state.done',
};

export const OpenStackDrRecoveryPlanDirectionCodeEnum = <OpenStackDrRecoveryPlanDirectionCodeEnumResolvers>{
  DR_RECOVERY_DIRECTION_FAILOVER: 'dr.recovery.direction.failover',
  DR_RECOVERY_DIRECTION_FAILBACK: 'dr.recovery.direction.failback',
};

export const OpenStackDrRecoveryPlanMirrorStateCodeEnum = <OpenStackDrRecoveryPlanMirrorStateCodeEnumResolvers>{
  DR_RECOVERY_PLAN_STATE_PREPARE: 'dr.recovery.plan.state.prepare',
  DR_RECOVERY_PLAN_STATE_MIRRORING: 'dr.recovery.plan.state.mirroring',
  DR_RECOVERY_PLAN_STATE_PAUSED: 'dr.recovery.plan.state.paused',
  DR_RECOVERY_PLAN_STATE_STOPPED: 'dr.recovery.plan.state.stopped',
  DR_RECOVERY_PLAN_STATE_WARNING: 'dr.recovery.plan.state.warning',
};

export const OpenStackDrRecoveryPlanStateCodeEnum = <OpenStackDrRecoveryPlanStateCodeEnumResolvers>{
  DR_RECOVERY_PLAN_STATE_NORMAL: 'dr.recovery.plan.state.normal',
  DR_RECOVERY_PLAN_STATE_WARNING: 'dr.recovery.plan.state.warning',
  DR_RECOVERY_PLAN_STATE_EMERGENCY: 'dr.recovery.plan.state.emergency',
  DR_RECOVERY_PLAN_STATE_CRITICAL: 'dr.recovery.plan.state.critical',
};

export const OpenStackDrRecoveryPointObjectiveTypeEnum = <OpenStackDrRecoveryPointObjectiveTypeEnumResolvers>{
  RECOVERY_POINT_OBJECTIVE_TYPE_MINUTE: 'recovery.point.objective.type.minute',
  RECOVERY_POINT_OBJECTIVE_TYPE_HOUR: 'recovery.point.objective.type.hour',
  RECOVERY_POINT_OBJECTIVE_TYPE_DAY: 'recovery.point.objective.type.day',
};

export const OpenStackDrRecoveryResultResultCodeEnum = <OpenStackDrRecoveryResultResultCodeEnumResolvers>{
  DR_RECOVERY_RESULT_SUCCESS: 'dr.recovery.result.success',
  DR_RECOVERY_RESULT_PARTIAL_SUCCESS: 'dr.recovery.result.partial_success',
  DR_RECOVERY_RESULT_FAILED: 'dr.recovery.result.failed',
  DR_RECOVERY_RESULT_CANCELED: 'dr.recovery.result.canceled',
};

export const OpenStackDrRecoveryTypeEnum = <OpenStackDrRecoveryTypeEnumResolvers>{
  DR_RECOVERY_TYPE_SIMULATION: 'dr.recovery.type.simulation',
  DR_RECOVERY_TYPE_MIGRATION: 'dr.recovery.type.migration',
};

export const OpenStackDrReportResultEnum = <OpenStackDrReportResultEnumResolvers>{
  DR_RECOVERY_RESULT_SUCCESS: 'dr.recovery.result.success',
  DR_RECOVERY_RESULT_PARTIAL_SUCCESS: 'dr.recovery.result.partial_success',
  DR_RECOVERY_RESULT_FAILED: 'dr.recovery.result.failed',
  DR_RECOVERY_RESULT_CANCELED: 'dr.recovery.result.canceled',
};

export const OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrRouterRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_NETWORK_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.network.recovery.type.mirroring',
};

export const OpenStackDrScheduleSnapshotIntervalTypeEnum = <OpenStackDrScheduleSnapshotIntervalTypeEnumResolvers>{
  SNAPSHOT_INTERVAL_TYPE_MINUTELY: 'snapshot.interval.type.minutely',
  SNAPSHOT_INTERVAL_TYPE_HOURLY: 'snapshot.interval.type.hourly',
  SNAPSHOT_INTERVAL_TYPE_DAILY: 'snapshot.interval.type.daily',
};

export const OpenStackDrScheduleStateCodeEnum = <OpenStackDrScheduleStateCodeEnumResolvers>{
  DR_PROTECTION_GROUP_STATE_NORMAL: 'dr.protection.group.state.normal',
  DR_PROTECTION_GROUP_STATE_WARNING: 'dr.protection.group.state.warning',
  DR_PROTECTION_GROUP_STATE_CRITICAL: 'dr.protection.group.state.critical',
  DR_PROTECTION_GROUP_STATE_EMERGENCY: 'dr.protection.group.state.emergency',
};

export const OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrStorageRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_STORAGE_RECOVERY_TYPE_MAPPING: 'dr.recovery.plan.storage.recovery.type.mapping',
};

export const OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrTenantRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_TENANT_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.tenant.recovery.type.mirroring',
};

export const OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnum = <OpenStackDrVolumeRecoveryPlanRecoveryTypeCodeEnumResolvers>{
  DR_RECOVERY_PLAN_VOLUME_RECOVERY_TYPE_MIRRORING: 'dr.recovery.plan.volume.recovery.type.mirroring',
};

export const OpenStackDrVolumeRecoveryResultResultCodeEnum = <OpenStackDrVolumeRecoveryResultResultCodeEnumResolvers>{
  DR_RECOVERY_VOLUME_RESULT_SUCCESS: 'dr.recovery.volume.result.success',
  DR_RECOVERY_VOLUME_RESULT_FAILED: 'dr.recovery.volume.result.failed',
  DR_RECOVERY_VOLUME_RESULT_CANCELED: 'dr.recovery.volume.result.canceled',
};

