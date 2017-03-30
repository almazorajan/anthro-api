"use strict";

const Result = require("../../../classes/result");
const Position = require("../../../models/position/position");

module.exports = (router) => {
    router.post("/add", (req, res) => {
        try {
            let result = new Result();
            let position = req.body.data;

            Position.FindOneByPositionName(position).then((_result) => {
                if (_result.success) {
                    result.success = false;
                    result.message = "Position name is already existing.";
                    res.send(result);
                } else {
                    return Position.Add(position);
                }
            }).then((_result) => {
                res.send(_result);
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