/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Iterate through the array and add each element to the result string, add a separator after each iteration except for the last one.
const concatenateWithSeparator = function(array, separator) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) {
      result += separator;
    }
  }
  return result;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = concatenateWithSeparator(conceptList, ', ');
console.log(`Today I learned about ${concepts}.`);

// Test with empty string
let a = [];
console.log(concatenateWithSeparator(a));
console.log(`Today I learned about ${a}.`);
