const metadata = {
  name: '@engine9-io/engine9-interfaces/person',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
};

const schema = require('./schema');
const upsert = require('./transforms/inbound/upsert_tables');
const simpleMap = require('./transforms/simpleMap');

const transforms = {
  upsert,
  simpleMap,
};

module.exports = {
  metadata,
  schema,
  transforms,
};
