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
  OpenShiftCmClusterResourceServiceTypeEnumResolvers,
  OpenShiftCmClusterResourceVolumeTypeEnumResolvers,
  OpenShiftCmClusterStateCodeEnumResolvers,
  OpenShiftCmClusterSyncStateCodeEnumResolvers,
  OpenShiftCmClusterTypeCodeEnumResolvers,
  OpenShiftDrFinalizerFallbackPolicyEnumResolvers,
  OpenShiftDrFinalizerRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrFinalizerRecoveryTypeCodeEnumResolvers,
  OpenShiftDrNamespaceRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrPriorityClassFallbackPolicyEnumResolvers,
  OpenShiftDrPriorityClassRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrPriorityClassRecoveryTypeCodeEnumResolvers,
  OpenShiftDrReadinessGateConditionFallbackPolicyEnumResolvers,
  OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnumResolvers,
  OpenShiftDrRecoveryClusterStateCodeEnumResolvers,
  OpenShiftDrRecoveryJobResultCodeEnumResolvers,
  OpenShiftDrRecoveryJobScheduleStateCodeEnumResolvers,
  OpenShiftDrRecoveryJobStateCodeEnumResolvers,
  OpenShiftDrRecoveryJobTaskFailedReasonCodeEnumResolvers,
  OpenShiftDrRecoveryJobTaskResultCodeEnumResolvers,
  OpenShiftDrRecoveryJobTaskStateCodeEnumResolvers,
  OpenShiftDrRecoveryJobTaskTypeCodeEnumResolvers,
  OpenShiftDrRecoveryPlanDirectionCodeEnumResolvers,
  OpenShiftDrRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrRecoveryPointTypeCodeEnumResolvers,
  OpenShiftDrRecoveryResultCodeEnumResolvers,
  OpenShiftDrRecoveryTypeCodeEnumResolvers,
  OpenShiftDrRegistryFallbackPolicyEnumResolvers,
  OpenShiftDrRegistryRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrRegistryRecoveryTypeCodeEnumResolvers,
  OpenShiftDrRuntimeClassFallbackPolicyEnumResolvers,
  OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrRuntimeClassRecoveryTypeCodeEnumResolvers,
  OpenShiftDrSchedulerFallbackPolicyEnumResolvers,
  OpenShiftDrSchedulerRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrSchedulerRecoveryTypeCodeEnumResolvers,
  OpenShiftDrServiceAccountFallbackPolicyEnumResolvers,
  OpenShiftDrServiceAccountRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrServiceAccountRecoveryTypeCodeEnumResolvers,
  OpenShiftDrServiceFallbackPolicyEnumResolvers,
  OpenShiftDrServiceRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrServiceRecoveryTypeCodeEnumResolvers,
  OpenShiftDrVolumeRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnumResolvers,
  OpenShiftDrWorkloadRecoveryFailedReasonCodeEnumResolvers,
  OpenShiftDrWorkloadRecoveryPlanStateCodeEnumResolvers,
  OpenShiftDrWorkloadRecoveryResultCodeEnumResolvers,
  OpenShiftDrWorkloadRecoveryStateCodeEnumResolvers,
  ReplicatorImageReplicationStatusStateCodeEnumResolvers,
  ReplicatorLastPrimarySnapshotStateCodeEnumResolvers,
  ReplicatorMirroringStatusStateCodeEnumResolvers,
  ReplicatorReplicationInfoStatusStateCodeEnumResolvers,
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

export const OpenShiftCmClusterResourceServiceTypeEnum = <OpenShiftCmClusterResourceServiceTypeEnumResolvers>{
  CLUSTERIP: 'ClusterIP',
  NODEPORT: 'NodePort',
  LOADBALANCER: 'LoadBalancer',
  EXTERNALNAME: 'ExternalName',
};

export const OpenShiftCmClusterResourceVolumeTypeEnum = <OpenShiftCmClusterResourceVolumeTypeEnumResolvers>{
  HOST_PATH: 'hostPath',
  EMPTY_DIR: 'emptyDir',
  GCE_PERSISTENT_DISK: 'gcePersistentDisk',
  AWS_ELASTIC_BLOCK_STORE: 'awsElasticBlockStore',
  GIT_REPO: 'gitRepo',
  NFS: 'nfs',
  ISCSI: 'iscsi',
  GLUSTERFS: 'glusterfs',
  PERSISTENT_VOLUME_CLAIM: 'persistentVolumeClaim',
  RBD: 'rbd',
  FLEX_VOLUME: 'flexVolume',
  CINDER: 'cinder',
  CEPHFS: 'cephfs',
  FLOCKER: 'flocker',
  FC: 'fc',
  AZURE_FILE: 'azureFile',
  CONFIG_MAP: 'configMap',
  VSPHERE_VOLUME: 'vsphereVolume',
  QUOBYTE: 'quobyte',
  AZURE_DISK: 'azureDisk',
  PHOTON_PERSISTENT_DISK: 'photonPersistentDisk',
  PORTWORX_VOLUME: 'portworxVolume',
  SCALE_I_O: 'scaleIO',
  STORAGEOS: 'storageos',
  CSI: 'csi',
  EPHEMERAL: 'ephemeral',
};

export const OpenShiftCmClusterStateCodeEnum = <OpenShiftCmClusterStateCodeEnumResolvers>{
  CLUSTER_STATE_UNKNOWN: 'cluster.state.unknown',
  CLUSTER_STATE_ACTIVE: 'cluster.state.active',
  CLUSTER_STATE_INACTIVE: 'cluster.state.inactive',
};

export const OpenShiftCmClusterSyncStateCodeEnum = <OpenShiftCmClusterSyncStateCodeEnumResolvers>{
  CLUSTER_SYNC_STATE_UNKNOWN: 'cluster.sync.state.unknown',
  CLUSTER_SYNC_STATE_SYNCHRONIZING: 'cluster.sync.state.synchronizing',
  CLUSTER_SYNC_STATE_SYNCHRONIZED: 'cluster.sync.state.synchronized',
  CLUSTER_SYNC_STATE_SYNCHRONIZE_FAILED: 'cluster.sync.state.synchronize-failed',
};

export const OpenShiftCmClusterTypeCodeEnum = <OpenShiftCmClusterTypeCodeEnumResolvers>{
  CLUSTER_TYPE_OPENSHIFT: 'cluster.type.openshift',
  CLUSTER_TYPE_KUBERNETES: 'cluster.type.kubernetes',
};

export const OpenShiftDrFinalizerFallbackPolicyEnum = <OpenShiftDrFinalizerFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.ignore-recovery',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.fallback_policy.using-default',
};

export const OpenShiftDrFinalizerRecoveryPlanStateCodeEnum = <OpenShiftDrFinalizerRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NOT_SET_FINALIZER: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.not-set-finalizer',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_STATE_NOT_FOUND_FINALIZER: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.state.not-found-finalizer',
};

export const OpenShiftDrFinalizerRecoveryTypeCodeEnum = <OpenShiftDrFinalizerRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.unused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.no-action',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_FINALIZER_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.finalizer-recovery-plan.recovery-type.update',
};

export const OpenShiftDrNamespaceRecoveryPlanStateCodeEnum = <OpenShiftDrNamespaceRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_NOT_SET_NAME: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.not-set-name',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_INVALID_NAME: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.invalid-name',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_NAMESPACE_RECOVERY_PLAN_STATE_DUPLICATED_NAME: 'cdm.disaster-recovery-openshift.recovery-plan.namespace-recovery-plan.state.duplicated-name',
};

export const OpenShiftDrPriorityClassFallbackPolicyEnum = <OpenShiftDrPriorityClassFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.ignore-recovery',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.fallback_policy.using-default',
};

export const OpenShiftDrPriorityClassRecoveryPlanStateCodeEnum = <OpenShiftDrPriorityClassRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NOT_SET_PRIORITY_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.not-set-priority-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_STATE_NOT_FOUND_PRIORITY_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.state.not-found-priority-class',
};

export const OpenShiftDrPriorityClassRecoveryTypeCodeEnum = <OpenShiftDrPriorityClassRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.unused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.mirror',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_PRIORITY_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING: 'cdm.disaster-recovery-openshift.recovery-plan.priority-class-recovery-plan.recovery-type.mapping',
};

export const OpenShiftDrReadinessGateConditionFallbackPolicyEnum = <OpenShiftDrReadinessGateConditionFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.ignore-recovery',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.fallback_policy.using-default',
};

export const OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnum = <OpenShiftDrReadinessGateConditionRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_STATE_NOT_SET_CONDITION: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.state.not-set-condition',
};

export const OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnum = <OpenShiftDrReadinessGateConditionRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.unused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.no-action',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_READINESS_GATE_CONDITION_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.readiness-gate-condition-recovery-plan.recovery-type.update',
};

export const OpenShiftDrRecoveryClusterStateCodeEnum = <OpenShiftDrRecoveryClusterStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_NOT_FOUND: 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.not-found',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RECOVERY_CLUSTER_STATE_INACTIVE: 'cdm.disaster-recovery-openshift.recovery-plan.recovery-cluster.state.inactive',
};

export const OpenShiftDrRecoveryJobResultCodeEnum = <OpenShiftDrRecoveryJobResultCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_SUCCEED: 'cdm-disaster-recovery-openshift.recovery-job.result.succeed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_CANCELED: 'cdm-disaster-recovery-openshift.recovery-job.result.canceled',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RESULT_FAILED: 'cdm-disaster-recovery-openshift.recovery-job.result.failed',
};

export const OpenShiftDrRecoveryJobScheduleStateCodeEnum = <OpenShiftDrRecoveryJobScheduleStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_PREPARING: 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.preparing',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_SCHEDULE_STATE_FAILED: 'cdm.disaster-recovery-openshift.recovery-job-schedule.state.failed',
};

export const OpenShiftDrRecoveryJobStateCodeEnum = <OpenShiftDrRecoveryJobStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PENDING: 'cdm.disaster-recovery-openshift.recovery-job.state.pending',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_RUNNING: 'cdm.disaster-recovery-openshift.recovery-job.state.running',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PAUSING: 'cdm.disaster-recovery-openshift.recovery-job.state.pausing',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_PAUSED: 'cdm.disaster-recovery-openshift.recovery-job.state.paused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CANCELING: 'cdm.disaster-recovery-openshift.recovery-job.state.canceling',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CANCELED: 'cdm.disaster-recovery-openshift.recovery-job.state.canceled',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_COMPLETED: 'cdm.disaster-recovery-openshift.recovery-job.state.completed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLING_BACK: 'cdm.disaster-recovery-openshift.recovery-job.state.rolling-back',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CONFIRMING: 'cdm.disaster-recovery-openshift.recovery-job.state.confirming',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLED_BACK: 'cdm.disaster-recovery-openshift.recovery-job.state.rolled-back',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_ROLLBACK_IGNORED: 'cdm.disaster-recovery-openshift.recovery-job.state.rollback-ignored',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_CONFIRMED: 'cdm.disaster-recovery-openshift.recovery-job.state.confirmed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_STATE_FORCE_CONFIRMED: 'cdm.disaster-recovery-openshift.recovery-job.state.force-confirmed',
};

export const OpenShiftDrRecoveryJobTaskFailedReasonCodeEnum = <OpenShiftDrRecoveryJobTaskFailedReasonCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_FAILED_UNEXPECTED_ERROR: 'cdm-disaster-recovery-openshift.recovery-job-task.failed.unexpected_error',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_FAILED_DEPENDENCY_TASK_FAILED: 'cdm-disaster-recovery-openshift.recovery-job-task.failed.dependency_task_failed',
};

export const OpenShiftDrRecoveryJobTaskResultCodeEnum = <OpenShiftDrRecoveryJobTaskResultCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_SUCCEED: 'cdm-disaster-recovery-openshift.recovery-job-task.result.succeed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_CANCELED: 'cdm-disaster-recovery-openshift.recovery-job-task.result.canceled',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_RESULT_FAILED: 'cdm-disaster-recovery-openshift.recovery-job-task.result.failed',
};

export const OpenShiftDrRecoveryJobTaskStateCodeEnum = <OpenShiftDrRecoveryJobTaskStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_PENDING: 'cdm.disaster-recovery-openshift.recovery-job-task.state.pending',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_RUNNING: 'cdm.disaster-recovery-openshift.recovery-job-task.state.running',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_PAUSED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.paused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_CANCELED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.canceled',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_COMPLETED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.completed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLING_BACK: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rolling-back',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLBACK_FAILED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rollback-failed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLBACK_IGNORED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rollback-ignored',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_ROLLED_BACK: 'cdm.disaster-recovery-openshift.recovery-job-task.state.rolled-back',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_STATE_CONFIRMED: 'cdm.disaster-recovery-openshift.recovery-job-task.state.confirmed',
};

export const OpenShiftDrRecoveryJobTaskTypeCodeEnum = <OpenShiftDrRecoveryJobTaskTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_RESOURCE: 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-resource',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_PUSH_IMAGE: 'cdm.disaster-recovery-openshift.recovery-job-task.type.push-image',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_VOLUME: 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-volume',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_TASK_TYPE_CREATE_VOLUME_SNAPSHOT: 'cdm.disaster-recovery-openshift.recovery-job-task.type.create-volume-snapshot',
};

export const OpenShiftDrRecoveryPlanDirectionCodeEnum = <OpenShiftDrRecoveryPlanDirectionCodeEnumResolvers>{
  CDM_DR_OPENSHIFT_RECOVERY_PLAN_DIRECTION_FAILOVER: 'cdm.dr-openshift.recovery-plan.direction.failover',
  CDM_DR_OPENSHIFT_RECOVERY_PLAN_DIRECTION_FAILBACK: 'cdm.dr-openshift.recovery-plan.direction.failback',
};

export const OpenShiftDrRecoveryPlanStateCodeEnum = <OpenShiftDrRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_PREPARING: 'cdm.disaster-recovery-openshift.recovery-plan.state.preparing',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_STATE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.state.warning',
};

export const OpenShiftDrRecoveryPointTypeCodeEnum = <OpenShiftDrRecoveryPointTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_LATEST: 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.latest',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_LATEST_SNAPSHOT: 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.latest_snapshot',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_POINT_TYPE_SNAPSHOT: 'cdm.disaster-recovery-openshift.recovery-job.recovery-point-type.snapshot',
};

export const OpenShiftDrRecoveryResultCodeEnum = <OpenShiftDrRecoveryResultCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_SUCCESS: 'cdm.disaster-recovery-openshift.recovery-result.success',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_FAILED: 'cdm.disaster-recovery-openshift.recovery-result.failed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_RESULT_CANCELED: 'cdm.disaster-recovery-openshift.recovery-result.canceled',
};

export const OpenShiftDrRecoveryTypeCodeEnum = <OpenShiftDrRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_TYPE_TEST: 'cdm.disaster-recovery-openshift.recovery-job.recovery-type.test',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_JOB_RECOVERY_TYPE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-job.recovery-type.recovery',
};

export const OpenShiftDrRegistryFallbackPolicyEnum = <OpenShiftDrRegistryFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.ignore-recovery',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.fallback_policy.using-default',
};

export const OpenShiftDrRegistryRecoveryPlanStateCodeEnum = <OpenShiftDrRegistryRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_SET_REGISTRY: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-set-registry',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_FOUND_REGISTRY: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-found-registry',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_STATE_NOT_SET_REGISTRY_PUSH_CREDENTIAL: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.state.not-set-registry-push-credential',
};

export const OpenShiftDrRegistryRecoveryTypeCodeEnum = <OpenShiftDrRegistryRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR_SECRET: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.recovery-type.mirror-secret',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_REGISTRY_RECOVERY_PLAN_RECOVERY_TYPE_MIRROR_IMAGE: 'cdm.disaster-recovery-openshift.recovery-plan.registry-recovery-plan.recovery-type.mirror-image',
};

export const OpenShiftDrRuntimeClassFallbackPolicyEnum = <OpenShiftDrRuntimeClassFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.ignore-recovery',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.fallback_policy.using-default',
};

export const OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnum = <OpenShiftDrRuntimeClassRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NOT_SET_RUNTIME_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.not-set-runtime-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_STATE_NOT_FOUND_RUNTIME_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.state.not-found-runtime-class',
};

export const OpenShiftDrRuntimeClassRecoveryTypeCodeEnum = <OpenShiftDrRuntimeClassRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.recovery-type.unused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_RUNTIME_CLASS_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING: 'cdm.disaster-recovery-openshift.recovery-plan.runtime-class-recovery-plan.recovery-type.mapping',
};

export const OpenShiftDrSchedulerFallbackPolicyEnum = <OpenShiftDrSchedulerFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.ignore-recovery',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_FALLBACK_POLICY_USING_DEFAULT: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.fallback_policy.using-default',
};

export const OpenShiftDrSchedulerRecoveryPlanStateCodeEnum = <OpenShiftDrSchedulerRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NOT_SET_SCHEDULER: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.not-set-scheduler',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_STATE_NOT_FOUND_SCHEDULER: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.state.not-found-scheduler',
};

export const OpenShiftDrSchedulerRecoveryTypeCodeEnum = <OpenShiftDrSchedulerRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.recovery-type.unused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SCHEDULER_RECOVERY_PLAN_RECOVERY_TYPE_MAPPING: 'cdm.disaster-recovery-openshift.recovery-plan.scheduler-recovery-plan.recovery-type.mapping',
};

export const OpenShiftDrServiceAccountFallbackPolicyEnum = <OpenShiftDrServiceAccountFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.fallback_policy.ignore-recovery',
};

export const OpenShiftDrServiceAccountRecoveryPlanStateCodeEnum = <OpenShiftDrServiceAccountRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.state.normal',
};

export const OpenShiftDrServiceAccountRecoveryTypeCodeEnum = <OpenShiftDrServiceAccountRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_ACCOUNT_RECOVERY_PLAN_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.service-account-recovery-plan.recovery-type.unused',
};

export const OpenShiftDrServiceFallbackPolicyEnum = <OpenShiftDrServiceFallbackPolicyEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_WARNING: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.fallback_policy.ignore-warning',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_FALLBACK_POLICY_IGNORE_RECOVERY: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.fallback_policy.ignore-recovery',
};

export const OpenShiftDrServiceRecoveryPlanStateCodeEnum = <OpenShiftDrServiceRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.state.normal',
};

export const OpenShiftDrServiceRecoveryTypeCodeEnum = <OpenShiftDrServiceRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.recovery-type.no-action',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_SERVICE_RECOVERY_PLAN_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.service-recovery-plan.recovery-type.update',
};

export const OpenShiftDrVolumeRecoveryPlanStateCodeEnum = <OpenShiftDrVolumeRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_SET_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-set-storage-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_FOUND_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-found-storage-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_SET_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-set-snapshot-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_RECOVERY_PLAN_STATE_NOT_FOUND_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-recovery-plan.state.not-found-snapshot-class',
};

export const OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnum = <OpenShiftDrVolumeSnapshotRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_SET_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-set-snapshot-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_FOUND_SNAPSHOT_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-found-snapshot-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_SET_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-set-storage-class',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_VOLUME_SNAPSHOT_RECOVERY_PLAN_STATE_NOT_FOUND_STORAGE_CLASS: 'cdm.disaster-recovery-openshift.recovery-plan.volume-snapshot-recovery-plan.state.not-found-storage-class',
};

export const OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnum = <OpenShiftDrWorkloadDnsConfigRecoveryTypeCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_UNUSED: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.unused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_NO_ACTION: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.no-action',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_DNS_CONFIG_RECOVERY_TYPE_UPDATE: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.dns-config-recovery-type.update',
};

export const OpenShiftDrWorkloadRecoveryFailedReasonCodeEnum = <OpenShiftDrWorkloadRecoveryFailedReasonCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_FAILED_RECOVERY_JOB_TASK_FAILED: 'cdm-disaster-recovery-openshift.workload-recovery.failed.recovery_job_task_failed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_FAILED_DEPENDENCY_WORKLOAD_NOT_RECOVERED: 'cdm-disaster-recovery-openshift.workload-recovery.failed.dependency_workload_not_recovered',
};

export const OpenShiftDrWorkloadRecoveryPlanStateCodeEnum = <OpenShiftDrWorkloadRecoveryPlanStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_NORMAL: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.normal',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_NOT_SET_DNS_CONFIG_NAMESERVERS: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.not-set-dns-config-nameservers',
  CDM_DISASTER_RECOVERY_OPENSHIFT_RECOVERY_PLAN_WORKLOAD_RECOVERY_PLAN_STATE_INVALID_DNS_CONFIG_NAMESERVERS: 'cdm.disaster-recovery-openshift.recovery-plan.workload-recovery-plan.state.invalid-dns-config-nameservers',
};

export const OpenShiftDrWorkloadRecoveryResultCodeEnum = <OpenShiftDrWorkloadRecoveryResultCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_SUCCEED: 'cdm-disaster-recovery-openshift.workload-recovery.result.succeed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_CANCELED: 'cdm-disaster-recovery-openshift.workload-recovery.result.canceled',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_RESULT_FAILED: 'cdm-disaster-recovery-openshift.workload-recovery.result.failed',
};

export const OpenShiftDrWorkloadRecoveryStateCodeEnum = <OpenShiftDrWorkloadRecoveryStateCodeEnumResolvers>{
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_PENDING: 'cdm.disaster-recovery-openshift.workload-recovery.state.pending',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_BEING_RECOVERED: 'cdm.disaster-recovery-openshift.workload-recovery.state.being-recovered',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_RECOVERED: 'cdm.disaster-recovery-openshift.workload-recovery.state.recovered',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_PAUSED: 'cdm.disaster-recovery-openshift.workload-recovery.state.paused',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_CANCELED: 'cdm.disaster-recovery-openshift.workload-recovery.state.canceled',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_IGNORED: 'cdm.disaster-recovery-openshift.workload-recovery.state.ignored',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_FAILED: 'cdm.disaster-recovery-openshift.workload-recovery.state.failed',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLING_BACK: 'cdm.disaster-recovery-openshift.workload-recovery.state.rolling-back',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLED_BACK: 'cdm.disaster-recovery-openshift.workload-recovery.state.rolled-back',
  CDM_DISASTER_RECOVERY_OPENSHIFT_WORKLOAD_RECOVERY_STATE_ROLLBACK_IGNORED: 'cdm.disaster-recovery-openshift.workload-recovery.state.rollback-ignored',
};

export const ReplicatorImageReplicationStatusStateCodeEnum = <ReplicatorImageReplicationStatusStateCodeEnumResolvers>{
  CDM_REPLICATOR_IMAGE_REPLICATION_STATE_SYNCING: 'cdm.replicator.image-replication.state.syncing',
  CDM_REPLICATOR_IMAGE_REPLICATION_STATE_DONE: 'cdm.replicator.image-replication.state.done',
  CDM_REPLICATOR_IMAGE_REPLICATION_STATE_ERROR: 'cdm.replicator.image-replication.state.error',
};

export const ReplicatorLastPrimarySnapshotStateCodeEnum = <ReplicatorLastPrimarySnapshotStateCodeEnumResolvers>{
  CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_SUCCESS: 'cdm.replicator.latest-snapshot-creation.state.success',
  CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_FAILURE: 'cdm.replicator.latest-snapshot-creation.state.failure',
  CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_NOT_YET: 'cdm.replicator.latest-snapshot-creation.state.not-yet',
  CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_ERROR: 'cdm.replicator.latest-snapshot-creation.state.error',
  CDM_REPLICATOR_LATEST_SNAPSHOT_CREATION_STATE_BEING_CREATED: 'cdm.replicator.latest-snapshot-creation.state.being-created',
};

export const ReplicatorMirroringStatusStateCodeEnum = <ReplicatorMirroringStatusStateCodeEnumResolvers>{
  CDM_REPLICATOR_VOLUME_REPLICATION_STATE_SYNCING: 'cdm.replicator.volume-replication.state.syncing',
  CDM_REPLICATOR_VOLUME_REPLICATION_STATE_MIRRORING: 'cdm.replicator.volume-replication.state.mirroring',
  CDM_REPLICATOR_VOLUME_REPLICATION_STATE_ERROR: 'cdm.replicator.volume-replication.state.error',
};

export const ReplicatorReplicationInfoStatusStateCodeEnum = <ReplicatorReplicationInfoStatusStateCodeEnumResolvers>{
  CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_PREPARING: 'cdm.replicator.openshift.replication-info.state.preparing',
  CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_PREPARATION_FAILED: 'cdm.replicator.openshift.replication-info.state.preparation-failed',
  CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_NORMAL: 'cdm.replicator.openshift.replication-info.state.normal',
  CDM_REPLICATOR_OPENSHIFT_REPLICATION_INFO_STATE_ERROR: 'cdm.replicator.openshift.replication-info.state.error',
};

