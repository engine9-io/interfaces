export const tables = [
  {
    name: 'transaction',
    columns: {
      id: 'id_uuid',
      ts: 'datetime',
      input_id: 'uuid', // keep as uuid because it's required
      entry_type_id: 'int',
      person_id: 'person_id',
      amount: 'currency',
      refund_amount: 'currency',
      recurs_id: {
        type: 'int',
        nullable: false,
        default_value: 0
      },
      recurring_number: 'int',
      remote_entry_id: 'string',
      given_name: 'string',
      family_name: 'string',
      email: 'string',
      remote_page_name: 'string',
      source_code_id: 'source_code_id',
      override_source_code_id: 'source_code_id',
      final_source_code_id: 'source_code_id',
      recommended_message_id: 'uuid',
      override_message_id: 'uuid',
      final_message_id: 'uuid',
      extra: 'json'
    },
    indexes: [
      { columns: 'id', primary: true },
      { columns: 'ts' },
      { columns: 'person_id' },
      { columns: 'remote_entry_id' }
    ]
  }
];
export default {
  tables
};
