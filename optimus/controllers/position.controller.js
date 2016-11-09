
"use strict";

const express = require("express");
const router = express.Router();

const PositionModel = require("../models/position-model.js");

const Result = require("../classes/result.js");

router.post("/getall", (req, res) => {

    let result = new Result();

    try {

        PositionModel.GetAll().then((result) => {

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
        let position = req.body.data;

        PositionModel.FindOneByPositionName(position).then((_result) => {

            if(_result.success) {

                result.success = false;
                result.message = "Position name is already existing.";
                res.send(result);

            } else {

                return PositionModel.Add(position);

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

    } catch (e) {

        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

router.post("/update", (req, res) => {

    try {

        let result = new Result();
        let position = req.body.data;

        PositionModel.FindOneByIdAndPositionName(position).then((result) => {

            if(result.success) {

                PositionModel.UpdateById(position).then((result) => {

                    res.send(result);

                })
                .catch((error) => {

                    res.send(new Result({
                        success: false,
                        message: error.toString()
                    }));

                });

            } else {

                PositionModel.FindOneByPositionName(position).then((result) => {

                    res.send(result);

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

        let position = req.body.data;

        PositionModel.DeleteById(position).then((result) => {

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

module.exports = router;