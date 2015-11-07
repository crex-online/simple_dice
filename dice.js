function rollDice(){
	
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var result = document.getElementById("result");
	var message = document.getElementById("message");
	var message2 = document.getElementById("message2");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    result.innerHTML = "You rolled "+diceTotal+".";
	//set die 1 images
	if (d1 == 1){
		die1.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/200px-Dice-1.svg.png\">";
	} else if (d1 == 2){
		die1.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/200px-Dice-2.svg.png\">";
	} else if (d1 == 3){
		die1.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/200px-Dice-3.svg.png\">";
	} else if (d1 == 4){
		die1.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/200px-Dice-4.svg.png\">";
	} else if (d1 == 5){
		die1.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/200px-Dice-5.svg.png\">";
	} else if (d1 == 6){
		die1.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/200px-Dice-6.svg.png\">";
	}
	//set die 2 images
	if (d2 == 1){
		die2.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/200px-Dice-1.svg.png\">";
	} else if (d2 == 2){
		die2.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/200px-Dice-2.svg.png\">";
	} else if (d2 == 3){
		die2.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/200px-Dice-3.svg.png\">";
	} else if (d2 == 4){
		die2.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/200px-Dice-4.svg.png\">";
	} else if (d2 == 5){
		die2.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/200px-Dice-5.svg.png\">";
	} else if (d2 == 6){
		die2.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/200px-Dice-6.svg.png\">";
	}
	//messages
	message.innerHTML = ' ';
	message2.innerHTML = ' ';
	if (diceTotal < 5 && d1 != d2){
		message2.innerHTML = "Not very good.."
	} else if (diceTotal > 7 && d1 != d2) {
		message2.innerHTML = "Good roll."
	} 
	if (d1 == d2){
		message.innerHTML = "Doubles!";
	} 
	if (d1 + d2 == 2){
		message.innerHTML = "Snake Eyes!";
	}
   
}