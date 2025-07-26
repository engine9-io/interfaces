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
    optionsToEQL(options) {
      const { phoneMatch } = options;
      return {
        text: `Has a phone number that matches ${phoneMatch}`,
        eql: {
          table: 'person_phone',
          conditions: [{
            type: 'LIKE',
            values: [{
              ref: { column: 'phone' },
            }, {
              value: { value: phoneMatch },
            }],
          }],
        },
      };
    },
  },
};
