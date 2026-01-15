export const tables = [
  {
    name: 'person_phone',
    columns: {
      id: 'id',
      person_id: 'person_id',
      phone_type: {
        type: 'string',
        nullable: false,
        default_value: 'Personal',
        values: ['Personal', 'Cell', 'Home', 'Work', 'Other']
      },
      phone: 'string',
      preference_order: {
        type: 'int',
        description: 'Order in the preference stack, 0 is first'
      },
      sms_status: {
        type: 'string',
        nullable: false,
        default_value: 'Not Subscribed',
        values: ['Not Subscribed', 'Subscribed', 'Unsubscribed', 'Bouncing']
      },
      sms_deliverability_score: {
        type: 'int',
        description:
          'Score representating deliverability status of sms, e.g. undeliverable(0), deliverable(1), higher values mean different things',
        nullable: false,
        default_value: 1
      },
      call_status: {
        type: 'string',
        nullable: false,
        default_value: 'Not Subscribed',
        values: ['Not Subscribed', 'Subscribed', 'Unsubscribed']
      },
      phone_hash_v1: 'hash',
      source_input_id: 'foreign_uuid',
      created_at: 'created_at',
      modified_at: 'modified_at'
    },
    indexes: [{ columns: 'person_id' }, { columns: ['phone', 'person_id'], unique: true }]
  }
];
export default {
  tables
};
