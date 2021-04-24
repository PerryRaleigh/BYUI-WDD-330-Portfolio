const links = [
    {
      label: "Week01 notes",
      url: "week01/index.html"
    }
  ]

    function buildWeeks() {
    var oList = document.getElementById("weeksOL");
    for (var i = 0; i < links.length; i++) {
      oList.innerHTML += "<li><a href='" + links[i].url +"</a></li>";
  }
}

document.getElementById("myWork").innerHTML = buildWeeks();
