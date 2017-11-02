require('dotenv').config();

const commander = require('commander');

const memosByMont = require('./lib/reports/memos_by_month');
const annualBalance = require('./lib/reports/annual_balance');

// CLI setup
commander
  .description('A way to hack bank statements.')
  .option('-y, --year [year]', 'Indicate an year to aply the filter (default: current year)', new Date().getFullYear())
  .option('-m, --month [month-for-memo]', 'Select a month in the year to be detailed with the memo for each transaction. Ex: Oct', null)
  .parse(process.argv);

// shows detailed month
if (commander.month) {
  memosByMont(commander.month, commander.year);
  process.exit();
}
// show annual report
annualBalance(commander.year);