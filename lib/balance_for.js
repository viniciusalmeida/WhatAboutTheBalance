const _= require('lodash');

// receives a transactions collection and get its final balance
const balanceFor = (transactions) => Math.round(_.reduce(transactions, (acc, transaction) => {
  return acc + parseFloat(transaction.TRNAMT);
}, 0));

module.exports = balanceFor;
