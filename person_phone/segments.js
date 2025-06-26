module.exports = [
  {
    name: 'Textable People',
    search: {
      allOf: [
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
