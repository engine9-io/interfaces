module.exports = {
  customers: {
    name: 'Customers',
    search: {
      and: [
        {
          table: 'transaction',
          columns: ['person_id'],
        },
      ],
    },
  },
};
