function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "draw";
  }

  if (player1 === "rock") {
    if (player2 === "scissors") {
      return "player1";
    }
  } else {
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

  if (player1 === "scissors") {
    if (player2 === "lizard") {
      return "player1";
    } else {
      return "player2";
    }
  }

  if (player1 === "rock") {
    if (player2 === "lizard") {
      return "player1";
    } else {
      return "player2";
    }
  }

  if (player1 === "spock") {
    if (player2 === "rock") {
      return "player1";
    } else {
      return "player2";
    }
  }

  if (player1 === "spock") {
    if (player2 === "scissors") {
      return "player1";
    } else {
      return "player2";
    }
  }

  if (player1 === "lizard") {
    if (player2 === "spock") {
      return "player1";
    } else {
      return "player2";
    }
  }

  if (player1 === "paper") {
    if (player2 === "spock") {
      return "player1";
    } else {
      return "player2";
    }
  }

  if (player1 === "lizard") {
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
};
