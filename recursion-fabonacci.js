
// // Recursive - easy to write but terrible performance
// const fibonacciNumber = (n) => {
//     if (n <= 2) {
//         return 1
//     } else {

//         return fibonacciNumber(n-1) + fibonacciNumber(n-2)
//     }
// }

// console.log(fibonacciNumber(8));

// Recursive with memoisation
const fibonacciNumber = (n, memo={}) => {
    // base case: if n is found, then retrieve the value and execute result
    if (n in memo) {
        return memo[n]
    } 
    // edge case: the first 2 num are always 1.
    if (n <= 2) {
        return 1
    }
    // store the result as n in the memo
    memo[n] = fibonacciNumber(n-1, memo) + fibonacciNumber(n-2, memo)
    return memo[n]
}
console.log(fibonacciNumber(9));