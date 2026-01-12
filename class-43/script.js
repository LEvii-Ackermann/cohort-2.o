const bigElement = document.querySelector(".big");

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  bigElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
