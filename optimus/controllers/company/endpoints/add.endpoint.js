"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");

module.exports = (router) => {
    router.post("/add", (req, res) => {
        try {
            let result = new Result();
            let company = req.body.data;
            delete company._id;

            Company.FindOneByCompanyName(company).then((_result) => {
                if (_result.success) {
                    result.success = false;
                    result.message = "The company name already exists.";
                    res.send(result);
                } else {
                    return Company.Add(company);
                }
            }).then((result) => {
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