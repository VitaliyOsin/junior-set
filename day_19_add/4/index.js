function isEqualSymbols(str1, str2) {
    const trans = str => str.split('').sort().join('');
    console.log(trans(str1) === trans(str2));
    return [trans(str1), trans(str2)];
 }

console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false