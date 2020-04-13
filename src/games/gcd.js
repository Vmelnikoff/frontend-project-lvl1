import startGame, { getRandomInt } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  // ========== Function for GCD ==========
  const getGCD = (data) => {
    const calculateGCD = (maxNum, minNum) => {
      const remainder = maxNum % minNum;

      if (remainder === 0) {
        return minNum;
      }

      return calculateGCD(minNum, remainder);
    };

    const maxNum = data[data.indexOf(Math.max(...data))];
    const minNum = data[data.indexOf(Math.min(...data))];

    return calculateGCD(maxNum, minNum);
  };

  const gameData = [];

  const randomNum1 = getRandomInt();
  const randomNum2 = getRandomInt();

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(getGCD([randomNum1, randomNum2]));

  gameData.push(question, correctAnswer);

  return gameData;
};

const startGcdGame = () => {
  startGame(description, generateGameData);
};

export default startGcdGame;
