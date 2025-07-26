module.exports = {
  subscribers: {
    name: 'Email Subscribers',
    search: {
      and: [
        {
          path: 'local$@engine9-io/interfaces/person_email:search:emails',
          options: {
            subscriptionStatus: 'Subscribed',
          },
        },
      ],
    },
  },
};
