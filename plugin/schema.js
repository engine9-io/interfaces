module.exports = {
  tables: [
    {
      name: 'plugin',
      columns: {
        id: 'id_string',
        path: 'string',
        name: 'string',
        nickname: 'string',
        table_prefix: 'string',
        deployed_version: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
    },
    {
      name: 'plugin_history',
      columns: {
        id: 'id',
        plugin_id: 'foreign_id',
        path: 'string',
        deployed_version: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
    },
  ],
};
