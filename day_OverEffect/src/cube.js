import './cube.css';

export default class Cube {
    constructor(arr,point){
        this.arr = arr;
        this.point = point
    }

    #div(){
        const div = document.createElement('div');
        div.className = 'cubes-sub';
        return div;
    }

    render(){
        this.arr.forEach(v => {
            const d = this.#div();
            d.style.background = v.color;
            d.style.border = `1px solid ${v.colorBorder}`;
            d.style.borderRadius = '5px';
            d.style.color = v.textColor;
            d.textContent = v.text;
            this.point.append(d);
        });
    }
}