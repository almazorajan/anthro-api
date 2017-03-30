"use strict";

const Result = require("../../../classes/result");
const User = require("../../../models/user/user");

module.exports = (router) => {
    router.post("/delete", (req, res) => {
        try {
            let user = req.body.data;

            User.DeleteById(user).then((result) => {
                res.send(result);
            })
                .catch((error) => {
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