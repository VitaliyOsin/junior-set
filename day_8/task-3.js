const getDivisors = function(number = 1){
    result = '';
    resultCount = 0;
    if(Number.isInteger(number)){
        for(let i = 1; i <= number; i += 1){
            if(number%i === 0){
                resultCount +=1;
                i === number ? result += i : result += `${i}, `;
            }
        }
    }else{
        alert('number должен быть целым числом и больше нуля!');
        result = 'number должен быть целым числом и больше нуля!';
    }
    return [resultCount,result];
}

console.log(getDivisors(4));
console.log(getDivisors(5));
console.log(getDivisors(12));
console.log(getDivisors(30));
console.log(getDivisors(25.5));