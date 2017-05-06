"use strict";

const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let employee = req.body.data;

        new Employee(employee)
            .DeleteById(employee)
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
