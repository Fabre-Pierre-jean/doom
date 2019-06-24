
//PLAYER

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
	}/*-----------------------------------------------------------------*/
	/*--------------------Pour afficher les equipements-------------*/
	if(comptGain >= acheterPistolet ){
		pistolet.style.opacity = "1";
	}
	if(comptGain >= acheterPompe){
		pompe.style.opacity = "1";
	}
	if(comptGain >= acheterAk47){
		ak47.style.opacity = "1";
	}
	if(comptGain >= acheterBazooka){
		bazooka.style.opacity = "1";
	}
}


//Mechant normal

var affichagevieplayer=document.getElementById('playerVie');
var affichageviemechant=document.getElementById('affichageviemechant');
var mechant_vie = 100;
var mechant_degat = 10;
var player_vie = 100;

function mechantvie() 
{
	
	if(mechant_vie==0)
	{
        reinit()
        mechant_vie = 100;
		affichageviemechant.innerHTML = mechant_vie + " %";   
	}
	else
	{
    affichageviemechant.innerHTML = mechant_vie+ " %";
    mechant_vie = mechant_vie-5;
    }
}

function restart(){
    mort_img.src="";
    reinit();
}

var mort_img = document.getElementById("mort_img")
function mechantdegat()
{
    if(player_vie==0)
    {
        
        affichagevieplayer.innerHTML = player_vie+ " %";;
        player_vie = 100;
        mort_img.src="../images/mort ou fin/mort_nous.gif";
        myImg.style.display="none";
        mort_img.onclick=restart;
        
    }
    else
    {
    	affichagevieplayer.innerHTML = player_vie+ " %";;
        player_vie = player_vie-5;
    }
}
setInterval("mechantdegat()",500);


//avancement mechant

var myImg = document.getElementById("mechantImg");
function zoomin(){
    var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    var debHeight = 252;
    var debWidth = 200;
		if(currHeight >= 500){ 
            reinit()
            
            
		} else{
            myImg.style.height = (currHeight + 40) + "px";
            myImg.style.width = (currWidth + 20) + "px";
		} 
}

setInterval("zoomin()",1000);

function reinit(){
    player_vie = 100;
    mechant_vie = 100;
    var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    var debHeight = 252;
    var debWidth = 200;
        myImg.style.height= (debHeight) + "px"
        myImg.style.width= (debWidth) + "px"
        myImg.style.display="flex";
        myImg.style.justifyContent="center";
        myImg.style.width= "40px";
        myImg.style.height= "45px" ;  
        changePerso()
        vieMechant = 100;
        affichageviemechant.innerHTML=vieMechant + " %"
}


function getRandomMechant(){
      var nbre = '123';
      var image = 'images/mechant_boss/';
      for (var z = 0; z < 1; z++ ) {
          image += nbre[Math.floor(Math.random() * 3)] + ".gif";
      }
      return image;
}
  

function changePerso(){
      myImg.src=getRandomMechant();
}

