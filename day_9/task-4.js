const coffees = ['Latte','Cappuccino','Americano'];

const coffeeName = prompt('Поиск кофе по названию:');
const number = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());
if(number > -1){
    alert(`Держите ваш любимый кофе ${coffees[number]}. Он ${number}-й по популярности в нашей кофейне.`);
}else{
    alert('К сожалению, такого вида кофе нет в наличии');
}