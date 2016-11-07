
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

module.exports = router;