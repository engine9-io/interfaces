module.exports = {
  searchForm: {
    phones: {
      title: 'Phones',
      type: 'object',
      properties: {
        phoneMatch: {
          type: 'string',
        },
        subscription_status: {
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
