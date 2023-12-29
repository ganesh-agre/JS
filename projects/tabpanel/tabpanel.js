let selectedTabIndex = 0;
const allTabs = document.querySelectorAll(".tab-body");
const allTabHeaders = document.querySelectorAll(".tab-header");
const tabPanelHeader = document.querySelector(".tab-panel-header");
tabPanelHeader.addEventListener("click", handleTabHeaderClick);
showTabPanel(selectedTabIndex);

function showTabPanel(n) {
  for (let index = 0; index < allTabs.length; index++) {
    const tabBodyElement = allTabs[index];
    const tabHeaderElement = allTabHeaders[index];
    if (n === index) {
      tabBodyElement.style.display = "flex";
      tabHeaderElement.classList.add("active-tab-header");
    } else {
      tabBodyElement.style.display = "none";
      tabHeaderElement.classList.remove("active-tab-header");
    }
  }
}

function handleTabHeaderClick(e) {
  if (e.target.matches(".tab-header")) {
    showTabPanel(parseInt(e.target.dataset.tabindex));
  }
}
