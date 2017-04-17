"use strict";

const Result = require("../../../classes/result");
const EmploymentStatus = require("../../../models/employment-status/employment-status");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let result = new Result();
        let employmentStatus = req.body.data;

        EmploymentStatus
            .FindOneByEmploymentStatus(employmentStatus.employmentStatus)
            .then((result) => {
                if (!result.success)
                    return new EmploymentStatus(employmentStatus).Add();
                
                res.send(ErrorResult("the employment status already exists"));
            })
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};