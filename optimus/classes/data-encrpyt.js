"use strict";

const FieldEncryption = require("mongoose-field-encryption").fieldEncryption;
const process = require("process");
const SECRET = process.env.SECRET ? process.env.SECRET : "fgkie24!2@$%@$@^GhGqQwWGf";

module.exports = (Schema, fields) => {
    Schema.plugin(FieldEncryption, {
        fields: fields,
        secret: SECRET
    })
};