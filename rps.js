function rockPaperScissors(player1, player2) {

if (player1 === player2) {
  return "draw";
}

if (player1 === "rock") {
  if (player2 === "scissors"){
    return "player1";
  }
}   else { 
  return "player2";
} 

if (player1 === "paper") {
  if (player2 === "rock") {
  } else { 
    return "player2";
  }
}

if (player1 === "scissors") {
  if (player2 === "paper") { 
    return "player1";
  } else { 
    return "player2";
  }
  }
}



// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}