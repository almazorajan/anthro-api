
"use strict";

const express = require("express");
const router = express.Router();

const EmploymentStatusModel = require("../models/employment-status-model.js");

const Result = require("../classes/result.js");

router.post("/getall", (req, res) => {

    try {

        EmploymentStatusModel.GetAll().then((result) => {

            res.send(result);

        })
        .catch((error) => {

            res.send(error);

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
        let employmentStatus = req.body.data;

        EmploymentStatusModel.FindOneByEmploymentStatus(employmentStatus).then((_result) => {

            if(_result.success) {

                result.success = false;
                result.message = "Record is already existing.";
                res.send(result);

            } else {

                return EmploymentStatusModel.Add(employmentStatus);

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

router.post("/update", (req, res) => {

    try {

        let result = new Result();
        let employmentStatus = req.body.data;

        EmploymentStatusModel.FindOneByIdAndEmploymentStatus(employmentStatus).then((_result) => {

            if(_result.success) {

                EmploymentStatusModel.UpdateById(employmentStatus).then((_result) => {

                    res.send(_result);

                })
                .catch((error) => {
                    
                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));

                });

            } else {

                EmploymentStatusModel.FindOneByEmploymentStatus(employmentStatus).then((_result) => {

                    if(_result.success) {

                        result.success = false;
                        result.message = "Employment status already exists.";
                        res.send(result);

                    } else {

                        EmploymentStatusModel.UpdateById(employmentStatus).then((_result) => {

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

router.post("/delete", (req, res) => {

    try {

        let employmentStatus = req.body.data;

        EmploymentStatusModel.DeleteById(employmentStatus).then((result) => {

            res.send(result);

        })
        .catch((error) => {

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
