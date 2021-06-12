var Friends = {

  initialize: function() {

    MessagesView.$chats.on('click', '.username', function() {
      // var userName = ($(this).text()).slice(1);
      var userName = ($(this).text()).slice(11);
      userName = userName.trim();
      console.log('CLICK:', userName);
      //Friends.myFriend(userName);
      // alert('Handler for .click is called');
      $('#chats').empty();

      Parse.readAll(function(data) {

        for (var i = data.results.length - 1; i >= 0; i --) {


          data.results[i].username = data.results[i].username || 'undefined';
          console.log(data.results[i].username, 'looking for:', userName);
          if (data.results[i].username === userName) {
            console.log('*****MATCH***');
            MessagesView.renderMessage(data.results[i], userName);
          } else {
            // console.log("Not matched");
            MessagesView.renderMessage(data.results[i]);
          }
        }
      });
    });


  },





};