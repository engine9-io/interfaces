module.exports = {
  tables: [
    {
      name: 'message',
      columns: {
        id: 'id',
        message_set_id: 'foreign_id',
        name: 'string',
        publish_date: 'datetime',
        source_plugin_id: 'foreign_id',
      },
    },
    {
      name: 'message_set',
      columns: {
        id: 'id',
        name: 'string',
        source_plugin_id: 'foreign_id',
        remote_message_set_id: 'string',
        remote_message_set_name: 'string',
      },
      indexes: [
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
  ],
};
