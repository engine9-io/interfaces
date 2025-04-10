const placeholder = {
  transaction_count: null,
  transaction_revenue: null,
  recurring_transactions: null,
  recurring_revenue: null,
  first_transaction_id: null,
  first_transaction_date: null,
  first_transaction_amount: null,
  last_transaction_id: null,
  last_transaction_date: null,
  last_transaction_amount: null,
  smallest_transaction_id: null,
  smallest_transaction_date: null,
  smallest_transaction_amount: null,
  largest_transaction_id: null,
  largest_transaction_date: null,
  largest_transaction_amount: null,
  first_recurring_transaction_id: null,
  last_recurring_transaction_id: null,
};

module.exports = {
  bindings: {
    transactions: {
      path: 'sql.query',
      options: {
        table: 'transaction',
        columns: [
          'person_id',
          { eql: 'count(*)', name: 'transaction_count' },
          { eql: 'sum(amount)', name: 'transaction_revenue' },
          { eql: 'min(amount)', name: 'smallest_transaction_amount' },
          { eql: 'max(amount)', name: 'largest_transaction_amount' },
        ],
        lookup: ['person_id'],
        // conditions: [{ eql: 'id_type=\'remote_person_id\'' },],
        groupBy: [
          { eql: 'person_id' },
        ],
      },
    },
  },
  async transform({ batch, transactions }) {
    if (batch.length === 0) return;

    batch.forEach((o) => {
      Object.assign(o, placeholder, transactions.find((t) => o.person_id === t.person_id));
    });
  },
};
