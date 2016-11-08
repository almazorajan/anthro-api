
"use strict";

const express = require("express");
const router = express.Router();

const PositionModel = require("../models/position-model.js");

const Result = require("../classes/result.js");

router.post("/getall", (req, res) => {

    let result = new Result();

    try {

        let promise = PositionModel.find({}).exec();

        promise.then((positions) => {

            result.success = true;
            result.message = "Successfully loaded all positions";
            result.data = positions;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        });

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();
        
        return res.send(result);

    }

});

router.post("/add", (req, res) => {

    let result = new Result();

    try {
        
        let position = req.body.data;

        if (!position) {

            result.success = false;
            result.message = "Unable to identify the payload.";

            return res.send(result);

        }

        if (!position.positionName) {

            result.success = false;
            result.message = "Unable to identify the property 'positionName' of the payload.";
            
            return res.send(result);

        }

        let promise = PositionModel.findOne({ positionName: position.positionName }).exec();

        promise.then((position) => {

            if(position) {

                result.success = false;
                result.message = "Postion name '" + position.positionName + "' already exists.";

                return res.send(result);

            }

            return new ModuleModel(position).save();

        })
        .then((_module) => {

            result.success = true;
            result.message = "Successfully added position: " + position.positionName + ".";
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

        let position = req.body.data;

        if(!position) {

            result.success = false;
            result.message = "Unable to identify payload.";
            result.data = position;

            return res.send(result);

        }

        if(!position._id) {

            result.success = false;
            result.message = "Unable to identify property '_id' of payload.";

            return res.send(result);

        }

        let promise = PositionModel.findById(position._id).exec();

        promise.then((m) => {

            return PositionModel.update({
                _id: position._id
            }, {
                postionName: position.positionName,
                modules: position.modules
            }).exec();
            
        })
        .then((dbRes) => {
            
            if(dbRes.n === 1) {

                result.success = true;
                result.message = "Successfully updated!";

            } else {

                result.success = false;
                result.message = "Position was not updated.";

            }

            result.data = dbRes;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        })

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();

        res.send(result);

    }

});

router.post("/delete", (req, res) => {

    let result = new Result();

    try {

        let position = req.body.data;

        if(!position) {

            result.success = false;
            result.message = "Unable to identify payload";

            return res.send(result);

        }

        if(!position._id) {

            result.success = false;
            result.message = "Unable to identify property '_id' of payload.";

            return res.send(result);

        }

        let promise = PositionModel.findById({ _id: position._id }).remove().exec();

        promise.then((dbRes) => {

            if(dbRes.result.n === 1) {

                result.success = true;
                result.message = "Successfully removed position.";
                
            } else {

                result.success = false;
                result.message = "Unable to delete position.";

            } 

            result.data = dbRes;

            return res.send(result);

        })
        .catch((error) => {

            result.success = false;
            result.message = error.toString();

            return res.send(result);

        });

    } catch(e) {

        result.success = false;
        result.message = (e || e.message).toString();
        
        return res.send(result);

    }

});

module.exports = router;