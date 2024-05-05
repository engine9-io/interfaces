module.exports = {
  tables: [
    {
      name: 'person_phone',
      columns: {
        id: 'id',
        person_id: 'person_id',
        phone_type: {
          type: 'string',
          nullable: false,
          default_value: 'Personal',
          values: [
            'Personal',
            'Work',
            'Other',
          ],
        },
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
        created_at: 'created_at',
        modified_at: 'modified_at',
        source_extension_id: 'foreign_id',
      },
      indexes: [
        { columns: 'person_id' },
      ],
    },
  ],
};
