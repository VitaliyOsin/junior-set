class CustomSelect{
    #id
    #options
    #currentSelectedOption

    constructor(id,options){
        this.#id = id;
        this.#options = options;
        this.#currentSelectedOption;
    }

    get #selectedValue(){
        return this.#options[this.#currentSelectedOption];
    }

    #create(){
        const cel = el => document.createElement(el);
        const setClassList = (arr, el) => {
            arr.forEach(v => {
                el.classList.add(v);
            });
        }

        const selectDropDown = cel('div');
        setClassList(['select-dropdown', `select-dropdown--${this.#id}`], selectDropDown);

        const button = cel('button');
        setClassList(['select-dropdown__button', `select-dropdown__button--${this.#id}`], button);
        button.innerText = 'Select...';

        const ul = cel('ul');
        setClassList(['select-dropdown__list', `select-dropdown__list--${this.#id}`], ul);
        ul.addEventListener('click', e => {
            const { target } = e;
            if(target.className === 'select-dropdown__list-item'){
                ulToggle();
                this.#currentSelectedOption = target.dataset.value-1;
                button.innerText = this.#selectedValue.text;
                ul.querySelectorAll('li').forEach(l => {
                    l.classList.remove('selected');
                });
                target.classList.add('selected');
            }
        });

        options.forEach(op => {
            const li = cel('li');
            li.className = 'select-dropdown__list-item';
            li.dataset.value = op.value;
            li.innerText = op.text;
            ul.append(li);
        });

        selectDropDown.append(button);
        selectDropDown.append(ul);

        function ulToggle(){
            ul.classList.toggle('active');
        };

        button.addEventListener('click', ulToggle);

        return selectDropDown;
    }

    render(container){
        container.append(this.#create());
    }
}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
 ];
 const customSelect = new CustomSelect('123', options);
 const mainContainer = document.querySelector('#container');
 customSelect.render(mainContainer);