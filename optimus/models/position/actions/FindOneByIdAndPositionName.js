"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = (position) => {

    return new Promise((resolve, reject) => {
        PositionModel
            .findOne({
                _id: position._id,
                positionName: position.positionName
            })
            .exec()
            .then((position) => resolve(new Result({
                success: position ? true : false,
                message: position ? "found a matching record" : "could not find a record match",
                data: position
            })))
            .catch((error) => reject(error));
    });
}