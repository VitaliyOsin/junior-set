class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    compareAge(anotherPerson){
        const compare = this.age > anotherPerson.age ? 'старше' : 'младше';
        alert(`${this.name} ${compare}, чем ${anotherPerson.name}`);
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);
 
person1.compareAge(person2); // Максим младше, чем Светлан

person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим