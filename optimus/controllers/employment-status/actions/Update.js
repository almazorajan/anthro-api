"use strict";

const EmploymentStatus = require("../../../models/employment-status/employment-status");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let employmentStatus = req.body.data;

        EmploymentStatus
            .FindOneByIdAndEmploymentStatus(employmentStatus._id, employmentStatus.employmentStatus)
            .then((result) => {
                if (result.success) {
                    return new EmploymentStatus(employmentStatus).UpdateById(employmentStatus);
                }
                return EmploymentStatus
                    .FindOneByEmploymentStatus(employmentStatus)
                    .then((result) => {
                        if (!result.success) {
                            return new EmploymentStatus(employmentStatus).UpdateById(employmentStatus); 
                        } 
                        res.send(ErrorResult("the employment status already exists"));
                    });
            })
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.send(ErrorResult(error));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};