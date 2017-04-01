"use strict";

const OptimusCon = require("../../../optimus.con");
const AccreditationSchema = new OptimusCon.Schema({
    title: {
        type: String,
        trim: true
    },
    dateAccredited: {
        type: Date
    }
});

module.exports = AccreditationSchema;