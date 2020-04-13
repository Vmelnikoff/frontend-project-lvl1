import startGame, { getRandomInt } from '../index.js';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  // ========== Functions for Calc ==========
  const getRandomSign = () => ['+', '-', '*'][getRandomInt(2)];
  const getCalcResult = (data) => {
    const [randomNum1, randomNum2, randomSign] = data;
    let correctAnswer = 0;
    switch (randomSign) {
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

  const gameData = [];

  const randomNum1 = getRandomInt();
  const randomNum2 = getRandomInt();
  const randomSign = getRandomSign();

  const question = `${randomNum1} ${randomSign} ${randomNum2}`;
  const correctAnswer = getCalcResult([randomNum1, randomNum2, randomSign]);

  gameData.push(question, correctAnswer);

  return gameData;
};

const startCalcGame = () => {
  startGame(description, generateGameData);
};

export default startCalcGame;
