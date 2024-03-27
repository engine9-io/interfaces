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
        email_hash_v1: 'hash',
        opt_in: {
          type: 'boolean',
          nullable: false,
          default_value: false,
        },
        deliverability_status: {
          type: 'string',
          description: 'Current status of email, e.g. deliverable, undeliverable, etc.  Different than Opt-In',
          nullable: false,
          default_value: 'deliverable',
        },
        source_plugin_id: 'id',
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
