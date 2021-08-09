const cel = el => document.createElement(el);
const qel = selector => document.querySelector(selector);
const celel = (el,text) => {
    h = cel(el);
    h.textContent = text;
    return h;
};

const startBtn = qel('#startBtn');
const resetBtn = qel('#resetBtn');
const root = qel('#root');
const diStart = qel('input[name=diStart]');
const diEnd = qel('input[name=diEnd]');

const getTickets = (diStart, diEnd) => {
    const tickets = [];
    for(let i = diStart; i <= diEnd; i++){
        if(i%3 === 0 && i%7 === 0 && i%2 !== 0 && i%5 !== 0){
            tickets.push(i);
        }
    }
    return {
        tickets,
        jack: Math.max(...tickets)
    }
};

const showResult = () => {
    const {tickets, jack} = getTickets(Number(diStart.value) || 1016, Number(diEnd.value) || 1937);
    const div = cel('div');   
    root.innerHTML = '';
    div.append(
        celel('h3', 'Список номеров, выбранных для розыгрыша:'),
        celel('p', `${tickets.join(', ')} `),
        celel('h3', 'Выигрышный номер:'),
        celel('h2', `${jack}`)
        );
    root.append(div);
}

const reset = () => {
    root.innerHTML = '';
    diStart.value = '';
    diEnd.value = '';
    diStart.focus();
}

startBtn.addEventListener('click', showResult);
resetBtn.addEventListener('click', reset)