const todayWinner = {
    prize: '10 000$'
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25
    },
    '201': {
        name: 'Светлана',
        age: 20
    },
    '304': {
        name: 'Екатерина',
        age: 35
    }
}

const getWinner = (applicants, winnerObject) => {
    const playersNumbers = [];
    for(let v in applicants){
        playersNumbers.push(v);
    }
    const n = getRandomNumberInRange(0,playersNumbers.length);
    return {...winnerObject, ...applicants[playersNumbers[n]]};
}

function getRandomNumberInRange(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

const resultWinner = getWinner(winnerApplicants, todayWinner);
console.log('resultWinner: ', resultWinner);