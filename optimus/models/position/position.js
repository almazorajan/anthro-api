"use strict";

module.exports = {
    PositionModel: require("./position.model"),
    GetAll: require("./actions/get-all"),
    CountByModuleId: require("./actions/count-by-module-id"),
    FindOneByIdAndPositionName: require("./actions/find-one-by-id-and-position-name"),
    FindOneByPositionName: require("./actions/find-one-by-position-name"),
    Add: require("./actions/add"),
    UpdateById: require("./actions/update-by-id"),
    DeleteById: require("./actions/delete-by-id")
};