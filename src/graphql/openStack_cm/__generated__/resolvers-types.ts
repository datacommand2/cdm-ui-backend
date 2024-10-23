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
  status?: Maybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
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
  status?: InputMaybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
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
  state_code?: Maybe<OpenStackCmClusterStateCodeEnum | `${OpenStackCmClusterStateCodeEnum}`>;
  synchronized_at?: Maybe<Scalars['BigInt']['output']>;
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
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
  type_code?: Maybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
};

export type OpenStackCmClusterConnectionInfoRequestInput = {
  api_server_url?: InputMaybe<Scalars['String']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenStackCmClusterTypeCodeEnum | `${OpenStackCmClusterTypeCodeEnum}`>;
};

export type OpenStackCmClusterFloatingIp = {
  __typename?: 'OpenStackCmClusterFloatingIp';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpenStackCmClusterFloatingIpStatusEnum | `${OpenStackCmClusterFloatingIpStatusEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
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

export type OpenStackCmClusterInstanceExtraSpec = {
  __typename?: 'OpenStackCmClusterInstanceExtraSpec';
  key?: Maybe<OpenStackCmClusterInstanceExtraSpecKeyEnum | `${OpenStackCmClusterInstanceExtraSpecKeyEnum}`>;
  value?: Maybe<Scalars['String']['output']>;
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
  type_code?: Maybe<OpenStackCmClusterKeyPairTypeCodeEnum | `${OpenStackCmClusterKeyPairTypeCodeEnum}`>;
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

export type OpenStackCmClusterPermissionInput = {
  group?: InputMaybe<CloudUserGroupInput>;
  mode_code?: InputMaybe<OpenStackCmClusterPermissionModeCodeEnum | `${OpenStackCmClusterPermissionModeCodeEnum}`>;
};

export enum OpenStackCmClusterPermissionModeCodeEnum {
  ClusterPermissionModeReadonly = 'cluster.permission.mode.readonly',
  ClusterPermissionModeReadwrite = 'cluster.permission.mode.readwrite'
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
  state?: Maybe<OpenStackCmClusterRouterStateEnum | `${OpenStackCmClusterRouterStateEnum}`>;
  status?: Maybe<OpenStackCmClusterRouterStatusEnum | `${OpenStackCmClusterRouterStatusEnum}`>;
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

export enum OpenStackCmClusterServiceSyncObjectCodeEnum {
  ClusterAvailabilityZoneListSync = 'cluster.availability_zone.list.sync',
  ClusterHypervisorListSync = 'cluster.hypervisor.list.sync',
  ClusterInstanceListSync = 'cluster.instance.list.sync',
  ClusterKeypairListSync = 'cluster.keypair.list.sync',
  ClusterNetworkListSync = 'cluster.network.list.sync',
  ClusterRouterListSync = 'cluster.router.list.sync',
  ClusterSecurityGroupListSync = 'cluster.security_group.list.sync',
  ClusterStorageListSync = 'cluster.storage.list.sync',
  ClusterTenantListSync = 'cluster.tenant.list.sync',
  ClusterVolumeListSync = 'cluster.volume.list.sync',
  ClusterVolumeSnapshotListSync = 'cluster.volume-snapshot.list.sync'
}

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

export enum OpenStackCmClusterSyncCompletionProgressStatusEnum {
  ClusterSyncCompleted = 'cluster.sync.completed',
  ClusterSyncFailed = 'cluster.sync.failed',
  ClusterSyncRunning = 'cluster.sync.running',
  Waiting = 'waiting'
}

export enum OpenStackCmClusterSyncStateEnum {
  ClusterSyncStateDone = 'cluster.sync.state.done',
  ClusterSyncStateFailed = 'cluster.sync.state.failed',
  ClusterSyncStateInit = 'cluster.sync.state.init',
  ClusterSyncStateRunning = 'cluster.sync.state.running',
  ClusterSyncStateUnknown = 'cluster.sync.state.unknown'
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
  progress_status?: Maybe<OpenStackCmClusterSyncCompletionProgressStatusEnum | `${OpenStackCmClusterSyncCompletionProgressStatusEnum}`>;
  resource?: Maybe<OpenStackCmClusterServiceSyncObjectCodeEnum | `${OpenStackCmClusterServiceSyncObjectCodeEnum}`>;
};

export type OpenStackCmCompletionInput = {
  progress_status?: InputMaybe<OpenStackCmClusterSyncCompletionProgressStatusEnum | `${OpenStackCmClusterSyncCompletionProgressStatusEnum}`>;
  resource?: InputMaybe<OpenStackCmClusterServiceSyncObjectCodeEnum | `${OpenStackCmClusterServiceSyncObjectCodeEnum}`>;
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
  status?: Maybe<OpenStackCmClusterSyncStateEnum | `${OpenStackCmClusterSyncStateEnum}`>;
};

export type OpenStackCmSyncClusterStatusResponseInput = {
  completion?: InputMaybe<Array<InputMaybe<OpenStackCmCompletionInput>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  progress?: InputMaybe<Scalars['BigInt']['input']>;
  reasons?: InputMaybe<OpenStackCmMessageInput>;
  status?: InputMaybe<OpenStackCmClusterSyncStateEnum | `${OpenStackCmClusterSyncStateEnum}`>;
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
  CheckClusterConnectionStatusInput: CheckClusterConnectionStatusInput;
  CloudTenant: ResolverTypeWrapper<CloudTenant>;
  CloudTenantInput: CloudTenantInput;
  CloudTenantSolution: ResolverTypeWrapper<CloudTenantSolution>;
  CloudTenantSolutionInput: CloudTenantSolutionInput;
  CloudUserGroup: ResolverTypeWrapper<CloudUserGroup>;
  CloudUserGroupInput: CloudUserGroupInput;
  CreateClusterInput: CreateClusterInput;
  DeleteClusterInput: DeleteClusterInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OpenStackCmAvailabilityZoneResponse: ResolverTypeWrapper<OpenStackCmAvailabilityZoneResponse>;
  OpenStackCmAvailabilityZoneResponseAvailabilityZone: ResolverTypeWrapper<OpenStackCmAvailabilityZoneResponseAvailabilityZone>;
  OpenStackCmAvailabilityZoneResponseAvailabilityZoneInput: OpenStackCmAvailabilityZoneResponseAvailabilityZoneInput;
  OpenStackCmAvailabilityZoneResponseInput: OpenStackCmAvailabilityZoneResponseInput;
  OpenStackCmAvailabilityZonesResponse: ResolverTypeWrapper<OpenStackCmAvailabilityZonesResponse>;
  OpenStackCmAvailabilityZonesResponseInput: OpenStackCmAvailabilityZonesResponseInput;
  OpenStackCmCheckClusterInfoResponse: ResolverTypeWrapper<OpenStackCmCheckClusterInfoResponse>;
  OpenStackCmCheckClusterInfoResponseInput: OpenStackCmCheckClusterInfoResponseInput;
  OpenStackCmCluster: ResolverTypeWrapper<OpenStackCmCluster>;
  OpenStackCmClusterAvailabilityZone: ResolverTypeWrapper<OpenStackCmClusterAvailabilityZone>;
  OpenStackCmClusterAvailabilityZoneInput: OpenStackCmClusterAvailabilityZoneInput;
  OpenStackCmClusterConfig: ResolverTypeWrapper<OpenStackCmClusterConfig>;
  OpenStackCmClusterConfigInput: OpenStackCmClusterConfigInput;
  OpenStackCmClusterConnectionInfoRequest: ResolverTypeWrapper<OpenStackCmClusterConnectionInfoRequest>;
  OpenStackCmClusterConnectionInfoRequestInput: OpenStackCmClusterConnectionInfoRequestInput;
  OpenStackCmClusterFloatingIp: ResolverTypeWrapper<OpenStackCmClusterFloatingIp>;
  OpenStackCmClusterFloatingIpInput: OpenStackCmClusterFloatingIpInput;
  OpenStackCmClusterFloatingIpStatusEnum: OpenStackCmClusterFloatingIpStatusEnum;
  OpenStackCmClusterHypervisor: ResolverTypeWrapper<OpenStackCmClusterHypervisor>;
  OpenStackCmClusterHypervisorInput: OpenStackCmClusterHypervisorInput;
  OpenStackCmClusterHypervisorStateEnum: OpenStackCmClusterHypervisorStateEnum;
  OpenStackCmClusterHypervisorStatusEnum: OpenStackCmClusterHypervisorStatusEnum;
  OpenStackCmClusterHypervisorTypeCodeEnum: OpenStackCmClusterHypervisorTypeCodeEnum;
  OpenStackCmClusterInput: OpenStackCmClusterInput;
  OpenStackCmClusterInstance: ResolverTypeWrapper<OpenStackCmClusterInstance>;
  OpenStackCmClusterInstanceExtraSpec: ResolverTypeWrapper<OpenStackCmClusterInstanceExtraSpec>;
  OpenStackCmClusterInstanceExtraSpecInput: OpenStackCmClusterInstanceExtraSpecInput;
  OpenStackCmClusterInstanceExtraSpecKeyEnum: OpenStackCmClusterInstanceExtraSpecKeyEnum;
  OpenStackCmClusterInstanceInput: OpenStackCmClusterInstanceInput;
  OpenStackCmClusterInstanceNetwork: ResolverTypeWrapper<OpenStackCmClusterInstanceNetwork>;
  OpenStackCmClusterInstanceNetworkInput: OpenStackCmClusterInstanceNetworkInput;
  OpenStackCmClusterInstanceSecurityGroup: ResolverTypeWrapper<OpenStackCmClusterInstanceSecurityGroup>;
  OpenStackCmClusterInstanceSecurityGroupInput: OpenStackCmClusterInstanceSecurityGroupInput;
  OpenStackCmClusterInstanceSpec: ResolverTypeWrapper<OpenStackCmClusterInstanceSpec>;
  OpenStackCmClusterInstanceSpecInput: OpenStackCmClusterInstanceSpecInput;
  OpenStackCmClusterInstanceStateEnum: OpenStackCmClusterInstanceStateEnum;
  OpenStackCmClusterInstanceStatusEnum: OpenStackCmClusterInstanceStatusEnum;
  OpenStackCmClusterInstanceVolume: ResolverTypeWrapper<OpenStackCmClusterInstanceVolume>;
  OpenStackCmClusterInstanceVolumeInput: OpenStackCmClusterInstanceVolumeInput;
  OpenStackCmClusterKeyPair: ResolverTypeWrapper<OpenStackCmClusterKeyPair>;
  OpenStackCmClusterKeyPairInput: OpenStackCmClusterKeyPairInput;
  OpenStackCmClusterKeyPairTypeCodeEnum: OpenStackCmClusterKeyPairTypeCodeEnum;
  OpenStackCmClusterNetwork: ResolverTypeWrapper<OpenStackCmClusterNetwork>;
  OpenStackCmClusterNetworkInput: OpenStackCmClusterNetworkInput;
  OpenStackCmClusterNetworkRoutingInterface: ResolverTypeWrapper<OpenStackCmClusterNetworkRoutingInterface>;
  OpenStackCmClusterNetworkRoutingInterfaceInput: OpenStackCmClusterNetworkRoutingInterfaceInput;
  OpenStackCmClusterNetworkStateEnum: OpenStackCmClusterNetworkStateEnum;
  OpenStackCmClusterNetworkStatusEnum: OpenStackCmClusterNetworkStatusEnum;
  OpenStackCmClusterNetworkTypeCodeEnum: OpenStackCmClusterNetworkTypeCodeEnum;
  OpenStackCmClusterPermission: ResolverTypeWrapper<OpenStackCmClusterPermission>;
  OpenStackCmClusterPermissionInput: OpenStackCmClusterPermissionInput;
  OpenStackCmClusterPermissionModeCodeEnum: OpenStackCmClusterPermissionModeCodeEnum;
  OpenStackCmClusterRequest: ResolverTypeWrapper<OpenStackCmClusterRequest>;
  OpenStackCmClusterRequestInput: OpenStackCmClusterRequestInput;
  OpenStackCmClusterResponse: ResolverTypeWrapper<OpenStackCmClusterResponse>;
  OpenStackCmClusterResponseInput: OpenStackCmClusterResponseInput;
  OpenStackCmClusterRouter: ResolverTypeWrapper<OpenStackCmClusterRouter>;
  OpenStackCmClusterRouterExtraRoute: ResolverTypeWrapper<OpenStackCmClusterRouterExtraRoute>;
  OpenStackCmClusterRouterExtraRouteInput: OpenStackCmClusterRouterExtraRouteInput;
  OpenStackCmClusterRouterInput: OpenStackCmClusterRouterInput;
  OpenStackCmClusterRouterStateEnum: OpenStackCmClusterRouterStateEnum;
  OpenStackCmClusterRouterStatusEnum: OpenStackCmClusterRouterStatusEnum;
  OpenStackCmClusterSecurityGroup: ResolverTypeWrapper<OpenStackCmClusterSecurityGroup>;
  OpenStackCmClusterSecurityGroupInput: OpenStackCmClusterSecurityGroupInput;
  OpenStackCmClusterSecurityGroupRule: ResolverTypeWrapper<OpenStackCmClusterSecurityGroupRule>;
  OpenStackCmClusterSecurityGroupRuleDirectionEnum: OpenStackCmClusterSecurityGroupRuleDirectionEnum;
  OpenStackCmClusterSecurityGroupRuleEtherTypeEnum: OpenStackCmClusterSecurityGroupRuleEtherTypeEnum;
  OpenStackCmClusterSecurityGroupRuleInput: OpenStackCmClusterSecurityGroupRuleInput;
  OpenStackCmClusterServiceSyncObjectCodeEnum: OpenStackCmClusterServiceSyncObjectCodeEnum;
  OpenStackCmClusterStateCodeEnum: OpenStackCmClusterStateCodeEnum;
  OpenStackCmClusterStorage: ResolverTypeWrapper<OpenStackCmClusterStorage>;
  OpenStackCmClusterStorageInput: OpenStackCmClusterStorageInput;
  OpenStackCmClusterStorageStatusEnum: OpenStackCmClusterStorageStatusEnum;
  OpenStackCmClusterStorageTypeCodeEnum: OpenStackCmClusterStorageTypeCodeEnum;
  OpenStackCmClusterSubnet: ResolverTypeWrapper<OpenStackCmClusterSubnet>;
  OpenStackCmClusterSubnetDhcpPool: ResolverTypeWrapper<OpenStackCmClusterSubnetDhcpPool>;
  OpenStackCmClusterSubnetDhcpPoolInput: OpenStackCmClusterSubnetDhcpPoolInput;
  OpenStackCmClusterSubnetInput: OpenStackCmClusterSubnetInput;
  OpenStackCmClusterSubnetIpv6AddressModeCodeEnum: OpenStackCmClusterSubnetIpv6AddressModeCodeEnum;
  OpenStackCmClusterSubnetIpv6RaModeCodeEnum: OpenStackCmClusterSubnetIpv6RaModeCodeEnum;
  OpenStackCmClusterSubnetNameserver: ResolverTypeWrapper<OpenStackCmClusterSubnetNameserver>;
  OpenStackCmClusterSubnetNameserverInput: OpenStackCmClusterSubnetNameserverInput;
  OpenStackCmClusterSyncCompletionProgressStatusEnum: OpenStackCmClusterSyncCompletionProgressStatusEnum;
  OpenStackCmClusterSyncStateEnum: OpenStackCmClusterSyncStateEnum;
  OpenStackCmClusterTenant: ResolverTypeWrapper<OpenStackCmClusterTenant>;
  OpenStackCmClusterTenantInput: OpenStackCmClusterTenantInput;
  OpenStackCmClusterTenantQuota: ResolverTypeWrapper<OpenStackCmClusterTenantQuota>;
  OpenStackCmClusterTenantQuotaInput: OpenStackCmClusterTenantQuotaInput;
  OpenStackCmClusterTypeCodeEnum: OpenStackCmClusterTypeCodeEnum;
  OpenStackCmClusterVolume: ResolverTypeWrapper<OpenStackCmClusterVolume>;
  OpenStackCmClusterVolumeInput: OpenStackCmClusterVolumeInput;
  OpenStackCmClusterVolumeSnapshot: ResolverTypeWrapper<OpenStackCmClusterVolumeSnapshot>;
  OpenStackCmClusterVolumeSnapshotInput: OpenStackCmClusterVolumeSnapshotInput;
  OpenStackCmClusterVolumeSnapshotStatusEnum: OpenStackCmClusterVolumeSnapshotStatusEnum;
  OpenStackCmClusterVolumeStatusEnum: OpenStackCmClusterVolumeStatusEnum;
  OpenStackCmClustersResponse: ResolverTypeWrapper<OpenStackCmClustersResponse>;
  OpenStackCmClustersResponseInput: OpenStackCmClustersResponseInput;
  OpenStackCmCompletion: ResolverTypeWrapper<OpenStackCmCompletion>;
  OpenStackCmCompletionInput: OpenStackCmCompletionInput;
  OpenStackCmCompute: ResolverTypeWrapper<OpenStackCmCompute>;
  OpenStackCmComputeInput: OpenStackCmComputeInput;
  OpenStackCmConfigInfoRequest: ResolverTypeWrapper<OpenStackCmConfigInfoRequest>;
  OpenStackCmConfigInfoRequestInput: OpenStackCmConfigInfoRequestInput;
  OpenStackCmConfigInfoResponse: ResolverTypeWrapper<OpenStackCmConfigInfoResponse>;
  OpenStackCmConfigInfoResponseInput: OpenStackCmConfigInfoResponseInput;
  OpenStackCmCredentialRequest: ResolverTypeWrapper<OpenStackCmCredentialRequest>;
  OpenStackCmCredentialRequestInput: OpenStackCmCredentialRequestInput;
  OpenStackCmFloatingIpResponse: ResolverTypeWrapper<OpenStackCmFloatingIpResponse>;
  OpenStackCmFloatingIpResponseInput: OpenStackCmFloatingIpResponseInput;
  OpenStackCmHypervisorRequest: ResolverTypeWrapper<OpenStackCmHypervisorRequest>;
  OpenStackCmHypervisorRequestInput: OpenStackCmHypervisorRequestInput;
  OpenStackCmHypervisorResponse: ResolverTypeWrapper<OpenStackCmHypervisorResponse>;
  OpenStackCmHypervisorResponseInput: OpenStackCmHypervisorResponseInput;
  OpenStackCmHypervisorsResponse: ResolverTypeWrapper<OpenStackCmHypervisorsResponse>;
  OpenStackCmHypervisorsResponseInput: OpenStackCmHypervisorsResponseInput;
  OpenStackCmInstanceResponse: ResolverTypeWrapper<OpenStackCmInstanceResponse>;
  OpenStackCmInstanceResponseInput: OpenStackCmInstanceResponseInput;
  OpenStackCmInstanceSpecResponse: ResolverTypeWrapper<OpenStackCmInstanceSpecResponse>;
  OpenStackCmInstanceSpecResponseInput: OpenStackCmInstanceSpecResponseInput;
  OpenStackCmInstanceSpecsResponse: ResolverTypeWrapper<OpenStackCmInstanceSpecsResponse>;
  OpenStackCmInstanceSpecsResponseInput: OpenStackCmInstanceSpecsResponseInput;
  OpenStackCmInstancesResponse: ResolverTypeWrapper<OpenStackCmInstancesResponse>;
  OpenStackCmInstancesResponseInput: OpenStackCmInstancesResponseInput;
  OpenStackCmKeyPairResponse: ResolverTypeWrapper<OpenStackCmKeyPairResponse>;
  OpenStackCmKeyPairResponseInput: OpenStackCmKeyPairResponseInput;
  OpenStackCmMessage: ResolverTypeWrapper<OpenStackCmMessage>;
  OpenStackCmMessageInput: OpenStackCmMessageInput;
  OpenStackCmMessageResponse: ResolverTypeWrapper<OpenStackCmMessageResponse>;
  OpenStackCmMessageResponseInput: OpenStackCmMessageResponseInput;
  OpenStackCmMetadata: ResolverTypeWrapper<OpenStackCmMetadata>;
  OpenStackCmMetadataInput: OpenStackCmMetadataInput;
  OpenStackCmMetadataRequest: ResolverTypeWrapper<OpenStackCmMetadataRequest>;
  OpenStackCmMetadataRequestInput: OpenStackCmMetadataRequestInput;
  OpenStackCmMetadataResponse: ResolverTypeWrapper<OpenStackCmMetadataResponse>;
  OpenStackCmMetadataResponseInput: OpenStackCmMetadataResponseInput;
  OpenStackCmNetwork: ResolverTypeWrapper<OpenStackCmNetwork>;
  OpenStackCmNetworkInput: OpenStackCmNetworkInput;
  OpenStackCmNetworkResponse: ResolverTypeWrapper<OpenStackCmNetworkResponse>;
  OpenStackCmNetworkResponseInput: OpenStackCmNetworkResponseInput;
  OpenStackCmNetworksResponse: ResolverTypeWrapper<OpenStackCmNetworksResponse>;
  OpenStackCmNetworksResponseInput: OpenStackCmNetworksResponseInput;
  OpenStackCmPagination: ResolverTypeWrapper<OpenStackCmPagination>;
  OpenStackCmPaginationInput: OpenStackCmPaginationInput;
  OpenStackCmPublicKeyResponse: ResolverTypeWrapper<OpenStackCmPublicKeyResponse>;
  OpenStackCmPublicKeyResponseInput: OpenStackCmPublicKeyResponseInput;
  OpenStackCmRouterResponse: ResolverTypeWrapper<OpenStackCmRouterResponse>;
  OpenStackCmRouterResponseInput: OpenStackCmRouterResponseInput;
  OpenStackCmRoutersResponse: ResolverTypeWrapper<OpenStackCmRoutersResponse>;
  OpenStackCmRoutersResponseInput: OpenStackCmRoutersResponseInput;
  OpenStackCmSecurityGroupResponse: ResolverTypeWrapper<OpenStackCmSecurityGroupResponse>;
  OpenStackCmSecurityGroupResponseInput: OpenStackCmSecurityGroupResponseInput;
  OpenStackCmSecurityGroupResponseSecurityGroup: ResolverTypeWrapper<OpenStackCmSecurityGroupResponseSecurityGroup>;
  OpenStackCmSecurityGroupResponseSecurityGroupInput: OpenStackCmSecurityGroupResponseSecurityGroupInput;
  OpenStackCmSecurityGroupsResponse: ResolverTypeWrapper<OpenStackCmSecurityGroupsResponse>;
  OpenStackCmSecurityGroupsResponseInput: OpenStackCmSecurityGroupsResponseInput;
  OpenStackCmStorage: ResolverTypeWrapper<OpenStackCmStorage>;
  OpenStackCmStorageInput: OpenStackCmStorageInput;
  OpenStackCmStorageResponse: ResolverTypeWrapper<OpenStackCmStorageResponse>;
  OpenStackCmStorageResponseInput: OpenStackCmStorageResponseInput;
  OpenStackCmStoragesResponse: ResolverTypeWrapper<OpenStackCmStoragesResponse>;
  OpenStackCmStoragesResponseInput: OpenStackCmStoragesResponseInput;
  OpenStackCmSubnetResponse: ResolverTypeWrapper<OpenStackCmSubnetResponse>;
  OpenStackCmSubnetResponseInput: OpenStackCmSubnetResponseInput;
  OpenStackCmSyncClusterStatusResponse: ResolverTypeWrapper<OpenStackCmSyncClusterStatusResponse>;
  OpenStackCmSyncClusterStatusResponseInput: OpenStackCmSyncClusterStatusResponseInput;
  OpenStackCmSyncExceptionInfoRequest: ResolverTypeWrapper<OpenStackCmSyncExceptionInfoRequest>;
  OpenStackCmSyncExceptionInfoRequestInput: OpenStackCmSyncExceptionInfoRequestInput;
  OpenStackCmTenantResponse: ResolverTypeWrapper<OpenStackCmTenantResponse>;
  OpenStackCmTenantResponseInput: OpenStackCmTenantResponseInput;
  OpenStackCmTenantsResponse: ResolverTypeWrapper<OpenStackCmTenantsResponse>;
  OpenStackCmTenantsResponseInput: OpenStackCmTenantsResponseInput;
  OpenStackCmUserScriptRequest: ResolverTypeWrapper<OpenStackCmUserScriptRequest>;
  OpenStackCmUserScriptRequestInput: OpenStackCmUserScriptRequestInput;
  OpenStackCmUserScriptResponse: ResolverTypeWrapper<OpenStackCmUserScriptResponse>;
  OpenStackCmUserScriptResponseInput: OpenStackCmUserScriptResponseInput;
  OpenStackCmVolumeResponse: ResolverTypeWrapper<OpenStackCmVolumeResponse>;
  OpenStackCmVolumeResponseInput: OpenStackCmVolumeResponseInput;
  OpenStackCmVolumesResponse: ResolverTypeWrapper<OpenStackCmVolumesResponse>;
  OpenStackCmVolumesResponseInput: OpenStackCmVolumesResponseInput;
  PutHypervisorInput: PutHypervisorInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateClusterInput: UpdateClusterInput;
  UpdateClusterSyncExceptionInput: UpdateClusterSyncExceptionInput;
  UpdateClusterSyncInput: UpdateClusterSyncInput;
  UpdateConfigInput: UpdateConfigInput;
  UpdateCrendentialInput: UpdateCrendentialInput;
  UpdateMetadataInput: UpdateMetadataInput;
  UpdateUserscriptInput: UpdateUserscriptInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  CheckClusterConnectionStatusInput: CheckClusterConnectionStatusInput;
  CloudTenant: CloudTenant;
  CloudTenantInput: CloudTenantInput;
  CloudTenantSolution: CloudTenantSolution;
  CloudTenantSolutionInput: CloudTenantSolutionInput;
  CloudUserGroup: CloudUserGroup;
  CloudUserGroupInput: CloudUserGroupInput;
  CreateClusterInput: CreateClusterInput;
  DeleteClusterInput: DeleteClusterInput;
  JSONObject: Scalars['JSONObject']['output'];
  Mutation: {};
  OpenStackCmAvailabilityZoneResponse: OpenStackCmAvailabilityZoneResponse;
  OpenStackCmAvailabilityZoneResponseAvailabilityZone: OpenStackCmAvailabilityZoneResponseAvailabilityZone;
  OpenStackCmAvailabilityZoneResponseAvailabilityZoneInput: OpenStackCmAvailabilityZoneResponseAvailabilityZoneInput;
  OpenStackCmAvailabilityZoneResponseInput: OpenStackCmAvailabilityZoneResponseInput;
  OpenStackCmAvailabilityZonesResponse: OpenStackCmAvailabilityZonesResponse;
  OpenStackCmAvailabilityZonesResponseInput: OpenStackCmAvailabilityZonesResponseInput;
  OpenStackCmCheckClusterInfoResponse: OpenStackCmCheckClusterInfoResponse;
  OpenStackCmCheckClusterInfoResponseInput: OpenStackCmCheckClusterInfoResponseInput;
  OpenStackCmCluster: OpenStackCmCluster;
  OpenStackCmClusterAvailabilityZone: OpenStackCmClusterAvailabilityZone;
  OpenStackCmClusterAvailabilityZoneInput: OpenStackCmClusterAvailabilityZoneInput;
  OpenStackCmClusterConfig: OpenStackCmClusterConfig;
  OpenStackCmClusterConfigInput: OpenStackCmClusterConfigInput;
  OpenStackCmClusterConnectionInfoRequest: OpenStackCmClusterConnectionInfoRequest;
  OpenStackCmClusterConnectionInfoRequestInput: OpenStackCmClusterConnectionInfoRequestInput;
  OpenStackCmClusterFloatingIp: OpenStackCmClusterFloatingIp;
  OpenStackCmClusterFloatingIpInput: OpenStackCmClusterFloatingIpInput;
  OpenStackCmClusterHypervisor: OpenStackCmClusterHypervisor;
  OpenStackCmClusterHypervisorInput: OpenStackCmClusterHypervisorInput;
  OpenStackCmClusterInput: OpenStackCmClusterInput;
  OpenStackCmClusterInstance: OpenStackCmClusterInstance;
  OpenStackCmClusterInstanceExtraSpec: OpenStackCmClusterInstanceExtraSpec;
  OpenStackCmClusterInstanceExtraSpecInput: OpenStackCmClusterInstanceExtraSpecInput;
  OpenStackCmClusterInstanceInput: OpenStackCmClusterInstanceInput;
  OpenStackCmClusterInstanceNetwork: OpenStackCmClusterInstanceNetwork;
  OpenStackCmClusterInstanceNetworkInput: OpenStackCmClusterInstanceNetworkInput;
  OpenStackCmClusterInstanceSecurityGroup: OpenStackCmClusterInstanceSecurityGroup;
  OpenStackCmClusterInstanceSecurityGroupInput: OpenStackCmClusterInstanceSecurityGroupInput;
  OpenStackCmClusterInstanceSpec: OpenStackCmClusterInstanceSpec;
  OpenStackCmClusterInstanceSpecInput: OpenStackCmClusterInstanceSpecInput;
  OpenStackCmClusterInstanceVolume: OpenStackCmClusterInstanceVolume;
  OpenStackCmClusterInstanceVolumeInput: OpenStackCmClusterInstanceVolumeInput;
  OpenStackCmClusterKeyPair: OpenStackCmClusterKeyPair;
  OpenStackCmClusterKeyPairInput: OpenStackCmClusterKeyPairInput;
  OpenStackCmClusterNetwork: OpenStackCmClusterNetwork;
  OpenStackCmClusterNetworkInput: OpenStackCmClusterNetworkInput;
  OpenStackCmClusterNetworkRoutingInterface: OpenStackCmClusterNetworkRoutingInterface;
  OpenStackCmClusterNetworkRoutingInterfaceInput: OpenStackCmClusterNetworkRoutingInterfaceInput;
  OpenStackCmClusterPermission: OpenStackCmClusterPermission;
  OpenStackCmClusterPermissionInput: OpenStackCmClusterPermissionInput;
  OpenStackCmClusterRequest: OpenStackCmClusterRequest;
  OpenStackCmClusterRequestInput: OpenStackCmClusterRequestInput;
  OpenStackCmClusterResponse: OpenStackCmClusterResponse;
  OpenStackCmClusterResponseInput: OpenStackCmClusterResponseInput;
  OpenStackCmClusterRouter: OpenStackCmClusterRouter;
  OpenStackCmClusterRouterExtraRoute: OpenStackCmClusterRouterExtraRoute;
  OpenStackCmClusterRouterExtraRouteInput: OpenStackCmClusterRouterExtraRouteInput;
  OpenStackCmClusterRouterInput: OpenStackCmClusterRouterInput;
  OpenStackCmClusterSecurityGroup: OpenStackCmClusterSecurityGroup;
  OpenStackCmClusterSecurityGroupInput: OpenStackCmClusterSecurityGroupInput;
  OpenStackCmClusterSecurityGroupRule: OpenStackCmClusterSecurityGroupRule;
  OpenStackCmClusterSecurityGroupRuleInput: OpenStackCmClusterSecurityGroupRuleInput;
  OpenStackCmClusterStorage: OpenStackCmClusterStorage;
  OpenStackCmClusterStorageInput: OpenStackCmClusterStorageInput;
  OpenStackCmClusterSubnet: OpenStackCmClusterSubnet;
  OpenStackCmClusterSubnetDhcpPool: OpenStackCmClusterSubnetDhcpPool;
  OpenStackCmClusterSubnetDhcpPoolInput: OpenStackCmClusterSubnetDhcpPoolInput;
  OpenStackCmClusterSubnetInput: OpenStackCmClusterSubnetInput;
  OpenStackCmClusterSubnetNameserver: OpenStackCmClusterSubnetNameserver;
  OpenStackCmClusterSubnetNameserverInput: OpenStackCmClusterSubnetNameserverInput;
  OpenStackCmClusterTenant: OpenStackCmClusterTenant;
  OpenStackCmClusterTenantInput: OpenStackCmClusterTenantInput;
  OpenStackCmClusterTenantQuota: OpenStackCmClusterTenantQuota;
  OpenStackCmClusterTenantQuotaInput: OpenStackCmClusterTenantQuotaInput;
  OpenStackCmClusterVolume: OpenStackCmClusterVolume;
  OpenStackCmClusterVolumeInput: OpenStackCmClusterVolumeInput;
  OpenStackCmClusterVolumeSnapshot: OpenStackCmClusterVolumeSnapshot;
  OpenStackCmClusterVolumeSnapshotInput: OpenStackCmClusterVolumeSnapshotInput;
  OpenStackCmClustersResponse: OpenStackCmClustersResponse;
  OpenStackCmClustersResponseInput: OpenStackCmClustersResponseInput;
  OpenStackCmCompletion: OpenStackCmCompletion;
  OpenStackCmCompletionInput: OpenStackCmCompletionInput;
  OpenStackCmCompute: OpenStackCmCompute;
  OpenStackCmComputeInput: OpenStackCmComputeInput;
  OpenStackCmConfigInfoRequest: OpenStackCmConfigInfoRequest;
  OpenStackCmConfigInfoRequestInput: OpenStackCmConfigInfoRequestInput;
  OpenStackCmConfigInfoResponse: OpenStackCmConfigInfoResponse;
  OpenStackCmConfigInfoResponseInput: OpenStackCmConfigInfoResponseInput;
  OpenStackCmCredentialRequest: OpenStackCmCredentialRequest;
  OpenStackCmCredentialRequestInput: OpenStackCmCredentialRequestInput;
  OpenStackCmFloatingIpResponse: OpenStackCmFloatingIpResponse;
  OpenStackCmFloatingIpResponseInput: OpenStackCmFloatingIpResponseInput;
  OpenStackCmHypervisorRequest: OpenStackCmHypervisorRequest;
  OpenStackCmHypervisorRequestInput: OpenStackCmHypervisorRequestInput;
  OpenStackCmHypervisorResponse: OpenStackCmHypervisorResponse;
  OpenStackCmHypervisorResponseInput: OpenStackCmHypervisorResponseInput;
  OpenStackCmHypervisorsResponse: OpenStackCmHypervisorsResponse;
  OpenStackCmHypervisorsResponseInput: OpenStackCmHypervisorsResponseInput;
  OpenStackCmInstanceResponse: OpenStackCmInstanceResponse;
  OpenStackCmInstanceResponseInput: OpenStackCmInstanceResponseInput;
  OpenStackCmInstanceSpecResponse: OpenStackCmInstanceSpecResponse;
  OpenStackCmInstanceSpecResponseInput: OpenStackCmInstanceSpecResponseInput;
  OpenStackCmInstanceSpecsResponse: OpenStackCmInstanceSpecsResponse;
  OpenStackCmInstanceSpecsResponseInput: OpenStackCmInstanceSpecsResponseInput;
  OpenStackCmInstancesResponse: OpenStackCmInstancesResponse;
  OpenStackCmInstancesResponseInput: OpenStackCmInstancesResponseInput;
  OpenStackCmKeyPairResponse: OpenStackCmKeyPairResponse;
  OpenStackCmKeyPairResponseInput: OpenStackCmKeyPairResponseInput;
  OpenStackCmMessage: OpenStackCmMessage;
  OpenStackCmMessageInput: OpenStackCmMessageInput;
  OpenStackCmMessageResponse: OpenStackCmMessageResponse;
  OpenStackCmMessageResponseInput: OpenStackCmMessageResponseInput;
  OpenStackCmMetadata: OpenStackCmMetadata;
  OpenStackCmMetadataInput: OpenStackCmMetadataInput;
  OpenStackCmMetadataRequest: OpenStackCmMetadataRequest;
  OpenStackCmMetadataRequestInput: OpenStackCmMetadataRequestInput;
  OpenStackCmMetadataResponse: OpenStackCmMetadataResponse;
  OpenStackCmMetadataResponseInput: OpenStackCmMetadataResponseInput;
  OpenStackCmNetwork: OpenStackCmNetwork;
  OpenStackCmNetworkInput: OpenStackCmNetworkInput;
  OpenStackCmNetworkResponse: OpenStackCmNetworkResponse;
  OpenStackCmNetworkResponseInput: OpenStackCmNetworkResponseInput;
  OpenStackCmNetworksResponse: OpenStackCmNetworksResponse;
  OpenStackCmNetworksResponseInput: OpenStackCmNetworksResponseInput;
  OpenStackCmPagination: OpenStackCmPagination;
  OpenStackCmPaginationInput: OpenStackCmPaginationInput;
  OpenStackCmPublicKeyResponse: OpenStackCmPublicKeyResponse;
  OpenStackCmPublicKeyResponseInput: OpenStackCmPublicKeyResponseInput;
  OpenStackCmRouterResponse: OpenStackCmRouterResponse;
  OpenStackCmRouterResponseInput: OpenStackCmRouterResponseInput;
  OpenStackCmRoutersResponse: OpenStackCmRoutersResponse;
  OpenStackCmRoutersResponseInput: OpenStackCmRoutersResponseInput;
  OpenStackCmSecurityGroupResponse: OpenStackCmSecurityGroupResponse;
  OpenStackCmSecurityGroupResponseInput: OpenStackCmSecurityGroupResponseInput;
  OpenStackCmSecurityGroupResponseSecurityGroup: OpenStackCmSecurityGroupResponseSecurityGroup;
  OpenStackCmSecurityGroupResponseSecurityGroupInput: OpenStackCmSecurityGroupResponseSecurityGroupInput;
  OpenStackCmSecurityGroupsResponse: OpenStackCmSecurityGroupsResponse;
  OpenStackCmSecurityGroupsResponseInput: OpenStackCmSecurityGroupsResponseInput;
  OpenStackCmStorage: OpenStackCmStorage;
  OpenStackCmStorageInput: OpenStackCmStorageInput;
  OpenStackCmStorageResponse: OpenStackCmStorageResponse;
  OpenStackCmStorageResponseInput: OpenStackCmStorageResponseInput;
  OpenStackCmStoragesResponse: OpenStackCmStoragesResponse;
  OpenStackCmStoragesResponseInput: OpenStackCmStoragesResponseInput;
  OpenStackCmSubnetResponse: OpenStackCmSubnetResponse;
  OpenStackCmSubnetResponseInput: OpenStackCmSubnetResponseInput;
  OpenStackCmSyncClusterStatusResponse: OpenStackCmSyncClusterStatusResponse;
  OpenStackCmSyncClusterStatusResponseInput: OpenStackCmSyncClusterStatusResponseInput;
  OpenStackCmSyncExceptionInfoRequest: OpenStackCmSyncExceptionInfoRequest;
  OpenStackCmSyncExceptionInfoRequestInput: OpenStackCmSyncExceptionInfoRequestInput;
  OpenStackCmTenantResponse: OpenStackCmTenantResponse;
  OpenStackCmTenantResponseInput: OpenStackCmTenantResponseInput;
  OpenStackCmTenantsResponse: OpenStackCmTenantsResponse;
  OpenStackCmTenantsResponseInput: OpenStackCmTenantsResponseInput;
  OpenStackCmUserScriptRequest: OpenStackCmUserScriptRequest;
  OpenStackCmUserScriptRequestInput: OpenStackCmUserScriptRequestInput;
  OpenStackCmUserScriptResponse: OpenStackCmUserScriptResponse;
  OpenStackCmUserScriptResponseInput: OpenStackCmUserScriptResponseInput;
  OpenStackCmVolumeResponse: OpenStackCmVolumeResponse;
  OpenStackCmVolumeResponseInput: OpenStackCmVolumeResponseInput;
  OpenStackCmVolumesResponse: OpenStackCmVolumesResponse;
  OpenStackCmVolumesResponseInput: OpenStackCmVolumesResponseInput;
  PutHypervisorInput: PutHypervisorInput;
  Query: {};
  String: Scalars['String']['output'];
  UpdateClusterInput: UpdateClusterInput;
  UpdateClusterSyncExceptionInput: UpdateClusterSyncExceptionInput;
  UpdateClusterSyncInput: UpdateClusterSyncInput;
  UpdateConfigInput: UpdateConfigInput;
  UpdateCrendentialInput: UpdateCrendentialInput;
  UpdateMetadataInput: UpdateMetadataInput;
  UpdateUserscriptInput: UpdateUserscriptInput;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

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

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CheckClusterConnectionStatus?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationCheckClusterConnectionStatusArgs>>;
  CreateCluster?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterResponse']>, ParentType, ContextType, Partial<MutationCreateClusterArgs>>;
  DeleteCluster?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationDeleteClusterArgs>>;
  PutHypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmHypervisorResponse']>, ParentType, ContextType, Partial<MutationPutHypervisorArgs>>;
  UpdateCluster?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterResponse']>, ParentType, ContextType, Partial<MutationUpdateClusterArgs>>;
  UpdateClusterSync?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationUpdateClusterSyncArgs>>;
  UpdateClusterSyncException?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationUpdateClusterSyncExceptionArgs>>;
  UpdateConfig?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationUpdateConfigArgs>>;
  UpdateCrendential?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationUpdateCrendentialArgs>>;
  UpdateMetadata?: Resolver<Maybe<ResolversTypes['OpenStackCmMetadataResponse']>, ParentType, ContextType, Partial<MutationUpdateMetadataArgs>>;
  UpdateUserscript?: Resolver<Maybe<ResolversTypes['OpenStackCmMessageResponse']>, ParentType, ContextType, Partial<MutationUpdateUserscriptArgs>>;
}>;

export type OpenStackCmAvailabilityZoneResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmAvailabilityZoneResponse'] = ResolversParentTypes['OpenStackCmAvailabilityZoneResponse']> = ResolversObject<{
  availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackCmAvailabilityZoneResponseAvailabilityZone']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmAvailabilityZoneResponseAvailabilityZoneResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmAvailabilityZoneResponseAvailabilityZone'] = ResolversParentTypes['OpenStackCmAvailabilityZoneResponseAvailabilityZone']> = ResolversObject<{
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  hypervisors?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterHypervisor']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmAvailabilityZonesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmAvailabilityZonesResponse'] = ResolversParentTypes['OpenStackCmAvailabilityZonesResponse']> = ResolversObject<{
  availability_zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterAvailabilityZone']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmCheckClusterInfoResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmCheckClusterInfoResponse'] = ResolversParentTypes['OpenStackCmCheckClusterInfoResponse']> = ResolversObject<{
  compute_error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  computes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmCompute']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  network_error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmNetwork']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStateCodeEnum']>, ParentType, ContextType>;
  storage_error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmStorage']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type OpenStackCmClusterAvailabilityZoneResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterAvailabilityZone'] = ResolversParentTypes['OpenStackCmClusterAvailabilityZone']> = ResolversObject<{
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterConfigResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterConfig'] = ResolversParentTypes['OpenStackCmClusterConfig']> = ResolversObject<{
  reserved_sync_interval?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp_interval?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterConnectionInfoRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterConnectionInfoRequest'] = ResolversParentTypes['OpenStackCmClusterConnectionInfoRequest']> = ResolversObject<{
  api_server_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTypeCodeEnum']>, ParentType, ContextType>;
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

export type OpenStackCmClusterInstanceExtraSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec'] = ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec']> = ResolversObject<{
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

export type OpenStackCmClusterInstanceStateEnumResolvers = { CRASHED: 'CRASHED', NOSTATE: 'NOSTATE', PAUSED: 'PAUSED', RUNNING: 'RUNNING', SHUTDOWN: 'SHUTDOWN', SUSPENDED: 'SUSPENDED' };

export type OpenStackCmClusterInstanceStatusEnumResolvers = { ACTIVE: 'ACTIVE', BUILD: 'BUILD', DELETED: 'DELETED', ERROR: 'ERROR', HARD_REBOOT: 'HARD_REBOOT', MIGRATING: 'MIGRATING', PASSWORD: 'PASSWORD', PAUSED: 'PAUSED', REBOOT: 'REBOOT', REBUILD: 'REBUILD', RESCUE: 'RESCUE', RESIZE: 'RESIZE', REVERT_RESIZE: 'REVERT_RESIZE', SHELVED: 'SHELVED', SHELVED_OFFLOADED: 'SHELVED_OFFLOADED', SHUTOFF: 'SHUTOFF', SOFT_DELETED: 'SOFT_DELETED', SUSPENDED: 'SUSPENDED', UNKNOWN: 'UNKNOWN', VERIFY_RESIZE: 'VERIFY_RESIZE' };

export type OpenStackCmClusterInstanceVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceVolume'] = ResolversParentTypes['OpenStackCmClusterInstanceVolume']> = ResolversObject<{
  boot_index?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  device_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
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

export type OpenStackCmClusterNetworkRoutingInterfaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterNetworkRoutingInterface'] = ResolversParentTypes['OpenStackCmClusterNetworkRoutingInterface']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet']>, ParentType, ContextType>;
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

export type OpenStackCmClusterPermissionModeCodeEnumResolvers = { CLUSTER_PERMISSION_MODE_READONLY: 'cluster.permission.mode.readonly', CLUSTER_PERMISSION_MODE_READWRITE: 'cluster.permission.mode.readwrite' };

export type OpenStackCmClusterRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterRequest'] = ResolversParentTypes['OpenStackCmClusterRequest']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterResponse'] = ResolversParentTypes['OpenStackCmClusterResponse']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

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

export type OpenStackCmClusterSecurityGroupRuleDirectionEnumResolvers = { EGRESS: 'egress', INGRESS: 'ingress' };

export type OpenStackCmClusterSecurityGroupRuleEtherTypeEnumResolvers = { FOUR: '4', SIX: '6' };

export type OpenStackCmClusterServiceSyncObjectCodeEnumResolvers = { CLUSTER_AVAILABILITY_ZONE_LIST_SYNC: 'cluster.availability_zone.list.sync', CLUSTER_HYPERVISOR_LIST_SYNC: 'cluster.hypervisor.list.sync', CLUSTER_INSTANCE_LIST_SYNC: 'cluster.instance.list.sync', CLUSTER_KEYPAIR_LIST_SYNC: 'cluster.keypair.list.sync', CLUSTER_NETWORK_LIST_SYNC: 'cluster.network.list.sync', CLUSTER_ROUTER_LIST_SYNC: 'cluster.router.list.sync', CLUSTER_SECURITY_GROUP_LIST_SYNC: 'cluster.security_group.list.sync', CLUSTER_STORAGE_LIST_SYNC: 'cluster.storage.list.sync', CLUSTER_TENANT_LIST_SYNC: 'cluster.tenant.list.sync', CLUSTER_VOLUME_LIST_SYNC: 'cluster.volume.list.sync', CLUSTER_VOLUME_SNAPSHOT_LIST_SYNC: 'cluster.volume-snapshot.list.sync' };

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

export type OpenStackCmClusterSyncCompletionProgressStatusEnumResolvers = { CLUSTER_SYNC_COMPLETED: 'cluster.sync.completed', CLUSTER_SYNC_FAILED: 'cluster.sync.failed', CLUSTER_SYNC_RUNNING: 'cluster.sync.running', WAITING: 'waiting' };

export type OpenStackCmClusterSyncStateEnumResolvers = { CLUSTER_SYNC_STATE_DONE: 'cluster.sync.state.done', CLUSTER_SYNC_STATE_FAILED: 'cluster.sync.state.failed', CLUSTER_SYNC_STATE_INIT: 'cluster.sync.state.init', CLUSTER_SYNC_STATE_RUNNING: 'cluster.sync.state.running', CLUSTER_SYNC_STATE_UNKNOWN: 'cluster.sync.state.unknown' };

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

export type OpenStackCmClusterVolumeSnapshotStatusEnumResolvers = { AVAILABLE: 'available', CREATING: 'creating', DELETING: 'deleting', ERROR: 'error', ERROR_DELETING: 'error_deleting' };

export type OpenStackCmClusterVolumeStatusEnumResolvers = { ATTACHING: 'attaching', AVAILABLE: 'available', CREATING: 'creating', DELETING: 'deleting', DETACHING: 'detaching', ERROR: 'error', ERROR_DELETING: 'error_deleting', IN_USE: 'in-use', MAINTENANCE: 'maintenance' };

export type OpenStackCmClustersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClustersResponse'] = ResolversParentTypes['OpenStackCmClustersResponse']> = ResolversObject<{
  clusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmCluster']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmCompletionResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmCompletion'] = ResolversParentTypes['OpenStackCmCompletion']> = ResolversObject<{
  progress_status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSyncCompletionProgressStatusEnum']>, ParentType, ContextType>;
  resource?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterServiceSyncObjectCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmComputeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmCompute'] = ResolversParentTypes['OpenStackCmCompute']> = ResolversObject<{
  binary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmConfigInfoRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmConfigInfoRequest'] = ResolversParentTypes['OpenStackCmConfigInfoRequest']> = ResolversObject<{
  config?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmConfigInfoResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmConfigInfoResponse'] = ResolversParentTypes['OpenStackCmConfigInfoResponse']> = ResolversObject<{
  config?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterConfig']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmCredentialRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmCredentialRequest'] = ResolversParentTypes['OpenStackCmCredentialRequest']> = ResolversObject<{
  new_credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  old_credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmFloatingIpResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmFloatingIpResponse'] = ResolversParentTypes['OpenStackCmFloatingIpResponse']> = ResolversObject<{
  floating_ip?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterFloatingIp']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmHypervisorRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmHypervisorRequest'] = ResolversParentTypes['OpenStackCmHypervisorRequest']> = ResolversObject<{
  hypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmHypervisorResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmHypervisorResponse'] = ResolversParentTypes['OpenStackCmHypervisorResponse']> = ResolversObject<{
  hypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterHypervisor']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmHypervisorsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmHypervisorsResponse'] = ResolversParentTypes['OpenStackCmHypervisorsResponse']> = ResolversObject<{
  hypervisors?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterHypervisor']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmInstanceResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmInstanceResponse'] = ResolversParentTypes['OpenStackCmInstanceResponse']> = ResolversObject<{
  instance?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstance']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmInstanceSpecResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmInstanceSpecResponse'] = ResolversParentTypes['OpenStackCmInstanceSpecResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceSpec']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmInstanceSpecsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmInstanceSpecsResponse'] = ResolversParentTypes['OpenStackCmInstanceSpecsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  specs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceSpec']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmInstancesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmInstancesResponse'] = ResolversParentTypes['OpenStackCmInstancesResponse']> = ResolversObject<{
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstance']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmKeyPairResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmKeyPairResponse'] = ResolversParentTypes['OpenStackCmKeyPairResponse']> = ResolversObject<{
  keypair?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterKeyPair']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmMessageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmMessage'] = ResolversParentTypes['OpenStackCmMessage']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmMessageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmMessageResponse'] = ResolversParentTypes['OpenStackCmMessageResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmMetadataResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmMetadata'] = ResolversParentTypes['OpenStackCmMetadata']> = ResolversObject<{
  admin_client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  admin_keyring?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmMetadataRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmMetadataRequest'] = ResolversParentTypes['OpenStackCmMetadataRequest']> = ResolversObject<{
  metadata?: Resolver<Maybe<ResolversTypes['OpenStackCmMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmMetadataResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmMetadataResponse'] = ResolversParentTypes['OpenStackCmMetadataResponse']> = ResolversObject<{
  metadata?: Resolver<Maybe<ResolversTypes['OpenStackCmMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmNetworkResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmNetwork'] = ResolversParentTypes['OpenStackCmNetwork']> = ResolversObject<{
  binary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmNetworkResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmNetworkResponse'] = ResolversParentTypes['OpenStackCmNetworkResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmNetworksResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmNetworksResponse'] = ResolversParentTypes['OpenStackCmNetworksResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterNetwork']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmPaginationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmPagination'] = ResolversParentTypes['OpenStackCmPagination']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_items?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmPublicKeyResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmPublicKeyResponse'] = ResolversParentTypes['OpenStackCmPublicKeyResponse']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmRouterResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmRouterResponse'] = ResolversParentTypes['OpenStackCmRouterResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  router?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterRouter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmRoutersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmRoutersResponse'] = ResolversParentTypes['OpenStackCmRoutersResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterRouter']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmSecurityGroupResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmSecurityGroupResponse'] = ResolversParentTypes['OpenStackCmSecurityGroupResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  security_group?: Resolver<Maybe<ResolversTypes['OpenStackCmSecurityGroupResponseSecurityGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmSecurityGroupResponseSecurityGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmSecurityGroupResponseSecurityGroup'] = ResolversParentTypes['OpenStackCmSecurityGroupResponseSecurityGroup']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenStackCmCluster']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroupRule']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmSecurityGroupsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmSecurityGroupsResponse'] = ResolversParentTypes['OpenStackCmSecurityGroupsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterSecurityGroup']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmStorageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmStorage'] = ResolversParentTypes['OpenStackCmStorage']> = ResolversObject<{
  backend_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  binary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exception?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmStorageResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmStorageResponse'] = ResolversParentTypes['OpenStackCmStorageResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterStorage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmStoragesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmStoragesResponse'] = ResolversParentTypes['OpenStackCmStoragesResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterStorage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmSubnetResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmSubnetResponse'] = ResolversParentTypes['OpenStackCmSubnetResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSubnet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmSyncClusterStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmSyncClusterStatusResponse'] = ResolversParentTypes['OpenStackCmSyncClusterStatusResponse']> = ResolversObject<{
  completion?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmCompletion']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reasons?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterSyncStateEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmSyncExceptionInfoRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmSyncExceptionInfoRequest'] = ResolversParentTypes['OpenStackCmSyncExceptionInfoRequest']> = ResolversObject<{
  computes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmCompute']>>>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmNetwork']>>>, ParentType, ContextType>;
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmStorage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmTenantResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmTenantResponse'] = ResolversParentTypes['OpenStackCmTenantResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmTenantsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmTenantsResponse'] = ResolversParentTypes['OpenStackCmTenantsResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  tenants?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterTenant']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmUserScriptRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmUserScriptRequest'] = ResolversParentTypes['OpenStackCmUserScriptRequest']> = ResolversObject<{
  user_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmUserScriptResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmUserScriptResponse'] = ResolversParentTypes['OpenStackCmUserScriptResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  user_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmVolumeResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmVolumeResponse'] = ResolversParentTypes['OpenStackCmVolumeResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmVolumesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmVolumesResponse'] = ResolversParentTypes['OpenStackCmVolumesResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['OpenStackCmMessage']>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenStackCmPagination']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterVolume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetAvailabilityZones?: Resolver<Maybe<ResolversTypes['OpenStackCmAvailabilityZonesResponse']>, ParentType, ContextType, Partial<QueryGetAvailabilityZonesArgs>>;
  GetAvailabliltyZone?: Resolver<Maybe<ResolversTypes['OpenStackCmAvailabilityZoneResponse']>, ParentType, ContextType, Partial<QueryGetAvailabliltyZoneArgs>>;
  GetCluster?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterResponse']>, ParentType, ContextType, Partial<QueryGetClusterArgs>>;
  GetClusterStatusCheck?: Resolver<Maybe<ResolversTypes['OpenStackCmCheckClusterInfoResponse']>, ParentType, ContextType, Partial<QueryGetClusterStatusCheckArgs>>;
  GetClusterSyncStatus?: Resolver<Maybe<ResolversTypes['OpenStackCmSyncClusterStatusResponse']>, ParentType, ContextType, Partial<QueryGetClusterSyncStatusArgs>>;
  GetClusters?: Resolver<Maybe<ResolversTypes['OpenStackCmClustersResponse']>, ParentType, ContextType, Partial<QueryGetClustersArgs>>;
  GetConfig?: Resolver<Maybe<ResolversTypes['OpenStackCmConfigInfoResponse']>, ParentType, ContextType, Partial<QueryGetConfigArgs>>;
  GetFloatingIp?: Resolver<Maybe<ResolversTypes['OpenStackCmFloatingIpResponse']>, ParentType, ContextType, Partial<QueryGetFloatingIpArgs>>;
  GetHypervisor?: Resolver<Maybe<ResolversTypes['OpenStackCmHypervisorResponse']>, ParentType, ContextType, Partial<QueryGetHypervisorArgs>>;
  GetHypervisors?: Resolver<Maybe<ResolversTypes['OpenStackCmHypervisorsResponse']>, ParentType, ContextType, Partial<QueryGetHypervisorsArgs>>;
  GetInstance?: Resolver<Maybe<ResolversTypes['OpenStackCmInstanceResponse']>, ParentType, ContextType, Partial<QueryGetInstanceArgs>>;
  GetInstanceSpec?: Resolver<Maybe<ResolversTypes['OpenStackCmInstanceSpecResponse']>, ParentType, ContextType, Partial<QueryGetInstanceSpecArgs>>;
  GetInstanceSpecs?: Resolver<Maybe<ResolversTypes['OpenStackCmInstanceSpecsResponse']>, ParentType, ContextType, Partial<QueryGetInstanceSpecsArgs>>;
  GetInstances?: Resolver<Maybe<ResolversTypes['OpenStackCmInstancesResponse']>, ParentType, ContextType, Partial<QueryGetInstancesArgs>>;
  GetKeypair?: Resolver<Maybe<ResolversTypes['OpenStackCmKeyPairResponse']>, ParentType, ContextType, Partial<QueryGetKeypairArgs>>;
  GetNetwork?: Resolver<Maybe<ResolversTypes['OpenStackCmNetworkResponse']>, ParentType, ContextType, Partial<QueryGetNetworkArgs>>;
  GetNetworks?: Resolver<Maybe<ResolversTypes['OpenStackCmNetworksResponse']>, ParentType, ContextType, Partial<QueryGetNetworksArgs>>;
  GetPublickey?: Resolver<Maybe<ResolversTypes['OpenStackCmPublicKeyResponse']>, ParentType, ContextType>;
  GetRouter?: Resolver<Maybe<ResolversTypes['OpenStackCmRouterResponse']>, ParentType, ContextType, Partial<QueryGetRouterArgs>>;
  GetRouters?: Resolver<Maybe<ResolversTypes['OpenStackCmRoutersResponse']>, ParentType, ContextType, Partial<QueryGetRoutersArgs>>;
  GetSecurityGroup?: Resolver<Maybe<ResolversTypes['OpenStackCmSecurityGroupResponse']>, ParentType, ContextType, Partial<QueryGetSecurityGroupArgs>>;
  GetSecurityGroups?: Resolver<Maybe<ResolversTypes['OpenStackCmSecurityGroupsResponse']>, ParentType, ContextType, Partial<QueryGetSecurityGroupsArgs>>;
  GetStorage?: Resolver<Maybe<ResolversTypes['OpenStackCmStorageResponse']>, ParentType, ContextType, Partial<QueryGetStorageArgs>>;
  GetStorages?: Resolver<Maybe<ResolversTypes['OpenStackCmStoragesResponse']>, ParentType, ContextType, Partial<QueryGetStoragesArgs>>;
  GetSubnet?: Resolver<Maybe<ResolversTypes['OpenStackCmSubnetResponse']>, ParentType, ContextType, Partial<QueryGetSubnetArgs>>;
  GetTenant?: Resolver<Maybe<ResolversTypes['OpenStackCmTenantResponse']>, ParentType, ContextType, Partial<QueryGetTenantArgs>>;
  GetTenants?: Resolver<Maybe<ResolversTypes['OpenStackCmTenantsResponse']>, ParentType, ContextType, Partial<QueryGetTenantsArgs>>;
  GetUserscript?: Resolver<Maybe<ResolversTypes['OpenStackCmUserScriptResponse']>, ParentType, ContextType, Partial<QueryGetUserscriptArgs>>;
  GetVolume?: Resolver<Maybe<ResolversTypes['OpenStackCmVolumeResponse']>, ParentType, ContextType, Partial<QueryGetVolumeArgs>>;
  GetVolumes?: Resolver<Maybe<ResolversTypes['OpenStackCmVolumesResponse']>, ParentType, ContextType, Partial<QueryGetVolumesArgs>>;
}>;

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  CloudTenant?: CloudTenantResolvers<ContextType>;
  CloudTenantSolution?: CloudTenantSolutionResolvers<ContextType>;
  CloudUserGroup?: CloudUserGroupResolvers<ContextType>;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OpenStackCmAvailabilityZoneResponse?: OpenStackCmAvailabilityZoneResponseResolvers<ContextType>;
  OpenStackCmAvailabilityZoneResponseAvailabilityZone?: OpenStackCmAvailabilityZoneResponseAvailabilityZoneResolvers<ContextType>;
  OpenStackCmAvailabilityZonesResponse?: OpenStackCmAvailabilityZonesResponseResolvers<ContextType>;
  OpenStackCmCheckClusterInfoResponse?: OpenStackCmCheckClusterInfoResponseResolvers<ContextType>;
  OpenStackCmCluster?: OpenStackCmClusterResolvers<ContextType>;
  OpenStackCmClusterAvailabilityZone?: OpenStackCmClusterAvailabilityZoneResolvers<ContextType>;
  OpenStackCmClusterConfig?: OpenStackCmClusterConfigResolvers<ContextType>;
  OpenStackCmClusterConnectionInfoRequest?: OpenStackCmClusterConnectionInfoRequestResolvers<ContextType>;
  OpenStackCmClusterFloatingIp?: OpenStackCmClusterFloatingIpResolvers<ContextType>;
  OpenStackCmClusterFloatingIpStatusEnum?: OpenStackCmClusterFloatingIpStatusEnumResolvers;
  OpenStackCmClusterHypervisor?: OpenStackCmClusterHypervisorResolvers<ContextType>;
  OpenStackCmClusterHypervisorStateEnum?: OpenStackCmClusterHypervisorStateEnumResolvers;
  OpenStackCmClusterHypervisorStatusEnum?: OpenStackCmClusterHypervisorStatusEnumResolvers;
  OpenStackCmClusterHypervisorTypeCodeEnum?: OpenStackCmClusterHypervisorTypeCodeEnumResolvers;
  OpenStackCmClusterInstance?: OpenStackCmClusterInstanceResolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpec?: OpenStackCmClusterInstanceExtraSpecResolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpecKeyEnum?: OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers;
  OpenStackCmClusterInstanceNetwork?: OpenStackCmClusterInstanceNetworkResolvers<ContextType>;
  OpenStackCmClusterInstanceSecurityGroup?: OpenStackCmClusterInstanceSecurityGroupResolvers<ContextType>;
  OpenStackCmClusterInstanceSpec?: OpenStackCmClusterInstanceSpecResolvers<ContextType>;
  OpenStackCmClusterInstanceStateEnum?: OpenStackCmClusterInstanceStateEnumResolvers;
  OpenStackCmClusterInstanceStatusEnum?: OpenStackCmClusterInstanceStatusEnumResolvers;
  OpenStackCmClusterInstanceVolume?: OpenStackCmClusterInstanceVolumeResolvers<ContextType>;
  OpenStackCmClusterKeyPair?: OpenStackCmClusterKeyPairResolvers<ContextType>;
  OpenStackCmClusterKeyPairTypeCodeEnum?: OpenStackCmClusterKeyPairTypeCodeEnumResolvers;
  OpenStackCmClusterNetwork?: OpenStackCmClusterNetworkResolvers<ContextType>;
  OpenStackCmClusterNetworkRoutingInterface?: OpenStackCmClusterNetworkRoutingInterfaceResolvers<ContextType>;
  OpenStackCmClusterNetworkStateEnum?: OpenStackCmClusterNetworkStateEnumResolvers;
  OpenStackCmClusterNetworkStatusEnum?: OpenStackCmClusterNetworkStatusEnumResolvers;
  OpenStackCmClusterNetworkTypeCodeEnum?: OpenStackCmClusterNetworkTypeCodeEnumResolvers;
  OpenStackCmClusterPermission?: OpenStackCmClusterPermissionResolvers<ContextType>;
  OpenStackCmClusterPermissionModeCodeEnum?: OpenStackCmClusterPermissionModeCodeEnumResolvers;
  OpenStackCmClusterRequest?: OpenStackCmClusterRequestResolvers<ContextType>;
  OpenStackCmClusterResponse?: OpenStackCmClusterResponseResolvers<ContextType>;
  OpenStackCmClusterRouter?: OpenStackCmClusterRouterResolvers<ContextType>;
  OpenStackCmClusterRouterExtraRoute?: OpenStackCmClusterRouterExtraRouteResolvers<ContextType>;
  OpenStackCmClusterRouterStateEnum?: OpenStackCmClusterRouterStateEnumResolvers;
  OpenStackCmClusterRouterStatusEnum?: OpenStackCmClusterRouterStatusEnumResolvers;
  OpenStackCmClusterSecurityGroup?: OpenStackCmClusterSecurityGroupResolvers<ContextType>;
  OpenStackCmClusterSecurityGroupRule?: OpenStackCmClusterSecurityGroupRuleResolvers<ContextType>;
  OpenStackCmClusterSecurityGroupRuleDirectionEnum?: OpenStackCmClusterSecurityGroupRuleDirectionEnumResolvers;
  OpenStackCmClusterSecurityGroupRuleEtherTypeEnum?: OpenStackCmClusterSecurityGroupRuleEtherTypeEnumResolvers;
  OpenStackCmClusterServiceSyncObjectCodeEnum?: OpenStackCmClusterServiceSyncObjectCodeEnumResolvers;
  OpenStackCmClusterStateCodeEnum?: OpenStackCmClusterStateCodeEnumResolvers;
  OpenStackCmClusterStorage?: OpenStackCmClusterStorageResolvers<ContextType>;
  OpenStackCmClusterStorageStatusEnum?: OpenStackCmClusterStorageStatusEnumResolvers;
  OpenStackCmClusterStorageTypeCodeEnum?: OpenStackCmClusterStorageTypeCodeEnumResolvers;
  OpenStackCmClusterSubnet?: OpenStackCmClusterSubnetResolvers<ContextType>;
  OpenStackCmClusterSubnetDhcpPool?: OpenStackCmClusterSubnetDhcpPoolResolvers<ContextType>;
  OpenStackCmClusterSubnetIpv6AddressModeCodeEnum?: OpenStackCmClusterSubnetIpv6AddressModeCodeEnumResolvers;
  OpenStackCmClusterSubnetIpv6RaModeCodeEnum?: OpenStackCmClusterSubnetIpv6RaModeCodeEnumResolvers;
  OpenStackCmClusterSubnetNameserver?: OpenStackCmClusterSubnetNameserverResolvers<ContextType>;
  OpenStackCmClusterSyncCompletionProgressStatusEnum?: OpenStackCmClusterSyncCompletionProgressStatusEnumResolvers;
  OpenStackCmClusterSyncStateEnum?: OpenStackCmClusterSyncStateEnumResolvers;
  OpenStackCmClusterTenant?: OpenStackCmClusterTenantResolvers<ContextType>;
  OpenStackCmClusterTenantQuota?: OpenStackCmClusterTenantQuotaResolvers<ContextType>;
  OpenStackCmClusterTypeCodeEnum?: OpenStackCmClusterTypeCodeEnumResolvers;
  OpenStackCmClusterVolume?: OpenStackCmClusterVolumeResolvers<ContextType>;
  OpenStackCmClusterVolumeSnapshot?: OpenStackCmClusterVolumeSnapshotResolvers<ContextType>;
  OpenStackCmClusterVolumeSnapshotStatusEnum?: OpenStackCmClusterVolumeSnapshotStatusEnumResolvers;
  OpenStackCmClusterVolumeStatusEnum?: OpenStackCmClusterVolumeStatusEnumResolvers;
  OpenStackCmClustersResponse?: OpenStackCmClustersResponseResolvers<ContextType>;
  OpenStackCmCompletion?: OpenStackCmCompletionResolvers<ContextType>;
  OpenStackCmCompute?: OpenStackCmComputeResolvers<ContextType>;
  OpenStackCmConfigInfoRequest?: OpenStackCmConfigInfoRequestResolvers<ContextType>;
  OpenStackCmConfigInfoResponse?: OpenStackCmConfigInfoResponseResolvers<ContextType>;
  OpenStackCmCredentialRequest?: OpenStackCmCredentialRequestResolvers<ContextType>;
  OpenStackCmFloatingIpResponse?: OpenStackCmFloatingIpResponseResolvers<ContextType>;
  OpenStackCmHypervisorRequest?: OpenStackCmHypervisorRequestResolvers<ContextType>;
  OpenStackCmHypervisorResponse?: OpenStackCmHypervisorResponseResolvers<ContextType>;
  OpenStackCmHypervisorsResponse?: OpenStackCmHypervisorsResponseResolvers<ContextType>;
  OpenStackCmInstanceResponse?: OpenStackCmInstanceResponseResolvers<ContextType>;
  OpenStackCmInstanceSpecResponse?: OpenStackCmInstanceSpecResponseResolvers<ContextType>;
  OpenStackCmInstanceSpecsResponse?: OpenStackCmInstanceSpecsResponseResolvers<ContextType>;
  OpenStackCmInstancesResponse?: OpenStackCmInstancesResponseResolvers<ContextType>;
  OpenStackCmKeyPairResponse?: OpenStackCmKeyPairResponseResolvers<ContextType>;
  OpenStackCmMessage?: OpenStackCmMessageResolvers<ContextType>;
  OpenStackCmMessageResponse?: OpenStackCmMessageResponseResolvers<ContextType>;
  OpenStackCmMetadata?: OpenStackCmMetadataResolvers<ContextType>;
  OpenStackCmMetadataRequest?: OpenStackCmMetadataRequestResolvers<ContextType>;
  OpenStackCmMetadataResponse?: OpenStackCmMetadataResponseResolvers<ContextType>;
  OpenStackCmNetwork?: OpenStackCmNetworkResolvers<ContextType>;
  OpenStackCmNetworkResponse?: OpenStackCmNetworkResponseResolvers<ContextType>;
  OpenStackCmNetworksResponse?: OpenStackCmNetworksResponseResolvers<ContextType>;
  OpenStackCmPagination?: OpenStackCmPaginationResolvers<ContextType>;
  OpenStackCmPublicKeyResponse?: OpenStackCmPublicKeyResponseResolvers<ContextType>;
  OpenStackCmRouterResponse?: OpenStackCmRouterResponseResolvers<ContextType>;
  OpenStackCmRoutersResponse?: OpenStackCmRoutersResponseResolvers<ContextType>;
  OpenStackCmSecurityGroupResponse?: OpenStackCmSecurityGroupResponseResolvers<ContextType>;
  OpenStackCmSecurityGroupResponseSecurityGroup?: OpenStackCmSecurityGroupResponseSecurityGroupResolvers<ContextType>;
  OpenStackCmSecurityGroupsResponse?: OpenStackCmSecurityGroupsResponseResolvers<ContextType>;
  OpenStackCmStorage?: OpenStackCmStorageResolvers<ContextType>;
  OpenStackCmStorageResponse?: OpenStackCmStorageResponseResolvers<ContextType>;
  OpenStackCmStoragesResponse?: OpenStackCmStoragesResponseResolvers<ContextType>;
  OpenStackCmSubnetResponse?: OpenStackCmSubnetResponseResolvers<ContextType>;
  OpenStackCmSyncClusterStatusResponse?: OpenStackCmSyncClusterStatusResponseResolvers<ContextType>;
  OpenStackCmSyncExceptionInfoRequest?: OpenStackCmSyncExceptionInfoRequestResolvers<ContextType>;
  OpenStackCmTenantResponse?: OpenStackCmTenantResponseResolvers<ContextType>;
  OpenStackCmTenantsResponse?: OpenStackCmTenantsResponseResolvers<ContextType>;
  OpenStackCmUserScriptRequest?: OpenStackCmUserScriptRequestResolvers<ContextType>;
  OpenStackCmUserScriptResponse?: OpenStackCmUserScriptResponseResolvers<ContextType>;
  OpenStackCmVolumeResponse?: OpenStackCmVolumeResponseResolvers<ContextType>;
  OpenStackCmVolumesResponse?: OpenStackCmVolumesResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

