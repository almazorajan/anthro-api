"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");
const Employee = require("../../../models/employee/employee");

module.exports = (router) => {
    router.post("/delete", (req, res) => {
        try {
            let company = req.body.data;

            Employee.CountByCompanyId(company._id).then((count) => {
                if (count <= 0) {
                    Company.DeleteById(company).then((result) => {
                        res.send(result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Could not delete company because it is still in use"
                    }));
                }
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