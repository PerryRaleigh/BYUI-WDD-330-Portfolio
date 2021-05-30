var addButton = document.getElementById("addTodo")!;
var todoItem: HTMLInputElement = (<HTMLInputElement>document.getElementById("todoItem"));
var todoList: HTMLUListElement = (<HTMLUListElement>document.getElementById("todoList"));
var todoItems: HTMLLIElement[] = [];

function addTodo() {
  if (todoItem.value.length === 0) {
    alert("Please enter a short description");
  } else {
    let storageLen: string = localStorage.length.toString();

    localStorage.setItem(storageLen, todoItem.value);
    loadTodoList();
    clearInput();
  }
}

function loadTodoList() {
  let newLi: HTMLLIElement;
  let newText: Text;
  let newSpan: HTMLSpanElement;
  let done: HTMLButtonElement;
  let todoListLen: number;

  Object.keys(localStorage).forEach(key => {
    todoListLen = document.getElementById("todoList").getElementsByTagName("LI").length;
    newLi = (<HTMLLIElement>document.createElement("li"));
    newText = document.createTextNode(localStorage.getItem(key));
    done = document.createElement("button");
    done.appendChild(document.createTextNode("Done"));
    done.addEventListener("click", markDone);
    newSpan = document.createElement("span");
    newSpan.appendChild(done);
    newSpan.classList.add("close");
    newLi.appendChild(newText);
    newLi.appendChild(newSpan);
    todoList.insertBefore(newLi, todoList.childNodes[todoListLen - 1]);

    function markDone() {
      newLi.classList.toggle("strikeThrough");
    }

    function deleteListItem() {
      newLi.classList.add("delete");
    }

  });
}

function clearInput() {
  todoItem.value = "";
  todoItem.focus();
}

function filterView() {

}