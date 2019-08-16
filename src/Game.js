const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.cards = [];
    this.deck = [];
    this.round;
    this.currentRound = 0;
    this.timer = 0;
  }

  start() {
    prototypeQuestions.forEach(card => this.createCard(card));
    this.timer = Date.now();
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck, this.timer);
    this.currentRound++;
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round); 
  }

  createCard(card) {
    this.cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer));
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;