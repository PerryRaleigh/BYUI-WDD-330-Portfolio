async function getPeople(){
  let apiString = "https://swapi.dev/api/people";


const response = await fetch (apiString);
const jsonData = await response.json();
document.getElementById("jsonRaw").innerHTML=jsonData.results[0].name;
console.table(jsonData);

}

getPeople();
