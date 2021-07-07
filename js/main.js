const links = [
  {
    label: "Mid-Term Todo Challenge",
    url: "challenge1-todo-list/todoList.html"
  },
  {
    label: "Week01 notes",
    url: "week01/index.html"
  },
  {
    label: "Week02 notes",
    url: "week02/index.html"
  },
  {
    label: "Week03 notes",
    url: "week03/index.html"
  },
  {
    label: "Week04 notes",
    url: "week04/index.html"
  },
  {
    label: "Week05 notes",
    url: "week05/index.html"
  },
  {
    label: "Week06 notes",
    url: "week06/index.html"
  },
  {
    label: "Week07 notes",
    url: "week07/index.html"
  },
  {
    label: "Week08 notes",
    url: "week08/index.html"
  },
  {
    label: "Week09 notes",
    url: "week09/index.html"
  },
  {
    label: "Week10 notes",
    url: "week10/index.html"
  },
  {
    label: "Week11 notes",
    url: "week11/index.html"
  },
  {
    label: "Week12 notes",
    url: "week12/index.html"
  },
  {
    label: "Week13 notes",
    url: "week13/index.html"
  },
  {
    label: "Week14 notes",
    url: "week14/index.html"
  },
  {
    label: "Final Project",
    url: "challenge2/countryInformation.html"
  }
]

function buildWeeks() {
  var oList = document.getElementById("weeksList");
  for (var i = 0; i < links.length; i++) {
    oList.innerHTML += "<li><a href='" + links[i].url + "'>" + links[i].label + "</a></li>";
  }
}

function loadStory() {
  var storyName = document.getElementById("name_input").value;
  var storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
  var storyName = document.getElementById("name_input").value;
  var storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
  var storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_display").innerHTML = storyHTML;
}
