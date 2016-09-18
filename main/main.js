"use strict";
let _ = require('lodash');

function change(a, x, y) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (i === x) {
            b.push(a[y]);
        } else if (i === y) {
            b.push(a[x]);
        } else {
            b.push(a[i]);
        }
    }
    return b;
}

function division(a) {
    return _.split(a, '');
}


function permutation(a, m, len) {
    if (m === len) {
        console.log(a);
        return a;
    }

    else {
        for (let j = m; j <= len; j++) {
            let b = change(a, j, m);
            permutation(b, m + 1, len);
            let c = change(b, j, m);
        }
        return 0;
    }
}

let a = division('bior');
let c = permutation(a, 0, 3);
console.log(c);


module.exports = {
    change: change,
    division: division
};