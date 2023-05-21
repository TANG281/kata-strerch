// Create convertToPigLatin function which convert a word to pig latin by
// taking its first letter, moving it to the end of the word
// then adding "ay" after it all
const convertToPigLatin = function(word) {
  let converted = '';
  for (let x = 1; x < word.length; x++) {
    converted += word[x];
  }
  converted += word[0];
  converted += 'ay';
  return converted;
};

// Define input array
const input = process.argv.slice(2);
// convert each item in the array to pig latin
let output = [];
for (let i = 0; i < input.length; i++) {
  output.push(convertToPigLatin(input[i]));
}
console.log(output.join(' '));



