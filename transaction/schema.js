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
        source_code_id: 'foreign_id',
        remote_transaction_id: 'string',
        amount: 'currency',
        refund_amount: 'currency',
        recurs_id: 'int',
        recurring_number: 'int',
      },
    },
  ],
};
