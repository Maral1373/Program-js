import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";

let allQuestions = [
  { question: "2 + 2 ?", answer: 4 },
  { question: "2 * 12 ?", answer: 24 },
  { question: "3 - 1 ?", answer: 2 },
  { question: "12 / 12 ?", answer: 1 },
  { question: "22 / 2 ?", answer: 11 },
];

// console.log(allQuestions[0]); // {question: "2 + 2 ?", answer: 4}
// console.log(allQuestions[1]); // {question: "2 * 12 ?", answer: 24},
// console.log(allQuestions[4]); // {question: "22 / 2 ?", answer: 11}

let userScore = 0;

for (let i = 0; i < allQuestions.length; i++) {
  let questionPrompt = prompt(chalk.blue(allQuestions[i].question));
  if (questionPrompt === allQuestions[i].answer) {
    userScore++;
  }
}

console.log(
  chalk.yellow(
    `You answered ${chalk.green(userScore)} of 5 questions correctly`
  )
);
