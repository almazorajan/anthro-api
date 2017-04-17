"use strict";

const Result = require("../../../classes/result");
const Employee = require("../../../models/employee/employee");
const Position = require("../../../models/position/position");

module.exports = (router) => {
    router.post("/delete", (req, res) => {
        try {
            let position = req.body.data;

            Employee.CountByPositionId(position._id).then((count) => {
                if (count <= 0) {
                    Position.DeleteById(position).then((result) => {
                        res.send(result);
                    }).catch((error) => {
                        res.send(new Result({
                            success: false,
                            message: error.toString()
                        }));
                    });
                } else {
                    res.send(new Result({
                        success: false,
                        message: "Unable to delete position. It is still being used by an employee"
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