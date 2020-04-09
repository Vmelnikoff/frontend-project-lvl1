import startGame, { getRandomInt } from '../index.js';


const startEvenGame = () => {
  const rules = 'Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[0m the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';
  const gameData = [];

  const isEven = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');

  for (let index = 0; index < 3; index += 1) {
    const question = getRandomInt();
    const correctAnswer = isEven(question);

    gameData.push([question, correctAnswer]);
  }

  startGame(rules, gameData);
};


export default startEvenGame;
