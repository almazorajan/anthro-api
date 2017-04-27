"use trict";

const Db = require("../../../optimus.con");

module.exports = new Db.Schema({
    number: {
        type: String,
        trim: true
    }
});