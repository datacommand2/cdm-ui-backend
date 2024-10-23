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

export type CheckClusterConnectionStatusInput = {
  openStackCmClusterConnectionInfoRequest?: InputMaybe<OpenStackCmClusterConnectionInfoRequestInput>;
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

export type CreateClusterInput = {
  openStackCmClusterRequest?: InputMaybe<OpenStackCmClusterRequestInput>;
};

export type DeleteClusterInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CheckClusterConnectionStatus?: Maybe<OpenStackCmMessageResponse>;
  CreateCluster?: Maybe<OpenStackCmClusterResponse>;
  DeleteCluster?: Maybe<OpenStackCmMessageResponse>;
  PutHypervisor?: Maybe<OpenStackCmHypervisorResponse>;
  UpdateCluster?: Maybe<OpenStackCmClusterResponse>;
  UpdateClusterSync?: Maybe<OpenStackCmMessageResponse>;
  UpdateClusterSyncException?: Maybe<OpenStackCmMessageResponse>;
  UpdateConfig?: Maybe<OpenStackCmMessageResponse>;
  UpdateCrendential?: Maybe<OpenStackCmMessageResponse>;
  UpdateMetadata?: Maybe<OpenStackCmMetadataResponse>;
  UpdateUserscript?: Maybe<OpenStackCmMessageResponse>;
};


export type MutationCheckClusterConnectionStatusArgs = {
  input?: InputMaybe<CheckClusterConnectionStatusInput>;
};


export type MutationCreateClusterArgs = {
  input?: InputMaybe<CreateClusterInput>;
};


export type MutationDeleteClusterArgs = {
  input?: InputMaybe<DeleteClusterInput>;
};


export type MutationPutHypervisorArgs = {
  input?: InputMaybe<PutHypervisorInput>;
};


export type MutationUpdateClusterArgs = {
  input?: InputMaybe<UpdateClusterInput>;
};


export type MutationUpdateClusterSyncArgs = {
  input?: InputMaybe<UpdateClusterSyncInput>;
};


export type MutationUpdateClusterSyncExceptionArgs = {
  input?: InputMaybe<UpdateClusterSyncExceptionInput>;
};


export type MutationUpdateConfigArgs = {
  input?: InputMaybe<UpdateConfigInput>;
};


export type MutationUpdateCrendentialArgs = {
  input?: InputMaybe<UpdateCrendentialInput>;
};


export type MutationUpdateMetadataArgs = {
  input?: InputMaybe<UpdateMetadataInput>;
};


export type MutationUpdateUserscriptArgs = {
  input?: InputMaybe<UpdateUserscriptInput>;
};

export type OpenStackCmAvailabilityZoneResponse = {
  __typename?: 'OpenStackCmAvailabilityZoneResponse';
  availability_zone?: Maybe<OpenStackCmAvailabilityZoneResponseAvailabilityZone>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmAvailabilityZoneResponseAvailabilityZone = {
  __typename?: 'OpenStackCmAvailabilityZoneResponseAvailabilityZone';
  available?: Maybe<Scalars['Boolean']['output']>;
  cluster?: Maybe<OpenStackCmCluster>;
  hypervisors?: Maybe<Array<Maybe<OpenStackCmClusterHypervisor>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmAvailabilityZoneResponseAvailabilityZoneInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  hypervisors?: InputMaybe<Array<InputMaybe<OpenStackCmClusterHypervisorInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmAvailabilityZoneResponseInput = {
  availability_zone?: InputMaybe<OpenStackCmAvailabilityZoneResponseAvailabilityZoneInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmAvailabilityZonesResponse = {
  __typename?: 'OpenStackCmAvailabilityZonesResponse';
  availability_zones?: Maybe<Array<Maybe<OpenStackCmClusterAvailabilityZone>>>;
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
};

export type OpenStackCmAvailabilityZonesResponseInput = {
  availability_zones?: InputMaybe<Array<InputMaybe<OpenStackCmClusterAvailabilityZoneInput>>>;
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
};

export type OpenStackCmCheckClusterInfoResponse = {
  __typename?: 'OpenStackCmCheckClusterInfoResponse';
  compute_error?: Maybe<Scalars['String']['output']>;
  computes?: Maybe<Array<Maybe<OpenStackCmCompute>>>;
  message?: Maybe<OpenStackCmMessage>;
  network_error?: Maybe<Scalars['String']['output']>;
  networks?: Maybe<Array<Maybe<OpenStackCmNetwork>>>;
  status?: Maybe<OpenStackCmClusterStateCodeEnum>;
  storage_error?: Maybe<Scalars['String']['output']>;
  storages?: Maybe<Array<Maybe<OpenStackCmStorage>>>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmCheckClusterInfoResponseInput = {
  compute_error?: InputMaybe<Scalars['String']['input']>;
  computes?: InputMaybe<Array<InputMaybe<OpenStackCmComputeInput>>>;
  message?: InputMaybe<OpenStackCmMessageInput>;
  network_error?: InputMaybe<Scalars['String']['input']>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackCmNetworkInput>>>;
  status?: InputMaybe<OpenStackCmClusterStateCodeEnum>;
  storage_error?: InputMaybe<Scalars['String']['input']>;
  storages?: InputMaybe<Array<InputMaybe<OpenStackCmStorageInput>>>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
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

export type OpenStackCmClusterAvailabilityZone = {
  __typename?: 'OpenStackCmClusterAvailabilityZone';
  available?: Maybe<Scalars['Boolean']['output']>;
  cluster?: Maybe<OpenStackCmCluster>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmClusterAvailabilityZoneInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmClusterConfig = {
  __typename?: 'OpenStackCmClusterConfig';
  reserved_sync_interval?: Maybe<Scalars['BigInt']['output']>;
  timestamp_interval?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterConfigInput = {
  reserved_sync_interval?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_interval?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmClusterConnectionInfoRequest = {
  __typename?: 'OpenStackCmClusterConnectionInfoRequest';
  api_server_url?: Maybe<Scalars['String']['output']>;
  credential?: Maybe<Scalars['String']['output']>;
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum>;
};

export type OpenStackCmClusterConnectionInfoRequestInput = {
  api_server_url?: InputMaybe<Scalars['String']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterTypeCodeEnum>;
};

export type OpenStackCmClusterFloatingIp = {
  __typename?: 'OpenStackCmClusterFloatingIp';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterFloatingIpStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
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

export type OpenStackCmClusterInstanceExtraSpec = {
  __typename?: 'OpenStackCmClusterInstanceExtraSpec';
  key?: Maybe<OpenStackCmClusterInstanceExtraSpecKeyEnum>;
  value?: Maybe<Scalars['String']['output']>;
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

export type OpenStackCmClusterInstanceNetworkInput = {
  dhcp_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ip?: InputMaybe<OpenStackCmClusterFloatingIpInput>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackCmClusterNetworkInput>;
  subnet?: InputMaybe<OpenStackCmClusterSubnetInput>;
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

export type OpenStackCmClusterPermissionInput = {
  group?: InputMaybe<CloudUserGroupInput>;
  mode_code?: InputMaybe<OpenStackCmClusterPermissionModeCodeEnum>;
};

export enum OpenStackCmClusterPermissionModeCodeEnum {
  ClusterPermissionModeReadonly = 'CLUSTER_PERMISSION_MODE_READONLY',
  ClusterPermissionModeReadwrite = 'CLUSTER_PERMISSION_MODE_READWRITE'
}

export type OpenStackCmClusterRequest = {
  __typename?: 'OpenStackCmClusterRequest';
  cluster?: Maybe<OpenStackCmCluster>;
};

export type OpenStackCmClusterRequestInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
};

export type OpenStackCmClusterResponse = {
  __typename?: 'OpenStackCmClusterResponse';
  cluster?: Maybe<OpenStackCmCluster>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmClusterResponseInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

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

export enum OpenStackCmClusterServiceSyncObjectCodeEnum {
  ClusterAvailabilityZoneListSync = 'CLUSTER_AVAILABILITY_ZONE_LIST_SYNC',
  ClusterHypervisorListSync = 'CLUSTER_HYPERVISOR_LIST_SYNC',
  ClusterInstanceListSync = 'CLUSTER_INSTANCE_LIST_SYNC',
  ClusterKeypairListSync = 'CLUSTER_KEYPAIR_LIST_SYNC',
  ClusterNetworkListSync = 'CLUSTER_NETWORK_LIST_SYNC',
  ClusterRouterListSync = 'CLUSTER_ROUTER_LIST_SYNC',
  ClusterSecurityGroupListSync = 'CLUSTER_SECURITY_GROUP_LIST_SYNC',
  ClusterStorageListSync = 'CLUSTER_STORAGE_LIST_SYNC',
  ClusterTenantListSync = 'CLUSTER_TENANT_LIST_SYNC',
  ClusterVolumeListSync = 'CLUSTER_VOLUME_LIST_SYNC',
  ClusterVolumeSnapshotListSync = 'CLUSTER_VOLUME_SNAPSHOT_LIST_SYNC'
}

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

export enum OpenStackCmClusterSyncCompletionProgressStatusEnum {
  ClusterSyncCompleted = 'CLUSTER_SYNC_COMPLETED',
  ClusterSyncFailed = 'CLUSTER_SYNC_FAILED',
  ClusterSyncRunning = 'CLUSTER_SYNC_RUNNING',
  Waiting = 'WAITING'
}

export enum OpenStackCmClusterSyncStateEnum {
  ClusterSyncStateDone = 'CLUSTER_SYNC_STATE_DONE',
  ClusterSyncStateFailed = 'CLUSTER_SYNC_STATE_FAILED',
  ClusterSyncStateInit = 'CLUSTER_SYNC_STATE_INIT',
  ClusterSyncStateRunning = 'CLUSTER_SYNC_STATE_RUNNING',
  ClusterSyncStateUnknown = 'CLUSTER_SYNC_STATE_UNKNOWN'
}

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

export type OpenStackCmClustersResponse = {
  __typename?: 'OpenStackCmClustersResponse';
  clusters?: Maybe<Array<Maybe<OpenStackCmCluster>>>;
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
};

export type OpenStackCmClustersResponseInput = {
  clusters?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInput>>>;
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
};

export type OpenStackCmCompletion = {
  __typename?: 'OpenStackCmCompletion';
  progress_status?: Maybe<OpenStackCmClusterSyncCompletionProgressStatusEnum>;
  resource?: Maybe<OpenStackCmClusterServiceSyncObjectCodeEnum>;
};

export type OpenStackCmCompletionInput = {
  progress_status?: InputMaybe<OpenStackCmClusterSyncCompletionProgressStatusEnum>;
  resource?: InputMaybe<OpenStackCmClusterServiceSyncObjectCodeEnum>;
};

export type OpenStackCmCompute = {
  __typename?: 'OpenStackCmCompute';
  binary?: Maybe<Scalars['String']['output']>;
  exception?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  last_updated?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  zone?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmComputeInput = {
  binary?: InputMaybe<Scalars['String']['input']>;
  exception?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  last_updated?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  zone?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmConfigInfoRequest = {
  __typename?: 'OpenStackCmConfigInfoRequest';
  config?: Maybe<OpenStackCmClusterConfig>;
};

export type OpenStackCmConfigInfoRequestInput = {
  config?: InputMaybe<OpenStackCmClusterConfigInput>;
};

export type OpenStackCmConfigInfoResponse = {
  __typename?: 'OpenStackCmConfigInfoResponse';
  config?: Maybe<OpenStackCmClusterConfig>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmConfigInfoResponseInput = {
  config?: InputMaybe<OpenStackCmClusterConfigInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmCredentialRequest = {
  __typename?: 'OpenStackCmCredentialRequest';
  new_credential?: Maybe<Scalars['String']['output']>;
  old_credential?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmCredentialRequestInput = {
  new_credential?: InputMaybe<Scalars['String']['input']>;
  old_credential?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmFloatingIpResponse = {
  __typename?: 'OpenStackCmFloatingIpResponse';
  floating_ip?: Maybe<OpenStackCmClusterFloatingIp>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmFloatingIpResponseInput = {
  floating_ip?: InputMaybe<OpenStackCmClusterFloatingIpInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmHypervisorRequest = {
  __typename?: 'OpenStackCmHypervisorRequest';
  hypervisor?: Maybe<OpenStackCmClusterHypervisor>;
};

export type OpenStackCmHypervisorRequestInput = {
  hypervisor?: InputMaybe<OpenStackCmClusterHypervisorInput>;
};

export type OpenStackCmHypervisorResponse = {
  __typename?: 'OpenStackCmHypervisorResponse';
  hypervisor?: Maybe<OpenStackCmClusterHypervisor>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmHypervisorResponseInput = {
  hypervisor?: InputMaybe<OpenStackCmClusterHypervisorInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmHypervisorsResponse = {
  __typename?: 'OpenStackCmHypervisorsResponse';
  hypervisors?: Maybe<Array<Maybe<OpenStackCmClusterHypervisor>>>;
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
};

export type OpenStackCmHypervisorsResponseInput = {
  hypervisors?: InputMaybe<Array<InputMaybe<OpenStackCmClusterHypervisorInput>>>;
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
};

export type OpenStackCmInstanceResponse = {
  __typename?: 'OpenStackCmInstanceResponse';
  instance?: Maybe<OpenStackCmClusterInstance>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmInstanceResponseInput = {
  instance?: InputMaybe<OpenStackCmClusterInstanceInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmInstanceSpecResponse = {
  __typename?: 'OpenStackCmInstanceSpecResponse';
  message?: Maybe<OpenStackCmMessage>;
  spec?: Maybe<OpenStackCmClusterInstanceSpec>;
};

export type OpenStackCmInstanceSpecResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  spec?: InputMaybe<OpenStackCmClusterInstanceSpecInput>;
};

export type OpenStackCmInstanceSpecsResponse = {
  __typename?: 'OpenStackCmInstanceSpecsResponse';
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
  specs?: Maybe<Array<Maybe<OpenStackCmClusterInstanceSpec>>>;
};

export type OpenStackCmInstanceSpecsResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
  specs?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceSpecInput>>>;
};

export type OpenStackCmInstancesResponse = {
  __typename?: 'OpenStackCmInstancesResponse';
  instances?: Maybe<Array<Maybe<OpenStackCmClusterInstance>>>;
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
};

export type OpenStackCmInstancesResponseInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceInput>>>;
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
};

export type OpenStackCmKeyPairResponse = {
  __typename?: 'OpenStackCmKeyPairResponse';
  keypair?: Maybe<OpenStackCmClusterKeyPair>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmKeyPairResponseInput = {
  keypair?: InputMaybe<OpenStackCmClusterKeyPairInput>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmMessage = {
  __typename?: 'OpenStackCmMessage';
  code?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmMessageInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmMessageResponse = {
  __typename?: 'OpenStackCmMessageResponse';
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmMessageResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmMetadata = {
  __typename?: 'OpenStackCmMetadata';
  admin_client?: Maybe<Scalars['String']['output']>;
  admin_keyring?: Maybe<Scalars['String']['output']>;
  host_ip?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmMetadataInput = {
  admin_client?: InputMaybe<Scalars['String']['input']>;
  admin_keyring?: InputMaybe<Scalars['String']['input']>;
  host_ip?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmMetadataRequest = {
  __typename?: 'OpenStackCmMetadataRequest';
  metadata?: Maybe<OpenStackCmMetadata>;
};

export type OpenStackCmMetadataRequestInput = {
  metadata?: InputMaybe<OpenStackCmMetadataInput>;
};

export type OpenStackCmMetadataResponse = {
  __typename?: 'OpenStackCmMetadataResponse';
  metadata?: Maybe<OpenStackCmMetadata>;
};

export type OpenStackCmMetadataResponseInput = {
  metadata?: InputMaybe<OpenStackCmMetadataInput>;
};

export type OpenStackCmNetwork = {
  __typename?: 'OpenStackCmNetwork';
  binary?: Maybe<Scalars['String']['output']>;
  exception?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  last_updated?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmNetworkInput = {
  binary?: InputMaybe<Scalars['String']['input']>;
  exception?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  last_updated?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmNetworkResponse = {
  __typename?: 'OpenStackCmNetworkResponse';
  message?: Maybe<OpenStackCmMessage>;
  network?: Maybe<OpenStackCmClusterNetwork>;
};

export type OpenStackCmNetworkResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  network?: InputMaybe<OpenStackCmClusterNetworkInput>;
};

export type OpenStackCmNetworksResponse = {
  __typename?: 'OpenStackCmNetworksResponse';
  message?: Maybe<OpenStackCmMessage>;
  networks?: Maybe<Array<Maybe<OpenStackCmClusterNetwork>>>;
  pagination?: Maybe<OpenStackCmPagination>;
};

export type OpenStackCmNetworksResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackCmClusterNetworkInput>>>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
};

export type OpenStackCmPagination = {
  __typename?: 'OpenStackCmPagination';
  page?: Maybe<Scalars['BigInt']['output']>;
  total_items?: Maybe<Scalars['BigInt']['output']>;
  total_page?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmPaginationInput = {
  page?: InputMaybe<Scalars['BigInt']['input']>;
  total_items?: InputMaybe<Scalars['BigInt']['input']>;
  total_page?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackCmPublicKeyResponse = {
  __typename?: 'OpenStackCmPublicKeyResponse';
  key?: Maybe<Scalars['String']['output']>;
  message?: Maybe<OpenStackCmMessage>;
};

export type OpenStackCmPublicKeyResponseInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<OpenStackCmMessageInput>;
};

export type OpenStackCmRouterResponse = {
  __typename?: 'OpenStackCmRouterResponse';
  message?: Maybe<OpenStackCmMessage>;
  router?: Maybe<OpenStackCmClusterRouter>;
};

export type OpenStackCmRouterResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  router?: InputMaybe<OpenStackCmClusterRouterInput>;
};

export type OpenStackCmRoutersResponse = {
  __typename?: 'OpenStackCmRoutersResponse';
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
  routers?: Maybe<Array<Maybe<OpenStackCmClusterRouter>>>;
};

export type OpenStackCmRoutersResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackCmClusterRouterInput>>>;
};

export type OpenStackCmSecurityGroupResponse = {
  __typename?: 'OpenStackCmSecurityGroupResponse';
  message?: Maybe<OpenStackCmMessage>;
  security_group?: Maybe<OpenStackCmSecurityGroupResponseSecurityGroup>;
};

export type OpenStackCmSecurityGroupResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  security_group?: InputMaybe<OpenStackCmSecurityGroupResponseSecurityGroupInput>;
};

export type OpenStackCmSecurityGroupResponseSecurityGroup = {
  __typename?: 'OpenStackCmSecurityGroupResponseSecurityGroup';
  cluster?: Maybe<OpenStackCmCluster>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<OpenStackCmClusterSecurityGroupRule>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmSecurityGroupResponseSecurityGroupInput = {
  cluster?: InputMaybe<OpenStackCmClusterInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<OpenStackCmClusterSecurityGroupRuleInput>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmSecurityGroupsResponse = {
  __typename?: 'OpenStackCmSecurityGroupsResponse';
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
  security_groups?: Maybe<Array<Maybe<OpenStackCmClusterSecurityGroup>>>;
};

export type OpenStackCmSecurityGroupsResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
  security_groups?: InputMaybe<Array<InputMaybe<OpenStackCmClusterSecurityGroupInput>>>;
};

export type OpenStackCmStorage = {
  __typename?: 'OpenStackCmStorage';
  backend_name?: Maybe<Scalars['String']['output']>;
  binary?: Maybe<Scalars['String']['output']>;
  exception?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  last_updated?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  zone?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmStorageInput = {
  backend_name?: InputMaybe<Scalars['String']['input']>;
  binary?: InputMaybe<Scalars['String']['input']>;
  exception?: InputMaybe<Scalars['Boolean']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  last_updated?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  zone?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmStorageResponse = {
  __typename?: 'OpenStackCmStorageResponse';
  message?: Maybe<OpenStackCmMessage>;
  storage?: Maybe<OpenStackCmClusterStorage>;
};

export type OpenStackCmStorageResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  storage?: InputMaybe<OpenStackCmClusterStorageInput>;
};

export type OpenStackCmStoragesResponse = {
  __typename?: 'OpenStackCmStoragesResponse';
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
  storages?: Maybe<Array<Maybe<OpenStackCmClusterStorage>>>;
};

export type OpenStackCmStoragesResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
  storages?: InputMaybe<Array<InputMaybe<OpenStackCmClusterStorageInput>>>;
};

export type OpenStackCmSubnetResponse = {
  __typename?: 'OpenStackCmSubnetResponse';
  message?: Maybe<OpenStackCmMessage>;
  subnet?: Maybe<OpenStackCmClusterSubnet>;
};

export type OpenStackCmSubnetResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  subnet?: InputMaybe<OpenStackCmClusterSubnetInput>;
};

export type OpenStackCmSyncClusterStatusResponse = {
  __typename?: 'OpenStackCmSyncClusterStatusResponse';
  completion?: Maybe<Array<Maybe<OpenStackCmCompletion>>>;
  id?: Maybe<Scalars['BigInt']['output']>;
  progress?: Maybe<Scalars['BigInt']['output']>;
  reasons?: Maybe<OpenStackCmMessage>;
  status?: Maybe<OpenStackCmClusterSyncStateEnum>;
};

export type OpenStackCmSyncClusterStatusResponseInput = {
  completion?: InputMaybe<Array<InputMaybe<OpenStackCmCompletionInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  progress?: InputMaybe<Scalars['BigInt']['input']>;
  reasons?: InputMaybe<OpenStackCmMessageInput>;
  status?: InputMaybe<OpenStackCmClusterSyncStateEnum>;
};

export type OpenStackCmSyncExceptionInfoRequest = {
  __typename?: 'OpenStackCmSyncExceptionInfoRequest';
  computes?: Maybe<Array<Maybe<OpenStackCmCompute>>>;
  networks?: Maybe<Array<Maybe<OpenStackCmNetwork>>>;
  storages?: Maybe<Array<Maybe<OpenStackCmStorage>>>;
};

export type OpenStackCmSyncExceptionInfoRequestInput = {
  computes?: InputMaybe<Array<InputMaybe<OpenStackCmComputeInput>>>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackCmNetworkInput>>>;
  storages?: InputMaybe<Array<InputMaybe<OpenStackCmStorageInput>>>;
};

export type OpenStackCmTenantResponse = {
  __typename?: 'OpenStackCmTenantResponse';
  message?: Maybe<OpenStackCmMessage>;
  tenant?: Maybe<OpenStackCmClusterTenant>;
};

export type OpenStackCmTenantResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  tenant?: InputMaybe<OpenStackCmClusterTenantInput>;
};

export type OpenStackCmTenantsResponse = {
  __typename?: 'OpenStackCmTenantsResponse';
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
  tenants?: Maybe<Array<Maybe<OpenStackCmClusterTenant>>>;
};

export type OpenStackCmTenantsResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
  tenants?: InputMaybe<Array<InputMaybe<OpenStackCmClusterTenantInput>>>;
};

export type OpenStackCmUserScriptRequest = {
  __typename?: 'OpenStackCmUserScriptRequest';
  user_data?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmUserScriptRequestInput = {
  user_data?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmUserScriptResponse = {
  __typename?: 'OpenStackCmUserScriptResponse';
  message?: Maybe<OpenStackCmMessage>;
  user_data?: Maybe<Scalars['String']['output']>;
};

export type OpenStackCmUserScriptResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  user_data?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackCmVolumeResponse = {
  __typename?: 'OpenStackCmVolumeResponse';
  message?: Maybe<OpenStackCmMessage>;
  volume?: Maybe<OpenStackCmClusterVolume>;
};

export type OpenStackCmVolumeResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  volume?: InputMaybe<OpenStackCmClusterVolumeInput>;
};

export type OpenStackCmVolumesResponse = {
  __typename?: 'OpenStackCmVolumesResponse';
  message?: Maybe<OpenStackCmMessage>;
  pagination?: Maybe<OpenStackCmPagination>;
  volumes?: Maybe<Array<Maybe<OpenStackCmClusterVolume>>>;
};

export type OpenStackCmVolumesResponseInput = {
  message?: InputMaybe<OpenStackCmMessageInput>;
  pagination?: InputMaybe<OpenStackCmPaginationInput>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackCmClusterVolumeInput>>>;
};

export type PutHypervisorInput = {
  clusterHypervisorId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmHypervisorRequest?: InputMaybe<OpenStackCmHypervisorRequestInput>;
};

export type Query = {
  __typename?: 'Query';
  GetAvailabilityZones?: Maybe<OpenStackCmAvailabilityZonesResponse>;
  GetAvailabliltyZone?: Maybe<OpenStackCmAvailabilityZoneResponse>;
  GetCluster?: Maybe<OpenStackCmClusterResponse>;
  GetClusterStatusCheck?: Maybe<OpenStackCmCheckClusterInfoResponse>;
  GetClusterSyncStatus?: Maybe<OpenStackCmSyncClusterStatusResponse>;
  GetClusters?: Maybe<OpenStackCmClustersResponse>;
  GetConfig?: Maybe<OpenStackCmConfigInfoResponse>;
  GetFloatingIp?: Maybe<OpenStackCmFloatingIpResponse>;
  GetHypervisor?: Maybe<OpenStackCmHypervisorResponse>;
  GetHypervisors?: Maybe<OpenStackCmHypervisorsResponse>;
  GetInstance?: Maybe<OpenStackCmInstanceResponse>;
  GetInstanceSpec?: Maybe<OpenStackCmInstanceSpecResponse>;
  GetInstanceSpecs?: Maybe<OpenStackCmInstanceSpecsResponse>;
  GetInstances?: Maybe<OpenStackCmInstancesResponse>;
  GetKeypair?: Maybe<OpenStackCmKeyPairResponse>;
  GetNetwork?: Maybe<OpenStackCmNetworkResponse>;
  GetNetworks?: Maybe<OpenStackCmNetworksResponse>;
  GetPublickey?: Maybe<OpenStackCmPublicKeyResponse>;
  GetRouter?: Maybe<OpenStackCmRouterResponse>;
  GetRouters?: Maybe<OpenStackCmRoutersResponse>;
  GetSecurityGroup?: Maybe<OpenStackCmSecurityGroupResponse>;
  GetSecurityGroups?: Maybe<OpenStackCmSecurityGroupsResponse>;
  GetStorage?: Maybe<OpenStackCmStorageResponse>;
  GetStorages?: Maybe<OpenStackCmStoragesResponse>;
  GetSubnet?: Maybe<OpenStackCmSubnetResponse>;
  GetTenant?: Maybe<OpenStackCmTenantResponse>;
  GetTenants?: Maybe<OpenStackCmTenantsResponse>;
  GetUserscript?: Maybe<OpenStackCmUserScriptResponse>;
  GetVolume?: Maybe<OpenStackCmVolumeResponse>;
  GetVolumes?: Maybe<OpenStackCmVolumesResponse>;
};


export type QueryGetAvailabilityZonesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetAvailabliltyZoneArgs = {
  clusterAvailabilityZoneId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetClusterArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetClusterStatusCheckArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetClusterSyncStatusArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetClustersArgs = {
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  ownerGroupId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  typeCode?: InputMaybe<OpenStackCmClusterTypeCodeEnum>;
};


export type QueryGetConfigArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetFloatingIpArgs = {
  clusterFloatingIpId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetHypervisorArgs = {
  clusterHypervisorId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetHypervisorsArgs = {
  clusterAvailabilityZoneId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetInstanceArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterInstanceId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetInstanceSpecArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterInstanceSpecId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetInstanceSpecsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetInstancesArgs = {
  clusterAvailabilityZoneId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterHypervisorId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterVolumeId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetKeypairArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterKeypairId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetNetworkArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterNetworkId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetNetworksArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  externalOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRouterArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterRouterId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetRoutersArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterNetworkId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSecurityGroupArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterSecurityGroupId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetSecurityGroupsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterInstanceId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetStorageArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterStorageId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetStoragesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  typeCode?: InputMaybe<OpenStackCmClusterTypeCodeEnum>;
};


export type QueryGetSubnetArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterSubnetId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetTenantArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetTenantsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserscriptArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterInstanceId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetVolumeArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterVolumeId?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetVolumesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterInstanceId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterStorageId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterTenantId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  sync?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateClusterInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmClusterRequest?: InputMaybe<OpenStackCmClusterRequestInput>;
};

export type UpdateClusterSyncExceptionInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmSyncExceptionInfoRequest?: InputMaybe<OpenStackCmSyncExceptionInfoRequestInput>;
};

export type UpdateClusterSyncInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateConfigInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmConfigInfoRequest?: InputMaybe<OpenStackCmConfigInfoRequestInput>;
};

export type UpdateCrendentialInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmCredentialRequest?: InputMaybe<OpenStackCmCredentialRequestInput>;
};

export type UpdateMetadataInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterStorageId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmMetadataRequest?: InputMaybe<OpenStackCmMetadataRequestInput>;
};

export type UpdateUserscriptInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  clusterInstanceId?: InputMaybe<Scalars['BigInt']['input']>;
  openStackCmUserScriptRequest?: InputMaybe<OpenStackCmUserScriptRequestInput>;
};
