const container = document.getElementsByClassName("container")[0];

const height = document.getElementById("height");

const weight = document.getElementById("weight");

const calculate = document.getElementById("btn");

const result = document.getElementById("results");

calculate.addEventListener("click", function () {
  console.log(height);
  console.log(weight);

  const output =
    (parseFloat(weight.value) * 10000) /
    (parseFloat(height.value) * parseFloat(height.value));

  result.textContent = `Your BMI is ${output.toFixed(2)}`;

  suggestion(output);
});

function suggestion(input) {
  const newDiv = document.createElement("div");

  if (input < 18.6) {
    newDiv.textContent = `You need to eat in surpluse CALORIES`;
    newDiv.style.color = "green";
  } else if (input >= 18.6 && input <= 24.9) {
    newDiv.textContent = `You are in Normal range`;
    newDiv.style.color = "yellow";
  } else if (input > 24.9) {
    newDiv.textContent = `You need to eat in CALORIES deficit`;
    newDiv.style.color = "red";
  }

  container.appendChild(newDiv);
}
