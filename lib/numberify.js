'use strict';

module.exports = numberify;

function numberify(x) {
    let num = +x;
    if (isNaN(num)) return 0
    else if (x === true) return 0
    return num;
}