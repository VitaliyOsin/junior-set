const loader = document.querySelector('span');
const dataContainer = document.querySelector('.data-container');
const ul = document.createElement('ul');

const getFastestLoadedPhoto = ids => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const photosP = ids.map(id => fetch(`${url}/${id}`));
    Promise.race(photosP)
        .then(res => {
            return res.json();
        })
        .then(data => {
            const li = document.createElement('li');
            li.className = 'photo-item';
            li.innerHTML += `
                <img
                    class="photo-item__image"
                    src="${data.url}"
                />
                <h3 class="photo-item__title">
                    ${data.title}
                </h3> 
            `;
            dataContainer.append(li);
            console.log(data.id);
        })
        .finally(() => {
            loader.classList.toggle('loaderToggle');
        })
        .catch(error => {
            console.error('Error: ', error);
            dataContainer.innerHTML += '<h3 style="color:#ff0000">Не удалось загрузить данные.</h3>';
        })
        

}

getFastestLoadedPhoto([60, 12, 55]);