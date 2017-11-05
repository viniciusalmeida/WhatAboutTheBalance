const moment = require('moment');

const filterByYear = (year, transactions) => transactions
  .filter((transaction) => moment(transaction.DTPOSTED.slice(0,8)).format('Y') == year);

const filterByMonth = (month, transactions) => transactions
  .filter((transaction) => moment(transaction.DTPOSTED.slice(0,8)).format('MMM') == month);

const filterIncomings = (transactions) => transactions
  .filter((transaction) => parseFloat(transaction.TRNAMT) > 0);

const filterByOutgoings = (transactions) => transactions
  .filter((transaction) => parseFloat(transaction.TRNAMT) < 0);

module.exports = { filterByYear, filterByMonth, filterIncomings, filterByOutgoings };