"use strict";

const express = require("express");
const router = express.Router();
const EndpointIntegrator = require("../../helpers/endpoint.integrator");

router.use(require("../../middlewares/session-validator.middleware").ValidateSession);

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/getall",
    action: require("./actions/GetAll")
});

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/add",
    action: require("./actions/Add")
});

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/update",
    action: require("./actions/Update")
});

EndpointIntegrator(router, {
    request: "delete",
    endpoint: "/delete",
    action: require("./actions/Delete")
});


module.exports = router;