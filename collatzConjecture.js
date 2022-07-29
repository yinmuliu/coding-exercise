const countConjecture = (n) => {
  if (n <= 1) {
    console.log("Please enter a positive number larger than 1.");
    return "Please enter a positive number larger than 1.";
  } else {
    let count = 0;
    while (n != 1) {
      if (n % 2 === 0) {
        n = n / 2;
        count++;
      } else {
        n = 3 * n + 1;
        count++;
      }
    }
    console.log(count);
    return count;
  }
};

countConjecture(1); // return
countConjecture(2); // return
countConjecture(10); // return
countConjecture(32);

const collatz_rec = function (num, count = 0) {
  console.log(`num ${num}, count ${count}`);

  //base case

  if (num === 1) {
    console.log(`The final count is ${count}`);
    return count;
  }

  //action
  //even

  if (num % 2 === 0) {
    return collatz_rec(num / 2, count + 1); //the recursion
  } else {
    return collatz_rec(num * 3 + 1, count + 1);
  }

  //one liner
  //return num % 2 === 0 ? collatz_rec(num / 2, count + 1) : collatz_rec(num * 3 + 1, count + 1);
};
