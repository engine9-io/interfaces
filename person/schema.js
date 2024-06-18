module.exports = {
  tables: [
    {
      name: 'person',
      columns: {
        id: 'id',
        given_name: 'string',
        family_name: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
    },
    {
      name: 'person_identifier',
      columns: {
        id: 'id',
        person_id: 'person_id',
        source_plugin_id: 'foreign_id',
        id_type: {
          type: 'enum',
          nullable: false,
          default_value: '',
          values: [
            '',
            'remote_person_id',
            'email_hash_v1',
            'phone_hash_v1',
          ],
        },
        id_value: 'id_string',
      },
      indexes: [
        { columns: ['person_id'] },
        { columns: ['id_value'] },
      ],
    },
  ],
};
