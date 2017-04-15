"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");
const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let company = req.body.data;

        Employee
            .CountByCompanyId(company._id)
            .then((count) => {
                if (count <= 0)
                    Company.DeleteById(company);

                res.send(ErrorResult("could not delete company record because it is still being referenced"));
            })
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};