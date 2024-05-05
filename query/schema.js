module.exports = {
  tables: [
    {
      name: 'query',
      columns: {
        id: 'id',
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
