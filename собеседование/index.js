// Есть список операций:
const operations = [
    {"id": 1, "timestamp": 2, "amount": 1},
    {"id": 2, "timestamp": 3, "amount": 8},
    {"id": 1, "timestamp": 3, "amount": 2}
]

// В этом списке операции дублируются по id если так случилось, то правильной операцией считается та,
// у которой больше timestamp

// Задача: написать функцию filter, так чтобы она
// возвращала только правильные операции

const filter = (operations) => {
    return operations.reduce((t,a) => {
        const n = t.findIndex(v => v.id === a.id);
        if(n>=0){
            if(t[n].timestamp<a.timestamp){
                t[n] = a
            }      
        }else{
            t.push(a);
        }
        return t;
    },[]);
};


console.log(filter(operations));