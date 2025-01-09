module.exports = {
  name: '@engine9-io/engine9-interfaces/person_custom',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
  transforms: {
    inbound: {
      upsert_tables: {
        type: 'tables',
        batchSize: 500,
      },
    },
  },
};
