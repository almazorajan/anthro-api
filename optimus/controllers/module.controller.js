"use strict";

const express = require("express");
const router = express.Router();
const Result = require("../classes/result");
const ModuleModel = require("../models/module/module.model");

router.use(require("../middlewares/session-validator.middleware").ValidateSession);

router.post("/getall", (req, res) => {
    try {
        let promise = ModuleModel.GetAll();

        promise.then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch (e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/add", (req, res) => {
    try {     
        const result = new Result();
        const mod = req.body.data;

        ModuleModel.FindOneByModuleName(mod.moduleName).then((_result) => {
            if(_result.success) {
                result.success = false;
                result.message = "Module name already exists.";
                res.send(result);
            } else {
                return ModuleModel.Add(mod);
            }
        })
        .then((_result) => {
            res.send(_result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });  
    } catch (e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/update", (req, res) => {
    try {
        const mod = req.body.data;

        ModuleModel.FindById(mod._id).then((_result) => {
            if(_result.success) {
                return ModuleModel.UpdateById(mod);
            } else {
                res.send(new Result({
                    success: false,
                    message: "Unable to find record to update."
                }));
            }
        })
        .then((_result) => {
            res.send(_result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));            
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

router.post("/delete", (req, res) => {
    try {
        const mod = req.body.data;

        ModuleModel.DeleteById(mod._id).then((_result) => {
            res.send(_result);
        })
        .catch((error) => {
            res.send(new Result({
                success: false,
                message: error.toString()
            }));
        });
    } catch(e) {
        res.send(new Result({
            success: false,
            message: (e || e.message).toString()
        }));
    }
});

module.exports = router;