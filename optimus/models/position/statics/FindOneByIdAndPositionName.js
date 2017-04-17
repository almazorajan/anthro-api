"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");

module.exports = Promise.method((_id, positionName) => {
    return new Promise((resolve, reject) => {
        PositionModel
            .findOne({
                "_id": _id,
                "positionName": positionName
            })
            .exec()
            .then((position) => resolve(new Result({
                success: position ? true : false,
                message: position ? "found a matching record" : "could not find a record match",
                data: position
            })))
            .catch((error) => reject(error));
    });
});