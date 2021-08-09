function groupBy(arr, fn) {
    return arr.reduce((t,v) => {
        if(!t[`${fn(v)}`]) t[`${fn(v)}`] = [];
        t[`${fn(v)}`].push(v);
        return t;
    }, {});
  }

  console.log(groupBy([2.3, 2.2, 3.4, 4.5, 4.8, 8.9, 5.6], Math.floor))
  // result
  // {
  //  2: [2.3, 2.2],
  //  3: [3.4]
  // } 
  console.log(groupBy([2.3, 2.2, 3.4, 4.5, 4.8, 8.9, 5.6], Math.ceil))
  console.log(groupBy([2.3, 2.2, 2.8, 3.4, 4.5, 4.8, 8.9, 5.6, 5.1], Math.round))