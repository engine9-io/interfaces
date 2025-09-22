const metadata = {
  name: '@engine9-io/interfaces/timeline',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0'
  }
};

const search = require('./search');

module.exports = {
  metadata,
  search
};
