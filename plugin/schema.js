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
        schema: 'json', // Not all plugins need to support file based schemas, like per-account custom fields
        transforms: 'json', // Not all plugins need to support file based transforms, like per-account custom fields
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [
        { columns: 'id', primary: true },
        { columns: 'remote_plugin_id', unique: true }
      ]
    },
    {
      name: 'plugin_history',
      columns: {
        id: 'id',
        plugin_id: 'id_uuid', // can't be null, must have a value
        path: 'string',
        deployed_version: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: 'id', primary: true }]
    },
    {
      name: 'setting',
      columns: {
        id: 'id',
        plugin_id: 'foreign_uuid',
        name: 'string',
        value: 'string'
      },
      indexes: [
        { columns: 'id', primary: true },
        { columns: 'plugin_id,name', unique: true }
      ]
    },
    {
      name: 'input',
      columns: {
        id: 'id_uuid',
        plugin_id: 'id_uuid', // can't be null, must have a value
        remote_input_id: 'string', // The remote id for this input, unique across the plugin
        remote_input_name: 'string', // The remote name -- a human name for this input -- e.g. Form Name, message name
        input_type: 'string', // Type of input, e.g. message, remote_person, petition, signup_form, advocacy_action, etc
        min_timeline_ts: 'datetime', // Type of input, e.g. message, petition, signup_form, advocacy_action, etc
        max_timeline_ts: 'datetime', // Type of input, e.g. message, petition, signup_form, advocacy_action, etc
        metadata: 'json', // other metadata about the input, etc,
        data_path: 'string', // where the source data lives for this input, a directory or a packet
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [
        { columns: 'id', primary: true },
        { columns: 'plugin_id,remote_input_id', unique: true }
      ]
    }
  ]
};
