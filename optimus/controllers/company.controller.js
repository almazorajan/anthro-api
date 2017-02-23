"use strict";

const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const EmployeeModel = require("../models/employee/employee.model");
const CompanyModel = require("../models/company/company.model");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

router.post("/getall", (req, res) => {
    try {
        CompanyModel.GetAll().then((result) => {
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

router.post("/add", (req, res) => {
    try {
        let result = new Result();
        let company = req.body.data;

        CompanyModel.FindOneByCompanyName(company).then((_result) => {
            if(_result.success) {
                result.success = false;
                result.message = "The company name already exists.";
                res.send(result);                
            } else {
                return CompanyModel.Add(company);
            }
        })
        .then((result) => {
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
        let company = req.body.data;

        CompanyModel.FindOneByIdAndCompanyName(company).then((_result) => {
            if(_result.success) {
                CompanyModel.UpdateById(company).then((_result) => {
                    res.send(_result);
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            } else {
                CompanyModel.FindOneByCompanyName(company).then((_result) => {
                    if(_result.success) {
                        result.success = false;
                        result.message = "Company name already exists.";
                        result.data = _result.data;
                    } else {
                        CompanyModel.UpdateById(company).then((_result) => {
                            res.send(_result);
                        })
                        .catch((error) => {
                            res.send(new Result({
                                success: false,
                                message: error.toString()
                            }));
                        });
                    }
                })
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            }
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message)
        }));        
    }
});

router.post("/delete", (req, res) => {
    try {
        let company = req.body.data;

        EmployeeModel.CountByCompanyId(company._id).then((count) => {
            if(count <= 0) {
                CompanyModel.DeleteById(company).then((result) => {
                    res.send(result);
                })  
                .catch((error) => {
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));
                });
            } else {
                res.send(new Result({
                    success: false,
                    message: "Could not delete company because it is still in use"
                }));
            }
        })
        .catch((error) => {

        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

module.exports = router;