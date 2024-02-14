#!/usr/bin/node

const MyNum = Math.floor(Number(process.argv[2]));
console.log(isNaN(MyNum) ? 'Not a number' : `My number: ${MyNum}`);
