$(document).on('deviceready', function() {
	$.ajax({
			url: "http://e-wit.co.uk/correlater/user/getMyInfo",
      dataType: 'json'}).done(function(data){
			$('#feedBack').html(data.message);
      if(data.message == "Logged In") {
					window.location='main.html';
			}
		});
  var $loginButton = $('#addAccButton');
  var $signIn = $('#signIn');

  $loginButton.on('click', function() {
    window.location='addAccount.html';
  });

  $signIn.on('click', function(){
    // $.mobile.changePage( "signIn.html", { transition: "pop", changeHash: true });
    window.location='signIn.html';
  });
});
