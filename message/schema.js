module.exports = {
  tables: [
    {
      name: 'message',
      columns: {
        id: 'id',
        name: 'string',
        publish_date: 'datetime',
        source_extension_id: 'foreign_id',
      },
      indexes: [

      ],
    },
  ],
};
