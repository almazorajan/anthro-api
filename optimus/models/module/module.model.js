"use strict";

const Promise = require("bluebird");
const OptimusCon = require("../../optimus.con.js");
const Result = require("../../classes/result.js");
const ModuleModel = OptimusCon.model("Module", require("./module.schema.js"));

module.exports = {
    ModuleModel: ModuleModel,
    GetAll: GetAll,
    FindById: FindById,
    FindOneByModuleName: FindOneByModuleName,
    Add: Add,
    UpdateById: UpdateById,
    DeleteById: DeleteById
};

function GetAll() {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.find({}).exec();

        promise.then((modules) => {
            if (modules.length) {
                result.success = true;
                result.message = "Succesfully loaded all modules";
            } else {
                result.success = false;
                result.message = "No module loaded";
            }

            result.data = modules;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindById(_id) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findById(_id).exec();

        promise.then((module) => {
            if (module) {
                result.success = true;
                result.message = "Object with id '" + _id + "' is existing.";
            } else {
                result.success = false;
                result.message = "No record found with an id of '" + _id + "'";
            }
            result.data = module;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function FindOneByModuleName(_moduleName) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findOne({ moduleName: _moduleName }).exec();

        promise.then((module) => {
            if (module) {
                result.success = true;
                result.message = "Module name is already existing.";
            } else {
                result.success = false;
                result.message = "Module name does not exists.";
            }

            result.data;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function Add(_module) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = new ModuleModel(_module).save();

        promise.then((mod) => {
            if (mod) {
                result.success = true;
                result.message = "Module was successfully added";
            } else {
                result.success = false;
                result.message = "Unable to save Module";
            }

            result.data = mod;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

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
                result.message = "Successfully updated!";
            } else {
                result.success = false;
                result.message = "Module was not updated.";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function DeleteById(_id) {
    return new Promise((resolve, reject) => {
        let result = new Result();
        let promise = ModuleModel.findById({ _id: _id }).remove().exec();

        promise.then((dbRes) => {
            if (dbRes.result.n === 1) {
                result.success = true;
                result.message = "Successfully removed Module.";
            } else {
                result.success = false;
                result.message = "Unable to delete Module.";
            }

            result.data = dbRes;
            resolve(result);
        })
        .catch((error) => {
            resolve(error);
        });
    });
}