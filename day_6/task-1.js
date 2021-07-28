const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';
const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();

existedUserLogin === userLogin && existedUserPassword === userPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert(`Логин и(или) Пароль введены неверно!`);