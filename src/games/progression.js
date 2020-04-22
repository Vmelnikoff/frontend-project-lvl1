import playGame from '../index.js';
import { getRandomInt, decorate } from '../utils.js';

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

  const correctAnswer = String(firstMemberOfProgression + progressionStep * (secretIndex));
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (secretIndex === i) {
      question = `${question}.. `;
    } else {
      // a(n) = firstMemberOfProgression + progressionStep * (n-1)
      question = `${question}${firstMemberOfProgression + progressionStep * (i)} `;
    }
  }

  question = question.trimEnd();

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  playGame(description, generateGameData);
};

export default startProgressionGame;
