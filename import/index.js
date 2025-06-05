const metadata = {
  name: '@engine9-io/interfaces/import',
  version: '1.0.0',
};

const append = require('./transforms/append');

module.exports = {
  metadata,
  transforms: {
    append,
  },
};
