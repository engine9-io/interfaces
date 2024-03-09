module.exports = {
  tables: [
    {
      name: 'tag',
      columns: {
        id: 'id',
        table_name: 'string',
        tag_category: 'string',
        tag: 'string',
      },
    },
    {
      name: 'tag_row',
      columns: {
        id: 'id',
        tag_id: 'id',
        row_id: 'id',
      },
    },
  ],
};
