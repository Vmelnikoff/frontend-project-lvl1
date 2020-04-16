import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[0m given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.';

const generateGameData = () => {
  // ========== Function for Prime ==========
  const isPrime = (num) => {
    if (num <= 1) {
      return 'no';
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const randomNum = getRandomInt(0, 100);

  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum);

  return [question, correctAnswer];
};

const startPrimeGame = () => {
  startGame(description, generateGameData);
};

export default startPrimeGame;
