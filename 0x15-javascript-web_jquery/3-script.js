// Wait for the document to be fully loaded
$(document).ready(function(){
  // Add a click event listener to the element with ID 'red_header'
  $('#red_header').click(function(){
      // Select the <header> element and add the class 'red' to it
      $('header').addClass('red');
  });
});
