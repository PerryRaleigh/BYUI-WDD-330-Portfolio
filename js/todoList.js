var addButton = document.getElementById("addTodo");
var category = document.getElementById("todoCat");
var descShort = document.getElementById("todoShort");
var descLong = document.getElementById("todoLong");
var todoList = document.getElementById("todoList");
var showCat = document.getElementById("showCat");
var showDesc = document.getElementById("showDesc");
var options = document.getElementById("categories").getElementsByTagName("option");
var optionVals = [];
function addTodo() {
    if (category.value.length === 0) {
        alert("Please select or enter a category");
    }
    else {
        if (descShort.value.length === 0) {
            alert("Please enter a short description");
        }
        else {
            if (descLong.value.length === 0) {
                descLong = descShort;
            }
            getCategoryList();
            if (!optionVals.find(checkCategory)) {
                addCategory(category.value);
            }
            function checkCategory(optionVal) {
                return optionVal === category.value;
            }
            let newLi = document.createElement("li");
            let newText = document.createTextNode(descShort.value);
            newLi.appendChild(newText);
            todoList.appendChild(newLi);
            var done = document.createElement("button");
            done.appendChild(document.createTextNode("Done"));
            newLi.appendChild(done);
            done.addEventListener("click", markDone);
            function markDone() {
                newLi.classList.toggle("strikeThrough");
            }
            var delBtn = document.createElement("button");
            delBtn.appendChild(document.createTextNode("Delete"));
            newLi.appendChild(delBtn);
            delBtn.addEventListener("click", deleteListItem);
            function deleteListItem() {
                newLi.classList.add("delete");
            }
            newLi.classList.toggle("selected");
            showCat.innerHTML = "Category: " + category.value;
            showDesc.innerHTML = "Description: " + descLong.value;
            clearInput();
        }
    }
}
function addCategory(toAdd) {
    alert("Adding category " + toAdd);
}
function getCategoryList() {
    for (let index = 0; index < options.length; index++) {
        optionVals.push(options[index].value);
    }
}
function clearInput() {
    category.value = "";
    descShort.value = "";
    descLong.value = "";
}
