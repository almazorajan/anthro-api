"use trict";

const OptimusCon = require("../../../optimus.con");

const ContactInfoSchema = new OptimusCon.Schema({
    number: {
        type: String,
        trim: true
    }
});

module.exports = ContactInfoSchema;