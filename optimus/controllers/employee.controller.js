"use strict";

const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const EmployeeModel = require("../models/employee/employee.model");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

router.post("/add", (req, res) => {
    try {
        let result = new Result();
        let employee = req.body.data;

        EmployeeModel.FindOneByEmployeeNumber(employee).then((_result) => {
            if(_result.success) {
                result.success = false;
                result.message = "The employee number already exists.";
                res.send(result); 
            } else {
                return EmployeeModel.Add(employee);
            }
        })
        .then((_result) => {
            res.send(_result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

module.exports = router;