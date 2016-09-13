// let _ = require('lodash');

let a = 'brio';

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

let result = change(a, 0, 1);

console.log(result);

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

