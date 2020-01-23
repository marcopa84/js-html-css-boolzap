
$(document).on('click', '#send', function () {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = $('#input_chat').val();
  message_baloon.addClass('chat-out');
  message_baloon.children('.chat-text').text(message_input);
  $('.chat-window').append(message_baloon);
  $('#input_chat').val('');
});
