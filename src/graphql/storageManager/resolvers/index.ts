import { GraphQLJSONObject } from 'graphql-type-json';
import storageApiResolver from './storage_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        ...storageApiResolver.Query,
    },

    Mutation: {
        ...storageApiResolver.Mutation,
    },
};

export default resolvers;
