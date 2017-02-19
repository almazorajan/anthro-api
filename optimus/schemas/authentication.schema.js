"use strict";

const OptimusCon = require("../optimus.con.js");
const AuthenticationSchema = new OptimusCon.Schema({
    token: {
        type: String,
        required: true
    },
    fingerprint: {
        type: String,
        required: true
    },
    user: OptimusCon.Schema.Types.Mixed
});

module.exports = AuthenticationSchema;