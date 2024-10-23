import { GraphQLJSONObject } from 'graphql-type-json';
import backupJobApiResolver from './backup_job_api_resolver';
import backupPlanApiResolver from './backup_plan_api_resolver';
import backupResultApiResolver from './backup_result_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        ...backupJobApiResolver.Query,
        ...backupPlanApiResolver.Query,
        ...backupResultApiResolver.Query,
    },

    Mutation: {
        ...backupJobApiResolver.Mutation,
        ...backupPlanApiResolver.Mutation,
        ...backupResultApiResolver.Mutation,
    },
};

export default resolvers;
