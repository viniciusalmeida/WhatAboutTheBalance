require('dotenv').config();

const commander = require('commander');
const repl = require('repl');
const chalk = require('chalk');

const memosByMont = require('./lib/reports/memos_by_month');
const annualBalance = require('./lib/reports/annual_balance');

// CLI setup
commander
  .description('A way to hack bank statements.')
  .option('-y, --year [year]', 'Indicate an year to aply the filter (default: current year)', new Date().getFullYear())
  .option('-m, --month [month-for-memo]', 'Select a month in the year to be detailed with the memo for each transaction. Ex: Oct', null)
  .option('-r, --repl', 'Start a Read-Eval-Print-Loop (REPL) to you write your own analysis code')
  .parse(process.argv);

// REPL
if (commander.repl){
  const context = repl
          .start(chalk.black.bgYellow('WhatAboutTheBalance? > '))
          .context;

  // load transactions
  context.transactions = require('./lib/transactions_loader')();

  // load filters
  context.filterByYear = require('./lib/filters').filterByYear;
  context.filterByMonth = require('./lib/filters').filterByMonth;
  context.filterIncomings = require('./lib/filters').filterIncomings;
  context.filterOutgoings = require('./lib/filters').filterByOutgoings;

  context.compose = require('compose-function');
  context.balanceFor = require('./lib/balance_for');
} else {
  // shows detailed month
  if (commander.month) {
    memosByMont(commander.month, commander.year);
    process.exit();
  }
  // show annual report
  annualBalance(commander.year);
}