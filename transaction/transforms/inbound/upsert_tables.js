const { getEntryTypeId, getTimelineEntryUUID } = require('@engine9/packet-tools');

module.exports = {
  bindings: {
    tablesToUpsert: { type: 'sql.tables.upsert' },
  },
  async transform(opts) {
    const {
      batch, tablesToUpsert,
    } = opts;
    if (batch.length === 0) return;
    tablesToUpsert.transaction = (tablesToUpsert.transaction || []);

    batch.forEach((o) => {
      o.entry_type_id = getEntryTypeId(o);
      o.id = getTimelineEntryUUID(o);
      tablesToUpsert.transaction.push(o);
    });
  },
};
