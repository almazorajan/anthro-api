"use strict";

const MiddleWare = {
    cors: function(req, res, next) { 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
}

module.exports = MiddleWare;
