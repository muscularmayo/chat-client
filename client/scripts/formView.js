var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var dropdownRoom = $('#rooms select option:selected').text()
    var message = {
      'username': App.username,
      'text': $('#message').val(),
      'roomname': dropdownRoom
    };
    console.log(message);
    Parse.create(message);
    MessagesView.renderMessage(message);


    $('form').trigger('reset');

    /*$(document).ready(function () {
      //MessagesView.initialize();
      location.reload();
    });*/
    //$('#chats').reload(true);
    //App.initialize();
    //        //$('#chats').append(`<p>${data.results[i].text} by ${data.results[i].username}</p>`);
    // $('#message')
    //var message = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan'
    // };
    //call Parse.create(message)
    console.log('click!');
    console.log('test:', $('#message').val());
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};