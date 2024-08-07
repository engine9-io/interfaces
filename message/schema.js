module.exports = {
  tables: [
    {
      name: 'message_content',
      columns: {
        id: 'id',
        message_id: 'foreign_id',
        content: 'json',
        remote_data: 'json',
      },
      indexes: [
        { columns: ['message_id'], unique: true },
      ],
    },
    {
      name: 'message_set',
      columns: {
        id: 'id',
        campaign_id: 'foreign_id',
        name: 'string',
        source_plugin_id: 'foreign_id',
        remote_message_set_id: 'string',
        remote_message_set_name: 'string',
      },
      indexes: [
        { columns: ['campaign_id'] },
        { columns: ['source_plugin_id', 'remote_message_set_id'], unique: true },
      ],
    },
    {
      name: 'campaign',
      columns: {
        id: 'id',
        name: 'string',
        channel: 'string',
        source_plugin_id: 'foreign_id',
        remote_campaign_id: 'string',
        remote_campaign_name: 'string',
      },
      indexes: [
        { columns: ['source_plugin_id', 'remote_campaign_id'], unique: true },
      ],
    },
    {
      name: 'message',
      columns: {
        id: 'id',
        message_set_id: 'foreign_id',
        channel: 'string',
        label: 'string',
        status: 'string',
        publish_date: 'datetime',
        primary_source_code: { type: 'string', length: 180 },
        primary_source_code_override: { type: 'string', length: 180 },
        final_primary_source_code: { type: 'string', length: 180 },
        source_plugin_id: 'foreign_id',
        source_remote_id: 'string',
      },
      indexes: [
        { columns: ['publish_date'] },
      ],
    },
  ],
};
