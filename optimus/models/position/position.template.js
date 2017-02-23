"use strict";

const OptimusCon = require("../../optimus.con");

const PositionTemplate = {
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
};

module.exports = PositionTemplate;