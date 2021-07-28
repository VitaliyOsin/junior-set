const myName = 'Vitaliy';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Vladilen';
const reasonText = 'мне нравится программировать';
const numberOfMonth = '12';

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

console.log(myInfoText);

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log(myInfoText);
console.log(`Длина текста: ${myInfoText.length} знаков`);
console.log(`Первый символ текста - ${myInfoText[0]}, последний - ${myInfoText[myInfoText.length-1]}`);