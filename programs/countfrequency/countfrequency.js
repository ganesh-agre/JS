const letters = ["a", "b", "c", , "d", "a", "b", "c", "a", "b"];
let count = {};

letters.forEach((item) => {
  count[item] ? count[item]++ : (count[item] = 1);
});

console.log(count);
