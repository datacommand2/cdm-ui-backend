import { GraphQLJSONObject } from 'graphql-type-json';
// ! Deprecated API
// import backupApiResolver from './backup_api_resolver';
// import configApiResolver from './config_api_resolver';
// import tenantApiResolver from './tenant_api_resolver';
// import monitorApiResolver from './monitor_api_resolver';

import identityApiResolver from './identity_api_resolver';
import licenseApiResolver from './license_api_resolver';
import notificationApiResolver from './notification_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        // ...backupApiResolver.Query,
        // ...configApiResolver.Query,
        ...identityApiResolver.Query,
        ...licenseApiResolver.Query,
        // ...monitorApiResolver.Query,
        ...notificationApiResolver.Query,
        // ...tenantApiResolver.Query,
    },

    Mutation: {
        // ...backupApiResolver.Mutation,
        // ...configApiResolver.Mutation,
        ...identityApiResolver.Mutation,
        ...licenseApiResolver.Mutation,
        // ...monitorApiResolver.Mutation,
        // ...notificationApiResolver.Mutation,
        // ...tenantApiResolver.Mutation,
    },
};
export default resolvers;
