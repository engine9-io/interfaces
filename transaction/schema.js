module.exports = {
  tables: [
    {
      name: 'transaction',
      columns: {
        id: 'id',
        person_id: 'person_id',
        remote_plugin_id: 'string',
        remote_transaction_id: 'string',
        amount: 'currency',
        refund_amount: 'currency',
        recurs_id: 'int',
        recurring_number: 'int',
        source_code_id: 'foreign_id',
      },
    },
  ],
};
