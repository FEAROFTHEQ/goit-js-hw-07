function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

function changeBodyColor(){
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  body.style.backgroundColor = `${randomColor}`;
}

changeBtn.addEventListener("click", changeBodyColor);
