const peopleWaiting = ['Кристина','Олег','Кирилл','Мария','Светлана','Артём','Глеб'];

const giveParcel = name => {
    peopleWaiting.splice(peopleWaiting.indexOf(name),1);
    alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

const leaveQueueWithoutParcel = (name, number) => {
    peopleWaiting.splice(peopleWaiting.indexOf(name),number).forEach(n => alert(`${n} не получил(а) посылку и ушел(ла) из очереди`));
}

giveParcel('Кристина');
giveParcel('Олег');
giveParcel('Кирилл');
leaveQueueWithoutParcel('Мария', 4);