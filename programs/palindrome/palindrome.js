// let name = "kanak";
// let reversedString = name.split("").reverse().join("");
// if (name === reversedString) console.log("string is palindrome");
// else console.log("not palindrome");

// let name = "ganesh";
// let reversedString = "";
// for (let index = name.length - 1; index >= 0; index--) {
//   reversedString += name[index];
// }

// console.log(name === reversedString ? "palindrome" : "not palindrome");

let name = "kanak";
let palindrome = true;
for (let index = 0; index < name.length / 2; index++) {
  if (name[index] !== name[name.length - index - 1]) {
    palindrome = false;
  }
}

console.log(palindrome ? "palindrome" : "not palindrome");
