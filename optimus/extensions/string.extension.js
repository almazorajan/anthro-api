
"use strict";

const StringExtension = class {
    static use() {
        String.prototype.superTrim = function() {
            return this.replace(/\s+/g, " ").trim();
        };
    }
}

module.exports = StringExtension;