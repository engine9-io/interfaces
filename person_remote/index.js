const metadata = {
  name: '@engine9-io/engine9-interfaces/person_remote',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const id = require('./pipeline/inbound/extract_identifiers');

const pipeline = {
  id,
};

module.exports = {
  metadata,
  schema,
  pipeline,
};
