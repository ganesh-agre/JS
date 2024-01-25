/*function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = new createCounter();
counter1();
counter1();
counter1();

const counter2 = new createCounter();
counter2();
counter2();
counter1();*/

/*const personModule = (function () {
  let name = "John Doe";

  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
  }

  return {
    getName: getName,
    setName: setName,
  };
})();
console.log(personModule.getName()); // John Doe
personModule.setName("Ganesh");
console.log(personModule.getName()); // Ganesh*/

/*currying function
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(5)(4)(6); // 15
*/

/* let div = document.querySelector(".change-color");

div.addEventListener("click", chnageColor("red"));

function chnageColor(color) {
  let count = 0;
  return function () {
    div.style.backgroundColor = color;
    count++;
  };
} */

// for (let i = 1; i <= 5; i++) {
//   const button = document.createElement("button");
//   button.innerText = `Button ${i}`;

//   button.addEventListener(
//     "click",
//     (function (index) {
//       return function () {
//         console.log(`Button ${index} clicked`);
//       };
//     })(i)
//   );

//   document.body.appendChild(button);
// }

// 2 sum

// function sumTwo(nums, target) {
//   let complementObject = {};
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     let complement = target - element;
//     if (complementObject[complement]) {
//       return [complementObject[complement], index];
//     } else {
//       complementObject[element] = index;
//     }
//   }
//   return null;
// }

// console.log(sumTwo([5, 10, 4, 2, 56, 3], 13));

// (function secondLargestNumber(nums) {
//   let secondLastMax,
//     max = 0;
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     if (element > max) {
//       secondLastMax = max;
//       max = element;
//     }
//     secondLastMax =
//       element > secondLastMax && element < max ? element : secondLastMax;
//   }
//   console.log(secondLastMax);
// })([5, 10, 4, 2, 7, 3]);

let apple = "apple";

// function isApple() {
//   return function () {
//     console.log(apple);
//   };
//   // aaple outer is defined at compilation time not execution time
// }

// function isBanana() {
//   let apple = "banana";
//   return isApple();
// }

// let banana = isBanana();
// banana();

// var apple = {
//   price: 30,
//   getPrice: function () {
//     discount = () => console.log(this);
//     discount();
//   },
// };

//apple.getPrice();

// function A() {
//   this.a = 10;
//   this.getMessage = function () {
//     console.log("getter of A");
//     console.log(this);
//   };
// }

// function B() {
//   function getBMessage() {
//     console.log("getter of A");
//   }
// }

// B.prototype = new A();

// b = new B();

// console.log(b.a);
// console.log(b.getMessage());

class A {
  a = 10;
  getMessage = function () {
    console.log("getter of A");
    console.log(this);
  };
}

class B extends A {
  getBMessage = function () {
    console.log("getter of A");
    console.log(this);
  };
}

objcetb = new B();

console.log(objcetb.a);
console.log(objcetb.getMessage());
