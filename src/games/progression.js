import startGame, { getRandomInt } from '../index.js';

const description = 'What number is missing \x1b[1min\x1b[0m the progression?';

const generateGameData = () => {
  const gameData = [];

  const a1 = getRandomInt();
  // Exclude first or last num
  const d = getRandomInt(8) + 1;
  const secretIndex = getRandomInt(8) - 1;
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

  gameData.push(question, correctAnswer);

  return gameData;
};

const startProgressionGame = () => {
  startGame(description, generateGameData);
};

export default startProgressionGame;
