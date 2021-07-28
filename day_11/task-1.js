const getDateFormat = (date, separator = '.') => {
    const d = date.getDate();
    const m = date.getMonth()+1;
    const y = date.getFullYear();
    dateArr = [d <= 9 ? `0${d}` : d, m <= 9 ? `0${m}` : m, y].join(separator);
    return dateArr;
}

const d = new Date('2000 1 2');
console.log(getDateFormat(d, '-'));