// const valuess = [];
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   // console.log(key);
//   console.log(apartment[key]);
//   valuess.push(apartment[key]);
// }
// console.log(valuess);

// Дано масив об’єктів
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
// Написати функцію яка буде повертати масив всіх імен друзів

const getAllNames = function (friends) {
  const names = [];

  for (const friend of friends) {
    // console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};

// console.log(getAllNames(friends));

// Написати функ,яка буде повертати масив імен друзів які онлайн

// const getOnlineFriends = function (friends) {
//   const onlineFriends = [];

//   for (const friend of friends) {
//     if (friend.online) {
//       //   console.log(friend.online);
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// -------------------------------------------------------------

// const getOnlineFriends = (friends) => {
//   const onlineFriends = [];

//   for (const friend of friends) {
//     if (friend.online) {
//       console.log(friend.online);
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };
// console.log(getOnlineFriends(friends));

// 1
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
// const allTemps = ;
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 2
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = ;
// const bestScore = Math.max();
// const worstScore = Math.min();

// const allTemps = [...lastWeekTemps, ...currentWeekTemps];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore, worstScore);

// // Задачка поєднати об,єкти
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {};

// 3
// Функція getExtremeScores(scores)
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

const getExtremeScores = function (scores) {
  const bestExtremeScores = Math.max(...scores);
  const worstExtremeScores = Math.min(...scores);

  const scoresObject = { best: bestExtremeScores, worst: worstExtremeScores };

  console.log(bestExtremeScores, worstExtremeScores, scoresObject);

  return scoresObject;
};

getExtremeScores([89, 64, 42, 17, 93, 51, 26]); //{ best: 93, worst: 17 }
getExtremeScores([19, 7, 4, 17, 81, 24]); //{ best: 81, worst: 4 }
