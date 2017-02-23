"use strict";

const OptimusCon = require("../../optimus.con");

const AuthenticationTemplate = {
    token: {
        type: String,
        required: true
    },
    fingerprint: {
        type: String,
        required: true
    },
    user: OptimusCon.Schema.Types.Mixed
};

module.exports = AuthenticationTemplate;