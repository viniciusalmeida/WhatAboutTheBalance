const _ = require('lodash');
const compose = require('compose-function');

const getTransactions = require('../transactions_loader');
const balanceFor = require('../balance_for');
const filterByYear = require('../filters').filterByYear;
const filterByMonth = require('../filters').filterByMonth;
const printMemos = require('../printTable').printMemos;
const printBalance = require('../printTable').printBalance;

const filterTransactions = (month, year) => compose(
  _.curry(filterByMonth)(month),
  _.curry(filterByYear)(year)
);

const report = (month, year) => {
  const transactions = filterTransactions(month, year)(getTransactions());

  printMemos(_.map(transactions, (transaction) => [ transaction.MEMO, transaction.TRNAMT ] ));
  printBalance([[ `Balance for ${month}/${year}`, Math.round(balanceFor(transactions)) ]]);
};

module.exports = report;