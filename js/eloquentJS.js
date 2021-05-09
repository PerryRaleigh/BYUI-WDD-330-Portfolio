// Eloquent JavaScript Chapter 14 Exercises

const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

let mountainsTable = function () {
  let tableArea = document.getElementById("mountains");
  let mountTable = document.createElement("table");
  let tableHeadings = false;
  let rowNum = 0;

  for (const key in MOUNTAINS) {
    let newRow = mountTable.insertRow(rowNum++);

    if (tableHeadings !== true) {
      for (const key2 in MOUNTAINS[key]) {
        let th = document.createElement("th");
        let newNode = document.createTextNode(key2);
        th.appendChild(newNode);
        newRow.appendChild(th);
        console.log(key2);
      }
      tableHeadings = true;
      mountTable.appendChild(newRow);
      newRow = mountTable.insertRow(rowNum++);
    }
    for (const key2 in MOUNTAINS[key]) {
      let td = document.createElement("td");
      let newNode = document.createTextNode(MOUNTAINS[key][key2]);
      td.appendChild(newNode);
      if (!Number.isNaN(MOUNTAINS[key][key2])) {
        td.style.textAlign = "right";
      }
      newRow.appendChild(td);
    }
    mountTable.appendChild(newRow);
  }
  tableArea.appendChild(mountTable);
}

mountainsTable();