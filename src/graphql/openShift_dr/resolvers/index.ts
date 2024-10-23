import { GraphQLJSONObject } from 'graphql-type-json';
import drJobApiResolver from './disaster_recovery_job_api_resolver';
import drPlanApiResolver from './disaster_recovery_plan_api_resolver';
import drResultApiResolver from './disaster_recovery_result_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        ...drJobApiResolver.Query,
        ...drPlanApiResolver.Query,
        ...drResultApiResolver.Query,
    },

    Mutation: {
        ...drJobApiResolver.Mutation,
        ...drPlanApiResolver.Mutation,
        ...drResultApiResolver.Mutation,
    },
};

export default resolvers;
