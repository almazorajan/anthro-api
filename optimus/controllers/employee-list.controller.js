"use strict";

const express = require("express");
const EmployeeModel = require("../models/employee.model.js");
const Result = require("../classes/result.js");
const router = express.Router();

router.post("/getall", (req, res) => {
    try {
        EmployeeModel.GetAll().then((result) => {
            res.send(result);
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

router.post("/update", (req, res) => {
    try {
        let result = new Result();
        let employee = req.body.data;
        
        EmployeeModel.FindOneByEmployeeNumber(employee).then((_result) => {
            if(_result.success) {
                EmployeeModel.UpdateById(employee).then((_result) => {
                    res.send(_result);
                })
                .catch((e) => {
                    res.send(new Result({
                        success: false,
                        message: (e || e.message).toString()
                    }));
                });
            } else {
                result.success = false;
                result.message = "Employee number does not exist.";
                res.send(result);
            }
        })
        .catch((e) => {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/delete", (req, res) => {
    try {
        let employee = req.body.data;

        EmployeeModel.DeleteById(employee).then((result) => {
            res.send(result);
        })
        .catch((e) => {
            res.send(new Result({
                success: false,
                message: (e || e.message).toString()
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