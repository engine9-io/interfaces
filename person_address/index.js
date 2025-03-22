const metadata = {
  name: '@engine9-io/engine9-interfaces/person_name',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const upsert = require('./transforms/inbound/upsert_tables');

const pipeline = {
  inbound: [
    upsert,
  ],
};

module.exports = {
  metadata,
  pipeline,
};
