const getRA = (min, max) => parseInt(Math.random() * (max - min) + min);
const answerList = [];
const btn = document.querySelector('.btn');
const root = document.querySelector('.root');

function createMathTest(minNum = 0, maxNum = 10) {
    const arrOperations = ['+', '-', '*', '/'];
    const act = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => parseInt((a/b)*100)/100
    }
    
    const numOne = getRA(minNum, maxNum);
    const numTwo = getRA(minNum, maxNum);
    const oper = arrOperations[getRA(0,arrOperations.length)];
    const expression = `${numOne} ${oper} ${numTwo < 0 ? '('+numTwo+')' : numTwo}`;
    const result = act[oper](numOne,numTwo);
    console.log('ACT: ', act[oper](numOne,numTwo))
    return {
        expression,
        result
      }
}

function makeList(arr) {
    const div = document.createElement('div');
    div.textContent = `Правильных ответов: ${arr.filter(v => v.right).length}, неправильных ответов: ${arr.filter(v => !v.right).length}`
    const ul = document.createElement('ul');
    arr.forEach(v => {
        const li = document.createElement('li');
        li.style.color = v.right ? '#00ff00' : '#ff0000';
        li.style.background = v.right ? '#DBFFDB' : '#FFE6E6';
        li.innerHTML = `<div>Задание: <i>${v.expression}</i>, правильный ответ: ${v.result}, Ваш ответ: <strong>${v.answer}</strong>, ответ ${v.right ? 'верный' : 'не верный'}</div>
                        `;
        ul.append(li);
    });
    root.innerHTML = '';
    root.append(div);
    root.append(ul);
    console.log(arr);
}

const start = () => {
    const mathTest = createMathTest(-100, +100);
    const answer = prompt(`Задача: ${mathTest.expression} ?`);
    if(answer){
        const toSay = mathTest.result === Number(answer);
        answerList.unshift(mathTest);
        alert(toSay ? 'Верно!' : `Нет, ответ неверный. Правильный ответ: ${mathTest.result}`);
        mathTest.answer = answer;
        mathTest.right = toSay;
        makeList(answerList);
        console.log('EXPRESSION: ', mathTest);
    }
    
}

btn.addEventListener('click', start);



