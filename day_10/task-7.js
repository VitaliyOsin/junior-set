const groceries = {
    "Orange Juice": {
        price: 1.5,
        discount: 10
    },
    "Chocolate": {
        price: 2,
        discount: 0
    }
}

const shoppingBag = [
    {product: 'Chocolate', quantity: 3},
    {product: 'Orange Juice', quantity: 23}
];

const getTotalPriceOfShoppingBag = bag => {
    return bag.reduce((t, a) => t + a.quantity*(groceries[a.product].price-(groceries[a.product].discount*groceries[a.product].price/100)), 0);
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);

console.log('totalPrice: ', totalPrice);