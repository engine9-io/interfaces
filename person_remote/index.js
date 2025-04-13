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
    all: {
      form: {},
      name: 'All remote people',
      optionsToEQL: (options) => ({
        table: 'person_identifier',
        columns: ['person_id'],
        joins: [
          {
            table: 'input',
            join_eql: `source_input_id=input.id AND input.plugin_id='${options.pluginId}'`,
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
      transform: ({ batch, remoteIds }) => {
        const idMap = remoteIds.reduce((a, b) => {
          // quick lookup map
          a[b.person_id] = (a[b.person_id] || []).concat(b); return a;
        }, {});
        batch.forEach((data) => {
          data.remote_person_id = idMap[data.person_id]?.[0]?.id_value || null;
        });
      },
    },
  },
};
