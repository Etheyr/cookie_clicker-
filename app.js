$(document).ready(function(){


	var counter =0 ;

	var message = [ 'Provencal le gaulois','Karadok','Bort','Arthur le sanglier de cornouaille','Lancelot'];

	function random(){

		var randomMessage = Math.floor(Math.random()* 4)+ 1;

		return randomMessage;

	}

	$('img').click(function(){

		counter++;

		$('span').text(counter);

		if (counter % 20 === 0){
			
			var nbalea = random();
			var randomMes = message[nbalea];
			alert(randomMes);

		}

	});

});
