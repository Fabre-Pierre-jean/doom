var pistolet = document.getElementById('pistolet');
var pompe = document.getElementById('pompe');
var ak47 = document.getElementById('ak47');
var bazooka = document.getElementById('bazooka');
var acheterPistolet = 50;/*--------------Initialisation des coûts des armes----------------*/
var acheterPompe = 70;/*--------------Initialisation des coûts des armes----------------*/
var acheterAk47 = 80;/*--------------Initialisation des coûts des armes----------------*/
var acheterBazooka= 100;/*--------------Initialisation des coûts des armes----------------*/
function arme1(){
	if(comptGain < acheterPistolet){
		alert('Vous n avez pas asser d argent');
		pistolet.style.opacity="0.2";
	}
	else if(comptGain > acheterPistolet){
		comptGain = comptGain - acheterPistolet;
		console.log('comptGain = ' +comptGain);
		gain.innerHTML = comptGain;
		return cliqueMechant2();
	}
}/*----------------------fonction pour pouvoir gagner les armes---------------------------------*/
function arme2(){
	if(comptGain < acheterPompe){
		alert('Vous n avez pas asser d argent');
		pompe.style.opacity="0.2";
	}
	else if(comptGain > acheterPompe){
		comptGain = comptGain - acheterPompe;
		console.log('comptGain = ' +comptGain);
		gain.innerHTML = comptGain;
		return cliqueMechant2();
	}
}/*----------------------fonction pour pouvoir gagner les armes---------------------------------*/
function arme3(){
	if(comptGain < acheterAk47){
		alert('Vous n avez pas asser d argent');
		ak47.style.opacity="0.2";
	}
	else if(comptGain > acheterAk47){
		comptGain = comptGain - acheterAk47;
		console.log('comptGain = ' +comptGain);
		gain.innerHTML = comptGain;
		return cliqueMechant2();
	}
}/*----------------------fonction pour pouvoir gagner les armes---------------------------------*/
function arme4(){
	if(comptGain < acheterBazooka){
		alert('Vous n avez pas asser d argent');
		bazooka.style.opacity="0.2";
	}
	else if(comptGain > acheterBazooka){
		comptGain = comptGain - acheterbazooka;
		console.log('comptGain = ' +comptGain);
		gain.innerHTML = comptGain;
		return cliqueMechant2();
	}
}/*----------------------fonction pour pouvoir gagner les armes---------------------------------*/


