const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; 
// 아래의 toDos = parseToDos를 지정함으로서 배열에 저장한다.
// 이후의 새로운 값들은 다른 값이 저장된 배열(toDos)에 저장되는 것이다. <-- 덮어쓰기 막기 -->

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; 
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.style.borderRadius="5px";
    button.style.background="none";
    button.style.margin = "15px";
    

    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    toDoList.style.position = "absolute";
    toDoList.style.zIndex = "100";
    toDoList.style.top = "417px";
    toDoList.style.left="100px";
    toDoList.style.fontWeight = "100";
    toDoList.style.fontSize="27px";
}

function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newTodo = toDoInput.value;
    toDoInput.value = ""; /* input 칸 비우기 */
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null)  {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
        // forEach는 해당 요소의 값을 순회한다.    
}


