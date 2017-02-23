"use strict";

const OptimusCon = require("../optimus.con.js");
const AuthenticationTemplate = require("./authentication.template");
const AuthenticationSchema = new OptimusCon.Schema(AuthenticationTemplate);

module.exports = AuthenticationSchema;