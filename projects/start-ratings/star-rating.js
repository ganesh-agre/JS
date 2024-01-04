const stars = document.querySelectorAll(".fa");

for (let index = 0; index < stars.length; index++) {
  let element = stars[index];
  element.addEventListener("click", selectStarts(element));
}

function selectStarts(selecetdElement) {
  return function () {
    for (let index = 0; index < stars.length; index++) {
      let element = stars[index];
      if (index < parseInt(selecetdElement.dataset.number)) {
        element.classList.add("checked");
      } else {
        element.classList.remove("checked");
      }
    }
  };
}
