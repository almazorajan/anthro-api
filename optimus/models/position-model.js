
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    positionName: "string",
    modules: [
        {
            type: optimusCon.Schema.ObjectId,
            ref: "Module"
        }
    ]
});

const PositionModel = optimusCon.model("Position", Schema);

module.exports = PositionModel;
