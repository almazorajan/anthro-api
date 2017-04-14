"use strict";

const express = require("express");
const router = express.Router();
const EndpointIntegrator = require("../../helpers/endpoint.integrator");

EndpointIntegrator(router, {
    request: "post",
    endpoint: "/attemptlogin",
    action: require("./endpoints/attempt-login.endpoint")
});

module.exports = router;