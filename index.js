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

  const questionsNumber = prompt(
    `${chalk.hex("#F8C471")("How many questions? 😇")}`
  );

  const difficulty = prompt(
    `${chalk.hex("#F8C471")("How difficult (between 10 and 100)? 😇")}`
  );

  function randomNum(num = difficulty) {
    return Math.floor(Math.random() * num);
  }

  function randomOperation() {
    const randNum = randomNum(3);
    const ops = ["+", "-", "*", "/"];
    return ops[randNum];
  }

  const allQuestions = [];

  function calculateNum(n1, n2, operation) {
    let res = 0;
    switch (operation) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;
    }
    return res;
  }

  for (let i = 0; i < parseInt(questionsNumber); i++) {
    let n1 = randomNum() + 1;
    let n2 = randomNum() + 1;
    let operation = randomOperation();
    allQuestions.push({
      question: `${n1} ${operation} ${n2} ?`,
      answer: calculateNum(n1, n2, operation),
    });
  }

  let userScore = 0;

  for (let i = 0; i < allQuestions.length; i++) {
    let questionPrompt = prompt(chalk.blue(allQuestions[i].question));
    if (parseInt(questionPrompt) === allQuestions[i].answer) {
      userScore++;
    }
  }

  console.log(
    chalk.yellow(
      `You answered ${chalk.green(userScore)} of ${
        allQuestions.length
      } questions correctly`
    )
  );
}

game();
