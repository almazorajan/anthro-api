"use strict";

const Result = require("../../../classes/result");
const EmploymentStatus = require("../../../models/employment-status/employment-status");

module.exports = (router) => {
    router.post("/add", (req, res) => {
        try {
            let result = new Result();
            let employmentStatus = req.body.data;

            EmploymentStatus.FindOneByEmploymentStatus(employmentStatus).then((_result) => {
                if (_result.success) {
                    result.success = false;
                    result.message = "Record is already existing.";
                    res.send(result);
                } else {
                    return EmploymentStatus.Add(employmentStatus);
                }
            }).then((_result) => {
                res.send(_result);
            }).catch((error) => {
                res.send(new Result({
                    success: false,
                    message: error.toString()
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