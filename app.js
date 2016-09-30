$(document).ready(function(){
	//votre code
	var counter =0 ;
	$(".cake").click(function() {
		console.log(counter++);
		$('span').html(counter+1)
		if (counter === 20){
			alert("Arrête sion bientôt tu va pouvoir acheter une nouvelle souris")
		}
			if (counter === 40){
			alert("c'est pas faux")
		}
			if (counter === 60){
			alert("Ah mais nan je connais pas de mot la ")
		}
			if (counter === 80){
			alert("ok")
		}
			if (counter === 100){
			alert("perceval")
		}
	});	
});