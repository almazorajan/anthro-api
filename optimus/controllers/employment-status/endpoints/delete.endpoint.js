"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");
const EmploymentStatus = require("../../../models/employment-status/employment-status");

module.exports = (router) => {
    router.post("/delete", (req, res) => {
        try {
            let employmentStatus = req.body.data;

            let check1 = Employee.CountByEmploymentStatusId(employmentStatus._id);
            let check2 = Employee.CountByWorkHistoryEmploymentStatusId(employmentStatus._id);

            Promise.all([check1, check2]).then((res) => {
                let countEmploymentStatus = res[0];
                let countWorkHistoryEmploymentStatus = res[1];

                if (countEmploymentStatus <= 0 && countWorkHistoryEmploymentStatus <= 0) {
                    EmploymentStatus.DeleteById(employmentStatus).then((result) => {
                        res.send(result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: (e || e.message).toString()
                        }));
                    });
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Could not delete employment status. It is still being used"
                    }));
                }
            }).catch((error) => {
                res.send(new Result({
                    success: false,
                    message: (e || e.message).toString()
                }));
            });
        } catch (e) {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString()
            }));
        }
    });
};