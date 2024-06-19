function getThis() {
  console.log(this);
}

let obj = {
  getThis,
};

console.log(getThis());
console.log(obj.getThis());
