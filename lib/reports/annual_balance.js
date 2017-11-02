const _ = require('lodash');

const getTransactions = require('../transactions_loader');
const balanceFor = require('../balance_for');
const filterByYear = require('../filters').filterByYear;
const agregatorByMonth = require('../agregators').agregatorByMonth;
const printBalance = require('../printTable').printBalance;

const filterTransactions = (year) => _.curry(filterByYear)(year);

const report = (year) => {
  const transactions = filterTransactions(year)(getTransactions());

  printBalance(_.map(agregatorByMonth(transactions),
    (month_transactions, month) => [month, balanceFor(month_transactions)]
  ));
  printBalance([[ `Balance for ${year}`, balanceFor(transactions) ]]);
};

module.exports = report;