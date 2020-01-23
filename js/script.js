
$(document).on('click', '#send', function () {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = $('#input_chat').val();
  message_baloon.addClass('chat-out');
  message_baloon.children('.chat-text').text(message_input);
  $('.chat-window').append(message_baloon);
  $('#input_chat').val('');
  setTimeout(reply, 1000);
});



function reply() {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = 'Ok';
  message_baloon.addClass('chat-in');
  message_baloon.children('.chat-text').text(message_input);
  $('.chat-window').append(message_baloon);
}

$('#ico_search').click(
  function () {
    var search_input = $('#input_search').val();
    console.log(search_input);
    var contact_row = $('#list_contact').children('li');
    console.log(contact_row);
    var contact_name = $('#list_contact').children('li').children('.contact-info').children('p.text-name').text();
    console.log(contact_name);

    // for (var i = 0; i < contact_row.length; i++) {
    //   console.log(contact_name[i]);
    //   if (search_input == contact_name[i]) {
    //     console.log('uguale');
    //   }else {
    //     contact_row.hide();
    //     console.log('diverso');
    //   }
    // }
  }
);
