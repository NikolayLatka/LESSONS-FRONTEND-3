// // // const players = [
// // //   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// // //   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// // //   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
// // //   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
// // //   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// // // ];

// // // // Використовуючи 👆 масив об’єктів виконай наступні завдання:
// // // //map()
// // // // Отримати масив імен всіх гравців
// // // // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// // // // Збільшити кількість годин гравця по id. Переписати на тернарник
// // // //filter()
// // // // Отримати масив всіх гравців онлайн

// // // // const playersOnline = players.filter((player) => player.online);
// // // // console.log(playersOnline);

// // // // Отримати масив всіх гравців офлайн

// // // const playersOffline = players.filter((player) => !player.online);
// // // console.log(playersOffline);

// // // // Отримати масив всіх хардкорних гравців з часом більше 250

// // // const hardCorePlayers = players.filter((player) => player.timePlayed > 250);
// // // console.log(hardCorePlayers);

// // // //Find()
// // // // Знайти гравця по id

// // // const playerById = players.find((player) => player.id === "player-4");
// // // console.log(playerById);

// // // // Знайти гравця по імені

// // // const playerByName = players.find((player) => player.name === "Chelsy");
// // // console.log(playerByName);

// // // //every()
// // // // Перевірити чи всі гравці мають час більше 200

// // // const isTimeGood = players.every((player) => player.timePlayed > 200);
// // // console.log(isTimeGood);

// // // // some()
// // // // Перевірити чи всі гравці онлайн

// // // const isAnybodyOnline = players.some((player) => player.online);
// // // console.log(isAnybodyOnline);

// // // const players = [
// // //   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// // //   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// // //   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
// // //   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
// // //   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// // // ];

// // // const totalTime = players.reduce((acc, player) => {
// // //   const total = acc + player.timePlayed;
// // //   return total;
// // // }, 0);

// // // // console.log(totalTime);

// // // // 2  Порахувати загальну кількість товарів в кошику
// // // const cart = [
// // //   { label: "Apples", price: 100, quantity: 2 },
// // //   { label: "Bananas", price: 120, quantity: 3 },
// // //   { label: "Lemons", price: 70, quantity: 4 },
// // // ];

// // // const totalAmount = cart.reduce((acc, element) => {
// // //   return acc + element.quantity;
// // // }, 0);

// // // // console.log(totalAmount);

// // // const totalPrice = cart.reduce((acc, element) => {
// // //   return acc + element.price * element.quantity;
// // // }, 0);

// // // // console.log(totalPrice);

// // // //   3
// // // // Знайдіть середнє значення чисел в масиві
// // // const numbers4 = [1, 2, 3, 4, 5];

// // // const total2 = numbers4.reduce((acc, number) => {
// // //   return acc + number;
// // // }, 0);

// // // const average = total2 / numbers4.length;

// // // console.log(total2, average);

// // const players = [
// //   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// //   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// //   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
// //   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
// //   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// // ];

// // const sortedByName = players.toSorted((a, b) => a.name.lacaleCompare(b.name));
// // console.log(sortedByName);

// // // const sortedByTimePlayed = players.toSorted(
// // //   (a, b) => a.timePlayed - b.timePlayed
// // // );
// // // console.log(sortedByTimePlayed);

// // // const sortedByWorstPlayers = players.toSorted(
// // //   (a, b) => b.timePlayed - a.timePlayed
// // // );
// // // console.log(sortedByWorstPlayers);

// // const scores3 = [27, 2, 41, 4, 7, 3, 75];
// // // console.log(scores3.toSorted((a, b) => a - b)); // [2, 27, 3, 4, 41, 7, 75]

// // // Масив рядків сортується за алфавітом.
// // const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// // // console.log(students.toSorted());
// // // console.log(students.toSorted((a, b) => a.localeCompare(b)));
// // // Водночас порядковий номер великих літер менший, ніж у малих.
// // const letters = ["b", "B", "a", "A", "c", "C"];
// // // console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
// // // console.log(letters.toSorted((a, b) => a.localeCompare(b)));

// const titleColor = document.querySelector(".title");

// const buttonElement = document.querySelector(".button");

// function onButtonClick() {
//   console.log("Button clicked!");

//   titleColor.classList.toggle("title-color");
// }

// buttonElement.addEventListener("click", onButtonClick);

// console.log(titleColor);
// console.log(buttonElement);

// // 3. Написати програму яка буде виводити данні
// // введені в інпут в інтерфейс сторінки.

// const inputEl = document.querySelector(".js-input");
// const textEl = document.querySelector(".js-input-text");
// console.log(textEl);

// const onInputChange = (e) => {
//   console.log(e.currentTarget.value);
//   textEl.textContent = e.currentTarget.value;
// };

// inputEl.addEventListener("change", onInputChange);

// // inputEl.addEventListener("input", onInputChange);

// const openModalButton = document.querySelector('[ data-action="open-modal"]');

// const closeModalButton = document.querySelector('[data-action="close-modal"]');
// const onOpenModal = () => {
//   document.body.classList.add("show-modal");
// };
// openModalButton.addEventListener("click", onOpenModal);

// closeModalButton.console.log(closeModalButton);
// console.log(openModalButton);

// const openModalButton = document.querySelector('[ data-action="open-modal"]');

// const closeModalButton = document.querySelector('[data-action="close-modal"]');

// const onOpenModal = () => {
//   document.body.classList.add("show-modal");
// };

// const onCloseModal = () => {
//   document.body.classList.remove("show-modal");
// };

// closeModalButton.addEventListener("click", onCloseModal);

// openModalButton.addEventListener("click", onOpenModal);

const openModalButton = document.querySelector('[ data-action="open-modal"]');

const closeModalButton = document.querySelector('[data-action="close-modal"]');

const backDrop = document.querySelector(".js-backdrop");
console.log(openModalButton);
console.log(closeModalButton);
console.log(backDrop);

const onOpenModal = () => {
  window.addEventListener("keydown", onEscapePress);
  document.body.classList.add("show-modal");
};

const onCloseModal = () => {
  window.removeEventListener("keydown", onEscapePress);
  document.body.classList.remove("show-modal");
};

const onBackDropClick = (event) => {
  if (event.currentTarget === event.target) {
    console.log("Клікнули по BackDrop");
    onCloseModal();
  }
};

const onEscapePress = (event) => {
  event.preventDefault();
  if (event.code === "Escape") {
    console.log("клікнули по Escape");
    onCloseModal();
  }
};

closeModalButton.addEventListener("click", onCloseModal);

openModalButton.addEventListener("click", onOpenModal);

backDrop.addEventListener("click", onBackDropClick);

// Задачка - виводити на екран символи, що вводить користувач

const text = document.querySelector(".js-output");
const clearBtn = document.querySelector(".js-clear");
window.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  console.log(event.key);
  text.textContent += event.key;
  if (event.code === "Backspace") {
    text.textContent = "";
  }
}

function clearText() {
  text.textContent = "";
}

clearBtn.addEventListener("click", clearText);
