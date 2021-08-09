const unique = arr => {
    return arr.reduce((t,a) => {
        if(!t.includes(a)) t.push(a);
        return t;
    },[]);
}

unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))