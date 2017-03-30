"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = GetAll;

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = PositionModel.find({}).populate("modules").exec();

        promise.then((positions) => {
            result.success = true;

            if (positions.length)
                result.message = "Successfully loaded all Positions";
            else
                result.message = "No Position loaded";

            result.data = positions;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}