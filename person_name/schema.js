module.exports = {
  tables: [
    {
      name: 'person',
      columns: {
        id: 'id',
        person_id: 'person_id',
        title: 'string',
        given_name: 'string',
        family_name: 'string',
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
      indexes: [
        { columns: 'person_id', unique: true },
      ],
    },
  ],
};
