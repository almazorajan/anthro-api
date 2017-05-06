"use strict";

const propertiesWithIds = ["position", "company", "employmentStatus"];

module.exports = (propertyName) => {
    for (let key in propertiesWithIds) {
        if (propertiesWithIds[key] === propertyName)
            return true;
    }
    return false;
};