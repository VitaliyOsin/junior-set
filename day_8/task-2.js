const getSumOfNumbers = (number, type) => {
    let i;
    let s;
    let sum = 0;
    switch(type){
        case 'odd':
            i = 1;
            s = 2;
            break;
        case 'even':
            i = 0;
            s = 2;
            break;
        default:
            i = 0;
            s = 1;
    }

    for(j = i; j <= number; j += s){
        sum += j;
    }

    return sum;
};

console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10, ''));