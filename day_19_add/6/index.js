const sortNums = (arr, isFromLess = false) => {
    const inArr = [];
    while(arr.length > 0){
        const n = Math.max(...arr);
        inArr.push(n);
        arr.splice(arr.indexOf(n),1);
    }
    if(isFromLess){
        inArr.reverse();
    }
    return inArr;
}

const oddSort = arr => {
    const newArr = [];
    const evenArr = arr.reduce((t,v,i) => {
        if(v%2 === 0) t[`${i}`] = v;
        return t;
    },{});
    const oddArr = sortNums(arr.filter(v => v%2 > 0), true).entries();    
    for(let i = 0; i < arr.length; i++){
        evenArr[`${i}`] ? newArr.push(evenArr[i]) : newArr.push(oddArr.next().value[1]);
    }
    console.log(newArr)
    return newArr;
}

oddSort([7, 3, 4, 9, 5, 2, 17]) // => [3, 5, 4, 7, 9, 2, 17]