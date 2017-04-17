"use strict";

const OptimusCon = require("../../../optimus.con");
const UserSchema = require("../../../models/user/schemas/user.schema");

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