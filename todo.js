todoList = [];
displayItems(); 
function addtodo() {
  let inputElement = document.querySelector('#todo-input');

  let dateElement = document.querySelector('#todo-date');
  let todoitem = inputElement.value;
  let tododate = dateElement.value;
  todoList.push({item: todoitem , duedate : tododate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
  
}


function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  
  for (let i = 0 ; i < todoList.length ; i++) {
    let item = todoList[i].item
    let date = todoList[i].duedate
  
    // let {item, date} = todoList[i];
    newHtml += `
    
    <span>${item}</span>
    <span>${date}</span>
    <button class='btn-delete' onclick="todoList.splice(${i}, 1);
    displayItems();">Delete</button>
    
  `;

   
}

containerElement.innerHTML = newHtml;
}