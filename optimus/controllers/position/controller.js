"use strict";

const router = require("express").Router();
const EndpointIntegrator = require("../../helpers/endpoint.integrator");

require("./middleware")(router);

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
    request: "post",
    endpoint: "/delete",
    action: require("./actions/Delete")
});

module.exports = router;