module.exports = {
  tables: [
    {
      name: 'person_address',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: {
          type: 'string',
          values: ['', 'Home', 'School', 'Office'],
        },
        street_1: 'string',
        street_2: 'string',
        city: 'string',
        region: 'string',
        postal_code: 'string',
        country: 'string',
        subscription_status: {
          type: 'string',
          nullable: false,
          default_value: 'Not Subscribed',
          values: [
            'Blocked',
            'Bounced',
            'Not Subscribed',
            'Subscribed',
            'Unsubscribed',
          ],
        },
        deliverability_score: {
          type: 'int',
          description: 'Score representating deliverability status of address, e.g. undeliverable(0), deliverable(1), higher values mean different things',
          nullable: false,
          default_value: 1,
        },
        preference_order: {
          type: 'int',
          description: 'Order in the preference stack, 0 is first',
          nullable: false,
          default_value: 0,
        },
        created_at: 'created_at',
        modified_at: 'modified_at',
        source_plugin_id: 'foreign_id',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
