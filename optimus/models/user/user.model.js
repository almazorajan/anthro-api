"use strict";

const OptimusCon = require("../../optimus.con.js");
const UserModel = OptimusCon.model("User", require("./user.schema.js"));

module.exports = {
    UserModel: UserModel,
    GetAll: require("./actions/get-all")(UserModel),
    FindOneById: require("./actions/find-one-by-id")(UserModel),
    FindOneByUserNameAndPassword: require("./actions/find-one-by-username-and-password")(UserModel),
    FindOneByUserName: require("./actions/find-one-by-username")(UserModel),
    FindOneByIdAndUserName: require("./actions/find-one-by-id-and-username")(UserModel),
    Add: require("./actions/add")(UserModel),
    UpdateById: require("./actions/update-by-id")(UserModel),
    UpdatePasswordById: require("./actions/update-password-by-id")(UserModel),
    DeleteById: require("./actions/delete-by-id")(UserModel)
};