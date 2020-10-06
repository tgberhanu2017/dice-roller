console.log("hello Berhanu");

let rollButton = document.querySelector("#roll");
let numberOfRolls = document.querySelector("#number-of-rolls");
let totalSpan = document.querySelector("#total");
let showAllRollsButton = document.querySelector("#show-all-rolls");
let allRolls = document.querySelector("#all-rolls");

let dieRolls = [];
rollButton.addEventListener("click", function () {
  let diceInput = Number(numberOfRolls.value);
  let counter = 0;
  while (counter < diceInput) {
    dieRolls.push(Math.ceil(Math.random() * (6 - 1 + 1)));
    counter++;
  }
  // console.log(dieRolls);
  // console.log(dieRolls.reduce((a, b) => a + b, 0));
  totalSpan.innerHTML += dieRolls.reduce((a, b) => a + b, 0);
});

showAllRollsButton.addEventListener("click", function () {
  let counter = 0;
  while (counter < dieRolls.length) {
    allRolls.innerHTML += "<li>" + dieRolls[counter] + "</li>";
    counter++;
  }
});
