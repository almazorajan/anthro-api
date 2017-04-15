"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = (position) => {

    return new Promise((resolve, reject) => {
        PositionModel
            .findOne({ positionName: position.positionName })
            .exec()
            .then((position) => resolve(new Result({
                success: position ? true : false,
                message: position ? "found a matching record" : "unable to find a matching record",
                data: position
            })))
            .catch((error) => reject(error));
    });
}