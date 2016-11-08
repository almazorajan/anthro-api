
"use strict";

const Result = class {

    constructor(init) {

        this.success = false;
        this.message = "";
        this.data = null;

        if(init) {

            this.success = init.success ? init.success : false;
            this.message = init.message ? init.message : "";
            this.data = init.data ? init.data : null;

        }
        
    }

}

module.exports = Result;