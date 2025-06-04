var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "Dice" + randomNumber1 + ".png";
var randomImageSource1 = randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "Dice" + randomNumber2 + ".png";
var randomImageSource2 = randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

document.querySelector("h1").innerHTML = "It's a draw!";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

