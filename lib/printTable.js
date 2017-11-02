const Table = require('tty-table');
const chalk = require('chalk');

const printBalance = (records) => {
  const columnsConfig = [
    { alias: 'Period',
      width: 50,
      align: 'left' },
    { alias: 'Balance',
      formatter: value => (value > 0) ? chalk.white.bgGreen(value) : chalk.white.bgRed(value) }
  ];
  console.log(Table(columnsConfig, records).render());
};

const printMemos = (records) => {
  const columnsConfig = [
    { alias: 'Period',
      width: 70,
      align: 'left' },
    { alias: 'Balance',
      formatter: value => (value > 0) ? chalk.green(value) : chalk.red(value) }
  ];
  console.log(Table(columnsConfig, records).render());
}

module.exports = { printBalance , printMemos };