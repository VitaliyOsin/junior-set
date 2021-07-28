const body = document.querySelector('body');
const insert = `
<form class="create-user-form">
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя" />
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль" />
</label>
<button type="submit">
    Подтвердить
</button>
</form>
`;
body.innerHTML = insert + body.innerHTML;