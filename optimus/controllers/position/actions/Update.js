"use strict";

const Result = require("../../../classes/result");
const Position = require("../../../models/position/position");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            let position = req.body.data;

            Position
                .FindOneByIdAndPositionName(position)
                .then((result) => {
                    if (result.success) {
                        Position
                            .UpdateById(position)
                            .then((result) => {
                                res.send(result);
                            })
                            .catch((error) => {
                                res.send(ErrorResult(error));
                            });
                    } else {
                        Position
                            .FindOneByPositionName(position)
                            .then((result) => {
                                if (result.success) {
                                    res.send(new Result({
                                        success: false,
                                        message: "position name already exists"
                                    }));
                                } else {
                                    return Position.UpdateById(position);
                                }
                            })
                            .then((result) => {
                                res.send(result);
                            })
                            .catch((error) => {
                                res.send(error);
                            });
                    }
                })
                .catch((error) => {
                    res.send(error);
                });
        } catch (e) {
            res.send(ErrorResult(e));
        }
    });
};