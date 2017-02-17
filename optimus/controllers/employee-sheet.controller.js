"use strict";

const express = require("express");
const router = express.Router();
const EmployeeModel = require("../models/employee.model.js");
const Result = require("../classes/result.js");

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