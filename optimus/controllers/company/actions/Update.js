"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let result = new Result();
        let company = req.body.data;

        Company
            .FindOneByIdAndCompanyName(company)
            .then((result) => {
                if (result.success) {
                    Company
                        .UpdateById(company)
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                } else {
                    Company
                        .FindOneByCompanyName(company)
                        .then((result) => {
                            if (!result.success)
                                return Company.UpdateById(company); 
                            
                            res.send(new Result({
                                success: false,
                                message: "the company name already exists"
                            }))
                        })
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));;
                }
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};