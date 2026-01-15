export default [
  {
    name: 'Textable People',
    search: {
      and: [
        {
          table: 'person_phone',
          conditions: [
            {
              type: 'EQUALS',
              values: [
                {
                  ref: { column: 'sms_status' }
                },
                {
                  value: { value: 'Subscribed' }
                }
              ]
            }
          ]
        }
      ]
    }
  }
];
