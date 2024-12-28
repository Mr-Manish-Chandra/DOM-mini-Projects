function colorSwitcher(){
  const buttons = document.querySelectorAll(".button");
//console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    const color = event.target.id;
    body.style.backgroundColor = color;
  });
});

}

colorSwitcher()

const container = document.getElementsByClassName("container")[0];

const input = document.getElementById("urColor");
const addNew = document.getElementById("addBtn");
addNew.addEventListener("click", function () {
  const userColor = input.value;

  const span = document.createElement("span");
  span.className = "button";
  span.id = userColor;
  span.style.backgroundColor = userColor;

  container.appendChild(span);
  colorSwitcher()

});
