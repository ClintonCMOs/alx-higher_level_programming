$(document).ready(function(){
    // When the element with ID "add_item" is clicked
    $('#add_item').click(function(){
        // Create a new <li> element with the text "Item"
        var newItem = $('<li>Item</li>');
        // Append the new <li> element to the list with class "my_list"
        $('ul.my_list').append(newItem);
    });
});
