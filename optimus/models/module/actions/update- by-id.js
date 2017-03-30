"use strict";

const Promise = require("bluebird");
const ModuleModel = require("../module.model");

module.exports = UpdateById;

function UpdateById(_module) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.update({
            _id: _module._id
        }, {
            moduleName: _module.moduleName,
            moduleDescription: _module.moduleDescription,
            group: _module.group,
            link: _module.link
        }).exec();

        promise.then((dbRes) => {
            if (dbRes.n === 1) {
                result.success = true;
                result.message = "record was successfully updated";
            } else {
                result.success = false;
                result.message = "unable to update the record";
            }

            result.data = dbRes;
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}