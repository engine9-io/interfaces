const metadata = {
  name: '@engine9-io/interfaces/person',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
};

const schema = require('./schema');
const upsert = require('./transforms/inbound/upsert_tables');
const simpleMap = require('./transforms/simpleMap');
const appendName = require('./transforms/outbound/appendName');

const transforms = {
  upsert,
  simpleMap,
  appendName,
};

module.exports = {
  metadata,
  schema,
  transforms,
};
