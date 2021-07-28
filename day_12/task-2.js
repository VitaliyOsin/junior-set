const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound(){
        return 'Гав-гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound(){
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic){
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

    this.isDomestic = isDomestic;

    return this;
}

console.log(makeDomestic.bind(dog, true)());
console.log(makeDomestic.call(dog, true));
console.log(makeDomestic.apply(dog, [true]));

console.log(makeDomestic.bind(bird, false)());
console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [false]));
