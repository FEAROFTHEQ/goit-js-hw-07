function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");


function createBoxes(amount){
  amount=input.value;
  if (amount >= 1 && amount <= 100){
    let markup="";
    let width=30;
    let height=30;
    for(let i = 1; i<=amount; i++){
      divBoxes.innerHTML="";
      const randomColor=getRandomHexColor();
      markup += `<div style="width: ${width}px; height: ${height}px; background-color: ${randomColor};"></div>`;
      width+=10;
      height+=10;
    }
    divBoxes.insertAdjacentHTML("afterbegin", markup);
  }
  input.value = '';
}

function destroyBoxes(){
  divBoxes.innerHTML="";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);