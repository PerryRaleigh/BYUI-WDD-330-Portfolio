var addButton = document.getElementById("addTodo");
var todoItem = document.getElementById("todoItem");
var todoList = document.getElementById("todoList");
var todoItems = [];
function addTodo() {
    if (todoItem.value.length === 0) {
        alert("Please enter a short description");
    }
    else {
        var storageLen = localStorage.length.toString();
        localStorage.setItem(storageLen, todoItem.value);
        loadTodoList();
        clearInput();
    }
}
function loadTodoList() {
    var newLi;
    var newText;
    var newSpan;
    var done;
    var todoListLen;
    Object.keys(localStorage).forEach(function (key) {
        todoListLen = document.getElementById("todoList").getElementsByTagName("LI").length;
        newLi = document.createElement("li");
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
