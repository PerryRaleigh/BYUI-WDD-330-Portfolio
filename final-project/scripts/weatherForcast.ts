const officeLocations = [
  { city: "Birmingham", state: "Alabama", callSign: "BMX" },
  { city: "Huntsville", state: "Alabama", callSign: "HUN" },
  { city: "Flagstaff", state: "Arizona", callSign: "FGZ" },
  { city: "Tucson", state: "Arizona", callSign: "TWC" },
  { city: "Los Angeles/Oxnard", state: "California", callSign: "LOX" },
  { city: "Sacramento", state: "California", callSign: "STO" },
  { city: "San Diego", state: "California", callSign: "SGX" },
  { city: "San Francisco Bay Area/Monterey", state: "California", callSign: "MTR" },
  { city: "San Joaquin Valley/Hanford", state: "California", callSign: "HNX" },
  { city: "Denver - Boulder", state: "Colorado", callSign: "BOU" },
  { city: "Grand Junction", state: "Colorado", callSign: "GJT" },
  { city: "Pueblo", state: "Colorado", callSign: "PUB" },
  { city: "Jacksonville", state: "Florida", callSign: "JAX" },
  { city: "Key West", state: "Florida", callSign: "KEY" },
  { city: "Melbourne", state: "Florida", callSign: "MLB" },
  { city: "Miami", state: "Florida", callSign: "MFL" },
  { city: "Tallahassee", state: "Florida", callSign: "TAE" },
  { city: "Tampa", state: "Florida", callSign: "TBW" },
  { city: "Peachtree City/Atlanta", state: "Georgia", callSign: "FFC" },
  { city: "Guam", state: "Guam", callSign: "GUM" },
  { city: "Honolulu", state: "Hawaii", callSign: "HFO[6]" },
  { city: "Boise", state: "Idaho", callSign: "BOI" },
  { city: "Pocatello", state: "Idaho", callSign: "PIH" },
  { city: "Chicago", state: "Illinois", callSign: "LOT" },
  { city: "Lincoln", state: "Illinois", callSign: "ILX" },
  { city: "Indianapolis", state: "Indiana", callSign: "IND" },
  { city: "Northern Indiana (Syracuse)", state: "Indiana", callSign: "IWX" },
  { city: "Davenport/Quad Cities", state: "Iowa", callSign: "DVN" },
  { city: "Des Moines", state: "Iowa", callSign: "DMX" },
  { city: "Dodge City", state: "Kansas", callSign: "DDC" },
  { city: "Goodland", state: "Kansas", callSign: "GLD" },
  { city: "Topeka", state: "Kansas", callSign: "TOP" },
  { city: "Wichita", state: "Kansas", callSign: "ICT" },
  { city: "Jackson", state: "Kentucky", callSign: "JKL" },
  { city: "Louisville", state: "Kentucky", callSign: "LMK" },
  { city: "Paducah", state: "Kentucky", callSign: "PAH" },
  { city: "Lake Charles", state: "Louisiana", callSign: "LCH" },
  { city: "New Orleans/Baton Rouge", state: "Louisiana", callSign: "LIX" },
  { city: "Shreveport", state: "Louisiana", callSign: "SHV" },
  { city: "Caribou", state: "Maine", callSign: "CAR" },
  { city: "Gray/Portland", state: "Maine", callSign: "GYX" },
  { city: "Boston/Norton", state: "Massachusetts", callSign: "BOX" },
  { city: "Detroit/Pontiac", state: "Michigan", callSign: "DTX" },
  { city: "Gaylord", state: "Michigan", callSign: "APX" },
  { city: "Grand Rapids", state: "Michigan", callSign: "GRR" },
  { city: "Marquette", state: "Michigan", callSign: "MQT" },
  { city: "Chanhassen/Twin Cities", state: "Minnesota", callSign: "MPX" },
  { city: "Duluth", state: "Minnesota", callSign: "DLH" },
  { city: "Jackson", state: "Mississippi", callSign: "JAN" },
  { city: "Kansas City/Pleasant Hill", state: "Missouri", callSign: "EAX" },
  { city: "Springfield", state: "Missouri", callSign: "SGF" },
  { city: "St. Louis", state: "Missouri", callSign: "LSX" },
  { city: "Billings", state: "Montana", callSign: "BYZ" },
  { city: "Glasgow", state: "Montana", callSign: "GGW" },
  { city: "Great Falls", state: "Montana", callSign: "TFX" },
  { city: "Missoula", state: "Montana", callSign: "MSO" },
  { city: "Hastings", state: "Nebraska", callSign: "GID" },
  { city: "North Platte", state: "Nebraska", callSign: "LBF" },
  { city: "Omaha/Valley", state: "Nebraska", callSign: "OAX" },
  { city: "Elko", state: "Nevada", callSign: "LKN" },
  { city: "Las Vegas", state: "Nevada", callSign: "VEF" },
  { city: "Reno", state: "Nevada", callSign: "REV" },
  { city: "Mount Holly/Philadelphia", state: "New Jersey", callSign: "PHI" },
  { city: "Albuquerque", state: "New Mexico", callSign: "ABQ" },
  { city: "Albany", state: "New York", callSign: "ALY" },
  { city: "Binghamton", state: "New York", callSign: "BGM" },
  { city: "Buffalo", state: "New York", callSign: "BUF" },
  { city: "New York/Upton", state: "New York", callSign: "OKX" },
  { city: "Newport/Morehead City", state: "North Carolina", callSign: "MHX" },
  { city: "Raleigh", state: "North Carolina", callSign: "RAH" },
  { city: "Wilmington", state: "North Carolina", callSign: "ILM" },
  { city: "Bismarck", state: "North Dakota", callSign: "BIS" },
  { city: "Grand Forks", state: "North Dakota", callSign: "FGF" },
  { city: "Cleveland", state: "Ohio", callSign: "CLE" },
  { city: "Wilmington (de facto “Cincinnati/Wilmington”)", state: "Ohio", callSign: "ILN" },
  { city: "Norman/Oklahoma City", state: "Oklahoma", callSign: "OUN" },
  { city: "Tulsa", state: "Oklahoma", callSign: "TSA" },
  { city: "Medford", state: "Oregon", callSign: "MFR" },
  { city: "Pendleton", state: "Oregon", callSign: "PDT" },
  { city: "Portland", state: "Oregon", callSign: "PQR" },
  { city: "Pittsburgh", state: "Pennsylvania", callSign: "PBZ" },
  { city: "State College", state: "Pennsylvania", callSign: "CTP" },
  { city: "San Juan", state: "Puerto Rico", callSign: "SJU" },
  { city: "Charleston", state: "South Carolina", callSign: "CHS" },
  { city: "Columbia", state: "South Carolina", callSign: "CAE" },
  { city: "Greenville-Spartanburg", state: "South Carolina", callSign: "GSP" },
  { city: "Aberdeen", state: "South Dakota", callSign: "ABR" },
  { city: "Rapid City", state: "South Dakota", callSign: "UNR" },
  { city: "Sioux Falls", state: "South Dakota", callSign: "FSD" },
  { city: "Memphis", state: "Tennessee", callSign: "MEG" },
  { city: "Morristown/Knoxville", state: "Tennessee", callSign: "MRX" },
  { city: "Nashville", state: "Tennessee", callSign: "OHX" },
  { city: "Amarillo", state: "Texas", callSign: "AMA" },
  { city: "Austin/San Antonio", state: "Texas", callSign: "EWX" },
  { city: "Brownsville", state: "Texas", callSign: "BRO" },
  { city: "Corpus Christi", state: "Texas", callSign: "CRP" },
  { city: "El Paso", state: "Texas", callSign: "EPZ" },
  { city: "Fort Worth-Dallas", state: "Texas", callSign: "FWD" },
  { city: "Houston/Galveston", state: "Texas", callSign: "HGX" },
  { city: "Lubbock", state: "Texas", callSign: "LUB" },
  { city: "Midland/Odessa", state: "Texas", callSign: "MAF" },
  { city: "San Angelo", state: "Texas", callSign: "SJT" },
  { city: "Salt Lake City", state: "Utah", callSign: "SLC" },
  { city: "Burlington", state: "Vermont", callSign: "BTV" },
  { city: "Baltimore/Washington", state: "Virginia", callSign: "LWX" },
  { city: "Blacksburg/Roanoke", state: "Virginia", callSign: "RNK" },
  { city: "Wakefield", state: "Virginia", callSign: "AKQ" },
  { city: "Seattle", state: "Washington", callSign: "SEW" },
  { city: "Spokane", state: "Washington", callSign: "OTX" },
  { city: "Charleston", state: "West Virginia", callSign: "RLX" },
  { city: "Green Bay", state: "Wisconsin", callSign: "GRB" },
  { city: "La Crosse", state: "Wisconsin", callSign: "ARX" },
  { city: "Milwaukee/Sullivan", state: "Wisconsin", callSign: "MKX" },
  { city: "Cheyenne", state: "Wyoming", callSign: "CYS" },
  { city: "Riverton", state: "Wyoming", callSign: "RIW" },
]

async function getForcast() {
  let forcastTable: HTMLTableElement = (<HTMLTableElement> document.getElementById("forcastTable"));
  let listBody: HTMLTableElement = (<HTMLTableElement> document.getElementById("forcastTableBody"));
  let office: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("officeLocation"));
  let apiString = "https://api.weather.gov/gridpoints/" + office.value + "/47,30/forecast";
  let newRow: HTMLTableRowElement;
  let newCell1: HTMLTableDataCellElement;
  let newCell2: HTMLTableDataCellElement;
  let newCell3: HTMLTableDataCellElement;

  console.log(apiString);

  document.getElementById("forcastParagraph").innerHTML = "";
  forcastTable.style.visibility = "visible";

  // Delete the rows from prior repos, if any
  for (var i = listBody.rows.length; i > 0; i--) {
    listBody.deleteRow(i - 1);
  }
  // retrieve the JSON data
  const response: Response = await fetch(apiString);
  const jsonData: any = await response.json();

  if (jsonData.status === 404 || jsonData.status === 500) {
    forcastTable.style.visibility = "hidden";
    document.getElementById("forcastParagraph").innerHTML = jsonData.detail;
    document.getElementById("forcastParagraph").style.color = "red";
    document.getElementById("forcastParagraph").style.fontSize = "larger";
  } else {
    let periods: number = jsonData.properties.periods.length;
    for (let index = 0; index < periods; index++) {
      console.table(jsonData.properties.periods[index]);
      newRow = listBody.insertRow(listBody.rows.length);
      newCell1 = newRow.insertCell(0);
      newCell2 = newRow.insertCell(1);
      newCell3 = newRow.insertCell(2);
      newCell1.className = "tableBorder";
      newCell2.className = "tableBorder";
      newCell3.className = "tableBorder";
      newCell1.innerHTML = jsonData.properties.periods[index].name;
      newCell2.innerHTML = jsonData.properties.periods[index].detailedForecast;
      newCell3.innerHTML = jsonData.properties.periods[index].temperature;
    }
  }
}

let buildSelect = function () {
  let sel: HTMLSelectElement = (<HTMLSelectElement> document.getElementById("officeLocation"));

  for (let i = 0; i < officeLocations.length; i++) {
    let newOpt: HTMLOptionElement = document.createElement('option');
    newOpt.innerHTML = officeLocations[i].state + ", " + officeLocations[i].city;
    newOpt.value = officeLocations[i].callSign;
    sel.appendChild(newOpt);
  }
}

buildSelect();