"use strict";

const OptimusCon = require("../optimus.con");
const UserTemplate = require("./user.template");
const UserSchema = new OptimusCon.Schema(UserTemplate);

module.exports = UserSchema;