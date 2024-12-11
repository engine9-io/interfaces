module.exports = {
  tables: [
    {
      name: 'job',
      columns: {
        id: 'id',
        account_id: 'string',
        plugin_id: 'string',
        status: {
          type: 'enum',
          nullable: false,
          default_value: 'pending',
          values: [
            'pending',
            'started',
            'complete',
            'error',
            'paused',
            'kill_sent',
            'killing',
            'sent_to_queue',
          ],
        },
        worker_path: 'string',
        worker_method: 'string',
        start_after: 'datetime',
        options: 'json',
        /* updated during processing */
        started_at: 'datetime',
        progress: 'json', // User progress messages, and perhaps %complete
        checkpoints: 'json', // checkpoints let a job pause and resume

        /* Populated on completion */
        output: 'json',
        records: 'bigint', // Number of records processed
        completed_at: 'datetime',

        errors: 'json',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: ['account_id'] },
        { columns: ['status'] },
      ],
    },
  ],
};
