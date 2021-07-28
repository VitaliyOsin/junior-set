function checkQuestionAnswer(question, correctAnswer){
    prompt(question).trim().toLocaleLowerCase() === correctAnswer.toLocaleLowerCase() ? alert('Ответ верный') : alert('Ответ неверный');
};

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');