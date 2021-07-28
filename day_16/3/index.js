const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

const loader = document.querySelector('span');
const dataContainer = document.querySelector('.data-container');
const ul = document.createElement('ul');

const renderAlbums = async () => {
    try{
        const result = await fetch(ALBUMS_URL);
        let resp;
        if(result.ok){
            resp = await result.json();
        }
        resp.forEach( r => {
            const text = r.title.length > 60 ? r.title.slice(0,60)+'...' : r.title;
            ul.innerHTML += `<li>${text}</li>`;
        });
        dataContainer.append(ul);
    }catch(error){
        console.log(error);
    }finally{
        loader.classList.toggle('loaderToggle');
    }
}

renderAlbums();