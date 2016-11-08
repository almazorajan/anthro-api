
"use strict";

const express = require("express");
const router = express.Router();

const ModuleModel = require("../models/module-model.js");

const Result = require("../classes/result.js");

router.post("/getall", (req, res) => {

    try {

        ModuleModel.GetAll((result) => {
            
            res.send(result);

        });

    } catch (e) {

        return res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

router.post("/add", (req, res) => {

    try {
        
        const mod = req.body.data;

        ModuleModel.FindOneByModuleName(mod.moduleName, (_result) => {

            if(_result.success) {

                result.success = false;
                result.message = "Module name already exists.";
                res.send(result);

            } else {

                ModuleModel.Add(mod, (_result) => {

                    res.send(_result);

                });

            }
 
        });

    } catch (e) {

        return res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

router.post("/update", (req, res) => {

    try {

        const mod = req.body.data;

        ModuleModel.FindById(mod._id, (_result) => {

            if(_result.success) {

                res.send(_result);

            } else {

                ModuleModel.UpdateById(mod, (_result) => {

                    return res.send(_result);

                });

            }
            
        });

    } catch(e) {

        return res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

router.post("/delete", (req, res) => {

    let result = new Result();

    try {

        const mod = req.body.data;

        ModuleModel.DeleteById(mod._id, (result) => {

            res.send(result);

        });

    } catch(e) {

        return res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));

    }

});

module.exports = router;