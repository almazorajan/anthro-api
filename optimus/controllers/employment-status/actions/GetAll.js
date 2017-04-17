"use strict";

const EmploymentStatus = require("../../../models/employment-status/employment-status");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        EmploymentStatus
            .GetAll()
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};