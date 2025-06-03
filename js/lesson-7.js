// // // 1
// // // Cтворити масив Arr1 за значеннями: 1, 5, "4", "hello" ;
// // //  і Arr2 зі значеннями: true,2, {}, ["a"], 222 .
// // //  Вивести в консоль 2-гий елемент (по індексу) кожного з масивів
// // //  довжину масиву.

// // const arr1 = [1, 5, "4", "hello"];

// // const arr2 = [true, 2, {}, ["a"], 222];

// // console.log(arr1[1], arr2[1], arr1.length, arr2.length);

// // 1
// // const Arr1 = [1, 5, "4", "hello"];
// // Через індекс елемента додати в кінець масиву Arr1
// // новий елемент зі значенням: 22.
// // Вивести значення кожного елемента масиву Arr1 в консоль.

// // const arr1 = [1, 5, "4", "hello"];

// // arr1[4] = 22;

// // console.log(arr1);

// //  2
// // Створіть масив рядків.
// const fruits = ["apple", "plum", "pear", "orange"];
// // Виведіть в консоль значення першого,
// // другого та останнього елементу.
// // Змініть значення останнього елементу на "peach"
// // а другого на "banana".

// // console.log(fruits[0], fruits[1], fruits[3], fruits[fruits.length - 1]);

// // fruits[fruits.length - 1] = "peach";

// // fruits[1] = "bananas";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 1]);
// fruits[fruits.length - 1] = "peach";
// fruits[1] = "banana";
// console.log(fruits);

// for (let friend of myFriends) {
//   console.log(friend);
// }
// console.log(myFriends);
// for (let i = 0; i < myFriends.length; i += 1) {
//   console.log(i);
//   console.log(myFriends[i]);
//   myFriends[i] = "fgh"
// }

// 1
const array = [10, 25, 13, 44, 15];
// Вивести в консоль всі елементи масиву за допомогою
// циклів for та for…of.

// const arrayLength = array.length;

// for (let i = 0; i < arrayLength; i += 1) {
//   //   console.log(array[arrayLength - 1]);
//   console.log(array[i]);
// }

// let total = 0;

// for (const item of array) {
//   console.log(item);
//   console.log(`Додаємо до ${total} елемент масиву ${item}`);
//   total += item;
// }
