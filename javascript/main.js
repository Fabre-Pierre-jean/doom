
function start(){
    myImg.onclick=mechantvie;
    setInterval("mechantdegat()",1000);
setInterval("zoomin()",800);
cliqueMechant2()
    
}

//armes icones

var iconeArme=document.getElementById("iconeArme")

function affichageArme(){
    iconeArme.src="../images/armes/1ere arme.png"
    iconeArme.style.width="150px"; 
    iconeArme.style.height="70px"; 

}
affichageArme()
//PLAYER

var mechant2 = document.getElementById('mechant2');
var gain = document.getElementById('playerGain');
var score = document.getElementById('playerScore');
var comptGain = -1;
var comptScore = -1;
var VieMechant =  100;
var mechantMort = 10;

function cliqueMechant2(){
	comptScore++;
	score.innerHTML = comptScore;
	/*--------------------Score pour chaqueClique--------------------------*/

	/*--------------------Gain pour chaqueClique--------------------------*/
	if(VieMechant >= 5){//le vie ennemi 100%
        VieMechant = VieMechant-5;
		
		comptGain++;
		gain.innerHTML = comptGain;
	}/*-------------------Gain apres avoir tuer le mechant---------------*/
	else if (VieMechant == 5){
		gain.innerHTML = comptGain;
		VieMechant = 100;
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
var mechant_degat = 10;
var player_vie = 100;

function mechantvie() 
{
	
	if(VieMechant<5)
	{
        reinit()
        VieMechant = 100;
        affichageviemechant.innerHTML = VieMechant + " %"; 
		comptGain = parseInt(comptGain) + parseInt(mechantMort);
	}
	else
	{
        
    affichageviemechant.innerHTML = VieMechant+ " %";
    cliqueMechant2()
    }
}

function restart(){
    mort_img.src="";
    reinit2();
}

var nbVie=document.getElementById("nbVie");
nbrVie=3;
nbVie.innerHTML=nbrVie;
//Quand on meurt

var mort_img = document.getElementById("mort_img")
function mechantdegat()
{
    
    if(player_vie==0)
    {
        
        affichagevieplayer.innerHTML = player_vie+ " %";;
        player_vie = 0;
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
            myImg.style.height = (currHeight + 15) + "px";
            myImg.style.width = (currWidth + 10) + "px";
		} 
}

function reinit(){
    
    

    VieMechant = 100;
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

function reinit2(){
    
    nbrVie--;
    nbVie.innerHTML=nbrVie;

    player_vie = 100;
    VieMechant = 100;
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

