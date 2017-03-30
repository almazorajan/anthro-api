"use strict";

const Result = require("../../../classes/result");
const Position = require("../../../models/position/position");

module.exports = (router) => {
    router.post("/getall", (req, res) => {
        let result = new Result();

        try {
            Position.GetAll().then((result) => {
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
}