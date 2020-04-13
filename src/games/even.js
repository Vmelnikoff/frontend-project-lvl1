import startGame, { getRandomInt } from '../index.js';

const description = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[0m the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';

const generateGameData = () => {
  const gameData = [];
  const isEven = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');

  const question = getRandomInt();
  const correctAnswer = isEven(question);

  gameData.push(question, correctAnswer);

  return gameData;
};

const startEvenGame = () => {
  startGame(description, generateGameData);
};

export default startEvenGame;
