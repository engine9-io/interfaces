module.exports = {
  name: '@engine9-io/engine9-interfaces/person_email',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
  transforms: {
    outbound: {
      tables: {
        batchSize: 500,
        env: {
          PERSON_EMAIL_TABLE: 'SQL.tables.person_email',
        },
      },
    },
    inbound: {
      append_identifiers: {
        type: 'identifiers',
        batchSize: 500,
      },
      extract_tables: {
        type: 'tables',
        batchSize: 500,
      },
    },
  },
};
