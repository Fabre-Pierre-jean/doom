//BOSS
/*
var affichagevieplayer=document.getElementById('playerScore');
var affichagevieboss=document.getElementById('affichagevieboss');
var boss_vie = 95;
var boss_degat = 10;
var player_vie = 100;

function bossvie() 
{
	if(boss_vie<=0)
	{
		affichagevieboss.innerHTML = boss_vie;
		boss_vie = 100;
	}
	else
	{
        affichagevieboss.innerHTML = boss_vie;
        boss_vie = boss_vie-5;
    }
}


function bossdegat()
{
    if(player_vie<=0)
    {
        affichagevieplayer.innerHTML = player_vie;
    	player_vie = 100;
    }
    else
    {
    	affichagevieplayer.innerHTML = player_vie;
        player_vie = player_vie-20;
    }
}

setInterval("bossdegat()",2000);*/

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


function mechantdegat()
{
    if(player_vie<=0)
    {
        reinit()
        affichagevieplayer.innerHTML = player_vie+ " %";;
		player_vie = 100;
		
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

