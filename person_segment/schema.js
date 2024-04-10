module.exports = {
  tables: [
    {
      name: 'segment',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
        email_hash_v1: 'hash',
        source_plugin_id: 'foreign_id',
        remote_segment_id: 'string',
        label: 'string',
        sublabel: 'string',
        people: 'int', // number of people
        reported_people: 'int', // number of people reported from outside system
      },
      indexes: [
        { columns: 'person_id' },
      ],
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
