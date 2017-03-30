"use strict";

const Result = require("../../../classes/result");
const EmploymentStatus = require("../../../models/employment-status/employment-status");

module.exports = (router) => {
    router.post("/getall", (req, res) => {
        try {
            EmploymentStatus.GetAll().then((result) => {
                res.send(result);
            }).catch((error) => {
                res.send(error);
            });
        } catch (e) {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString()
            }));
        }
    });
};
