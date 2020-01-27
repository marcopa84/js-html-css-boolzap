$(document).ready(
  function () {

    //MESSAGGI
    // invia messaggio
    $('#send').click(
      function () {
        send ();
      }
    );

    $('#input_chat').keypress(
      function () {
        if (event.which == 13 || event.keyCode == 13){
          send();
        }
      }
    );

    // --aprire e chidere finestra delle proprietà messaggio
    $(document).on('click', '.chat-icon',
      function () {
        if ($(this).hasClass('fa-chevron-down')) {
          $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else{
          $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
        };
        $(this).next('.chat-command-window').toggle();
      }
    );

    // --e poi cancellare messaggio
    $(document).on('click','.chat-command-window p',
    function () {
      $(this).parent('.chat-command-window').parent('.chat-command').parent('.chat-message').remove();
    });

    // CONTATTI
    // ricerca contatti
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


    // CHAT ATTIVA

    $('#list_contact li').click(
      function () {
        $('#list_contact li').removeClass('contact_active');
        $(this).addClass('contact_active');
        var contactSelected = $(this).attr('data-phone');
        console.log(contactSelected);
        $('.chat-window').removeClass('active-window');
        // $('.chat-window [data-phone="' + contactSelected + '"]').addClass('active-window');
        $('.chat-window[data-phone="'+contactSelected+'"]').addClass('active-window');
      }
    );





  }
);

// ----FUNZIONI----

// --invio messaggi
function send() {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = $('#input_chat').val();
  message_baloon.addClass('chat-out');
  message_baloon.children('.chat-text').text(message_input);
  message_baloon.children('.chat-date').text(getTime());
  $('.active-window').append(message_baloon);
  $('#input_chat').val('');
  setTimeout(reply, 1000);
}

// --risposta
function reply() {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = ['Ok','così è se ti pare!', 'fai come vuoi!', 'la vita è una, fai tu!...','TI AMO!','Tanto va la gatta al lardo, che ci lascia lo zampino!','2 + 2 fa quattro! ^_^'];
  var i = getRandomIntInclusive(0,message_input.length);
  message_baloon.addClass('chat-in');
  message_baloon.children('.chat-text').text(message_input[i]);
  message_baloon.children('.chat-date').text(getTime());
  $('.active-window').append(message_baloon);
  $('.first-row-data-date').text('ultimo accesso oggi, alle ' + getTime());
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//orario
function getTime() {
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;
  return time;
}
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

// ricerca contatti colonna di sinistra
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
