let name = "ganesh";
let VowelsRemovedString = "";

for (let index = 0; index < name.length; index++) {
  if (!["a", "e", "i", "o", "u"].includes(name[index]))
    VowelsRemovedString += name[index];
}
console.log(VowelsRemovedString);
