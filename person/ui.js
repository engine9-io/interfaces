module.exports = {
  object: 'person',
  label: 'Person',
  plural: 'People',
  description: 'Core Person Object',
  layouts: {
    list: {
      components: {
        table: {
          component: 'DataTable',
          object: 'person',
          conditions: [{ fql: 'length(acquisition_source)>0' }],
          order_by: { fql: 'sum(acquisition_cost)', order_by_direction: 'DESC' },
          limit: 50,
          fields: [
            { label: 'Name' },
            { label: 'Date Created', sql: 'created_at', format: 'date' },
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
