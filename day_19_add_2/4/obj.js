const o1 = {user:{name:{firstname:"Bob"}}};
const o2 = {user:{name:{lastname:"Smith"}}};
const o3 = {user:{favotitecolor:"green"}};
const o4 = {a:"1"};

const assignO = (a,b) => {
    for(let key in b) !a[key] ? a[key] = b[key] : assignO(a[key],b[key]);
    return a;
}



const a = assignO(o1,o2);
console.log('a: ', a)
const b = assignO(a,o3);
console.log('b: ', b)
const c = assignO(b,o4);
console.log('c: ', c)