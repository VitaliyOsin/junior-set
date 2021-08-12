function addBase(base) {
	return arg => arg + base;
}

const addTen = addBase(10);
console.log(addTen(5)); //15
console.log(addTen(80)); //90
console.log(addTen(-5)); //5