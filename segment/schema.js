module.exports = {
  tables: [
    {
      name: 'segment',
      columns: {
        id: 'id',
        source_plugin_id: 'foreign_id',
        remote_segment_id: 'string',
        label: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [],
    },
    {
      name: 'person_segment',
      columns: {
        id: 'id',
        person_id: 'person_id',
        segment_id: 'foreign_id',
      },
    },
  ],
};
