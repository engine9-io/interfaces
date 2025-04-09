module.exports = {
  phones: {
    form: {
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
    /* map from provided user data into an EQL structure */
    valuesToEQL(values) {
      const { phoneMatch } = values;
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
  },
};
