let javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`;

javaScriptDescription = javaScriptDescription.trim().slice(0, (javaScriptDescription.length)%2 === 0 ? javaScriptDescription.length/2 : Math.floor(javaScriptDescription.length/2)).replaceAll('а', 'А').replaceAll('a', 'A').replaceAll(' ', '').repeat(3);

console.log(`Средний символ строки - ${javaScriptDescription[Math.floor(javaScriptDescription.length/2)]}`);
console.log(javaScriptDescription);