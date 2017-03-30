"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");

module.exports = (router) => {
    router.post("/delete", (req, res) => {
        try {
            let employee = req.body.data;

            Employee.DeleteById(employee).then((result) => {
                res.send(result);
            }).catch((e) => {
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
