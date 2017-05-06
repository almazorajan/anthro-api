"use strict";

const Position = require("../../../models/position/position");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        Position
            .GetAll()
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.send(ErrorResult(error));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};