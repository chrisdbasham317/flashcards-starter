const Turn = require('./Turn');
const Game = require('./Game');

class Round {
  constructor(deck, timer) {
    this.deck = deck;
    this.startTimer = timer;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    var card = this.returnCurrentCard();
    var turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(card.id);
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.deck.cards.length) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    this.stopTimer();
  }
  
  stopTimer() {
    var ms = Date.now() - this.startTimer;
    var totalSecs = Math.floor(ms / 1000);
    var min = Math.floor(totalSecs / 60);
    var reducedSec = totalSecs - (min * 60);
    min !== 0 ? console.log(`Game took ${min} minutes and ${reducedSec} seconds`) : console.log(`Game took ${totalSecs} seconds!`);
  }
}




module.exports = Round