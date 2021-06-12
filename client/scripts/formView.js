var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var dropdownRoom = $('#rooms select option:selected').text();
    var message = {
      'username': App.username,
      'text': $('#message').val(),
      'roomname': dropdownRoom
    };
    Parse.create(message);
    MessagesView.renderMessage(message);
    $('form').trigger('reset');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};