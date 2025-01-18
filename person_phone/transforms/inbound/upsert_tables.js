const schema = require('../../schema');

const { columns } = schema.tables.find((d) => d.name === 'person_phone');

module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tables.upsert' },
  },

  async transform({ batch, tablesToUpsert }) {
    batch.forEach((o) => {
      if (!o.phone) return;
      tablesToUpsert.person_phone = tablesToUpsert.person_phone || [];
      const vals = {};
      Object.keys(columns).forEach((name) => {
        const def = columns[name];
        if (o[name] !== undefined) { // if it's specified
          if (o[name] === null) { // but null
            if (def?.nullable === false) { // and not nullable
              vals[name] = def?.default_value || '';
            } else {
              vals[name] = null;
            }
          } else {
            vals[name] = o[name];
          }
        }
      });
      tablesToUpsert.person_phone.push(vals);
    });

    return batch;
  },
};
