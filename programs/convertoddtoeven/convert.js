// let numbers = [5, 4, 3, 7, 10];

// let evenNumbers = numbers.map((item) => {
//   return item % 2 === 0 ? item : item + 1;
// });

// console.log(evenNumbers);

let numbers = [5, 4, 3, 7, 10];

let oddnumbers = numbers.map((item) => {
  return item % 2 === 0 ? item + 1 : item;
});

console.log(oddnumbers);
