var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username">
          <%= username %>
        </div>
        <div class="text">
          <%= text %>
        </div>

      </div>

    `),

  render1: _.template(`

    <div class="chat">
      <div class="username">
        <%= username %>
      </div>
      <div class="text friend">
        <%= text %>
      </div>

    </div>

  `)
//click the username
//go through server with that username
//render message
//<div class="username" class="friend">
};