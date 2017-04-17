"use strict";

const OptimusCon = require("../../optimus.con");
const AuthenticationSchema = require("./schemas/authentication.schema");

AuthenticationSchema.methods.Add = require("./methods/Add");
AuthenticationSchema.methods.ValidateToken = require("./methods/ValidateToken");

module.exports = OptimusCon.model("Authentication", AuthenticationSchema);