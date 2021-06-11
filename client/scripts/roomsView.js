var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: new Set(),
  roomname: 'lobby',

  initialize: function() {
    //RoomsView.$select.append($('<option>TestingRoom</option>'))
    //RoomsView.$select.append($('<option>lobby</option>'))
    // var testroomname= $("#rooms select option:selected").text();

    RoomsView.$select.change(function() {
      console.log( "Handler for .change() called." );
      Rooms.createRoom();
    });
    RoomsView.$button.on('click', RoomsView.renderRoom);
    //if using select, then rooms.()
    // $('#message').val()
    Parse.readAll(function(data) {
      //in this portion we make it give us messages
      //console.log(data);

      for (var i = data.results.length - 1; i >= 0; i --) {
        //console.log(data.results[i]);
        //console.log(data);

        //$('#chats').append(`<p>${data.results[i].text} by ${data.results[i].username}</p>`);
        if (data.results[i].roomname) {
          //RoomsView.renderRoom(data.results[i].roomname);
          RoomsView.rooms.add(data.results[i].roomname);
        }
        //RoomsView.addRoom();
      }
      RoomsView.rooms.forEach(function (room) {
        RoomsView.$select.append($(`<option>${room}</option>`))
      });
      //inside set loop


    });

  },
  // <select> </select>
  addRoom: function () {

    //parse readAll and list all the messages that are part of the right lobby

    // this.rooms.add(text);
    //$("#chats .chat").empty();

    //console.log(this.rooms);
    // RoomsView.addRoom();



    // // console.log('addRoom:', this.rooms);
    // for (var keys in this.rooms) {
    //   console.log('test:');
    //   console.log('append function', keys);
    //   $select.appendTo(`<option>${this.room.keys}</option>`)
    // }

  },

  renderRoom: function(inputName) {
    console.log('click!');
    var getRoomName = $('#message').val();
    // var currentRoomName = $('#rooms select option:selected').text()
    console.log('text form: ', getRoomName);
    RoomsView.rooms.add(getRoomName);
    RoomsView.$select.append($(`<option>${getRoomName}</option>`))
    // RoomsView.roomname = currentRoomName;
    // console.log('dropdown menu: ', currentRoomName);
    //room selection
    // RoomsView.$select.append($(`<option>${inputName}</option>`))
    // console.log($('#rooms select option:selected').text())
    // RoomsView.testroomname= $("#rooms select option:selected").text();
    // console.log(RoomsView.testroomname);
    //CS testing code***
    // $('#rooms select').on("change"),function(){
    //   var roomSelect = $(this).find(':selected').text();

    // }
    // console.log(roomSelect);
    //end testing code ***
    ///

    //$('#chats .chat').empty() will clear everything in this part of the dom, and then we can re-prepend all our chats to the dom
    //using the right username only


  }


};
