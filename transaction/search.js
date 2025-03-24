module.exports = {
  searchForm: {
    phones: {
      title: 'Transactions',
      type: 'object',
      properties: {
        amount: {
          type: 'number',
        },
        filterType: {
          type: 'string',
        },
      },
      required: [

      ],
    },
  },
  /* map from data coming from a filter to an include/exclude stye filter */
  searchFormToEQL(data) {
    const { phones } = data;
    const { phoneMatch } = phones;
    return {
      table: 'person_phone',
      conditions: [{
        type: 'LIKE',
        values: [{
          ref: { column: 'phone' },
        }, {
          value: { value: phoneMatch },
        }],
      }],

    };
  },
};
