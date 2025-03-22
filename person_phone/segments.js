module.exports = [
  {
    name: 'Textable People',
    search: {
      include: [
        {
          table: 'person_phone',
          conditions: [{
            type: 'EQUALS',
            values: [{
              ref: { column: 'sms_status' },
            }, {
              value: { value: 'Subscribed' },
            }],
          }],
        },
      ],
    },
  },
];
