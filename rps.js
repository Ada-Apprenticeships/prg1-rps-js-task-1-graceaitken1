function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  }

const winningConditions = {
  rock: ["scissors", "lizard"], 
  scissors: ["paper", "lizard"], 
  paper: ["rock", "spock"], 
  lizard: ["spock", "paper"], 
  spock: ["scissors", "rock"]
};

if (winningConditions[player1]. includes(player2)) {
  return "player1";
} else { 
  return "player2";
}
}


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
