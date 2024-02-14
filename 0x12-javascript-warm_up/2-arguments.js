#!/usr/bin/node

const ArgCount = process.argv.length;
console.log(ArgCount === 2 ? 'No argument' : ArgCount === 3 ? 'Argument found' : 'Arguments found');
