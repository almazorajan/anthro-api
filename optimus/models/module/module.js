"use strict";

module.exports = {
    ModuleModel: require("./module.model"),
    GetAll: require("./actions/get-all"),
    FindById: require("./actions/find-by-id"),
    FindOneByModuleName: require("./actions/find-one-by-module-name"),
    Add: require("./actions/add"),
    UpdateById: require("./actions/update- by-id"),
    DeleteById: require("./actions/delete-by-id")
};