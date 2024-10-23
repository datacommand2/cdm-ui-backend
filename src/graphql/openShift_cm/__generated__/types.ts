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

export type CheckClusterConnectionInput = {
  openShiftCmConnectionCheckRequest?: InputMaybe<OpenShiftCmConnectionCheckRequestInput>;
};

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

export type CreateClusterInput = {
  openShiftCmClusterRequest?: InputMaybe<OpenShiftCmClusterRequestInput>;
};

export type CreateProtectionGroupInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmProtectionGroupRequest?: InputMaybe<OpenShiftCmProtectionGroupRequestInput>;
};

export type DeleteClusterInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  statusManagerDeletion?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteProtectionGroupInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CheckClusterConnection?: Maybe<Scalars['Boolean']['output']>;
  CreateCluster?: Maybe<OpenShiftCmClusterCreationResponse>;
  CreateProtectionGroup?: Maybe<OpenShiftCmProtectionGroupResponse>;
  DeleteCluster?: Maybe<Scalars['Boolean']['output']>;
  DeleteProtectionGroup?: Maybe<Scalars['Boolean']['output']>;
  PostClusterSync?: Maybe<Scalars['Boolean']['output']>;
  PostStatusManager?: Maybe<OpenShiftCmStatusManagerResponse>;
  UninstallStatusManager?: Maybe<Scalars['Boolean']['output']>;
  UpdateCluster?: Maybe<OpenShiftCmClusterPatchResponse>;
  UpdateCrdController?: Maybe<OpenShiftCmCrdResponse>;
  UpdateFinalizerController?: Maybe<OpenShiftCmFinalizerResponse>;
  UpdateProtectionGroup?: Maybe<OpenShiftCmProtectionGroupResponse>;
  UpdateRegistry?: Maybe<OpenShiftCmRegistryResponse>;
  UpdateSchedulerWorkload?: Maybe<OpenShiftCmSchedulerResponse>;
  UpdateStatusManager?: Maybe<OpenShiftCmStatusManagerResponse>;
  UpdateWorkload?: Maybe<OpenShiftCmWorkloadResponse>;
  VerifyClusterCredential?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCheckClusterConnectionArgs = {
  input?: InputMaybe<CheckClusterConnectionInput>;
};


export type MutationCreateClusterArgs = {
  input?: InputMaybe<CreateClusterInput>;
};


export type MutationCreateProtectionGroupArgs = {
  input?: InputMaybe<CreateProtectionGroupInput>;
};


export type MutationDeleteClusterArgs = {
  input?: InputMaybe<DeleteClusterInput>;
};


export type MutationDeleteProtectionGroupArgs = {
  input?: InputMaybe<DeleteProtectionGroupInput>;
};


export type MutationPostClusterSyncArgs = {
  input?: InputMaybe<PostClusterSyncInput>;
};


export type MutationPostStatusManagerArgs = {
  input?: InputMaybe<PostStatusManagerInput>;
};


export type MutationUninstallStatusManagerArgs = {
  input?: InputMaybe<UninstallStatusManagerInput>;
};


export type MutationUpdateClusterArgs = {
  input?: InputMaybe<UpdateClusterInput>;
};


export type MutationUpdateCrdControllerArgs = {
  input?: InputMaybe<UpdateCrdControllerInput>;
};


export type MutationUpdateFinalizerControllerArgs = {
  input?: InputMaybe<UpdateFinalizerControllerInput>;
};


export type MutationUpdateProtectionGroupArgs = {
  input?: InputMaybe<UpdateProtectionGroupInput>;
};


export type MutationUpdateRegistryArgs = {
  input?: InputMaybe<UpdateRegistryInput>;
};


export type MutationUpdateSchedulerWorkloadArgs = {
  input?: InputMaybe<UpdateSchedulerWorkloadInput>;
};


export type MutationUpdateStatusManagerArgs = {
  input?: InputMaybe<UpdateStatusManagerInput>;
};


export type MutationUpdateWorkloadArgs = {
  input?: InputMaybe<UpdateWorkloadInput>;
};


export type MutationVerifyClusterCredentialArgs = {
  input?: InputMaybe<VerifyClusterCredentialInput>;
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
  type_code?: Maybe<OpenShiftCmClusterTypeCodeEnum>;
  updated_at?: Maybe<Scalars['BigInt']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmClusterCreationResponse = {
  __typename?: 'OpenShiftCmClusterCreationResponse';
  cluster?: Maybe<OpenShiftCmCluster>;
  status_manager?: Maybe<OpenShiftCmStatusManager>;
};

export type OpenShiftCmClusterCreationResponseInput = {
  cluster?: InputMaybe<OpenShiftCmClusterInput>;
  status_manager?: InputMaybe<OpenShiftCmStatusManagerInput>;
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
  type_code?: InputMaybe<OpenShiftCmClusterTypeCodeEnum>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenShiftCmClusterNodeAddressTypeEnum {
  Externaldns = 'EXTERNALDNS',
  Externalip = 'EXTERNALIP',
  Hostname = 'HOSTNAME',
  Internaldns = 'INTERNALDNS',
  Internalip = 'INTERNALIP'
}

export type OpenShiftCmClusterPatchResponse = {
  __typename?: 'OpenShiftCmClusterPatchResponse';
  cluster?: Maybe<OpenShiftCmCluster>;
};

export type OpenShiftCmClusterPatchResponseInput = {
  cluster?: InputMaybe<OpenShiftCmClusterInput>;
};

export type OpenShiftCmClusterRequest = {
  __typename?: 'OpenShiftCmClusterRequest';
  cluster?: Maybe<OpenShiftCmCluster>;
  status_manager?: Maybe<OpenShiftCmStatusManager>;
};

export type OpenShiftCmClusterRequestInput = {
  cluster?: InputMaybe<OpenShiftCmClusterInput>;
  status_manager?: InputMaybe<OpenShiftCmStatusManagerInput>;
};

export enum OpenShiftCmClusterResourceServiceTypeEnum {
  Clusterip = 'CLUSTERIP',
  Externalname = 'EXTERNALNAME',
  Loadbalancer = 'LOADBALANCER',
  Nodeport = 'NODEPORT'
}

export enum OpenShiftCmClusterResourceVolumeTypeEnum {
  AwsElasticBlockStore = 'AWS_ELASTIC_BLOCK_STORE',
  AzureDisk = 'AZURE_DISK',
  AzureFile = 'AZURE_FILE',
  Cephfs = 'CEPHFS',
  Cinder = 'CINDER',
  ConfigMap = 'CONFIG_MAP',
  Csi = 'CSI',
  EmptyDir = 'EMPTY_DIR',
  Ephemeral = 'EPHEMERAL',
  Fc = 'FC',
  FlexVolume = 'FLEX_VOLUME',
  Flocker = 'FLOCKER',
  GcePersistentDisk = 'GCE_PERSISTENT_DISK',
  GitRepo = 'GIT_REPO',
  Glusterfs = 'GLUSTERFS',
  HostPath = 'HOST_PATH',
  Iscsi = 'ISCSI',
  Nfs = 'NFS',
  PersistentVolumeClaim = 'PERSISTENT_VOLUME_CLAIM',
  PhotonPersistentDisk = 'PHOTON_PERSISTENT_DISK',
  PortworxVolume = 'PORTWORX_VOLUME',
  Quobyte = 'QUOBYTE',
  Rbd = 'RBD',
  ScaleIO = 'SCALE_I_O',
  Storageos = 'STORAGEOS',
  VsphereVolume = 'VSPHERE_VOLUME'
}

export type OpenShiftCmClusterResponse = {
  __typename?: 'OpenShiftCmClusterResponse';
  cluster?: Maybe<OpenShiftCmCluster>;
  status_manager?: Maybe<OpenShiftCmStatusManager>;
};

export type OpenShiftCmClusterResponseInput = {
  cluster?: InputMaybe<OpenShiftCmClusterInput>;
  status_manager?: InputMaybe<OpenShiftCmStatusManagerInput>;
};

export enum OpenShiftCmClusterStateCodeEnum {
  ClusterStateActive = 'CLUSTER_STATE_ACTIVE',
  ClusterStateInactive = 'CLUSTER_STATE_INACTIVE',
  ClusterStateUnknown = 'CLUSTER_STATE_UNKNOWN'
}

export type OpenShiftCmClusterStatus = {
  __typename?: 'OpenShiftCmClusterStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterStateCodeEnum>;
};

export type OpenShiftCmClusterStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterStateCodeEnum>;
};

export enum OpenShiftCmClusterSyncStateCodeEnum {
  ClusterSyncStateSynchronized = 'CLUSTER_SYNC_STATE_SYNCHRONIZED',
  ClusterSyncStateSynchronizeFailed = 'CLUSTER_SYNC_STATE_SYNCHRONIZE_FAILED',
  ClusterSyncStateSynchronizing = 'CLUSTER_SYNC_STATE_SYNCHRONIZING',
  ClusterSyncStateUnknown = 'CLUSTER_SYNC_STATE_UNKNOWN'
}

export type OpenShiftCmClusterSyncStatus = {
  __typename?: 'OpenShiftCmClusterSyncStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterSyncStateCodeEnum>;
};

export type OpenShiftCmClusterSyncStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterSyncStateCodeEnum>;
};

export enum OpenShiftCmClusterTypeCodeEnum {
  ClusterTypeKubernetes = 'CLUSTER_TYPE_KUBERNETES',
  ClusterTypeOpenshift = 'CLUSTER_TYPE_OPENSHIFT'
}

export type OpenShiftCmClustersResponse = {
  __typename?: 'OpenShiftCmClustersResponse';
  clusters?: Maybe<Array<Maybe<OpenShiftCmCluster>>>;
  pagination?: Maybe<OpenShiftCmPagination>;
};

export type OpenShiftCmClustersResponseInput = {
  clusters?: InputMaybe<Array<InputMaybe<OpenShiftCmClusterInput>>>;
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
};

export type OpenShiftCmConnectionCheckRequest = {
  __typename?: 'OpenShiftCmConnectionCheckRequest';
  status_manager?: Maybe<OpenShiftCmStatusManager>;
};

export type OpenShiftCmConnectionCheckRequestInput = {
  status_manager?: InputMaybe<OpenShiftCmStatusManagerInput>;
};

export type OpenShiftCmCrd = {
  __typename?: 'OpenShiftCmCrd';
  controller_workloads?: Maybe<Array<Maybe<OpenShiftCmWorkload>>>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmCrdInput = {
  controller_workloads?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadInput>>>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmCrdResponse = {
  __typename?: 'OpenShiftCmCrdResponse';
  custom_resource_definition?: Maybe<OpenShiftCmCrd>;
};

export type OpenShiftCmCrdResponseInput = {
  custom_resource_definition?: InputMaybe<OpenShiftCmCrdInput>;
};

export type OpenShiftCmCrdsResponse = {
  __typename?: 'OpenShiftCmCrdsResponse';
  custom_resource_definitions?: Maybe<Array<Maybe<OpenShiftCmCrd>>>;
  pagination?: Maybe<OpenShiftCmPagination>;
};

export type OpenShiftCmCrdsResponseInput = {
  custom_resource_definitions?: InputMaybe<Array<InputMaybe<OpenShiftCmCrdInput>>>;
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
};

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

export type OpenShiftCmFinalizerRequest = {
  __typename?: 'OpenShiftCmFinalizerRequest';
  finalizer?: Maybe<OpenShiftCmFinalizer>;
};

export type OpenShiftCmFinalizerRequestInput = {
  finalizer?: InputMaybe<OpenShiftCmFinalizerInput>;
};

export type OpenShiftCmFinalizerResponse = {
  __typename?: 'OpenShiftCmFinalizerResponse';
  finalizer?: Maybe<OpenShiftCmFinalizer>;
};

export type OpenShiftCmFinalizerResponseInput = {
  finalizer?: InputMaybe<OpenShiftCmFinalizerInput>;
};

export type OpenShiftCmFinalizersResponse = {
  __typename?: 'OpenShiftCmFinalizersResponse';
  finalizers?: Maybe<Array<Maybe<OpenShiftCmFinalizer>>>;
  pagination?: Maybe<OpenShiftCmPagination>;
};

export type OpenShiftCmFinalizersResponseInput = {
  finalizers?: InputMaybe<Array<InputMaybe<OpenShiftCmFinalizerInput>>>;
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
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

export type OpenShiftCmNamespacesResponse = {
  __typename?: 'OpenShiftCmNamespacesResponse';
  namespaces?: Maybe<Array<Maybe<OpenShiftCmNamespace>>>;
  pagination?: Maybe<OpenShiftCmPagination>;
};

export type OpenShiftCmNamespacesResponseInput = {
  namespaces?: InputMaybe<Array<InputMaybe<OpenShiftCmNamespaceInput>>>;
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
};

export type OpenShiftCmNode = {
  __typename?: 'OpenShiftCmNode';
  addresses?: Maybe<Array<Maybe<OpenShiftCmNodeAddress>>>;
  hostname?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zone?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmNodeAddress = {
  __typename?: 'OpenShiftCmNodeAddress';
  address?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OpenShiftCmClusterNodeAddressTypeEnum>;
};

export type OpenShiftCmNodeAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OpenShiftCmClusterNodeAddressTypeEnum>;
};

export type OpenShiftCmNodeInput = {
  addresses?: InputMaybe<Array<InputMaybe<OpenShiftCmNodeAddressInput>>>;
  hostname?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zone?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmNodesResponse = {
  __typename?: 'OpenShiftCmNodesResponse';
  nodes?: Maybe<Array<Maybe<OpenShiftCmNode>>>;
  pagination?: Maybe<OpenShiftCmPagination>;
};

export type OpenShiftCmNodesResponseInput = {
  nodes?: InputMaybe<Array<InputMaybe<OpenShiftCmNodeInput>>>;
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
};

export type OpenShiftCmPagination = {
  __typename?: 'OpenShiftCmPagination';
  page?: Maybe<Scalars['BigInt']['output']>;
  total_items?: Maybe<Scalars['BigInt']['output']>;
  total_page?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmPaginationInput = {
  page?: InputMaybe<Scalars['BigInt']['input']>;
  total_items?: InputMaybe<Scalars['BigInt']['input']>;
  total_page?: InputMaybe<Scalars['BigInt']['input']>;
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

export type OpenShiftCmPriorityClassesResponse = {
  __typename?: 'OpenShiftCmPriorityClassesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  priority_classes?: Maybe<Array<Maybe<OpenShiftCmPriorityClass>>>;
};

export type OpenShiftCmPriorityClassesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  priority_classes?: InputMaybe<Array<InputMaybe<OpenShiftCmPriorityClassInput>>>;
};

export type OpenShiftCmProtectionGroup = {
  __typename?: 'OpenShiftCmProtectionGroup';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  protection_cluster_id?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective?: Maybe<Scalars['BigInt']['output']>;
  recovery_point_objective_type?: Maybe<OpenShiftCmRecoveryPointObjectiveTypeEnum>;
  recovery_time_objective?: Maybe<Scalars['BigInt']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  target?: Maybe<OpenShiftCmProtectionGroupTargetEnum>;
  target_namespace?: Maybe<Scalars['String']['output']>;
  workloads?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
};

export type OpenShiftCmProtectionGroupInfo = {
  __typename?: 'OpenShiftCmProtectionGroupInfo';
  finalizers?: Maybe<Array<Maybe<OpenShiftCmFinalizer>>>;
  namespaces?: Maybe<Array<Maybe<OpenShiftCmNamespace>>>;
  priority_classes?: Maybe<Array<Maybe<OpenShiftCmPriorityClass>>>;
  readiness_gate_conditions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  registries?: Maybe<Array<Maybe<OpenShiftCmRegistry>>>;
  resource_name?: Maybe<Scalars['String']['output']>;
  resources?: Maybe<Array<Maybe<OpenShiftCmResource>>>;
  runtime_classes?: Maybe<Array<Maybe<OpenShiftCmRuntimeClass>>>;
  schedulers?: Maybe<Array<Maybe<OpenShiftCmScheduler>>>;
  service_accounts?: Maybe<Array<Maybe<OpenShiftCmServiceAccount>>>;
  services?: Maybe<Array<Maybe<OpenShiftCmService>>>;
  volume_snapshots?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshot>>>;
  volumes?: Maybe<Array<Maybe<OpenShiftCmVolume>>>;
  workloads?: Maybe<Array<Maybe<OpenShiftCmWorkload>>>;
};

export type OpenShiftCmProtectionGroupInfoInput = {
  finalizers?: InputMaybe<Array<InputMaybe<OpenShiftCmFinalizerInput>>>;
  namespaces?: InputMaybe<Array<InputMaybe<OpenShiftCmNamespaceInput>>>;
  priority_classes?: InputMaybe<Array<InputMaybe<OpenShiftCmPriorityClassInput>>>;
  readiness_gate_conditions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  registries?: InputMaybe<Array<InputMaybe<OpenShiftCmRegistryInput>>>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  resources?: InputMaybe<Array<InputMaybe<OpenShiftCmResourceInput>>>;
  runtime_classes?: InputMaybe<Array<InputMaybe<OpenShiftCmRuntimeClassInput>>>;
  schedulers?: InputMaybe<Array<InputMaybe<OpenShiftCmSchedulerInput>>>;
  service_accounts?: InputMaybe<Array<InputMaybe<OpenShiftCmServiceAccountInput>>>;
  services?: InputMaybe<Array<InputMaybe<OpenShiftCmServiceInput>>>;
  volume_snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeInput>>>;
  workloads?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadInput>>>;
};

export type OpenShiftCmProtectionGroupInfoResponse = {
  __typename?: 'OpenShiftCmProtectionGroupInfoResponse';
  protection_group_info?: Maybe<OpenShiftCmProtectionGroupInfo>;
};

export type OpenShiftCmProtectionGroupInfoResponseInput = {
  protection_group_info?: InputMaybe<OpenShiftCmProtectionGroupInfoInput>;
};

export type OpenShiftCmProtectionGroupInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_cluster_id?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective?: InputMaybe<Scalars['BigInt']['input']>;
  recovery_point_objective_type?: InputMaybe<OpenShiftCmRecoveryPointObjectiveTypeEnum>;
  recovery_time_objective?: InputMaybe<Scalars['BigInt']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<OpenShiftCmProtectionGroupTargetEnum>;
  target_namespace?: InputMaybe<Scalars['String']['input']>;
  workloads?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type OpenShiftCmProtectionGroupRequest = {
  __typename?: 'OpenShiftCmProtectionGroupRequest';
  protection_group?: Maybe<OpenShiftCmProtectionGroup>;
};

export type OpenShiftCmProtectionGroupRequestInput = {
  protection_group?: InputMaybe<OpenShiftCmProtectionGroupInput>;
};

export type OpenShiftCmProtectionGroupResponse = {
  __typename?: 'OpenShiftCmProtectionGroupResponse';
  protection_cluster?: Maybe<OpenShiftCmCluster>;
  protection_group?: Maybe<OpenShiftCmProtectionGroup>;
};

export type OpenShiftCmProtectionGroupResponseInput = {
  protection_cluster?: InputMaybe<OpenShiftCmClusterInput>;
  protection_group?: InputMaybe<OpenShiftCmProtectionGroupInput>;
};

export enum OpenShiftCmProtectionGroupTargetEnum {
  CdmCmOpenshiftProtectionGroupTargetAnyWorkloads = 'CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_ANY_WORKLOADS',
  CdmCmOpenshiftProtectionGroupTargetClusterWorkload = 'CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_CLUSTER_WORKLOAD',
  CdmCmOpenshiftProtectionGroupTargetNamespaceWorkloads = 'CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_NAMESPACE_WORKLOADS'
}

export type OpenShiftCmProtectionGroupWorkloadsResponse = {
  __typename?: 'OpenShiftCmProtectionGroupWorkloadsResponse';
  protection_group_workloads?: Maybe<Array<Maybe<OpenShiftCmWorkload>>>;
};

export type OpenShiftCmProtectionGroupWorkloadsResponseInput = {
  protection_group_workloads?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadInput>>>;
};

export type OpenShiftCmProtectionGroupsResponse = {
  __typename?: 'OpenShiftCmProtectionGroupsResponse';
  protection_cluster?: Maybe<OpenShiftCmCluster>;
  protection_groups?: Maybe<Array<Maybe<OpenShiftCmProtectionGroup>>>;
};

export type OpenShiftCmProtectionGroupsResponseInput = {
  protection_cluster?: InputMaybe<OpenShiftCmClusterInput>;
  protection_groups?: InputMaybe<Array<InputMaybe<OpenShiftCmProtectionGroupInput>>>;
};

export type OpenShiftCmPublicKeyResponse = {
  __typename?: 'OpenShiftCmPublicKeyResponse';
  key?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmPublicKeyResponseInput = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenShiftCmRecoveryPointObjectiveTypeEnum {
  RecoveryPointObjectiveTypeDay = 'RECOVERY_POINT_OBJECTIVE_TYPE_DAY',
  RecoveryPointObjectiveTypeHour = 'RECOVERY_POINT_OBJECTIVE_TYPE_HOUR',
  RecoveryPointObjectiveTypeMinute = 'RECOVERY_POINT_OBJECTIVE_TYPE_MINUTE'
}

export type OpenShiftCmRegistriesResponse = {
  __typename?: 'OpenShiftCmRegistriesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  registries?: Maybe<Array<Maybe<OpenShiftCmRegistry>>>;
};

export type OpenShiftCmRegistriesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  registries?: InputMaybe<Array<InputMaybe<OpenShiftCmRegistryInput>>>;
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

export type OpenShiftCmRegistryRequest = {
  __typename?: 'OpenShiftCmRegistryRequest';
  registry?: Maybe<OpenShiftCmRegistry>;
};

export type OpenShiftCmRegistryRequestInput = {
  registry?: InputMaybe<OpenShiftCmRegistryInput>;
};

export type OpenShiftCmRegistryResponse = {
  __typename?: 'OpenShiftCmRegistryResponse';
  registry?: Maybe<OpenShiftCmRegistry>;
};

export type OpenShiftCmRegistryResponseInput = {
  registry?: InputMaybe<OpenShiftCmRegistryInput>;
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

export type OpenShiftCmResourceResponse = {
  __typename?: 'OpenShiftCmResourceResponse';
  resource?: Maybe<OpenShiftCmResource>;
};

export type OpenShiftCmResourceResponseInput = {
  resource?: InputMaybe<OpenShiftCmResourceInput>;
};

export type OpenShiftCmResourcesResponse = {
  __typename?: 'OpenShiftCmResourcesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  resources?: Maybe<Array<Maybe<OpenShiftCmResource>>>;
};

export type OpenShiftCmResourcesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  resources?: InputMaybe<Array<InputMaybe<OpenShiftCmResourceInput>>>;
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

export type OpenShiftCmRuntimeClassesResponse = {
  __typename?: 'OpenShiftCmRuntimeClassesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  runtime_classes?: Maybe<Array<Maybe<OpenShiftCmRuntimeClass>>>;
};

export type OpenShiftCmRuntimeClassesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  runtime_classes?: InputMaybe<Array<InputMaybe<OpenShiftCmRuntimeClassInput>>>;
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

export type OpenShiftCmSchedulerRequest = {
  __typename?: 'OpenShiftCmSchedulerRequest';
  scheduler?: Maybe<OpenShiftCmScheduler>;
};

export type OpenShiftCmSchedulerRequestInput = {
  scheduler?: InputMaybe<OpenShiftCmSchedulerInput>;
};

export type OpenShiftCmSchedulerResponse = {
  __typename?: 'OpenShiftCmSchedulerResponse';
  scheduler?: Maybe<OpenShiftCmScheduler>;
};

export type OpenShiftCmSchedulerResponseInput = {
  scheduler?: InputMaybe<OpenShiftCmSchedulerInput>;
};

export type OpenShiftCmSchedulersResponse = {
  __typename?: 'OpenShiftCmSchedulersResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  schedulers?: Maybe<Array<Maybe<OpenShiftCmScheduler>>>;
};

export type OpenShiftCmSchedulersResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  schedulers?: InputMaybe<Array<InputMaybe<OpenShiftCmSchedulerInput>>>;
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
  type?: Maybe<OpenShiftCmClusterResourceServiceTypeEnum>;
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

export type OpenShiftCmServiceAccountsResponse = {
  __typename?: 'OpenShiftCmServiceAccountsResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  service_accounts?: Maybe<Array<Maybe<OpenShiftCmServiceAccount>>>;
};

export type OpenShiftCmServiceAccountsResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  service_accounts?: InputMaybe<Array<InputMaybe<OpenShiftCmServiceAccountInput>>>;
};

export type OpenShiftCmServiceInput = {
  cluster_ip?: InputMaybe<Scalars['String']['input']>;
  external_name?: InputMaybe<Scalars['String']['input']>;
  load_balancer_class?: InputMaybe<Scalars['String']['input']>;
  load_balancer_ip?: InputMaybe<Scalars['String']['input']>;
  load_balancer_source_ranges?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  type?: InputMaybe<OpenShiftCmClusterResourceServiceTypeEnum>;
};

export type OpenShiftCmStatusManager = {
  __typename?: 'OpenShiftCmStatusManager';
  broker_port?: Maybe<Scalars['BigInt']['output']>;
  installed_at?: Maybe<Scalars['BigInt']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  last_upgraded_at?: Maybe<Scalars['BigInt']['output']>;
  port?: Maybe<Scalars['BigInt']['output']>;
  status?: Maybe<OpenShiftCmStatusManagerStatus>;
  version?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmStatusManagerInput = {
  broker_port?: InputMaybe<Scalars['BigInt']['input']>;
  installed_at?: InputMaybe<Scalars['BigInt']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  last_upgraded_at?: InputMaybe<Scalars['BigInt']['input']>;
  port?: InputMaybe<Scalars['BigInt']['input']>;
  status?: InputMaybe<OpenShiftCmStatusManagerStatusInput>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmStatusManagerInstallationRequest = {
  __typename?: 'OpenShiftCmStatusManagerInstallationRequest';
  version?: Maybe<Scalars['String']['output']>;
};

export type OpenShiftCmStatusManagerInstallationRequestInput = {
  version?: InputMaybe<Scalars['String']['input']>;
};

export type OpenShiftCmStatusManagerRequest = {
  __typename?: 'OpenShiftCmStatusManagerRequest';
  status_manager?: Maybe<OpenShiftCmStatusManager>;
};

export type OpenShiftCmStatusManagerRequestInput = {
  status_manager?: InputMaybe<OpenShiftCmStatusManagerInput>;
};

export type OpenShiftCmStatusManagerResponse = {
  __typename?: 'OpenShiftCmStatusManagerResponse';
  status_manager?: Maybe<OpenShiftCmStatusManager>;
};

export type OpenShiftCmStatusManagerResponseInput = {
  status_manager?: InputMaybe<OpenShiftCmStatusManagerInput>;
};

export enum OpenShiftCmStatusManagerStateCodeEnum {
  CdmSmOpenshiftConnectionFailed = 'CDM_SM_OPENSHIFT_CONNECTION_FAILED',
  CdmSmOpenshiftStateActive = 'CDM_SM_OPENSHIFT_STATE_ACTIVE',
  CdmSmOpenshiftStateNotInstalled = 'CDM_SM_OPENSHIFT_STATE_NOT_INSTALLED',
  CdmSmOpenshiftStateNoConnectionInfo = 'CDM_SM_OPENSHIFT_STATE_NO_CONNECTION_INFO',
  CdmSmOpenshiftStateUnknown = 'CDM_SM_OPENSHIFT_STATE_UNKNOWN',
  CdmSmOpenshiftStateWarning = 'CDM_SM_OPENSHIFT_STATE_WARNING'
}

export type OpenShiftCmStatusManagerStatus = {
  __typename?: 'OpenShiftCmStatusManagerStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmStatusManagerStateCodeEnum>;
};

export type OpenShiftCmStatusManagerStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmStatusManagerStateCodeEnum>;
};

export type OpenShiftCmStatusManagerVersionsResponse = {
  __typename?: 'OpenShiftCmStatusManagerVersionsResponse';
  versions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type OpenShiftCmStatusManagerVersionsResponseInput = {
  versions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type OpenShiftCmStorageClassesResponse = {
  __typename?: 'OpenShiftCmStorageClassesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  storage_classes?: Maybe<Array<Maybe<OpenShiftCmStorageClass>>>;
};

export type OpenShiftCmStorageClassesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  storage_classes?: InputMaybe<Array<InputMaybe<OpenShiftCmStorageClassInput>>>;
};

export type OpenShiftCmVerificationCredential = {
  __typename?: 'OpenShiftCmVerificationCredential';
  credential?: Maybe<Scalars['String']['output']>;
  type_code?: Maybe<OpenShiftCmClusterTypeCodeEnum>;
};

export type OpenShiftCmVerificationCredentialInput = {
  credential?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenShiftCmClusterTypeCodeEnum>;
};

export type OpenShiftCmVolume = {
  __typename?: 'OpenShiftCmVolume';
  id?: Maybe<Scalars['BigInt']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  snapshots?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshot>>>;
  type?: Maybe<OpenShiftCmClusterResourceVolumeTypeEnum>;
};

export type OpenShiftCmVolumeInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
  type?: InputMaybe<OpenShiftCmClusterResourceVolumeTypeEnum>;
};

export type OpenShiftCmVolumeResponse = {
  __typename?: 'OpenShiftCmVolumeResponse';
  volume?: Maybe<OpenShiftCmVolume>;
};

export type OpenShiftCmVolumeResponseInput = {
  volume?: InputMaybe<OpenShiftCmVolumeInput>;
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

export type OpenShiftCmVolumeSnapshotClassesResponse = {
  __typename?: 'OpenShiftCmVolumeSnapshotClassesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  volume_snapshot_classes?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshotClass>>>;
};

export type OpenShiftCmVolumeSnapshotClassesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  volume_snapshot_classes?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotClassInput>>>;
};

export type OpenShiftCmVolumeSnapshotInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  volume_id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenShiftCmVolumeSnapshotsResponse = {
  __typename?: 'OpenShiftCmVolumeSnapshotsResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  volume_snapshots?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshot>>>;
};

export type OpenShiftCmVolumeSnapshotsResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  volume_snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
};

export type OpenShiftCmVolumesResponse = {
  __typename?: 'OpenShiftCmVolumesResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  volumes?: Maybe<Array<Maybe<OpenShiftCmVolume>>>;
};

export type OpenShiftCmVolumesResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  volumes?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeInput>>>;
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

export type OpenShiftCmWorkloadRequest = {
  __typename?: 'OpenShiftCmWorkloadRequest';
  workload?: Maybe<OpenShiftCmWorkload>;
};

export type OpenShiftCmWorkloadRequestInput = {
  workload?: InputMaybe<OpenShiftCmWorkloadInput>;
};

export type OpenShiftCmWorkloadResponse = {
  __typename?: 'OpenShiftCmWorkloadResponse';
  workload?: Maybe<OpenShiftCmWorkload>;
};

export type OpenShiftCmWorkloadResponseInput = {
  workload?: InputMaybe<OpenShiftCmWorkloadInput>;
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

export type OpenShiftCmWorkloadsResponse = {
  __typename?: 'OpenShiftCmWorkloadsResponse';
  pagination?: Maybe<OpenShiftCmPagination>;
  workloads?: Maybe<Array<Maybe<OpenShiftCmWorkload>>>;
};

export type OpenShiftCmWorkloadsResponseInput = {
  pagination?: InputMaybe<OpenShiftCmPaginationInput>;
  workloads?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadInput>>>;
};

export type OpenShiftDrCrdRequest = {
  __typename?: 'OpenShiftDrCrdRequest';
  custom_resource_definition?: Maybe<OpenShiftCmCrd>;
};

export type OpenShiftDrCrdRequestInput = {
  custom_resource_definition?: InputMaybe<OpenShiftCmCrdInput>;
};

export type PostClusterSyncInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type PostStatusManagerInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmStatusManagerInstallationRequest?: InputMaybe<OpenShiftCmStatusManagerInstallationRequestInput>;
};

export type Query = {
  __typename?: 'Query';
  GetCluster?: Maybe<OpenShiftCmClusterResponse>;
  GetClusters?: Maybe<OpenShiftCmClustersResponse>;
  GetCrds?: Maybe<OpenShiftCmCrdsResponse>;
  GetFinalizers?: Maybe<OpenShiftCmFinalizersResponse>;
  GetNamespaces?: Maybe<OpenShiftCmNamespacesResponse>;
  GetNodes?: Maybe<OpenShiftCmNodesResponse>;
  GetPriorityClasses?: Maybe<OpenShiftCmPriorityClassesResponse>;
  GetProtectionGroup?: Maybe<OpenShiftCmProtectionGroupResponse>;
  GetProtectionGroupInfo?: Maybe<OpenShiftCmProtectionGroupInfoResponse>;
  GetProtectionGroupWorkloads?: Maybe<OpenShiftCmProtectionGroupWorkloadsResponse>;
  GetProtectionGroups?: Maybe<OpenShiftCmProtectionGroupsResponse>;
  GetPublicKey?: Maybe<OpenShiftCmPublicKeyResponse>;
  GetRegistries?: Maybe<OpenShiftCmRegistriesResponse>;
  GetResource?: Maybe<OpenShiftCmResourceResponse>;
  GetResources?: Maybe<OpenShiftCmResourcesResponse>;
  GetRuntimeClasses?: Maybe<OpenShiftCmRuntimeClassesResponse>;
  GetSchedulers?: Maybe<OpenShiftCmSchedulersResponse>;
  GetServiceAccounts?: Maybe<OpenShiftCmServiceAccountsResponse>;
  GetStatusManagerVersions?: Maybe<OpenShiftCmStatusManagerVersionsResponse>;
  GetStorageClasses?: Maybe<OpenShiftCmStorageClassesResponse>;
  GetVolume?: Maybe<OpenShiftCmVolumeResponse>;
  GetVolumeSnapshotClasses?: Maybe<OpenShiftCmVolumeSnapshotClassesResponse>;
  GetVolumeSnapshots?: Maybe<OpenShiftCmVolumeSnapshotsResponse>;
  GetVolumes?: Maybe<OpenShiftCmVolumesResponse>;
  GetWorkload?: Maybe<OpenShiftCmWorkloadResponse>;
  GetWorkloads?: Maybe<OpenShiftCmWorkloadsResponse>;
};


export type QueryGetClusterArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetClustersArgs = {
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  ownerGroupId?: InputMaybe<Scalars['BigInt']['input']>;
  typeCode?: InputMaybe<OpenShiftCmClusterTypeCodeEnum>;
};


export type QueryGetCrdsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetFinalizersArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  resourceGroup?: InputMaybe<Scalars['String']['input']>;
  resourceKind?: InputMaybe<Scalars['String']['input']>;
  resourceVersion?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNamespacesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetNodesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  zone?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPriorityClassesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetProtectionGroupArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProtectionGroupInfoArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProtectionGroupWorkloadsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProtectionGroupsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetRegistriesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetResourceArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  resourceId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetResourcesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRuntimeClassesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetSchedulersArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetServiceAccountsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetStorageClassesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetVolumeArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  volumeId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetVolumeSnapshotClassesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetVolumeSnapshotsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  volumeId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetVolumesArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
  volumeType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetWorkloadArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  workloadId?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetWorkloadsArgs = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  isProtected?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UninstallStatusManagerInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateClusterInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmClusterRequest?: InputMaybe<OpenShiftCmClusterRequestInput>;
};

export type UpdateCrdControllerInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  customResourceDefinitionResourceId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftDrCrdRequest?: InputMaybe<OpenShiftDrCrdRequestInput>;
};

export type UpdateFinalizerControllerInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  finalizerId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmFinalizerRequest?: InputMaybe<OpenShiftCmFinalizerRequestInput>;
};

export type UpdateProtectionGroupInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmProtectionGroupRequest?: InputMaybe<OpenShiftCmProtectionGroupRequestInput>;
  protectionGroupResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRegistryInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmRegistryRequest?: InputMaybe<OpenShiftCmRegistryRequestInput>;
  registryId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateSchedulerWorkloadInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmSchedulerRequest?: InputMaybe<OpenShiftCmSchedulerRequestInput>;
  schedulerId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UpdateStatusManagerInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmStatusManagerRequest?: InputMaybe<OpenShiftCmStatusManagerRequestInput>;
};

export type UpdateWorkloadInput = {
  clusterId?: InputMaybe<Scalars['BigInt']['input']>;
  openShiftCmWorkloadRequest?: InputMaybe<OpenShiftCmWorkloadRequestInput>;
  workloadId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type VerifyClusterCredentialInput = {
  openShiftCmVerificationCredential?: InputMaybe<OpenShiftCmVerificationCredentialInput>;
};
