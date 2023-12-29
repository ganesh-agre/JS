const accordionHeaders = document.querySelectorAll(".accordion");

for (let index = 0; index < accordionHeaders.length; index++) {
  const element = accordionHeaders[index];
  element.addEventListener("click", (e) => {
    const panel = e.target.nextElementSibling;
    // e.target.classList.toggle("active");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
      panel.style.display = "block";
    }
  });
}
