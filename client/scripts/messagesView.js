var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(function(data) {
      //in this portion we make it give us messages
      console.log(data);

      for (var i = data.results.length - 1; i >= 0; i --) {
        //console.log(data.results[i]);
        //console.log(data);

        //$('#chats').append(`<p>${data.results[i].text} by ${data.results[i].username}</p>`);
        MessagesView.renderMessage(data.results[i]);

      }
    });
  },

  renderMessage: function(message) {
    //each individual obj
    //console.log(message.username, message.text);
    // ($('<div>' + message.username + message.text + '</div>')).appendTo($('#chats'))

    message.username = message.username || 'undefined';
    message.username = message.username.escape();
    message.text = message.text || 'undefined';
    message.text = message.text.escape();

    $('#chats').prepend(MessageView.render(message));

  },
  //<script>-&ltscript&gt


};

String.prototype.escape = function(str) {
  var tagsToReplace = {
    '&': '&amp:',
    '<': '&lt;',
    '>': '&gt;'
  };
  return this.replace(/[&<>]/g, function (tag) {
    return tagsToReplace[tag] || tag;
  });
}