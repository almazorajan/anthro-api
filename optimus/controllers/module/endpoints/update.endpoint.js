"use strict";

const Result = require("../../../classes/result");
const Module = require("../../../models/module/module");

module.exports = (router) => {
    router.post("/update", (req, res) => {
        try {
            const mod = req.body.data;

            Module.FindById(mod._id).then((_result) => {
                if (_result.success) {
                    return Module.UpdateById(mod);
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Unable to find record to update."
                    }));
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