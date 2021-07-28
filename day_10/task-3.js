const student = {
    name: 'Максим',
    programmingLanguage: 'JavaScript'
}

const handleObject = (obj,key,action) => {
    switch(action){
        case 'get':
            return obj[key];
        case 'add':
            obj[key] = '';
            return obj;
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
    }
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log(result);