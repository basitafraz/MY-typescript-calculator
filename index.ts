#!/usr/bin/env node

// console.log("Hello world");
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

async function wellcome() {
  let rainbow = chalkAnimation.rainbow("Hello woorld!");
  await sleep();
  rainbow.stop();
  console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}

async function askquestion() {
  const answers = await inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "operation",
        message: "Which operation do you want to perform?",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter number 1: ",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter number 2: ",
      },
    ])
    if (answers.operation == "Addition") {
        console.log(
          chalk.redBright(
            `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
          )
        );
      } else if (answers.operation == "Subtraction") {
        console.log(
          chalk.redBright(
            `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
          )
        );
      } else if (answers.operation == "Multiplication") {
        console.log(
          chalk.redBright(
            `${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`
          )
        );
      } else {
        console.log(
          chalk.redBright(
            `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
          )
        );
      }}

// askquestion();

async function startAgain() {
  do {
    await askquestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? press y or n:",
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "Yes" ||
    again.restart == "yes"
  );
}

startAgain();
