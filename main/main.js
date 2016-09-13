"use strict";
let _ = require('lodash');

function change(a, x, y) {
    let b = [];
    for(let i=0;i<a.length;i++) {
        if(i === x) {
            b.push(a[y]);
        }else if(i === y) {
            b.push(a[x]);
        }else {
            b.push(a[i]);
        }
    }
    return b;
}

// function permutation(a, m, len) {
//     let tem = '';
//
//     if (m === len) {
//         for (let i = 0; i < m; i++) {
//             console.log(a[i]);
//         }
//     }
//
//     else {
//         for (let j = m; j <= m; j++) {
//
//             permutation(a, m + 1, len);
//         }
//
//     }
// }

module.exports = {
    change: change
};