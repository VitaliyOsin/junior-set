const convertMsToDays = ms => {
    return Math.round(ms/1000/60/60/24);
}

const getDaysBeforeBirthday = nextBirthdayDate => {
    return convertMsToDays(nextBirthdayDate.getTime() - Date.now());
}

console.log(`${getDaysBeforeBirthday(new Date('2022 1 29'))} дней`);