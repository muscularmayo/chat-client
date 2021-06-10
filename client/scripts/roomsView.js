var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: new Set(),

  initialize: function() {
    RoomsView.$select.append($('<option>TestingRoom</option>'))
    RoomsView.$select.append($('<option>lobby</option>'))
    Parse.readAll(function(data) {
      //in this portion we make it give us messages
      console.log(data);

      for (var i = data.results.length - 1; i >= 0; i --) {
        //console.log(data.results[i]);
        //console.log(data);

        //$('#chats').append(`<p>${data.results[i].text} by ${data.results[i].username}</p>`);
        if (data.results[i].roomname) {
          RoomsView.renderRoom(data.results[i].roomname);

        }

      }
    });

  },
  // <select> </select>
  append: function () {
    for (var keys in this.rooms) {
      console.log('append function', keys);
      $select.appendTo(`<option>${this.room.keys}</option>`)
    }

  },

  renderRoom: function(text) {
    this.rooms.add(text);
    console.log(this.rooms);
    RoomsView.append();
  }

};
