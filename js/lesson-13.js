// // Об’єкт user
// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };

// // Об’єкт movie
// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// // Об’єкт movie
// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const {
//   title,
//   director: { name, nationality },
//   actors,
//   release_year,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;

// console.log(
//   title,
//   name,
//   nationality,
//   actors,
//   release_year,
//   imdb,
//   rotten_tomatoes
// );

// // Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };

// // Об’єкт user
// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };

// const { name: username, age: userage = 20, email } = user;

// console.log(username, userage, email);

// // Об’єкт movie
// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };
// const {
//   title,
//   director: { name, nationality },
//   actors,
//   release_year,
//   ratings,
// } = movie;

// const {
//   title,
//   director: { name, nationality },
//   actors,
//   release_year,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;

// const {
//   title,
//   director: { name, nationality },
//   actors: [actorRobbins, actorFreeman],
//   release_year,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;
// console.log(actorRobbins, actorFreeman);

// // Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };

// const { count, list } = books;
// console.log(list);

// const {
//   count,
//   list: [bookGatsby, bookMockingbird, book1984],
// } = books;
// console.log(bookGatsby);
