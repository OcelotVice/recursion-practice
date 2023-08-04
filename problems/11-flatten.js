/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = function(arr) {
  let flattenedArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      let nestedFlattened = flatten(element);
      flattenedArray = flattenedArray.concat(nestedFlattened);
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
