console.log(`salom`);
const elFirst = document.querySelector(".first__gamer");
const firstImg = document.querySelector(".img1");
const title = document.querySelector(".title");
const gamer1 = document.querySelector(".gamer1");
const gamer2 = document.querySelector(".gamer2");
const btn = document.querySelector(".btn");
const winner = document.querySelector(".win");

const arr = [`tosh`, `qogoz`, `qaychi`];

function game() {
  var numRandom1 = Math.floor(Math.random() * arr.length);
  var numRandom = Math.floor(Math.random() * arr.length);

  gamer1.innerHTML = arr[numRandom];
  gamer2.innerHTML = arr[numRandom1];

  if (numRandom === numRandom1) {
    winner.textContent = `Durrang`;
  } else if (numRandom === 0 && numRandom1 === 1) {
    winner.textContent = `G'olib: 2 - oyinchi`;
  } else if (numRandom === 0 && numRandom1 === 2) {
    winner.textContent = `G'olib: 1 - oyinchi`;
  } else if (numRandom === 1 && numRandom1 === 0) {
    winner.textContent = `G'olib: 1 - oyinchi`;
  } else if (numRandom === 1 && numRandom1 === 2) {
    winner.textContent = `G'olib: 2 - oyinchi`;
  } else if (numRandom === 2 && numRandom1 === 0) {
    winner.textContent = `G'olib: 1 - oyinchi`;
  } else if (numRandom === 0 && numRandom1 === 1) {
    winner.textContent = `G'olib: 2 - oyinchi`;
  }
}

console.log(title);
console.log(gamer1);
