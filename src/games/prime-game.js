import startGame, { getRandomInt } from '../index.js';


const startPrimeGame = () => {
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

  const rules = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[0m given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.';
  const gameData = [];

  for (let index = 0; index < 3; index += 1) {
    const randomNum = getRandomInt();

    const question = `${randomNum}`;
    const correctAnswer = isPrime(randomNum);

    gameData.push([question, correctAnswer]);
  }

  startGame(rules, gameData);
};


export default startPrimeGame;
