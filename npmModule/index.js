import chalk from "chalk";
import validator from "validator";

//USING NPM PACKAGE CHALK
console.log(chalk.green("Nabaraj") + chalk.red(" Dahal"));
console.log(chalk.green("Success"));
console.log(chalk.red("Failed"));
console.log(chalk.bgRed("Failed"));
console.log(chalk.strikethrough("Name"));

//USING NPM PACJAGE VALIDATOR
let email = "nabaraj@gmail.com";
let name = "Nj";
if (validator.isEmail(email)) {
  console.log(chalk.green("Success"));
} else {
  console.log(chalk.red.inverse("Please provide a valid Email"));
}
if (validator.isLength(name) >= 3) {
  console.log(chalk.green("Success"));
} else {
  console.log(chalk.red("Name must be at least 3 characters long"));
}
