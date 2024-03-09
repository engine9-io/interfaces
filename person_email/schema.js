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
        deliverability_status: {
          type: 'string',
          description: 'Current status of email, e.g. active, undeliverable, etc.  Different than Opt-In',
          nullable: false,
          default_value: 'active',
        },
        source: 'string',
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
