import { Settings } from '../core/constants/settings';
import { getFormattedTime as ftime, qel, cel } from '../core/utils/index';

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
    #cdiv(classname){
        const div = cel('div');
        div.className = classname;
        return div;
    }
    #ch2(){
        const h2 = cel('h2');
        h2.className = 'donates-container__title';
        h2.textContent = 'Список донатов';
        return h2;
    }
    #renewList(container, arr){
        arr.forEach(a => {
            container.innerHTML += `<div class="donate-item">${ftime(a.date)} - <b>${a.amount}${Settings.currency}</b></div>`;
        });
    }
    updateDonates(updatedDonates){
        const cont = qel('.donates-container__donates');
        cont.innerHTML = '';
        this.#renewList(cont, updatedDonates);
    }
    render(){
        this.#div1 = this.#cdiv('donates-container');
        this.#div2 = this.#cdiv('donates-container__donates');
        this.#h2 = this.#ch2();
        this.#renewList(this.#div2, this.#donates);
        this.#div1.append(this.#h2, this.#div2);
        return this.#div1;
    }
}