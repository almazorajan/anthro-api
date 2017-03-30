"use strict";

// express
const express = require("express");
const process = require("process");
const app = express();

// defined middlwares
app.use(require("./middlewares/body-parser.middleware.js").UrlEncodedExtended());
app.use(require("./middlewares/body-parser.middleware.js").Json());
app.use(require("./middlewares/finger-print.middleware.js").FingerPrintConfig());
app.use(require("./middlewares/cors.middleware.js").CorsHeaders);
app.options("*", require("./middlewares/cors.middleware.js").cors());

// routes
app.use("/module", require("./controllers/module.controller.js"));
app.use("/position", require("./controllers/position/controller.js"));
app.use("/user", require("./controllers/user/controller.js"));
app.use("/employmentstatus", require("./controllers/employment-status/controller.js"));
app.use("/company", require("./controllers/company.controller.js"));
app.use("/login", require("./controllers/login.controller.js"));
app.use("/employee", require("./controllers/employee.controller.js"));

// api configurations
const apiConfig = {
    port: process.env.PORT ? process.env.PORT : 8090,
    name: "Optimus"
};

// bootstrap
app.listen(apiConfig.port, () => {
    console.log(apiConfig.name + " is listening to port " + apiConfig.port);
});

