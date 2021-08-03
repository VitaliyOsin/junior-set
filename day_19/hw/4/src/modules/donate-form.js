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
        this.#labelText = 'Введите сумму в $';
        this.#btnText = 'Задонатить';
        this.#form;
        this.#h1;
        this.#label;
        this.#input;
        this.#button;
    }
    #cel(el){
        return document.createElement(el);
    }
    #qel(selector){
        return document.querySelector(selector);
    }
    #cform(){
        const form = this.#cel('form');
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
        const h1 = this.#cel('h1');
        h1.id = 'total-amount';
        h1.textContent = `${this.#totalAmount}$`;
        return h1;
    }
    #clabel(){
        const label = this.#cel('label');
        label.className = 'donate-form__input-label';
        label.textContent = this.#labelText;
        return label;
    }
    #cinput(){
        const input = this.#cel('input');
        input.className = 'donate-form__donate-input';
        input.name = 'amount';
        input.type = 'number';
        input.max = '100';
        input.min = '0';
        input.required = '';
        return input;
    }
    #cbutton(){
        const button = this.#cel('button');
        button.className = 'donate-form__submit-button';
        button.type = 'submit';
        button.textContent = this.#btnText;
        return button;
    }
    updateTotalAmount(newAmount){
        this.#qel('#total-amount').textContent = `${newAmount}$`;
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