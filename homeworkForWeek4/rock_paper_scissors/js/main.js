var humanScore=0,computerScore=0

document.getElementById("rock").onclick=fightWithRock;
function fightWithRock(){
	var randoweapo=botsWeapon();
	if(randoweapo=="paper"){
		computerScore= computerScore+1;
		document.getElementById("computerScore").innerHTML=computerScore;
	}
	if(randoweapo=="scissors"){
		humanScore= humanScore+1;
		document.getElementById("humanScore").innerHTML=humanScore;
	}
}

document.getElementById("paper").onclick=fightWithPaper;
function fightWithPaper(){
	var randoweapo=botsWeapon();
	if(randoweapo=="rock"){
		humanScore= humanScore+1;
		document.getElementById("humanScore").innerHTML=humanScore;
	}
	if(randoweapo=="scissors"){
		computerScore= computerScore+1;
		document.getElementById("computerScore").innerHTML=computerScore;
	}
	}

document.getElementById("scissors").onclick=fightWithScissors;
function fightWithScissors(){
	var randoweapo=botsWeapon();
	if(randoweapo=="paper"){
		humanScore= humanScore+1;
		document.getElementById("humanScore").innerHTML=humanScore;
	}
	if(randoweapo=="rock"){
		computerScore= computerScore+1;
		document.getElementById("computerScore").innerHTML=computerScore;
	}



function botsWeapon(){
	var randoWeapoNum=Math.random(),randoweapo;
	if(randoWeapoNum<.33333){
		randoWepo="rock";
	}
	else if(randoWeapoNum<.67){
		randoweapo="paper";
	}
	else{
		randoweapo="scissors"
	}
	return randoweapo;
}

