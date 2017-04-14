"use strict";

const Authentication = require("../models/authentication/authentication");
const Result = require("../classes/result");
const ErrorResult = require("../helpers/error.result");

module.exports = {
    ValidateSession: ValidateSession
};

function ValidateSession(req, res, next) {
    try {
        new Authentication({ token: req.headers["x-access-token"], fingerprint: req.fingerprint.hash })
            .ValidateToken()
            .then((result) => result.success ? next() : ErrorResult("invalid token"))
            .catch((error) => ErrorResult(error));
    } catch (e) {
        ErrorResult(e);
    }
}