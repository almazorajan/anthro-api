"use strict";

const Result = require("../../../classes/result");
const Module = require("../../../models/module/module");

module.exports = (router) => {
    router.post("/getall", (req, res) => {
        try {
            let promise = Module.GetAll();

            promise.then((result) => {
                res.send(result);
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