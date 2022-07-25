const findDigits = (n) => {
  let numOfDivisor = 0;
  let nString = n.toString();
  for (let i = 0; i < nString.length; i++) {
    let d = parseInt(nString[i]);
    if (n % d === 0) {
      numOfDivisor++;
    }
  }
  return numOfDivisor;
};

findDigits(120); //return 2
findDigits(378); //return 2
findDigits(1012); //return 3

console.log(findDigits(120));
console.log(findDigits(378));
console.log(findDigits(1012));
console.log(findDigits(10121));
