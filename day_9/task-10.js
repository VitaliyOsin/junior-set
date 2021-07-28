const doMaths = expr => {
    expr[1] === '=' ? expr[1] = '===' : expr[1];
    let exp = (0, eval)(expr.reduce((t,a) => t+a));
    return exp;
}

const getMathResult = expression => {
    let res;
    const maths = ['<','>','=','+','-','*','/'];
    if(expression.length === 3){
        if(Number(expression[0]) && Number(expression[2])){
            if(maths.includes(expression[1])){
                console.log(expression)
                res = doMaths(expression);
            }
        }else{
            alert('Ошибка');
        }
    }else if(expression.length > 3){
        const tempArr = [];
        if(expression.find(v => Number(v))){
            tempArr.push(...expression.splice(expression.findIndex(v => Number(v)),1));
            if(expression.find(v => maths.includes(v))){
                tempArr.push(...expression.splice(expression.findIndex(ex => maths.includes(ex)),1));
                if(expression.find(v => Number(v))){
                    tempArr.push(...expression.splice(expression.findIndex(v => Number(v)),1));
                    console.log(tempArr)
                    res = doMaths(tempArr);
                }else{
                    alert('Ошибка');
                }
            }else{
                alert('Ошибка');
            }
        }else{
            alert('Ошибка');
        }
        
        
        
        
    }else{
        alert('Ошибка');
    }
    return res;
}

console.log(getMathResult(['s', '5', 'we', '+', 5]));
console.log(getMathResult(['4', '=', 5]));
console.log(getMathResult(['45', '/', 5]));
console.log(getMathResult(['2', '*', 5]));
console.log(getMathResult(['1', '5', 'tr', '>', 5]));
console.log(getMathResult(['s', '20', '-', '+', 8]));
console.log(getMathResult(['s', '<', '10', '+', 8]));