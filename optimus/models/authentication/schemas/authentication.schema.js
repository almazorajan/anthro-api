"use strict";

const Db = require("../../../database");
const UserSchema = require("../../../models/user/schemas/user.schema");

module.exports = new Db.Schema({
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