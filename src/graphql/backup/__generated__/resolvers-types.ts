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

export enum BackupBackupClusterTypeEnum {
  ClusterTypeOpenshift = 'cluster.type.openshift',
  ClusterTypeOpenstack = 'cluster.type.openstack'
}

export type BackupBackupJob = {
  __typename?: 'BackupBackupJob';
  backup_plan?: Maybe<BackupBackupPlan>;
  cluster_type?: Maybe<BackupBackupClusterTypeEnum | `${BackupBackupClusterTypeEnum}`>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  protection_group_resource_name?: Maybe<Scalars['String']['output']>;
  reserved_at?: Maybe<Scalars['BigInt']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BackupBackupJobTypeEnum | `${BackupBackupJobTypeEnum}`>;
};

export type BackupBackupJobInput = {
  backup_plan?: InputMaybe<BackupBackupPlanInput>;
  cluster_type?: InputMaybe<BackupBackupClusterTypeEnum | `${BackupBackupClusterTypeEnum}`>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_group_resource_name?: InputMaybe<Scalars['String']['input']>;
  reserved_at?: InputMaybe<Scalars['BigInt']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BackupBackupJobTypeEnum | `${BackupBackupJobTypeEnum}`>;
};

export type BackupBackupJobRequest = {
  __typename?: 'BackupBackupJobRequest';
  backup_job?: Maybe<BackupBackupJob>;
};

export type BackupBackupJobRequestInput = {
  backup_job?: InputMaybe<BackupBackupJobInput>;
};

export type BackupBackupJobResponse = {
  __typename?: 'BackupBackupJobResponse';
  backup_job?: Maybe<BackupBackupJob>;
};

export type BackupBackupJobResponseInput = {
  backup_job?: InputMaybe<BackupBackupJobInput>;
};

export enum BackupBackupJobStateCodeEnum {
  CdmBackupJobStateDone = 'cdm.backup.job-state.done',
  CdmBackupJobStateFailed = 'cdm.backup.job-state.failed',
  CdmBackupJobStatePending = 'cdm.backup.job-state.pending',
  CdmBackupJobStatePreparing = 'cdm.backup.job-state.preparing',
  CdmBackupJobStateRunning = 'cdm.backup.job-state.running',
  CdmBackupJobStateWaiting = 'cdm.backup.job-state.waiting'
}

export type BackupBackupJobStatus = {
  __typename?: 'BackupBackupJobStatus';
  failed_reason_code?: Maybe<Scalars['String']['output']>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<BackupBackupJobStateCodeEnum | `${BackupBackupJobStateCodeEnum}`>;
};

export type BackupBackupJobStatusInput = {
  failed_reason_code?: InputMaybe<Scalars['String']['input']>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<BackupBackupJobStateCodeEnum | `${BackupBackupJobStateCodeEnum}`>;
};

export type BackupBackupJobStatusResponse = {
  __typename?: 'BackupBackupJobStatusResponse';
  backup_job_status?: Maybe<BackupBackupJobStatus>;
};

export type BackupBackupJobStatusResponseInput = {
  backup_job_status?: InputMaybe<BackupBackupJobStatusInput>;
};

export enum BackupBackupJobTypeEnum {
  CdmBackupJobTypeImmediate = 'cdm.backup.job-type.immediate',
  CdmBackupJobTypeReserved = 'cdm.backup.job-type.reserved',
  CdmBackupJobTypeScheduled = 'cdm.backup.job-type.scheduled'
}

export type BackupBackupJobsResponse = {
  __typename?: 'BackupBackupJobsResponse';
  backup_jobs?: Maybe<Array<Maybe<BackupBackupJob>>>;
};

export type BackupBackupJobsResponseInput = {
  backup_jobs?: InputMaybe<Array<InputMaybe<BackupBackupJobInput>>>;
};

export type BackupBackupPlan = {
  __typename?: 'BackupBackupPlan';
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  export_repository_storage?: Maybe<SmStorage>;
  lagging_time?: Maybe<Scalars['BigInt']['output']>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  repository_storage?: Maybe<SmStorage>;
  resource_name?: Maybe<Scalars['String']['output']>;
  schedules?: Maybe<Array<Maybe<ReplicatorSnapshotSchedule>>>;
};

export type BackupBackupPlanInput = {
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  export_repository_storage?: InputMaybe<SmStorageInput>;
  lagging_time?: InputMaybe<Scalars['BigInt']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  repository_storage?: InputMaybe<SmStorageInput>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  schedules?: InputMaybe<Array<InputMaybe<ReplicatorSnapshotScheduleInput>>>;
};

export type BackupBackupPlanRequest = {
  __typename?: 'BackupBackupPlanRequest';
  backup_plan?: Maybe<BackupBackupPlan>;
};

export type BackupBackupPlanRequestInput = {
  backup_plan?: InputMaybe<BackupBackupPlanInput>;
};

export type BackupBackupPlanResponse = {
  __typename?: 'BackupBackupPlanResponse';
  backup_plan?: Maybe<BackupBackupPlan>;
};

export type BackupBackupPlanResponseInput = {
  backup_plan?: InputMaybe<BackupBackupPlanInput>;
};

export type BackupBackupPlansResponse = {
  __typename?: 'BackupBackupPlansResponse';
  backup_plans?: Maybe<Array<Maybe<BackupBackupPlan>>>;
};

export type BackupBackupPlansResponseInput = {
  backup_plans?: InputMaybe<Array<InputMaybe<BackupBackupPlanInput>>>;
};

export type BackupBackupResult = {
  __typename?: 'BackupBackupResult';
  backup_job?: Maybe<BackupBackupJob>;
  backup_plan?: Maybe<BackupBackupPlan>;
  backup_type?: Maybe<BackupBackupTypeEnum | `${BackupBackupTypeEnum}`>;
  cluster_type?: Maybe<BackupBackupClusterTypeEnum | `${BackupBackupClusterTypeEnum}`>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  elapsed?: Maybe<Scalars['BigInt']['output']>;
  end_at?: Maybe<Scalars['BigInt']['output']>;
  export_repository_storage?: Maybe<SmStorage>;
  job_type?: Maybe<BackupBackupJobTypeEnum | `${BackupBackupJobTypeEnum}`>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  protection_group_name?: Maybe<Scalars['String']['output']>;
  protection_group_resource_name?: Maybe<Scalars['String']['output']>;
  repository_storage?: Maybe<SmStorage>;
  resource_name?: Maybe<Scalars['String']['output']>;
  snapshot?: Maybe<ReplicatorProtectionGroupSnapshot>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
};

export type BackupBackupResultDetailResponse = {
  __typename?: 'BackupBackupResultDetailResponse';
  cluster_type?: Maybe<BackupBackupClusterTypeEnum | `${BackupBackupClusterTypeEnum}`>;
  details?: Maybe<BackupResultProtectionGroupInfo>;
};

export type BackupBackupResultDetailResponseInput = {
  cluster_type?: InputMaybe<BackupBackupClusterTypeEnum | `${BackupBackupClusterTypeEnum}`>;
  details?: InputMaybe<BackupResultProtectionGroupInfoInput>;
};

export type BackupBackupResultInput = {
  backup_job?: InputMaybe<BackupBackupJobInput>;
  backup_plan?: InputMaybe<BackupBackupPlanInput>;
  backup_type?: InputMaybe<BackupBackupTypeEnum | `${BackupBackupTypeEnum}`>;
  cluster_type?: InputMaybe<BackupBackupClusterTypeEnum | `${BackupBackupClusterTypeEnum}`>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  elapsed?: InputMaybe<Scalars['BigInt']['input']>;
  end_at?: InputMaybe<Scalars['BigInt']['input']>;
  export_repository_storage?: InputMaybe<SmStorageInput>;
  job_type?: InputMaybe<BackupBackupJobTypeEnum | `${BackupBackupJobTypeEnum}`>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  protection_group_name?: InputMaybe<Scalars['String']['input']>;
  protection_group_resource_name?: InputMaybe<Scalars['String']['input']>;
  repository_storage?: InputMaybe<SmStorageInput>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  snapshot?: InputMaybe<ReplicatorProtectionGroupSnapshotInput>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BackupBackupResultRequest = {
  __typename?: 'BackupBackupResultRequest';
  backup_result?: Maybe<BackupBackupResult>;
};

export type BackupBackupResultRequestInput = {
  backup_result?: InputMaybe<BackupBackupResultInput>;
};

export type BackupBackupResultResponse = {
  __typename?: 'BackupBackupResultResponse';
  backup_result?: Maybe<BackupBackupResult>;
};

export type BackupBackupResultResponseInput = {
  backup_result?: InputMaybe<BackupBackupResultInput>;
};

export type BackupBackupResultsResponse = {
  __typename?: 'BackupBackupResultsResponse';
  backup_results?: Maybe<Array<Maybe<BackupBackupResult>>>;
};

export type BackupBackupResultsResponseInput = {
  backup_results?: InputMaybe<Array<InputMaybe<BackupBackupResultInput>>>;
};

export enum BackupBackupTypeEnum {
  CdmBackupBackupTypeDifferentialBackup = 'cdm.backup.backup-type.differential-backup',
  CdmBackupBackupTypeFullBackup = 'cdm.backup.backup-type.full-backup',
  CdmBackupBackupTypeIncrementalBackup = 'cdm.backup.backup-type.incremental-backup'
}

export type BackupResultProtectionGroupInfo = {
  __typename?: 'BackupResultProtectionGroupInfo';
  finalizers?: Maybe<Array<Maybe<OpenShiftCmFinalizer>>>;
  instances?: Maybe<Array<Maybe<OpenStackDrInstance>>>;
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
  tenant?: Maybe<OpenStackDrTenant>;
  volume_snapshots?: Maybe<Array<Maybe<OpenShiftCmVolumeSnapshot>>>;
  volumes?: Maybe<Array<Maybe<OpenShiftCmVolume>>>;
  workloads?: Maybe<Array<Maybe<OpenShiftCmWorkload>>>;
};

export type BackupResultProtectionGroupInfoInput = {
  finalizers?: InputMaybe<Array<InputMaybe<OpenShiftCmFinalizerInput>>>;
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceInput>>>;
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
  tenant?: InputMaybe<OpenStackDrTenantInput>;
  volume_snapshots?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeSnapshotInput>>>;
  volumes?: InputMaybe<Array<InputMaybe<OpenShiftCmVolumeInput>>>;
  workloads?: InputMaybe<Array<InputMaybe<OpenShiftCmWorkloadInput>>>;
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

export type CreateBackupJobInput = {
  backupBackupJobRequest?: InputMaybe<BackupBackupJobRequestInput>;
};

export type CreateBackupPlanInput = {
  backupBackupPlanRequest?: InputMaybe<BackupBackupPlanRequestInput>;
};

export type DeleteBackupJobInput = {
  backupJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteBackupPlanInput = {
  backupPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteBackupResultInput = {
  backupResultResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateBackupJob?: Maybe<BackupBackupJobResponse>;
  CreateBackupPlan?: Maybe<BackupBackupPlanResponse>;
  DeleteBackupJob?: Maybe<Scalars['Boolean']['output']>;
  DeleteBackupPlan?: Maybe<Scalars['Boolean']['output']>;
  DeleteBackupResult?: Maybe<Scalars['Boolean']['output']>;
  UpdateBackupJob?: Maybe<BackupBackupJobResponse>;
  UpdateBackupPlan?: Maybe<BackupBackupPlanResponse>;
  UpdateBackupResult?: Maybe<BackupBackupResultResponse>;
};


export type MutationCreateBackupJobArgs = {
  input?: InputMaybe<CreateBackupJobInput>;
};


export type MutationCreateBackupPlanArgs = {
  input?: InputMaybe<CreateBackupPlanInput>;
};


export type MutationDeleteBackupJobArgs = {
  input?: InputMaybe<DeleteBackupJobInput>;
};


export type MutationDeleteBackupPlanArgs = {
  input?: InputMaybe<DeleteBackupPlanInput>;
};


export type MutationDeleteBackupResultArgs = {
  input?: InputMaybe<DeleteBackupResultInput>;
};


export type MutationUpdateBackupJobArgs = {
  input?: InputMaybe<UpdateBackupJobInput>;
};


export type MutationUpdateBackupPlanArgs = {
  input?: InputMaybe<UpdateBackupPlanInput>;
};


export type MutationUpdateBackupResultArgs = {
  input?: InputMaybe<UpdateBackupResultInput>;
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

export type OpenShiftCmNamespace = {
  __typename?: 'OpenShiftCmNamespace';
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmNamespaceInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
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

export type OpenShiftCmVolumeSnapshot = {
  __typename?: 'OpenShiftCmVolumeSnapshot';
  name?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['BigInt']['output']>;
  volume_id?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenShiftCmVolumeSnapshotInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['BigInt']['input']>;
  volume_id?: InputMaybe<Scalars['BigInt']['input']>;
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

export type OpenShiftCmWorkloadVolume = {
  __typename?: 'OpenShiftCmWorkloadVolume';
  name?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<OpenShiftCmVolume>;
};

export type OpenShiftCmWorkloadVolumeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<OpenShiftCmVolumeInput>;
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

export type OpenStackCmClusterTenantQuota = {
  __typename?: 'OpenStackCmClusterTenantQuota';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackCmClusterTenantQuotaInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrExternalRoutingInterface = {
  __typename?: 'OpenStackDrExternalRoutingInterface';
  ip_address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<OpenStackDrNetwork>;
  subnet?: Maybe<OpenStackDrSubnet>;
};

export type OpenStackDrExternalRoutingInterfaceInput = {
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackDrNetworkInput>;
  subnet?: InputMaybe<OpenStackDrSubnetInput>;
};

export type OpenStackDrFloatingIp = {
  __typename?: 'OpenStackDrFloatingIp';
  ip_address?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrFloatingIpInput = {
  ip_address?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstance = {
  __typename?: 'OpenStackDrInstance';
  availability_zone?: Maybe<OpenStackDrInstanceAvailabilityZone>;
  hypervisor?: Maybe<OpenStackDrInstanceHypervisor>;
  keypair?: Maybe<OpenStackDrKeypair>;
  name?: Maybe<Scalars['String']['output']>;
  networks?: Maybe<Array<Maybe<OpenStackDrNetwork>>>;
  routers?: Maybe<Array<Maybe<OpenStackDrRouter>>>;
  security_groups?: Maybe<Array<Maybe<OpenStackDrSecurityGroup>>>;
  spec?: Maybe<OpenStackDrSpec>;
  uuid?: Maybe<Scalars['String']['output']>;
  volumes?: Maybe<Array<Maybe<OpenStackDrVolume>>>;
};

export type OpenStackDrInstanceAvailabilityZone = {
  __typename?: 'OpenStackDrInstanceAvailabilityZone';
  name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceAvailabilityZoneInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceHypervisor = {
  __typename?: 'OpenStackDrInstanceHypervisor';
  host_name?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrInstanceHypervisorInput = {
  host_name?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrInstanceInput = {
  availability_zone?: InputMaybe<OpenStackDrInstanceAvailabilityZoneInput>;
  hypervisor?: InputMaybe<OpenStackDrInstanceHypervisorInput>;
  keypair?: InputMaybe<OpenStackDrKeypairInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  networks?: InputMaybe<Array<InputMaybe<OpenStackDrNetworkInput>>>;
  routers?: InputMaybe<Array<InputMaybe<OpenStackDrRouterInput>>>;
  security_groups?: InputMaybe<Array<InputMaybe<OpenStackDrSecurityGroupInput>>>;
  spec?: InputMaybe<OpenStackDrSpecInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  volumes?: InputMaybe<Array<InputMaybe<OpenStackDrVolumeInput>>>;
};

export type OpenStackDrInternalRoutingInterface = {
  __typename?: 'OpenStackDrInternalRoutingInterface';
  ip_address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<OpenStackDrNetwork>;
  subnet?: Maybe<OpenStackDrSubnet>;
};

export type OpenStackDrInternalRoutingInterfaceInput = {
  ip_address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<OpenStackDrNetworkInput>;
  subnet?: InputMaybe<OpenStackDrSubnetInput>;
};

export type OpenStackDrKeypair = {
  __typename?: 'OpenStackDrKeypair';
  fingerprint?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OpenStackDrKeypairTypeEnum | `${OpenStackDrKeypairTypeEnum}`>;
};

export type OpenStackDrKeypairInput = {
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OpenStackDrKeypairTypeEnum | `${OpenStackDrKeypairTypeEnum}`>;
};

export enum OpenStackDrKeypairTypeEnum {
  OpenstackKeypairTypeSsh = 'openstack.keypair.type.ssh',
  OpenstackKeypairTypeX509 = 'openstack.keypair.type.x509'
}

export type OpenStackDrNetwork = {
  __typename?: 'OpenStackDrNetwork';
  dhcp_flag?: Maybe<Scalars['Boolean']['output']>;
  external_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ips?: Maybe<Array<Maybe<OpenStackDrFloatingIp>>>;
  ip_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subnets?: Maybe<Array<Maybe<OpenStackDrSubnet>>>;
  type?: Maybe<OpenStackDrNetworkTypeEnum | `${OpenStackDrNetworkTypeEnum}`>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrNetworkInput = {
  dhcp_flag?: InputMaybe<Scalars['Boolean']['input']>;
  external_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackDrFloatingIpInput>>>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackDrSubnetInput>>>;
  type?: InputMaybe<OpenStackDrNetworkTypeEnum | `${OpenStackDrNetworkTypeEnum}`>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrNetworkTypeEnum {
  OpenstackNetworkTypeFlat = 'openstack.network.type.flat',
  OpenstackNetworkTypeGre = 'openstack.network.type.gre',
  OpenstackNetworkTypeLocal = 'openstack.network.type.local',
  OpenstackNetworkTypeVlan = 'openstack.network.type.vlan',
  OpenstackNetworkTypeVxlan = 'openstack.network.type.vxlan'
}

export type OpenStackDrProtectionGroupInfo = {
  __typename?: 'OpenStackDrProtectionGroupInfo';
  instances?: Maybe<Array<Maybe<OpenStackDrInstance>>>;
  tenant?: Maybe<OpenStackDrTenant>;
};

export type OpenStackDrProtectionGroupInfoInput = {
  instances?: InputMaybe<Array<InputMaybe<OpenStackDrInstanceInput>>>;
  tenant?: InputMaybe<OpenStackDrTenantInput>;
};

export type OpenStackDrRouter = {
  __typename?: 'OpenStackDrRouter';
  external_routing_interfaces?: Maybe<Array<Maybe<OpenStackDrExternalRoutingInterface>>>;
  extra_routes?: Maybe<Array<Maybe<OpenStackDrRouterExtraRoute>>>;
  internal_routing_interfaces?: Maybe<Array<Maybe<OpenStackDrInternalRoutingInterface>>>;
  name?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrRouterExtraRoute = {
  __typename?: 'OpenStackDrRouterExtraRoute';
  destination?: Maybe<Scalars['String']['output']>;
  nexthop?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrRouterExtraRouteInput = {
  destination?: InputMaybe<Scalars['String']['input']>;
  nexthop?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrRouterInput = {
  external_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackDrExternalRoutingInterfaceInput>>>;
  extra_routes?: InputMaybe<Array<InputMaybe<OpenStackDrRouterExtraRouteInput>>>;
  internal_routing_interfaces?: InputMaybe<Array<InputMaybe<OpenStackDrInternalRoutingInterfaceInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrSecurityGroup = {
  __typename?: 'OpenStackDrSecurityGroup';
  name?: Maybe<Scalars['String']['output']>;
  security_group_rules?: Maybe<Array<Maybe<OpenStackDrSecurityGroupRule>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrSecurityGroupInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  security_group_rules?: InputMaybe<Array<InputMaybe<OpenStackDrSecurityGroupRuleInput>>>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrSecurityGroupRule = {
  __typename?: 'OpenStackDrSecurityGroupRule';
  direction?: Maybe<OpenStackDrSecurityGroupRuleDirectionEnum | `${OpenStackDrSecurityGroupRuleDirectionEnum}`>;
  ether_type?: Maybe<OpenStackDrSecurityGroupRuleEtherTypeEnum | `${OpenStackDrSecurityGroupRuleEtherTypeEnum}`>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  port_range_max?: Maybe<Scalars['BigInt']['output']>;
  port_range_min?: Maybe<Scalars['BigInt']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export enum OpenStackDrSecurityGroupRuleDirectionEnum {
  Egress = 'egress',
  Ingress = 'ingress'
}

export enum OpenStackDrSecurityGroupRuleEtherTypeEnum {
  Four = '4',
  Six = '6'
}

export type OpenStackDrSecurityGroupRuleInput = {
  direction?: InputMaybe<OpenStackDrSecurityGroupRuleDirectionEnum | `${OpenStackDrSecurityGroupRuleDirectionEnum}`>;
  ether_type?: InputMaybe<OpenStackDrSecurityGroupRuleEtherTypeEnum | `${OpenStackDrSecurityGroupRuleEtherTypeEnum}`>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  port_range_max?: InputMaybe<Scalars['BigInt']['input']>;
  port_range_min?: InputMaybe<Scalars['BigInt']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrSpec = {
  __typename?: 'OpenStackDrSpec';
  disk_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  ephemeral_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  extra_specs?: Maybe<Array<Maybe<OpenStackCmClusterInstanceExtraSpec>>>;
  mem_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  swap_total_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  vcpu_total_cnt?: Maybe<Scalars['BigInt']['output']>;
};

export type OpenStackDrSpecInput = {
  disk_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  ephemeral_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  extra_specs?: InputMaybe<Array<InputMaybe<OpenStackCmClusterInstanceExtraSpecInput>>>;
  mem_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  swap_total_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  vcpu_total_cnt?: InputMaybe<Scalars['BigInt']['input']>;
};

export type OpenStackDrStorage = {
  __typename?: 'OpenStackDrStorage';
  capacity_bytes?: Maybe<Scalars['BigInt']['output']>;
  credential?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OpenStackDrStorageTypeEnum | `${OpenStackDrStorageTypeEnum}`>;
  used_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrStorageInput = {
  capacity_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OpenStackDrStorageTypeEnum | `${OpenStackDrStorageTypeEnum}`>;
  used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrStorageTypeEnum {
  OpenstackStorageTypeLvm = 'openstack.storage.type.lvm',
  OpenstackStorageTypeNfs = 'openstack.storage.type.nfs'
}

export type OpenStackDrSubnet = {
  __typename?: 'OpenStackDrSubnet';
  dhcp_enabled?: Maybe<Scalars['Boolean']['output']>;
  dhcp_pools?: Maybe<Array<Maybe<OpenStackDrSubnetDhcpPool>>>;
  gateway_enabled?: Maybe<Scalars['Boolean']['output']>;
  gateway_ip_address?: Maybe<Scalars['String']['output']>;
  ipv6_address_mode_code?: Maybe<OpenStackDrSubnetIpv6AddressModeCodeEnum | `${OpenStackDrSubnetIpv6AddressModeCodeEnum}`>;
  ipv6_ra_mode_code?: Maybe<OpenStackDrSubnetIpv6RaModeCodeEnum | `${OpenStackDrSubnetIpv6RaModeCodeEnum}`>;
  name?: Maybe<Scalars['String']['output']>;
  nameservers?: Maybe<Array<Maybe<OpenStackDrSubnetNameserver>>>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrSubnetDhcpPool = {
  __typename?: 'OpenStackDrSubnetDhcpPool';
  end_ip_address?: Maybe<Scalars['String']['output']>;
  start_ip_address?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrSubnetDhcpPoolInput = {
  end_ip_address?: InputMaybe<Scalars['String']['input']>;
  start_ip_address?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrSubnetInput = {
  dhcp_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  dhcp_pools?: InputMaybe<Array<InputMaybe<OpenStackDrSubnetDhcpPoolInput>>>;
  gateway_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  gateway_ip_address?: InputMaybe<Scalars['String']['input']>;
  ipv6_address_mode_code?: InputMaybe<OpenStackDrSubnetIpv6AddressModeCodeEnum | `${OpenStackDrSubnetIpv6AddressModeCodeEnum}`>;
  ipv6_ra_mode_code?: InputMaybe<OpenStackDrSubnetIpv6RaModeCodeEnum | `${OpenStackDrSubnetIpv6RaModeCodeEnum}`>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameservers?: InputMaybe<Array<InputMaybe<OpenStackDrSubnetNameserverInput>>>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrSubnetIpv6AddressModeCodeEnum {
  Dhcpv6Stateful = 'dhcpv6-stateful',
  Dhcpv6Stateless = 'dhcpv6-stateless',
  Slaac = 'slaac'
}

export enum OpenStackDrSubnetIpv6RaModeCodeEnum {
  Dhcpv6Stateful = 'dhcpv6-stateful',
  Dhcpv6Stateless = 'dhcpv6-stateless',
  Slaac = 'slaac'
}

export type OpenStackDrSubnetNameserver = {
  __typename?: 'OpenStackDrSubnetNameserver';
  nameserver?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrSubnetNameserverInput = {
  nameserver?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrTenant = {
  __typename?: 'OpenStackDrTenant';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quotas?: Maybe<Array<Maybe<OpenStackCmClusterTenantQuota>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrTenantInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quotas?: InputMaybe<Array<InputMaybe<OpenStackCmClusterTenantQuotaInput>>>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrVolume = {
  __typename?: 'OpenStackDrVolume';
  boot_index?: Maybe<Scalars['BigInt']['output']>;
  bootable?: Maybe<Scalars['Boolean']['output']>;
  device_path?: Maybe<Scalars['String']['output']>;
  multiattach?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  size_bytes?: Maybe<Scalars['BigInt']['output']>;
  snapshots?: Maybe<Array<Maybe<OpenStackDrVolumeSnapshot>>>;
  storage?: Maybe<OpenStackDrStorage>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrVolumeInput = {
  boot_index?: InputMaybe<Scalars['BigInt']['input']>;
  bootable?: InputMaybe<Scalars['Boolean']['input']>;
  device_path?: InputMaybe<Scalars['String']['input']>;
  multiattach?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<OpenStackDrVolumeSnapshotInput>>>;
  storage?: InputMaybe<OpenStackDrStorageInput>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OpenStackDrVolumeSnapshot = {
  __typename?: 'OpenStackDrVolumeSnapshot';
  cluster_volume_group_snapshot_uuid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrVolumeSnapshotInput = {
  cluster_volume_group_snapshot_uuid?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  GetBackupJob?: Maybe<BackupBackupJobResponse>;
  GetBackupJobStatus?: Maybe<BackupBackupJobStatusResponse>;
  GetBackupJobs?: Maybe<BackupBackupJobsResponse>;
  GetBackupPlan?: Maybe<BackupBackupPlanResponse>;
  GetBackupPlans?: Maybe<BackupBackupPlansResponse>;
  GetBackupResult?: Maybe<BackupBackupResultResponse>;
  GetBackupResultDetails?: Maybe<BackupBackupResultDetailResponse>;
  GetBackupResults?: Maybe<BackupBackupResultsResponse>;
};


export type QueryGetBackupJobArgs = {
  backupJobResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBackupJobStatusArgs = {
  backupJobResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBackupPlanArgs = {
  backupPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBackupResultArgs = {
  backupResultResourceName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBackupResultDetailsArgs = {
  backupResultResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type ReplicatorProtectionGroupSnapshot = {
  __typename?: 'ReplicatorProtectionGroupSnapshot';
  is_success?: Maybe<Scalars['Boolean']['output']>;
  locker?: Maybe<Scalars['String']['output']>;
  protection_group_snapshot_id?: Maybe<Scalars['BigInt']['output']>;
  retain_count_over?: Maybe<Scalars['Boolean']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
};

export type ReplicatorProtectionGroupSnapshotInput = {
  is_success?: InputMaybe<Scalars['Boolean']['input']>;
  locker?: InputMaybe<Scalars['String']['input']>;
  protection_group_snapshot_id?: InputMaybe<Scalars['BigInt']['input']>;
  retain_count_over?: InputMaybe<Scalars['Boolean']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ReplicatorSnapshotSchedule = {
  __typename?: 'ReplicatorSnapshotSchedule';
  end_at?: Maybe<Scalars['BigInt']['output']>;
  export_period?: Maybe<Scalars['BigInt']['output']>;
  export_retain_count?: Maybe<Scalars['BigInt']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  period?: Maybe<Scalars['BigInt']['output']>;
  retain_count?: Maybe<Scalars['BigInt']['output']>;
  schedule_type?: Maybe<Scalars['BigInt']['output']>;
  start_at?: Maybe<Scalars['BigInt']['output']>;
};

export type ReplicatorSnapshotScheduleInput = {
  end_at?: InputMaybe<Scalars['BigInt']['input']>;
  export_period?: InputMaybe<Scalars['BigInt']['input']>;
  export_retain_count?: InputMaybe<Scalars['BigInt']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  period?: InputMaybe<Scalars['BigInt']['input']>;
  retain_count?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_type?: InputMaybe<Scalars['BigInt']['input']>;
  start_at?: InputMaybe<Scalars['BigInt']['input']>;
};

export type SmStorage = {
  __typename?: 'SmStorage';
  primary?: Maybe<Scalars['Boolean']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  spec?: Maybe<SmStorageSpec>;
  status?: Maybe<SmStorageStatus>;
};

export type SmStorageConfigurationAwsS3 = {
  __typename?: 'SmStorageConfigurationAwsS3';
  access_key_id?: Maybe<Scalars['String']['output']>;
  bucket?: Maybe<Scalars['String']['output']>;
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationAwsS3Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
};

export enum SmStorageConfigurationAwsS3RegionEnum {
  AfSouth_1 = 'af-south-1',
  ApEast_1 = 'ap-east-1',
  ApNortheast_1 = 'ap-northeast-1',
  ApNortheast_2 = 'ap-northeast-2',
  ApNortheast_3 = 'ap-northeast-3',
  ApSoutheast_1 = 'ap-southeast-1',
  ApSoutheast_2 = 'ap-southeast-2',
  ApSoutheast_3 = 'ap-southeast-3',
  ApSoutheast_4 = 'ap-southeast-4',
  ApSouth_1 = 'ap-south-1',
  ApSouth_2 = 'ap-south-2',
  CaCentral_1 = 'ca-central-1',
  CaWest_1 = 'ca-west-1',
  EuCentral_1 = 'eu-central-1',
  EuCentral_2 = 'eu-central-2',
  EuNorth_1 = 'eu-north-1',
  EuSouth_1 = 'eu-south-1',
  EuSouth_2 = 'eu-south-2',
  EuWest_1 = 'eu-west-1',
  EuWest_2 = 'eu-west-2',
  EuWest_3 = 'eu-west-3',
  IlCentral_1 = 'il-central-1',
  MeCentral_1 = 'me-central-1',
  MeSouth_1 = 'me-south-1',
  SaEast_1 = 'sa-east-1',
  UsEast_1 = 'us-east-1',
  UsEast_2 = 'us-east-2',
  UsWest_1 = 'us-west-1',
  UsWest_2 = 'us-west-2'
}

export type SmStorageConfigurationAzureBlob = {
  __typename?: 'SmStorageConfigurationAzureBlob';
  storage_account_key?: Maybe<Scalars['String']['output']>;
  storage_account_name?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationAzureBlobInput = {
  storage_account_key?: InputMaybe<Scalars['String']['input']>;
  storage_account_name?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageConfigurationCephRbd = {
  __typename?: 'SmStorageConfigurationCephRbd';
  fsid?: Maybe<Scalars['String']['output']>;
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_key?: Maybe<Scalars['String']['output']>;
};

export enum SmStorageConfigurationCephRbdImageFeaturesEnum {
  DataPool = 'data-pool',
  DeepFlatten = 'deep-flatten',
  ExclusiveLock = 'exclusive-lock',
  FastDiff = 'fast-diff',
  Journaling = 'journaling',
  Layering = 'layering',
  ObjectMap = 'object-map',
  Striping = 'striping'
}

export type SmStorageConfigurationCephRbdInput = {
  fsid?: InputMaybe<Scalars['String']['input']>;
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_key?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageConfigurationNfs = {
  __typename?: 'SmStorageConfigurationNfs';
  server?: Maybe<Scalars['String']['output']>;
  share?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationNfsInput = {
  server?: InputMaybe<Scalars['String']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageConfigurationType = {
  __typename?: 'SmStorageConfigurationType';
  access_key_id?: Maybe<Scalars['String']['output']>;
  bucket?: Maybe<Scalars['String']['output']>;
  fsid?: Maybe<Scalars['String']['output']>;
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
  server?: Maybe<Scalars['String']['output']>;
  share?: Maybe<Scalars['String']['output']>;
  storage_account_key?: Maybe<Scalars['String']['output']>;
  storage_account_name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_key?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationTypeInput = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  fsid?: InputMaybe<Scalars['String']['input']>;
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum | `${SmStorageConfigurationCephRbdImageFeaturesEnum}`>>>;
  monitors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum | `${SmStorageConfigurationAwsS3RegionEnum}`>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
  server?: InputMaybe<Scalars['String']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
  storage_account_key?: InputMaybe<Scalars['String']['input']>;
  storage_account_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_key?: InputMaybe<Scalars['String']['input']>;
};

export type SmStorageInput = {
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  spec?: InputMaybe<SmStorageSpecInput>;
  status?: InputMaybe<SmStorageStatusInput>;
};

export type SmStorageSpec = {
  __typename?: 'SmStorageSpec';
  configuration?: Maybe<SmStorageConfigurationType>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SmStorageTypeEnum | `${SmStorageTypeEnum}`>;
};

export type SmStorageSpecInput = {
  configuration?: InputMaybe<SmStorageConfigurationTypeInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmStorageTypeEnum | `${SmStorageTypeEnum}`>;
};

export enum SmStorageStateCodeEnum {
  CdmBackupStorageStateAvailable = 'cdm.backup.storage.state.available',
  CdmBackupStorageStateError = 'cdm.backup.storage.state.error',
  CdmBackupStorageStateUnavailable = 'cdm.backup.storage.state.unavailable'
}

export type SmStorageStatus = {
  __typename?: 'SmStorageStatus';
  capacity?: Maybe<Scalars['BigInt']['output']>;
  free_space?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<SmStorageStateCodeEnum | `${SmStorageStateCodeEnum}`>;
};

export type SmStorageStatusInput = {
  capacity?: InputMaybe<Scalars['BigInt']['input']>;
  free_space?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<SmStorageStateCodeEnum | `${SmStorageStateCodeEnum}`>;
};

export enum SmStorageTypeEnum {
  CdmBackupStorageTypeAwsS3 = 'cdm.backup.storage.type.aws.s3',
  CdmBackupStorageTypeAzureBlob = 'cdm.backup.storage.type.azure.blob',
  CdmBackupStorageTypeCephRbd = 'cdm.backup.storage.type.ceph.rbd',
  CdmBackupStorageTypeNfs = 'cdm.backup.storage.type.nfs'
}

export type UpdateBackupJobInput = {
  backupBackupJobRequest?: InputMaybe<BackupBackupJobRequestInput>;
  backupJobResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBackupPlanInput = {
  backupBackupPlanRequest?: InputMaybe<BackupBackupPlanRequestInput>;
  backupPlanResourceName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBackupResultInput = {
  backupBackupResultRequest?: InputMaybe<BackupBackupResultRequestInput>;
  backupResultResourceName?: InputMaybe<Scalars['String']['input']>;
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
  BackupBackupClusterTypeEnum: BackupBackupClusterTypeEnum;
  BackupBackupJob: ResolverTypeWrapper<BackupBackupJob>;
  BackupBackupJobInput: BackupBackupJobInput;
  BackupBackupJobRequest: ResolverTypeWrapper<BackupBackupJobRequest>;
  BackupBackupJobRequestInput: BackupBackupJobRequestInput;
  BackupBackupJobResponse: ResolverTypeWrapper<BackupBackupJobResponse>;
  BackupBackupJobResponseInput: BackupBackupJobResponseInput;
  BackupBackupJobStateCodeEnum: BackupBackupJobStateCodeEnum;
  BackupBackupJobStatus: ResolverTypeWrapper<BackupBackupJobStatus>;
  BackupBackupJobStatusInput: BackupBackupJobStatusInput;
  BackupBackupJobStatusResponse: ResolverTypeWrapper<BackupBackupJobStatusResponse>;
  BackupBackupJobStatusResponseInput: BackupBackupJobStatusResponseInput;
  BackupBackupJobTypeEnum: BackupBackupJobTypeEnum;
  BackupBackupJobsResponse: ResolverTypeWrapper<BackupBackupJobsResponse>;
  BackupBackupJobsResponseInput: BackupBackupJobsResponseInput;
  BackupBackupPlan: ResolverTypeWrapper<BackupBackupPlan>;
  BackupBackupPlanInput: BackupBackupPlanInput;
  BackupBackupPlanRequest: ResolverTypeWrapper<BackupBackupPlanRequest>;
  BackupBackupPlanRequestInput: BackupBackupPlanRequestInput;
  BackupBackupPlanResponse: ResolverTypeWrapper<BackupBackupPlanResponse>;
  BackupBackupPlanResponseInput: BackupBackupPlanResponseInput;
  BackupBackupPlansResponse: ResolverTypeWrapper<BackupBackupPlansResponse>;
  BackupBackupPlansResponseInput: BackupBackupPlansResponseInput;
  BackupBackupResult: ResolverTypeWrapper<BackupBackupResult>;
  BackupBackupResultDetailResponse: ResolverTypeWrapper<BackupBackupResultDetailResponse>;
  BackupBackupResultDetailResponseInput: BackupBackupResultDetailResponseInput;
  BackupBackupResultInput: BackupBackupResultInput;
  BackupBackupResultRequest: ResolverTypeWrapper<BackupBackupResultRequest>;
  BackupBackupResultRequestInput: BackupBackupResultRequestInput;
  BackupBackupResultResponse: ResolverTypeWrapper<BackupBackupResultResponse>;
  BackupBackupResultResponseInput: BackupBackupResultResponseInput;
  BackupBackupResultsResponse: ResolverTypeWrapper<BackupBackupResultsResponse>;
  BackupBackupResultsResponseInput: BackupBackupResultsResponseInput;
  BackupBackupTypeEnum: BackupBackupTypeEnum;
  BackupResultProtectionGroupInfo: ResolverTypeWrapper<BackupResultProtectionGroupInfo>;
  BackupResultProtectionGroupInfoInput: BackupResultProtectionGroupInfoInput;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
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
  CreateBackupJobInput: CreateBackupJobInput;
  CreateBackupPlanInput: CreateBackupPlanInput;
  DeleteBackupJobInput: DeleteBackupJobInput;
  DeleteBackupPlanInput: DeleteBackupPlanInput;
  DeleteBackupResultInput: DeleteBackupResultInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OpenShiftCmClusterResourceServiceTypeEnum: OpenShiftCmClusterResourceServiceTypeEnum;
  OpenShiftCmClusterResourceVolumeTypeEnum: OpenShiftCmClusterResourceVolumeTypeEnum;
  OpenShiftCmFinalizer: ResolverTypeWrapper<OpenShiftCmFinalizer>;
  OpenShiftCmFinalizerInput: OpenShiftCmFinalizerInput;
  OpenShiftCmNamespace: ResolverTypeWrapper<OpenShiftCmNamespace>;
  OpenShiftCmNamespaceInput: OpenShiftCmNamespaceInput;
  OpenShiftCmPriorityClass: ResolverTypeWrapper<OpenShiftCmPriorityClass>;
  OpenShiftCmPriorityClassInput: OpenShiftCmPriorityClassInput;
  OpenShiftCmProtectionGroupInfo: ResolverTypeWrapper<OpenShiftCmProtectionGroupInfo>;
  OpenShiftCmProtectionGroupInfoInput: OpenShiftCmProtectionGroupInfoInput;
  OpenShiftCmRegistry: ResolverTypeWrapper<OpenShiftCmRegistry>;
  OpenShiftCmRegistryInput: OpenShiftCmRegistryInput;
  OpenShiftCmResource: ResolverTypeWrapper<OpenShiftCmResource>;
  OpenShiftCmResourceInput: OpenShiftCmResourceInput;
  OpenShiftCmRuntimeClass: ResolverTypeWrapper<OpenShiftCmRuntimeClass>;
  OpenShiftCmRuntimeClassInput: OpenShiftCmRuntimeClassInput;
  OpenShiftCmScheduler: ResolverTypeWrapper<OpenShiftCmScheduler>;
  OpenShiftCmSchedulerInput: OpenShiftCmSchedulerInput;
  OpenShiftCmService: ResolverTypeWrapper<OpenShiftCmService>;
  OpenShiftCmServiceAccount: ResolverTypeWrapper<OpenShiftCmServiceAccount>;
  OpenShiftCmServiceAccountInput: OpenShiftCmServiceAccountInput;
  OpenShiftCmServiceInput: OpenShiftCmServiceInput;
  OpenShiftCmVolume: ResolverTypeWrapper<OpenShiftCmVolume>;
  OpenShiftCmVolumeInput: OpenShiftCmVolumeInput;
  OpenShiftCmVolumeSnapshot: ResolverTypeWrapper<OpenShiftCmVolumeSnapshot>;
  OpenShiftCmVolumeSnapshotInput: OpenShiftCmVolumeSnapshotInput;
  OpenShiftCmWorkload: ResolverTypeWrapper<OpenShiftCmWorkload>;
  OpenShiftCmWorkloadInput: OpenShiftCmWorkloadInput;
  OpenShiftCmWorkloadVolume: ResolverTypeWrapper<OpenShiftCmWorkloadVolume>;
  OpenShiftCmWorkloadVolumeInput: OpenShiftCmWorkloadVolumeInput;
  OpenStackCmClusterInstanceExtraSpec: ResolverTypeWrapper<OpenStackCmClusterInstanceExtraSpec>;
  OpenStackCmClusterInstanceExtraSpecInput: OpenStackCmClusterInstanceExtraSpecInput;
  OpenStackCmClusterInstanceExtraSpecKeyEnum: OpenStackCmClusterInstanceExtraSpecKeyEnum;
  OpenStackCmClusterTenantQuota: ResolverTypeWrapper<OpenStackCmClusterTenantQuota>;
  OpenStackCmClusterTenantQuotaInput: OpenStackCmClusterTenantQuotaInput;
  OpenStackDrExternalRoutingInterface: ResolverTypeWrapper<OpenStackDrExternalRoutingInterface>;
  OpenStackDrExternalRoutingInterfaceInput: OpenStackDrExternalRoutingInterfaceInput;
  OpenStackDrFloatingIp: ResolverTypeWrapper<OpenStackDrFloatingIp>;
  OpenStackDrFloatingIpInput: OpenStackDrFloatingIpInput;
  OpenStackDrInstance: ResolverTypeWrapper<OpenStackDrInstance>;
  OpenStackDrInstanceAvailabilityZone: ResolverTypeWrapper<OpenStackDrInstanceAvailabilityZone>;
  OpenStackDrInstanceAvailabilityZoneInput: OpenStackDrInstanceAvailabilityZoneInput;
  OpenStackDrInstanceHypervisor: ResolverTypeWrapper<OpenStackDrInstanceHypervisor>;
  OpenStackDrInstanceHypervisorInput: OpenStackDrInstanceHypervisorInput;
  OpenStackDrInstanceInput: OpenStackDrInstanceInput;
  OpenStackDrInternalRoutingInterface: ResolverTypeWrapper<OpenStackDrInternalRoutingInterface>;
  OpenStackDrInternalRoutingInterfaceInput: OpenStackDrInternalRoutingInterfaceInput;
  OpenStackDrKeypair: ResolverTypeWrapper<OpenStackDrKeypair>;
  OpenStackDrKeypairInput: OpenStackDrKeypairInput;
  OpenStackDrKeypairTypeEnum: OpenStackDrKeypairTypeEnum;
  OpenStackDrNetwork: ResolverTypeWrapper<OpenStackDrNetwork>;
  OpenStackDrNetworkInput: OpenStackDrNetworkInput;
  OpenStackDrNetworkTypeEnum: OpenStackDrNetworkTypeEnum;
  OpenStackDrProtectionGroupInfo: ResolverTypeWrapper<OpenStackDrProtectionGroupInfo>;
  OpenStackDrProtectionGroupInfoInput: OpenStackDrProtectionGroupInfoInput;
  OpenStackDrRouter: ResolverTypeWrapper<OpenStackDrRouter>;
  OpenStackDrRouterExtraRoute: ResolverTypeWrapper<OpenStackDrRouterExtraRoute>;
  OpenStackDrRouterExtraRouteInput: OpenStackDrRouterExtraRouteInput;
  OpenStackDrRouterInput: OpenStackDrRouterInput;
  OpenStackDrSecurityGroup: ResolverTypeWrapper<OpenStackDrSecurityGroup>;
  OpenStackDrSecurityGroupInput: OpenStackDrSecurityGroupInput;
  OpenStackDrSecurityGroupRule: ResolverTypeWrapper<OpenStackDrSecurityGroupRule>;
  OpenStackDrSecurityGroupRuleDirectionEnum: OpenStackDrSecurityGroupRuleDirectionEnum;
  OpenStackDrSecurityGroupRuleEtherTypeEnum: OpenStackDrSecurityGroupRuleEtherTypeEnum;
  OpenStackDrSecurityGroupRuleInput: OpenStackDrSecurityGroupRuleInput;
  OpenStackDrSpec: ResolverTypeWrapper<OpenStackDrSpec>;
  OpenStackDrSpecInput: OpenStackDrSpecInput;
  OpenStackDrStorage: ResolverTypeWrapper<OpenStackDrStorage>;
  OpenStackDrStorageInput: OpenStackDrStorageInput;
  OpenStackDrStorageTypeEnum: OpenStackDrStorageTypeEnum;
  OpenStackDrSubnet: ResolverTypeWrapper<OpenStackDrSubnet>;
  OpenStackDrSubnetDhcpPool: ResolverTypeWrapper<OpenStackDrSubnetDhcpPool>;
  OpenStackDrSubnetDhcpPoolInput: OpenStackDrSubnetDhcpPoolInput;
  OpenStackDrSubnetInput: OpenStackDrSubnetInput;
  OpenStackDrSubnetIpv6AddressModeCodeEnum: OpenStackDrSubnetIpv6AddressModeCodeEnum;
  OpenStackDrSubnetIpv6RaModeCodeEnum: OpenStackDrSubnetIpv6RaModeCodeEnum;
  OpenStackDrSubnetNameserver: ResolverTypeWrapper<OpenStackDrSubnetNameserver>;
  OpenStackDrSubnetNameserverInput: OpenStackDrSubnetNameserverInput;
  OpenStackDrTenant: ResolverTypeWrapper<OpenStackDrTenant>;
  OpenStackDrTenantInput: OpenStackDrTenantInput;
  OpenStackDrVolume: ResolverTypeWrapper<OpenStackDrVolume>;
  OpenStackDrVolumeInput: OpenStackDrVolumeInput;
  OpenStackDrVolumeSnapshot: ResolverTypeWrapper<OpenStackDrVolumeSnapshot>;
  OpenStackDrVolumeSnapshotInput: OpenStackDrVolumeSnapshotInput;
  Query: ResolverTypeWrapper<{}>;
  ReplicatorProtectionGroupSnapshot: ResolverTypeWrapper<ReplicatorProtectionGroupSnapshot>;
  ReplicatorProtectionGroupSnapshotInput: ReplicatorProtectionGroupSnapshotInput;
  ReplicatorSnapshotSchedule: ResolverTypeWrapper<ReplicatorSnapshotSchedule>;
  ReplicatorSnapshotScheduleInput: ReplicatorSnapshotScheduleInput;
  SmStorage: ResolverTypeWrapper<SmStorage>;
  SmStorageConfigurationAwsS3: ResolverTypeWrapper<SmStorageConfigurationAwsS3>;
  SmStorageConfigurationAwsS3Input: SmStorageConfigurationAwsS3Input;
  SmStorageConfigurationAwsS3RegionEnum: SmStorageConfigurationAwsS3RegionEnum;
  SmStorageConfigurationAzureBlob: ResolverTypeWrapper<SmStorageConfigurationAzureBlob>;
  SmStorageConfigurationAzureBlobInput: SmStorageConfigurationAzureBlobInput;
  SmStorageConfigurationCephRbd: ResolverTypeWrapper<SmStorageConfigurationCephRbd>;
  SmStorageConfigurationCephRbdImageFeaturesEnum: SmStorageConfigurationCephRbdImageFeaturesEnum;
  SmStorageConfigurationCephRbdInput: SmStorageConfigurationCephRbdInput;
  SmStorageConfigurationNfs: ResolverTypeWrapper<SmStorageConfigurationNfs>;
  SmStorageConfigurationNfsInput: SmStorageConfigurationNfsInput;
  SmStorageConfigurationType: ResolverTypeWrapper<SmStorageConfigurationType>;
  SmStorageConfigurationTypeInput: SmStorageConfigurationTypeInput;
  SmStorageInput: SmStorageInput;
  SmStorageSpec: ResolverTypeWrapper<SmStorageSpec>;
  SmStorageSpecInput: SmStorageSpecInput;
  SmStorageStateCodeEnum: SmStorageStateCodeEnum;
  SmStorageStatus: ResolverTypeWrapper<SmStorageStatus>;
  SmStorageStatusInput: SmStorageStatusInput;
  SmStorageTypeEnum: SmStorageTypeEnum;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateBackupJobInput: UpdateBackupJobInput;
  UpdateBackupPlanInput: UpdateBackupPlanInput;
  UpdateBackupResultInput: UpdateBackupResultInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BackupBackupJob: BackupBackupJob;
  BackupBackupJobInput: BackupBackupJobInput;
  BackupBackupJobRequest: BackupBackupJobRequest;
  BackupBackupJobRequestInput: BackupBackupJobRequestInput;
  BackupBackupJobResponse: BackupBackupJobResponse;
  BackupBackupJobResponseInput: BackupBackupJobResponseInput;
  BackupBackupJobStatus: BackupBackupJobStatus;
  BackupBackupJobStatusInput: BackupBackupJobStatusInput;
  BackupBackupJobStatusResponse: BackupBackupJobStatusResponse;
  BackupBackupJobStatusResponseInput: BackupBackupJobStatusResponseInput;
  BackupBackupJobsResponse: BackupBackupJobsResponse;
  BackupBackupJobsResponseInput: BackupBackupJobsResponseInput;
  BackupBackupPlan: BackupBackupPlan;
  BackupBackupPlanInput: BackupBackupPlanInput;
  BackupBackupPlanRequest: BackupBackupPlanRequest;
  BackupBackupPlanRequestInput: BackupBackupPlanRequestInput;
  BackupBackupPlanResponse: BackupBackupPlanResponse;
  BackupBackupPlanResponseInput: BackupBackupPlanResponseInput;
  BackupBackupPlansResponse: BackupBackupPlansResponse;
  BackupBackupPlansResponseInput: BackupBackupPlansResponseInput;
  BackupBackupResult: BackupBackupResult;
  BackupBackupResultDetailResponse: BackupBackupResultDetailResponse;
  BackupBackupResultDetailResponseInput: BackupBackupResultDetailResponseInput;
  BackupBackupResultInput: BackupBackupResultInput;
  BackupBackupResultRequest: BackupBackupResultRequest;
  BackupBackupResultRequestInput: BackupBackupResultRequestInput;
  BackupBackupResultResponse: BackupBackupResultResponse;
  BackupBackupResultResponseInput: BackupBackupResultResponseInput;
  BackupBackupResultsResponse: BackupBackupResultsResponse;
  BackupBackupResultsResponseInput: BackupBackupResultsResponseInput;
  BackupResultProtectionGroupInfo: BackupResultProtectionGroupInfo;
  BackupResultProtectionGroupInfoInput: BackupResultProtectionGroupInfoInput;
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
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
  CreateBackupJobInput: CreateBackupJobInput;
  CreateBackupPlanInput: CreateBackupPlanInput;
  DeleteBackupJobInput: DeleteBackupJobInput;
  DeleteBackupPlanInput: DeleteBackupPlanInput;
  DeleteBackupResultInput: DeleteBackupResultInput;
  JSONObject: Scalars['JSONObject']['output'];
  Mutation: {};
  OpenShiftCmFinalizer: OpenShiftCmFinalizer;
  OpenShiftCmFinalizerInput: OpenShiftCmFinalizerInput;
  OpenShiftCmNamespace: OpenShiftCmNamespace;
  OpenShiftCmNamespaceInput: OpenShiftCmNamespaceInput;
  OpenShiftCmPriorityClass: OpenShiftCmPriorityClass;
  OpenShiftCmPriorityClassInput: OpenShiftCmPriorityClassInput;
  OpenShiftCmProtectionGroupInfo: OpenShiftCmProtectionGroupInfo;
  OpenShiftCmProtectionGroupInfoInput: OpenShiftCmProtectionGroupInfoInput;
  OpenShiftCmRegistry: OpenShiftCmRegistry;
  OpenShiftCmRegistryInput: OpenShiftCmRegistryInput;
  OpenShiftCmResource: OpenShiftCmResource;
  OpenShiftCmResourceInput: OpenShiftCmResourceInput;
  OpenShiftCmRuntimeClass: OpenShiftCmRuntimeClass;
  OpenShiftCmRuntimeClassInput: OpenShiftCmRuntimeClassInput;
  OpenShiftCmScheduler: OpenShiftCmScheduler;
  OpenShiftCmSchedulerInput: OpenShiftCmSchedulerInput;
  OpenShiftCmService: OpenShiftCmService;
  OpenShiftCmServiceAccount: OpenShiftCmServiceAccount;
  OpenShiftCmServiceAccountInput: OpenShiftCmServiceAccountInput;
  OpenShiftCmServiceInput: OpenShiftCmServiceInput;
  OpenShiftCmVolume: OpenShiftCmVolume;
  OpenShiftCmVolumeInput: OpenShiftCmVolumeInput;
  OpenShiftCmVolumeSnapshot: OpenShiftCmVolumeSnapshot;
  OpenShiftCmVolumeSnapshotInput: OpenShiftCmVolumeSnapshotInput;
  OpenShiftCmWorkload: OpenShiftCmWorkload;
  OpenShiftCmWorkloadInput: OpenShiftCmWorkloadInput;
  OpenShiftCmWorkloadVolume: OpenShiftCmWorkloadVolume;
  OpenShiftCmWorkloadVolumeInput: OpenShiftCmWorkloadVolumeInput;
  OpenStackCmClusterInstanceExtraSpec: OpenStackCmClusterInstanceExtraSpec;
  OpenStackCmClusterInstanceExtraSpecInput: OpenStackCmClusterInstanceExtraSpecInput;
  OpenStackCmClusterTenantQuota: OpenStackCmClusterTenantQuota;
  OpenStackCmClusterTenantQuotaInput: OpenStackCmClusterTenantQuotaInput;
  OpenStackDrExternalRoutingInterface: OpenStackDrExternalRoutingInterface;
  OpenStackDrExternalRoutingInterfaceInput: OpenStackDrExternalRoutingInterfaceInput;
  OpenStackDrFloatingIp: OpenStackDrFloatingIp;
  OpenStackDrFloatingIpInput: OpenStackDrFloatingIpInput;
  OpenStackDrInstance: OpenStackDrInstance;
  OpenStackDrInstanceAvailabilityZone: OpenStackDrInstanceAvailabilityZone;
  OpenStackDrInstanceAvailabilityZoneInput: OpenStackDrInstanceAvailabilityZoneInput;
  OpenStackDrInstanceHypervisor: OpenStackDrInstanceHypervisor;
  OpenStackDrInstanceHypervisorInput: OpenStackDrInstanceHypervisorInput;
  OpenStackDrInstanceInput: OpenStackDrInstanceInput;
  OpenStackDrInternalRoutingInterface: OpenStackDrInternalRoutingInterface;
  OpenStackDrInternalRoutingInterfaceInput: OpenStackDrInternalRoutingInterfaceInput;
  OpenStackDrKeypair: OpenStackDrKeypair;
  OpenStackDrKeypairInput: OpenStackDrKeypairInput;
  OpenStackDrNetwork: OpenStackDrNetwork;
  OpenStackDrNetworkInput: OpenStackDrNetworkInput;
  OpenStackDrProtectionGroupInfo: OpenStackDrProtectionGroupInfo;
  OpenStackDrProtectionGroupInfoInput: OpenStackDrProtectionGroupInfoInput;
  OpenStackDrRouter: OpenStackDrRouter;
  OpenStackDrRouterExtraRoute: OpenStackDrRouterExtraRoute;
  OpenStackDrRouterExtraRouteInput: OpenStackDrRouterExtraRouteInput;
  OpenStackDrRouterInput: OpenStackDrRouterInput;
  OpenStackDrSecurityGroup: OpenStackDrSecurityGroup;
  OpenStackDrSecurityGroupInput: OpenStackDrSecurityGroupInput;
  OpenStackDrSecurityGroupRule: OpenStackDrSecurityGroupRule;
  OpenStackDrSecurityGroupRuleInput: OpenStackDrSecurityGroupRuleInput;
  OpenStackDrSpec: OpenStackDrSpec;
  OpenStackDrSpecInput: OpenStackDrSpecInput;
  OpenStackDrStorage: OpenStackDrStorage;
  OpenStackDrStorageInput: OpenStackDrStorageInput;
  OpenStackDrSubnet: OpenStackDrSubnet;
  OpenStackDrSubnetDhcpPool: OpenStackDrSubnetDhcpPool;
  OpenStackDrSubnetDhcpPoolInput: OpenStackDrSubnetDhcpPoolInput;
  OpenStackDrSubnetInput: OpenStackDrSubnetInput;
  OpenStackDrSubnetNameserver: OpenStackDrSubnetNameserver;
  OpenStackDrSubnetNameserverInput: OpenStackDrSubnetNameserverInput;
  OpenStackDrTenant: OpenStackDrTenant;
  OpenStackDrTenantInput: OpenStackDrTenantInput;
  OpenStackDrVolume: OpenStackDrVolume;
  OpenStackDrVolumeInput: OpenStackDrVolumeInput;
  OpenStackDrVolumeSnapshot: OpenStackDrVolumeSnapshot;
  OpenStackDrVolumeSnapshotInput: OpenStackDrVolumeSnapshotInput;
  Query: {};
  ReplicatorProtectionGroupSnapshot: ReplicatorProtectionGroupSnapshot;
  ReplicatorProtectionGroupSnapshotInput: ReplicatorProtectionGroupSnapshotInput;
  ReplicatorSnapshotSchedule: ReplicatorSnapshotSchedule;
  ReplicatorSnapshotScheduleInput: ReplicatorSnapshotScheduleInput;
  SmStorage: SmStorage;
  SmStorageConfigurationAwsS3: SmStorageConfigurationAwsS3;
  SmStorageConfigurationAwsS3Input: SmStorageConfigurationAwsS3Input;
  SmStorageConfigurationAzureBlob: SmStorageConfigurationAzureBlob;
  SmStorageConfigurationAzureBlobInput: SmStorageConfigurationAzureBlobInput;
  SmStorageConfigurationCephRbd: SmStorageConfigurationCephRbd;
  SmStorageConfigurationCephRbdInput: SmStorageConfigurationCephRbdInput;
  SmStorageConfigurationNfs: SmStorageConfigurationNfs;
  SmStorageConfigurationNfsInput: SmStorageConfigurationNfsInput;
  SmStorageConfigurationType: SmStorageConfigurationType;
  SmStorageConfigurationTypeInput: SmStorageConfigurationTypeInput;
  SmStorageInput: SmStorageInput;
  SmStorageSpec: SmStorageSpec;
  SmStorageSpecInput: SmStorageSpecInput;
  SmStorageStatus: SmStorageStatus;
  SmStorageStatusInput: SmStorageStatusInput;
  String: Scalars['String']['output'];
  UpdateBackupJobInput: UpdateBackupJobInput;
  UpdateBackupPlanInput: UpdateBackupPlanInput;
  UpdateBackupResultInput: UpdateBackupResultInput;
}>;

export type BackupBackupClusterTypeEnumResolvers = { CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift', CLUSTER_TYPE_OPENSTACK: 'cluster.type.openstack' };

export type BackupBackupJobResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupJob'] = ResolversParentTypes['BackupBackupJob']> = ResolversObject<{
  backup_plan?: Resolver<Maybe<ResolversTypes['BackupBackupPlan']>, ParentType, ContextType>;
  cluster_type?: Resolver<Maybe<ResolversTypes['BackupBackupClusterTypeEnum']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reserved_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BackupBackupJobTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupJobRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupJobRequest'] = ResolversParentTypes['BackupBackupJobRequest']> = ResolversObject<{
  backup_job?: Resolver<Maybe<ResolversTypes['BackupBackupJob']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupJobResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupJobResponse'] = ResolversParentTypes['BackupBackupJobResponse']> = ResolversObject<{
  backup_job?: Resolver<Maybe<ResolversTypes['BackupBackupJob']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupJobStateCodeEnumResolvers = { CDM_BACKUP_JOB_STATE_DONE: 'cdm.backup.job-state.done', CDM_BACKUP_JOB_STATE_FAILED: 'cdm.backup.job-state.failed', CDM_BACKUP_JOB_STATE_PENDING: 'cdm.backup.job-state.pending', CDM_BACKUP_JOB_STATE_PREPARING: 'cdm.backup.job-state.preparing', CDM_BACKUP_JOB_STATE_RUNNING: 'cdm.backup.job-state.running', CDM_BACKUP_JOB_STATE_WAITING: 'cdm.backup.job-state.waiting' };

export type BackupBackupJobStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupJobStatus'] = ResolversParentTypes['BackupBackupJobStatus']> = ResolversObject<{
  failed_reason_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failed_reason_contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  next_runtime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['BackupBackupJobStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupJobStatusResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupJobStatusResponse'] = ResolversParentTypes['BackupBackupJobStatusResponse']> = ResolversObject<{
  backup_job_status?: Resolver<Maybe<ResolversTypes['BackupBackupJobStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupJobTypeEnumResolvers = { CDM_BACKUP_JOB_TYPE_IMMEDIATE: 'cdm.backup.job-type.immediate', CDM_BACKUP_JOB_TYPE_RESERVED: 'cdm.backup.job-type.reserved', CDM_BACKUP_JOB_TYPE_SCHEDULED: 'cdm.backup.job-type.scheduled' };

export type BackupBackupJobsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupJobsResponse'] = ResolversParentTypes['BackupBackupJobsResponse']> = ResolversObject<{
  backup_jobs?: Resolver<Maybe<Array<Maybe<ResolversTypes['BackupBackupJob']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupPlanResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupPlan'] = ResolversParentTypes['BackupBackupPlan']> = ResolversObject<{
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  export_repository_storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  lagging_time?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repository_storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplicatorSnapshotSchedule']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupPlanRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupPlanRequest'] = ResolversParentTypes['BackupBackupPlanRequest']> = ResolversObject<{
  backup_plan?: Resolver<Maybe<ResolversTypes['BackupBackupPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupPlanResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupPlanResponse'] = ResolversParentTypes['BackupBackupPlanResponse']> = ResolversObject<{
  backup_plan?: Resolver<Maybe<ResolversTypes['BackupBackupPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupPlansResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupPlansResponse'] = ResolversParentTypes['BackupBackupPlansResponse']> = ResolversObject<{
  backup_plans?: Resolver<Maybe<Array<Maybe<ResolversTypes['BackupBackupPlan']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupResultResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupResult'] = ResolversParentTypes['BackupBackupResult']> = ResolversObject<{
  backup_job?: Resolver<Maybe<ResolversTypes['BackupBackupJob']>, ParentType, ContextType>;
  backup_plan?: Resolver<Maybe<ResolversTypes['BackupBackupPlan']>, ParentType, ContextType>;
  backup_type?: Resolver<Maybe<ResolversTypes['BackupBackupTypeEnum']>, ParentType, ContextType>;
  cluster_type?: Resolver<Maybe<ResolversTypes['BackupBackupClusterTypeEnum']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elapsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  end_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  export_repository_storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  job_type?: Resolver<Maybe<ResolversTypes['BackupBackupJobTypeEnum']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  protection_group_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repository_storage?: Resolver<Maybe<ResolversTypes['SmStorage']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshot?: Resolver<Maybe<ResolversTypes['ReplicatorProtectionGroupSnapshot']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupResultDetailResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupResultDetailResponse'] = ResolversParentTypes['BackupBackupResultDetailResponse']> = ResolversObject<{
  cluster_type?: Resolver<Maybe<ResolversTypes['BackupBackupClusterTypeEnum']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['BackupResultProtectionGroupInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupResultRequestResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupResultRequest'] = ResolversParentTypes['BackupBackupResultRequest']> = ResolversObject<{
  backup_result?: Resolver<Maybe<ResolversTypes['BackupBackupResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupResultResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupResultResponse'] = ResolversParentTypes['BackupBackupResultResponse']> = ResolversObject<{
  backup_result?: Resolver<Maybe<ResolversTypes['BackupBackupResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupResultsResponseResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupBackupResultsResponse'] = ResolversParentTypes['BackupBackupResultsResponse']> = ResolversObject<{
  backup_results?: Resolver<Maybe<Array<Maybe<ResolversTypes['BackupBackupResult']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BackupBackupTypeEnumResolvers = { CDM_BACKUP_BACKUP_TYPE_DIFFERENTIAL_BACKUP: 'cdm.backup.backup-type.differential-backup', CDM_BACKUP_BACKUP_TYPE_FULL_BACKUP: 'cdm.backup.backup-type.full-backup', CDM_BACKUP_BACKUP_TYPE_INCREMENTAL_BACKUP: 'cdm.backup.backup-type.incremental-backup' };

export type BackupResultProtectionGroupInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['BackupResultProtectionGroupInfo'] = ResolversParentTypes['BackupResultProtectionGroupInfo']> = ResolversObject<{
  finalizers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmFinalizer']>>>, ParentType, ContextType>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstance']>>>, ParentType, ContextType>;
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
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackDrTenant']>, ParentType, ContextType>;
  volume_snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolume']>>>, ParentType, ContextType>;
  workloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmWorkload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  CreateBackupJob?: Resolver<Maybe<ResolversTypes['BackupBackupJobResponse']>, ParentType, ContextType, Partial<MutationCreateBackupJobArgs>>;
  CreateBackupPlan?: Resolver<Maybe<ResolversTypes['BackupBackupPlanResponse']>, ParentType, ContextType, Partial<MutationCreateBackupPlanArgs>>;
  DeleteBackupJob?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteBackupJobArgs>>;
  DeleteBackupPlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteBackupPlanArgs>>;
  DeleteBackupResult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeleteBackupResultArgs>>;
  UpdateBackupJob?: Resolver<Maybe<ResolversTypes['BackupBackupJobResponse']>, ParentType, ContextType, Partial<MutationUpdateBackupJobArgs>>;
  UpdateBackupPlan?: Resolver<Maybe<ResolversTypes['BackupBackupPlanResponse']>, ParentType, ContextType, Partial<MutationUpdateBackupPlanArgs>>;
  UpdateBackupResult?: Resolver<Maybe<ResolversTypes['BackupBackupResultResponse']>, ParentType, ContextType, Partial<MutationUpdateBackupResultArgs>>;
}>;

export type OpenShiftCmClusterResourceServiceTypeEnumResolvers = { CLUSTERIP: 'ClusterIP', EXTERNALNAME: 'ExternalName', LOADBALANCER: 'LoadBalancer', NODEPORT: 'NodePort' };

export type OpenShiftCmClusterResourceVolumeTypeEnumResolvers = { AWS_ELASTIC_BLOCK_STORE: 'awsElasticBlockStore', AZURE_DISK: 'azureDisk', AZURE_FILE: 'azureFile', CEPHFS: 'cephfs', CINDER: 'cinder', CONFIG_MAP: 'configMap', CSI: 'csi', EMPTY_DIR: 'emptyDir', EPHEMERAL: 'ephemeral', FC: 'fc', FLEX_VOLUME: 'flexVolume', FLOCKER: 'flocker', GCE_PERSISTENT_DISK: 'gcePersistentDisk', GIT_REPO: 'gitRepo', GLUSTERFS: 'glusterfs', HOST_PATH: 'hostPath', ISCSI: 'iscsi', NFS: 'nfs', PERSISTENT_VOLUME_CLAIM: 'persistentVolumeClaim', PHOTON_PERSISTENT_DISK: 'photonPersistentDisk', PORTWORX_VOLUME: 'portworxVolume', QUOBYTE: 'quobyte', RBD: 'rbd', SCALE_I_O: 'scaleIO', STORAGEOS: 'storageos', VSPHERE_VOLUME: 'vsphereVolume' };

export type OpenShiftCmFinalizerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmFinalizer'] = ResolversParentTypes['OpenShiftCmFinalizer']> = ResolversObject<{
  controller_workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmNamespaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmNamespace'] = ResolversParentTypes['OpenShiftCmNamespace']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmPriorityClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmPriorityClass'] = ResolversParentTypes['OpenShiftCmPriorityClass']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
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

export type OpenShiftCmRegistryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRegistry'] = ResolversParentTypes['OpenShiftCmRegistry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  image_pull_secret_resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmResource']>>>, ParentType, ContextType>;
  is_private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_required_push_credential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  push_credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type OpenShiftCmRuntimeClassResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmRuntimeClass'] = ResolversParentTypes['OpenShiftCmRuntimeClass']> = ResolversObject<{
  handler?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmSchedulerResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmScheduler'] = ResolversParentTypes['OpenShiftCmScheduler']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workload?: Resolver<Maybe<ResolversTypes['OpenShiftCmWorkload']>, ParentType, ContextType>;
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

export type OpenShiftCmVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolume'] = ResolversParentTypes['OpenShiftCmVolume']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenShiftCmVolumeSnapshot']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenShiftCmClusterResourceVolumeTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenShiftCmVolumeSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmVolumeSnapshot'] = ResolversParentTypes['OpenShiftCmVolumeSnapshot']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  volume_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
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

export type OpenShiftCmWorkloadVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenShiftCmWorkloadVolume'] = ResolversParentTypes['OpenShiftCmWorkloadVolume']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['OpenShiftCmVolume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceExtraSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec'] = ResolversParentTypes['OpenStackCmClusterInstanceExtraSpec']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtraSpecKeyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers = { HW_CPU_CORES: 'hw:cpu_cores', HW_CPU_MAX_CORES: 'hw:cpu_max_cores', HW_CPU_MAX_SOCKETS: 'hw:cpu_max_sockets', HW_CPU_MAX_THREADS: 'hw:cpu_max_threads', HW_CPU_POLICY: 'hw:cpu_policy', HW_CPU_SOCKETS: 'hw:cpu_sockets', HW_CPU_THREADS: 'hw:cpu_threads', HW_CPU_THREAD_POLICY: 'hw:cpu_thread_policy', HW_MEM_PAGE_SIZE: 'hw:mem_page_size', HW_NUMA_CPUS__N: 'hw:numa_cpus.N', HW_NUMA_MEM__N: 'hw:numa_mem.N', HW_NUMA_NODES: 'hw:numa_nodes', HW_RNG_RATE_ALLOWED: 'hw_rng:rate-allowed', HW_RNG_RATE_BYTES: 'hw_rng:rate_bytes', HW_RNG_RATE_PERIOD: 'hw_rng:rate_period', HW_WATCHDOG_ACTION: 'hw:watchdog_action', OS_SECURE_BOOT: 'os:secure_boot', PCI_PASSTHROUGH_ALIAS: 'pci_passthrough:alias', QUOTA_CPU_LIMIT: 'quota:cpu_limit', QUOTA_CPU_PERIOD: 'quota:cpu_period', QUOTA_CPU_QUOTA: 'quota:cpu_quota', QUOTA_CPU_RESERVATION: 'quota:cpu_reservation', QUOTA_CPU_SHARES: 'quota:cpu_shares', QUOTA_CPU_SHARES_LEVEL: 'quota:cpu_shares_level', QUOTA_DISK_IO_LIMIT: 'quota:disk_io_limit', QUOTA_DISK_IO_RESERVATION: 'quota:disk_io_reservation', QUOTA_DISK_IO_SHARES_LEVEL: 'quota:disk_io_shares_level', QUOTA_DISK_IO_SHARES_SHARE: 'quota:disk_io_shares_share', QUOTA_DISK_READ_BYTES_SEC: 'quota:disk_read_bytes_sec', QUOTA_DISK_READ_IOPS_SEC: 'quota:disk_read_iops_sec', QUOTA_DISK_TOTAL_BYTES_SEC: 'quota:disk_total_bytes_sec', QUOTA_DISK_TOTAL_IOPS_SEC: 'quota:disk_total_iops_sec', QUOTA_DISK_WRITE_BYTES_SEC: 'quota:disk_write_bytes_sec', QUOTA_DISK_WRITE_IOPS_SEC: 'quota:disk_write_iops_sec', QUOTA_MEMORY_LIMIT: 'quota:memory_limit', QUOTA_MEMORY_RESERVATION: 'quota:memory_reservation', QUOTA_MEMORY_SHARES_LEVEL: 'quota:memory_shares_level', QUOTA_MEMORY_SHARES_SHARE: 'quota:memory_shares_share', QUOTA_VIF_INBOUND_AVERAGE: 'quota:vif_inbound_average', QUOTA_VIF_INBOUND_BURST: 'quota:vif_inbound_burst', QUOTA_VIF_INBOUND_PEAK: 'quota:vif_inbound_peak', QUOTA_VIF_OUTBOUND_AVERAGE: 'quota:vif_outbound_average', QUOTA_VIF_OUTBOUND_BURST: 'quota:vif_outbound_burst', QUOTA_VIF_OUTBOUND_PEAK: 'quota:vif_outbound_peak' };

export type OpenStackCmClusterTenantQuotaResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackCmClusterTenantQuota'] = ResolversParentTypes['OpenStackCmClusterTenantQuota']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrExternalRoutingInterfaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrExternalRoutingInterface'] = ResolversParentTypes['OpenStackDrExternalRoutingInterface']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackDrNetwork']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackDrSubnet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrFloatingIpResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrFloatingIp'] = ResolversParentTypes['OpenStackDrFloatingIp']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstance'] = ResolversParentTypes['OpenStackDrInstance']> = ResolversObject<{
  availability_zone?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceAvailabilityZone']>, ParentType, ContextType>;
  hypervisor?: Resolver<Maybe<ResolversTypes['OpenStackDrInstanceHypervisor']>, ParentType, ContextType>;
  keypair?: Resolver<Maybe<ResolversTypes['OpenStackDrKeypair']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrNetwork']>>>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRouter']>>>, ParentType, ContextType>;
  security_groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrSecurityGroup']>>>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['OpenStackDrSpec']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrVolume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceAvailabilityZoneResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceAvailabilityZone'] = ResolversParentTypes['OpenStackDrInstanceAvailabilityZone']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInstanceHypervisorResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInstanceHypervisor'] = ResolversParentTypes['OpenStackDrInstanceHypervisor']> = ResolversObject<{
  host_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrInternalRoutingInterfaceResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrInternalRoutingInterface'] = ResolversParentTypes['OpenStackDrInternalRoutingInterface']> = ResolversObject<{
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['OpenStackDrNetwork']>, ParentType, ContextType>;
  subnet?: Resolver<Maybe<ResolversTypes['OpenStackDrSubnet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrKeypairResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrKeypair'] = ResolversParentTypes['OpenStackDrKeypair']> = ResolversObject<{
  fingerprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenStackDrKeypairTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrKeypairTypeEnumResolvers = { OPENSTACK_KEYPAIR_TYPE_SSH: 'openstack.keypair.type.ssh', OPENSTACK_KEYPAIR_TYPE_X509: 'openstack.keypair.type.x509' };

export type OpenStackDrNetworkResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrNetwork'] = ResolversParentTypes['OpenStackDrNetwork']> = ResolversObject<{
  dhcp_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  external_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  floating_ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrFloatingIp']>>>, ParentType, ContextType>;
  ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subnets?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrSubnet']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenStackDrNetworkTypeEnum']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrNetworkTypeEnumResolvers = { OPENSTACK_NETWORK_TYPE_FLAT: 'openstack.network.type.flat', OPENSTACK_NETWORK_TYPE_GRE: 'openstack.network.type.gre', OPENSTACK_NETWORK_TYPE_LOCAL: 'openstack.network.type.local', OPENSTACK_NETWORK_TYPE_VLAN: 'openstack.network.type.vlan', OPENSTACK_NETWORK_TYPE_VXLAN: 'openstack.network.type.vxlan' };

export type OpenStackDrProtectionGroupInfoResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrProtectionGroupInfo'] = ResolversParentTypes['OpenStackDrProtectionGroupInfo']> = ResolversObject<{
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInstance']>>>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['OpenStackDrTenant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRouterResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRouter'] = ResolversParentTypes['OpenStackDrRouter']> = ResolversObject<{
  external_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrExternalRoutingInterface']>>>, ParentType, ContextType>;
  extra_routes?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrRouterExtraRoute']>>>, ParentType, ContextType>;
  internal_routing_interfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrInternalRoutingInterface']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrRouterExtraRouteResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrRouterExtraRoute'] = ResolversParentTypes['OpenStackDrRouterExtraRoute']> = ResolversObject<{
  destination?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nexthop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSecurityGroupResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSecurityGroup'] = ResolversParentTypes['OpenStackDrSecurityGroup']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  security_group_rules?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrSecurityGroupRule']>>>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSecurityGroupRuleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSecurityGroupRule'] = ResolversParentTypes['OpenStackDrSecurityGroupRule']> = ResolversObject<{
  direction?: Resolver<Maybe<ResolversTypes['OpenStackDrSecurityGroupRuleDirectionEnum']>, ParentType, ContextType>;
  ether_type?: Resolver<Maybe<ResolversTypes['OpenStackDrSecurityGroupRuleEtherTypeEnum']>, ParentType, ContextType>;
  network_cidr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port_range_max?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  port_range_min?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSecurityGroupRuleDirectionEnumResolvers = { EGRESS: 'egress', INGRESS: 'ingress' };

export type OpenStackDrSecurityGroupRuleEtherTypeEnumResolvers = { FOUR: '4', SIX: '6' };

export type OpenStackDrSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSpec'] = ResolversParentTypes['OpenStackDrSpec']> = ResolversObject<{
  disk_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ephemeral_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  extra_specs?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterInstanceExtraSpec']>>>, ParentType, ContextType>;
  mem_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swap_total_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vcpu_total_cnt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrStorageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrStorage'] = ResolversParentTypes['OpenStackDrStorage']> = ResolversObject<{
  capacity_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  credential?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['OpenStackDrStorageTypeEnum']>, ParentType, ContextType>;
  used_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrStorageTypeEnumResolvers = { OPENSTACK_STORAGE_TYPE_LVM: 'openstack.storage.type.lvm', OPENSTACK_STORAGE_TYPE_NFS: 'openstack.storage.type.nfs' };

export type OpenStackDrSubnetResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSubnet'] = ResolversParentTypes['OpenStackDrSubnet']> = ResolversObject<{
  dhcp_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dhcp_pools?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrSubnetDhcpPool']>>>, ParentType, ContextType>;
  gateway_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gateway_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv6_address_mode_code?: Resolver<Maybe<ResolversTypes['OpenStackDrSubnetIpv6AddressModeCodeEnum']>, ParentType, ContextType>;
  ipv6_ra_mode_code?: Resolver<Maybe<ResolversTypes['OpenStackDrSubnetIpv6RaModeCodeEnum']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameservers?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrSubnetNameserver']>>>, ParentType, ContextType>;
  network_cidr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSubnetDhcpPoolResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSubnetDhcpPool'] = ResolversParentTypes['OpenStackDrSubnetDhcpPool']> = ResolversObject<{
  end_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_ip_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrSubnetIpv6AddressModeCodeEnumResolvers = { DHCPV6_STATEFUL: 'dhcpv6-stateful', DHCPV6_STATELESS: 'dhcpv6-stateless', SLAAC: 'slaac' };

export type OpenStackDrSubnetIpv6RaModeCodeEnumResolvers = { DHCPV6_STATEFUL: 'dhcpv6-stateful', DHCPV6_STATELESS: 'dhcpv6-stateless', SLAAC: 'slaac' };

export type OpenStackDrSubnetNameserverResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrSubnetNameserver'] = ResolversParentTypes['OpenStackDrSubnetNameserver']> = ResolversObject<{
  nameserver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrTenantResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrTenant'] = ResolversParentTypes['OpenStackDrTenant']> = ResolversObject<{
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quotas?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackCmClusterTenantQuota']>>>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrVolumeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrVolume'] = ResolversParentTypes['OpenStackDrVolume']> = ResolversObject<{
  boot_index?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bootable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  device_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  multiattach?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  snapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenStackDrVolumeSnapshot']>>>, ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['OpenStackDrStorage']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenStackDrVolumeSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['OpenStackDrVolumeSnapshot'] = ResolversParentTypes['OpenStackDrVolumeSnapshot']> = ResolversObject<{
  cluster_volume_group_snapshot_uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size_bytes?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetBackupJob?: Resolver<Maybe<ResolversTypes['BackupBackupJobResponse']>, ParentType, ContextType, Partial<QueryGetBackupJobArgs>>;
  GetBackupJobStatus?: Resolver<Maybe<ResolversTypes['BackupBackupJobStatusResponse']>, ParentType, ContextType, Partial<QueryGetBackupJobStatusArgs>>;
  GetBackupJobs?: Resolver<Maybe<ResolversTypes['BackupBackupJobsResponse']>, ParentType, ContextType>;
  GetBackupPlan?: Resolver<Maybe<ResolversTypes['BackupBackupPlanResponse']>, ParentType, ContextType, Partial<QueryGetBackupPlanArgs>>;
  GetBackupPlans?: Resolver<Maybe<ResolversTypes['BackupBackupPlansResponse']>, ParentType, ContextType>;
  GetBackupResult?: Resolver<Maybe<ResolversTypes['BackupBackupResultResponse']>, ParentType, ContextType, Partial<QueryGetBackupResultArgs>>;
  GetBackupResultDetails?: Resolver<Maybe<ResolversTypes['BackupBackupResultDetailResponse']>, ParentType, ContextType, Partial<QueryGetBackupResultDetailsArgs>>;
  GetBackupResults?: Resolver<Maybe<ResolversTypes['BackupBackupResultsResponse']>, ParentType, ContextType>;
}>;

export type ReplicatorProtectionGroupSnapshotResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorProtectionGroupSnapshot'] = ResolversParentTypes['ReplicatorProtectionGroupSnapshot']> = ResolversObject<{
  is_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protection_group_snapshot_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  retain_count_over?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReplicatorSnapshotScheduleResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['ReplicatorSnapshotSchedule'] = ResolversParentTypes['ReplicatorSnapshotSchedule']> = ResolversObject<{
  end_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  export_period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  export_retain_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  retain_count?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  schedule_type?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  start_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorage'] = ResolversParentTypes['SmStorage']> = ResolversObject<{
  primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  resource_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['SmStorageSpec']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SmStorageStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationAwsS3Resolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationAwsS3'] = ResolversParentTypes['SmStorageConfigurationAwsS3']> = ResolversObject<{
  access_key_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationAwsS3RegionEnum']>, ParentType, ContextType>;
  secret_access_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationAwsS3RegionEnumResolvers = { AF_SOUTH_1: 'af-south-1', AP_EAST_1: 'ap-east-1', AP_NORTHEAST_1: 'ap-northeast-1', AP_NORTHEAST_2: 'ap-northeast-2', AP_NORTHEAST_3: 'ap-northeast-3', AP_SOUTHEAST_1: 'ap-southeast-1', AP_SOUTHEAST_2: 'ap-southeast-2', AP_SOUTHEAST_3: 'ap-southeast-3', AP_SOUTHEAST_4: 'ap-southeast-4', AP_SOUTH_1: 'ap-south-1', AP_SOUTH_2: 'ap-south-2', CA_CENTRAL_1: 'ca-central-1', CA_WEST_1: 'ca-west-1', EU_CENTRAL_1: 'eu-central-1', EU_CENTRAL_2: 'eu-central-2', EU_NORTH_1: 'eu-north-1', EU_SOUTH_1: 'eu-south-1', EU_SOUTH_2: 'eu-south-2', EU_WEST_1: 'eu-west-1', EU_WEST_2: 'eu-west-2', EU_WEST_3: 'eu-west-3', IL_CENTRAL_1: 'il-central-1', ME_CENTRAL_1: 'me-central-1', ME_SOUTH_1: 'me-south-1', SA_EAST_1: 'sa-east-1', US_EAST_1: 'us-east-1', US_EAST_2: 'us-east-2', US_WEST_1: 'us-west-1', US_WEST_2: 'us-west-2' };

export type SmStorageConfigurationAzureBlobResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationAzureBlob'] = ResolversParentTypes['SmStorageConfigurationAzureBlob']> = ResolversObject<{
  storage_account_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_account_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationCephRbdResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationCephRbd'] = ResolversParentTypes['SmStorageConfigurationCephRbd']> = ResolversObject<{
  fsid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_features?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmStorageConfigurationCephRbdImageFeaturesEnum']>>>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationCephRbdImageFeaturesEnumResolvers = { DATA_POOL: 'data-pool', DEEP_FLATTEN: 'deep-flatten', EXCLUSIVE_LOCK: 'exclusive-lock', FAST_DIFF: 'fast-diff', JOURNALING: 'journaling', LAYERING: 'layering', OBJECT_MAP: 'object-map', STRIPING: 'striping' };

export type SmStorageConfigurationNfsResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationNfs'] = ResolversParentTypes['SmStorageConfigurationNfs']> = ResolversObject<{
  server?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  share?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageConfigurationTypeResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageConfigurationType'] = ResolversParentTypes['SmStorageConfigurationType']> = ResolversObject<{
  access_key_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fsid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_features?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmStorageConfigurationCephRbdImageFeaturesEnum']>>>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationAwsS3RegionEnum']>, ParentType, ContextType>;
  secret_access_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  server?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  share?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_account_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storage_account_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageSpecResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageSpec'] = ResolversParentTypes['SmStorageSpec']> = ResolversObject<{
  configuration?: Resolver<Maybe<ResolversTypes['SmStorageConfigurationType']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['CloudUser']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SmStorageTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageStateCodeEnumResolvers = { CDM_BACKUP_STORAGE_STATE_AVAILABLE: 'cdm.backup.storage.state.available', CDM_BACKUP_STORAGE_STATE_ERROR: 'cdm.backup.storage.state.error', CDM_BACKUP_STORAGE_STATE_UNAVAILABLE: 'cdm.backup.storage.state.unavailable' };

export type SmStorageStatusResolvers<ContextType = NeverStopContext, ParentType extends ResolversParentTypes['SmStorageStatus'] = ResolversParentTypes['SmStorageStatus']> = ResolversObject<{
  capacity?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  free_space?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  state_code?: Resolver<Maybe<ResolversTypes['SmStorageStateCodeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmStorageTypeEnumResolvers = { CDM_BACKUP_STORAGE_TYPE_AWS_S3: 'cdm.backup.storage.type.aws.s3', CDM_BACKUP_STORAGE_TYPE_AZURE_BLOB: 'cdm.backup.storage.type.azure.blob', CDM_BACKUP_STORAGE_TYPE_CEPH_RBD: 'cdm.backup.storage.type.ceph.rbd', CDM_BACKUP_STORAGE_TYPE_NFS: 'cdm.backup.storage.type.nfs' };

export type Resolvers<ContextType = NeverStopContext> = ResolversObject<{
  BackupBackupClusterTypeEnum?: BackupBackupClusterTypeEnumResolvers;
  BackupBackupJob?: BackupBackupJobResolvers<ContextType>;
  BackupBackupJobRequest?: BackupBackupJobRequestResolvers<ContextType>;
  BackupBackupJobResponse?: BackupBackupJobResponseResolvers<ContextType>;
  BackupBackupJobStateCodeEnum?: BackupBackupJobStateCodeEnumResolvers;
  BackupBackupJobStatus?: BackupBackupJobStatusResolvers<ContextType>;
  BackupBackupJobStatusResponse?: BackupBackupJobStatusResponseResolvers<ContextType>;
  BackupBackupJobTypeEnum?: BackupBackupJobTypeEnumResolvers;
  BackupBackupJobsResponse?: BackupBackupJobsResponseResolvers<ContextType>;
  BackupBackupPlan?: BackupBackupPlanResolvers<ContextType>;
  BackupBackupPlanRequest?: BackupBackupPlanRequestResolvers<ContextType>;
  BackupBackupPlanResponse?: BackupBackupPlanResponseResolvers<ContextType>;
  BackupBackupPlansResponse?: BackupBackupPlansResponseResolvers<ContextType>;
  BackupBackupResult?: BackupBackupResultResolvers<ContextType>;
  BackupBackupResultDetailResponse?: BackupBackupResultDetailResponseResolvers<ContextType>;
  BackupBackupResultRequest?: BackupBackupResultRequestResolvers<ContextType>;
  BackupBackupResultResponse?: BackupBackupResultResponseResolvers<ContextType>;
  BackupBackupResultsResponse?: BackupBackupResultsResponseResolvers<ContextType>;
  BackupBackupTypeEnum?: BackupBackupTypeEnumResolvers;
  BackupResultProtectionGroupInfo?: BackupResultProtectionGroupInfoResolvers<ContextType>;
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
  OpenShiftCmClusterResourceServiceTypeEnum?: OpenShiftCmClusterResourceServiceTypeEnumResolvers;
  OpenShiftCmClusterResourceVolumeTypeEnum?: OpenShiftCmClusterResourceVolumeTypeEnumResolvers;
  OpenShiftCmFinalizer?: OpenShiftCmFinalizerResolvers<ContextType>;
  OpenShiftCmNamespace?: OpenShiftCmNamespaceResolvers<ContextType>;
  OpenShiftCmPriorityClass?: OpenShiftCmPriorityClassResolvers<ContextType>;
  OpenShiftCmProtectionGroupInfo?: OpenShiftCmProtectionGroupInfoResolvers<ContextType>;
  OpenShiftCmRegistry?: OpenShiftCmRegistryResolvers<ContextType>;
  OpenShiftCmResource?: OpenShiftCmResourceResolvers<ContextType>;
  OpenShiftCmRuntimeClass?: OpenShiftCmRuntimeClassResolvers<ContextType>;
  OpenShiftCmScheduler?: OpenShiftCmSchedulerResolvers<ContextType>;
  OpenShiftCmService?: OpenShiftCmServiceResolvers<ContextType>;
  OpenShiftCmServiceAccount?: OpenShiftCmServiceAccountResolvers<ContextType>;
  OpenShiftCmVolume?: OpenShiftCmVolumeResolvers<ContextType>;
  OpenShiftCmVolumeSnapshot?: OpenShiftCmVolumeSnapshotResolvers<ContextType>;
  OpenShiftCmWorkload?: OpenShiftCmWorkloadResolvers<ContextType>;
  OpenShiftCmWorkloadVolume?: OpenShiftCmWorkloadVolumeResolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpec?: OpenStackCmClusterInstanceExtraSpecResolvers<ContextType>;
  OpenStackCmClusterInstanceExtraSpecKeyEnum?: OpenStackCmClusterInstanceExtraSpecKeyEnumResolvers;
  OpenStackCmClusterTenantQuota?: OpenStackCmClusterTenantQuotaResolvers<ContextType>;
  OpenStackDrExternalRoutingInterface?: OpenStackDrExternalRoutingInterfaceResolvers<ContextType>;
  OpenStackDrFloatingIp?: OpenStackDrFloatingIpResolvers<ContextType>;
  OpenStackDrInstance?: OpenStackDrInstanceResolvers<ContextType>;
  OpenStackDrInstanceAvailabilityZone?: OpenStackDrInstanceAvailabilityZoneResolvers<ContextType>;
  OpenStackDrInstanceHypervisor?: OpenStackDrInstanceHypervisorResolvers<ContextType>;
  OpenStackDrInternalRoutingInterface?: OpenStackDrInternalRoutingInterfaceResolvers<ContextType>;
  OpenStackDrKeypair?: OpenStackDrKeypairResolvers<ContextType>;
  OpenStackDrKeypairTypeEnum?: OpenStackDrKeypairTypeEnumResolvers;
  OpenStackDrNetwork?: OpenStackDrNetworkResolvers<ContextType>;
  OpenStackDrNetworkTypeEnum?: OpenStackDrNetworkTypeEnumResolvers;
  OpenStackDrProtectionGroupInfo?: OpenStackDrProtectionGroupInfoResolvers<ContextType>;
  OpenStackDrRouter?: OpenStackDrRouterResolvers<ContextType>;
  OpenStackDrRouterExtraRoute?: OpenStackDrRouterExtraRouteResolvers<ContextType>;
  OpenStackDrSecurityGroup?: OpenStackDrSecurityGroupResolvers<ContextType>;
  OpenStackDrSecurityGroupRule?: OpenStackDrSecurityGroupRuleResolvers<ContextType>;
  OpenStackDrSecurityGroupRuleDirectionEnum?: OpenStackDrSecurityGroupRuleDirectionEnumResolvers;
  OpenStackDrSecurityGroupRuleEtherTypeEnum?: OpenStackDrSecurityGroupRuleEtherTypeEnumResolvers;
  OpenStackDrSpec?: OpenStackDrSpecResolvers<ContextType>;
  OpenStackDrStorage?: OpenStackDrStorageResolvers<ContextType>;
  OpenStackDrStorageTypeEnum?: OpenStackDrStorageTypeEnumResolvers;
  OpenStackDrSubnet?: OpenStackDrSubnetResolvers<ContextType>;
  OpenStackDrSubnetDhcpPool?: OpenStackDrSubnetDhcpPoolResolvers<ContextType>;
  OpenStackDrSubnetIpv6AddressModeCodeEnum?: OpenStackDrSubnetIpv6AddressModeCodeEnumResolvers;
  OpenStackDrSubnetIpv6RaModeCodeEnum?: OpenStackDrSubnetIpv6RaModeCodeEnumResolvers;
  OpenStackDrSubnetNameserver?: OpenStackDrSubnetNameserverResolvers<ContextType>;
  OpenStackDrTenant?: OpenStackDrTenantResolvers<ContextType>;
  OpenStackDrVolume?: OpenStackDrVolumeResolvers<ContextType>;
  OpenStackDrVolumeSnapshot?: OpenStackDrVolumeSnapshotResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReplicatorProtectionGroupSnapshot?: ReplicatorProtectionGroupSnapshotResolvers<ContextType>;
  ReplicatorSnapshotSchedule?: ReplicatorSnapshotScheduleResolvers<ContextType>;
  SmStorage?: SmStorageResolvers<ContextType>;
  SmStorageConfigurationAwsS3?: SmStorageConfigurationAwsS3Resolvers<ContextType>;
  SmStorageConfigurationAwsS3RegionEnum?: SmStorageConfigurationAwsS3RegionEnumResolvers;
  SmStorageConfigurationAzureBlob?: SmStorageConfigurationAzureBlobResolvers<ContextType>;
  SmStorageConfigurationCephRbd?: SmStorageConfigurationCephRbdResolvers<ContextType>;
  SmStorageConfigurationCephRbdImageFeaturesEnum?: SmStorageConfigurationCephRbdImageFeaturesEnumResolvers;
  SmStorageConfigurationNfs?: SmStorageConfigurationNfsResolvers<ContextType>;
  SmStorageConfigurationType?: SmStorageConfigurationTypeResolvers<ContextType>;
  SmStorageSpec?: SmStorageSpecResolvers<ContextType>;
  SmStorageStateCodeEnum?: SmStorageStateCodeEnumResolvers;
  SmStorageStatus?: SmStorageStatusResolvers<ContextType>;
  SmStorageTypeEnum?: SmStorageTypeEnumResolvers;
}>;

