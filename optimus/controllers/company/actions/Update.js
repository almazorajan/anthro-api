"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let result = new Result();
        let company = req.body.data;

        Company
            .FindOneByIdAndCompanyName(company._id, company.companyName)
            .then((result) => {
                if (result.success) {
                    new Company(company)
                        .UpdateById()
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                } else {
                    Company
                        .FindOneByCompanyName(company.companyName)
                        .then((result) => {
                            if (!result.success) {
                                return new Company(Company).UpdateById(company); 
                            }
                                
                            res.send(new Result({
                                success: false,
                                message: "the company name already exists"
                            }));
                        })
                        .then((result) => res.send(result))
                        .catch((error) => res.send(ErrorResult(error)));
                }
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};