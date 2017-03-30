"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const PositionModel = require("../position.model");

module.exports = DeleteById;

function DeleteById(_position) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = PositionModel.findById({ _id: _position._id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "Position was successfully deleted";
            } else {
                result.success = false;
                result.message = "Unable to delete the Position";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}