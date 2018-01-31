/* "S'inscrire" : Fonctions formulaire */

	function disab() 
		{document.getElementById("valider").disabled = true;}

	function enab() {
		if (Vpseudo() && Vmail() && Vmdp()) { 
			document.getElementById("valider").disabled = false;
		}else{
			document.getElementById("valider").disabled = true; 
		}
	}


	function Vmail() {
		var reg= new RegExp('^[a-z0-9_.-]+@{1}[a-z]{3,}[.]{1}[a-z]{2,4}$','i');
		var str = document.getElementById("mail");
		if (reg.test(str.value)==true){
			str.style.backgroundColor="";
			return true;
		}else{
			str.style.backgroundColor="#FF6262";
			return false;
		}	
	}

	function Vpseudo() {
		var reg = new RegExp('^[a-z0-9_.-]{3,30}$','i');
		var pseudo = document.getElementById("pseudo");
		if ((pseudo.value == "") || (reg.test(pseudo.value)==false)) {
			pseudo.style.backgroundColor="#FF6262";
			return false;
		}else {
			pseudo.style.backgroundColor="";
			return true
		}	
	}
	
	function Vmdp() {
		var mdpA = document.getElementById("passwordA").value;
		var mdpB = document.getElementById("passwordB").value;
		if (mdpA == "") {
			document.getElementById("passwordA").style.backgroundColor="#FF6262";
		}else if (mdpA != "") {
		document.getElementById("passwordA").style.backgroundColor="";
		}
	
		if ((mdpB == mdpA) && (mdpA != "") && (mdpB != "")) {
			document.getElementById("passwordB").style.backgroundColor="";
			return true;
		}else{
			document.getElementById("passwordB").style.backgroundColor="#FF6262";
			return false;
		}
	}

	/* Permet de submit avec la touche Entrée */

	function keycode(event) {
		if (event.keyCode == "13")  {
			document.getElementById("formulaire").submit;
		}
	}
	
	/* Enlève le rouge du onblur lorsque l'on est onfocus */
	
	function color(x) { x.style.backgroundColor="#FFCC66"; }
	

/* "Tutoriel" : Fonctions toggle hide/show */

	/* Toggle0 sert à cacher tous les iframes lors du chargement de la page, sauf le premier */

	function toggle0 () {
		var x = document.getElementsByClassName("hide");
		for (var i=1; i<x.length; i++) {
			x[i].style.display= "none";
		}
	}


	function toggle1 () {
		var video = document.getElementById("piano1");
		if (video.style.display == "none") {
	
			document.getElementById("piano2").style.display = "none";
			document.getElementById("piano3").style.display = "none";
			document.getElementById("piano4").style.display = "none";
			document.getElementById("piano5").style.display = "none";
			
			video.style.display = "block";
		}else{
			video.style.display = "none";
		}
	}	
	function toggle2 () {
		var video = document.getElementById("piano2");
		if (video.style.display == "none") {
			
			document.getElementById("piano1").style.display = "none";
			document.getElementById("piano3").style.display = "none";
			document.getElementById("piano4").style.display = "none";
			document.getElementById("piano5").style.display = "none";
			
			video.style.display = "block";
		}else{
			video.style.display = "none";
		}
	}
	function toggle3 () {
		var video = document.getElementById("piano3");
		if (video.style.display == "none") {
			
			document.getElementById("piano1").style.display = "none";
			document.getElementById("piano2").style.display = "none";
			document.getElementById("piano4").style.display = "none";
			document.getElementById("piano5").style.display = "none";
			
			video.style.display = "block";
		}else{
			video.style.display = "none";
		}
	}
	function toggle4 () {
		var video = document.getElementById("piano4");
		if (video.style.display == "none") {
			
			document.getElementById("piano1").style.display = "none";
			document.getElementById("piano2").style.display = "none";
			document.getElementById("piano3").style.display = "none";
			document.getElementById("piano5").style.display = "none";
			
			video.style.display = "block";
		}else{
			video.style.display = "none";
		}
	}
	function toggle5 () {
		var video = document.getElementById("piano5");
		if (video.style.display == "none") {
			
			document.getElementById("piano1").style.display = "none";
			document.getElementById("piano2").style.display = "none";
			document.getElementById("piano3").style.display = "none";
			document.getElementById("piano4").style.display = "none";
			
			video.style.display = "block";
		}else{
			video.style.display = "none";
		}
	}	
	
	/* Ouvrir tous les onglets avec le bouton */
	
	function onglets() {
		var videoList = [	
			"https://www.youtube.com/watch?v=Cm-gl_wh7AM",
			"https://www.youtube.com/watch?v=Y8DLQDpBhM8",
			"https://www.youtube.com/watch?v=6J3IfOKuGzU",
			"https://www.youtube.com/watch?v=sleZ-hzrtRY",
			"https://www.youtube.com/watch?v=WolqGAgiolM"
			];
		for (var j in videoList) {
			window.open(videoList[j]);
		}
	}

/* "Partitions" : Change la couleur après un clic */

	function changeColor(x) {x.style.color = "#660000";}
