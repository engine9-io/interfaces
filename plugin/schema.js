module.exports = {
  tables: [
    {
      name: 'plugin',
      columns: {
        id: 'id_uuid',
        path: 'string',
        name: 'string',
        nickname: 'string',
        table_prefix: 'string',
        deployed_version: 'string',
        remote_plugin_id: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: 'id', primary: true },
      ],
    },
    {
      name: 'plugin_history',
      columns: {
        id: 'id',
        plugin_id: 'id_uuid', // can't be null, must have a value
        path: 'string',
        deployed_version: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: 'id', primary: true },
      ],
    },
  ],
};
