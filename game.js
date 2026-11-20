const cards = [
  "🐶",
  "🐸",
  "🦊",
  "🐱",
  "🐼",
  "🐶",
  "🐵",
  "🦊",
  "🐱",
  "🐵",
  "🐸",
  "🐼",
];
const info = document.getElementById("info");
const board = document.getElementById("board");
const table = document.getElementById("table");

let firstIndex = null;
let secondIndex = null;
let pairs = 0;

function flip(index) {
  if (firstIndex === null) {
    firstIndex = index;
    const card = document.getElementById("card" + index);
    card.textContent = cards[index];
    return;
  }
  if (secondIndex === null) {
    secondIndex = index;
    const card = document.getElementById("card" + index);
    card.textContent = cards[index];

    if (cards[firstIndex] === cards[secondIndex]) {
      pairs++;
      info.textContent = "Олсон хос: " + pairs + " / 6";
      firstIndex = null;
      secondIndex = null;
      if (pairs === 6) {
        table.textContent = "🧠 Memory Game тоглоомд та хожлоо баяр хүргье";
        setTimeout(memory, 4000);
      }
    } else {
      setTimeout(hideCard, 1000);
    }
  }
}
function hideCard() {
  const firstCard = document.getElementById("card" + firstIndex);
  const secondCard = document.getElementById("card" + secondIndex);
  firstCard.textContent = "❓";
  secondCard.textContent = "❓";
  firstIndex = null;
  secondIndex = null;
}

function secHarah() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.getElementById("card" + i);
    card.textContent = cards[i];
    setTimeout(memory, 3000);
  }
}

function memory() {
  for (let i = 0; i < cards.length; i++) {
    pairs = 0;
    const card = document.getElementById("card" + i);
    table.textContent = "🧠 Memory Game ";
    card.textContent = "❓";
    info.textContent = "Олсон хос: " + pairs + " / 6";
  }
}
