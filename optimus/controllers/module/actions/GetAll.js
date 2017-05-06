"use strict";

const Module = require("../../../models/module/module");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        Module
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