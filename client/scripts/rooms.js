var Rooms = {

  initialize: function() {},
  createRoom: function () {
    console.log('We are in createRoom');
    $('#chats').empty();
    Parse.readAll(function(data) {
      //in this portion we make it give us messages
      console.log('render room data', data);

      for (var i = data.results.length - 1; i >= 0; i --) {

        if (data.results[i].roomname === $('#rooms select option:selected').text()) {
          MessagesView.renderMessage(data.results[i]);
        }

      }

    });
  }


};