module.exports = {
  tables: [
    {
      name: 'tag',
      columns: {
        id: 'uuid',
        table_name: 'string',
        tag_category: 'string',
        tag: 'string',
      },
    },
    {
      name: 'tag_row',
      columns: {
        id: 'id',
        tag_id: 'foreign_uuid',
        row_id: 'id',
      },
    },
  ],
};
