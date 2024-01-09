// array = [
//   { name: "ganesh", age: 19 },
//   { name: "Suresh", age: 5 },
//   { name: "ramesh", age: 30 },
//   { name: "akhil", age: 10 },
// ];
// let temp;

// for (let index = 0; index < array.length; index++) {
//   for (let j = index + 1; j < array.length; j++) {
//     if (array[index].age > array[j].age) {
//       temp = array[index];
//       array[index] = array[j];
//       array[j] = temp;
//     }
//   }
// }

// console.log(array);

let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true,
});

console.log(user.name); // John
user.name = "Pete"; // Error
console.log(user.name);
