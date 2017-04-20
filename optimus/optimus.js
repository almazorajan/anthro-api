"use strict";

// express
const express = require("express");
const process = require("process");
const app = express();

require("./optimus.middlewares")(app);
require("./optimus.routes")(app);

// configurations
const CONFIG = {
    PORT: process.env.PORT ? process.env.PORT : 8090,
    NAME: "Optimus"
};

app.listen(CONFIG.PORT, () => {
    console.log(`${CONFIG.NAME} is listening to port ${CONFIG.PORT}`);
});

