var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(function(data) {
      //in this portion we make it give us messages
      for (var i = 0; i < data.results.length; i ++) {
        //console.log(data.results[i]);
        console.log(data);
        //$('#chats').append(`<p>${data.results[i].text} by ${data.results[i].username}</p>`);
        MessagesView.renderMessage(data.results[i]);

      }
    });
  },

  renderMessage: function(message) {
    //each individual obj
    console.log(message.username, message.text);
    // ($('<div>' + message.username + message.text + '</div>')).appendTo($('#chats'))

    message.username = message.username || 'undefined';
    message.text = message.text || 'undefined';
    $('#chats').append(MessageView.render(message));

  }

};