"use strict";

const Result = require("../../../classes/result");
const Module = require("../../../models/module/module");

module.exports = (router) => {
    router.post("/add", (req, res) => {
        try {
            const result = new Result();
            const mod = req.body.data;

            Module.FindOneByModuleName(mod.moduleName).then((_result) => {
                if (_result.success) {
                    result.success = false;
                    result.message = "Module name already exists.";
                    res.send(result);
                } else {
                    return Module.Add(mod);
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