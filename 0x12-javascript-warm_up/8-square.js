#!/usr/bin/node

const mySize = parseInt(process.argv[2]);
let stringSquare = '';
if (!isNaN(process.argv[2])) {
  for (let i = 1; i <= mySize; i++) {
    for (let j = 1; j <= mySize; j++) {
      stringSquare += 'X';
    }
    if (i < mySize) {
      stringSquare += '\n';
    }
  }
  console.log(stringSquare);
} else {
  console.log('Missing size');
}
