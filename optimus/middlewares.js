"use strict";

module.exports = (app) => {
    app.use(require("./middlewares/body-parser.middleware.js").UrlEncodedExtended());
    app.use(require("./middlewares/body-parser.middleware.js").Json());
    app.use(require("./middlewares/finger-print.middleware.js").FingerPrintConfig());
    app.use(require("./middlewares/cors.middleware.js").CorsHeaders);
    app.options("*", require("./middlewares/cors.middleware.js").cors());
};