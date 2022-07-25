// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.

const keysAndValues = (obj) => {
    // put keys into array and sort alphabetically
  let sortedKeyArr = Object.keys(obj).sort();
  // match the values in the original object to the sorted key, then put it in a value array
  let sortedValueArr = sortedKeyArr.map((key) => obj[key])
  return [sortedKeyArr, sortedValueArr];
};

// Examples

console.log(keysAndValues({ z: "z", b: "b", d: "d" }));

keysAndValues({ a: 1, b: 2, c: 3 });
// ➞ [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

keysAndValues({ key1: true, key2: false, key3: undefined });
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
