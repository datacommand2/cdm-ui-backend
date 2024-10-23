import { GraphQLJSONObject } from 'graphql-type-json';
import cmApiResolver from './cluster_management_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        ...cmApiResolver.Query,
    },

    Mutation: {
        ...cmApiResolver.Mutation,
    },
};

export default resolvers;
