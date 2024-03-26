#!/usr/bin/node
const request = require('request'); // Use const for requiring modules

const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`; // Use template literals for string concatenation

// Use arrow functions for callbacks
request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) { // Check if response is successful
    const characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
  } else {
    console.error(error); // Proper error handling
  }
});

// Use arrow functions for callbacks
function printCharacters(characters, index) {
  if (index >= characters.length) {
    return; // Exit condition for recursion
  }

  request(characters[index], (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(JSON.parse(body).name);
      printCharacters(characters, index + 1);
    } else {
      console.error(error); // Proper error handling
    }
  });
}