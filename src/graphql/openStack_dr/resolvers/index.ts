import { GraphQLJSONObject } from 'graphql-type-json';
// import dashboardApiResolver from './dashboard_api_resolver';
import instanceTemplateApiResolver from './instance_template_api_resolver';
import protectionGroupApiResolver from './protection_group_api_resolver';
import recoveryJobApiResolver from './recovery_job_api_resolver';
import recoveryPlanApiResolver from './recovery_plan_api_resolver';
import recoveryReportApiResover from './recovery_report_api_resolver';
import migrationPlanApiResolver from './migration_plan_api_resolver';
import migrationJobApiResolver from './migration_job_api_resolver';
import migrationReplicationApiResolver from './migration_replication_api_resolver';
import type { Resolvers } from '../__generated__/resolvers-types';
import * as enumResolvers from '../__generated__/enum_resolvers';

const resolvers: Resolvers = {
    ...enumResolvers,

    JSONObject: GraphQLJSONObject,

    Query: {
        // ...dashboardApiResolver.Query,
        ...instanceTemplateApiResolver.Query,
        ...protectionGroupApiResolver.Query,
        ...recoveryJobApiResolver.Query,
        ...recoveryPlanApiResolver.Query,
        ...recoveryReportApiResover.Query,
        ...migrationPlanApiResolver.Query,
        ...migrationReplicationApiResolver.Query,
        ...migrationJobApiResolver.Query,
    },

    Mutation: {
        // ...dashboardApiResolver.Mutation,
        ...instanceTemplateApiResolver.Mutation,
        ...protectionGroupApiResolver.Mutation,
        ...recoveryJobApiResolver.Mutation,
        ...recoveryPlanApiResolver.Mutation,
        ...recoveryReportApiResover.Mutation,
        ...migrationPlanApiResolver.Mutation,
        ...migrationJobApiResolver.Mutation,
        ...migrationReplicationApiResolver.Mutation,
    },
    //     Subscription: {
    //     recoveryJobMonitors: {
    //       subscribe: withFilter(
    //         () => pubsub.asyncIterator('RECOVERY_JOB_MONITORS'),
    //         (payload, variables) => {
    //           return (
    //             payload.groupId === variables.groupId &&
    //             payload.jobId === variables.jobId &&
    //             payload.interval === variables.interval
    //           );
    //         },
    //       ),
    //     },
    //   },
};

export default resolvers;
