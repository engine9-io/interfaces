const metadata = {
  name: '@engine9-io/interfaces/person_custom',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0',
  },
};

const upsert = require('./transforms/inbound/upsert_tables');
const appendRemoteId = require('./transforms/appendRemoteId');

module.exports = {
  metadata,
  transforms: {
    upsert,
    appendRemoteId,
  },
};
