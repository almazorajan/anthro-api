"use strict";

const OptimusCon = require("../../../optimus.con");

const ModuleSchema = new OptimusCon.Schema({
    moduleName: {
        type: String,
        trim: true,
        required: true
    },
    moduleDescription: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true,
        required: true
    },
    group: {
        type: String,
        trim: true
    }
});

module.exports = ModuleSchema;