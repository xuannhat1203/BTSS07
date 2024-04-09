"use strict";
let number2 = [3, 5, 7, 11, 13];
let count = 0;
for (let i = 0; i < number2.length; i++) {
    for (let j = 2; j < i; j++) {
        if (number2[i] % j == 0) {
            count += 1;
        }
    }
}
if (count == 0) {
    console.log(true);
}
else {
    console.log(false);
}
