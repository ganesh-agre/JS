let mobileNumber = "1234567890";

function mask(startIndex, endindex) {
  let maskedNumber = [...mobileNumber].reduce((acc, item, index) => {
    return (acc =
      acc + (index >= startIndex && index <= endindex ? "*" : item));
  });
  return maskedNumber;
}

console.log(mask(3, 7));
