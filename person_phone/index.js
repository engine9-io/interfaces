const metadata = {
  name: '@engine9-io/interfaces/person_email',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const search = require('./search');
const segments = require('./segments');
const id = require('./transforms/inbound/extract_identifiers');
const upsert = require('./transforms/inbound/upsert_tables');
const appendPhoneHash = require('./transforms/outbound/appendPhoneHash');

module.exports = {
  metadata,
  schema,
  transforms: {
    id,
    upsert,
    appendPhoneHash,
  },
  search,
  segments,
};
