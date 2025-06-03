// 1.
// Створити функцію hello1(),
// яка при визові буде вертати текст “Привіт JavaScript”.

// const hello = function () {
//   return "Hi JavaScript";
// };

// hello();

// console.log(hello());

// 2.
// Напишіть функцію hello2(),
//  яка при виклику буде приймати змінну name (наприклад, «Василь»)
//  і виводити рядок (в нашому випадку «Привіт, Василь»).

// const hello = function (name) {
//   const message = `Hi ${name}`;
//   return message;
// };

// console.log(hello("Vasiiiiil"));

// const hello = function (name, age) {
//   return `Hi ${name}, ${age}`;
// };

// const name = "Vasil";

// console.log(hello(name, 55));

// console.log(hello("Kiddo", 1));
// console.log(hello("Artem", 15));
// console.log(hello(3, 999));
// console.log(hello(4, 999));
// console.log(hello(5, 999));
// console.log(hello(6, 999));

// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів.
//  Перевірте її роботу.

// const mul = function (n, m) {
//   const multiply = n * m;
//   const sum = n + m;
//   const difference = n - m;
//   return [multiply, sum, difference];
// };
// const result = mul(10, 5);

// console.log(result);

// practice

// 1
// Напиши функцію logItems(items) для перебору і логування масиву
// const logItems = function (items) {
//   console.log(items);

//   for (const item of items) {
//     console.log(item);
//   }
// };
//перевірь роботу функції викликами нижче
// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);

// 2
// Напиши фунцію що приймає масив і рахує суму всіх чисел

//   const calculateTotal = function (arr) {
//     //змінна для зберігання результату
//     let result = 0;
// за доп for перебираємо масив та рахуємо тотал
// for (const num of arr) {
//   console.log(num);
//   result += num;
// }
// повертаємо результат роботи ф-ції
//     return result;
//   }

// const result1 = calculateTotal([2, 4, 6, 8]);
// console.log(result1);

/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

// const calculateTax = function (amount, taxRate = 0.2) {
//   const tax = amount * taxRate;
//   console.log(tax);
//   return tax;
// };

// calculateTax(100, 0.1);

// calculateTax(200, 0.1);

// calculateTax(100);

// const checkStorage = function (products, item) {
//   const isIncluded = products.includes(item.toLowerCase());
//   console.log(isIncluded);
//   // let mes;
//   // if (isIncluded) {
//   //   mes = `${item} is available to order!`;
//   // } else {
//   //   "Sorry! We are out of stock!";
//   // }
//   // return mes;
//   if (isIncluded) {
//     return `${item} is available to order!`;
//   }
//   return "Sorry! We are out of stock!";
// }

// const res = checkStorage(["apple", "plum", "pear"], "pLuM")
// console.log(res);

// const filterNumbers = function (array, ...args) {
//   let elements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       elements.push(element);
//       console.log(element);
//     }
//   }

//   return elements;
// }
//   console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
//   console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
//   console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

/*   1.
Напишіть функцію, яка приймає на вхід масив чисел 
і повертає новий масив, в якому кожний елемент є 
квадратом відповідного елементу вхідного масиву.
Знайдіть суму елементів масиву 
з використанням колбек-функції */
// const arr = [1, 2, 3, 4, 5];

// const sumArray = function (arr, callback) {
//   // пиши код тут
// };

// // sumArray(arr, cb);

// const arr = [1, 2, 3, 4, 5];
// const squareArray = function (arr) {
//   const array = [];
//   for (const number of arr) {
//     array.push(number ** 2);
//   }
//   return array;
// };

// const sumArray = function (arr, callback) {
//   const newArray = callback(arr);
//   console.log(newArray);
//   let sum = 0;

//   for (const num of newArray) {
//     sum += num;
//   }
//   // console.log(sum);
//   return sum;
// };

// const result = sumArray(arr, squareArray);
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// const squareArray = function (arr) {
//   const array = [];
//   for (const number of arr) {
//     array.push(number ** 2);
//   }
//   return array;
// };

// const sumArray = function (arr, callback) {
//   const newArray = callback(arr);
//   console.log(newArray);
//   let sum = 0;

//   for (const num of newArray) {
//     sum += num;
//   }
//   // console.log(sum);
//   return sum;
// };

// const result = sumArray(arr, squareArray);
// console.log(result);
// const addArray = (arr) {

// };
// const result2 = sumArray(a
// const result2 = sumArray(array, addArray)
