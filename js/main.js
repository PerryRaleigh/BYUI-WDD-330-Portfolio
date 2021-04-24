const links = [
    {
      label: "Week01 notes",
      url: "week01/index.html"
    }
  ]

  var weeksList = { 
    buildWeeks: function() {
      var oList = document.getElementById("weeksOL");
      for (var i = 0; i < links.length; i++) {
        oList.innerHTML += "<li><a href='" + links[i].url +"</a></li>";
    }
  }
}

var makeTheList = weeksList.buildWeeks.call();
document.getElementById("myWork").innerHTML = makeTheList;
