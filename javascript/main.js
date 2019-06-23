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
	var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    var debHeight = 252;
    var debWidth = 200;
	if(mechant_vie==0)
	{
		affichageviemechant.innerHTML = mechant_vie;
		mechant_vie = 100;
           reinit()
	}
	else
	{
    affichageviemechant.innerHTML = mechant_vie;
    mechant_vie = mechant_vie-5;
    }
}


function mechantdegat()
{
    if(player_vie<=0)
    {
        affichagevieplayer.innerHTML = player_vie;
		player_vie = 100;
		
    }
    else
    {
    	affichagevieplayer.innerHTML = player_vie;
        player_vie = player_vie-10;
    }
}

setInterval("mechantdegat()",1000);


//avancement mechant

var myImg = document.getElementById("mechantImg");
function zoomin(){
    var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    var debHeight = 252;
    var debWidth = 200;
		if(currHeight >= 500){ //a la place de la on met if vie_monstre == 0 OU currHeight >=750
            reinit()          
		} else{
            myImg.style.height = (currHeight + 40) + "px";
            myImg.style.width = (currWidth + 20) + "px";
		} 
}

setInterval("zoomin()",1000);

function reinit(){
    myImg.style.height= (debHeight) + "px"
    myImg.style.width= (debWidth) + "px"
    myImg.style.display="flex";
    myImg.style.justifyContent="center";
    myImg.style.width= "40px";
    myImg.style.height= "45px" ;  
    changePerso()
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

