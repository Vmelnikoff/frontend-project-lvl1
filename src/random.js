import readlineSync from 'readline-sync';

const getRandomInt = (max = 10) => Math.floor(Math.random() * Math.floor(max));
const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const readAnswer = (question) => readlineSync.question(question);

const randomQuiz = () => {
  const question = 'Your answer: ';

  for (let index = 0; index < 3; index += 1) {
    const randomNum = getRandomInt();
    console.log(`Question: ${randomNum}`);

    const answer = readAnswer(question);
    const correctAnswer = isEven(randomNum);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }

    console.log('Correct!', `${answer}`);
  }

  return true;
};

export { randomQuiz, readAnswer };
