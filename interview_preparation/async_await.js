async function myAsync() {
  console.log("before await");
  await new Promise((res, rej) => {
    console.log("inside promise");
    res("promise resolved");
  });

  console.log("after await");
}

myAsync();
