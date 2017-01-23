"use strict";

// module declarations
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// npm middlewares
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// defined middlwares
app.use(require("./middlewares/cors.middleware.js").cors);

// routes
app.use("/module", require("./controllers/module.controller.js"));
app.use("/position", require("./controllers/position.controller.js"));
app.use("/user", require("./controllers/user.controller.js"));
app.use("/employmentstatus", require("./controllers/employment-status.controller.js"));
app.use("/company", require("./controllers/company.controller.js"));
app.use("/login", require("./controllers/login.controller.js"));
app.use("/employeesheet", require("./controllers/employee-sheet.controller.js"));
app.use("/employeelist", require("./controllers/employee-list.controller.js"));

// api configurations
const apiConfig = {
    port: 8090,
    name: "Optimus"
};

// bootstrap
app.listen(apiConfig.port, () => {
    console.log(apiConfig.name + " is listening to port " + apiConfig.port);
});

