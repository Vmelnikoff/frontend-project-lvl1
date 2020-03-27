import startQuiz, { readAnswer } from './games/quiz.js';

// ========== Main Function ==========
const startGame = (gameName) => {
  // ========== Constants for games ==========
  const gameConst = {
    even: {
      rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    },
    calc: {
      rules: 'What is the result of the expression?',
    },
  };

  // Display greeting
  console.log('Welcome to the Brain Games!');

  // Request name
  const name = readAnswer('May I have your name? ');

  // Display name
  console.log(`Hello, ${name}!`);

  if (gameName === undefined) {
    return;
  }

  // Display rules
  console.log(gameConst[gameName].rules);

  // Start quiz
  const successResult = startQuiz(gameName);

  // Display report
  if (successResult) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let\x1b[31m's try again, ${name}!\x1b[0m`);
  }
};

export default startGame;
