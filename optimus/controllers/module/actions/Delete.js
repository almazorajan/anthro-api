"use strict";

const Result = require("../../../classes/result");
const Module = require("../../../models/module/module");
const Position = require("../../../models/position/position");

module.exports = (router) => {
    router.post("/delete", (req, res) => {
        try {
            const mod = req.body.data;

            Position.CountByModuleId(mod._id).then((count) => {
                if (count <= 0) {
                    Module.DeleteById(mod._id).then((_result) => {
                        res.send(_result);
                    })
                        .catch((error) => {
                            res.send(new Result({
                                success: false,
                                message: error.toString()
                            }));
                        });
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Could not delete the record since it is still being used"
                    }));
                }
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