import readlineSync from 'readline-sync';

// ========== Common functions ==========
const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));
const getRandomSign = () => ['+', '-', '*'][getRandomInt(3)];
const readAnswer = (question) => readlineSync.question(question);

// ========== Function for Brain Even ==========
const isEven = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');
// ========== Function for Brain Calc ==========
const getCorrectAnswer = (data) => {
  let randomNum1 = 0;
  let randomNum2 = 0;
  let randomSign = '';

  [randomNum1, randomNum2, randomSign] = data;
  let correctAnswer = 0;
  switch (randomSign) {
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    default:
      correctAnswer = null;
  }

  return String(correctAnswer);
};

const startQuiz = (gameName) => {
  const question = 'Your answer: ';

  // ========== Brain Even ==========
  if (gameName === 'even') {
    for (let index = 0; index < 3; index += 1) {
      const randomNum = getRandomInt();
      console.log(`Question: ${randomNum}`);

      const correctAnswer = isEven(randomNum);
      const answer = readAnswer(question);

      if (answer !== correctAnswer) {
        console.log(
          `\x1b[31m"${answer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${correctAnswer}"\x1b[0m.`,
        );
        return false;
      }

      console.log('Correct!');
    }

    return true;
  }

  // ========== Brain Calc ==========
  if (gameName === 'calc') {
    for (let index = 0; index < 3; index += 1) {
      const randomNum1 = getRandomInt();
      const randomNum2 = getRandomInt();
      const randomSign = getRandomSign();
      console.log(`Question: ${randomNum1} ${randomSign} ${randomNum2}`);

      const correctAnswer = getCorrectAnswer([randomNum1, randomNum2, randomSign]);
      const answer = readAnswer(question);

      if (answer !== correctAnswer) {
        console.log(
          `\x1b[31m"${answer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${correctAnswer}"\x1b[0m.`,
        );
        return false;
      }

      console.log('Correct!');
    }

    return true;
  }

  return null;
};

export default startQuiz;
export { readAnswer };
