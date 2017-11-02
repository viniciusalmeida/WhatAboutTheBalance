const _ = require('lodash');
const moment = require('moment');

const agregatorByMonth = (transactions) => {
  return _.groupBy(transactions, (transaction) => moment(transaction.DTPOSTED.slice(0,8)).format('MMM/Y'));
};

const agregatorByYear = (transactions) => {
  return _.groupBy(transactions, (transaction) => moment(transaction.DTPOSTED.slice(0,8)).format('Y'));
};

module.exports = { agregatorByMonth, agregatorByYear };