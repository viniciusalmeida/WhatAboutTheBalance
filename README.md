# WhatAboutTheBalance?

A personal way to hack bank statements.

This software reads some directory where you keep your [OFX](https://en.wikipedia.org/wiki/Open_Financial_Exchange)s files (provided by the banks) and digest the transactions to show a reasonable report.

### How to install

1. Clone this reposity
1. Install the dependencies with: `npm i`
1. Copy the `.env` file with: `cp .env.sample .env`
1. Set the env vars to set the path for your OFXs files and add some RegEx to exclude transactions (if necessary)
1. Run it

### How to run

```
node index.js --help

  Usage: WhatAboutTheBalance? [options]

  A way to hack bank statements.


  Options:

    -y, --year [year]             Indicate an year to aply the filter (default: current year)
    -m, --month [month-for-memo]  Select a month in the year to be detailed with the memo for each transaction. Ex: Oct
    -r, --repl                    Start a Read-Eval-Print-Loop (REPL) to you write your own analysis code
    -h, --help                    output usage information
```

**Ex:**
- To show an annual report about 2015 `node index.js -y 2015`
- To show a detailed report about october 2015 `node index.js -y 2015 -m Oct`