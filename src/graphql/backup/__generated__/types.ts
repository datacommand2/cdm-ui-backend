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
  ClusterTypeOpenshift = 'CLUSTER_TYPE_OPENSHIFT',
  ClusterTypeOpenstack = 'CLUSTER_TYPE_OPENSTACK'
}

export type BackupBackupJob = {
  __typename?: 'BackupBackupJob';
  backup_plan?: Maybe<BackupBackupPlan>;
  cluster_type?: Maybe<BackupBackupClusterTypeEnum>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  modified_at?: Maybe<Scalars['BigInt']['output']>;
  modifier?: Maybe<CloudUser>;
  name?: Maybe<Scalars['String']['output']>;
  protection_group_resource_name?: Maybe<Scalars['String']['output']>;
  reserved_at?: Maybe<Scalars['BigInt']['output']>;
  resource_name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BackupBackupJobTypeEnum>;
};

export type BackupBackupJobInput = {
  backup_plan?: InputMaybe<BackupBackupPlanInput>;
  cluster_type?: InputMaybe<BackupBackupClusterTypeEnum>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  protection_group_resource_name?: InputMaybe<Scalars['String']['input']>;
  reserved_at?: InputMaybe<Scalars['BigInt']['input']>;
  resource_name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BackupBackupJobTypeEnum>;
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
  CdmBackupJobStateDone = 'CDM_BACKUP_JOB_STATE_DONE',
  CdmBackupJobStateFailed = 'CDM_BACKUP_JOB_STATE_FAILED',
  CdmBackupJobStatePending = 'CDM_BACKUP_JOB_STATE_PENDING',
  CdmBackupJobStatePreparing = 'CDM_BACKUP_JOB_STATE_PREPARING',
  CdmBackupJobStateRunning = 'CDM_BACKUP_JOB_STATE_RUNNING',
  CdmBackupJobStateWaiting = 'CDM_BACKUP_JOB_STATE_WAITING'
}

export type BackupBackupJobStatus = {
  __typename?: 'BackupBackupJobStatus';
  failed_reason_code?: Maybe<Scalars['String']['output']>;
  failed_reason_contents?: Maybe<Scalars['String']['output']>;
  next_runtime?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<BackupBackupJobStateCodeEnum>;
};

export type BackupBackupJobStatusInput = {
  failed_reason_code?: InputMaybe<Scalars['String']['input']>;
  failed_reason_contents?: InputMaybe<Scalars['String']['input']>;
  next_runtime?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<BackupBackupJobStateCodeEnum>;
};

export type BackupBackupJobStatusResponse = {
  __typename?: 'BackupBackupJobStatusResponse';
  backup_job_status?: Maybe<BackupBackupJobStatus>;
};

export type BackupBackupJobStatusResponseInput = {
  backup_job_status?: InputMaybe<BackupBackupJobStatusInput>;
};

export enum BackupBackupJobTypeEnum {
  CdmBackupJobTypeImmediate = 'CDM_BACKUP_JOB_TYPE_IMMEDIATE',
  CdmBackupJobTypeReserved = 'CDM_BACKUP_JOB_TYPE_RESERVED',
  CdmBackupJobTypeScheduled = 'CDM_BACKUP_JOB_TYPE_SCHEDULED'
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
  backup_type?: Maybe<BackupBackupTypeEnum>;
  cluster_type?: Maybe<BackupBackupClusterTypeEnum>;
  created_at?: Maybe<Scalars['BigInt']['output']>;
  creator?: Maybe<CloudUser>;
  description?: Maybe<Scalars['String']['output']>;
  elapsed?: Maybe<Scalars['BigInt']['output']>;
  end_at?: Maybe<Scalars['BigInt']['output']>;
  export_repository_storage?: Maybe<SmStorage>;
  job_type?: Maybe<BackupBackupJobTypeEnum>;
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
  cluster_type?: Maybe<BackupBackupClusterTypeEnum>;
  details?: Maybe<BackupResultProtectionGroupInfo>;
};

export type BackupBackupResultDetailResponseInput = {
  cluster_type?: InputMaybe<BackupBackupClusterTypeEnum>;
  details?: InputMaybe<BackupResultProtectionGroupInfoInput>;
};

export type BackupBackupResultInput = {
  backup_job?: InputMaybe<BackupBackupJobInput>;
  backup_plan?: InputMaybe<BackupBackupPlanInput>;
  backup_type?: InputMaybe<BackupBackupTypeEnum>;
  cluster_type?: InputMaybe<BackupBackupClusterTypeEnum>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  elapsed?: InputMaybe<Scalars['BigInt']['input']>;
  end_at?: InputMaybe<Scalars['BigInt']['input']>;
  export_repository_storage?: InputMaybe<SmStorageInput>;
  job_type?: InputMaybe<BackupBackupJobTypeEnum>;
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
  CdmBackupBackupTypeDifferentialBackup = 'CDM_BACKUP_BACKUP_TYPE_DIFFERENTIAL_BACKUP',
  CdmBackupBackupTypeFullBackup = 'CDM_BACKUP_BACKUP_TYPE_FULL_BACKUP',
  CdmBackupBackupTypeIncrementalBackup = 'CDM_BACKUP_BACKUP_TYPE_INCREMENTAL_BACKUP'
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
  type?: Maybe<OpenStackDrKeypairTypeEnum>;
};

export type OpenStackDrKeypairInput = {
  fingerprint?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OpenStackDrKeypairTypeEnum>;
};

export enum OpenStackDrKeypairTypeEnum {
  OpenstackKeypairTypeSsh = 'OPENSTACK_KEYPAIR_TYPE_SSH',
  OpenstackKeypairTypeX509 = 'OPENSTACK_KEYPAIR_TYPE_X509'
}

export type OpenStackDrNetwork = {
  __typename?: 'OpenStackDrNetwork';
  dhcp_flag?: Maybe<Scalars['Boolean']['output']>;
  external_flag?: Maybe<Scalars['Boolean']['output']>;
  floating_ips?: Maybe<Array<Maybe<OpenStackDrFloatingIp>>>;
  ip_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subnets?: Maybe<Array<Maybe<OpenStackDrSubnet>>>;
  type?: Maybe<OpenStackDrNetworkTypeEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrNetworkInput = {
  dhcp_flag?: InputMaybe<Scalars['Boolean']['input']>;
  external_flag?: InputMaybe<Scalars['Boolean']['input']>;
  floating_ips?: InputMaybe<Array<InputMaybe<OpenStackDrFloatingIpInput>>>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subnets?: InputMaybe<Array<InputMaybe<OpenStackDrSubnetInput>>>;
  type?: InputMaybe<OpenStackDrNetworkTypeEnum>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrNetworkTypeEnum {
  OpenstackNetworkTypeFlat = 'OPENSTACK_NETWORK_TYPE_FLAT',
  OpenstackNetworkTypeGre = 'OPENSTACK_NETWORK_TYPE_GRE',
  OpenstackNetworkTypeLocal = 'OPENSTACK_NETWORK_TYPE_LOCAL',
  OpenstackNetworkTypeVlan = 'OPENSTACK_NETWORK_TYPE_VLAN',
  OpenstackNetworkTypeVxlan = 'OPENSTACK_NETWORK_TYPE_VXLAN'
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
  direction?: Maybe<OpenStackDrSecurityGroupRuleDirectionEnum>;
  ether_type?: Maybe<OpenStackDrSecurityGroupRuleEtherTypeEnum>;
  network_cidr?: Maybe<Scalars['String']['output']>;
  port_range_max?: Maybe<Scalars['BigInt']['output']>;
  port_range_min?: Maybe<Scalars['BigInt']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export enum OpenStackDrSecurityGroupRuleDirectionEnum {
  Egress = 'EGRESS',
  Ingress = 'INGRESS'
}

export enum OpenStackDrSecurityGroupRuleEtherTypeEnum {
  Four = 'FOUR',
  Six = 'SIX'
}

export type OpenStackDrSecurityGroupRuleInput = {
  direction?: InputMaybe<OpenStackDrSecurityGroupRuleDirectionEnum>;
  ether_type?: InputMaybe<OpenStackDrSecurityGroupRuleEtherTypeEnum>;
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
  type?: Maybe<OpenStackDrStorageTypeEnum>;
  used_bytes?: Maybe<Scalars['BigInt']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type OpenStackDrStorageInput = {
  capacity_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OpenStackDrStorageTypeEnum>;
  used_bytes?: InputMaybe<Scalars['BigInt']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrStorageTypeEnum {
  OpenstackStorageTypeLvm = 'OPENSTACK_STORAGE_TYPE_LVM',
  OpenstackStorageTypeNfs = 'OPENSTACK_STORAGE_TYPE_NFS'
}

export type OpenStackDrSubnet = {
  __typename?: 'OpenStackDrSubnet';
  dhcp_enabled?: Maybe<Scalars['Boolean']['output']>;
  dhcp_pools?: Maybe<Array<Maybe<OpenStackDrSubnetDhcpPool>>>;
  gateway_enabled?: Maybe<Scalars['Boolean']['output']>;
  gateway_ip_address?: Maybe<Scalars['String']['output']>;
  ipv6_address_mode_code?: Maybe<OpenStackDrSubnetIpv6AddressModeCodeEnum>;
  ipv6_ra_mode_code?: Maybe<OpenStackDrSubnetIpv6RaModeCodeEnum>;
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
  ipv6_address_mode_code?: InputMaybe<OpenStackDrSubnetIpv6AddressModeCodeEnum>;
  ipv6_ra_mode_code?: InputMaybe<OpenStackDrSubnetIpv6RaModeCodeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameservers?: InputMaybe<Array<InputMaybe<OpenStackDrSubnetNameserverInput>>>;
  network_cidr?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export enum OpenStackDrSubnetIpv6AddressModeCodeEnum {
  Dhcpv6Stateful = 'DHCPV6_STATEFUL',
  Dhcpv6Stateless = 'DHCPV6_STATELESS',
  Slaac = 'SLAAC'
}

export enum OpenStackDrSubnetIpv6RaModeCodeEnum {
  Dhcpv6Stateful = 'DHCPV6_STATEFUL',
  Dhcpv6Stateless = 'DHCPV6_STATELESS',
  Slaac = 'SLAAC'
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
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
};

export type SmStorageConfigurationAwsS3Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  bucket?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
};

export enum SmStorageConfigurationAwsS3RegionEnum {
  AfSouth_1 = 'AF_SOUTH_1',
  ApEast_1 = 'AP_EAST_1',
  ApNortheast_1 = 'AP_NORTHEAST_1',
  ApNortheast_2 = 'AP_NORTHEAST_2',
  ApNortheast_3 = 'AP_NORTHEAST_3',
  ApSoutheast_1 = 'AP_SOUTHEAST_1',
  ApSoutheast_2 = 'AP_SOUTHEAST_2',
  ApSoutheast_3 = 'AP_SOUTHEAST_3',
  ApSoutheast_4 = 'AP_SOUTHEAST_4',
  ApSouth_1 = 'AP_SOUTH_1',
  ApSouth_2 = 'AP_SOUTH_2',
  CaCentral_1 = 'CA_CENTRAL_1',
  CaWest_1 = 'CA_WEST_1',
  EuCentral_1 = 'EU_CENTRAL_1',
  EuCentral_2 = 'EU_CENTRAL_2',
  EuNorth_1 = 'EU_NORTH_1',
  EuSouth_1 = 'EU_SOUTH_1',
  EuSouth_2 = 'EU_SOUTH_2',
  EuWest_1 = 'EU_WEST_1',
  EuWest_2 = 'EU_WEST_2',
  EuWest_3 = 'EU_WEST_3',
  IlCentral_1 = 'IL_CENTRAL_1',
  MeCentral_1 = 'ME_CENTRAL_1',
  MeSouth_1 = 'ME_SOUTH_1',
  SaEast_1 = 'SA_EAST_1',
  UsEast_1 = 'US_EAST_1',
  UsEast_2 = 'US_EAST_2',
  UsWest_1 = 'US_WEST_1',
  UsWest_2 = 'US_WEST_2'
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
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  user_key?: Maybe<Scalars['String']['output']>;
};

export enum SmStorageConfigurationCephRbdImageFeaturesEnum {
  DataPool = 'DATA_POOL',
  DeepFlatten = 'DEEP_FLATTEN',
  ExclusiveLock = 'EXCLUSIVE_LOCK',
  FastDiff = 'FAST_DIFF',
  Journaling = 'JOURNALING',
  Layering = 'LAYERING',
  ObjectMap = 'OBJECT_MAP',
  Striping = 'STRIPING'
}

export type SmStorageConfigurationCephRbdInput = {
  fsid?: InputMaybe<Scalars['String']['input']>;
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
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
  image_features?: Maybe<Array<Maybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pool?: Maybe<Scalars['String']['output']>;
  region?: Maybe<SmStorageConfigurationAwsS3RegionEnum>;
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
  image_features?: InputMaybe<Array<InputMaybe<SmStorageConfigurationCephRbdImageFeaturesEnum>>>;
  monitors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<SmStorageConfigurationAwsS3RegionEnum>;
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
  type?: Maybe<SmStorageTypeEnum>;
};

export type SmStorageSpecInput = {
  configuration?: InputMaybe<SmStorageConfigurationTypeInput>;
  created_at?: InputMaybe<Scalars['BigInt']['input']>;
  creator?: InputMaybe<CloudUserInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  modified_at?: InputMaybe<Scalars['BigInt']['input']>;
  modifier?: InputMaybe<CloudUserInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmStorageTypeEnum>;
};

export enum SmStorageStateCodeEnum {
  CdmBackupStorageStateAvailable = 'CDM_BACKUP_STORAGE_STATE_AVAILABLE',
  CdmBackupStorageStateError = 'CDM_BACKUP_STORAGE_STATE_ERROR',
  CdmBackupStorageStateUnavailable = 'CDM_BACKUP_STORAGE_STATE_UNAVAILABLE'
}

export type SmStorageStatus = {
  __typename?: 'SmStorageStatus';
  capacity?: Maybe<Scalars['BigInt']['output']>;
  free_space?: Maybe<Scalars['BigInt']['output']>;
  state_code?: Maybe<SmStorageStateCodeEnum>;
};

export type SmStorageStatusInput = {
  capacity?: InputMaybe<Scalars['BigInt']['input']>;
  free_space?: InputMaybe<Scalars['BigInt']['input']>;
  state_code?: InputMaybe<SmStorageStateCodeEnum>;
};

export enum SmStorageTypeEnum {
  CdmBackupStorageTypeAwsS3 = 'CDM_BACKUP_STORAGE_TYPE_AWS_S3',
  CdmBackupStorageTypeAzureBlob = 'CDM_BACKUP_STORAGE_TYPE_AZURE_BLOB',
  CdmBackupStorageTypeCephRbd = 'CDM_BACKUP_STORAGE_TYPE_CEPH_RBD',
  CdmBackupStorageTypeNfs = 'CDM_BACKUP_STORAGE_TYPE_NFS'
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
