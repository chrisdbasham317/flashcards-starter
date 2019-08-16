const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to take a user\'s guess', function () {
    const turn = new Turn('I think this is the answer');
    expect(turn.userGuess).to.equal('I think this is the answer');
  });

  it('should take in the current card object being played', function () {
    const card = new Card(1, 'What do you think the answer is', ['yes', 'no', 'I think this is the answer'], 'I think this is the answer')
    const turn = new Turn('I think this is the answer', card);
    expect(turn.cardObj.id).to.equal(1)
  });

  it('should be able to return the user\'s guess', function () {
    const card = new Card(1, 'What do you think the answer is', ['yes', 'no', 'I think this is the answer'], 'I think this is the answer')
    const turn = new Turn('I think this is the answer', card);
    expect(turn.returnGuess()).to.equal('I think this is the answer');
  });

  it('should be able to return the card being played', function () {
    const card = new Card(1, 'What do you think the answer is', ['yes', 'no', 'I think this is the answer'], 'I think this is the answer')
    const turn = new Turn('I think this is the answer', card);
    expect(turn.returnCard()).to.equal(card, {id: 1, question: 'What do you think the answer is', answers: ['yes', 'no', 'I think this is the answer'], correctAnswer: 'I think this is the answer'});
  });

  it('should be able to validate the user\'s answer', function () {
    const card = new Card(1, 'What is 1 + 1', [11, 2, 0], 2)
    const turn = new Turn(11, card)
    expect(turn.evaluateGuess()).to.equal(false);
  });
  
  it('should be able to provide feedback based on the user\'s guess', function () {
    const card = new Card(1, 'What is 1 + 1', [11, 2, 0], 2)
    const turn = new Turn(11, card)
    expect(turn.giveFeedback()).to.equal('Incorrect');
  });
});