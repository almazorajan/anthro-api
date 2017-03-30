"use strict";

const Result = require("../../../classes/result");
const Position = require("../../../models/position/position");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            let result = new Result();
            let position = req.body.data;

            Position.FindOneByIdAndPositionName(position).then((_result) => {
                if (_result.success) {
                    Position.UpdateById(position).then((_result) => {
                        res.send(_result);
                    })
                        .catch((error) => {
                            res.send(new Result({
                                success: false,
                                message: error.toString()
                            }));
                        });
                } else {
                    Position.FindOneByPositionName(position).then((_result) => {
                        if (_result.success) {
                            result.success = false;
                            result.message = "Position name already exists.";
                            res.send(result);
                        } else {
                            Position.UpdateById(position).then((_result) => {
                                res.send(_result);
                            }).catch((error) => {
                                res.send(new Result({
                                    success: false,
                                    message: error.toString()
                                }));
                            });
                        }
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                }
            }).catch((error) => {
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
};