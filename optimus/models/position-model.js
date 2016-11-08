
"use strict";

const optimusCon = require("../optimus.con.js");

const Schema = new optimusCon.Schema({
    positionName: { type: String, trim: true },
    modules: [
        {
            type: optimusCon.Schema.ObjectId,
            ref: "Module"
        }
    ]
});

const PositionModel = optimusCon.model("Position", Schema);

module.exports = PositionModel;
