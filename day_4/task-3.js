console.log('=== Console.log :');
console.log(Number(console.log));
console.log(String(console.log));
console.log(Boolean(console.log));

console.log('=== { name: "Maxim" } :');
console.log(Number({ name: "Maxim" }));
console.log(String({ name: "Maxim" }));
console.log(Boolean({ name: "Maxim" }));

console.log('=== Symbol("key") :');
console.log(Number(Symbol("key").description));
console.log(String(Symbol("key")));
console.log(Boolean(Symbol("key")));

console.log('=== Number :');
console.log(Number(Number));
console.log(String(Number));
console.log(Boolean(Number));

console.log("=== '' :");
console.log(Number(''));
console.log(String(''));
console.log(Boolean(''));

console.log("=== 0 :");
console.log(Number(0));
console.log(String(0));
console.log(Boolean(0));

console.log("=== -10 :");
console.log(Number(-10));
console.log(String(-10));
console.log(Boolean(-10));

console.log("=== '-105' :");
console.log(Number('-105'));
console.log(String('-105'));
console.log(Boolean('-105'));