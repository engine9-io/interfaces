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
        ],
        lookup: ['person_id'],
        conditions: [
          // { eql: 'id_type=\'remote_person_id\'' },
        ],
      },
    },
  },
  transform: ({ batch, emails }) => {
    const emailMap = emails.reduce((a, b) => {
      a[b.person_id] = a[b.person_id] || b.email;
      return a;
    }, {});
    batch.forEach((data) => {
      data.email = emailMap[data.person_id] || null;
    });
  },
};
