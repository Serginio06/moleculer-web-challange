// "use strict";
// const cookieParser = require("cookie-parser");
//
// // const ApiGateway = require("moleculer-web");
//
// module.exports = {
//     name: "api",
//     // mixins: [ApiGateway],
//
//     use:[
//         cookieParser()
//     ],
//
//
//     // More info about settings: http://moleculer.services/docs/moleculer-web.html
//     settings: {
//         port: process.env.PORT || 3001,
//
//         // Serve assets from "public" folder
//         // assets: {
//         //     folder: "public"
//         // },
//
//         routes: [
//             {
//             path: "/api",
//
//
//             whitelist: [
//                 // Access to any actions in all services under "/api" URL
//                 "greeter"
//             ],
//
//         },
//
//         ],
//
//
//
//         onError(req, res, err) {
//             console.log("err=", err.message);
//             res.setHeader("Content-Type", "text/plain");
//             res.writeHead(501);
//             res.end("Global error: " + err.message);
//         }
//
//     },
//
//     dependencies:["math","greeter"]
// };
//
//
