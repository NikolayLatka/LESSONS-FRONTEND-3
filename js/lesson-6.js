// // // / Знайти суму всіх парних цілих чисел від одиниці до цього числа
// // // // Парні числа — це ті, що можна поділити на 2 без остачі %
// // // // if (index % 2 === 0)

// // // const number1 = 564;
// // // let number1Result = 0

// // // for (let i = 0; i <= number1; i += 1) {
// // //   console.log(i);

// // //   if (i % 2 === 0) {
// // //     console.log("Парне" , i);
// // //     number1Result += i;
// // //   }

// // // }

// // // console.log(number1Result);

// // // 1
// // // Вивести в консоль числа від 1 до 5 всіма циклами

// // // let num = 1;

// // // while (num <= 5) {
// // //   console.log(num);
// // //   num += 1;
// // // }

// // // do {
// // //   console.log(num);
// // //   num += 1;
// // // } while (num <= 5);

// // // for (let num = 1; num <= 5; num += 1) {
// // //   console.log(num);
// // // }

// // //   Доповни код таким чином, щоб у змінну w записувалося
// // //  перше число у проміжку від start до end,
// // // яке ділиться на 5 без остачі

// // // const start = 6;
// // // const end = 17;
// // // let w;

// // // for (let i = start; i <= end; i += 1) {
// // //   //   console.log(i);
// // //   //   console.log(i % 5 === 0);
// // //   if (i % 5 === 0) {
// // //     console.log(`This number is: ${i} `);
// // //     w = i;
// // //     break;
// // //   }
// // // }
// // // console.log(w);

// // // Виведіть в консоль всі непарні числа від 10 до 20
// // // за допомогою циклу for
// // const start = 10;
// // const end = 20;

// // for (let i = start; i <= end; i += 1) {
// //   //   console.log(i);
// //   if (i % 2 === 0) {
// //     // console.log("Знайшли парне");
// //     continue;
// //   }
// //   console.log("Знайшли непарне", i);
// // }

// //  for (let i = min; i <= max; i += 1) {
// //    console.log(i);
// //    if (i % 2 === 0) {
// //      console.log("Знайшли парне", i);
// //      totalSum += i;
// //    }
// //  }
// //  console.log(totalSum);

// // Напиши скрипт який підраховує загальну суму зп працівників.
// // Кількість робітників зберігається в змінній employees.
// // ЗП кожного працівника це випадкове число від 500 до 5000.
// // Записати суму в змінну totalSalary і вивести в на сторінку.

// // // 1 змінні
// // const minSalary = 500;
// // const maxSalary = 5000;
// // const employees = 12;
// // let totalSalary = 0;

// // Напиши скрипт який підраховує загальну суму зп працівників.
// // Кількість робітників зберігається в змінній employees.
// // ЗП кожного працівника це випадкове число від 500 до 5000.
// // Записати суму в змінну totalSalary і вивести в на сторінку.

// // // 1 змінні
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 0; i <= employees; i += 1) {
//   // console.log(i);
//   const salary = Math.random() * (maxSalary - minSalary) + minSalary;

//   // console
