module.exports = [
  {
    name: 'Customers',
    search: {
      include: [
        {
          table: 'transaction',
        },
      ],
    },
  },
];
