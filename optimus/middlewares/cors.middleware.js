"use strict";

const cors = require("cors");

module.exports = {
    cors: cors,
    SetCorsHeaders: SetCorsHeaders
}

function SetCorsHeaders(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}
