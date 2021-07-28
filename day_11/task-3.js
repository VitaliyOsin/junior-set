const addDays = (date, days) => {
    const msInDay = 86400000;
    return new Date(date.getTime() + msInDay*days);
}

console.log(addDays(new Date(), 5));