let number: Array<number> = [];
let string: string[] = [];
for(let i=0;i<3;i++){
    number.push(i);
}
for(let i=0;i<3;i++){
    let input = prompt("Nhập");
    string.push(`${input}`);
}
console.log(number);
console.log(string);

