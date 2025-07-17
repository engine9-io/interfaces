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
    person: {
      form: {
        ids: {
          title: 'Person Ids (comma delimited)',
          type: 'string',
        },
        givenName: {
          title: 'First Name',
          type: 'string',
        },
        familyName: {
          title: 'Last Name',
          type: 'string',
        },
      },
      optionsToEQL: (options) => {
        const { ids, givenName = '', familyName = '' } = options;
        const conditions = [];
        if (ids) {
          let arr = ids || '';
          if (typeof ids === 'string')arr = ids.split(',');
          if (arr.length === 0) arr = [0];
          conditions.push({ eql: `id in (${arr.map((p) => parseInt(p, 10)).join(',')})` });
        }

        if (givenName.length > 0) conditions.push({ eql: `given_name like '${givenName}'` });
        if (familyName.length > 0) conditions.push({ eql: `family_name like '${familyName}'` });

        return {
          table: 'person',
          columns: ['id'],
          conditions,
        };
      },
    },
  },

};
