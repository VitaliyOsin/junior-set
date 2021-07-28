const numbers = [10,4,100,-5,54,2];

console.log('======> Способ №1 (for):');
let sumFor = 0;
for(let i = 0; i < numbers.length; i += 1){
    sumFor += numbers[i]**3;
}
console.log('Сумма массива number через FOR: ', sumFor);

console.log('======> Способ №2 (for of):');
let sumForOf = 0;
for(let num of numbers){
    sumForOf += num**3;
}
console.log('Сумма массива number через FOR OF: ', sumForOf);

console.log('======> Способ №3 (forEach):');
let sumForEach = 0;
numbers.forEach(n => {
    sumForEach += n**3;
});
console.log('Сумма массива number через FOREACH: ', sumForEach);

console.log('======> Способ №4 (reduce):');
let sumReduce = numbers.reduce((total,num) => total += num**3, 0);
console.log('Сумма массива number через REDUCE: ', sumForEach);