let health = prompt('Введите число параметра "здоровья" для персонажа');
console.log('health', health);
if(health < 0 || !health){   
    alert('Параметр "здоровье" должен быть больше нуля!');
} else {
    debugger;
    alert(`Параметр "здоровье" равен ${health}`);
}