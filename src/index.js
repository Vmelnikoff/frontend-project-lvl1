import readlineSync from 'readline-sync';

const decorate = (string, style) => {
  const output = 'console';
  const styles = {
    red: '31',
    green: '32',
    yellow: '33',
    blue: '34',
    bold: '1',
  };

  if (style in styles && output === 'console') {
    const reset = '\x1b[0m';
    const decor = `\x1b[${styles[style]}m`;

    return `${decor}${string}${reset}`;
  }

  return string;
};

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
  for (let i = 0; i < 3; i += 1) {
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
export { decorate };
