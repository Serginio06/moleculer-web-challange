module.exports = {
    namespace:"testM",
    nodeID:"Servere-node",

    transporter: "nats://localhost:4222",

    logger: console,
    logLevel: "info",
    logFormatter: "simple",

    requestTimeout: 5 * 1000,

    circuitBreaker: {
        enabled: true
    },

    metrics: true,
    statistics: true
};