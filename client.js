"use strict";

// let ServiceBroker = require ("moleculer");
// const _ = require ("lodash");
const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    namespace:"testM",
    nodeID:"Client-node",
    transporter: "nats://localhost:4222",
    // transporter: {
    //     type: "TCP",
    //     options: {
    //         udpDiscovery: false,
    //         urls: [
    //             "0.0.0.1:6000/node-1",
    //             "0.0.0.2:6000/node-2",
    //             "0.0.0.3:6000/node-3"
    //         ],
    //     },
    // },

    circuitBreaker: {
        enabled: false,
        maxFailures: 3
    },

    logger: console,
    logLevel: "info",
    logFormatter: "simple",

    hotReload: true
});

broker.createService({
    name: "client-service",

    actions:{
        add(ctx){
            return ctx.params.a + ctx.params.b;
        }

    },

    events:{
        "reply.event"(data, sender) {
            this.logger.info(`<< Reply.event received from ${sender}.`);
            // this.broker.emit("reply.event", data);
        }
    },

    started() {
        this.counter = 1;

        setTimeout(()=>{
            broker.logger.info(`>> Send echo event. Counter: ${this.counter}.`);
            broker.emit("echo.event", { counter: this.counter++ });
        },2000);


        // setInterval(() => {
        //     broker.logger.info(`>> Send echo event. Counter: ${this.counter}.`);
        //     broker.emit("echo.event", { counter: this.counter++ });
        // }, 5000);
    }
});

broker.start()
    .then(() => broker.repl());


// broker.loadService(__dirname + "/services/app.service.js");

// broker.call("service1.add",{a:5,b:3}).then(res=>{
//     broker.logger.info('service add returned=',res);
// }).catch(err=>{
//     broker.logger.error('error in service1.add =',err);
// });

// broker.createService({
// module.exports = {
//     name:'service1',
//     actions:{
//         add(ctx){
//             broker.logger.info("add fired");
//             return ctx.params.a + ctx.params.b;
//         },
//         sub(ctx){
//             broker.logger.info("sub fired");
//             return ctx.params.a - ctx.params.b;
//         }
//     },
//
//     created() {
//         console.log("service1 created=");
//         // this.server = http.createServer(this.httpHandler);
//     },
//
//     started(){
//         console.log("service1 started=");
//     }
// };

// broker.start();
//
// let sumResult = broker.call("service1.add",{a:5,b:3});
// console.log("sumResult=",sumResult);
// //
// broker.logger.info(`sumResult=${sumResult}`);
