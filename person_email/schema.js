module.exports = {
  tables: [
    {
      name: 'person_email',
      columns: {
        id: 'id',
        person_id: 'person_id',
        email: 'string',
        type: 'string',
        opt_in: {
          type: 'boolean',
          nullable: false,
          default_value: false,
        },
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
    },
  ],
};
