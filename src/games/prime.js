import playGame from '../index.js';
import { getRandomInt, decorate } from '../utils.js';

const description = `Answer ${decorate('"yes"', 'red')} ${decorate('if', 'bold')} given number is prime. Otherwise answer ${decorate('"no"', 'red')}.`;

// ========== Function for Prime ==========
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const minRandomNum = 0;
  const maxRandomNum = 100;

  const randomNum = getRandomInt(minRandomNum, maxRandomNum);

  const question = String(randomNum);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => {
  playGame(description, generateGameData);
};

export default startPrimeGame;
