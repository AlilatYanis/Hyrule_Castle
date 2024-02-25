"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hpbarre(hp, max) {
    var hp10 = hp / 10;
    var max10 = max / 10;
    var pv = '';
    for (var i = 0; i < hp10; i += 1) {
        pv = "".concat(pv, "\u2764\uFE0F\u200B");
    }
    var no = '';
    for (var j = 0; j < max10 - hp10; j += 1) {
        no = "".concat(no, "\u200B\uD83D\uDDA4\u200B\u200B");
    }
    return { pv: pv, no: no };
}
exports.default = hpbarre;
