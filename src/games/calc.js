import playGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';
// ========== Functions for Calc ==========
const operations = ['+', '-', '*'];
const getRandomOperation = () => operations[getRandomInt(0, operations.length - 1)];

const getCalcResult = (randomNum1, randomNum2, operation) => {
  let correctAnswer = null;
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
      return null;
  }

  return String(correctAnswer);
};

const generateGameData = () => {
  const minRandomNum = 0;
  const maxRandomNum = 100;

  const randomNum1 = getRandomInt(minRandomNum, maxRandomNum);
  const randomNum2 = getRandomInt(minRandomNum, maxRandomNum);
  const randomSign = getRandomOperation();

  const question = `${randomNum1} ${randomSign} ${randomNum2}`;
  const correctAnswer = getCalcResult(randomNum1, randomNum2, randomSign);

  return [question, correctAnswer];
};

const startCalcGame = () => {
  playGame(description, generateGameData);
};

export default startCalcGame;
