const camelCase = function(input) {
  let result = '';
  for(let i = 0; i < input.length; i++) {
    if(input[i] !== ' ' && input[i - 1] === ' ') {
      result += input[i].toUpperCase();
    } else if(input[i - 1] !== ' ' && input[i] !== ' ') {
      result += input[i];
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));