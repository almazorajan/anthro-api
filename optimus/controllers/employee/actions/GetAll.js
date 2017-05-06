"use strict";

const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        Employee
            .GetAll()
            .then((result) => { 
                res.send(result);
            })
            .catch((e) => {
                res.send(ErrorResult(e));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};
