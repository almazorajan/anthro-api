"use strict";

const EmploymentStatus = require("../../../models/employment-status/employment-status");
const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");
const Promise = require("bluebird");

module.exports = (req, res) => {
    try {
        let employmentStatus = req.body.data;

        let check1 = Employee.CountByEmploymentStatusId(employmentStatus._id);
        let check2 = Employee.CountByWorkHistoryEmploymentStatusId(employmentStatus._id);

        Promise
            .all([check1, check2])
            .then((res) => {
                if (res[0] <= 0 && res[1] <= 0)
                    return new EmploymentStatus(employmentStatus).DeleteById();

                res.send(ErrorResult("could not delete the record because it is still being used as reference"));
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