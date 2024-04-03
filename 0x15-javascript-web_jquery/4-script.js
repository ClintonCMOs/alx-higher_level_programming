// Wait for the document to be fully loaded
$(document).ready(function(){
    // Add a click event listener to the element with ID 'red_header'
    $('#toggle_header').click(function(){
        // Toggle between red and green classes on the header element
        $('header').toggleClass('red green');
    });
});
