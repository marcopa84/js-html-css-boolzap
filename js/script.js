
//MESSAGGI
// invia messaggio
$('#send').click(
  function () {
    send ();
  }
);

function send() {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = $('#input_chat').val();
  message_baloon.addClass('chat-out');
  message_baloon.children('.chat-text').text(message_input);
  $('.chat-window').append(message_baloon);
  $('#input_chat').val('');
  setTimeout(reply, 1000);
}

function reply() {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = 'Ok';
  message_baloon.addClass('chat-in');
  message_baloon.children('.chat-text').text(message_input);
  $('.chat-window').append(message_baloon);
}

// cancella messaggio
// --aprire finestra
$('.chat-message').click(
  function () {
    $('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    $('.chat-command-window').show();
  }
);
// --cancellare messaggio
$('.chat-command-window').children('p').click(
  function () {
    $('.chat-command-window').parent('.chat-command').parent('.chat-message').remove();
  }
);
// --chiudere finestra
$('.chat-message').mouseleave(
  function () {
    $('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    $('.chat-command-window').hide();
  }
);
// CONTATTI

$('#ico_search').click(
  function  () {
    searchChat();
  }
);
$('#input_search').keyup(
  function () {
    searchChat();
  }
);

function searchChat () {
  var search_input = $('#input_search').val().toLowerCase();
  console.log(search_input);
  var contact_row = $('#list_contact').children('li');
  console.log(contact_row);

  for (var i = 0; i < contact_row.length; i++) {
    var contact_name = $('#list_contact').children('li').children('.contact-info').children('p.text-name').eq(i).text().toLowerCase();
    console.log(contact_name);
    if (contact_name.includes(search_input)) {
      contact_row.eq(i).show();
      console.log('uguale');
    }else {
      contact_row.eq(i).hide();
      console.log('diverso');
    }
  }
}
