const metadata = {
  name: '@engine9-io/interfaces/segment',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const search = require('./search');
const upsert = require('./transforms/inbound/upsert_tables');

module.exports = {
  metadata,
  schema,
  search,
  transforms: {
    upsert,
  },
};
