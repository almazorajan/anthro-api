"use strict";

const router = require("express").Router();
const EndpointIntegrator = require("../../helpers/endpoint.integrator");

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/attemptlogin",
    action: require("./actions/AttemptLogin")
});

module.exports = router;