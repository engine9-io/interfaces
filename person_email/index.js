const metadata = {
  name: '@engine9-io/engine9-interfaces/person_email',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const ids = require('./transforms/inbound/extract_identifiers');
const upsert = require('./transforms/inbound/upsert_tables');

const pipeline = {
  inbound: [
    ids,
    upsert,
  ],
};

module.exports = {
  metadata,
  schema,
  pipeline,
};
