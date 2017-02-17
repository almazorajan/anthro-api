"use strict";

function Result(init) {
    this.success = false;
    this.message = "";
    this.data = null; 

    // iniitialize
    if(init) {
        for(let key in this) {
            if(init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
}

module.exports = Result;