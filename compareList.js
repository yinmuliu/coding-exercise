// // METHOD 1
// const listDiff = (arr1, arr2) => {
//   // filter arr1 according to whether arr2 has the element or not.
//   // indexOf() returns the first index at which a given element can be found in the array
//   // indexOf() returns -1 if the element is not present
//   let difference = arr1.filter((ele) => arr2.indexOf(ele) === -1);
//   console.log(difference);
// };

// METHOD 2
const listDiff = (arr1, arr2) => {
  // turn arr2 into object b
  let b = new Set(arr2);
  // check if b has a certain element. If NOT (!b.has(ele)), filter the element into array
  // why spreading arr1? use arr1 returns the same result.
  let difference = [...arr1].filter((ele) => !b.has(ele));
  console.log(arr1);
  console.log(difference);
};

listDiff([], [4, 5]); // => []
listDiff([3, 4], [3]); // => [4]
listDiff([1, 8, 2], []); // => [1,8,2]
listDiff([1, 2, 2, 2, 3], [1, 2]); // => [3]
