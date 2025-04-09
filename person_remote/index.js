const metadata = {
  name: '@engine9-io/engine9-interfaces/person_remote',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/engine9-interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const id = require('./transforms/inbound/extract_identifiers');

module.exports = {
  metadata,
  schema,
  search: {
    allUsers: {
      form: {},
      name: 'All remote people',
      valuesToEQL: (values) => ({
        table: 'person_identifier',
        columns: ['person_id'],
        joins: [
          {
            table: 'input',
            join_eql: `source_input_id=input.id AND input.plugin_id='${values.pluginId}'`,
          },
        ],
        conditions: [
          { eql: 'id_type=\'remote_person_id\'' },
        ],
      }),
    },
  },
  transforms: {
    id,
    appendRemotePersonId: {
      description: 'Prepend a remote_person_id field to data',
      bindings: {
        remoteIds: {
          path: 'sql.query',
          options: {
            table: 'person_identifier',
            lookup: ['person_id'],
            conditions: [
              { eql: 'id_type=\'remote_person_id\'' },
            ],
          },
        },
      },
      transform: ({ batch }) => {
        batch.forEach((data) => {
          const { remoteIds, ...rest } = data;
          return {
            remote_person_id: remoteIds?.[0].id_value,
            ...rest,
          };
        });
      },
    },
  },
};
