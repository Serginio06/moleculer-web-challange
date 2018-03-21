"use strict";
const cookieParser = require("cookie-parser");

const ApiGateway = require("moleculer-web");

module.exports = {
    name: "aaaa",
    mixins: [ApiGateway],

    // Global middlewares. Applied to all routes.
    use:[
        cookieParser()
    ],


    // More info about settings: http://moleculer.services/docs/moleculer-web.html
    settings: {
        port: process.env.PORT || 3001,

        // Serve assets from "public" folder
        assets: {
            folder: "public"
        },

        routes: [
            {
                path: "/main",

                onBeforeCall(ctx, route, req, res) {

                    console.log("onBeforeCall fired=");

                    // Set request headers to context meta
                    ctx.meta.userAgent = req.headers["user-agent"];
                },

                whitelist: [
                    // Access to any actions in all services under "/main" URL
                    "greeter.*"
                ],

            },
            {
                path: "/api",


                whitelist: [
                    // Access to any actions in all services under "/api" URL
                    "math.*"
                ],

            },
            // {
            //     path: "/",
            //
            //     myFunc(req,res,next){
            //
            //         console.log("'req=",req);
            //     }
            //
            //     onBeforeCall(ctx, route, req, res) {
            //         // Set request headers to context meta
            //         ctx.meta.userAgent = req.headers["user-agent"];
            //     },
            //     //
            //     // onAfterCall(ctx, route, req, res, data) {
            //     //     res.render("index.js");
            //     //     // Async function which return with Promise
            //     //     // return doSomething(ctx, res, data);
            //     // }
            // }

        ],



        onError(req, res, err) {
            console.log("err=", err.message);
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(501);
            res.end("Global error: " + err.message);
        }

    },

    dependencies:["math","greeter"]
};


