var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: new Set(),
  roomname: 'lobby',

  initialize: function() {

    //dropdown room selected
    RoomsView.$select.change(function() {
      console.log( "Handler for .change() called." );
      Rooms.createRoom();
    });
    RoomsView.$button.on('click', RoomsView.renderRoom);

    Parse.readAll(function(data) {

      for (var i = data.results.length - 1; i >= 0; i --) {

        if (data.results[i].roomname) {

          RoomsView.rooms.add(data.results[i].roomname);
        }

      }
      RoomsView.rooms.forEach(function (room) {
        RoomsView.$select.append($(`<option>${room}</option>`))
      });

    });

  },

  addRoom: function () {
  },

  renderRoom: function(inputName) {
    console.log('click!');
    var getRoomName = $('#message').val();
    console.log('text form: ', getRoomName);

    RoomsView.rooms.add(getRoomName);
    RoomsView.$select.append($(`<option>${getRoomName}</option>`))

  }


};
