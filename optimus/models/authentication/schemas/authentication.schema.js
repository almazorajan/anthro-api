"use strict";

const UserSchema = require("../../../models/user/user.schema");
const OptimusCon = require("../../../optimus.con");

const AuthenticationSchema = new OptimusCon.Schema({
    token: {
        type: String,
        required: true
    },
    fingerprint: {
        type: String,
        required: true
    },
    user: UserSchema
});

module.exports = AuthenticationSchema;