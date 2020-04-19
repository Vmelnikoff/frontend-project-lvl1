import playGame, { decorate } from '../index.js';
import getRandomInt from '../utils.js';

const description = `What number is missing ${decorate('in', 'bold')} the progression?`;

const generateGameData = () => {
  const minRandomNum = 0;
  const maxRandomNum = 100;
  const minRandomStep = 2;
  const maxRandomStep = 8;
  const progressionLength = 10;

  const firstMemberOfProgression = getRandomInt(minRandomNum, maxRandomNum);
  const progressionStep = getRandomInt(minRandomStep, maxRandomStep);
  // Exclude first or last num
  const secretIndex = getRandomInt(1, progressionLength - 2);

  let correctAnswer = 0;
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (secretIndex === i) {
      question = `${question}.. `;
      correctAnswer = String(firstMemberOfProgression + progressionStep * (i - 1));
    } else {
      // a(n) = firstMemberOfProgression + progressionStep * (n-1)
      question = `${question}${String(firstMemberOfProgression + progressionStep * (i - 1))} `;
    }
  }

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  playGame(description, generateGameData);
};

export default startProgressionGame;
