const matrix = [];

for(let i=0; i < 3; i += 1){
    const row = [];
    for(let j=1; j <= 5; j += 1){
        row.push(j);
    }
    matrix.push(row);
}

console.log(matrix);