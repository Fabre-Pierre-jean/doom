var mechant2 = document.getElementById('mechant2');
var gain = document.getElementById('playerGain');
var score = document.getElementById('playerScore');
var comptGain = 0;
var comptScore = 0;
var VieMechant = 2;
var mechantMort = 10;

function cliqueMechant2(){
	comptScore++;
	console.log('score = ' +comptScore);
	score.innerHTML = comptScore;
	/*--------------------Score pour chaqueClique--------------------------*/

	/*--------------------Gain pour chaqueClique--------------------------*/
	if(VieMechant >= 1){
		VieMechant--;
		console.log('VieMechant = ' +VieMechant);
		comptGain++;
		console.log('gain = ' +comptGain)
		gain.innerHTML = comptGain;
	}/*-------------------Gain apres avoir tuer le mechant---------------*/
	else if (VieMechant == 0){
		comptGain = parseInt(comptGain) + parseInt(mechantMort);
		console.log('comptGain = comptGain + mechantMort = ' +comptGain);
		console.log('score = ' +comptScore);
		gain.innerHTML = comptGain;
		VieMechant = 3;
		console.log ('VieMechant = ' +VieMechant);
	}
}

