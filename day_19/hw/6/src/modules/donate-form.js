import {Settings as st} from '../core/constants/settings';
import { qel,cel } from '../core/utils/index';

export default class DonateForm {
    #totalAmount
    #labelText
    #btnText
    #form
    #h1
    #label
    #input
    #button
    constructor(totalAmount, createNewDonate){
        this.createNewDonate = createNewDonate;
        this.#totalAmount = totalAmount;
        this.#labelText = `Введите сумму в ${st.currency}`;
        this.#btnText = 'Задонатить';
        this.#form;
        this.#h1;
        this.#label;
        this.#input;
        this.#button;
    }
    #cform(){
        const form = cel('form');
        form.className = 'donate-form';
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formInput = e.target.querySelector('input[name=amount]');
            if(Number(formInput.value)){
                const n = {
                    date: new Date(), 
                    amount: Number(formInput.value)
                };
                this.createNewDonate(n);
                console.log(n)
            }
            formInput.value = '';
            formInput.focus();
        });
        return form;
    }
    #ch1(){
        const h1 = cel('h1');
        h1.id = 'total-amount';
        h1.textContent = `${this.#totalAmount}${st.currency}`;
        return h1;
    }
    #clabel(){
        const label = cel('label');
        label.className = 'donate-form__input-label';
        label.textContent = this.#labelText;
        return label;
    }
    #cinput(){
        const input = cel('input');
        input.className = 'donate-form__donate-input';
        input.name = 'amount';
        input.type = 'number';
        input.max = '100';
        input.min = '0';
        input.required = '';
        return input;
    }
    #cbutton(){
        const button = cel('button');
        button.className = 'donate-form__submit-button';
        button.type = 'submit';
        button.textContent = this.#btnText;
        return button;
    }
    updateTotalAmount(newAmount){
        qel('#total-amount').textContent = `${newAmount}${st.currency}`;
    }
    render(){
        this.#form = this.#cform();
        this.#h1 = this.#ch1();
        this.#label = this.#clabel();
        this.#input = this.#cinput();
        this.#button = this.#cbutton();
        this.#label.append(this.#input);
        this.#form.append(this.#h1, this.#label, this.#button);
        return this.#form;
    }
}