import {
    authMiddleware,
    cacheMiddleware,
    errorMiddleware,
    loggerMiddleware,
    perfMiddleware,
    RelayNetworkLayer,
    retryMiddleware,
    urlMiddleware,
} from "react-relay-network-modern";

import { retryDelayInMillisecondsForAttemptNumber } from "./exponentialBackoff";

const network = new RelayNetworkLayer([
    urlMiddleware({
        url: async () =>
            `https://restaurants-graphql.k8s.public.aws.purplesquid.scot/`,
    }),
    authMiddleware(),
    loggerMiddleware(),
    perfMiddleware(),
    errorMiddleware(),
    retryMiddleware({
        fetchTimeout: 20000, // 20 seconds for a single request to time out
        retryDelays: retryDelayInMillisecondsForAttemptNumber, // exponential back-off with termination
    }),
    cacheMiddleware({
        ttl: 1000 * 10, // 10 seconds
    }),
]);
export default network;
