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

export type CheckClusterConnectionInput = {
  openShiftCmConnectionCheckRequest?: InputMaybe<OpenShiftCmConnectionCheckRequestInput>;
};

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
  type_code?: Maybe<OpenShiftCmClusterTypeCodeEnum | `${OpenShiftCmClusterTypeCodeEnum}`>;
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
  type_code?: InputMaybe<OpenShiftCmClusterTypeCodeEnum | `${OpenShiftCmClusterTypeCodeEnum}`>;
  updated_at?: InputMaybe<Scalars['BigInt']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenShiftCmClusterNodeAddressTypeEnum {
  Externaldns = 'ExternalDNS',
  Externalip = 'ExternalIP',
  Hostname = 'Hostname',
  Internaldns = 'InternalDNS',
  Internalip = 'InternalIP'
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
  Clusterip = 'ClusterIP',
  Externalname = 'ExternalName',
  Loadbalancer = 'LoadBalancer',
  Nodeport = 'NodePort'
}

export enum OpenShiftCmClusterResourceVolumeTypeEnum {
  AwsElasticBlockStore = 'awsElasticBlockStore',
  AzureDisk = 'azureDisk',
  AzureFile = 'azureFile',
  Cephfs = 'cephfs',
  Cinder = 'cinder',
  ConfigMap = 'configMap',
  Csi = 'csi',
  EmptyDir = 'emptyDir',
  Ephemeral = 'ephemeral',
  Fc = 'fc',
  FlexVolume = 'flexVolume',
  Flocker = 'flocker',
  GcePersistentDisk = 'gcePersistentDisk',
  GitRepo = 'gitRepo',
  Glusterfs = 'glusterfs',
  HostPath = 'hostPath',
  Iscsi = 'iscsi',
  Nfs = 'nfs',
  PersistentVolumeClaim = 'persistentVolumeClaim',
  PhotonPersistentDisk = 'photonPersistentDisk',
  PortworxVolume = 'portworxVolume',
  Quobyte = 'quobyte',
  Rbd = 'rbd',
  ScaleIO = 'scaleIO',
  Storageos = 'storageos',
  VsphereVolume = 'vsphereVolume'
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
  ClusterStateActive = 'cluster.state.active',
  ClusterStateInactive = 'cluster.state.inactive',
  ClusterStateUnknown = 'cluster.state.unknown'
}

export type OpenShiftCmClusterStatus = {
  __typename?: 'OpenShiftCmClusterStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterStateCodeEnum | `${OpenShiftCmClusterStateCodeEnum}`>;
};

export type OpenShiftCmClusterStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterStateCodeEnum | `${OpenShiftCmClusterStateCodeEnum}`>;
};

export enum OpenShiftCmClusterSyncStateCodeEnum {
  ClusterSyncStateSynchronized = 'cluster.sync.state.synchronized',
  ClusterSyncStateSynchronizeFailed = 'cluster.sync.state.synchronize-failed',
  ClusterSyncStateSynchronizing = 'cluster.sync.state.synchronizing',
  ClusterSyncStateUnknown = 'cluster.sync.state.unknown'
}

export type OpenShiftCmClusterSyncStatus = {
  __typename?: 'OpenShiftCmClusterSyncStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmClusterSyncStateCodeEnum | `${OpenShiftCmClusterSyncStateCodeEnum}`>;
};

export type OpenShiftCmClusterSyncStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmClusterSyncStateCodeEnum | `${OpenShiftCmClusterSyncStateCodeEnum}`>;
};

export enum OpenShiftCmClusterTypeCodeEnum {
  ClusterTypeKubernetes = 'cluster.type.kubernetes',
  ClusterTypeOpenshift = 'cluster.type.openshift'
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
  type?: Maybe<OpenShiftCmClusterNodeAddressTypeEnum | `${OpenShiftCmClusterNodeAddressTypeEnum}`>;
};

export type OpenShiftCmNodeAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OpenShiftCmClusterNodeAddressTypeEnum | `${OpenShiftCmClusterNodeAddressTypeEnum}`>;
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
  recovery_point_objective_type?: Maybe<OpenShiftCmRecoveryPointObjectiveTypeEnum | `${OpenShiftCmRecoveryPointObjectiveTypeEnum}`>;
  recovery_time_objective?: Maybe<Scalars['BigInt']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  target?: Maybe<OpenShiftCmProtectionGroupTargetEnum | `${OpenShiftCmProtectionGroupTargetEnum}`>;
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
  recovery_point_objective_type?: InputMaybe<OpenShiftCmRecoveryPointObjectiveTypeEnum | `${OpenShiftCmRecoveryPointObjectiveTypeEnum}`>;
  recovery_time_objective?: InputMaybe<Scalars['BigInt']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<OpenShiftCmProtectionGroupTargetEnum | `${OpenShiftCmProtectionGroupTargetEnum}`>;
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
  CdmCmOpenshiftProtectionGroupTargetAnyWorkloads = 'cdm.cm-openshift.protection-group.target.any-workloads',
  CdmCmOpenshiftProtectionGroupTargetClusterWorkload = 'cdm.cm-openshift.protection-group.target.cluster-workload',
  CdmCmOpenshiftProtectionGroupTargetNamespaceWorkloads = 'cdm.cm-openshift.protection-group.target.namespace-workloads'
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
  RecoveryPointObjectiveTypeDay = 'recovery.point.objective.type.day',
  RecoveryPointObjectiveTypeHour = 'recovery.point.objective.type.hour',
  RecoveryPointObjectiveTypeMinute = 'recovery.point.objective.type.minute'
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
  type?: Maybe<OpenShiftCmClusterResourceServiceTypeEnum | `${OpenShiftCmClusterResourceServiceTypeEnum}`>;
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
  type?: InputMaybe<OpenShiftCmClusterResourceServiceTypeEnum | `${OpenShiftCmClusterResourceServiceTypeEnum}`>;
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
  CdmSmOpenshiftConnectionFailed = 'cdm.sm-openshift.connection_failed',
  CdmSmOpenshiftStateActive = 'cdm.sm-openshift.state.active',
  CdmSmOpenshiftStateNotInstalled = 'cdm.sm-openshift.state.not_installed',
  CdmSmOpenshiftStateNoConnectionInfo = 'cdm.sm-openshift.state.no_connection_info',
  CdmSmOpenshiftStateUnknown = 'cdm.sm-openshift.state.unknown',
  CdmSmOpenshiftStateWarning = 'cdm.sm-openshift.state.warning'
}

export type OpenShiftCmStatusManagerStatus = {
  __typename?: 'OpenShiftCmStatusManagerStatus';
  reason?: Maybe<OpenShiftCmMessage>;
  state_code?: Maybe<OpenShiftCmStatusManagerStateCodeEnum | `${OpenShiftCmStatusManagerStateCodeEnum}`>;
};

export type OpenShiftCmStatusManagerStatusInput = {
  reason?: InputMaybe<OpenShiftCmMessageInput>;
  state_code?: InputMaybe<OpenShiftCmStatusManagerStateCodeEnum | `${OpenShiftCmStatusManagerStateCodeEnum}`>;
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
  type_code?: Maybe<OpenShiftCmClusterTypeCodeEnum | `${OpenShiftCmClusterTypeCodeEnum}`>;
};

export type OpenShiftCmVerificationCredentialInput = {
  credential?: InputMaybe<Scalars['String']['input']>;
  type_code?: InputMaybe<OpenShiftCmClusterTypeCodeEnum | `${OpenShiftCmClusterTypeCodeEnum}`>;
};

export type OpenShiftCmVolume = {
  __typename?: 'OpenShiftCmVolume';
  id?: Maybe<Scalars['BigInt']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  snapshots?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshot>>>;
  type?: Maybe<OpenShiftCmClusterResourceVolumeTypeEnum | `${OpenShiftCmClusterResourceVolumeTypeEnum}`>;
};

export type OpenShiftCmVolumeInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
  type?: InputMaybe<OpenShiftCmClusterResourceVolumeTypeEnum | `${OpenShiftCmClusterResourceVolumeTypeEnum}`>;
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
  CheckClusterConnectionInput: CheckClusterConnectionInput;
  CloudLanguageSetEnum: CloudLanguageSetEnum;
  CloudRole: ResolverTypeWrapper<CloudRole>;
  CloudRoleEnum: CloudRoleEnum;
  CloudRoleInput: CloudRoleInput;
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
  CreateClusterInput: CreateClusterInput;
  CreateProtectionGroupInput: CreateProtectionGroupInput;
  DeleteClusterInput: DeleteClusterInput;
  DeleteProtectionGroupInput: DeleteProtectionGroupInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OpenShiftCmCluster: ResolverTypeWrapper<OpenShiftCmCluster>;
  OpenShiftCmClusterCreationResponse: ResolverTypeWrapper<OpenShiftCmClusterCreationResponse>;
  OpenShiftCmClusterCreationResponseInput: OpenShiftCmClusterCreationResponseInput;
  OpenShiftCmClusterInput: OpenShiftCmClusterInput;
  OpenShiftCmClusterNodeAddressTypeEnum: OpenShiftCmClusterNodeAddressTypeEnum;
  OpenShiftCmClusterPatchResponse: ResolverTypeWrapper<OpenShiftCmClusterPatchResponse>;
  OpenShiftCmClusterPatchResponseInput: OpenShiftCmClusterPatchResponseInput;
  OpenShiftCmClusterRequest: ResolverTypeWrapper<OpenShiftCmClusterRequest>;
  OpenShiftCmClusterRequestInput: OpenShiftCmClusterRequestInput;
  OpenShiftCmClusterResourceServiceTypeEnum: OpenShiftCmClusterResourceServiceTypeEnum;
  OpenShiftCmClusterResourceVolumeTypeEnum: OpenShiftCmClusterResourceVolumeTypeEnum;
  OpenShiftCmClusterResponse: ResolverTypeWrapper<OpenShiftCmClusterResponse>;
  OpenShiftCmClusterResponseInput: OpenShiftCmClusterResponseInput;
  OpenShiftCmClusterStateCodeEnum: OpenShiftCmClusterStateCodeEnum;
  OpenShiftCmClusterStatus: ResolverTypeWrapper<OpenShiftCmClusterStatus>;
  OpenShiftCmClusterStatusInput: OpenShiftCmClusterStatusInput;
  OpenShiftCmClusterSyncStateCodeEnum: OpenShiftCmClusterSyncStateCodeEnum;
  OpenShiftCmClusterSyncStatus: ResolverTypeWrapper<OpenShiftCmClusterSyncStatus>;
  OpenShiftCmClusterSyncStatusInput: OpenShiftCmClusterSyncStatusInput;
  OpenShiftCmClusterTypeCodeEnum: OpenShiftCmClusterTypeCodeEnum;
  OpenShiftCmClustersResponse: ResolverTypeWrapper<OpenShiftCmClustersResponse>;
  OpenShiftCmClustersResponseInput: OpenShiftCmClustersResponseInput;
  OpenShiftCmConnectionCheckRequest: ResolverTypeWrapper<OpenShiftCmConnectionCheckRequest>;
  OpenShiftCmConnectionCheckRequestInput: OpenShiftCmConnectionCheckRequestInput;
  OpenShiftCmCrd: ResolverTypeWrapper<OpenShiftCmCrd>;
  OpenShiftCmCrdInput: OpenShiftCmCrdInput;
  OpenShiftCmCrdResponse: ResolverTypeWrapper<OpenShiftCmCrdResponse>;
  OpenShiftCmCrdResponseInput: OpenShiftCmCrdResponseInput;
  OpenShiftCmCrdsResponse: ResolverTypeWrapper<OpenShiftCmCrdsResponse>;
  OpenShiftCmCrdsResponseInput: OpenShiftCmCrdsResponseInput;
  OpenShiftCmFinalizer: ResolverTypeWrapper<OpenShiftCmFinalizer>;
  OpenShiftCmFinalizerInput: OpenShiftCmFinalizerInput;
  OpenShiftCmFinalizerRequest: ResolverTypeWrapper<OpenShiftCmFinalizerRequest>;
  OpenShiftCmFinalizerRequestInput: OpenShiftCmFinalizerRequestInput;
  OpenShiftCmFinalizerResponse: ResolverTypeWrapper<OpenShiftCmFinalizerResponse>;
  OpenShiftCmFinalizerResponseInput: OpenShiftCmFinalizerResponseInput;
  OpenShiftCmFinalizersResponse: ResolverTypeWrapper<OpenShiftCmFinalizersResponse>;
  OpenShiftCmFinalizersResponseInput: OpenShiftCmFinalizersResponseInput;
  OpenShiftCmMessage: ResolverTypeWrapper<OpenShiftCmMessage>;
  OpenShiftCmMessageInput: OpenShiftCmMessageInput;
  OpenShiftCmNamespace: ResolverTypeWrapper<OpenShiftCmNamespace>;
  OpenShiftCmNamespaceInput: OpenShiftCmNamespaceInput;
  OpenShiftCmNamespacesResponse: ResolverTypeWrapper<OpenShiftCmNamespacesResponse>;
  OpenShiftCmNamespacesResponseInput: OpenShiftCmNamespacesResponseInput;
  OpenShiftCmNode: ResolverTypeWrapper<OpenShiftCmNode>;
  OpenShiftCmNodeAddress: ResolverTypeWrapper<OpenShiftCmNodeAddress>;
  OpenShiftCmNodeAddressInput: OpenShiftCmNodeAddressInput;
  OpenShiftCmNodeInput: OpenShiftCmNodeInput;
  OpenShiftCmNodesResponse: ResolverTypeWrapper<OpenShiftCmNodesResponse>;
  OpenShiftCmNodesResponseInput: OpenShiftCmNodesResponseInput;
  OpenShiftCmPagination: ResolverTypeWrapper<OpenShiftCmPagination>;
  OpenShiftCmPaginationInput: OpenShiftCmPaginationInput;
  OpenShiftCmPriorityClass: ResolverTypeWrapper<OpenShiftCmPriorityClass>;
  OpenShiftCmPriorityClassInput: OpenShiftCmPriorityClassInput;
  OpenShiftCmPriorityClassesResponse: ResolverTypeWrapper<OpenShiftCmPriorityClassesResponse>;
  OpenShiftCmPriorityClassesResponseInput: OpenShiftCmPriorityClassesResponseInput;
  OpenShiftCmProtectionGroup: ResolverTypeWrapper<OpenShiftCmProtectionGroup>;
  OpenShiftCmProtectionGroupInfo: ResolverTypeWrapper<OpenShiftCmProtectionGroupInfo>;
  OpenShiftCmProtectionGroupInfoInput: OpenShiftCmProtectionGroupInfoInput;
  OpenShiftCmProtectionGroupInfoResponse: ResolverTypeWrapper<OpenShiftCmProtectionGroupInfoResponse>;
  OpenShiftCmProtectionGroupInfoResponseInput: OpenShiftCmProtectionGroupInfoResponseInput;
  OpenShiftCmProtectionGroupInput: OpenShiftCmProtectionGroupInput;
  OpenShiftCmProtectionGroupRequest: ResolverTypeWrapper<OpenShiftCmProtectionGroupRequest>;
  OpenShiftCmProtectionGroupRequestInput: OpenShiftCmProtectionGroupRequestInput;
  OpenShiftCmProtectionGroupResponse: ResolverTypeWrapper<OpenShiftCmProtectionGroupResponse>;
  OpenShiftCmProtectionGroupResponseInput: OpenShiftCmProtectionGroupResponseInput;
  OpenShiftCmProtectionGroupTargetEnum: OpenShiftCmProtectionGroupTargetEnum;
  OpenShiftCmProtectionGroupWorkloadsResponse: ResolverTypeWrapper<OpenShiftCmProtectionGroupWorkloadsResponse>;
  OpenShiftCmProtectionGroupWorkloadsResponseInput: OpenShiftCmProtectionGroupWorkloadsResponseInput;
  OpenShiftCmProtectionGroupsResponse: ResolverTypeWrapper<OpenShiftCmProtectionGroupsResponse>;
  OpenShiftCmProtectionGroupsResponseInput: OpenShiftCmProtectionGroupsResponseInput;
  OpenShiftCmPublicKeyResponse: ResolverTypeWrapper<OpenShiftCmPublicKeyResponse>;
  OpenShiftCmPublicKeyResponseInput: OpenShiftCmPublicKeyResponseInput;
  OpenShiftCmRecoveryPointObjectiveTypeEnum: OpenShiftCmRecoveryPointObjectiveTypeEnum;
  OpenShiftCmRegistriesResponse: ResolverTypeWrapper<OpenShiftCmRegistriesResponse>;
  OpenShiftCmRegistriesResponseInput: OpenShiftCmRegistriesResponseInput;
  OpenShiftCmRegistry: ResolverTypeWrapper<OpenShiftCmRegistry>;
  OpenShiftCmRegistryInput: OpenShiftCmRegistryInput;
  OpenShiftCmRegistryRequest: ResolverTypeWrapper<OpenShiftCmRegistryRequest>;
  OpenShiftCmRegistryRequestInput: OpenShiftCmRegistryRequestInput;
  OpenShiftCmRegistryResponse: ResolverTypeWrapper<OpenShiftCmRegistryResponse>;
  OpenShiftCmRegistryResponseInput: OpenShiftCmRegistryResponseInput;
  OpenShiftCmResource: ResolverTypeWrapper<OpenShiftCmResource>;
  OpenShiftCmResourceInput: OpenShiftCmResourceInput;
  OpenShiftCmResourceResponse: ResolverTypeWrapper<OpenShiftCmResourceResponse>;
  OpenShiftCmResourceResponseInput: OpenShiftCmResourceResponseInput;
  OpenShiftCmResourcesResponse: ResolverTypeWrapper<OpenShiftCmResourcesResponse>;
  OpenShiftCmResourcesResponseInput: OpenShiftCmResourcesResponseInput;
  OpenShiftCmRuntimeClass: ResolverTypeWrapper<OpenShiftCmRuntimeClass>;
  OpenShiftCmRuntimeClassInput: OpenShiftCmRuntimeClassInput;
  OpenShiftCmRuntimeClassesResponse: ResolverTypeWrapper<OpenShiftCmRuntimeClassesResponse>;
  OpenShiftCmRuntimeClassesResponseInput: OpenShiftCmRuntimeClassesResponseInput;
  OpenShiftCmScheduler: ResolverTypeWrapper<OpenShiftCmScheduler>;
  OpenShiftCmSchedulerInput: OpenShiftCmSchedulerInput;
  OpenShiftCmSchedulerRequest: ResolverTypeWrapper<OpenShiftCmSchedulerRequest>;
  OpenShiftCmSchedulerRequestInput: OpenShiftCmSchedulerRequestInput;
  OpenShiftCmSchedulerResponse: ResolverTypeWrapper<OpenShiftCmSchedulerResponse>;
  OpenShiftCmSchedulerResponseInput: OpenShiftCmSchedulerResponseInput;
  OpenShiftCmSchedulersResponse: ResolverTypeWrapper<OpenShiftCmSchedulersResponse>;
  OpenShiftCmSchedulersResponseInput: OpenShiftCmSchedulersResponseInput;
  OpenShiftCmService: ResolverTypeWrapper<OpenShiftCmService>;
  OpenShiftCmServiceAccount: ResolverTypeWrapper<OpenShiftCmServiceAccount>;
  OpenShiftCmServiceAccountInput: OpenShiftCmServiceAccountInput;
  OpenShiftCmServiceAccountsResponse: ResolverTypeWrapper<OpenShiftCmServiceAccountsResponse>;
  OpenShiftCmServiceAccountsResponseInput: OpenShiftCmServiceAccountsResponseInput;
  OpenShiftCmServiceInput: OpenShiftCmServiceInput;
  OpenShiftCmStatusManager: ResolverTypeWrapper<OpenShiftCmStatusManager>;
  OpenShiftCmStatusManagerInput: OpenShiftCmStatusManagerInput;
  OpenShiftCmStatusManagerInstallationRequest: ResolverTypeWrapper<OpenShiftCmStatusManagerInstallationRequest>;
  OpenShiftCmStatusManagerInstallationRequestInput: OpenShiftCmStatusManagerInstallationRequestInput;
  OpenShiftCmStatusManagerRequest: ResolverTypeWrapper<OpenShiftCmStatusManagerRequest>;
  OpenShiftCmStatusManagerRequestInput: OpenShiftCmStatusManagerRequestInput;
  OpenShiftCmStatusManagerResponse: ResolverTypeWrapper<OpenShiftCmStatusManagerResponse>;
  OpenShiftCmStatusManagerResponseInput: OpenShiftCmStatusManagerResponseInput;
  OpenShiftCmStatusManagerStateCodeEnum: OpenShiftCmStatusManagerStateCodeEnum;
  OpenShiftCmStatusManagerStatus: ResolverTypeWrapper<OpenShiftCmStatusManagerStatus>;
  OpenShiftCmStatusManagerStatusInput: OpenShiftCmStatusManagerStatusInput;
  OpenShiftCmStatusManagerVersionsResponse: ResolverTypeWrapper<OpenShiftCmStatusManagerVersionsResponse>;
  OpenShiftCmStatusManagerVersionsResponseInput: OpenShiftCmStatusManagerVersionsResponseInput;
  OpenShiftCmStorageClass: ResolverTypeWrapper<OpenShiftCmStorageClass>;
  OpenShiftCmStorageClassInput: OpenShiftCmStorageClassInput;
  OpenShiftCmStorageClassesResponse: ResolverTypeWrapper<OpenShiftCmStorageClassesResponse>;
  OpenShiftCmStorageClassesResponseInput: OpenShiftCmStorageClassesResponseInput;
  OpenShiftCmVerificationCredential: ResolverTypeWrapper<OpenShiftCmVerificationCredential>;
  OpenShiftCmVerificationCredentialInput: OpenShiftCmVerificationCredentialInput;
  OpenShiftCmVolume: ResolverTypeWrapper<OpenShiftCmVolume>;
  OpenShiftCmVolumeInput: OpenShiftCmVolumeInput;
  OpenShiftCmVolumeResponse: ResolverTypeWrapper<OpenShiftCmVolumeResponse>;
  OpenShiftCmVolumeResponseInput: OpenShiftCmVolumeResponseInput;
  OpenShiftCmVolumeSnapshot: ResolverTypeWrapper<OpenShiftCmVolumeSnapshot>;
  OpenShiftCmVolumeSnapshotClass: ResolverTypeWrapper<OpenShiftCmVolumeSnapshotClass>;
  OpenShiftCmVolumeSnapshotClassInput: OpenShiftCmVolumeSnapshotClassInput;
  OpenShiftCmVolumeSnapshotClassesResponse: ResolverTypeWrapper<OpenShiftCmVolumeSnapshotClassesResponse>;
  OpenShiftCmVolumeSnapshotClassesResponseInput: OpenShiftCmVolumeSnapshotClassesResponseInput;
  OpenShiftCmVolumeSnapshotInput: OpenShiftCmVolumeSnapshotInput;
  OpenShiftCmVolumeSnapshotsResponse: ResolverTypeWrapper<OpenShiftCmVolumeSnapshotsResponse>;
  OpenShiftCmVolumeSnapshotsResponseInput: OpenShiftCmVolumeSnapshotsResponseInput;
  OpenShiftCmVolumesResponse: ResolverTypeWrapper<OpenShiftCmVolumesResponse>;
  OpenShiftCmVolumesResponseInput: OpenShiftCmVolumesResponseInput;
  OpenShiftCmWorkload: ResolverTypeWrapper<OpenShiftCmWorkload>;
  OpenShiftCmWorkloadInput: OpenShiftCmWorkloadInput;
  OpenShiftCmWorkloadRequest: ResolverTypeWrapper<OpenShiftCmWorkloadRequest>;
  OpenShiftCmWorkloadRequestInput: OpenShiftCmWorkloadRequestInput;
  OpenShiftCmWorkloadResponse: ResolverTypeWrapper<OpenShiftCmWorkloadResponse>;
  OpenShiftCmWorkloadResponseInput: OpenShiftCmWorkloadResponseInput;
  OpenShiftCmWorkloadVolume: ResolverTypeWrapper<OpenShiftCmWorkloadVolume>;
  OpenShiftCmWorkloadVolumeInput: OpenShiftCmWorkloadVolumeInput;
  OpenShiftCmWorkloadsResponse: ResolverTypeWrapper<OpenShiftCmWorkloadsResponse>;
  OpenShiftCmWorkloadsResponseInput: OpenShiftCmWorkloadsResponseInput;
  OpenShiftDrCrdRequest: ResolverTypeWrapper<OpenShiftDrCrdRequest>;
  OpenShiftDrCrdRequestInput: OpenShiftDrCrdRequestInput;
  PostClusterSyncInput: PostClusterSyncInput;
  PostStatusManagerInput: PostStatusManagerInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UninstallStatusManagerInput: UninstallStatusManagerInput;
  UpdateClusterInput: UpdateClusterInput;
  UpdateCrdControllerInput: UpdateCrdControllerInput;
  UpdateFinalizerControllerInput: UpdateFinalizerControllerInput;
  UpdateProtectionGroupInput: UpdateProtectionGroupInput;
  UpdateRegistryInput: UpdateRegistryInput;
  UpdateSchedulerWorkloadInput: UpdateSchedulerWorkloadInput;
  UpdateStatusManagerInput: UpdateStatusManagerInput;
  UpdateWorkloadInput: UpdateWorkloadInput;
  VerifyClusterCredentialInput: VerifyClusterCredentialInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  CheckClusterConnectionInput: CheckClusterConnectionInput;
  CloudRole: CloudRole;
  CloudRoleInput: CloudRoleInput;
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
  CreateClusterInput: CreateClusterInput;
  CreateProtectionGroupInput: CreateProtectionGroupInput;
  DeleteClusterInput: DeleteClusterInput;
  DeleteProtectionGroupInput: DeleteProtectionGroupInput;
  JSONObject: Scalars['JSONObject']['output'];
  Mutation: {};
  OpenShiftCmCluster: OpenShiftCmCluster;
  OpenShiftCmClusterCreationResponse: OpenShiftCmClusterCreationResponse;
  OpenShiftCmClusterCreationResponseInput: OpenShiftCmClusterCreationResponseInput;
  OpenShiftCmClusterInput: OpenShiftCmClusterInput;
  OpenShiftCmClusterPatchResponse: OpenShiftCmClusterPatchResponse;
  OpenShiftCmClusterPatchResponseInput: OpenShiftCmClusterPatchResponseInput;
  OpenShiftCmClusterRequest: OpenShiftCmClusterRequest;
  OpenShiftCmClusterRequestInput: OpenShiftCmClusterRequestInput;
  OpenShiftCmClusterResponse: OpenShiftCmClusterResponse;
  OpenShiftCmClusterResponseInput: OpenShiftCmClusterResponseInput;
  OpenShiftCmClusterStatus: OpenShiftCmClusterStatus;
  OpenShiftCmClusterStatusInput: OpenShiftCmClusterStatusInput;
  OpenShiftCmClusterSyncStatus: OpenShiftCmClusterSyncStatus;
  OpenShiftCmClusterSyncStatusInput: OpenShiftCmClusterSyncStatusInput;
  OpenShiftCmClustersResponse: OpenShiftCmClustersResponse;
  OpenShiftCmClustersResponseInput: OpenShiftCmClustersResponseInput;
  OpenShiftCmConnectionCheckRequest: OpenShiftCmConnectionCheckRequest;
  OpenShiftCmConnectionCheckRequestInput: OpenShiftCmConnectionCheckRequestInput;
  OpenShiftCmCrd: OpenShiftCmCrd;
  OpenShiftCmCrdInput: OpenShiftCmCrdInput;
  OpenShiftCmCrdResponse: OpenShiftCmCrdResponse;
  OpenShiftCmCrdResponseInput: OpenShiftCmCrdResponseInput;
  OpenShiftCmCrdsResponse: OpenShiftCmCrdsResponse;
  OpenShiftCmCrdsResponseInput: OpenShiftCmCrdsResponseInput;
  OpenShiftCmFinalizer: OpenShiftCmFinalizer;
  OpenShiftCmFinalizerInput: OpenShiftCmFinalizerInput;
  OpenShiftCmFinalizerRequest: OpenShiftCmFinalizerRequest;
  OpenShiftCmFinalizerRequestInput: OpenShiftCmFinalizerRequestInput;
  OpenShiftCmFinalizerResponse: OpenShiftCmFinalizerResponse;
  OpenShiftCmFinalizerResponseInput: OpenShiftCmFinalizerResponseInput;
  OpenShiftCmFinalizersResponse: OpenShiftCmFinalizersResponse;
  OpenShiftCmFinalizersResponseInput: OpenShiftCmFinalizersResponseInput;
  OpenShiftCmMessage: OpenShiftCmMessage;
  OpenShiftCmMessageInput: OpenShiftCmMessageInput;
  OpenShiftCmNamespace: OpenShiftCmNamespace;
  OpenShiftCmNamespaceInput: OpenShiftCmNamespaceInput;
  OpenShiftCmNamespacesResponse: OpenShiftCmNamespacesResponse;
  OpenShiftCmNamespacesResponseInput: OpenShiftCmNamespacesResponseInput;
  OpenShiftCmNode: OpenShiftCmNode;
  OpenShiftCmNodeAddress: OpenShiftCmNodeAddress;
  OpenShiftCmNodeAddressInput: OpenShiftCmNodeAddressInput;
  OpenShiftCmNodeInput: OpenShiftCmNodeInput;
  OpenShiftCmNodesResponse: OpenShiftCmNodesResponse;
  OpenShiftCmNodesResponseInput: OpenShiftCmNodesResponseInput;
  OpenShiftCmPagination: OpenShiftCmPagination;
  OpenShiftCmPaginationInput: OpenShiftCmPaginationInput;
  OpenShiftCmPriorityClass: OpenShiftCmPriorityClass;
  OpenShiftCmPriorityClassInput: OpenShiftCmPriorityClassInput;
  OpenShiftCmPriorityClassesResponse: OpenShiftCmPriorityClassesResponse;
  OpenShiftCmPriorityClassesResponseInput: OpenShiftCmPriorityClassesResponseInput;
  OpenShiftCmProtectionGroup: OpenShiftCmProtectionGroup;
  OpenShiftCmProtectionGroupInfo: OpenShiftCmProtectionGroupInfo;
  OpenShiftCmProtectionGroupInfoInput: OpenShiftCmProtectionGroupInfoInput;
  OpenShiftCmProtectionGroupInfoResponse: OpenShiftCmProtectionGroupInfoResponse;
  OpenShiftCmProtectionGroupInfoResponseInput: OpenShiftCmProtectionGroupInfoResponseInput;
  OpenShiftCmProtectionGroupInput: OpenShiftCmProtectionGroupInput;
  OpenShiftCmProtectionGroupRequest: OpenShiftCmProtectionGroupRequest;
  OpenShiftCmProtectionGroupRequestInput: OpenShiftCmProtectionGroupRequestInput;
  OpenShiftCmProtectionGroupResponse: OpenShiftCmProtectionGroupResponse;
  OpenShiftCmProtectionGroupResponseInput: OpenShiftCmProtectionGroupResponseInput;
  OpenShiftCmProtectionGroupWorkloadsResponse: OpenShiftCmProtectionGroupWorkloadsResponse;
  OpenShiftCmProtectionGroupWorkloadsResponseInput: OpenShiftCmProtectionGroupWorkloadsResponseInput;
  OpenShiftCmProtectionGroupsResponse: OpenShiftCmProtectionGroupsResponse;
  OpenShiftCmProtectionGroupsResponseInput: OpenShiftCmProtectionGroupsResponseInput;
  OpenShiftCmPublicKeyResponse: OpenShiftCmPublicKeyResponse;
  OpenShiftCmPublicKeyResponseInput: OpenShiftCmPublicKeyResponseInput;
  OpenShiftCmRegistriesResponse: OpenShiftCmRegistriesResponse;
  OpenShiftCmRegistriesResponseInput: OpenShiftCmRegistriesResponseInput;
  OpenShiftCmRegistry: OpenShiftCmRegistry;
  OpenShiftCmRegistryInput: OpenShiftCmRegistryInput;
  OpenShiftCmRegistryRequest: OpenShiftCmRegistryRequest;
  OpenShiftCmRegistryRequestInput: OpenShiftCmRegistryRequestInput;
  OpenShiftCmRegistryResponse: OpenShiftCmRegistryResponse;
  OpenShiftCmRegistryResponseInput: OpenShiftCmRegistryResponseInput;
  OpenShiftCmResource: OpenShiftCmResource;
  OpenShiftCmResourceInput: OpenShiftCmResourceInput;
  OpenShiftCmResourceResponse: OpenShiftCmResourceResponse;
  OpenShiftCmResourceResponseInput: OpenShiftCmResourceResponseInput;
  OpenShiftCmResourcesResponse: OpenShiftCmResourcesResponse;
  OpenShiftCmResourcesResponseInput: OpenShiftCmResourcesResponseInput;
  OpenShiftCmRuntimeClass: OpenShiftCmRuntimeClass;
  OpenShiftCmRuntimeClassInput: OpenShiftCmRuntimeClassInput;
  OpenShiftCmRuntimeClassesResponse: OpenShiftCmRuntimeClassesResponse;
  OpenShiftCmRuntimeClassesResponseInput: OpenShiftCmRuntimeClassesResponseInput;
  OpenShiftCmScheduler: OpenShiftCmScheduler;
  OpenShiftCmSchedulerInput: OpenShiftCmSchedulerInput;
  OpenShiftCmSchedulerRequest: OpenShiftCmSchedulerRequest;
  OpenShiftCmSchedulerRequestInput: OpenShiftCmSchedulerRequestInput;
  OpenShiftCmSchedulerResponse: OpenShiftCmSchedulerResponse;
  OpenShiftCmSchedulerResponseInput: OpenShiftCmSchedulerResponseInput;
  OpenShiftCmSchedulersResponse: OpenShiftCmSchedulersResponse;
  OpenShiftCmSchedulersResponseInput: OpenShiftCmSchedulersResponseInput;
  OpenShiftCmService: OpenShiftCmService;
  OpenShiftCmServiceAccount: OpenShiftCmServiceAccount;
  OpenShiftCmServiceAccountInput: OpenShiftCmServiceAccountInput;
  OpenShiftCmServiceAccountsResponse: OpenShiftCmServiceAccountsResponse;
  OpenShiftCmServiceAccountsResponseInput: OpenShiftCmServiceAccountsResponseInput;
  OpenShiftCmServiceInput: OpenShiftCmServiceInput;
  OpenShiftCmStatusManager: OpenShiftCmStatusManager;
  OpenShiftCmStatusManagerInput: OpenShiftCmStatusManagerInput;
  OpenShiftCmStatusManagerInstallationRequest: OpenShiftCmStatusManagerInstallationRequest;
  OpenShiftCmStatusManagerInstallationRequestInput: OpenShiftCmStatusManagerInstallationRequestInput;
  OpenShiftCmStatusManagerRequest: OpenShiftCmStatusManagerRequest;
  OpenShiftCmStatusManagerRequestInput: OpenShiftCmStatusManagerRequestInput;
  OpenShiftCmStatusManagerResponse: OpenShiftCmStatusManagerResponse;
  OpenShiftCmStatusManagerResponseInput: OpenShiftCmStatusManagerResponseInput;
  OpenShiftCmStatusManagerStatus: OpenShiftCmStatusManagerStatus;
  OpenShiftCmStatusManagerStatusInput: OpenShiftCmStatusManagerStatusInput;
  OpenShiftCmStatusManagerVersionsResponse: OpenShiftCmStatusManagerVersionsResponse;
  OpenShiftCmStatusManagerVersionsResponseInput: OpenShiftCmStatusManagerVersionsResponseInput;
  OpenShiftCmStorageClass: OpenShiftCmStorageClass;
  OpenShiftCmStorageClassInput: OpenShiftCmStorageClassInput;
  OpenShiftCmStorageClassesResponse: OpenShiftCmStorageClassesResponse;
  OpenShiftCmStorageClassesResponseInput: OpenShiftCmStorageClassesResponseInput;
  OpenShiftCmVerificationCredential: OpenShiftCmVerificationCredential;
  OpenShiftCmVerificationCredentialInput: OpenShiftCmVerificationCredentialInput;
  OpenShiftCmVolume: OpenShiftCmVolume;
  OpenShiftCmVolumeInput: OpenShiftCmVolumeInput;
  OpenShiftCmVolumeResponse: OpenShiftCmVolumeResponse;
  OpenShiftCmVolumeResponseInput: OpenShiftCmVolumeResponseInput;
  OpenShiftCmVolumeSnapshot: OpenShiftCmVolumeSnapshot;
  OpenShiftCmVolumeSnapshotClass: OpenShiftCmVolumeSnapshotClass;
  OpenShiftCmVolumeSnapshotClassInput: OpenShiftCmVolumeSnapshotClassInput;
  OpenShiftCmVolumeSnapshotClassesResponse: OpenShiftCmVolumeSnapshotClassesResponse;
  OpenShiftCmVolumeSnapshotClassesResponseInput: OpenShiftCmVolumeSnapshotClassesResponseInput;
  OpenShiftCmVolumeSnapshotInput: OpenShiftCmVolumeSnapshotInput;
  OpenShiftCmVolumeSnapshotsResponse: OpenShiftCmVolumeSnapshotsResponse;
  OpenShiftCmVolumeSnapshotsResponseInput: OpenShiftCmVolumeSnapshotsResponseInput;
  OpenShiftCmVolumesResponse: OpenShiftCmVolumesResponse;
  OpenShiftCmVolumesResponseInput: OpenShiftCmVolumesResponseInput;
  OpenShiftCmWorkload: OpenShiftCmWorkload;
  OpenShiftCmWorkloadInput: OpenShiftCmWorkloadInput;
  OpenShiftCmWorkloadRequest: OpenShiftCmWorkloadRequest;
  OpenShiftCmWorkloadRequestInput: OpenShiftCmWorkloadRequestInput;
  OpenShiftCmWorkloadResponse: OpenShiftCmWorkloadResponse;
  OpenShiftCmWorkloadResponseInput: OpenShiftCmWorkloadResponseInput;
  OpenShiftCmWorkloadVolume: OpenShiftCmWorkloadVolume;
  OpenShiftCmWorkloadVolumeInput: OpenShiftCmWorkloadVolumeInput;
  OpenShiftCmWorkloadsResponse: OpenShiftCmWorkloadsResponse;
  OpenShiftCmWorkloadsResponseInput: OpenShiftCmWorkloadsResponseInput;
  OpenShiftDrCrdRequest: OpenShiftDrCrdRequest;
  OpenShiftDrCrdRequestInput: OpenShiftDrCrdRequestInput;
  PostClusterSyncInput: PostClusterSyncInput;
  PostStatusManagerInput: PostStatusManagerInput;
  Query: {};
  String: Scalars['String']['output'];
  UninstallStatusManagerInput: UninstallStatusManagerInput;
  UpdateClusterInput: UpdateClusterInput;
  UpdateCrdControllerInput: UpdateCrdControllerInput;
  UpdateFinalizerControllerInput: UpdateFinalizerControllerInput;
  UpdateProtectionGroupInput: UpdateProtectionGroupInput;
  UpdateRegistryInput: UpdateRegistryInput;
  UpdateSchedulerWorkloadInput: UpdateSchedulerWorkloadInput;
  UpdateStatusManagerInput: UpdateStatusManagerInput;
  UpdateWorkloadInput: UpdateWorkloadInput;
  VerifyClusterCredentialInput: VerifyClusterCredentialInput;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CloudLanguageSetEnumResolvers = { ENG: 'eng', KOR: 'kor' };

export type CloudRoleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['CloudRole'] = ResolversParentTypes['CloudRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CloudRoleEnum']>, ParentType, ContextType>;
  solution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CloudRoleEnumResolvers = { ADMIN: 'admin', MANAGER: 'manager', OPERATOR: 'operator', USER: 'user' };

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

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CheckClusterConnection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationCheckClusterConnectionArgs>>;
  CreateCluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterCreationResponse']>, ParentType, ContextType, Partial<MutationCreateClusterArgs>>;
  CreateProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupResponse']>, ParentType, ContextType, Partial<MutationCreateProtectionGroupArgs>>;
  DeleteCluster?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteClusterArgs>>;
  DeleteProtectionGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteProtectionGroupArgs>>;
  PostClusterSync?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationPostClusterSyncArgs>>;
  PostStatusManager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManagerResponse']>, ParentType, ContextType, Partial<MutationPostStatusManagerArgs>>;
  UninstallStatusManager?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationUninstallStatusManagerArgs>>;
  UpdateCluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterPatchResponse']>, ParentType, ContextType, Partial<MutationUpdateClusterArgs>>;
  UpdateCrdController?: Resolver<Maybe<ResolversTypes['OpenShiftCmCrdResponse']>, ParentType, ContextType, Partial<MutationUpdateCrdControllerArgs>>;
  UpdateFinalizerController?: Resolver<Maybe<ResolversTypes['OpenShiftCmFinalizerResponse']>, ParentType, ContextType, Partial<MutationUpdateFinalizerControllerArgs>>;
  UpdateProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupResponse']>, ParentType, ContextType, Partial<MutationUpdateProtectionGroupArgs>>;
  UpdateRegistry?: Resolver<Maybe<ResolversTypes['OpenShiftCmRegistryResponse']>, ParentType, ContextType, Partial<MutationUpdateRegistryArgs>>;
  UpdateSchedulerWorkload?: Resolver<Maybe<ResolversTypes['OpenShiftCmSchedulerResponse']>, ParentType, ContextType, Partial<MutationUpdateSchedulerWorkloadArgs>>;
  UpdateStatusManager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManagerResponse']>, ParentType, ContextType, Partial<MutationUpdateStatusManagerArgs>>;
  UpdateWorkload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkloadResponse']>, ParentType, ContextType, Partial<MutationUpdateWorkloadArgs>>;
  VerifyClusterCredential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationVerifyClusterCredentialArgs>>;
}>;

export type OpenShiftCmClusterResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmCluster'] = ResolversParentTypes['OpenShiftCmCluster']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_group?: Resolver<Maybe<ResolversTypes['CloudUserGroup']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterStatus']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterSyncStatus']>, ParentType, ContextType>;
  synchronized_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterTypeCodeEnum']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterCreationResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterCreationResponse'] = ResolversParentTypes['OpenShiftCmClusterCreationResponse']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  status_manager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterNodeAddressTypeEnumResolvers = { EXTERNALDNS: 'ExternalDNS', EXTERNALIP: 'ExternalIP', HOSTNAME: 'Hostname', INTERNALDNS: 'InternalDNS', INTERNALIP: 'InternalIP' };

export type OpenShiftCmClusterPatchResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterPatchResponse'] = ResolversParentTypes['OpenShiftCmClusterPatchResponse']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterRequest'] = ResolversParentTypes['OpenShiftCmClusterRequest']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  status_manager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterResourceServiceTypeEnumResolvers = { CLUSTERIP: 'ClusterIP', EXTERNALNAME: 'ExternalName', LOADBALANCER: 'LoadBalancer', NODEPORT: 'NodePort' };

export type OpenShiftCmClusterResourceVolumeTypeEnumResolvers = { AWS_ELASTIC_BLOCK_STORE: 'awsElasticBlockStore', AZURE_DISK: 'azureDisk', AZURE_FILE: 'azureFile', CEPHFS: 'cephfs', CINDER: 'cinder', CONFIG_MAP: 'configMap', CSI: 'csi', EMPTY_DIR: 'emptyDir', EPHEMERAL: 'ephemeral', FC: 'fc', FLEX_VOLUME: 'flexVolume', FLOCKER: 'flocker', GCE_PERSISTENT_DISK: 'gcePersistentDisk', GIT_REPO: 'gitRepo', GLUSTERFS: 'glusterfs', HOST_PATH: 'hostPath', ISCSI: 'iscsi', NFS: 'nfs', PERSISTENT_VOLUME_CLAIM: 'persistentVolumeClaim', PHOTON_PERSISTENT_DISK: 'photonPersistentDisk', PORTWORX_VOLUME: 'portworxVolume', QUOBYTE: 'quobyte', RBD: 'rbd', SCALE_I_O: 'scaleIO', STORAGEOS: 'storageos', VSPHERE_VOLUME: 'vsphereVolume' };

export type OpenShiftCmClusterResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterResponse'] = ResolversParentTypes['OpenShiftCmClusterResponse']> = ResolversObject<{
  cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  status_manager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterStateCodeEnumResolvers = { CLUSTER_STATE_ACTIVE: 'cluster.state.active', CLUSTER_STATE_INACTIVE: 'cluster.state.inactive', CLUSTER_STATE_UNKNOWN: 'cluster.state.unknown' };

export type OpenShiftCmClusterStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterStatus'] = ResolversParentTypes['OpenShiftCmClusterStatus']> = ResolversObject<{
  reason?: Resolver<Maybe<ResolversTypes['OpenShiftCmMessage']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterSyncStateCodeEnumResolvers = { CLUSTER_SYNC_STATE_SYNCHRONIZED: 'cluster.sync.state.synchronized', CLUSTER_SYNC_STATE_SYNCHRONIZE_FAILED: 'cluster.sync.state.synchronize-failed', CLUSTER_SYNC_STATE_SYNCHRONIZING: 'cluster.sync.state.synchronizing', CLUSTER_SYNC_STATE_UNKNOWN: 'cluster.sync.state.unknown' };

export type OpenShiftCmClusterSyncStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClusterSyncStatus'] = ResolversParentTypes['OpenShiftCmClusterSyncStatus']> = ResolversObject<{
  reason?: Resolver<Maybe<ResolversTypes['OpenShiftCmMessage']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterSyncStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmClusterTypeCodeEnumResolvers = { CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes', CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift' };

export type OpenShiftCmClustersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmClustersResponse'] = ResolversParentTypes['OpenShiftCmClustersResponse']> = ResolversObject<{
  clusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmCluster']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmConnectionCheckRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmConnectionCheckRequest'] = ResolversParentTypes['OpenShiftCmConnectionCheckRequest']> = ResolversObject<{
  status_manager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmCrdResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmCrd'] = ResolversParentTypes['OpenShiftCmCrd']> = ResolversObject<{
  controller_workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkload']>>>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmCrdResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmCrdResponse'] = ResolversParentTypes['OpenShiftCmCrdResponse']> = ResolversObject<{
  custom_resource_definition?: Resolver<Maybe<ResolversTypes['OpenShiftCmCrd']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmCrdsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmCrdsResponse'] = ResolversParentTypes['OpenShiftCmCrdsResponse']> = ResolversObject<{
  custom_resource_definitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmCrd']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmFinalizerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmFinalizer'] = ResolversParentTypes['OpenShiftCmFinalizer']> = ResolversObject<{
  controller_workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmFinalizerRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmFinalizerRequest'] = ResolversParentTypes['OpenShiftCmFinalizerRequest']> = ResolversObject<{
  finalizer?: Resolver<Maybe<ResolversTypes['OpenShiftCmFinalizer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmFinalizerResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmFinalizerResponse'] = ResolversParentTypes['OpenShiftCmFinalizerResponse']> = ResolversObject<{
  finalizer?: Resolver<Maybe<ResolversTypes['OpenShiftCmFinalizer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmFinalizersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmFinalizersResponse'] = ResolversParentTypes['OpenShiftCmFinalizersResponse']> = ResolversObject<{
  finalizers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmFinalizer']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmMessageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmMessage'] = ResolversParentTypes['OpenShiftCmMessage']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNamespaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNamespace'] = ResolversParentTypes['OpenShiftCmNamespace']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNamespacesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNamespacesResponse'] = ResolversParentTypes['OpenShiftCmNamespacesResponse']> = ResolversObject<{
  namespaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmNamespace']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNodeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNode'] = ResolversParentTypes['OpenShiftCmNode']> = ResolversObject<{
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmNodeAddress']>>>, ParentType, ContextType>;
  hostname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNodeAddressResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNodeAddress'] = ResolversParentTypes['OpenShiftCmNodeAddress']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterNodeAddressTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNodesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNodesResponse'] = ResolversParentTypes['OpenShiftCmNodesResponse']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmNode']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmPaginationResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmPagination'] = ResolversParentTypes['OpenShiftCmPagination']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_items?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  total_page?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmPriorityClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmPriorityClass'] = ResolversParentTypes['OpenShiftCmPriorityClass']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmPriorityClassesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmPriorityClassesResponse'] = ResolversParentTypes['OpenShiftCmPriorityClassesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  priority_classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmPriorityClass']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroup'] = ResolversParentTypes['OpenShiftCmProtectionGroup']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_cluster_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_objective?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  recovery_point_objective_type?: Resolver<Maybe<ResolversTypes['OpenShiftCmRecoveryPointObjectiveTypeEnum']>, ParentType, ContextType>;
  recovery_time_objective?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupTargetEnum']>, ParentType, ContextType>;
  target_namespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroupInfo'] = ResolversParentTypes['OpenShiftCmProtectionGroupInfo']> = ResolversObject<{
  finalizers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmFinalizer']>>>, ParentType, ContextType>;
  namespaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmNamespace']>>>, ParentType, ContextType>;
  priority_classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmPriorityClass']>>>, ParentType, ContextType>;
  readiness_gate_conditions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  registries?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmRegistry']>>>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  runtime_classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmRuntimeClass']>>>, ParentType, ContextType>;
  schedulers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmScheduler']>>>, ParentType, ContextType>;
  service_accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmServiceAccount']>>>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmService']>>>, ParentType, ContextType>;
  volume_snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolume']>>>, ParentType, ContextType>;
  workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupInfoResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroupInfoResponse'] = ResolversParentTypes['OpenShiftCmProtectionGroupInfoResponse']> = ResolversObject<{
  protection_group_info?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroupRequest'] = ResolversParentTypes['OpenShiftCmProtectionGroupRequest']> = ResolversObject<{
  protection_group?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroupResponse'] = ResolversParentTypes['OpenShiftCmProtectionGroupResponse']> = ResolversObject<{
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  protection_group?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupTargetEnumResolvers = { CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_ANY_WORKLOADS: 'cdm.cm-openshift.protection-group.target.any-workloads', CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_CLUSTER_WORKLOAD: 'cdm.cm-openshift.protection-group.target.cluster-workload', CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_NAMESPACE_WORKLOADS: 'cdm.cm-openshift.protection-group.target.namespace-workloads' };

export type OpenShiftCmProtectionGroupWorkloadsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroupWorkloadsResponse'] = ResolversParentTypes['OpenShiftCmProtectionGroupWorkloadsResponse']> = ResolversObject<{
  protection_group_workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmProtectionGroupsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmProtectionGroupsResponse'] = ResolversParentTypes['OpenShiftCmProtectionGroupsResponse']> = ResolversObject<{
  protection_cluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmCluster']>, ParentType, ContextType>;
  protection_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmProtectionGroup']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmPublicKeyResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmPublicKeyResponse'] = ResolversParentTypes['OpenShiftCmPublicKeyResponse']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRecoveryPointObjectiveTypeEnumResolvers = { RECOVERY_POINT_OBJECTIVE_TYPE_DAY: 'recovery.point.objective.type.day', RECOVERY_POINT_OBJECTIVE_TYPE_HOUR: 'recovery.point.objective.type.hour', RECOVERY_POINT_OBJECTIVE_TYPE_MINUTE: 'recovery.point.objective.type.minute' };

export type OpenShiftCmRegistriesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRegistriesResponse'] = ResolversParentTypes['OpenShiftCmRegistriesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  registries?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmRegistry']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRegistryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRegistry'] = ResolversParentTypes['OpenShiftCmRegistry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  image_pull_secret_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  is_private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_required_push_credential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  push_credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRegistryRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRegistryRequest'] = ResolversParentTypes['OpenShiftCmRegistryRequest']> = ResolversObject<{
  registry?: Resolver<Maybe<ResolversTypes['OpenShiftCmRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRegistryResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRegistryResponse'] = ResolversParentTypes['OpenShiftCmRegistryResponse']> = ResolversObject<{
  registry?: Resolver<Maybe<ResolversTypes['OpenShiftCmRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmResourceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmResource'] = ResolversParentTypes['OpenShiftCmResource']> = ResolversObject<{
  dependency_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  dependent_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigInt']>>>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manifest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmResourceResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmResourceResponse'] = ResolversParentTypes['OpenShiftCmResourceResponse']> = ResolversObject<{
  resource?: Resolver<Maybe<ResolversTypes['OpenShiftCmResource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmResourcesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmResourcesResponse'] = ResolversParentTypes['OpenShiftCmResourcesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRuntimeClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRuntimeClass'] = ResolversParentTypes['OpenShiftCmRuntimeClass']> = ResolversObject<{
  handler?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmRuntimeClassesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRuntimeClassesResponse'] = ResolversParentTypes['OpenShiftCmRuntimeClassesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  runtime_classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmRuntimeClass']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmSchedulerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmScheduler'] = ResolversParentTypes['OpenShiftCmScheduler']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmSchedulerRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmSchedulerRequest'] = ResolversParentTypes['OpenShiftCmSchedulerRequest']> = ResolversObject<{
  scheduler?: Resolver<Maybe<ResolversTypes['OpenShiftCmScheduler']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmSchedulerResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmSchedulerResponse'] = ResolversParentTypes['OpenShiftCmSchedulerResponse']> = ResolversObject<{
  scheduler?: Resolver<Maybe<ResolversTypes['OpenShiftCmScheduler']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmSchedulersResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmSchedulersResponse'] = ResolversParentTypes['OpenShiftCmSchedulersResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  schedulers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmScheduler']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmServiceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmService'] = ResolversParentTypes['OpenShiftCmService']> = ResolversObject<{
  cluster_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load_balancer_source_ranges?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterResourceServiceTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmServiceAccountResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmServiceAccount'] = ResolversParentTypes['OpenShiftCmServiceAccount']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmServiceAccountsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmServiceAccountsResponse'] = ResolversParentTypes['OpenShiftCmServiceAccountsResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  service_accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmServiceAccount']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStatusManagerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStatusManager'] = ResolversParentTypes['OpenShiftCmStatusManager']> = ResolversObject<{
  broker_port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  installed_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_upgraded_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManagerStatus']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStatusManagerInstallationRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStatusManagerInstallationRequest'] = ResolversParentTypes['OpenShiftCmStatusManagerInstallationRequest']> = ResolversObject<{
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStatusManagerRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStatusManagerRequest'] = ResolversParentTypes['OpenShiftCmStatusManagerRequest']> = ResolversObject<{
  status_manager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStatusManagerResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStatusManagerResponse'] = ResolversParentTypes['OpenShiftCmStatusManagerResponse']> = ResolversObject<{
  status_manager?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStatusManagerStateCodeEnumResolvers = { CDM_SM_OPENSHIFT_CONNECTION_FAILED: 'cdm.sm-openshift.connection_failed', CDM_SM_OPENSHIFT_STATE_ACTIVE: 'cdm.sm-openshift.state.active', CDM_SM_OPENSHIFT_STATE_NOT_INSTALLED: 'cdm.sm-openshift.state.not_installed', CDM_SM_OPENSHIFT_STATE_NO_CONNECTION_INFO: 'cdm.sm-openshift.state.no_connection_info', CDM_SM_OPENSHIFT_STATE_UNKNOWN: 'cdm.sm-openshift.state.unknown', CDM_SM_OPENSHIFT_STATE_WARNING: 'cdm.sm-openshift.state.warning' };

export type OpenShiftCmStatusManagerStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStatusManagerStatus'] = ResolversParentTypes['OpenShiftCmStatusManagerStatus']> = ResolversObject<{
  reason?: Resolver<Maybe<ResolversTypes['OpenShiftCmMessage']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManagerStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStatusManagerVersionsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStatusManagerVersionsResponse'] = ResolversParentTypes['OpenShiftCmStatusManagerVersionsResponse']> = ResolversObject<{
  versions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStorageClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStorageClass'] = ResolversParentTypes['OpenShiftCmStorageClass']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provisioner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmStorageClassesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmStorageClassesResponse'] = ResolversParentTypes['OpenShiftCmStorageClassesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  storage_classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmStorageClass']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVerificationCredentialResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVerificationCredential'] = ResolversParentTypes['OpenShiftCmVerificationCredential']> = ResolversObject<{
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_code?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterTypeCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolume'] = ResolversParentTypes['OpenShiftCmVolume']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterResourceVolumeTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeResponse'] = ResolversParentTypes['OpenShiftCmVolumeResponse']> = ResolversObject<{
  volume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshot'] = ResolversParentTypes['OpenShiftCmVolumeSnapshot']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  volume_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshotClass'] = ResolversParentTypes['OpenShiftCmVolumeSnapshotClass']> = ResolversObject<{
  driver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotClassesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshotClassesResponse'] = ResolversParentTypes['OpenShiftCmVolumeSnapshotClassesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  volume_snapshot_classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotClass']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshotsResponse'] = ResolversParentTypes['OpenShiftCmVolumeSnapshotsResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  volume_snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumesResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumesResponse'] = ResolversParentTypes['OpenShiftCmVolumesResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkload'] = ResolversParentTypes['OpenShiftCmWorkload']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkloadVolume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkloadRequest'] = ResolversParentTypes['OpenShiftCmWorkloadRequest']> = ResolversObject<{
  workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkloadResponse'] = ResolversParentTypes['OpenShiftCmWorkloadResponse']> = ResolversObject<{
  workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkloadVolume'] = ResolversParentTypes['OpenShiftCmWorkloadVolume']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmWorkloadsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkloadsResponse'] = ResolversParentTypes['OpenShiftCmWorkloadsResponse']> = ResolversObject<{
  pagination?: Resolver<Maybe<ResolversTypes['OpenShiftCmPagination']>, ParentType, ContextType>;
  workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftDrCrdRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftDrCrdRequest'] = ResolversParentTypes['OpenShiftDrCrdRequest']> = ResolversObject<{
  custom_resource_definition?: Resolver<Maybe<ResolversTypes['OpenShiftCmCrd']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetCluster?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterResponse']>, ParentType, ContextType, Partial<QueryGetClusterArgs>>;
  GetClusters?: Resolver<Maybe<ResolversTypes['OpenShiftCmClustersResponse']>, ParentType, ContextType, Partial<QueryGetClustersArgs>>;
  GetCrds?: Resolver<Maybe<ResolversTypes['OpenShiftCmCrdsResponse']>, ParentType, ContextType, Partial<QueryGetCrdsArgs>>;
  GetFinalizers?: Resolver<Maybe<ResolversTypes['OpenShiftCmFinalizersResponse']>, ParentType, ContextType, Partial<QueryGetFinalizersArgs>>;
  GetNamespaces?: Resolver<Maybe<ResolversTypes['OpenShiftCmNamespacesResponse']>, ParentType, ContextType, Partial<QueryGetNamespacesArgs>>;
  GetNodes?: Resolver<Maybe<ResolversTypes['OpenShiftCmNodesResponse']>, ParentType, ContextType, Partial<QueryGetNodesArgs>>;
  GetPriorityClasses?: Resolver<Maybe<ResolversTypes['OpenShiftCmPriorityClassesResponse']>, ParentType, ContextType, Partial<QueryGetPriorityClassesArgs>>;
  GetProtectionGroup?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupArgs>>;
  GetProtectionGroupInfo?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupInfoResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupInfoArgs>>;
  GetProtectionGroupWorkloads?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupWorkloadsResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupWorkloadsArgs>>;
  GetProtectionGroups?: Resolver<Maybe<ResolversTypes['OpenShiftCmProtectionGroupsResponse']>, ParentType, ContextType, Partial<QueryGetProtectionGroupsArgs>>;
  GetPublicKey?: Resolver<Maybe<ResolversTypes['OpenShiftCmPublicKeyResponse']>, ParentType, ContextType>;
  GetRegistries?: Resolver<Maybe<ResolversTypes['OpenShiftCmRegistriesResponse']>, ParentType, ContextType, Partial<QueryGetRegistriesArgs>>;
  GetResource?: Resolver<Maybe<ResolversTypes['OpenShiftCmResourceResponse']>, ParentType, ContextType, Partial<QueryGetResourceArgs>>;
  GetResources?: Resolver<Maybe<ResolversTypes['OpenShiftCmResourcesResponse']>, ParentType, ContextType, Partial<QueryGetResourcesArgs>>;
  GetRuntimeClasses?: Resolver<Maybe<ResolversTypes['OpenShiftCmRuntimeClassesResponse']>, ParentType, ContextType, Partial<QueryGetRuntimeClassesArgs>>;
  GetSchedulers?: Resolver<Maybe<ResolversTypes['OpenShiftCmSchedulersResponse']>, ParentType, ContextType, Partial<QueryGetSchedulersArgs>>;
  GetServiceAccounts?: Resolver<Maybe<ResolversTypes['OpenShiftCmServiceAccountsResponse']>, ParentType, ContextType, Partial<QueryGetServiceAccountsArgs>>;
  GetStatusManagerVersions?: Resolver<Maybe<ResolversTypes['OpenShiftCmStatusManagerVersionsResponse']>, ParentType, ContextType>;
  GetStorageClasses?: Resolver<Maybe<ResolversTypes['OpenShiftCmStorageClassesResponse']>, ParentType, ContextType, Partial<QueryGetStorageClassesArgs>>;
  GetVolume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeResponse']>, ParentType, ContextType, Partial<QueryGetVolumeArgs>>;
  GetVolumeSnapshotClasses?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotClassesResponse']>, ParentType, ContextType, Partial<QueryGetVolumeSnapshotClassesArgs>>;
  GetVolumeSnapshots?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshotsResponse']>, ParentType, ContextType, Partial<QueryGetVolumeSnapshotsArgs>>;
  GetVolumes?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolumesResponse']>, ParentType, ContextType, Partial<QueryGetVolumesArgs>>;
  GetWorkload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkloadResponse']>, ParentType, ContextType, Partial<QueryGetWorkloadArgs>>;
  GetWorkloads?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkloadsResponse']>, ParentType, ContextType, Partial<QueryGetWorkloadsArgs>>;
}>;

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  CloudLanguageSetEnum?: CloudLanguageSetEnumResolvers;
  CloudRole?: CloudRoleResolvers<ContextType>;
  CloudRoleEnum?: CloudRoleEnumResolvers;
  CloudSession?: CloudSessionResolvers<ContextType>;
  CloudTenant?: CloudTenantResolvers<ContextType>;
  CloudTenantSolution?: CloudTenantSolutionResolvers<ContextType>;
  CloudUser?: CloudUserResolvers<ContextType>;
  CloudUserGroup?: CloudUserGroupResolvers<ContextType>;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OpenShiftCmCluster?: OpenShiftCmClusterResolvers<ContextType>;
  OpenShiftCmClusterCreationResponse?: OpenShiftCmClusterCreationResponseResolvers<ContextType>;
  OpenShiftCmClusterNodeAddressTypeEnum?: OpenShiftCmClusterNodeAddressTypeEnumResolvers;
  OpenShiftCmClusterPatchResponse?: OpenShiftCmClusterPatchResponseResolvers<ContextType>;
  OpenShiftCmClusterRequest?: OpenShiftCmClusterRequestResolvers<ContextType>;
  OpenShiftCmClusterResourceServiceTypeEnum?: OpenShiftCmClusterResourceServiceTypeEnumResolvers;
  OpenShiftCmClusterResourceVolumeTypeEnum?: OpenShiftCmClusterResourceVolumeTypeEnumResolvers;
  OpenShiftCmClusterResponse?: OpenShiftCmClusterResponseResolvers<ContextType>;
  OpenShiftCmClusterStateCodeEnum?: OpenShiftCmClusterStateCodeEnumResolvers;
  OpenShiftCmClusterStatus?: OpenShiftCmClusterStatusResolvers<ContextType>;
  OpenShiftCmClusterSyncStateCodeEnum?: OpenShiftCmClusterSyncStateCodeEnumResolvers;
  OpenShiftCmClusterSyncStatus?: OpenShiftCmClusterSyncStatusResolvers<ContextType>;
  OpenShiftCmClusterTypeCodeEnum?: OpenShiftCmClusterTypeCodeEnumResolvers;
  OpenShiftCmClustersResponse?: OpenShiftCmClustersResponseResolvers<ContextType>;
  OpenShiftCmConnectionCheckRequest?: OpenShiftCmConnectionCheckRequestResolvers<ContextType>;
  OpenShiftCmCrd?: OpenShiftCmCrdResolvers<ContextType>;
  OpenShiftCmCrdResponse?: OpenShiftCmCrdResponseResolvers<ContextType>;
  OpenShiftCmCrdsResponse?: OpenShiftCmCrdsResponseResolvers<ContextType>;
  OpenShiftCmFinalizer?: OpenShiftCmFinalizerResolvers<ContextType>;
  OpenShiftCmFinalizerRequest?: OpenShiftCmFinalizerRequestResolvers<ContextType>;
  OpenShiftCmFinalizerResponse?: OpenShiftCmFinalizerResponseResolvers<ContextType>;
  OpenShiftCmFinalizersResponse?: OpenShiftCmFinalizersResponseResolvers<ContextType>;
  OpenShiftCmMessage?: OpenShiftCmMessageResolvers<ContextType>;
  OpenShiftCmNamespace?: OpenShiftCmNamespaceResolvers<ContextType>;
  OpenShiftCmNamespacesResponse?: OpenShiftCmNamespacesResponseResolvers<ContextType>;
  OpenShiftCmNode?: OpenShiftCmNodeResolvers<ContextType>;
  OpenShiftCmNodeAddress?: OpenShiftCmNodeAddressResolvers<ContextType>;
  OpenShiftCmNodesResponse?: OpenShiftCmNodesResponseResolvers<ContextType>;
  OpenShiftCmPagination?: OpenShiftCmPaginationResolvers<ContextType>;
  OpenShiftCmPriorityClass?: OpenShiftCmPriorityClassResolvers<ContextType>;
  OpenShiftCmPriorityClassesResponse?: OpenShiftCmPriorityClassesResponseResolvers<ContextType>;
  OpenShiftCmProtectionGroup?: OpenShiftCmProtectionGroupResolvers<ContextType>;
  OpenShiftCmProtectionGroupInfo?: OpenShiftCmProtectionGroupInfoResolvers<ContextType>;
  OpenShiftCmProtectionGroupInfoResponse?: OpenShiftCmProtectionGroupInfoResponseResolvers<ContextType>;
  OpenShiftCmProtectionGroupRequest?: OpenShiftCmProtectionGroupRequestResolvers<ContextType>;
  OpenShiftCmProtectionGroupResponse?: OpenShiftCmProtectionGroupResponseResolvers<ContextType>;
  OpenShiftCmProtectionGroupTargetEnum?: OpenShiftCmProtectionGroupTargetEnumResolvers;
  OpenShiftCmProtectionGroupWorkloadsResponse?: OpenShiftCmProtectionGroupWorkloadsResponseResolvers<ContextType>;
  OpenShiftCmProtectionGroupsResponse?: OpenShiftCmProtectionGroupsResponseResolvers<ContextType>;
  OpenShiftCmPublicKeyResponse?: OpenShiftCmPublicKeyResponseResolvers<ContextType>;
  OpenShiftCmRecoveryPointObjectiveTypeEnum?: OpenShiftCmRecoveryPointObjectiveTypeEnumResolvers;
  OpenShiftCmRegistriesResponse?: OpenShiftCmRegistriesResponseResolvers<ContextType>;
  OpenShiftCmRegistry?: OpenShiftCmRegistryResolvers<ContextType>;
  OpenShiftCmRegistryRequest?: OpenShiftCmRegistryRequestResolvers<ContextType>;
  OpenShiftCmRegistryResponse?: OpenShiftCmRegistryResponseResolvers<ContextType>;
  OpenShiftCmResource?: OpenShiftCmResourceResolvers<ContextType>;
  OpenShiftCmResourceResponse?: OpenShiftCmResourceResponseResolvers<ContextType>;
  OpenShiftCmResourcesResponse?: OpenShiftCmResourcesResponseResolvers<ContextType>;
  OpenShiftCmRuntimeClass?: OpenShiftCmRuntimeClassResolvers<ContextType>;
  OpenShiftCmRuntimeClassesResponse?: OpenShiftCmRuntimeClassesResponseResolvers<ContextType>;
  OpenShiftCmScheduler?: OpenShiftCmSchedulerResolvers<ContextType>;
  OpenShiftCmSchedulerRequest?: OpenShiftCmSchedulerRequestResolvers<ContextType>;
  OpenShiftCmSchedulerResponse?: OpenShiftCmSchedulerResponseResolvers<ContextType>;
  OpenShiftCmSchedulersResponse?: OpenShiftCmSchedulersResponseResolvers<ContextType>;
  OpenShiftCmService?: OpenShiftCmServiceResolvers<ContextType>;
  OpenShiftCmServiceAccount?: OpenShiftCmServiceAccountResolvers<ContextType>;
  OpenShiftCmServiceAccountsResponse?: OpenShiftCmServiceAccountsResponseResolvers<ContextType>;
  OpenShiftCmStatusManager?: OpenShiftCmStatusManagerResolvers<ContextType>;
  OpenShiftCmStatusManagerInstallationRequest?: OpenShiftCmStatusManagerInstallationRequestResolvers<ContextType>;
  OpenShiftCmStatusManagerRequest?: OpenShiftCmStatusManagerRequestResolvers<ContextType>;
  OpenShiftCmStatusManagerResponse?: OpenShiftCmStatusManagerResponseResolvers<ContextType>;
  OpenShiftCmStatusManagerStateCodeEnum?: OpenShiftCmStatusManagerStateCodeEnumResolvers;
  OpenShiftCmStatusManagerStatus?: OpenShiftCmStatusManagerStatusResolvers<ContextType>;
  OpenShiftCmStatusManagerVersionsResponse?: OpenShiftCmStatusManagerVersionsResponseResolvers<ContextType>;
  OpenShiftCmStorageClass?: OpenShiftCmStorageClassResolvers<ContextType>;
  OpenShiftCmStorageClassesResponse?: OpenShiftCmStorageClassesResponseResolvers<ContextType>;
  OpenShiftCmVerificationCredential?: OpenShiftCmVerificationCredentialResolvers<ContextType>;
  OpenShiftCmVolume?: OpenShiftCmVolumeResolvers<ContextType>;
  OpenShiftCmVolumeResponse?: OpenShiftCmVolumeResponseResolvers<ContextType>;
  OpenShiftCmVolumeSnapshot?: OpenShiftCmVolumeSnapshotResolvers<ContextType>;
  OpenShiftCmVolumeSnapshotClass?: OpenShiftCmVolumeSnapshotClassResolvers<ContextType>;
  OpenShiftCmVolumeSnapshotClassesResponse?: OpenShiftCmVolumeSnapshotClassesResponseResolvers<ContextType>;
  OpenShiftCmVolumeSnapshotsResponse?: OpenShiftCmVolumeSnapshotsResponseResolvers<ContextType>;
  OpenShiftCmVolumesResponse?: OpenShiftCmVolumesResponseResolvers<ContextType>;
  OpenShiftCmWorkload?: OpenShiftCmWorkloadResolvers<ContextType>;
  OpenShiftCmWorkloadRequest?: OpenShiftCmWorkloadRequestResolvers<ContextType>;
  OpenShiftCmWorkloadResponse?: OpenShiftCmWorkloadResponseResolvers<ContextType>;
  OpenShiftCmWorkloadVolume?: OpenShiftCmWorkloadVolumeResolvers<ContextType>;
  OpenShiftCmWorkloadsResponse?: OpenShiftCmWorkloadsResponseResolvers<ContextType>;
  OpenShiftDrCrdRequest?: OpenShiftDrCrdRequestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

