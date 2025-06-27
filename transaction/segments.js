module.exports = [
  {
    name: 'Customers',
    search: {
      and: [
        {
          table: 'transaction',
        },
      ],
    },
  },
];
