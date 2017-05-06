"use strict";

const Module = require("../../../models/module/module");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        const mod = req.body.data;

        Module
            .FindById(mod._id)
            .then((result) => {
                if (result.success) {
                    return new Module(mod).UpdateById();
                }
                res.send(ErrorResult("unable to find the record to update"));
            })
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