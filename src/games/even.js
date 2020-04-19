import playGame, { decorate } from '../index.js';
import getRandomInt from '../utils.js';

const description = `Answer ${decorate('"yes"', 'red')} ${decorate('if', 'bold')} the number is even, otherwise answer ${decorate('"no"', 'red')}.`;

const isEven = (randomNum) => (randomNum % 2 === 0);

const generateGameData = () => {
  const minRandomNum = 0;
  const maxRandomNum = 100;

  const question = getRandomInt(minRandomNum, maxRandomNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  playGame(description, generateGameData);
};

export default startEvenGame;
