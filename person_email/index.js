const metadata = {
  name: '@engine9-io/interfaces/person_email',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0',
  },
};

const schema = require('./schema');
const id = require('./transforms/inbound/extract_identifiers');
const upsert = require('./transforms/inbound/upsert_tables');
const search = require('./search');
const appendEmail = require('./transforms/outbound/appendEmail');

module.exports = {
  metadata,
  schema,
  transforms: {
    id,
    upsert,
    appendEmail,
  },
  search,
  segments: {
    subscribed: {
      name: 'People with Subscribed Email',
      search: {
        and: [
          {
            path: 'local$@engine9-io/interfaces/person_email:search:emails',
            options: {
              subscriptionStatus: 'Subscribed',
            },
          },
        ],
      },
    },
  },
};
