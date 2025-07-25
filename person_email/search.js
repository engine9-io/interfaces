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
          subscriptionStatus: {
            type: 'string',
            enum: [
              'Not Subscribed',
              'Subscribed',
              'Unsubscribed',
            ],
          },
        },
        required: [

        ],
      },
    },
    /* map from provided user data into an EQL structure */
    optionsToEQL(options) {
      const { emailMatch, subscriptionStatus } = options;
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
      if (subscriptionStatus) {
        conditions.push({
          type: 'EQUALS',
          values: [{
            ref: { column: 'subscription_status' },
          }, {
            value: { value: subscriptionStatus },
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
