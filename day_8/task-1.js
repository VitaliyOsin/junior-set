console.log(getName1('Кирилл'));

function getName1(name){
    return `Имя равно ${name}`;
}

const getName2 = function(name){
    return `Имя равно ${name}`;
}

const getName3 = name => `Имя равно ${name}`;

console.log(getName2('Алексей'));
console.log(getName3('Олеся'));