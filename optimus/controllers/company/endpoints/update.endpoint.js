"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            let result = new Result();
            let company = req.body.data;

            Company.FindOneByIdAndCompanyName(company).then((_result) => {
                if (_result.success) {
                    Company.UpdateById(company).then((_result) => {
                        res.send(_result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                } else {
                    Company.FindOneByCompanyName(company).then((_result) => {
                        if (_result.success) {
                            result.success = false;
                            result.message = "Company name already exists.";
                            result.data = _result.data;
                        } else {
                            Company.UpdateById(company).then((_result) => {
                                res.send(_result);
                            }).catch((error) => {
                                res.send(new Result({
                                    success: false,
                                    message: error.toString()
                                }));
                            });
                        }
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                }
            });
        } catch (e) {
            res.send(new Result({
                success: false,
                message: (e || e.message)
            }));
        }
    });
};