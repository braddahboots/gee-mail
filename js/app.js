window.onload = function(){
  var count = 0;

  for (var i = 0; i < window.geemails.length; i++) {
      displayEmail(window.geemails[i]);
      count++;
  }

  function displayEmail() {
      var message = document.getElementById('message');

      var email = document.createElement('div');
      email.id = 'emails';
      message.appendChild(email);

      var subject = document.createElement('h4');
      subject.id = "subject"+count;
      subject.innerHTML = window.geemails[i].subject;
      email.appendChild(subject);

      var date = document.createElement('span');
      date.id = "date"+count;
      date.innerHTML = (window.geemails[i].date);
      email.appendChild(date);

      var content = document.createElement('div');
      content.id = 'content';
      date.appendChild(content);

      var sender = document.createElement('div');
      sender.id = "sender";
      sender.innerHTML = window.geemails[i].sender;
      content.appendChild(sender);

      var body = document.createElement('div');
      body.id = "body";
      body.innerHTML = window.geemails[i].body;
      content.appendChild(body);

    $(document).ready(function (){
      $('#subject'+count).click(function(){
        $('#content').show();
      });
    });

  }

  var sidebar  = document.getElementById('emailCount');

  var inbox = document.createElement('inbox');
    inbox.id = "inbox";
    inbox.innerHTML = (window.geemails.length + displayEmail.length);
    sidebar.appendChild(inbox);

};