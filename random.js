"use strict";
exports.__esModule = true;
function getRandom() {
    var num = Math.floor(Math.random() * 100);
    if (num < 50) {
        return 1;
    }
    else if (num < 79 && num >= 50) {
        return 2;
    }
    else if (num < 94 && num >= 79) {
        return 3;
    }
    else if (num < 99 && num >= 94) {
        return 4;
    }
    return 5;
}
exports["default"] = getRandom;
