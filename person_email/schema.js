module.exports = {
  tables: [
    {
      name: 'person_email',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: 'string',
        email: 'string',
        subscription_status: {
          type: 'string',
          nullable: false,
          default_value: 'Not Subscribed',
          values: [
            'Not Subscribed',
            'Subscribed',
            'Unsubscribed',
          ],
        },
        confirmation_status: {
          type: 'string',
          nullable: false,
          default_value: 'Not Confirmed',
          values: [
            'Not Confirmed',
            'Confirmation Sent',
            'Confirmed',
          ],
        },
        deliverability_score: {
          type: 'int',
          description: 'Score representating deliverability status of email, e.g. undeliverable(0), deliverable(1), higher values mean different things',
          nullable: false,
          default_value: 1,
        },
        preference_order: {
          type: 'int',
          description: 'Order in the preference stack, 0 is first',
          nullable: false,
          default_value: 0,
        },
        date_created: 'date_created',
        last_modified: 'last_modified',
        email_hash_v1: 'hash',
        source_plugin_id: 'foreign_id',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
