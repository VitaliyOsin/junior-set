const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
 ]

 const template = (id,completed,text) => `
        <div class="task-item" data-task-id="${id}">
         <div class="task-item__main-container">
           <div class="task-item__main-content">
             <form class="checkbox-form">
               <input class="checkbox-form__checkbox" ${completed ? 'checked' : ''} type="checkbox" id="task-${id}">
               <label for="task-${id}"></label>
             </form>
             <span class="task-item__text">${text}</span>
           </div>
           <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
             Удалить
           </button>
         </div>
       </div>
 `;

 const tasksList = document.querySelector('.tasks-list');

 tasks.forEach(v => {
     tasksList.innerHTML += template(v.id, v.completed, v.text);
 });