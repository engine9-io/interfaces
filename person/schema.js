module.exports = {
  tables: [
    {
      name: 'person',
      columns: {
        id: 'id',
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
    },
    {
      name: 'person_identifiers',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: 'string',
        value: 'string',
      },
      indexes: [
        'value',
      ],
    },
  ],
};
