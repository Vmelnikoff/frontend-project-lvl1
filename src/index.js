import readlineSync from 'readline-sync';
import { decorate } from './utils.js';

const playGame = (description, generateGameData) => {
  // Display greeting
  console.log('Welcome to the Brain Games!');

  // Request name
  const name = readlineSync.question('May I have your name? ');

  // Display name
  console.log(`Hello, ${name}!`);

  // Display rules
  console.log(description);

  // Start quiz
  const numOfRounds = 3;

  for (let i = 0; i < numOfRounds; i += 1) {
    const [question, correctAnswer] = generateGameData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `${decorate(`"${answer}"`, 'red')} is wrong answer ;(. Correct answer was ${decorate(`"${correctAnswer}"`, 'red')}`,
      );
      console.log(`Let${decorate(`'s try again, ${name}!`, 'red')}`);

      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
