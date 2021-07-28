const loader = document.querySelector('span');
const dataContainer = document.querySelector('.data-container');
const ul = document.createElement('ul');

const getUsersByIds = arrUserIds => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const allP = arrUserIds.map(id => fetch(`${url}/${id}`));
    Promise.all(allP)
        .then(result => {
            const users = result.map(r => r.json());
            return Promise.all(users);
        })
        .then(users => {      
            users.forEach(user => {
                ul.innerHTML += `<li><a href="http://${user.website}">${user.name}</a></li>`;
            });
            dataContainer.append(ul);
        })
        .catch(error => {
            console.error('Error: ', error);
            dataContainer.innerHTML += '<h3 style="color:#ff0000">Не удалось загрузить данные.</h3>';
        })
        .finally(() => {
            loader.classList.toggle('loaderToggle');
        })
}

getUsersByIds([5, 6, 2, 1]);