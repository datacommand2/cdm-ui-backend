import path from 'path';
import { json } from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import gql from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@apollo/server/express4';

import backupResolvers from '../graphql/backup/resolvers';
import cloudResolvers from '../graphql/cloud/resolvers';
import openShiftCMResolvers from '../graphql/openShift_cm/resolvers';
import openStackCMResolvers from '../graphql/openStack_cm/resolvers';
import openShiftDRResolvers from '../graphql/openShift_dr/resolvers';
import openStackDRResolvers from '../graphql/openStack_dr/resolvers';
import replicatorResolvers from '../graphql/replicator/resolvers';
import storageManagerResolvers from '../graphql/storageManager/resolvers';

const graphQLConfigs = [
    {
        gqlHomePath: 'src/graphql/backup/',
        resolvers: backupResolvers,
        endPoint: '/graphql/backup',
    },
    {
        gqlHomePath: 'src/graphql/cloud/',
        resolvers: cloudResolvers,
        endPoint: '/graphql/cloud',
    },
    {
        gqlHomePath: 'src/graphql/openShift_cm/',
        resolvers: openShiftCMResolvers,
        endPoint: '/graphql/openShift_cm',
    },
    {
        gqlHomePath: 'src/graphql/openShift_dr/',
        resolvers: openShiftDRResolvers,
        endPoint: '/graphql/openShift_dr',
    },
    {
        gqlHomePath: 'src/graphql/openStack_cm/',
        resolvers: openStackCMResolvers,
        endPoint: '/graphql/openStack_cm',
    },
    {
        gqlHomePath: 'src/graphql/openStack_dr/',
        resolvers: openStackDRResolvers,
        endPoint: '/graphql/openStack_dr',
    },
    {
        gqlHomePath: 'src/graphql/replicator/',
        resolvers: replicatorResolvers,
        endPoint: '/graphql/replicator',
    },
    {
        gqlHomePath: 'src/graphql/storageManager/',
        resolvers: storageManagerResolvers,
        endPoint: '/graphql/storageManager',
    },
];

//
// load graphql schema and create an ApolloServer
//
export const createApolloServer = async ({
    server,
    corsOptions,
    app,
    gqlHomePath,
    resolvers,
    endPoint,
}: {
    server: any;
    corsOptions: any;
    app: any;
    gqlHomePath: string;
    resolvers: any;
    endPoint: string;
}) => {
    const absGqlHomePath = path.resolve(process.cwd(), gqlHomePath);
    const typeDefs = gql(readFileSync(path.resolve(absGqlHomePath, 'schemas.graphql'), { encoding: 'utf-8' }));
    // load a schema
    const schema = buildSubgraphSchema({ typeDefs, resolvers });

    // create an ApolloServer
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginInlineTrace(), ApolloServerPluginDrainHttpServer({ httpServer: server })],
        // intercept errors and format them
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formatError: (formattedError, error) => {
            console.groupCollapsed('[GraphQL ERROR]');
            console.error('error = ', error);
            console.groupEnd();
            // we can format the error here
            // but now we just return the default formattedError
            return formattedError;
        },
    });

    await apolloServer.start();

    app.use(
        endPoint,
        cors<cors.CorsRequest>(corsOptions),
        json(),
        expressMiddleware(apolloServer, {
            context: async ({ req }) => ({ req }),
        }),
    );

    return apolloServer;
};

// create ApolloServers
export const createApolloServers = async ({
    server,
    corsOptions,
    app,
}: {
    server: any;
    corsOptions: any;
    app: any;
}) => {
    return await Promise.all(
        graphQLConfigs.map(
            async config =>
                await createApolloServer({
                    server,
                    corsOptions,
                    app,
                    gqlHomePath: config.gqlHomePath,
                    resolvers: config.resolvers,
                    endPoint: config.endPoint,
                }),
        ),
    );
};
