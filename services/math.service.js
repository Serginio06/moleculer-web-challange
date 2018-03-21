"use strict";

module.exports = {
    name: "math",

    actions:{
        add(ctx){
            const res = ctx.params.a + ctx.params.b;
            return "result of sum= " + res ;
        },

    },

    events:{
        "reply.event"(data, sender) {
            this.logger.info(`<< Reply.event received from ${sender}.`);
            // this.broker.emit("reply.event", data);
        }
    },

    // started() {
    //     this.counter = 1;
    //
    //     setTimeout(()=>{
    //         broker.logger.info(`>> Send echo event. Counter: ${this.counter}.`);
    //         broker.emit("echo.event", { counter: this.counter++ });
    //     },2000);
    //
    //
    //     // setInterval(() => {
    //     //     broker.logger.info(`>> Send echo event. Counter: ${this.counter}.`);
    //     //     broker.emit("echo.event", { counter: this.counter++ });
    //     // }, 5000);
    // }
}