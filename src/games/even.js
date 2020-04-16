import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[0m the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';

const generateGameData = () => {
  const isEven = (randomNum) => (randomNum % 2 === 0);

  const question = getRandomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  startGame(description, generateGameData);
};

export default startEvenGame;
