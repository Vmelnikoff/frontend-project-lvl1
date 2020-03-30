import readlineSync from 'readline-sync';

// ========== Common functions ==========
// Default random integer from 1 to 100
const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max)) + 1;
const readAnswer = (question) => readlineSync.question(question);

// ========== Function for Brain Even ==========
const isEven = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');
// ========== Function for Brain Calc ==========
const getRandomSign = () => ['+', '-', '*'][getRandomInt(2)];
const getCalcResult = (data) => {
  const [randomNum1, randomNum2, randomSign] = data;
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
// ========== Function for GCD ==========
const getGCD = (data) => {
  const calculateGCD = (maxNum, minNum) => {
    const remainder = maxNum % minNum;

    if (remainder === 0) {
      return minNum;
    }

    return calculateGCD(minNum, remainder);
  };

  const maxNum = data[data.indexOf(Math.max(...data))];
  const minNum = data[data.indexOf(Math.min(...data))];

  return calculateGCD(maxNum, minNum);
};

// ========== Main Function ==========
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

      const correctAnswer = getCalcResult([randomNum1, randomNum2, randomSign]);
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
  if (gameName === 'gcd') {
    for (let index = 0; index < 3; index += 1) {
      const randomNum1 = getRandomInt();
      const randomNum2 = getRandomInt();

      console.log(`Question: ${randomNum1} ${randomNum2}`);

      const correctAnswer = String(getGCD([randomNum1, randomNum2]));
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

  // ========== Brain Progression ==========
  if (gameName === 'progression') {
    for (let index = 0; index < 3; index += 1) {
      const a1 = getRandomInt();
      // Exclude first or last num
      const d = getRandomInt(8) + 1;
      const secretIndex = getRandomInt(8) - 1;
      let correctAnswer = 0;
      let resultString = `${a1} `;

      for (let i = 0; i < 9; i += 1) {
        if (secretIndex === i) {
          resultString += '.. ';
          correctAnswer = String(a1 + d * (i + 1));
        } else {
          // an = a1 + d(n-1)
          resultString += `${String(a1 + d * (i + 1))} `;
        }
      }

      console.log(`Question: ${resultString}`);
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
