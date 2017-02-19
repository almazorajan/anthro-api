"use trict";

const FingerPrint = require("express-fingerprint");

module.exports = {
    FingerPrintConfig: FingerPrintConfig
};

function FingerPrintConfig() {
    return FingerPrint({
        paramters: [
            FingerPrint.useragent,
            FingerPrint.acceptHeaders,
            FingerPrint.geoip,
 
            function(next) {
                next();
            }
        ]
    });
}