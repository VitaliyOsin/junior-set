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
 ];

 const template = (id,completed,text) => {
     const cel = el => document.createElement(el);

     const divTaskItem = cel('div');
     divTaskItem.className = 'task-item';
     divTaskItem.dataset.taskId = id;

     const divMainContainer = cel('div');
     divMainContainer.className = 'task-item__main-container';

     const divMainContent = cel('div');
     divMainContent.className = 'task-item__main-content';

     const form = cel('form');
     form.className = 'checkbox-form';

     const input = cel('input');
     input.className = 'checkbox-form__checkbox';
     input.id = `task-${id}`;
     input.type = 'checkbox';
     input.checked = completed;

     const label = cel('label');
     label.htmlFor = `task-${id}`;

     const span = cel('span');
     span.className = 'task-item__text';
     span.innerText = text;
     
    const button = cel('button');
    button.dataset.deleteTaskId = '5';
    ['task-item__delete-button', 'default-button', 'delete-button'].forEach(v => {
      button.classList.add(v);
    }); 
    button.innerText = 'Удалить';

     form.append(input);
     form.append(label);
     divMainContent.append(form);
     divMainContent.append(span);
     divMainContainer.append(divMainContent);
     divMainContainer.append(button);
     divTaskItem.append(divMainContainer);

     return divTaskItem;
 };

 const tasksList = document.querySelector('.tasks-list');

 tasks.forEach(v => {
     tasksList.append(template(v.id, v.completed, v.text));
 });