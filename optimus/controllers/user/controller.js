"use strict";

const express = require("express");
const router = express.Router();
const EndpointIntegrator = require("../../helpers/endpoint.integrator");

router.use(require("../../middlewares/session-validator.middleware").ValidateSession);

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/getall",
    action: require("./actions/get-all.action")
});

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/add",
    action: require("./actions/add.action")
});

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/update",
    action: require("./actions/update.action")
});

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/updatepassword",
    action: require("./actions/update-password.action")
});

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/delete",
    action: require("./actions/delete.action")
});

module.exports = router;