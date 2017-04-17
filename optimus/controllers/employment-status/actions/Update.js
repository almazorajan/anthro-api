"use strict";

const Result = require("../../../classes/result");
const EmploymentStatus = require("../../../models/employment-status/employment-status");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let employmentStatus = req.body.data;

        EmploymentStatus
            .FindOneByIdAndEmploymentStatus(employmentStatus)
            .then((result) => {
                if (result.success) {
                    EmploymentStatus
                        .UpdateById(employmentStatus)
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                } else {
                    EmploymentStatus
                        .FindOneByEmploymentStatus(employmentStatus)
                        .then((result) => {
                            if (!result.success)
                                return EmploymentStatus.UpdateById(employmentStatus);  
                            
                            res.send(ErrorResult("the employment status already exists"));
                        })
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                }
            })
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};