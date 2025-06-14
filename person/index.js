const metadata = {
  name: '@engine9-io/interfaces/person',
  version: '1.0.0',
  schemas: [
    'schema.js',
  ],
};

const schema = require('./schema');
const upsert = require('./transforms/inbound/upsert_tables');
const simpleMap = require('./transforms/simpleMap');
const appendName = require('./transforms/outbound/appendName');

const transforms = {
  upsert,
  simpleMap,
  appendName,
};

module.exports = {
  metadata,
  schema,
  transforms,
  search: {
    ids: {
      form: {
        emails: {
          title: 'Ids',
          type: 'object',
          properties: {
            ids: {
              type: 'string',
            },
          },
        },
      },
      optionsToEQL: (options) => {
        const { ids } = options;
        let arr = ids;
        if (typeof ids === 'string')arr = ids.split(',');
        if (arr.length === 0) arr = [0];
        return {
          table: 'person',
          columns: ['id'],
          conditions: [
            { eql: `id in (${arr.map((p) => parseInt(p, 10)).join(',')})` },
          ],
        };
      },
    },
  },

};
