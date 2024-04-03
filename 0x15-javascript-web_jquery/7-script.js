//Make an AJAX GET request to fetch the character data
//Extract the character name from the fetched data
// Display the character name in the <div> tag with ID "character"
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json',
  function (data) {
    $('DIV#character').text(data.name);
  });
