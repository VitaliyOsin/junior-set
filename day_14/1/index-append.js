const body = document.querySelector('body');

const form = document.createElement('form');
form.className = 'create-user-form';


const label = (text,name,type,placeholder) => {
    const label = document.createElement('label');
    label.textContent = text;
    const input = document.createElement('input');
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    label.append(input);
    return label;
}

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';

form.append(label('Имя', 'userName', 'text', 'Введите ваше имя'));
form.append(label('Пароль', 'password', 'password', 'Придумайте Пароль'));
form.append(button);
body.prepend(form);