const ordersArr = [4,2,1,3];

const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
];

const giveTalonsInOrder = (patients, orders) => {
    const tempArr = [];
    orders.forEach(order =>{
        tempArr.push(...patients.filter(patient => patient.id === order));
    });
    return tempArr;
}

const result = giveTalonsInOrder(people, ordersArr);

console.log('result: ', result);
