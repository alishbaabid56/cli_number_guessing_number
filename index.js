#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number - done
// 2) user input fot guessing number -done
// 3 ) campare user input with computer genersted number and show result -done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guess right number");
}
else {
    console.log("you guessed wrong number");
}
