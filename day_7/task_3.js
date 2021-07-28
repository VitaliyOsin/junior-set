const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelepers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

console.log('1: ',totalJuniorDevelopersSalary);

for(let i=0; i < numberOfJuniorDevelepers; i += 1){
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
    totalJuniorDevelopersSalary += salaryWithTax;
    console.log('FOR: ', totalJuniorDevelopersSalary);
}

console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);