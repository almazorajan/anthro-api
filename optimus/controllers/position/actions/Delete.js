"use strict";

const Position = require("../../../models/position/position");
const Employee = require("../../../models/employee/employee");
const ErrorResult = require("../../../helpers/error.result");

module.exports = (req, res) => {
    try {
        let position = req.body.data;

        Employee
            .CountByPositionId(position._id)
            .then((count) => {
                if (count <= 0) {
                    return Position.DeleteById(position);
                }
                res.send(ErrorResult("unable to delete position because it is still beling used as reference by an employee"));
            })
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.send(ErrorResult(e));
            });
    } catch (e) {
        res.send(ErrorResult(e));
    }
};