import startGame, { getRandomInt } from '../index.js';


const startGcdGame = () => {
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

  const rules = 'Find the greatest common divisor of given numbers.';
  const gameData = [];

  for (let index = 0; index < 3; index += 1) {
    const randomNum1 = getRandomInt();
    const randomNum2 = getRandomInt();

    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = String(getGCD([randomNum1, randomNum2]));

    gameData.push([question, correctAnswer]);
  }

  startGame(rules, gameData);
};


export default startGcdGame;
