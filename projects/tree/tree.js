treeData = [
  {
    name: "India",
    children: [
      {
        name: "maharashtra",
        children: [
          {
            name: "ratnagiri",
            children: [
              { name: "sangmeshwar" },
              { name: "chiplun" },
              { name: "khed" },
            ],
          },
          { name: "satara" },
        ],
      },
      { name: "UP", children: [{ name: "Varanasi" }, { name: "Mathura" }] },
    ],
  },
];

let list = ``;

function buildList(treeData, nested) {
  list += `<ul class=${nested ? "nested" : ""}>`;
  for (let index = 0; index < treeData.length; index++) {
    const element = treeData[index];
    list += `<li class=${element.children ? "caret" : ""}>${element.name}</li>`;
    if (element.children) {
      buildList(element.children, true);
    }
  }
  list += `</ul>`;
}
buildList(treeData);

document.body.innerHTML = list;

const caret = document.querySelectorAll(".caret");

for (let index = 0; index < caret.length; index++) {
  const element = caret[index];
  element.addEventListener("click", (e) => {
    let caret = e.target;
    let nestedElement = caret.nextElementSibling;
    nestedElement.classList.toggle("active");
    caret.classList.toggle("caret-down");
  });
}
