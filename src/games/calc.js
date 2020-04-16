import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const getCalcResult = (randomNum1, randomNum2, operation) => {
  let correctAnswer = 0;
  switch (operation) {
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    default:
      correctAnswer = null;
  }

  return String(correctAnswer);
};

const generateGameData = () => {
  // ========== Functions for Calc ==========
  const operations = ['+', '-', '*'];
  const getRandomOperation = () => operations[getRandomInt(0, 2)];

  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomSign = getRandomOperation();

  const question = `${randomNum1} ${randomSign} ${randomNum2}`;
  const correctAnswer = getCalcResult(randomNum1, randomNum2, randomSign);

  return [question, correctAnswer];
};

const startCalcGame = () => {
  startGame(description, generateGameData);
};

export default startCalcGame;
