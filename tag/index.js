const metadata = {
  name: '@engine9-io/engine9-interfaces/tag',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');

module.exports = {
  metadata,
  schema,
};
