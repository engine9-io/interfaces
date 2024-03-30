module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tablesToUpsert' },
  },
  async transform({ batch, tablesToUpsert }) {
    tablesToUpsert.person_address = tablesToUpsert.person_address || [];
    batch.forEach((o) => {
      tablesToUpsert.person_address.push({
        person_id: o.person_id,
        email: o.email,
      });
    });

    return batch;
  },
};
