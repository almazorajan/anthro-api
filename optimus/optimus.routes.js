"use strict";

module.exports = (app) => {
    // routes
    app.use("/module", require("./controllers/module/controller.js"));
    app.use("/position", require("./controllers/position/controller.js"));
    app.use("/user", require("./controllers/user/controller.js"));
    app.use("/employmentstatus", require("./controllers/employment-status/controller.js"));
    app.use("/company", require("./controllers/company/controller.js"));
    app.use("/login", require("./controllers/login/controller.js"));
    app.use("/employee", require("./controllers/employee/controller.js"));
};