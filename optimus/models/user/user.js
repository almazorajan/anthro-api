"use strict";

const OptimusCon = require("../../optimus.con.js");
const UserSchema = require("./schemas/user.schema.js");

UserSchema.methods.Add = require("./methods/Add");
UserSchema.methods.DeleteById = require("./methods/DeleteById");
UserSchema.methods.UpdateById = require("./methods/UpdateById");
UserSchema.methods.UpdatePasswordById = require("./methods/UpdatePasswordById");

UserSchema.statics.FindOneById = require("./statics/FindOneById");
UserSchema.statics.FindOneByIdAndUserName = require("./statics/FindOneByIdAndUserName");
UserSchema.statics.FindOneByUserName = require("./statics/FindOneByUserName");
UserSchema.statics.FindOneByUserNameAndPassword = require("./statics/FindOneByUserNameAndPassword");

module.exports = OptimusCon.model("User", UserSchema);