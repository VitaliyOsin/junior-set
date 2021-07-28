const clientName = 'Игорь';
let clientSpentForAllTime = 100;
let clientSpentToday = 25;
let discount = 0;

if(clientSpentForAllTime>=100 && clientSpentForAllTime<300){
    discount = 10;
}else if(clientSpentForAllTime>=300 && clientSpentForAllTime<500){
    discount = 20;
}else if(clientSpentForAllTime>=500){
    discount = 30;
}else{
    discount = 0;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentForAllTime += clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday*((100-discount)/100)}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
