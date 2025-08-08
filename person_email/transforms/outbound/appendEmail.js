module.exports = {
  description: 'Append an email',
  bindings: {
    emails: {
      path: 'sql.query',
      options: {
        table: 'person_email',
        columns: [
          'person_id',
          'email',
          'subscription_status',
        ],
        lookup: ['person_id'],
        conditions: [
          // { eql: 'id_type=\'remote_person_id\'' },
        ],
      },
    },
  },
  transform: ({ batch, emails, options = {} }) => {
    const { subscriptionStatus } = options;
    let filter = () => {};
    if (subscriptionStatus) filter = (d) => d.subscription_status === subscriptionStatus;
    const emailMap = emails.filter(filter).reduce((a, b) => {
      a[b.person_id] = a[b.person_id] || b.email;
      return a;
    }, {});
    batch.forEach((data) => {
      // keep existing email if there is one
      data.email = data.email || emailMap[data.person_id] || null;
    });
  },
};
