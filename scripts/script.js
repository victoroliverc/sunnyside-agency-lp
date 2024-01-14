const btnMenu = document.querySelector("#burger-btn");
const floatMenu = document.querySelector("#float-menu");
let isOpen = false;

function handleToggleMenu() {
  if (isOpen) {
    floatMenu.style.visibility = "hidden";
  } else {
    floatMenu.style.visibility = "visible";
  }
  isOpen = !isOpen;
}

btnMenu.addEventListener("click", handleToggleMenu);
