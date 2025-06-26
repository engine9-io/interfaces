module.exports = [
  {
    name: 'Customers',
    search: {
      allOf: [
        {
          table: 'transaction',
        },
      ],
    },
  },
];
