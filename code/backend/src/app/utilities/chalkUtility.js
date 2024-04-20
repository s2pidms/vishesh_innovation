// chalkUtility.js
const chalk = require("chalk");

const success = message => {
    console.log(chalk.green.bold(`[SUCCESS] ${message}`));
};

const error = message => {
    console.log(chalk.red.bold(`[ERROR] ${message}`));
};

const info = message => {
    console.log(chalk.blue.bold(`[INFO] ${message}`));
};

const warning = message => {
    console.log(chalk.yellow.bold(`[WARNING] ${message}`));
};

module.exports = {
    success,
    error,
    info,
    warning
};
