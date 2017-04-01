"use strict";

const OptimusCon = require("../../optimus.con");

const PositionSchema = new OptimusCon.Schema({
    positionName: { 
        type: String, 
        trim: true 
    },
    modules: [
        {
            type: OptimusCon.Schema.Types.ObjectId,
            ref: "Module"
        }
    ]
});

module.exports = PositionSchema;