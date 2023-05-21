// set input array
const input = process.argv.slice(2);
// loop through the input array
for (let i = 0; i < input.length; i++) {
  // set output to be an empty string at the begining of every loop
  let output = '';
  // eslint-disable-next-line for-direction
  for (let j = input[i].length - 1; j >= 0; j--) {
    // loop though each item in the input array from the last letter and backward, add that letter to the output
    output += input[i][j];
  }
  // print the output to the terminal, end 1 loop
  console.log(output);
}
