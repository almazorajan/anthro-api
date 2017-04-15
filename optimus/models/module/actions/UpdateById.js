"use strict";

const Promise = require("bluebird");
const Result = require("../../../classes/result");
const ModuleModel = require("../module.model");

module.exports = (mod) => {

    return new Promise((resolve, reject) => {
        ModuleModel
            .update({
                _id: mod._id
            }, {
                moduleName: mod.moduleName,
                moduleDescription: mod.moduleDescription,
                group: mod.group,
                link: mod.link
            })
            .exec()
            .then((dbRes) => resolve(new Result({
                success: dbRes.n === 1 ? true : false,
                message: dbRes.n === 1 ? "the record was successfully updated" : "unable to update the record",
                data: dbRes
            })))
            .catch((error) => reject(error));
    });
};