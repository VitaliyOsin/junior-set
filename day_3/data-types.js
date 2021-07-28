const singerName = 'Josh Garrels';
const age = 40;
const isSinger = true;
const b = undefined;
const c = null;
const id = Symbol('id');
const bint = BigInt(14785963258458962514785452145874);
const obj = {
    singerName,
    age,
    isSinger
};

console.log('singerName', singerName, typeof singerName);
console.log('age', age, typeof age);
console.log('isSinger', isSinger, typeof isSinger);
console.log('b', b, typeof b);
console.log('c', c, typeof c);
console.log('id', id, typeof id);
console.log('bint', bint, typeof bint);
console.log('obj', obj, typeof obj);