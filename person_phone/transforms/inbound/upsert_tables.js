const fields = [
  'person_id',
  'remote_phone_id',
  'remote_person_id',
  'date_created',
  'last_modified',
  'do_not_call',
  'phone',
  'phone_hash_v1',
  'source_input_id',
  'primary',
  'phone_type',
  'preference_order',
  'sms_status',
  'sms_deliverability_score',
  'call_status',
];
module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tables.upsert' },
  },

  async transform({ batch, tablesToUpsert }) {
    batch.forEach((o) => {
      if (!o.phone) return;
      tablesToUpsert.person_phone = tablesToUpsert.person_phone || [];
      const vals = {};
      fields.forEach((f) => {
        if (o[f] !== undefined) vals[f] = o[f];
      });
      tablesToUpsert.person_phone.push(vals);
    });

    return batch;
  },
};
