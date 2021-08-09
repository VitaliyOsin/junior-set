export default class Pop {

    #setStyle(el,styles){
        for(let v in styles){
            el.style[v] = styles[v];
        }
    }

    #div(classN = null, stylesObj = {}){
        const div = document.createElement('div');
        div.className = classN;//'pop-cube';
        this.#setStyle(div, stylesObj);
        return div;
    }

    show(el){
        const pop = this.#div('pop-cube', {
            background: el.style.background,
            border: '2px solid #fff',
            translate: '.2s'
        });
        const popTail = this.#div('pop-cube-tail', {
            borderTop: '2px solid #fff',
            borderLeft: '2px solid #fff',
            background: el.style.background
        });

        pop.append(popTail);
        el.append(pop);
    }

    hide(el){
        el.querySelector('.pop-cube').remove();
    }
}