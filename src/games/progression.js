import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing \x1b[1min\x1b[0m the progression?';

const generateGameData = () => {
  const a1 = getRandomInt(0, 100);
  const d = getRandomInt(1, 8);
  // Exclude first or last num
  const secretIndex = getRandomInt(1, 8);

  let correctAnswer = 0;
  let resultString = `${a1} `;

  for (let i = 0; i < 9; i += 1) {
    if (secretIndex === i) {
      resultString += '.. ';
      correctAnswer = String(a1 + d * (i + 1));
    } else {
      // an = a1 + d(n-1)
      resultString += `${String(a1 + d * (i + 1))} `;
    }
  }

  const question = `${resultString}`;

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  startGame(description, generateGameData);
};

export default startProgressionGame;
