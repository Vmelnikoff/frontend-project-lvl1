#!/usr/bin/env node

import { randomQuiz, readAnswer } from '../src/random.js';

// ========== Client code ==========

// Display greeting
console.log('Welcome to the Brain Games!');

// Request name
const name = readAnswer('May I have your name? ');
console.log(`Hello, ${name}!`);

// Display rules
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Start quiz
const successResult = randomQuiz();

// Display report
if (successResult) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
