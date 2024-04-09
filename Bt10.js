"use strict";
let item = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
function check(item) {
    for (let key in item) {
        if (!item[key]) {
            delete item[key];
        }
    }
    return item;
}
console.log(check(item));
