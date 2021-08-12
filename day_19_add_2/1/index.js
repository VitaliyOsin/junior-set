const getRandomColor = () => {   
    return `#${
        'xxxxxx'
        .split('')
        .map(x => x = Math.floor(Math.random()*16).toString(16))
        .join('')
    }`;
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor()); 