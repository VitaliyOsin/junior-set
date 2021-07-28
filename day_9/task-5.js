const coffees = ['Latte','Cappuccino','Americano'];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(p => p += p*0.5);

coffees.forEach((name,i) => alert(`Кофе ${name} сейчас стоит ${updatedPrices[i]} евро`));