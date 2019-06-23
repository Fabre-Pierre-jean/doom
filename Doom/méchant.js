//Mechant normal

var affichagevieplayer=document.getElementById('affichagevieplayer');
var affichageviemechant=document.getElementById('affichageviemechant');
var mechant_vie = 45;
var mechant_degat = 10;
var player_vie = 100;

function mechantvie() 
{
	if(mechant_vie<=0)
	{
		affichageviemechant.innerHTML = mechant_vie;
		mechant_vie = 50;
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