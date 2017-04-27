"use strict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    positionName: { 
        type: String, 
        trim: true 
    },
    modules: [
        {
            type: Db.Schema.Types.ObjectId,
            ref: "Module"
        }
    ]
});