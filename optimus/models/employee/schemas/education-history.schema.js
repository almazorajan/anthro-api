"use strict";

const OptimusCon = require("../../../optimus.con");

const EducationHistorySchema = new OptimusCon.Schema({
    educationLevel: {
        type: String,
        trim: true
    },
    degree: {
        type: String,
        trim: true
    },
    dateGraduated: {
        type: Date
    }
});

module.exports = EducationHistorySchema;