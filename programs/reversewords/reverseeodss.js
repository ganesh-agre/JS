let sentence = "Hello this javascript programing";

let reversedWord = sentence
  .split(" ")
  .map((item) => item.split("").reverse().join(""))
  .join(" ");
console.log(reversedWord);
