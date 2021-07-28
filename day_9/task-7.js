const goals = [8,1,1,3,2,-1,5];

alert(`Самый результативный матч был под номером ${goals.indexOf(Math.max(...goals))+1}. В нем было забито ${goals[goals.indexOf(Math.max(...goals))]} гол(ов).`);

const numMin = goals.reduce((tarr, goal) => {
    if(goal >= 0 && goal < tarr){
        tarr = goal;
    }
    return tarr;
});

const numbers = [];
const numberOfGoals = [];
goals.forEach((g,i) => {
    if(g === numMin){
        numbers.push(i);
        numberOfGoals.push(g);
    }
});

alert(`Самые не результативные матчи были под номерами ${numbers.join(' и ')}. В каждом из них было забито по ${numberOfGoals.join(' и ')} мячу(а).`);

alert(`Общее количество голов за сезон равно ${goals.reduce((totalgoals,goal) => {
    if(goal >= 0){
        totalgoals += goal;
    }
    return totalgoals;
})}`);

alert(`Были автоматические поражения: ${goals.find(g => g < 0) ? 'да' : 'нет'}`);

const averageNumberOfGoals = goals.reduce((sum, g, i, arr) => {
    if(i === (arr.length-1)){
        return parseInt((sum+g)/arr.length*100)/100;
    }else{
        return sum+g;
    }
});

alert(`Среднее количество голов за матч равно ${averageNumberOfGoals}`);

alert(goals.map(g => g).sort());

console.log('Массив goals: ', goals);


