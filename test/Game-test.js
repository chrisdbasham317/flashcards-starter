const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Round', function () {

  it('should create cards', function () {
    const game = new Game();
    game.start();
    expect(game.cards.length).to.equal(30);
  })

  it('should create a game deck', function () {
    const game = new Game();
    game.start();
    expect(game.deck.cards.length).to.equal(30);
  })

  it('should create a new round', function () {
    const cards = new Card(prototypeQuestions);
    const deck = new Deck(cards)
    const round = new Round(deck)
    const game = new Game();
    game.start();
    expect(game.deck.cards).to.equal(round.deck.cards);
  })

});