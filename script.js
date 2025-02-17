const slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
  console.log(index);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
  console.log(index);
});
