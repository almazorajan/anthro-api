"use strict";

module.exports = {
    UserModel: require("./user.model"),
    GetAll: require("./actions/GetAll"),
    FindOneById: require("./actions/FindOneById"),
    FindOneByUserNameAndPassword: require("./actions/FindOneByUsernameAndPassword"),
    FindOneByUserName: require("./actions/FindOneByUsername"),
    FindOneByIdAndUserName: require("./actions/FindOneByIdAndUserName"),
    Add: require("./actions/Add"),
    UpdateById: require("./actions/UpdateById"),
    UpdatePasswordById: require("./actions/UpdatePasswordById"),
    DeleteById: require("./actions/DeleteById")
};