function rest(){
	document.getElementById("player1").innerHTML = "Player 1 wins = 0"
	document.getElementById("player2").innerHTML = "Player 2 wins = 0"
	document.getElementById("1").innerHTML = ""
	document.getElementById("2").innerHTML = ""
	document.getElementById("3").innerHTML = ""
	document.getElementById("4").innerHTML = ""
	document.getElementById("5").innerHTML = ""
	document.getElementById("6").innerHTML = ""
	document.getElementById("7").innerHTML = ""
	document.getElementById("8").innerHTML = ""
	document.getElementById("9").innerHTML = ""

}
function play(){
	document.getElementById("1").innerHTML = ""
	document.getElementById("2").innerHTML = ""
	document.getElementById("3").innerHTML = ""
	document.getElementById("4").innerHTML = ""
	document.getElementById("5").innerHTML = ""
	document.getElementById("6").innerHTML = ""
	document.getElementById("7").innerHTML = ""
	document.getElementById("8").innerHTML = ""
	document.getElementById("9").innerHTML = ""

}

// putting X and O and checking if there the box is full or empty
var x = 2 // for the turn
function onClick(id){
	console.log(id)
		if (document.getElementById(id).innerHTML === ""){ // checking if the box is full or not

x++
// if the x = 0 then it's player 1 on turn(X)
	if(x % 2 === 0){ 
		document.getElementById("player").innerHTML = "Player 1 turns"
	document.getElementById(id).innerHTML = "O"
	}
	// if the x is odd then it's player 2 on turn(O)
	if(x % 2 !== 0){ 
		document.getElementById("player").innerHTML = "Player 2 turns"
document.getElementById(id).innerHTML = "X"
  }
 }
 
// when the board is full then (Game Over)
 if ((document.getElementById(1).innerHTML === "X" || document.getElementById(1).innerHTML === "O") && (document.getElementById(2).innerHTML === "X" || document.getElementById(2).innerHTML === "O") && (document.getElementById(3).innerHTML === "X" || document.getElementById(3).innerHTML === "O") && (document.getElementById(4).innerHTML === "X" || document.getElementById(4).innerHTML === "O") && (document.getElementById(5).innerHTML === "X" || document.getElementById(5).innerHTML === "O") && (document.getElementById(6).innerHTML === "X" || document.getElementById(6).innerHTML === "O") && (document.getElementById(7).innerHTML === "X" || document.getElementById(7).innerHTML === "O") && (document.getElementById(8).innerHTML === "X" || document.getElementById(8).innerHTML === "O") && (document.getElementById(9).innerHTML === "X" || document.getElementById(9).innerHTML === "O")){
document.getElementById("player").innerHTML = "Game Over"
 }
if (document.getElementById("player").innerHTML === "Game Over"){
}

// putting the rules for the game for X

 if (document.getElementById(1).innerHTML === "X" && document.getElementById(2).innerHTML === "X" && document.getElementById(3).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 

document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(4).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(6).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(7).innerHTML === "X" && document.getElementById(8).innerHTML === "X" && document.getElementById(9).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(1).innerHTML === "X" && document.getElementById(4).innerHTML === "X" && document.getElementById(7).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(2).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(8).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(3).innerHTML === "X" && document.getElementById(6).innerHTML === "X" && document.getElementById(9).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(1).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(9).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
else if (document.getElementById(3).innerHTML === "X" && document.getElementById(5).innerHTML === "X" && document.getElementById(7).innerHTML === "X"){
document.getElementById("player").innerHTML = "Player 1 is the winner" 
document.getElementById("player1").innerHTML = "Player 1 wins = "+" "+player1win++

}
// putting the rules for the game for O
 if (document.getElementById(1).innerHTML === "O" && document.getElementById(2).innerHTML === "O" && document.getElementById(3).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(4).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(6).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(7).innerHTML === "O" && document.getElementById(8).innerHTML === "O" && document.getElementById(9).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(1).innerHTML === "O" && document.getElementById(4).innerHTML === "O" && document.getElementById(7).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(2).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(8).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(3).innerHTML === "O" && document.getElementById(6).innerHTML === "O" && document.getElementById(9).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(1).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(9).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
else if (document.getElementById(3).innerHTML === "O" && document.getElementById(5).innerHTML === "O" && document.getElementById(7).innerHTML === "O"){
document.getElementById("player").innerHTML = "Player 2 is the winner" 
document.getElementById("player2").innerHTML = "Player 2 wins = "+" "+player2win++

}
}
















