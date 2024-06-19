//console.log("Before promise creation");

const myPromise = new Promise((resolve, reject) => {
  console.log("Inside promise executor function");

  // Asynchronous operation
  setTimeout(() => {
    console.log("Inside promise executor SetTimeout function");
    resolve("Promise resolved after 1 second");
    console.log(
      "Inside promise executor SetTimeout function after promise resolved"
    );
  }, 1000);
});

//console.log("After promise creation");

myPromise.then((result) => {
  console.log(result);
});

//console.log("After promise then");
