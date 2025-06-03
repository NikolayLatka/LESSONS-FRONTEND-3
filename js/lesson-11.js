const myObject = {
  name: "Kate",
  age: 30,
  city: "Kyiv",
  occupation: "designer",
  increaseAge(age) {
    console.log(this);
    this.age = age;
  },
  changeOccupation(position) {
    this.occupation = position;
  },
};
myObject.increaseAge(32);
myObject.changeOccupation("teacher");
console.log(myObject);

const apartment = {
  descr: "Апартаменты в центре города",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Арсеній",
    phone: "982-126-1588",
    email: "asdasdasd@aptmail.com",
  },
  showprice() {
    return this.price;
  },
  changePrice(newPrice) {
    this.price = newPrice;
    return `Ціна зміненна на ${this.price}`;
  },
  isRatingGood() {
    if (this.rating > 8) {
      return true;
    }
    return false;
  },
  changeRating(newRating) {
    this.rating = newRating;
  },
};
console.log(apartment.changePrice(2000));
console.log(apartment.showprice());
console.log(apartment.isRatingGood());
console.log(apartment.changeRating(8.1));
console.log(apartment.isRatingGood());
