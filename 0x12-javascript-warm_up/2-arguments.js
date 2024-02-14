#!/usr/bin/node

const ArgCount = process.argv.length;

if (ArgCount === 2) {
	console.log('No argument');
} else if (ArgCount === 3) {
	console.log('Argument found');
} else {
	console.log('Arguments found');
}
