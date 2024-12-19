module.exports = {
  tables: [
    {
      name: 'segment',
      columns: {
        id: 'id',
        source_plugin_id: 'id_uuid', // can't be null, must have a value
        remote_segment_id: 'string',
        category: 'string', // A arbitrary type, user facing, not to be used for logic
        name: 'string',
        query: 'json',
        build_type: {
          type: 'enum',
          nullable: false,
          default_value: 'query',
          values: [
            'query', // built by the query
            'scheduled_query', // built on a schedule by the query
            'remote_count', // no person records, just counts, pulled from remote site
            'remote', // pulled from remote site
            'manual', // created outside normal processing
          ],
        },
        build_schedule: 'string',
        build_status: 'string',
        build_status_modified_at: 'modified_at',
        last_built: 'datetime',
        people: 'int', // engine9 count
        reported_people: 'int', // reported by outside parties
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
