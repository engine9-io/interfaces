module.exports = {
  tables: [
    {
      name: 'plugin',
      columns: {
        id: 'id',
        path: 'string',
        label: 'string',
        nickname: 'string',
        table_prefix: 'string',
        deployed_version: 'string',
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
    },
    {
      name: 'plugin_history',
      columns: {
        id: 'id',
        plugin_id: 'foreign_id',
        path: 'string',
        deployed_version: 'string',
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
    },
  ],
};
