import {
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
  OpenStackCmClusterServiceSyncObjectCodeEnumResolvers,
  OpenStackCmClusterStateCodeEnumResolvers,
  OpenStackCmClusterStorageStatusEnumResolvers,
  OpenStackCmClusterStorageTypeCodeEnumResolvers,
  OpenStackCmClusterSubnetIpv6AddressModeCodeEnumResolvers,
  OpenStackCmClusterSubnetIpv6RaModeCodeEnumResolvers,
  OpenStackCmClusterSyncCompletionProgressStatusEnumResolvers,
  OpenStackCmClusterSyncStateEnumResolvers,
  OpenStackCmClusterTypeCodeEnumResolvers,
  OpenStackCmClusterVolumeSnapshotStatusEnumResolvers,
  OpenStackCmClusterVolumeStatusEnumResolvers,
} from './resolvers-types';

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

export const OpenStackCmClusterServiceSyncObjectCodeEnum = <OpenStackCmClusterServiceSyncObjectCodeEnumResolvers>{
  CLUSTER_HYPERVISOR_LIST_SYNC: 'cluster.hypervisor.list.sync',
  CLUSTER_KEYPAIR_LIST_SYNC: 'cluster.keypair.list.sync',
  CLUSTER_STORAGE_LIST_SYNC: 'cluster.storage.list.sync',
  CLUSTER_ROUTER_LIST_SYNC: 'cluster.router.list.sync',
  CLUSTER_SECURITY_GROUP_LIST_SYNC: 'cluster.security_group.list.sync',
  CLUSTER_TENANT_LIST_SYNC: 'cluster.tenant.list.sync',
  CLUSTER_VOLUME_SNAPSHOT_LIST_SYNC: 'cluster.volume-snapshot.list.sync',
  CLUSTER_VOLUME_LIST_SYNC: 'cluster.volume.list.sync',
  CLUSTER_AVAILABILITY_ZONE_LIST_SYNC: 'cluster.availability_zone.list.sync',
  CLUSTER_INSTANCE_LIST_SYNC: 'cluster.instance.list.sync',
  CLUSTER_NETWORK_LIST_SYNC: 'cluster.network.list.sync',
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

export const OpenStackCmClusterSyncCompletionProgressStatusEnum = <OpenStackCmClusterSyncCompletionProgressStatusEnumResolvers>{
  WAITING: 'waiting',
  CLUSTER_SYNC_RUNNING: 'cluster.sync.running',
  CLUSTER_SYNC_COMPLETED: 'cluster.sync.completed',
  CLUSTER_SYNC_FAILED: 'cluster.sync.failed',
};

export const OpenStackCmClusterSyncStateEnum = <OpenStackCmClusterSyncStateEnumResolvers>{
  CLUSTER_SYNC_STATE_INIT: 'cluster.sync.state.init',
  CLUSTER_SYNC_STATE_RUNNING: 'cluster.sync.state.running',
  CLUSTER_SYNC_STATE_DONE: 'cluster.sync.state.done',
  CLUSTER_SYNC_STATE_FAILED: 'cluster.sync.state.failed',
  CLUSTER_SYNC_STATE_UNKNOWN: 'cluster.sync.state.unknown',
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

