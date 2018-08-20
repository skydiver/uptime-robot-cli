const chalk = require('chalk');
const figlet = require('figlet');

const notEmpty = (input) => input === '' ? 'This value is required' : true;

const handleError = (message) => {
  console.error(chalk.redBright(message));
  process.exitCode = 1;
};

const extractName = (pkgName) => pkgName.substr(pkgName.indexOf('/') + 1);

const figletLog = (text) => {
  figlet(text, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
  });
};

const tableHeader = (text) => chalk.blue(text);
const tableRow = (text) => chalk.white(text);

const stringSuccess = (text) => console.log(chalk.green(text));
const stringBold = (string) => chalk.bold(string);

module.exports = {
  notEmpty,
  figletLog,
  handleError,
  extractName,
  stringSuccess,
  stringBold,
  tableHeader,
  tableRow,
};