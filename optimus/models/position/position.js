"use strict";

module.exports = {
    PositionModel: require("./position.model"),
    GetAll: require("./actions/GetAll"),
    CountByModuleId: require("./actions/CountByModuleId"),
    FindOneByIdAndPositionName: require("./actions/FindOneByIdAndPositionName"),
    FindOneByPositionName: require("./actions/FindOneByIdAndPositionName"),
    Add: require("./actions/Add"),
    UpdateById: require("./actions/UpdateById"),
    DeleteById: require("./actions/DeleteById")
};