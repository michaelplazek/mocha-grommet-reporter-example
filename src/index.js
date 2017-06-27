import mochaUi from 'mocha-grommet-reporter';

import { Mocha } from 'mocha/mocha.js';

mocha.setup({
  ui: 'bdd',
  slow: 1500,
  timeout: 10000,
  reporter: mochaUi
});

require('./index.test.js');
require('./more.test.js');

mocha.run();
