const clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?').trim());
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?').trim());
let discount = 0;

if(!clientSpentToday || !clientSpentForAllTime){
    console.log(clientSpentToday)
    console.log(clientSpentForAllTime)
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
}else{
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
}