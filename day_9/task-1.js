const getSumOfSequence = number => {
    const arr = [];
    for(let i = 0; i <= number; i += 1){
        arr.push(i);
    }

    return arr[0]+arr[arr.length-1];
}

console.log(getSumOfSequence(10));
console.log(getSumOfSequence(5));
console.log(getSumOfSequence(50));
console.log(getSumOfSequence(100));