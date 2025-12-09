module.exports = {
  tables: [
    {
      name: 'transaction',
      columns: {
        id: 'id_uuid',
        ts: 'datetime',
        input_id: 'uuid', // keep as uuid because it's required
        entry_type_id: 'int',
        person_id: 'person_id',
        source_code_id: 'source_code_id',
        remote_entry_id: 'string',
        amount: 'currency',
        refund_amount: 'currency',
        recurs_id: {
          type: 'int',
          nullable: false,
          default_value: 0
        },
        recurring_number: 'int'
      },
      indexes: [
        { columns: 'id', primary: true },
        { columns: 'ts' },
        { columns: 'person_id' },
        { columns: 'remote_entry_id' }
      ]
    }
  ]
};
