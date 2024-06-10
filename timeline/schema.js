module.exports = {
  tables: [
    {
      name: 'timeline',
      columns: {
        uuid: 'uuid',
        entry_date: 'datetime',
        entry_type: 'int',
        person_id: 'person_id',
        source_code_id: 'foreign_id',
        data_location_id: 'foreign_id',
        reference_id: 'foreign_id',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
    {
      name: 'data_location',
      columns: {
        id: 'id',
        source_plugin_id: 'foreign_id',
        current_location_type: 'string',
        current_location: 'string',
        original_location_type: 'string',
        original_location: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
    },
  ],
};
