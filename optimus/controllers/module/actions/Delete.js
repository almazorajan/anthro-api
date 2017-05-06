"use strict";

const Module = require("../../../models/module/module");
const Position = require("../../../models/position/position");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        const mod = req.body.data;

        Position
            .CountByModuleId(mod._id)
            .then((count) => {
                if (count <= 0) {
                    return new Module(mod).DeleteById();
                }          
                res.send(ErrorResult("could not delete record since it is still being used as reference"));
            })
            .then(result => {
                res.send(result);
            })
            .catch((error) => {
                res.send(ErrorResult(error));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};