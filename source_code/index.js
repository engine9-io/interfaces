const metadata = {
  name: '@engine9-io/interfaces/source_code',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0'
  }
};

const schema = require('./schema');
const metrics = require('./metrics');

module.exports = {
  metadata,
  schema,
  metrics
};
