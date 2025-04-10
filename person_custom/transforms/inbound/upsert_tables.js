module.exports = {
  bindings: {
    tablesToUpsert: { path: 'sql.tables.upsert' },
  },
  type: 'upsert',

  async transform({ batch, options = {}, tablesToUpsert }) {
    const {
      table,
      // schema,
      columns,
    } = options;

    batch.forEach((o) => {
      const vals = {};
      let hasData = false;
      columns.forEach((f) => {
        const v = o[`${table}.${f.name}`];
        if (v !== undefined) {
          hasData = true;
          vals[f.name] = v;
        }
      });
      if (hasData) {
        tablesToUpsert[table] = (tablesToUpsert[table] || []).concat(vals);
      }
    });

    return batch;
  },
};
