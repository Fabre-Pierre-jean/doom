//BOSS

var affichagevieplayer=document.getElementById('affichagevieplayer');
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

setInterval("bossdegat()",2000);



  
	
	
    


