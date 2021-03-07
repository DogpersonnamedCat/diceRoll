

function throwDice(){
    //generating random numbers
    let rand1 = Math.round(Math.random()*5) + 1;
    let rand2 = Math.round(Math.random()*5) + 1;
    
    //set images
    document.getElementById("dice1").src = "dice-faces/d" + rand1 + ".png";
    document.getElementById("dice2").src = "dice-faces/e" + rand2 + ".png";

    document.getElementById("message").innerHTML = totalRoll(rand1, rand2);
}
 

function totalRoll (rand1, rand2){
    
    if (rand1 + rand2 === 2){
        return "SNAKE EYES, GO TO JAIL";
    } else if (rand1 + rand2 === 3){
        return "You Rolled a 3";
    } else if (rand1 + rand2 === 4){
        return "You Rolled a 4";
    } else if (rand1 + rand2 === 5){
        return "You Rolled a 5";
    } else if (rand1 + rand2 === 6){
        return "You Rolled a 6";
    } else if (rand1 + rand2 === 7){
        return "You Rolled a 7";
    } else if (rand1 + rand2 === 8){
        return "You Rolled a 8";
    } else if (rand1 + rand2 === 9){
        return "You Rolled a 9";
    } else if (rand1 + rand2 === 10){
        return "You Rolled a 10";
    } else if (rand1 + rand2 === 11){
        return "You Rolled a 11";
    } else if (rand1 + rand2 === 12){
        return "You Rolled a 12, YOU WIN $200!";
    }
    
}

















    


