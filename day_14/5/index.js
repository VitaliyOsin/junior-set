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

 let countId = 4;
 let numberToDelete = 0;

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
           <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${id}">
             Удалить
           </button>
         </div>
       </div>
 `;

 const showTasks = () => {
    const tasksList = document.querySelector('.tasks-list');
    if(tasks.length > 0){
        tasksList.innerHTML = '';
        tasks.forEach(v => {
            tasksList.innerHTML += template(v.id, v.completed, v.text);
        });
    }else{
        tasksList.innerHTML = '<div style="font-family:Arial,Ubuntu;font-size:2.2rem;color:#5A5895">Задач пока нет.</div>';
    }
    
 }

 const showWarn = text => {
    hideWarn();
     const createTaskBlockForm = document.querySelector('.create-task-block');
     const errorSpan = document.createElement('span');
     errorSpan.className = 'error-message-block';
     errorSpan.innerText = text;
     createTaskBlockForm.append(errorSpan);
 }

 const hideWarn = () => {
     if(document.querySelector('.error-message-block')){
        document.querySelector('.error-message-block').remove();
     }
 }

 const removeTask = id => {
     const n = tasks.findIndex(v => v.id === Number(id));
     tasks.splice(n,1);
     showTasks();
 }

 const insertModal = () => {
     const cel = el => document.createElement(el);

     const modalTemplate = cel('div');
     modalTemplate.classList.add('modal-overlay');
     modalTemplate.classList.toggle('modal-overlay_hidden');

     const deleteModal = cel('delete-modal');
     deleteModal.className = 'delete-modal';

     const hThree = cel('h3');
     hThree.className = 'delete-modal__question';
     hThree.innerText = 'Вы действительно хотите удалить эту задачу?';

     const deleteModalButtons = cel('delete-modal__buttons');
     deleteModalButtons.className = 'delete-modal__buttons';
     deleteModalButtons.innerHTML = `
                    <button class="delete-modal__button delete-modal__cancel-button">
                        Отмена
                    </button>
                    <button class="delete-modal__button delete-modal__confirm-button">
                        Удалить
                    </button>
     `;
     deleteModalButtons.addEventListener('click', e => {
     
        const { target } = e;
        if(target.classList.contains('delete-modal__cancel-button')){
            hideModal();
        }else if(target.classList.contains('delete-modal__confirm-button')){
            removeTask(numberToDelete);
            hideModal();
        }else{
            hideModal();
        }
    });

    deleteModal.append(hThree);
    deleteModal.append(deleteModalButtons);
    modalTemplate.append(deleteModal);
     
    const tasksEl = document.querySelector('#tasks');
    tasksEl.insertAdjacentElement('afterend', modalTemplate);
 }

 const togModal = () => {
    document.querySelector('.modal-overlay').classList.toggle('modal-overlay_hidden');
 }

 const showModal = () => {
     togModal();
 }

 const hideModal = () => {
     togModal();
     numberToDelete = 0;
 }

 insertModal();
 showTasks();
 

 const createForm = document.querySelector('.create-task-block');
 
 createForm.addEventListener('submit', e => {
    e.preventDefault();
    const { target } = e;
    const input = target.querySelector('input[name="taskName"]');

    if(input.value){
        const coin = tasks.find(v => v.text === input.value);
        hideWarn();
        if(coin){
            showWarn('Задача с таким названием уже существует.');
        }else{
            tasks.unshift({
                id: countId,
                completed: false,
                text: input.value.trim()
            });
        
            countId++;
            input.value = '';
            input.focus()
             
            showTasks();
            hideWarn();
        }
    }else{
        showWarn('Название задачи не должно быть пустым');
    }
     
 });

 const tasksListG = document.querySelector('.tasks-list');

 tasksListG.addEventListener('click', e => {
     const { target } = e;
     if(target.classList.contains('task-item__delete-button')){
        numberToDelete = target.dataset.deleteTaskId;
        showModal();
     }
 });
