$(document).ready(
  function () {

    //MESSAGGI
    // invia messaggio con click
    $('#send').click(
      function () {
        send ();
      }
    );

    // invia messaggio con enter
    $('#input_chat').keypress(
      function () {
        if (event.which == 13 || event.keyCode == 13){
          send();
        }
      }
    );
    // cambio icona
    $('#input_chat').focusin(
      function () {
        $('#send').removeClass('fa-microphone').addClass('fa-paper-plane');
      }
    );
    $('#input_chat').focusout(
      function () {
        $('#send').removeClass('fa-paper-plane').addClass('fa-microphone');
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
        var contactSelectedImg = $(this).find('img').attr('src');
        var contactSelectedName = $(this).find('.text-name').text();
        console.log(contactSelectedImg);
        console.log(contactSelectedName);
        // mostro la finestra attiva
        $('.chat-window').removeClass('active-window');
        $('.chat-window[data-phone="'+contactSelected+'"]').addClass('active-window');
        // cambio la foto
        $('.right-col').find('img').attr('src',contactSelectedImg);
        // cambio nome
        $('.right-col').find('.first-row-data-name').text(contactSelectedName);
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
  if (message_input.length != 0){
    $('.active-window').append(message_baloon);
    scrollMessage();
    $('#input_chat').val('');
    setTimeout(reply, 1000);
  }
}

// --risposta
function reply() {
  var message_baloon = $('.template-chat .chat-message').clone();
  var message_input = ['Ok','così è se ti pare!', 'fai come vuoi!', 'la vita è una, fai tu!...','TI AMO!','Tanto va la gatta al lardo, che ci lascia lo zampino!','2 + 2 fa quattro! ^_^'];
  var i = getRandomIntInclusive(0,message_input.length);
  message_baloon.addClass('chat-in');
  message_baloon.children('.chat-text').text(message_input[i]);
  message_baloon.children('.chat-date').text(getTime());
  $('.first-row-data-date').text('Online');
  var time1 = getRandomIntInclusive(1000,4000);
  var time2 = getRandomIntInclusive(4000,6000);
  var time3 = getRandomIntInclusive(6000,8000);
  setTimeout(function () {
    $('.first-row-data-date').text('Sta scrivendo...');
  },time1);
  setTimeout(function () {
    $('.active-window').append(message_baloon);
    scrollMessage();
    $('.first-row-data-date').text('Online');
  } ,time2);
  setTimeout(function () {
    $('.first-row-data-date').text('ultimo accesso oggi, alle ' + getTime());
  },time3);

}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//autoscroll

function scrollMessage() {
   // altezza elemento conversazione attiva
    var heightContainer = $('.active-window').height();
    console.log(heightContainer);
    // spostiamo scroll container di tutte le conversazioni
    $('.active-window').scrollTop(heightContainer);
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
