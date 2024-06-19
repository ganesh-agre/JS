/_hoisting and temporal dead zone_/
hoisting in memory preparation phase of JS Engine.

- like allocate memory to function and hold reference to it
- allocate memory to let, conts and keep them uninitiaize
- var is declare with undefined

/_Scope and scope chanin_/

- whenever we declare var or const so scope define til where it is accesable and scope chai is that whenever any var is used JS check whether it is available in current scope , if not then it moves to outer scope , like wise it search till global scope. in case of browser it is window object.
- there are 3 scopes global , function and local scope

/_Protoypal Inheritance _/

- It is linkage of prototypes of parent object to child object so child can access properties of its parent class

/_ Promises_/
it is placeholder that resolve or reject in future. it have 3 states pending,rejected, fullfiled.
it have to property state and result. it makes add async behaviour to js

new Promise(()=> console.log("Hi")) this is sync

getEmployeeDetails()
.then(res => res) // this makes it async
.catch(err => err)
.finally( res => res)

macro -> setTimeout,setinterval,setIntermediate, I/O operation, UI rendering, HttPRequest
micro -> promise with then,catch,finally and mutation observer and queue microtask(manualy adding to microtask)

/_ function currying example_/
// Example of function currying for calculating discounts

// Original function without currying
function applyDiscount(price, discountPercentage) {
const discountAmount = (discountPercentage / 100) \* price;
return price - discountAmount;
}

console.log(applyDiscount(100, 10)); // Output: 90 (10% discount)

// Using currying to create a reusable function
function curriedDiscount(discountPercentage) {
return function(price) {
const discountAmount = (discountPercentage / 100) \* price;
return price - discountAmount;
};
}

// Create specialized discount functions
const tenPercentDiscount = curriedDiscount(10);
const twentyPercentDiscount = curriedDiscount(20);

// Use specialized functions
console.log(tenPercentDiscount(100)); // Output: 90 (10% discount)
console.log(twentyPercentDiscount(100)); // Output: 80 (20% discount)

/\* is javascript single theadead or multi threaded.
javascript is single threaded lang.this means

# Javascript Questions - Set 1

1. Is javascript single threaded or multi-threaded?

<details>
  <summary>Click to expand!</summary>

JavaScript is a single-threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. This is what allows JavaScript to be non-blocking and use async operations.
However, Javascript also has asynchronous behavior. This is what allows us to use setTimeout, AJAX, and promises. These functions are handled by the browser, not by JavaScript itself. This is what allows JavaScript to be non-blocking for main thread operations.

</details>

2. Explain how javascript engines works?

<details>
  <summary>Click to expand!</summary>

JavaScript engines are programs that execute JavaScript code. They are found in web browsers and other environments that host JavaScript. The most popular JavaScript engines are Google's V8, SpiderMonkey, and JavaScriptCore. These engines are written in C++ and are used to execute JavaScript code.

![working image](./working.png)

</details>

3. What is event loop in javascript?
<details>
<summary>Click to expand!</summary>
Check out the 2nd video in JS Pro Interview section. Make sure that you ask interviewer to allow you to draw the diagram on the whiteboard. Drawing the diagram will help you to explain the event loop in a better way and make sure to draw queue and stack as well.

</details>

4. Difference between var, let and const?

<details>
  <summary>Click to expand!</summary>

- var: The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside a function, the scope of the variable is global.
  Defaullt value of var is undefined.
- let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {}.
  Default value of let is uninitialized.
- const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
  Default value of const is uninitialized.

</details>

5. Different types of data types in javascript?

<details>
  <summary>Click to expand!</summary>

There are mainly two types of data types in JavaScript: primitive data types and object (reference) data types.

Primitive data types are the basic data types in JavaScript. They include numbers, strings, booleans, null, and undefined. Symbols are also primitive data types, that represent unique identifiers.

Object data types are data types that contain other data types. They are created using object literals or constructor functions. Objects, Arrays, and Functions are examples of object data types.

</details>

# Javascript Questions - Set 2

1. Disuss Promise and Promise chaining in javascript.

<details>
  <summary>Click to expand!</summary>

Promises are a way to handle asynchronous operations in JavaScript. They allow you to write code that can be executed asynchronously, without blocking the main thread. Promises are created using the `Promise` constructor, and can be chained together using the `then` method.

Promises have three states: `pending`, `fulfilled`, and `rejected`. When a promise is pending, it means that the asynchronous operation is still in progress. When a promise is fulfilled, it means that the asynchronous operation has completed successfully. When a promise is rejected, it means that the asynchronous operation has failed.

Promises can be chained together using the `then` method. The `then` method takes two arguments: a success callback and an error callback. The success callback is called when the promise is fulfilled, and the error callback is called when the promise is rejected.

Here's an example of using promises to fetch data from an API:

```javascript
fetch("https://api.freeapi.app/v1/jokes/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

</details>

2. What is async/await in javascript?

<details>
  <summary>Click to expand!</summary>

Async/await is a syntax feature in JavaScript that allows you to write asynchronous code in a more synchronous way. It uses the `async` and `await` keywords to define asynchronous functions.

Here's an example of using async/await to fetch data from an API:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.freeapi.app/v1/jokes/random");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData()
  .then(() => console.log("Data fetched"))
  .catch((error) => console.error(error));
```

In this example, the `fetchData` function is defined as an asynchronous function using the `async` keyword. The `await` keyword is used to wait for the `fetch` function to complete before moving on to the next line of code. All code after the `await` keyword, rest of the function is executed in the microtask queue.

</details>

3. Discuss callback and callback hell in javascript.
<details>
<summary>Click to expand!</summary>

Callback functions are functions that are passed as arguments to other functions and are called when a certain event occurs. They are commonly used in JavaScript to handle asynchronous operations, such as making HTTP requests or reading from a file.

example:

```javascript
function readFile(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

setTimeout(() => {
  console.log("Timeout");
}, 1000);
```

Callback hell is a problem in JavaScript where functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior.

Here's an example of callback hell:

```javascript

fetchRandomJoke(joke) =>{
  console.log(joke);
  translateJoke(joke, translation) =>{
    console.log(translation);
    writeToFile(translation, file) =>{
      console.log('Joke written to file');
      sendEmail(translation, email) =>{
        console.log('Joke sent to email');
      }
    }
  }
}

//better way to do it
const fetchRandomJoke = async (joke) => {
  const joke = await fetchJoke();
  const translation = await translateJoke(joke);
  await writeToFile(translation, file);
  await sendEmail(translation, email);
}
```

In this example, the `fetchRandomJoke` function is called with a callback function that is passed to the `translateJoke` function. The `translateJoke` function is called with a callback function that is passed to the `writeToFile` function. The `writeToFile` function is called with a callback function that is passed to the `sendEmail` function.

The problem with this code is that the callback functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior. To avoid callback hell, it's recommended to use async/await or promises to handle asynchronous operations.

</details>

4. What is the diffeence between == and === in javascript?

<details>
  <summary>Click to expand!</summary>

`==` compares the values of two operands for equality, while `===` compares the values of two operands for strict equality. In other words, `==` checks if the operands are equal, while `===` checks if the operands are equal and of the same type.

Here's an example of using `==` and `===` in JavaScript:

```javascript
let a = 5;
let b = 5;

console.log(a == b); // Output: true
console.log(a === b); // Output: true

a = "5";
b = "5";

console.log(a == b); // Output: false
console.log(a === b); // Output: false
```

In this example, the `==` operator is used to compare the values of `a` and `b`, and the result is `true`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `true`.

In the second example, the `==` operator is used to compare the values of `a` and `b`, and the result is `false`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `false`.

</details>

5. How to create object in javascript?

<details>
  <summary>Click to expand!</summary>

Objects are a fundamental data type in JavaScript. They can be created using object literals or constructor functions.

Object literals are enclosed in curly braces `{}` and are used to create objects with key-value pairs. Here's an example of an object literal:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
```

Constructor functions are used to create objects with custom properties and methods. Here's an example of a constructor function:

```javascript
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person = new Person("John", 30, "New York");
```

In this example, the `Person` function is used as a constructor function to create a new object with the specified properties.

Although there are other ways to create objects such as using the `Object.create()` method, object literals and constructor functions are the most common ways to create objects in JavaScript.

</details>

# Javascript Questions - Set 2

1. What are rest and spread operator in javascript?

<details>
  <summary>Click to expand!</summary>

Rest and spread operator are two important features in JavaScript that allow you to work with arrays and objects in a more concise and readable way.

The rest operator allows you to take an array or an object as an argument and use it in a function call.

The spread operator allows you to expand an array or an object into individual elements.

Here's an example of using the rest and spread operator in JavaScript:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5]
```

In this example, the `sum` function takes an array of numbers as an argument using the rest operator.
The spread operator is used to expand the array into individual elements, which are then passed to the `reduce` function.

</details>

2. What is higher order function in javascript?

<details>
  <summary>Click to expand!</summary>

Higher order functions are functions that take other functions as arguments or return functions as results. They are a powerful tool in JavaScript that allow you to write more flexible and reusable code.

Here's an example of a higher order function in JavaScript:

```javascript
function applyTwice(func, arg) {
  return func(func(arg));
}

console.log(applyTwice(Math.sqrt, 16)); // Output: 4
```

</details>

3. What are closures in javascript and give 1 DOM related example?
<details>
<summary>Click to expand!</summary>

Closures are functions that have access to variables from their outer scope, even after the outer function has finished executing.

Here's an example of a closure in JavaScript:

```javascript
function outerFunction() {
  const outerVariable = "I am an outer variable";

  function innerFunction() {
    console.log(outerVariable); // Output: I am an outer variable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am an outer variable
```

In this example, the `outerFunction` function defines a variable `outerVariable` and a function `innerFunction` that has access to `outerVariable`. The `innerFunction` returns the `outerFunction` function, which allows it to be called later.

One DOM related example of a closure is the `addEventListener` method. The `addEventListener` method allows you to attach event listeners to elements in the DOM. The event listener function has access to the element's properties and methods, even after the element has been removed from the DOM.

Here's an example of using the `addEventListener` method with a closure:

```javascript
const button = document.getElementById("myButton");

function handleClick() {
  console.log("Button clicked");
}

button.addEventListener("click", handleClick);
```

In this example, the `handleClick` function is defined inside the `addEventListener` method. The `handleClick` function has access to the `button` element, even after the `button` element has been removed from the DOM.

</details>

4. Explain hoisting in javascript.

<details>
  <summary>Click to expand!</summary>

Hoisting is a JavaScript feature that allows you to use variables and functions before they are declared. This means that you can use variables and functions before they are defined in your code. Hoisting is done by the JavaScript engine, which moves the declaration of variables and functions to the top of their `scope`.

Here's an example of hoisting in JavaScript:

```javascript
divideByTen(100);

function divideByTen(x) {
  console.log(x / 10);
}
```

In this example, the `divideByTen` function is called with the argument `100`. The `divideByTen` function is defined after the call to `divideByTen`, so the function is hoisted to the top of the scope. This means that the `divideByTen` function is available to be called before it is defined.

</details>

5. What is temporal dead zone in javascript?

<details>
  <summary>Click to expand!</summary>

Temporal dead zone is a concept in JS related to let and const declarations. Variables with let or const declarations are hoisted to the top of their scope, but they are not immediately available in the code. This means that you can use a variable before it is declared, but the value of the variable will be undefined until it is assigned a value.

Here's an example of a temporal dead zone in JavaScript:

```javascript
console.log(x); // Output: ReferenceError: x is not defined

let x = 5;

console.log(x); // Output: 5
```

In this example, the variable `x` is declared with the `let` keyword.

</details>

# Javascript Questions - Set 4

1. Name some features of ES6 in javascript.

<details>
  <summary>Click to expand!</summary>

ES6 is a set of features that were introduced in ECMAScript 2015. These features include arrow functions, template literals, destructuring assignment, and more.

Here are some of the key features of ES6:

- Arrow functions: Arrow functions provide a more concise syntax for writing functions. They are defined using the `=>` operator.
- Template literals: Template literals allow you to embed expressions inside strings. They are enclosed in backticks (`) and can be used to create multi-line strings.
- Destructuring assignment: Destructuring assignment allows you to extract values from arrays or objects and assign them to variables. It is done using the `=` operator.
- Spread operator: The spread operator allows you to expand an array or an object into individual elements. It is used to pass multiple arguments to a function.
- Classes: Classes provide a way to define objects with properties and methods. They are defined using the `class` keyword.
- Modules: Modules allow you to split your code into separate files and import/export functionality between them. They are defined using the `import` and `export` keywords.
- Promises: Promises provide a way to handle asynchronous operations in JavaScript. They are used to represent the eventual completion or failure of an asynchronous operation.
- Generators: Generators allow you to define functions that can be paused and resumed. They are defined using the `function*` keyword.
- Maps and Sets: Maps and Sets are data structures that allow you to store key-value pairs. They are defined using the `Map` and `Set` constructors.

</details>

2. What is currying in javascript?

<details>
  <summary>Click to expand!</summary>

Currying is a technique in functional programming that allows you to transform a function that takes multiple arguments into a sequence of functions, each taking a single argument. This can be useful for creating more flexible and reusable code.

Here's an example of currying in JavaScript:

```javascript
function add(x) {
  return function (y) {
    return x + y;
  };
}

const addTwo = add(2);
console.log(addTwo(3)); // Output: 5
```

In this example, the `add` function takes a single argument `x` and returns a new function that takes a single argument `y` and returns the sum of `x` and `y`. The `addTwo` function is created by calling `add` with the argument `2`. The `addTwo` function can then be called with any value of `y` to get the sum of `2` and `y`.

</details>

3. what are arrow functions in javascript?
<details>
<summary>Click to expand!</summary>

Arrow functions are a shorthand syntax for writing functions in JavaScript. They provide a more concise and readable way to write functions, especially when using anonymous functions.

Here's an example of an arrow function in JavaScript:

```javascript
const add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5
```

In this example, the arrow function `add` takes two arguments `x` and `y` and returns their sum. The arrow function is defined using the `=>` operator, which is a shorthand for the `function` keyword.

</details>

4. What is prototype chain in javascript?

<details>
  <summary>Click to expand!</summary>

The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a way to share behavior between objects.

Here's an example of how the prototype chain works in JavaScript:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(this.name);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Fido");
dog.sayName(); // Output: Fido
```

In this example, the `Animal` constructor is used to create a base class with a `sayName` method. The `Dog` constructor then uses the `Animal` constructor to create a new object with the `name` property. The `Dog` constructor also sets the `constructor` property of the new object to `Dog`. This allows the `Dog` object to be used as a constructor for other objects.

</details>

5. what is difference between call bind and apply in javascript?

<details>
  <summary>Click to expand!</summary>

The `call` method is used to call a function with a specific this value.
It takes two arguments: the function to be called and the this value to use.

The `apply` method is used to call a function with a variable number of arguments.
It takes two arguments: the function to be called and an array of arguments to pass to the function.

The `bind` method is used to create a new function that, when called, has its `this` value pre-bound to a specific object.
It takes two arguments: the function to be bound and the `this` value to use.

Here's an example of how the `call`, `apply`, and `bind` methods work in JavaScript:

Use the same examples as used in Pro Interview Section.

</details>

# Javascript Questions - Set 5

1. How to compare two objects in javascript?

<details>
  <summary>Click to expand!</summary>

You can compare two objects in JavaScript using the `===` operator. This operator checks if the two objects are the same object or if they have the same value.

You can convert an object to a string using the `toString()` method. This method returns a string representation of the object. You can then compare the string representations of the objects using the `===` operator.

</details>

2. What is event delegation in javascript?

<details>
  <summary>Click to expand!</summary>

Event delegation is a technique in JavaScript that allows you to attach event listeners to a parent element and handle events for its child elements. This can be useful for creating more flexible and reusable code.

Here's an example of event delegation in JavaScript:

```javascript
const parentElement = document.getElementById("parent");
const childElements = document.getElementsByClassName("child");

childElements.forEach((childElement) => {
  childElement.addEventListener("click", handleClick);
});

function handleClick(event) {
  console.log("Child element clicked");
}
```

In this example, the `parentElement` variable is used to get the parent element with the ID `'parent'`. The `childElements` variable is used to get all the child elements with the class `'child'`. The `forEach` method is used to iterate over each child element and attach a click event listener to it. The `handleClick` function is used to handle the click event for each child element.

</details>

3. What is event bubbling and capturing in javascript?
<details>
<summary>Click to expand!</summary>

Event bubbling is a technique in JavaScript that allows you to handle events for child elements by attaching event listeners to the parent element. This can be useful for creating more flexible and reusable code.

Event capturing is a technique in JavaScript that allows you to handle events for child elements by attaching event listeners to the child element. This can be useful for creating more flexible and reusable code.

</details>

4. What is shallow copy and deep copy in javascript?

<details>
  <summary>Click to expand!</summary>

Shallow copy is a copy of an object whose references are same. It creates a new object with the same properties as the original object. If you modify the properties of the new object, it will also modify the original object.

Deep copy is a copy of an object that creates a new object with the same properties and values. It does not share the same references between the original object and the new object. If you modify the properties of the new object, it will not modify the original object.

```javascript
// Shallow copy
const person1 = { name: "John", age: 30 };
const person2 = person1;
person2.age = 31;
console.log(person1.age); // Output: 31

// Deep copy
const person1 = { name: "John", age: 30 };
const person2 = JSON.parse(JSON.stringify(person1));
person2.age = 31;
console.log(person1.age); // Output: 30
```

</details>

5. What is an IIFE in JavaScript?

<details>
  <summary>Click to expand!</summary>

An IIFE, or immediately-invoked function expression, is a JavaScript function that is invoked immediately after it is defined. It is often used to create a private scope for variables and functions.

Here's an example of an IIFE in JavaScript:

```javascript
(function () {
  // Private variables and functions
  const name = "John";
  function sayHello() {
    console.log("Hello, " + name + "!");
  }

  // Public functions
  function greet() {
    console.log("Hello, world!");
  }
})();

// Output:
// Hello, John!
// Hello, world!
```

In this example, the IIFE is immediately invoked after it is defined. The `name` variable and the `sayHello` function are private to the IIFE, and they cannot be accessed from outside the IIFE. The `greet` function is also private to the IIFE, but it can be accessed from outside the IIFE.

</details>
