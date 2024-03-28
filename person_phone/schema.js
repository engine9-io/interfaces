module.exports = {
  tables: [
    {
      name: 'person_phone',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: 'string',
        preference_order: {
          type: 'int',
          description: 'Order in the preference stack, 0 is first',
        },
        phone: 'string',
        sms_status: {
          type: 'string',
          nullable: false,
          default_value: 'Not Subscribed',
          values: [
            'Not Subscribed',
            'Subscribed',
            'Unsubscribed',
          ],
        },
        sms_deliverability_score: {
          type: 'int',
          description: 'Score representating deliverability status of sms, e.g. undeliverable(0), deliverable(1), higher values mean different things',
          nullable: false,
          default_value: 1,
        },
        call_status: {
          type: 'string',
          nullable: false,
          default_value: 'Not Subscribed',
          values: [
            'Not Subscribed',
            'Subscribed',
            'Unsubscribed',
          ],
        },
        date_created: 'date_created',
        last_modified: 'last_modified',
        source_plugin_id: 'foreign_id',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
