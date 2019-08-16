class Turn {
  constructor(userGuess, cardObj) {
    this.userGuess = userGuess;
    this.cardObj = cardObj;
    this.answerStatus = true;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.cardObj;
  }

  evaluateGuess() {
    return this.userGuess === this.cardObj.correctAnswer ? this.answerStatus = true : this.answerStatus = false;
  }

  giveFeedback() {
    return this.answerStatus ? 'Correct!' : 'Incorrect';
  }
}



module.exports = Turn