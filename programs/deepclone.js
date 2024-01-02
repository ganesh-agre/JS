const obj = { name: "ganesh", address: { city: "Pune" } };
const objCopy = obj;
let cloneObject = {};

function deepClone(cloneObject, object) {
  for (const key in object) {
    cloneObject[key] = object[key];
  }
}
deepClone(cloneObject, obj);
console.log(cloneObject);
console.log(objCopy === obj);
console.log(obj === cloneObject);
