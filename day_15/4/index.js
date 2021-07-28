const loader = document.querySelector('span');
const dataContainer = document.querySelector('.data-container');

const renderPost = postId => {
    const post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    Promise.all([post, comments])
        .then(result => {
            const data = result.map(d => d.json());
            return Promise.all(data);
        })
        .then(d => {
            const [post, comments] = d;
            const poster = document.createElement('div');
            poster.id = 'post';
            poster.className = 'post';
            const postContent = `
                <h1 class="post__title">${post.title}</h1>
                <p class="post__text">${post.body}</p>
                <b class="post__comments-text">Комментарии</b>
            `;
            const postComents = document.createElement('div');
            postComents.className = 'post__comments';
            comments.forEach(c => {
                postComents.innerHTML += `<div class="post-comment">
                    <span class="post-comment__author">
                        ${c.email}
                    </span>
                    <span class="post-comment__text">
                        ${c.body}
                    </span>
                </div>`
            });
            poster.innerHTML = postContent;
            dataContainer.append(poster);
            dataContainer.append(postComents);
        })
        .finally(() => {
            loader.classList.toggle('loaderToggle');
        })
        .catch(error => {
            console.error('Error: ', error);
            dataContainer.innerHTML += '<h3 style="color:#ff0000">Не удалось загрузить данные.</h3>';
        })
}

renderPost(1);