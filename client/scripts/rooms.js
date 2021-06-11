var Rooms = {

  initialize: function() {},
  createRoom: function () {
    console.log("We are in createRoom");
    $('#chats .chat').empty();
    Parse.readAll(function(data) {
      //in this portion we make it give us messages
      console.log('render room data', data);

      for (var i = data.results.length - 1; i >= 0; i --) {
        //console.log(data.results[i]);
        //console.log(data);
        if (data.results[i].roomname === $('#rooms select option:selected').text()) {
          MessagesView.renderMessage(data.results[i]);
        }
        //$('#chats').append(`<p>${data.results[i].text} by ${data.results[i].username}</p>`);


      }

    });
  }


};