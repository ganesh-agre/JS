const tableData = [
  ["Ganesh", 34, "BE"],
  ["Amrut", 30, "MA"],
  ["prashant", 29, "ME"],
];

function createTable() {
  const tableContainer = document.querySelector(".table-container");
  // create table

  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  tbody.addEventListener("dblclick", updateData);
  // create header
  const thead = document.createElement("thead");
  const td1 = document.createElement("td");
  td1.append(document.createTextNode("Name"));
  const td2 = document.createElement("td");
  td2.append(document.createTextNode("Age"));
  const td3 = document.createElement("td");
  td3.append(document.createTextNode("Qualification"));

  thead.append(...[td1, td2, td3]);
  table.append(thead);
  // create tbody
  const tr = document.createElement("tr");
  for (let rowCounter = 0; rowCounter < tableData.length; rowCounter++) {
    const tr = document.createElement("tr");
    tr.setAttribute("data-index", rowCounter);
    for (
      let columnCouter = 0;
      columnCouter < tableData[rowCounter].length;
      columnCouter++
    ) {
      const td = document.createElement("td");
      td.setAttribute("data-index", columnCouter);
      td.append(document.createTextNode(tableData[rowCounter][columnCouter]));
      tr.append(td);
    }

    tbody.append(tr);
  }
  table.append(tbody);
  tableContainer.append(table);
}

function updateData(e) {
  if (e.target.matches("td")) {
    //create input to edit value
    const input = document.createElement("input");
    input.value = e.target.innerText;
    e.target.textContent = "";
    e.target.append(input);

    const rowIndex = e.target.closest("tr").dataset.index;
    const columnIndex = e.target.closest("td").dataset.index;

    input.addEventListener("blur", () => {
      e.target.textContent = input.value;
      tableData[rowIndex][columnIndex] = input.value;
      console.log(tableData);
      input.remove();
    });
  }
}

createTable();
