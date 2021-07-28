const tempertureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));

console.log(typeof tempertureInCelsius);

if(tempertureInCelsius === 0){
    alert('0 градусов по Цельсию - это температура замерзания воды');
}else if(tempertureInCelsius > 0){
    alert('Для замерзания воды температура должна быть 0 градусов по Целсию либо ниже');
}
debugger;
const tempertureInFahrenheit = tempertureInCelsius * 9 / 5 + 32;
debugger;
alert(`${tempertureInCelsius} градусов по Цельсию - это ${tempertureInFahrenheit} по Фаренгейту.`);