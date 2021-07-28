let word = 'book';
console.log(Number(word), Boolean(word), String(word));

let count = 72;
console.log(Number(count), Boolean(count), String(count));

let isBook = true;
console.log(Number(isBook), Boolean(isBook), String(isBook));
isBook = false;
console.log(Number(isBook), Boolean(isBook), String(isBook));

let undy = undefined;
console.log(Number(undefined), Boolean(undefined), String(undefined));


let n = null;
console.log(Number(n), Boolean(n), String(n));


let s = Symbol('id');
console.log(Number(s.discription), Boolean(s), String(s));


let bint = 72n;
console.log(Number(bint), Boolean(bint), String(bint));


let obj = {name: 'Bob', age: 43};
console.log(Number(obj), Boolean(obj), String(obj));
