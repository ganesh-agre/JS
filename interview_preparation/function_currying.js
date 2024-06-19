// Example of function currying for calculating discounts

// Original function without currying
function applyDiscount(price, discountPercentage) {
  const discountAmount = (discountPercentage / 100) * price;
  return price - discountAmount;
}

console.log(applyDiscount(100, 10)); // Output: 90 (10% discount)

// Using currying to create a reusable function
function curriedDiscount(discountPercentage) {
  return function (price) {
    const discountAmount = (discountPercentage / 100) * price;
    return price - discountAmount;
  };
}

// Create specialized discount functions
const tenPercentDiscount = curriedDiscount(10);
const twentyPercentDiscount = curriedDiscount(20);

// Use specialized functions
console.log(tenPercentDiscount(100)); // Output: 90 (10% discount)
console.log(twentyPercentDiscount(100)); // Output: 80 (20% discount)
