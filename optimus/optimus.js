
"use strict";

// module declarations
const express = require("express");
const app = express();

// api configurations
const apiConfig = {
    port: 8090,
    name: "Optimus"
};

app.listen(port, () => {

    console.log(apiConfig.name + " is listening to port" + apiConfig.port);

});

