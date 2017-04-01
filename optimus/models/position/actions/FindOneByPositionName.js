"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = FindOneByPositionName;

function FindOneByPositionName(_position) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = PositionModel.findOne({ positionName: _position.positionName }).exec();

        promise.then((position) => {
            if (position) {
                result.success = true;
                result.message = "found a matching record";
            } else {
                result.success = false;
                result.message = "unable to find matching record";
            }
            result.data = position;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}