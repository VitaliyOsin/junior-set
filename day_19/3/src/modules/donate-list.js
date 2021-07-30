export default class DonateList {
    #donates
    #div1
    #div2
    #h2
    constructor(donates){
        this.#donates = donates;
        this.#div1;
        this.#div2;
        this.#h2;
    }
    #cel(el){
        return document.createElement(el);
    }
    #cdiv(classname){
        const div = this.#cel('div');
        div.className = classname;
        return div;
    }
    #ch2(){
        const h2 = this.#cel('h2');
        h2.className = 'donates-container__title';
        h2.textContent = 'Список донатов';
        return h2;
    }
    render(){
        this.#div1 = this.#cdiv('donates-container');
        this.#div2 = this.#cdiv('donates-container__donates');
        this.#h2 = this.#ch2();
        this.#donates.forEach(d => {
            this.#div2.innerHTML += `<div class="donate-item">${d.date} - <b>${d.amount}$</b></div>`;
        });
        this.#div1.append(this.#h2, this.#div2);
        return this.#div1;
    }
}