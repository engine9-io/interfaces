module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tables.upsert' },
  },

  async transform({ batch, tablesToUpsert }) {
    tablesToUpsert.person_phone = tablesToUpsert.person_phone || [];
    batch.forEach((o) => {
      tablesToUpsert.person_phone.push({
        person_id: o.person_id,
        phone: o.phone,
        type: o.type || 'mobile', // set a mobile phone as a default
      });
    });

    return batch;
  },
};
