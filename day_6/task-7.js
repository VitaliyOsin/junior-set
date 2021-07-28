const psw = prompt('Введите пароль').trim();
const pswUpper = psw.toLocaleUpperCase();
let isLength = false;
let isUpper = false;
let isNum = false;
let count1 = 0;
let count2 = 0;

console.log(psw)
console.log(pswUpper)

if(psw.length > 3 && psw.length <= 20){
    isLength = true;
}

for(let i=0; i<psw.length; i += 1){
    if(psw[i] === pswUpper[i]){
        count1 += 1;
    }
}
if(count1){
    isUpper = true;
}

for(let j=0; j<10; j+=1){
    if(psw.includes(String(j))){
        count2 += 1;
    }
}
if(count2){
    isNum = true;
}

console.log('isLength - ', isLength)
console.log('isUpper - ', isUpper)
console.log('isNum - ', isNum)

if(isLength && isUpper && isNum){
    alert('Пароль валидный. Добро пожаловать в аккаунт!');
}else{
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
}