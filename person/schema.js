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
        type: 'string', // not actively used, but for future use in case we need to do deeper ID logic
        value: 'string',
      },
      indexes: [
        { columns: ['value'] },
      ],
    },
  ],
};
