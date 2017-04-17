"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        new Employee(req.body.data)
            .DeleteById(employee)
            .then((result) => res.send(result))
            .catch((e) => res.send(ErrorResult(e)));
    } catch (e) {
        res.send(ErrorResult(e));
    }
};
