module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tables.upsert' },
  },

  async transform({ batch, options = {}, tablesToUpsert }) {
    const {
      table,
      // schema,
      columns,
    } = options;
    tablesToUpsert[table] = tablesToUpsert[table] || [];
    batch.forEach((o) => {
      const vals = {};
      columns.forEach((f) => {
        const v = o[`${table}.${f}`];
        if (v !== undefined) vals[f] = v;
      });
      tablesToUpsert[table].push(vals);
    });

    return batch;
  },
};
