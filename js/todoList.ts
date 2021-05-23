var addButton = document.getElementById("addTodo")!;
var category: HTMLInputElement = (<HTMLInputElement>document.getElementById("todoCat"));
var descShort: HTMLInputElement = (<HTMLInputElement>document.getElementById("todoShort"));
var descLong: HTMLInputElement = (<HTMLInputElement>document.getElementById("todoLong"));
var todoList: HTMLUListElement = (<HTMLUListElement>document.getElementById("todoList"));
var showCat: HTMLParagraphElement = (<HTMLParagraphElement>document.getElementById("showCat"));
var showDesc: HTMLParagraphElement = (<HTMLParagraphElement>document.getElementById("showDesc"));
var options: HTMLCollectionOf<HTMLOptionElement> = document.getElementById("categories")!.getElementsByTagName("option");
var optionVals: string[] = [];

function addTodo() {
  if (category.value.length === 0) {
    alert("Please select or enter a category");
  } else {
    if (descShort.value.length === 0) {
      alert("Please enter a short description");
    } else {
      if (descLong.value.length === 0) {
        descLong = descShort;
      }

      getCategoryList();

      if (!optionVals.find(checkCategory)) {
        addCategory(category.value);
      }

      function checkCategory(optionVal: string) {
        return optionVal === category.value;
      }

      let newLi: HTMLLIElement = (<HTMLLIElement>document.createElement("li"));
      let newText: Text = document.createTextNode(descShort.value);

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

function addCategory(toAdd: string) {
alert("Adding category " + toAdd)
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
