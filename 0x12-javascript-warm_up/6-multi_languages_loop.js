#!/usr/bin/node

const lines = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let combinedLines = '';

for (const line of lines) {
    combinedLines += line + '\n';
}

console.log(combinedLines);