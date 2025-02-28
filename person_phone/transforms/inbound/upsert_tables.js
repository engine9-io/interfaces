module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tables.upsert' },
    databasePhones: { type: 'sql.query', table: 'person_phone', lookup: ['phone'] },
  },

  async transform({ batch, tablesToUpsert, databasePhones }) {
    batch.forEach((o) => {
      if (!o.phone) return;
      tablesToUpsert.person_phone = tablesToUpsert.person_phone || [];

      // phone should be already cleaned in extract ids

      const matchingPhones = databasePhones.filter((d) => d.phone === o.phone);

      const personPhones = matchingPhones.filter(
        (em) => o.person_id && (em.person_id === o.person_id),
      );
      if (personPhones.length > 1) {
        throw new Error(`Cannot update phone, there are 2 database entries for person_id ${o.person_id} with phone ${o.phone}`);
      }

      if (personPhones[0]) {
        tablesToUpsert.person_phone.push({ ...personPhones[0], ...o });
      } else {
        tablesToUpsert.person_phone.push({
          id: null,
          person_id: o.person_id,
          phone: o.phone,
          subscription_status: o.subscription_status || 'Subscribed',
          ...o,
          source_input_id: o.input_id,
        });
      }
    });

    return batch;
  },
};
