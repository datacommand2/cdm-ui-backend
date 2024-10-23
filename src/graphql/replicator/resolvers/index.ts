import { GraphQLJSONObject } from 'graphql-type-json';
import containerControllerApiResolver from './container_controller_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        ...containerControllerApiResolver.Query,
    },

    Mutation: {
        ...containerControllerApiResolver.Mutation,
    },
};

export default resolvers;
