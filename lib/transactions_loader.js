const fs = require('fs');
const ofx = require('ofx');
const _ = require('lodash');

const fileNames = _.filter(fs.readdirSync(process.env.OFX_PATH), (fileName) => /.ofx$/.test(fileName));

const getApointmentsOf = (fileName) =>  ofx.parse(fs.readFileSync(fileName, 'utf8'))
  .OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.STMTTRN;

const getTransactions = () => {
  return _.chain(fileNames)
    .map((fileName) => getApointmentsOf(fileName))
    .flatten()
    .filter((transaction) => !new RegExp(process.env.TEST_TO_EXCLUDE).test(transaction.MEMO))
    .sortBy((transaction) => transaction.DTPOSTED)
    .value();
};

module.exports = getTransactions;
