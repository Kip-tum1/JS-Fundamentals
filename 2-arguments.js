// const script0 = "one";
// console.log(`${script0} ${script1}`)

const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});