import handlebars from 'handlebars';

const moduleExports = {
  async transform({ batch, options }) {
    if (!options._compiledMap) {
      if (!options?.map) {
        throw new Error('Error with transform, no options.map provided');
      }
      options._compiledMap = {};
      Object.entries(options.map).forEach(([k, source]) => {
        if (k === '*') {
          options._compiledMap['*'] = '*'; // just applies all the other fields
        } else {
          options._compiledMap[k] = handlebars.compile(source);
        }
      });
    }
    const newBatch = batch.map((o) => {
      const out = {};
      Object.entries(options._compiledMap).forEach(([k, func]) => {
        if (k === '*') {
          Object.assign(out, o);
        } else if (out[k] === undefined) {
          // first one wins, specify it first if you want ahead of the '*'
          out[k] = func(o);
        }
      });
      return out;
    });
    return { batch: newBatch };
  }
};

export default moduleExports;
