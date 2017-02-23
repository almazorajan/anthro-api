"use strict";

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