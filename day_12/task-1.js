const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel(){
        const techs = ['CSS', 'JavaScript', 'React', 'NodeJS'];
        
        if(this.level === techs.length){
            alert('Студент выучил все технологии!');
        }else{
            this.level++;
            this.stack.push(techs[this.level-2]);
        }
        
        return this;
    }
}

student.improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

console.log(student)