import {
  CloudLanguageSetEnumResolvers,
  CloudRoleEnumResolvers,
  OpenShiftCmClusterNodeAddressTypeEnumResolvers,
  OpenShiftCmClusterResourceServiceTypeEnumResolvers,
  OpenShiftCmClusterResourceVolumeTypeEnumResolvers,
  OpenShiftCmClusterStateCodeEnumResolvers,
  OpenShiftCmClusterSyncStateCodeEnumResolvers,
  OpenShiftCmClusterTypeCodeEnumResolvers,
  OpenShiftCmProtectionGroupTargetEnumResolvers,
  OpenShiftCmRecoveryPointObjectiveTypeEnumResolvers,
  OpenShiftCmStatusManagerStateCodeEnumResolvers,
} from './resolvers-types';

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

export const OpenShiftCmClusterNodeAddressTypeEnum = <OpenShiftCmClusterNodeAddressTypeEnumResolvers>{
  HOSTNAME: 'Hostname',
  INTERNALIP: 'InternalIP',
  EXTERNALIP: 'ExternalIP',
  INTERNALDNS: 'InternalDNS',
  EXTERNALDNS: 'ExternalDNS',
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

export const OpenShiftCmProtectionGroupTargetEnum = <OpenShiftCmProtectionGroupTargetEnumResolvers>{
  CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_CLUSTER_WORKLOAD: 'cdm.cm-openshift.protection-group.target.cluster-workload',
  CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_NAMESPACE_WORKLOADS: 'cdm.cm-openshift.protection-group.target.namespace-workloads',
  CDM_CM_OPENSHIFT_PROTECTION_GROUP_TARGET_ANY_WORKLOADS: 'cdm.cm-openshift.protection-group.target.any-workloads',
};

export const OpenShiftCmRecoveryPointObjectiveTypeEnum = <OpenShiftCmRecoveryPointObjectiveTypeEnumResolvers>{
  RECOVERY_POINT_OBJECTIVE_TYPE_MINUTE: 'recovery.point.objective.type.minute',
  RECOVERY_POINT_OBJECTIVE_TYPE_HOUR: 'recovery.point.objective.type.hour',
  RECOVERY_POINT_OBJECTIVE_TYPE_DAY: 'recovery.point.objective.type.day',
};

export const OpenShiftCmStatusManagerStateCodeEnum = <OpenShiftCmStatusManagerStateCodeEnumResolvers>{
  CDM_SM_OPENSHIFT_STATE_ACTIVE: 'cdm.sm-openshift.state.active',
  CDM_SM_OPENSHIFT_STATE_UNKNOWN: 'cdm.sm-openshift.state.unknown',
  CDM_SM_OPENSHIFT_CONNECTION_FAILED: 'cdm.sm-openshift.connection_failed',
  CDM_SM_OPENSHIFT_STATE_NOT_INSTALLED: 'cdm.sm-openshift.state.not_installed',
  CDM_SM_OPENSHIFT_STATE_NO_CONNECTION_INFO: 'cdm.sm-openshift.state.no_connection_info',
  CDM_SM_OPENSHIFT_STATE_WARNING: 'cdm.sm-openshift.state.warning',
};

