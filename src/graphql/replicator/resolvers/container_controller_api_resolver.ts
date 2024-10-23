import { requestApi } from '../../../utils/api';

export default {
    Query: {
        // 보호그룹 스냅샷 목록 조회
        // @param String replicationInfoName ReplicationInfo CR 의 Name
        // @return ReplicatorPrimarySnapshotResponse
        GetPrimarySnapshots: async (_: any, args: any, context: any) => {
            const result = await requestApi({
                context,
                originalUrl: `/replicator/openshift/${args.replicationInfoName}/snapshots`,
                method: 'GET',
            });

            return {
                primary_snapshots: result?.data?.primary_snapshots ?? [],
            };
        },
    },

    Mutation: {},
};
