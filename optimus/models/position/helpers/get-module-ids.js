"use strict";

module.exports = GetModuleIds;

function GetModuleIds(_position) {
    if (_position.modules.length) {
        let ids = [];

        for (let i = 0; i < _position.modules.length; i++) {
            ids.push(_position.modules[i]._id);
        }

        return ids;
    }
}