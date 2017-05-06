"use strict";

const process = require("process");

module.exports = {
    dbCon: process.env.MONGODB_CON ? process.env.MONGODB_CON : "mongodb://localhost:27017/megatron",
    port: process.env.PORT ? process.env.PORT : 8090,
    name: "Optimus"
};