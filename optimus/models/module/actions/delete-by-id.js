"use strict";

const Promise = require("bluebird");
const ModuleModel = require("../module.model");

module.exports = DeleteById;

function DeleteById(_id) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findById({ _id: _id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "record was successfully removed";
            } else {
                result.success = false;
                result.message = "unable to remove the record";
            }
            result.data = dbRes;

            resolve(result);
        }).catch((error) => {
            resolve(error);
        });
    });
}