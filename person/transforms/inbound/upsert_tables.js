module.exports = {
  bindings: {
    tablesToUpsert: { path: 'sql.tables.upsert' },
  },
  async transform({
    batch, tablesToUpsert,
  }) {
    if (batch.length === 0) return;

    batch.forEach((o) => {
      if (o.given_name || o.family_name) {
        if (!o.person_id) throw new Error('Cannot update name, no person_id');

        tablesToUpsert.person = (tablesToUpsert.person || []);
        tablesToUpsert.person.push({
          id: o.person_id,
          given_name: o.given_name,
          family_name: o.family_name,
        });
      }
    });
  },
};
