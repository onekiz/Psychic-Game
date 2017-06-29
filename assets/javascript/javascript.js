

	var win = 0;
	var loss = 0;
	var guessleft = 10;
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","y","v","w","q","x","z"];
    var compLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
    var numGuess = 1;
    var play = 1;
	var list = [" "];
    document.getElementById("wn").innerHTML = win;
    document.getElementById("lss").innerHTML = loss;
    document.getElementById("life").innerHTML = guessleft;
    
    console.log(compLetter); 

function clearThis(target){
        target.value= "";
    }
    
function myFunction() {

    list [numGuess] = document.getElementById("playerLetter").value;    //Takes user data
      
    var temp = true;                                                   //To control entered letter data
if (list[numGuess]!=="" && list[numGuess]!==" "){
    //Checking each entered element if it repeated
    for (var i = 1; i<list.length-1; i++){

        if (list[numGuess] === list[i]){
            var temp = false; 
            alert("YOU USED THAT LETTER!!!!");   
        }
    }

    //main code - conditions of game  - win , loss, play again, dont want to play
    if(temp){

    	if (list [numGuess]==compLetter){
    		win++;
    		document.getElementById("wn").innerHTML = win;
    		document.getElementById("lss").innerHTML = loss;
    		document.getElementById("life").innerHTML = guessleft;
    		document.getElementById("playerGuess").innerHTML = list;
            alert ("YOU WIN!!!!");
            var playAgain = confirm("Play Again?");
            if(playAgain===false){play=0;}
        }

    	else if (list[numGuess]!==compLetter){
    		guessleft--;
    		document.getElementById("life").innerHTML = guessleft;
    		document.getElementById("playerGuess").innerHTML = list.join("-");
    		numGuess++;
    	}
    
        if (guessleft==0){
            loss++;
    	    alert("You Lost!!! The letter was: " + compLetter);
            document.getElementById("wn").innerHTML =" " + win;
            document.getElementById("lss").innerHTML = " " + loss;
            var playAgain = confirm("Play Again?");
                if(playAgain==false){play=0;}
        }

        if (playAgain) {
            compLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
            document.getElementById("playerGuess").innerHTML =" ";
            list = [" "];
            numGuess = 1;
            guessleft = 10;
            document.getElementById("life").innerHTML = guessleft;
        }	

        else if (play==0){
            alert("BYEEEE!");
            compLetter = "BYEEEE";
            document.getElementById("wn").innerHTML = ("");
            document.getElementById("lss").innerHTML = ("");
            document.getElementById("life").innerHTML = ("");
            document.getElementById("playerGuess").innerHTML = ("");
        }
    }
}
}

	

