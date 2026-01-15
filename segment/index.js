import schema from './schema.js';
import search from './search.js';
import upsert from './transforms/inbound/upsert.js';
const metadata = {
  name: '@engine9-io/interfaces/segment',
  version: '1.0.0',
  dependencies: {
    '@engine9-io/interfaces/person': '>1.0.0'
  }
};
export const transforms = {
  upsert
};
export { metadata };
export { schema };
export { search };
export default {
  metadata,
  schema,
  search,
  transforms
};
