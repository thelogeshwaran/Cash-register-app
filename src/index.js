import "./styles.css";

var billAmount = document.querySelector("#bill");
var givenAmount = document.querySelector("#given");
var button = document.querySelector("button");
var output = document.querySelector("#notes");

var currencies = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];

function calculate() {
  var bill = parseInt(billAmount.value);
  var giv = parseInt(givenAmount.value);
  var balance = giv - bill;
  console.log(balance);

  if (bill == giv) {
    output.innerText = "No Balance";
  } else if (bill > giv) {
    output.innerText = "You have not given a sufficient amount!";
  } else {
    output.innerText = "Balance ₹ " + balance + "\n";
    var a = currencies.map((money) => {
      var notes = Math.floor(balance / money);
      balance = balance - money * notes;
      if (notes != 0) {
        output.innerText += "₹" + " " + money + " " + "x" + " " + notes + "\n";
      }
    });
  }
}

button.addEventListener("click", calculate);
