import readlineSync from 'readline-sync';

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
        `"${answer}"is wrong answer ;(. Correct answer was "${correctAnswer}"`,
      );
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
