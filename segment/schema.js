module.exports = {
  tables: [
    {
      name: 'segment',
      columns: {
        id: 'id',
        source_plugin_id: 'foreign_id',
        remote_segment_id: 'string',
        type: 'string', // A arbitrary type, not to be used for logic
        name: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
        build_mechanism: {
          type: 'enum',
          nullable: false,
          default_value: 'static',
          values: [
            'static',
            'query',
          ],
        },
        build_schedule: 'string',
        build_query_id: 'foreign_id',
        last_built: 'datetime',
        people: 'int', // engine9 count
        reported_people: 'int', // reported by outside parties
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
