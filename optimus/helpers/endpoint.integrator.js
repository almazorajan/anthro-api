"use strict";

module.exports = EndpointIntegrator;

function EndpointIntegrator(router, config) {
    try {
        router[config.request](config.endpoint, config.action);
    } catch (e) {
        throw e;
    }
};