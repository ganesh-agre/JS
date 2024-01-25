const btnLoadData = document.querySelector("#loadData");
const btnLoadDataWithGet = document.querySelector("#loadDataWithGet");
const btnLoadDataWithPost = document.querySelector("#loadDataWithPost");
btnLoadData.addEventListener("click", loadData);
btnLoadDataWithGet.addEventListener("click", loadDataWithGet);
btnLoadDataWithPost.addEventListener("click", loadDataWithPost);

const table = document.createElement("table");
table.innerHTML = `<tr>    
    <th>Id</th>
      <th>Title</th>
      <th>Completed</th>
      </tr>`;

const memoCache = new Map();
function fetchdata(url) {
  if (memoCache["data"]) return memoCache["data"];

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      memoCache["data"] = data;
      return data;
    });
}

async function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  data = await fetchdata(url);
  displayData(data);
}

async function loadDataWithGet() {
  const paramsObject = { id: 2, userid: 1 };
  const params = Object.entries(paramsObject).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  );
  const url = `https://jsonplaceholder.typicode.com/todos?${params.join("&")}`;
  data = await fetchdata(url);
  displayData(data);
}

async function loadDataWithPost() {
  const paramsObject = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(paramsObject),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  displayData([data]);
}

function displayData(data) {
  const firstRow = table.rows[0];
  const tBody = table.querySelector("tbody");
  tBody.innerHTML = "";
  tBody.append(firstRow);
  data.forEach((element) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.append(document.createTextNode(element.id));
    const td2 = document.createElement("td");
    td2.append(document.createTextNode(element.title));
    const td3 = document.createElement("td");
    td3.append(document.createTextNode(element.completed));
    tr.append(td1, td2, td3);
    tBody.append(tr);
  });

  document.body.append(table);
}
