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
    },
    {
      name: 'message_set',
      columns: {
        id: 'id',
        name: 'string',
        source_extension_id: 'foreign_id',
        remote_message_set_id: 'string',
        remote_message_set_name: 'string',
      },
    },
    {
      name: 'campaign',
      columns: {
        id: 'id',
        name: 'string',
        source_extension_id: 'foreign_id',
        remote_campaign_id: 'string',
        remote_campaign_name: 'string',
      },
    },
  ],
};
