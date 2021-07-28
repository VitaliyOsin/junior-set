const student = {
    fullName: 'Максим',
    experienceInMonth: 12,
    stack: ['HTML','CSS','JavaScript','React']
}

const giveJobToStudent = (student, jobName) => {
    return {...student, job: jobName};
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

console.log(updatedStudent);

alert(`Поздравляем! У студента ${updatedStudent.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`);