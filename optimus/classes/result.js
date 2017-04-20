"use strict";

module.exports = Result;

function Result(init) {
    this.success = false;
    this.message = "";
    this.data = null; 

    // initialize
    if(init) {
        for(let key in this) {
            if(init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
}