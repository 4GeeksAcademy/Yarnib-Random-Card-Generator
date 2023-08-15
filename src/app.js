/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const suits = ["♦", "♥", "♠", "♣"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomCard() {
  const suit = getRandomElement(suits);
  const value = getRandomElement(values);

  const card = document.querySelector(".card");
  const topLeftIcon = card.querySelector(".top-left");
  const bottomRightIcon = card.querySelector(".bottom-right");
  const valueDisplay = card.querySelector(".value");

  topLeftIcon.textContent = suit;
  bottomRightIcon.textContent = suit;
  valueDisplay.textContent = value;

  if (suit === "♦" || suit === "♥") {
    topLeftIcon.style.color = "red";
    bottomRightIcon.style.color = "red";
  } else {
    topLeftIcon.style.color = "black";
    bottomRightIcon.style.color = "black";
  }
}

// Generate a random card on page load
generateRandomCard();

// Add event listener to the button
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateRandomCard);

// Add timer to generate a new card every 10 seconds
setInterval(generateRandomCard, 10000);

// Allow user to specify card width and height
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const card = document.querySelector(".card");

widthInput.addEventListener("input", function() {
  card.style.width = `${widthInput.value}px`;
});

heightInput.addEventListener("input", function() {
  card.style.height = `${heightInput.value}px`;
});
