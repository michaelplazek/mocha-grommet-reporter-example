import mochaUi from 'mocha-grommet-reporter';

import { Mocha } from 'mocha/mocha.js';

mocha.setup({
  ui: 'bdd',
  slow: 1500,
  timeout: 10000,
  reporter: mochaUi
});

// require('mocha-grommet-reporter/src/Main.test.js');
require('./index.test.js');
require('./more.test.js');

mocha.run();

// setInterval(() => {location.reload();}, 5000);

function mochaRun(){
  mocha.run();
}

