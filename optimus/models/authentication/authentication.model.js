"use strict";

const OptimusCon = require("../../optimus.con");
const AuthenticationModel = OptimusCon.model("Authentication", require("./authentication.schema"));

module.exports = {
    AuthenticationModel: AuthenticationModel,
    Add: require("./actions/add")(AuthenticationModel),
    ValidateToken: require("./actions/validate-token")(AuthenticationModel)
};