{
  const o = {
    object: 'person_email',
    label: 'Email',
    plural: 'Emails',
    description: 'Core Email Addresses',
    schema: {
      person_id: {

      },
      email: {},
      created_at: {},
      modified_at: {},
    },
    layouts: {
      list: {
        components: {
          email: {
            component: 'DataTable',
            object: 'person',
            fields: [
              'person_id',
              'email',
              'created_at',
              'modified_at',
            ],
            conditions: [{ fql: 'length(acquisition_source)>0' }],
            order_by: { fql: 'sum(acquisition_cost)', order_by_direction: 'DESC' },
            limit: 50,
            columns: [
              { label: 'Name' },
              { label: 'Date Created', sql: '', format: 'date' },
            ],
          },
        },
      },
      edit: {
        components: {
          form: {
          },
        },
      },
    },

  };
  module.exports = o;
}
