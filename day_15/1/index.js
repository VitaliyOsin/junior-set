const url = 'http://jsonplaceholder.typicode.com/users';

const result = fetch(url);
const loader = document.querySelector('span');
const dataContainer = document.querySelector('.data-container');
const ul = document.createElement('ul');

result
    .then(res => {
        let resp; 
        if(res.ok){
            resp = res.json();
        }
        return resp;
    })
    .then(resp => {
        console.log(resp);       
        resp.forEach(r => {
            ul.innerHTML += `<li><a href="http://${r.website}">${r.name}</a></li>`;
        });
        dataContainer.append(ul);
    })
    .catch(error => {
        console.log('Error: ', error)
    })
    .finally(() => {
        loader.classList.toggle('loaderToggle');
    });