// Appending list
$(function () {
  $('div#add_item').bind('click', function () {
    $('ul.my_list').append('<li>Item</li>');
  });
});

// Popping the last item
$(function () {
  $('div#remove_item').bind('click', function () {
    $('ul.my_list li:last').remove();
  });
});

// Clearing the whole list
$(function () {
  $('div#clear_list').bind('click', function () {
    $('ul.my_list').remove();
  });
});
