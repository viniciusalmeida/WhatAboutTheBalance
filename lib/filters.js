const _ = require('lodash');
const moment = require('moment');

const filterByYear = (year, transactions) => _.filter(transactions,
  (transaction) => moment(transaction.DTPOSTED.slice(0,8)).format('Y') == year
);

const filterByMonth = (month, transactions) => _.filter(transactions,
  (transaction) => moment(transaction.DTPOSTED.slice(0,8)).format('MMM') == month
);

module.exports = { filterByYear, filterByMonth };