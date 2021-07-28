for(let i=0; i<3; i += 1){
    let newStudent = prompt(`${i+1}. Введите имя нового студента!`).trim();
    if(newStudent) alert(`Добро пожаловать, ${newStudent}`);
}

let j = 0;
while(j<3){
    let newStudent = prompt(`${j+1}. Введите имя нового студента!`).trim();
    if(newStudent) alert(`Добро пожаловать, ${newStudent}`);
    j += 1;
}

let t = 0;
do{
    let newStudent = prompt(`${t+1}. Введите имя нового студента!`).trim();
    if(newStudent) alert(`Добро пожаловать, ${newStudent}`);
    t += 1;
}while(t<3);