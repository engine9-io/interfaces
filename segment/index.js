const metadata = {
  name: '@engine9-io/engine9-interfaces/segment',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const upsert = require('./transforms/inbound/upsert_tables');

module.exports = {
  metadata,
  schema,
  transforms: {
    upsert,
  },
};
