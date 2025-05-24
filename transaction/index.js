const metadata = {
  name: '@engine9-io/interfaces/transaction',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const search = require('./search');
const segments = require('./segments');
const upsert = require('./transforms/inbound/upsert_tables');
const appendTransactionSummary = require('./transforms/appendTransactionSummary');

module.exports = {
  metadata,
  schema,
  transforms: {
    upsert,
    appendTransactionSummary,
  },
  search,
  segments,
};
