const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn')

describe('Round', function () {
  
  it('should be a function', function () {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be able take in the deck being played', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2,'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck1 = new Deck([card1, card2]);
    const round = new Round(deck1);
    expect(round.deck).to.equal(deck1);
  });

  it('should be able to return the current card being played', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should update turn count', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('Moday');
    expect(round.turns).to.equal(1);
  })

  it('should make the next card the current card', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn()
    expect(round.returnCurrentCard()).to.equal(card2);
  })

  it('should store incorrect guesses', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('Monday');
    expect(round.incorrectGuesses).to.deep.equal([card1.id])
  })

  it('should provide appropriate user feedback', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    const turn = new Turn('Monday', card1);
    round.takeTurn('Monday');
    expect(turn.giveFeedback()).to.equal('Incorrect');
    expect(round.returnCurrentCard()).to.equal(card2);
  })

  it('should calculate percentage of questions answered correctly', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('Monday');
    round.takeTurn('Wednesday')
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

  it('should provide a graded message at the end of the round', function () {
    const card1 = new Card(1, 'What is today', ['Monday', 'Tuesday', 'Wednesday'], 'Tuesday');
    const card2 = new Card(2, 'What is tomorrow', ['Wednesday', 'Thursday', 'Friday'], 'Wednesday')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('Monday');
    round.takeTurn('Wednesday')
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  })

});