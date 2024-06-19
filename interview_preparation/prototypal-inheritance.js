/*let faaag = {
  name: "google",
  salary: function () {
    console.log("100k");
  },
};

let engineer = {
  empId: 1230,
  task: function () {
    console.log("task assigned");
  },
};

engineer.__proto__ = faaag;
console.log(engineer);
console.log(engineer.salary());

let faang = {
  name: "google",
  salary: function () {
    console.log("100k");
  },
};

let engineer = Object.create(faang, {
  engineer: {
    empId: 1230,
    task: function () {
      console.log("task assigned");
    },
  },
});

console.log(engineer);
console.log(engineer.salary());

console.log(Object.getPrototypeOf(engineer) === faang);*/

let faaag = {
  name: "google",
  salary: function () {
    console.log("100k");
  },
};

let engineer = {
  empId: 1230,
  task: function () {
    console.log("task assigned");
  },
};

Object.setPrototypeOf(engineer, faaag);

console.log(engineer.salary());
