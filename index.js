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

  const resume =
    prompt(`${chalk.hex("#F8C471")("Do you wanna play? 😇  (default yes)")}`) ||
    "yes";
  const yes = ["ja", "y", "yes", "yay"];
  if (!yes.includes(resume.toLowerCase())) {
    console.log(
      `${chalk.hex("#5DADE2 ")("Bye")} ${chalk.hex("#7D3C98")(name)} 😕`
    );
    return;
  }

  const questionsNumber =
    prompt(`${chalk.hex("#F8C471")("How many questions? 🤔 (default 3)")}`) ||
    3;

  const difficulty =
    prompt(
      `${chalk.hex("#F8C471")(
        "How difficult (from 10)? 🤭 (default 10)"
      )}`
    ) || 10;

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
    let questionPrompt = prompt(
      chalk.blue(`Question ${i + 1}: ${allQuestions[i].question}`)
    );
    if (
      questionPrompt === "exit" ||
      questionPrompt === "q" ||
      questionPrompt === "quit"
    )
      return;
    if (parseInt(questionPrompt) === allQuestions[i].answer) {
      userScore++;
      console.log(`Yaaay! it was correct! 🎉`);
    } else {
      console.log(`Ooops 😕 correct answer was ${allQuestions[i].answer}`);
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
