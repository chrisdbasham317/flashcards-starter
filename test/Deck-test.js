const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {

  it('should be a function', function () {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be able to store a card', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const deck = new Deck(card1);
    expect(deck.cards).to.deep.equal(card1);
  });

  it('should be able to store multiple cards', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card('What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    expect(deck.cards).to.deep.equal([card1, card2]);
  });

  it('should be able to return how many cards are in it', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card('What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    expect(deck.countCards()).to.equal(2);
  });
});