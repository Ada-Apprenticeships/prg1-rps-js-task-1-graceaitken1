function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  }

  const winningCondition = {
    rock: ["scissors", "lizard"],
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  return winningCondition[player1].includes(player2) ? "player1" : "player2"
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
