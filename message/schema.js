module.exports = {
  tables: [
    {
      name: 'message',
      columns: {
        id: 'id_uuid',
        message_set_id: 'foreign_id',
        channel: 'string',
        name: 'string',
        status: 'string',
        publish_date: 'datetime',
        primary_source_code: { type: 'string', length: 180 },
        primary_source_code_override: { type: 'string', length: 180 },
        final_primary_source_code: { type: 'string', length: 180 },
        source_remote_id: 'string',
        source_submodule: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: 'id', primary: true }, { columns: ['publish_date'] }, { columns: ['message_set_id'] }]
    },
    {
      name: 'message_set',
      columns: {
        id: 'id',
        campaign_id: 'foreign_id',
        name: 'string',
        remote_message_set_id: 'string',
        remote_message_set_name: 'string',
        message_template_id: 'foreign_uuid',
        type: 'string',
        source_code_format: 'string',
        // default_content: 'json', //unused?
        default_variables: 'json',
        required_targeting: 'json', // This is set initially, and can't be changed by users
        targeting: 'json',
        sequencing: 'json', // sequence of messages
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: ['campaign_id', 'remote_message_set_id'], unique: true }]
    },
    {
      name: 'campaign',
      columns: {
        id: 'id',
        name: 'string',
        channel: 'string',
        plugin_id: 'id_uuid', // can't be null, must have a value
        remote_campaign_id: 'string',
        remote_campaign_name: 'string',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: ['plugin_id', 'remote_campaign_id'], unique: true }]
    },
    {
      name: 'message_content',
      columns: {
        id: 'id',
        message_id: 'foreign_uuid',
        content: 'json',
        remote_data: 'json',
        variables: 'json',
        targeting: 'json',
        estimated_targets: 'int',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: ['message_id'], unique: true }]
    },
    {
      name: 'message_statistics',
      columns: {
        id: 'id',
        message_id: 'foreign_uuid',
        statistics: 'json',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: ['message_id'], unique: true }]
    },
    {
      name: 'message_queue',
      columns: {
        id: 'id',
        message_id: 'foreign_uuid',
        publish_metadata: 'json',
        error: 'json',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: ['message_id'], unique: true }]
    },
    {
      name: 'message_summary',
      type: 'view',
      table: 'message',
      joins: [
        {
          table: 'message_statistics',
          join_eql: 'message.id = message_statistics.message_id',
          type: 'left'
        },
        {
          table: 'message_content',
          join_eql: 'message.id = message_content.message_id',
          type: 'left'
        },
        {
          table: 'message_set',
          join_eql: 'message.message_set_id = message_set.id',
          type: 'left'
        },
        {
          table: 'campaign',
          join_eql: 'message_set.campaign_id = campaign.id',
          type: 'left'
        }
      ],
      columns: {
        id: { eql: 'message.id' },
        message_set_id: { eql: 'message_set.id' },
        channel: { eql: 'message.channel' },
        name: { eql: 'message.name' },
        status: { eql: 'message.status' },
        publish_date: { eql: 'message.publish_date' },
        plugin_id: { eql: 'campaign.plugin_id' },
        source_remote_id: { eql: 'message.source_remote_id' },
        source_submodule: { eql: 'message.source_submodule' },
        final_primary_source_code: { eql: 'message.final_primary_source_code' },
        content: { eql: 'message_content.content' },
        variables: { eql: 'message_content.variables' },
        remote_data: { eql: 'message_content.remote_data' },
        statistics: { eql: 'message_statistics.statistics' },
        created_at: { eql: 'message.created_at' },
        modified_at: { eql: 'GREATEST(message.modified_at,message_content.modified_at,message_statistics.modified_at)' }
      }
    },
    {
      name: 'message_template',
      columns: {
        id: 'id_uuid',
        name: 'string',
        content: 'json',
        created_at: 'created_at',
        modified_at: 'modified_at'
      },
      indexes: [{ columns: 'id', primary: true }]
    }
  ]
};
