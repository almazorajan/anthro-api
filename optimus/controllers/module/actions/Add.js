"use strict";

const Module = require("../../../models/module/module");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        const mod = req.body.data;

        if (mod.hasOwnProperty("_id")) {
            delete mod._id;
        }
            
        Module
            .FindOneByModuleName(mod.moduleName)
            .then((result) => {
                if (!result.success) {
                    return new Module(mod).Add();
                }
                res.send(ErrorResult("module name already exists"));
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