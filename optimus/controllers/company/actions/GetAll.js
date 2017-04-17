"use strict";

const Result = require("../../../classes/result");
const Company = require("../../../models/company/company");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        Company
            .GetAll()
            .then((result) => res.send(result))
            .catch((error) => res.send(ErrorResult(error)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};