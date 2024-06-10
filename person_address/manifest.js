module.exports = {
  name: '@engine9-io/engine9-interfaces/person_name',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
  transforms: {
    outbound: {
    },
    inbound: {
      extract_identifiers: {
        type: 'identifiers',
        batchSize: 500,
      },
      upsert_tables: {
        type: 'records',
        batchSize: 500,
      },
    },
  },
};
