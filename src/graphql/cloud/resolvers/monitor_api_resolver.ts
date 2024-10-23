// ! NOTE : Deprecated API
export default {
    Query: {
        // 서비스 전역 설정 조회
        // CDM 모니터 서비스 전역 설정을 조회한다.
        // @return CloudGlobalConfigResponse
        GetMonitorGlobalConfig: async (_: any, args: any, context: any) => {
            return {};
        },

        // 노드 상세 조회 (WebSocket 프로토콜 지원)
        // CDM-Cloud 전개된 노드의 상세 정보를 조회한다. 해당 노드의 정보와 상태, 그리고 실행중인 서비스를 반환힌다.
        // @param String nodeId 노드의 ID
        // @param Int interval WebSocket 데이터 수신 간격 (sec)
        // @return CloudNodeResponse
        GetMonitorNode: async (_: any, args: any, context: any) => {
            return {
                nodeId: 'nodeId_example',
                interval: '56',
            };
        },

        // 노드 서비스 목록 조회 (WebSocket 프로토콜 지원)
        // CDM-Cloud 전개된 노드의 현재 동작중인 CDM 서비스의 목록을 조회한다. 각 서비스의 정보와 상태를 반환한다.
        // 이 때 특정 노드에 같은 서비스가 여러 개 실행중인 경우 하나로 통합하여 보여준다.
        // @param String nodeId 노드의 ID
        // @param Int interval WebSocket 데이터 수신 간격 (sec)
        // @return CloudServicesResponse
        GetMonitorNodeServices: async (_: any, args: any, context: any) => {
            return {
                nodeId: 'nodeId_example',
                interval: '56',
            };
        },

        // 노드 목록 조회
        // CDM-Cloud 전개된 노드 목록을 조회한다. 각 노드의 정보와 상태를 반환한다.
        // @return CloudNodesResponse
        GetMonitorNodes: async (_: any, args: any, context: any) => {
            return {};
        },

        // 서비스 상세 조회 (WebSocket 프로토콜 지원)
        // 현재 동작중인 CDM 서비스의 상세 정보를 조회한다. 해당 서비스의 정보와 상태, 그리고 replicas 정보를 반환한다.
        // @param String serviceName 서비스의 이름
        // @param Int interval WebSocket 데이터 수신 간격 (sec)
        // @return CloudServiceResponse
        GetMonitorService: async (_: any, args: any, context: any) => {
            return {
                serviceName: 'serviceName_example',
                interval: '56',
            };
        },

        // 서비스 설정 조회
        // 현재 실행중인 모든 CDM 서비스의 모니터 서비스 설정을 조회한다.
        // @return CloudServiceConfigsResponse
        GetMonitorServiceConfigs: async (_: any, args: any, context: any) => {
            return {};
        },

        // 서비스 로그 조회
        // 현재 동작중인 서비스의 특정 날짜 로그 내용을 조회한다. 해당 서비스의 로그 내용을 반환한다.
        // @param String serviceName 서비스의 이름
        // @param String logDate 서비스 로그 날짜 (YYYYMMDD)
        // @return CloudServiceLogResponse
        GetMonitorServiceLog: async (_: any, args: any, context: any) => {
            return {
                serviceName: 'serviceName_example',
                logDate: 'logDate_example',
            };
        },

        // 서비스 목록 조회
        // 현재 동작중인 CDM 서비스의 목록을 조회한다. 각 서비스의 정보와 상태를 반환한다.
        // @return CloudServicesResponse
        GetMonitorServices: async (_: any, args: any, context: any) => {
            return {};
        },
    },

    Mutation: {
        // 서비스 전역 설정 변경
        // CDM 모니터 서비스 전역 설정을 변경한다.
        // @param CloudGlobalConfigRequest globalConfigRequest
        // @return CloudGlobalConfigResponse
        UpdateMonitorGlobalConfig: async (_: any, args: any, context: any) => {
            return {
                globalConfigRequest: '',
            };
        },

        // 서비스 설정 변경
        // 현재 실행중인 모든 CDM 서비스의 모니터 서비스 설정을 변경한다.
        // @param CloudServiceConfigsRequest serviceConfigsRequest
        // @return CloudServiceConfigsResponse
        UpdateMonitorServiceConfigs: async (_: any, args: any, context: any) => {
            return {
                serviceConfigsRequest: '',
            };
        },
    },
};
