const metadata = {
  name: '@engine9-io/engine9-interfaces/person',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
};

const schema = require('./schema');
const upsert = require('./transforms/inbound/upsert_tables');

const pipeline = {
  upsert,
};

module.exports = {
  metadata,
  schema,
  pipeline,
};
