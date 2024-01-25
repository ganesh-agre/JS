// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise1 value failure");
//   }, 1000);
// });

// const promise2 = Promise.resolve("promise2 value");

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promis3 value");
//   }, 4000);
// });

// promise1.then(
//   (success) => {
//     console.log(success);
//   },
//   (failure) => {
//     console.log("in failure " + failure);
//   }
// );

// promise1
//   .then((success) => {
//     console.log("In suceess " + success);
//   })
//   .catch((error) => {
//     console.log("In failure " + error);
//   })
//   .finally(() => {
//     console.log("In finally ");
//   });

// Promise.all([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("failure " + err));

// Promise.race([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("failure " + err));

// Promise.any([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((errors) => console.log(errors));

// Promise.allSettled([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((errors) => console.log("inside errors" + errors));

// const map = new Map([
//   ["1", "ganesh"],
//   ["2", "ramesh"],
// ]);
// //console.log(map);

// const set = new Set([1, 2, 3, 4, 5]);
// //console.log(set);

// let weakSet = new WeakSet();
// weakSet.add({ name: "ganesh" });
// //console.log(weakSet);

// weakSet.forEach((value) => console.log(`${value}`));

// async function example() {
//   return "feeling good";
// }

// console.log(example());

// const timerPromise = (message) =>
//   new Promise((resolve) => {
//     resolve(message);
//   });

// async function asyncFunc() {
//   const result = await timerPromise("promise finished!");
//   console.log(result);
// }

// asyncFunc();

// With chaining
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((result) => console.log(result));

const promise1 = function () {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => resolve(response)
      //response.json()
    );
    //.then((result) => resolve(result));
  });
};

async function asyncFunc() {
  try {
    const response = await promise1();
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finished finally");
  }
}

asyncFunc();

// const promise1 = function () {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((result) => resolve(result));
//   });
// };

// promise1().then(console.log);

// promise1.then(console.log);
// setTimeout(console.log, 0, "This is a value after the timeout");
// console.log("This is a normal log");
