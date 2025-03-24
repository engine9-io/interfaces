const metadata = {
  name: '@engine9-io/engine9-interfaces/transaction',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const search = require('./search');
const segments = require('./segments');
const upsert = require('./pipeline/inbound/upsert_tables');

const pipeline = {
  upsert,
};

module.exports = {
  metadata,
  schema,
  pipeline,
  search,
  segments,
};
