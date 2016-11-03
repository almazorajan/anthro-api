
"use strict";

// module declarations
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// routes
app.use("/module", require("./controllers/module-controller/module.controller.js"));

// api configurations
const apiConfig = {
    port: 8090,
    name: "Optimus"
};

app.listen(apiConfig.port, () => {

    console.log(apiConfig.name + " is listening to port " + apiConfig.port);

});

