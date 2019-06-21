//Mechant de base

var myImg = document.getElementById("mechantImg");
function zoomin(){
    var currHeight = myImg.clientHeight;
    var currWidth = myImg.clientWidth;
    var debHeight = 252;
    var debWidth = 200;
		if(currHeight >= 500){ //a la place de la on met if vie_monstre == 0 OU currHeight >=750
            changePerso()
            myImg.style.height= (debHeight) + "px"
            myImg.style.width= (debWidth) + "px"
            myImg.style.display="flex";
            myImg.style.justifyContent="center";
            myImg.style.width= "40px";
            myImg.style.height= "45px" ;          
		} else{
            myImg.style.height = (currHeight + 40) + "px";
            myImg.style.width = (currWidth + 20) + "px";
		} 
}

setInterval("zoomin()",1000);

function changePerso(){
    //renommer nom des mechant en 1.gif 2.gif 3.gif et mettre random entre 1 et 3
    myImg.src="images/mechant_boss/mechant.gif";
}

