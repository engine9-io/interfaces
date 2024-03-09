module.exports = {
  tables: [
    {
      name: 'person_email',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: 'string',
        preference_order: {
          type: 'int',
          description: 'Order in the preference stack, 0 is first',
        },
        email: 'string',
        opt_in: {
          type: 'boolean',
          nullable: false,
          default_value: false,
        },
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
