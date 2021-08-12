const first = [1, 2, 3, 4]
const second = [3, 4, 5, 6]

function intersection (a, b) {
	return a.reduce((t,v) => {
        if(b.includes(v)) t.push(v);
        return t;
    }, []);
}

console.log(intersection(first, second) )// -> [3, 4]