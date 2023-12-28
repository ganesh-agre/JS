let slideIndex = 0;
const allSlides = document.querySelectorAll(".slide");
const allDots = document.querySelectorAll(".dot");
showSlide(slideIndex);
function plusSlides(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function showSlide(n) {
  if (n > allSlides.length - 1 || n < 0) return;
  slideIndex = n;
  for (let index = 0; index < allSlides.length; index++) {
    const element = allSlides[index];
    const dotElement = allDots[index];
    if (index === n) {
      element.style.display = "flex";
      dotElement.classList.add("active-dot");
    } else {
      element.style.display = "none";
      dotElement.classList.remove("active-dot");
    }
  }
}
