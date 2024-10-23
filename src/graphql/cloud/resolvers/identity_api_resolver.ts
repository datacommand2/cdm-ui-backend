import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 사용자 인증 설정 조회
        // @return CloudIdentityConfigResponse
        GetIdentityConfig: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/config`,
                method: 'GET',
            });

            return {
                identity_config: result?.data.identity_config,
            };
        },

        // 사용자 서비스 설정 조회
        // 서비스 설정들을 조회한다.
        // @param String name 서비스 이름
        // @param String key 서비스 설정 항목
        // @return CloudServiceConfigsResponse
        GetIdentityServiceConfigs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/service-config`,
                method: 'GET',
                params: {
                    name: args.name ?? undefined,
                    key: args.key ?? undefined,
                },
            });

            return {
                service_configs: result?.data.service_configs,
            };
        },

        // 솔루션 역할 목록 조회
        // 솔루션의 역할 목록을 조회한다.
        // @param String solution 솔루션 이름
        // @param String role 역할 이름
        // @return CloudRolesResponse
        GetRoles: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/roles`,
                method: 'GET',
                params: {
                    solution: args.solution ?? undefined,
                    role: args.role ?? undefined,
                },
            });

            return {
                roles: result?.data.roles,
            };
        },

        // 사용자 계정 상세 조회
        // 사용자 계정 조회를 요청한다. 요청 성공 시, 응답은 JSON 객체로 전달되며 사용자 정보를 포함한다.
        // @param Int userId 사용자 ID
        // @return CloudUserResponse
        GetUser: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users/${args.userId}`,
                method: 'GET',
            });

            return {
                user: result?.data.user,
            };
        },

        // ! NOTE : Deprecated API
        // // 사용자 그룹 상세 조회
        // // @param Int groupId 사용자 그룹 ID
        // // @return CloudUserGroupResponse
        // GetUserGroup: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //     };
        // },

        // 사용자 그룹 목록 조회
        // @param String name 사용자 그룹 이름
        // @return CloudUserGroupsResponse
        GetUserGroups: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/groups`,
                method: 'GET',
            });

            return {
                groups: result?.data?.groups ?? [],
            };
        },

        // 사용자 계정 목록 조회
        // @param Int limit 한 페이지에 표시할 항목 개수
        // @param Int offset 페이지에 표시할 항목 인덱스
        // @param String solution 솔루션 이름
        // @param String role 역할 이름
        // @param Int groupId 사용자 그룹 ID
        // @param Int excludeGroupId 제외할 사용자 그룹 ID
        // @param String name 사용자 이름
        // @param String department 사용자 부서
        // @param String position 사용자 직책
        // @param Boolean loginOnly 로그인 된 사용자만 조회
        // @return CloudUsersResponse
        GetUsers: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users`,
                method: 'GET',
                params: {
                    limit: args.limit ?? undefined,
                    offset: args.offset ?? undefined,
                    solution: args.solution ?? undefined,
                    role: args.role ?? undefined,
                    group_id: args.groupId ?? undefined,
                    exclude_group_id: args.excludeGroupId ?? undefined,
                    name: args.name ?? undefined,
                    department: args.department ?? undefined,
                    position: args.position ?? undefined,
                    login_only: args.loginOnly ?? undefined,
                },
            });

            return {
                users: result?.data?.users ?? [],
                pagination: result?.data.pagination,
            };
        },

        // 세션 유효성 확인
        // @param String xAuthenticatedSession 세션 키
        // @return CloudUserResponse
        VerifySession: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/sessions/check`,
                method: 'GET',
            });

            return {
                user: result?.data?.user,
            };
        },
    },

    Mutation: {
        // TODO: Mutation
        // 사용자 계정 추가
        // 사용자 계정을 추가한다. 요청 성공 시, 응답은 JSON 객체로 전달되며 수정된 사용자 정보 및 임의로 생성된 암호를 포함한다.
        // @param CloudUserRequest cloudUserRequest
        // @return CloudNewUserResponse
        CreateUser: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users`,
                method: 'POST',
                data: args.input.cloudUserRequest,
            });

            return {
                user: result?.data.user,
                password: result?.data?.password,
            };
        },
        // // 사용자 그룹 추가
        // // @param CloudNewUserGroupRequest newUserGroupRequest
        // // @return CloudUserGroupResponse
        // CreateUserGroup: async (_: any, args: any, context: any) => {
        //     return {
        //         newUserGroupRequest: '',
        //     };
        // },
        // 사용자 서비스 설정 초기화
        // @param CloudServiceConfigsRequest cloudServiceConfigsRequest
        // @return Boolean
        DeleteIdentityServiceConfigs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/service-config`,
                method: 'POST',
                data: {
                    service_config: args.input.cloudServiceConfigsRequest.service_configs,
                },
            });
            return Boolean(result?.data);
        },
        // 사용자 계정 삭제
        // @param Int userId 사용자 ID
        // @return Boolean
        DeleteUser: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users/${args.input.userId}`,
                method: 'DELETE',
            });
            return Boolean(result?.data);
        },
        // // 사용자 그룹 삭제
        // // @param Int groupId 사용자 그룹 ID
        // // @return Boolean
        // DeleteUserGroup: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //     };
        // },

        // 로그인
        // @param CloudAuthRequest cloudAuthRequest
        // @return CloudUserResponse
        LoginUser: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/auth`,
                method: 'POST',
                data: args.input.cloudAuthRequest,
            });

            return {
                user: result?.data.user,
            };
        },

        // 로그아웃
        // @param String xAuthenticatedSession 세션 키
        // @return Boolean
        LogoutUser: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/auth`,
                method: 'DELETE',
            });
            return Boolean(result?.data);
        },
        // 사용자 계정 비밀번호 초기화
        // @param Int userId 사용자 ID
        // @return CloudUserPasswordResponse
        ResetUserPassword: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users/${args.input.userId}/password-reset`,
                method: 'POST',
                data: {
                    user_id: args.input.userId,
                },
            });

            return {
                password: result?.data.password,
            };
        },

        // 접속중인 사용자 강제 로그아웃
        // @param String sessionKey 사용자 세션 키
        // @return Boolean
        RevokeSession: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/sessions/${args.input.sessionKey}`,
                method: 'DELETE',
            });

            return Boolean(result?.data);
        },

        // 사용자 인증 설정 변경
        // @param CloudIdentityConfigRequest cloudIdentityConfigRequest
        // @return CloudIdentityConfigResponse
        UpdateIdentityConfig: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/config`,
                method: 'PUT',
                data: args.input.cloudIdentityConfigRequest,
            });
            return {
                identity_config: result?.data.identity_config,
            };
        },

        // 사용자 서비스 설정들을 변경
        // @param CloudServiceConfigsRequest cloudServiceConfigsRequest
        // @return Boolean
        UpdateIdentityServiceConfigs: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/service-config`,
                method: 'PUT',
                data: {
                    service_config: args.input.cloudServiceConfigsRequest.service_configs,
                },
            });
            return Boolean(result?.data);
        },

        // 사용자 계정 수정
        // 사용자 계정을 수정한다. 요청 성공 시, 응답은 JSON 객체로 전달되며 수정된 사용자 정보를 포함한다.
        // @param Int userId 사용자 ID
        // @param CloudUserRequest cloudUserRequest
        // @return CloudUserResponse
        UpdateUser: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users/${args.input.userId}`,
                method: 'PATCH',
                data: args.input.cloudUserRequest,
            });

            return {
                user: result?.data.user,
            };
        },
        // // 사용자 그룹 수정
        // // @param Int groupId 사용자 그룹 ID
        // // @param CloudUserGroupRequest userGroupRequest
        // // @return CloudUserGroupResponse
        // UpdateUserGroup: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //         userGroupRequest: '',
        //     };
        // },
        // // 사용자 그룹 사용자 목록 수정
        // // 사용자 그룹에 사용자 목록을 수정하며, 수정 시 해당 그룹의 기존 사용자 목록은 수정할 사용자 목록들로 덮어 쓰여진다.
        // // @param Int groupId 사용자 그룹 ID
        // // @param CloudGroupUsersRequest groupUsersRequest
        // // @return CloudGroupUsersResponse
        // UpdateUserGroupUsers: async (_: any, args: any, context: any) => {
        //     return {
        //         groupId: '56',
        //         groupUsersRequest: '',
        //     };
        // },

        // 사용자 계정 비밀번호 변경
        // @param Int userId 사용자 ID
        // @param CloudUserPasswordRequest cloudUserPasswordRequest
        // @return Boolean
        UpdateUserPassword: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/identity/users/${args.input.userId}/password`,
                method: 'POST',
                data: args.input.cloudUserPasswordRequest,
            });

            return Boolean(result?.data);
        },
    },
};
