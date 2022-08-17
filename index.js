import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";

function game() {
  const name = prompt(`${chalk.hex("#FFA500")("Hey, What's your name?")}`);
  console.log(`${chalk.hex("#FFA500")("Hello")} ${chalk.red(name)} 🤩`);

  const age = prompt(`${chalk.hex("#1ABC9C")("How old are you?")}`);

  console.log(
    chalk.cyan(`Hello `) +
      chalk.red(`${name}`) +
      chalk.magenta(` ${age} `) +
      chalk.green(`years`) +
      chalk.yellow(`!😊`)
  );

  const resume = prompt(`${chalk.hex("#F8C471")("Do you wanna play? 😇")}`);
  if (resume !== "yes") {
    console.log(
      `${chalk.hex("#5DADE2 ")("Bye")} ${chalk.hex("#7D3C98")(name)} 😕`
    );
    return;
  }

  let allQuestions = [
    { question: "2 + 2 ?", answer: 4 },
    { question: "2 * 12 ?", answer: 24 },
    { question: "3 - 1 ?", answer: 2 },
    { question: "12 / 12 ?", answer: 1 },
    { question: "22 / 2 ?", answer: 11 },
  ];

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
}

game();
