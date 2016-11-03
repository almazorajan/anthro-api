
"use strict";

const express = require("express");
const router = express.Router();

const ModuleModel = require("../../models/module-model.js");

const Result = require("../../classes/result.js");

router.get("/getall", (req, res) => {

    let result = new Result();

    try {

        let promise = ModuleModel.find({}).exec();

        promise.then((modules) => {

            result.success = true;
            result.message = "Successfully loaded all modules.";
            result.data = modules;

            return res.send(result);

        })
        .catch((err) => {

            result.success = false;
            result.message = err;

            return res.send(result);

        });

    } catch (e) {

        result.success = false;
        result.message = (e || e.message).toString();

        return res.send(result);

    }

});

router.post("/add", (req, res) => {

    let result = new Result();

    try {
        
        let mod = req.body;

        if (!mod) {

            result.success = false;
            result.message = "Unable to identify the payload.";

            return res.send(result);

        }

        if (!mod.moduleName) {

            result.success = false;
            result.message = "Unable to identify the property 'moduleName' of the payload.";
            
            return res.send(result);

        }

        let promise = ModuleModel.findOne({ moduleName: mod.moduleName }).exec();

        promise.then((module) => {

            if(module) {

                result.success = false;
                result.message = "Module name '" + mod.moduleName + "' already exists.";

                return res.send(result);

            }

            return new ModuleModel(mod).save();

        })
        .then((_module) => {

            result.success = true;
            result.message = "Successfully added module: " + mod.moduleName + ".";
            result.data = _module;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        })

    } catch (e) {

        result.success = false;
        result.message = (e || e.message).toString();

        return res.send(result);

    }

});

router.post("/update", (req, res) => {

    let result = new Result();

    try {

        var mod = req.body;

        if(!mod) {

            result.success = false;
            result.message = "Unable to identify payload.";

            return res.send(result);

        }

        if(!mod._id) {

            result.success = false;
            result.message = "Unable to identify property '_id' of payload.";

            return res.send(result);

        }

        let promise = ModuleModel.findById(mod._id).exec();

        promise.then((m) => {

            return ModuleModel.update({
                _id: mod._id
            }, {
                moduleName: mod.moduleName,
                moduleDescription: mod.moduleDescription,
                group: mod.group,
                link: mod.link
            }).exec();
            
        })
        .then((m) => {
            
            result.success = true;
            result.message = "Successfully updated!";
            result.data = m;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error;

            return res.send(result);

        })

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();

        res.send(result);

    }

});

router.post("/remove", (req, res) => {

    let result = new Result();

    try {

        let mod = req.body;

        if(!mod) {

            result.success = false;
            result.message = "Unable to identify payload";

            return res.send(result);

        }

        if(mod._id) {

            result.success = false;
            result.message = "Unable to identify property '_id' of payload.";

            return res.send(result);

        }

        let promise = ModuleModel.findById({ _id: mod._id }).remove().exec();

        promise.then((m) => {

            result.success = true;
            result.message = "Successfully removed module.";
            result.data = m;

            return res.send(result);

        })
        .catch((error) => {

        });

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();
        
        return res.send(result);

    }

});

module.exports = router;