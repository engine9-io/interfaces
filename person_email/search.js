module.exports = {
  emails: {
    form: {
      emails: {
        title: 'Emails',
        type: 'object',
        properties: {
          emailMatch: {
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
      const { emailMatch, subscription_status: status } = options;
      const conditions = [];
      if (emailMatch) {
        conditions.push({
          type: 'LIKE',
          values: [{
            ref: { column: 'email' },
          }, {
            value: { value: emailMatch },
          }],
        });
      }
      if (status) {
        conditions.push({
          type: 'EQUALS',
          values: [{
            ref: { column: 'subscription_status' },
          }, {
            value: { value: status },
          }],
        });
      }
      return {
        table: 'person_email',
        conditions,
      };
    },
  },
};
