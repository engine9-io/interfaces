module.exports = {
  bindings: {
    tablesToUpsert: { path: 'sql.tables.upsert' },
  },
  async transform({ batch, tablesToUpsert }) {
    tablesToUpsert.person_segment = tablesToUpsert.person_segment || [];
    batch.forEach((o) => {
      if (!o.segment_ids) return;
      const segmentIds = String(o.segment_ids || '').split(',').map((d) => d.trim()).filter(Boolean);
      if (segmentIds.length === 0) return;

      segmentIds.forEach((sid) => tablesToUpsert.person_segment.push(
        {
          id: null,
          person_id: o.person_id,
          segment_id: sid,
        },
      ));
    });

    return batch;
  },
};
