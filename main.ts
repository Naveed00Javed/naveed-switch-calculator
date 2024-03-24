#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import number from "inquirer/lib/prompts/number.js";

// step 01
const answers: {  
    numberOne: number
    numberTwo: number
    operator:  String
} = await inquirer.prompt([
    { type: "number",
    name: "numberOne",
    message: "Enter your first number?"
},
{ type: "number",
  name: "numberTwo",
  message: "Enter your Secound number"
},
{ type: "list",
  name: "operator",
  message: "Select an operator",
  choices: ["+", "-", "*", "/"]}
])

// step 02
const { numberOne, numberTwo, operator } = answers;

let result
switch (operator) {
    case "+": result =  numberOne + numberTwo;
     break;
     case "-": result =  numberOne - numberTwo;
     break;
     case "*": result =  numberOne * numberTwo;
     break;
     case "/": result = numberOne / numberTwo;
     break;
    default:
    console.log("lnvalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);