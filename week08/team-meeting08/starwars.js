async function getPeople() {
  let apiString = "https://swapi.dev/api/people";


  const response = await fetch(apiString);
  const jsonData = await response.json();
  let characterTableBody = document.getElementById("characterTableBody");

  // Delete the rows from prior repos, if any
  for (var i = characterTableBody.rows.length; i > 0; i--) {
    characterTableBody.deleteRow(i - 1);
  }

  console.table(jsonData.results);

  jsonData.results.forEach(person => {
    newRow = characterTableBody.insertRow(characterTableBody.rows.length);
    newCell1 = newRow.insertCell(0);
    newCell1.className = "tableBorder";
    newCell1.innerHTML = person.name;
    detailsButton = document.createElement("button");
    detailsButton.appendChild(document.createTextNode("Display Details"));
    detailsButton.addEventListener("click", displayDetails);
    newCell2 = newRow.insertCell(1);
    newCell2.className = "tableBorder";
    newCell2.appendChild(detailsButton);

  });

  function displayDetails() {
    alert("Display Details comming soon!");
  }

}

// getPeople();
