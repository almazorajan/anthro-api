"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");

module.exports = (router) => {
    router.post("/getall", (req, res) => {
        try {
            Company.GetAll().then((result) => {
                res.send(result);
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