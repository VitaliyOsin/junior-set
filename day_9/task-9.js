const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const newMatrix = matrix.reduce((t,a) => t = [...t,...a], []);
console.log(newMatrix);