import readlineSync from 'readline-sync';

// ==================== Common Functions ====================
// Default random integer from 1 to 100
const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max)) + 1;
const readAnswer = (question) => readlineSync.question(question);


const startGame = (rules, gameData) => {
  // Display greeting
  console.log('Welcome to the Brain Games!');

  // Request name
  const name = readAnswer('May I have your name? ');

  // Display name
  console.log(`Hello, ${name}!`);

  // Display rules
  console.log(rules);

  // Start quiz
  let successResult = true;

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameData[i];

    console.log(`Question: ${question}`);
    const answer = readAnswer('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `\x1b[31m"${answer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${correctAnswer}"\x1b[0m.`,
      );
      successResult = false;
      break;
    }

    console.log('Correct!');
  }

  // Display report
  if (successResult) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let\x1b[31m's try again, ${name}!\x1b[0m`);
  }
};

export default startGame;
export { getRandomInt };
