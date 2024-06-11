//Before without Date
//const todoList = [];

//After adding Date
const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-02-23",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  /* Before adding Date
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo} 
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button></p>`;
    todoListHTML = todoListHTML + html;
  }
    */

  //After Adding Date
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate; OR
    const { name, dueDate } = todoObject;

    /* before css
    const html = `<p>${name} ${dueDate}
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button></p>`;
    */

    //After Css
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-btn">Delete</button>`;

    todoListHTML = todoListHTML + html;
  }

  //My version
  /*
  let valHTML2 = "";
  for (let i = 0; i < todoList.length; i++) {
    let val = todoList[i];
    console.log(val);
    const valHTML = `<p>${val}</p>`;
    valHTML2 = valHTML2 + valHTML;
  }
    */

  // console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-dueDate-input");
  const dueDate = dateInputElement.value;

  //before
  //todoList.push(name);

  //after
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  //console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
