import readlineSync from 'readline-sync';
import getRandomInt from './games/utils.js';

const startGame = (description, generateGameData) => {
  // Display greeting
  console.log('Welcome to the Brain Games!');

  // Request name
  const name = readlineSync.question('May I have your name? ');

  // Display name
  console.log(`Hello, ${name}!`);

  // Display rules
  console.log(description);

  // Start quiz
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateGameData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `\x1b[31m"${answer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${correctAnswer}"\x1b[0m.`,
      );

      return console.log(`Let\x1b[31m's try again, ${name}!\x1b[0m`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
export { getRandomInt };
