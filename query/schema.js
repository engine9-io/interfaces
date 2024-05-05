module.exports = {
  tables: [
    {
      name: 'query',
      columns: {
        id: 'id',
        label: 'string',
        query: 'json',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [],
    },
  ],
};
