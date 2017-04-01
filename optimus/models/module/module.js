"use strict";

module.exports = {
    ModuleModel: require("./module.model"),
    GetAll: require("./actions/GetAll"),
    FindById: require("./actions/FindById"),
    FindOneByModuleName: require("./actions/FindOneByModuleName"),
    Add: require("./actions/Add"),
    UpdateById: require("./actions/UpdateById"),
    DeleteById: require("./actions/DeleteById")
};