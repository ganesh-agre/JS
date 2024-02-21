const pages = 5;
let currentSelectedPage;
function createPagingToolbar() {
  const pagingItems = [];
  let element;
  // add prev button
  element = document.createElement("a");
  element.setAttribute("href", "#");
  element.setAttribute("data-page-number", "prev");
  element.innerText = "<<";
  pagingItems.push(element);
  for (let index = 0; index < 5; index++) {
    element = document.createElement("a");
    element.innerText = index + 1;
    element.setAttribute("href", "#");
    element.setAttribute("data-page-number", index + 1);
    if (!index) element.setAttribute("class", "active");

    pagingItems.push(element);
  }
  //add next button
  element = document.createElement("a");
  element.setAttribute("href", "#");
  element.setAttribute("data-page-number", "next");
  element.innerText = ">>";
  pagingItems.push(element);
  const paginationParent = document.querySelector(".pagination");
  paginationParent.append(...pagingItems);
  paginationParent.addEventListener("click", pageClick);
}

function pageClick(e) {
  if (e.target.matches("a")) {
    if (e.target.dataset.pageNumber === "prev") {
      currentSelectedPage =
        currentSelectedPage !== 1
          ? currentSelectedPage - 1
          : currentSelectedPage;
    } else if (e.target.dataset.pageNumber === "next") {
      currentSelectedPage =
        currentSelectedPage !== pages
          ? parseInt(currentSelectedPage) + 1
          : currentSelectedPage;
    } else {
      currentSelectedPage = parseInt(e.target.dataset.pageNumber);
    }

    document.querySelector(
      ".clickedpage"
    ).innerText = `${currentSelectedPage} Selected`;

    highlighSelecetdPage(currentSelectedPage);
  }
}

function highlighSelecetdPage(page) {
  document.querySelector(".active").classList.remove("active");
  document
    .querySelector(`[data-page-number="${page}"]`)
    .classList.add("active");
}

createPagingToolbar();
