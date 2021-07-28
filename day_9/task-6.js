const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const ans = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    if(ans && typeof ans === 'number' && ans >= 1 && ans <= 10){
        clientsEstimations.push(ans);
    }
}

for(let i=0; i<5; i += 1){
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(g => g > 5);
const notGoodEstimations = clientsEstimations.filter(g => g <= 5);

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)