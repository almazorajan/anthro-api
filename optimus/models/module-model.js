
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    moduleName: { type: String, trim: true, required: true },
    moduleDescription: { type: String, trim: true },
    link: { type: String, trim: true, required: true },
    group: { type: String, trim: true }
});

const ModuleModel = optimusCon.model("Module", Schema);

const Result = require("../classes/result.js");

const Module = class {

    static get ModuleModel() {

        return ModuleModel;

    }

    static GetAll(_callBack) {

        let result = new Result();
        let promise = ModuleModel.find({}).exec();

        promise.then((modules) => {

            if(modules.length) {

                result.success = true;
                result.message = "Succesfully loaded all records.";
                result.data = modules;

            } else {

                result.success = false;
                result.message = "No modules to records.";

            }

            _callBack(result);

        })
        .catch((error) => {
            
            result.success = false;
            result.message = error.toString();
            _callBack(result);

        });

    } 

    static FindById(_id, _callBack) {

        let result = new Result();
        let promise = ModuleModel.findById(_id).exec();

        promise.then((module) => {

            if(module) {

                result.success = true;
                result.message = "Object with id '" + _id + "' is existing.";
                result.data = module;

            } else {

                result.success = false;
                result.message = "No record found with an id of '" + _id + "'";

            }

            _callBack(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();
            _callBack(result);

        });

    }

    static FindOneByModuleName(_moduleName, _callBack) {

        let result = new Result();
        let promise = ModuleModel.findOne({ moduleName: _moduleName }).exec();

        promise.then((module) => {

            if(module) {

                result.success = true;
                result.message = "Module name is already existing.";
                _callBack(result);
 
            } else {

                result.success = false;
                result.message = "Module name does not exists.";

            }

            _callBack(result);

        })
        .catch((error) => {

            result.success = false;
            result.error = error.toString();
            _callBack(result);

        });

    }

    static Add(_module, _callBack) {

        let result = new Result();
        let promise =  new ModuleModel(_module).save();

        promise.then((mod) => {

            if(mod) {

                result.success = true;
                result.message = "User was successfully added.";

            } else {

                result.success = false;
                result.message = "Unable to save user.";

            }

            result.data = mod;
            _callBack(result);

        })
        .catch((error) => {

        });

    }

    static UpdateById(_module, _callBack) {

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
            
            if(dbRes.n === 1) {

                result.success = true;
                result.message = "Successfully updated!";

            } else {

                result.success = false;
                result.message = "Module was not updated.";

            }

            result.data = dbRes;
            _callBack(result);

        })
        .catch((error) => {

            result.success = false;
            result.error = error.toString();
            _callBack(result);

        });

    }

    static DeleteById(_id, _callBack) {

        let result = new Result();
        let promise = ModuleModel.findById({ _id: _id }).remove().exec();

        promise.then((dbRes) => {

            if(dbRes.result.n === 1) {

                result.success = true;
                result.message = "Successfully removed module.";
                
            } else {

                result.success = false;
                result.message = "Unable to delete module.";

            } 

            result.data = dbRes;
            _callBack(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();
            _callBack(result);

        });

    }

};

module.exports = Module;